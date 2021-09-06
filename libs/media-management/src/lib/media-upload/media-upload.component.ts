import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaFacade } from '../+state/media.facade';
import { MediaMaster, mediaUpload, UploadMediaCounts } from '../+state/media.interfaces';
import * as Rx from 'rxjs/Rx';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'libs/ngrx-forms/src/lib/services/event.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddNewMediaComponent } from '../add-new-media/add-new-media.component';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { ViewMediaComponent } from '../view-media/view-media.component';
import { DeleteMediaComponent } from '../delete-media/delete-media.component';
import {environment} from '../../../../../apps/vms-web/src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

var ddlList: KeyValue[] = [
  {
    name: '--Select--',
    value: 0,
  },
  {
    name: 'Medias',
    value: 1,
  },
  {
    name: 'Text',
    value: 2,
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
  selector: 'vms-media-upload',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.css'],
})
export class MediaUploadComponent implements OnInit, OnDestroy {
  textData:any;
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  medias: any;
  uploadMedias: UploadMediaCounts[];
  groupedData: any = [];
  medaUpload:mediaUpload[];
  urls = [];
  api_url = environment.api_url;
  isLoading: boolean = true;
  constructor(private router:Router,
    private authFacade: AuthFacade,
    private ngrxFormsFacade: NgrxFormsFacade,
    private mediaFacade: MediaFacade,
    private ref: ChangeDetectorRef,
    private modalService: NgbModal,
    private evtSvc: EventService,
    public dialog: MatDialog,
    private http: HttpClient,
    private toastr:ToastrService

  ) {
    this.getMediaDetails();
  }
getMediaDetails(){
  this.isLoading = true;
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const options = { headers: headers };
 let url = this.api_url+"Media_API/api/MediaMaster/GetMediaMaster";
 //let url = "https://localhost:44364/api/MediaMaster/GetMediaMaster";
 this.http.get<MediaMaster[]>(url, options).subscribe(x => {
   debugger;
   this.medias = x;
   this.medias.forEach(element => {
     element.dateOfRequest = this.EpochToDate(element.dateOfRequest);
  });
  this.isLoading = false;
    this.ref.detectChanges();
 });
}
  groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}
  ngOnInit(): void {
    this.getMediaDetails();
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
    this.authFacade.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoggedIn) => {
        this.isAuthenticated = isLoggedIn;
      });
      this.evtSvc.childEventListner().subscribe(info =>{
        console.log(info); // here you get the message from Child component
     })
  }
  openVerticallyCentered(type, id?) {
    switch (type) {
      case 'Add':
        const dialogRef =  this.dialog.open(AddNewMediaComponent, {
          width: '850px',
          data: {uploadSetId: id,type:type}
        });

        dialogRef.afterClosed().subscribe(result => {
          this.getMediaDetails();
        });
       
        break;
      case 'View':
        const dialogRefView =  this.dialog.open(ViewMediaComponent, {
          width: '850px',
          data: {uploadSetId: id,type:type}
        });

        dialogRefView.afterClosed().subscribe(result => {
          this.getMediaDetails();
        });
        break;
      case 'Edit':
        const dialogRefEdit =  this.dialog.open(ViewMediaComponent, {
          width: '850px',
          data: {uploadSetId: id,type:type}
        });

        dialogRefEdit.afterClosed().subscribe(result => {
          this.getMediaDetails();
        });
        break;
      case 'Delete':
        const dialogRefDlt =  this.dialog.open(DeleteMediaComponent, {
          width: '650px',
          data: {uploadSetId: id,type:type}
        });

        dialogRefDlt.afterClosed().subscribe(result => {
          if (result == 'confirm') {
            this.getMediaDetails();
          }
          else {
            this.getMediaDetails();
          }
        });
        break;
      default:
        break;
    }
    
    // this.modalService.open(content, { centered: true});
    
  }
  DeleteMedia(uploadSetId){
    this.isLoading = true;
    let url = this.api_url + "Media_API/api/MediaMaster/DeleteMediaMaster?uploadSetId="+uploadSetId;
    const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Accept', '*/*');
    this.http.post(url,{headers:headers}).subscribe(res => {
      if(res != "0"){
        this.toastr.success("Removed successfully","Success");
        this.getMediaDetails();
        this.isLoading = false;
      }
      else {
        this.toastr.error("Something Went Wrong!");
        this.isLoading = false;
      }
    });
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { centered: true, size: 'xl' });
  }
  openLongContent(content){
    this.modalService.open(content, { centered: true, size: 'lg' });
  }
  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  EpochToDate(epoch) {
    if (epoch < 10000000000)
        epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
    var epoch = epoch + (new Date().getTimezoneOffset() * -1); //for timeZone        
    return new Date(epoch);
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
}
