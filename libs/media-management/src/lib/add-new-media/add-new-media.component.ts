import { Component, OnDestroy, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaFacade } from '../+state/media.facade';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; import { ToastrService } from 'ngx-toastr';
import { EventService } from 'libs/ngrx-forms/src/lib/services/event.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { MediaAuditDataSource } from '../media-audit/media-audit-datasource';
import { MediaMaster, MediaTextMaster, mediaUpload } from '../+state/media.interfaces';
import { Router } from '@angular/router';
import { ColorEvent } from 'ngx-color';
import { environment } from '../../../../../apps/vms-web/src/environments/environment';

export interface DialogData {
  uploadSetId: number;
  type: string;
}

var ddlList: KeyValue[] = [
  {
    name: 'Medias',
    value: 0,
  },
  {
    name: 'Text',
    value: 1,
  },
];

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'uploadSetId',
    placeholder: 'Upload Set ID',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'uploadSetName',
    placeholder: 'Upload Set Name',
    validator: [Validators.required],
  },
  {
    type: 'DROPDOWN',
    name: 'mediaType',
    ddlList: ddlList,
    placeholder: 'Media Type',
    validator: [Validators.required],

  },
];

@Component({
  selector: 'add-new-media',
  templateUrl: './add-new-media.component.html',
  styleUrls: ['./add-new-media.component.css'],
})
export class AddNewMediaComponent implements OnInit, OnDestroy {
  textList: MediaTextMaster[] = [];
  textData = new MediaTextMaster();
  api_url = environment.api_url;
  foreColor: string;
  backColor: string;
  isForeColor: boolean;
  isBackColor: boolean;
  structure$: Observable<Field[]>;
  isLoading: boolean;
  data$: Observable<any>;
  ddlData: any;
  images: any[];
  mediaForm: FormGroup;
  dataSource: MediaAuditDataSource;
  formData = new FormData();
  medias: Object;
  intDate: number;
  uploadsetID: number;
  type: string;
  constructor(
    private router: Router,
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: MediaFacade, private toastr: ToastrService,
    private mediaFacade: MediaFacade, public dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private evtSvc: EventService,
    public dialogRef: MatDialogRef<AddNewMediaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.dataSource = new MediaAuditDataSource();
    this.intDate = +new Date()
  }
  CloseModal() {
    this.dialog.closeAll();
  }
  ngOnInit() {
    this.isForeColor = false;
    this.isBackColor = false;
    this.isLoading = false;
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
    this.evtSvc.childEventListner().subscribe(info => {
      console.log(info); // here you get the message from Child component
    })
    this.type = this.data?.type;
    if (this.data?.uploadSetId) {
      this.uploadsetID = this.data.uploadSetId
    }
    else {
      this.uploadsetID = this.intDate
    }

    console.log(this.data);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const myObject: any = { id: this.uploadsetID };
    const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;

    const options = { params: new HttpParams(httpParams), headers: headers };


    let url = this.api_url + "Media_API/api/MediaMaster/GetMediaMasterById";
    
    this.http.get<MediaMaster[]>(url, options).subscribe(x => {
      debugger;
      this.medias = x;
      console.log(this.medias);
    })
    this.createForm();
  }
  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }
  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }

  createForm() {
    this.mediaForm = this.formBuilder.group({
      uploadsetID: new FormControl('', [Validators.required]),
      files: new FormControl('', [Validators.required]),
      arr: this.formBuilder.array([this.createItem()]),

    });
  }
  addItem() {
    let arr = this.mediaForm.get('arr') as FormArray;
    arr.push(this.createItem());
    this.onTextSubmit();
  }
  createItem() {
    return this.formBuilder.group({
      uploadSetID: new FormControl(this.intDate, [Validators.required]),
      font: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      foreColor: new FormControl('', [Validators.required]),
      backColor: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      style: new FormControl('', [Validators.required]),
      pitch: new FormControl('', [Validators.required]),
      mode: new FormControl('', [Validators.required]),
      blink: new FormControl('', [Validators.required]),
      direction: new FormControl('', [Validators.required]),
      isForeColor: new FormControl(false),
      isBackColor: new FormControl(false)
    })
  }

  onSubmit(): void {
    debugger;
    this.isLoading = true;
    this.formData.append("uploadsetid", this.mediaForm.controls.uploadsetID.value);
    let url = this.api_url + "Media_API/api/MediaMaster/PostMediaMaster";
    //let url = "https://localhost:44364/api/MediaMaster/PostMediaMaster";
    const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Accept', 'application/json');
    this.http.post(url, this.formData, { headers: headers }).subscribe(res => {
      if (res == "1") {
        this.isLoading = false;
        this.toastr.success("Saved successfully", "Success");
        this.router.navigateByUrl('/media-management/media-upload/0');
        this.CloseModal();
      }
      else {
        this.isLoading = false;
        this.toastr.error("Something Went Wrong!");
      }
    });
  }
 
  onTextSubmit() {
    var len = this.mediaForm.controls.arr.value.length;

    len = len - 1;
    let d: MediaTextMaster;
    this.textData.uploadSetId = this.intDate;
    this.textData.ArrangementMode = this.mediaForm.controls.arr.value[len - 1].mode;
    this.textData.AuditedBy = "";
    this.textData.AuditedDate = 0;
    this.textData.AuditedStatus = 0;
    this.textData.BackGroundColor = this.mediaForm.controls.arr.value[len - 1].backColor;
    this.textData.Blink = 0;
    this.textData.CharacterPitch = this.mediaForm.controls.arr.value[len - 1].pitch;
    this.textData.ForeGroundColor = this.mediaForm.controls.arr.value[len - 1].foreColor;
    this.textData.ScrollingDirection = this.mediaForm.controls.arr.value[len - 1].direction;
    this.textData.Message = this.mediaForm.controls.arr.value[len - 1].message;
    this.textList.push(this.textData);
  }

  uploadFile(event) {
    this.formData = new FormData();
    let fileList = event.target.files;
    for (var i = 0; i < fileList.length; i++) {
      this.formData.append('files', fileList[i]);
    }

  }

  handleChange($event: ColorEvent, id, index) {
    console.log($event);
    var l = this.mediaForm.controls.arr.value.length;
    let taskListArrays = this.mediaForm.get('arr') as FormArray;
    if (id == 0) {
      // this.mediaForm.controls.arr.value[l-1].foreColor = $event.color.rgb.r + "," + $event.color.rgb.g + "," + $event.color.rgb.b;
      taskListArrays.controls[index].patchValue({ foreColor: $event.color.rgb.r + "," + $event.color.rgb.g + "," + $event.color.rgb.b });
    }
    else if (id == 1) {
      // this.mediaForm.controls.arr.value[l-1].backColor = $event.color.rgb.r + "," + $event.color.rgb.g + "," + $event.color.rgb.b;
      taskListArrays.controls[index].patchValue({ backColor: $event.color.rgb.r + "," + $event.color.rgb.g + "," + $event.color.rgb.b });
    }



  }
  SelectColor(id, index) {
    let taskListArrays = this.mediaForm.get('arr') as FormArray;
    taskListArrays.controls[index].patchValue({ isForeColor: false });
    taskListArrays.controls[index].patchValue({ isBackColor: false });
  }
  ShowClrBox(id, index) {
    let taskListArrays = this.mediaForm.get('arr') as FormArray;
    if (id == 0) {
      taskListArrays.controls[index].patchValue({ isForeColor: true });
      taskListArrays.controls[index].patchValue({ isBackColor: false });
    }
    else if (id == 1) {
      taskListArrays.controls[index].patchValue({ isForeColor: false });
      taskListArrays.controls[index].patchValue({ isBackColor: true });
    }
  }

  SubmitTextData(){
    let taskListArrays = this.mediaForm.controls.arr.value;
    let url = this.api_url + "Media_API/api/MediaMaster/PostMediaMasterText";
    //let url = "https://localhost:44364/api/MediaMaster/PostMediaMasterText";
    const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Accept', 'application/json');
    this.http.post(url, taskListArrays, { headers: headers }).subscribe(res => {
      if (res == "1") {
        this.isLoading = false;
        this.toastr.success("Saved successfully", "Success");
        this.router.navigateByUrl('/media-management/media-upload/0');
        this.CloseModal();
      }
      else {
        this.isLoading = false;
        this.toastr.error("Something Went Wrong!");
      }
    });
  }
}
