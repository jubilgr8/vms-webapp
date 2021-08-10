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
  isLoading: boolean = true;
  constructor(
    private authFacade: AuthFacade,
    private ngrxFormsFacade: NgrxFormsFacade,
    private mediaFacade: MediaFacade,
    private ref: ChangeDetectorRef,
    private modalService: NgbModal,
    private evtSvc: EventService,
    public dialog: MatDialog,
    private http: HttpClient

  ) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
     const options = { headers: headers };
    let url = "https://172.19.32.193/Media_API/api/MediaMaster/GetMediaMaster";
    this.http.get<MediaMaster[]>(url, options).subscribe(x => {
      debugger;
      this.isLoading = false;
      this.medias = x;
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
        this.dialog.open(AddNewMediaComponent, {
          width: '650px',
          data: {uploadSetId: id,type:type}
        });
        break;
      case 'View':
        this.dialog.open(ViewMediaComponent, {
          width: '850px',
          data: {uploadSetId: id,type:type}
        });
        break;
      case 'Edit':
        this.dialog.open(ViewMediaComponent, {
          width: '850px',
          data: {uploadSetId: id,type:type}
        });
        break;
      case 'Delete':
        this.dialog.open(AddNewMediaComponent, {
          width: '650px',
          data: {uploadSetId: id,type:type}
        });
        break;
      default:
        break;
    }
    
    // this.modalService.open(content, { centered: true});
    
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
