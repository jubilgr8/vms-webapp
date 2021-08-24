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
import { AddNewPartyComponent } from '../add-new-party/add-new-party.component';

@Component({
  selector: 'vms-party-master',
  templateUrl: './party-master.component.html',
  styleUrls: ['./party-master.component.css']
})
export class PartyMasterComponent implements OnInit {
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
  isLoading: boolean = false;
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
    //this.getMediaDetails();
  }

  ngOnInit(): void {
  }
  openVerticallyCentered(type, id?) {
    switch (type) {
      case 'Add':
        this.dialog.open(AddNewPartyComponent, {
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
        this.dialog.open(DeleteMediaComponent, {
          width: '650px',
          data: {uploadSetId: id,type:type}
        });
        break;
      default:
        break;
    }
    
    // this.modalService.open(content, { centered: true});
    
  }
}
