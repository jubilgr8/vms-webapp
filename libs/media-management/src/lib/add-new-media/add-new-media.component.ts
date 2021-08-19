import { Component, OnDestroy, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaFacade } from '../+state/media.facade';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';import { ToastrService } from 'ngx-toastr';
import { EventService } from 'libs/ngrx-forms/src/lib/services/event.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { MediaAuditDataSource } from '../media-audit/media-audit-datasource';
import { MediaMaster, mediaUpload } from '../+state/media.interfaces';
import { Router } from '@angular/router';


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
  structure$: Observable<Field[]>;
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
    private router:Router,
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: MediaFacade,private toastr: ToastrService,
    private mediaFacade: MediaFacade,public dialog: MatDialog,
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
  CloseModal(){
    this.dialog.closeAll();
  }
  ngOnInit() {
    this.createForm();
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
    
    const myObject: any = { id: this.uploadsetID};
    const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;
    
    const options = { params: new HttpParams(httpParams), headers: headers };
    

    let url = "https://172.19.32.193/Media_API/api/MediaMaster/GetMediaMasterById";
    this.http.get<MediaMaster[]>(url, options).subscribe(x => {
      debugger;
      this.medias = x;
      console.log(this.medias);
    })


    //   this.adminFacade.zones$
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((response) => {
    //
    //     if (response) {
    //       this.ref.detectChanges();
    //       for(var zone=0;zone<response.length;zone++)
    //       {
    //
    //         this.ddlData=[{
    //           "name" : response[zone].description,
    //           "value" : response[zone].id
    //         }];
    //       }
    //
    //       ddlList = ddlList.concat(this.ddlData);

    //     } else {
    //       this.adminFacade.getZoneList();
    //     }
    //   });
    // }

    // updateForm(changes: any) {
    //   this.ngrxFormsFacade.updateData(changes);
    // }

    // submit() {
    //   this.facade.submitNewUser();
    // }

    // ngOnDestroy() {
    //   this.ngrxFormsFacade.initializeForm();
    // }
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
      font: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      foreColor: new FormControl('', [Validators.required]),
      backColor: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      style: new FormControl('', [Validators.required]),
      pitch: new FormControl('', [Validators.required]),
      mode: new FormControl('', [Validators.required]),
      direction: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    debugger;

    this.formData.append("uploadsetid", this.mediaForm.controls.uploadsetID.value);
    let url = "https://172.19.32.193/Media_API/api/MediaMaster/PostMediaMaster";
    const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Accept', 'application/json');
    this.http.post(url, this.formData,{headers:headers}).subscribe(res => {
      if(res == "1"){
        this.toastr.success("Saved successfully","Success");
        this.router.navigateByUrl('/media-management/media-upload/0');
        this.CloseModal();
      }
      else {
        this.toastr.error("Something Went Wrong!");
      }
    });
  }

  uploadFile(event) {
    this.formData = new FormData();
    let fileList = event.target.files;
    for(var i=0;i<fileList.length;i++){
      this.formData.append('files',fileList[i]);
    }
    
  }

}
