import { Component, OnDestroy, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaFacade } from '../+state/media.facade';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'libs/ngrx-forms/src/lib/services/event.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MediaAuditDataSource } from '../media-audit/media-audit-datasource';


export interface DialogData {
  animal: string;
  name: string;
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
  mediaForm: FormGroup;
  dataSource: MediaAuditDataSource;

  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: MediaFacade,
    private mediaFacade: MediaFacade,
    private ref: ChangeDetectorRef,
    private evtSvc: EventService,
    public dialogRef: MatDialogRef<AddNewMediaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.dataSource = new MediaAuditDataSource();
  }

  ngOnInit() {
    this.createForm();
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
    this.evtSvc.childEventListner().subscribe(info =>{
      console.log(info); // here you get the message from Child component
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

  createForm(){
    this.mediaForm = this.formBuilder.group({
      uploadsetID: new FormControl(	'',	[Validators.required]),  
      file: new FormControl(	'',	[Validators.required]),
      font: new FormControl(	'',	[Validators.required]),
      size: new FormControl(	'',	[Validators.required]),
      foreColor: new FormControl(	'',	[Validators.required]),
      backColor: new FormControl(	'',	[Validators.required]),
      message: new FormControl(	'',	[Validators.required]),
      style: new FormControl(	'',	[Validators.required]),
      pitch: new FormControl(	'',	[Validators.required]),
      mode: new FormControl(	'',	[Validators.required]),
      direction: new FormControl(	'',	[Validators.required]),
    });
  }

  onSubmit (user: any): void  {
    debugger;
    console.log(user);    
      let url = "https://172.19.32.193/Media_API/api/MediaMaster/PostMediaMaster";     
          const headers = new HttpHeaders()
            // .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(url, this.mediaForm.value).subscribe(res => console.log("Data Post Done"));
  }
  
}
