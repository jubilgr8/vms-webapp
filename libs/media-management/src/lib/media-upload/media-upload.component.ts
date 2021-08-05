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
import { MediaMaster, UploadMediaCounts } from '../+state/media.interfaces';
import * as Rx from 'rxjs/Rx';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'libs/ngrx-forms/src/lib/services/event.service';

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
  medias: MediaMaster[];
  uploadMedias: UploadMediaCounts[];
  groupedData: any = [];
  urls = [];
  constructor(
    private authFacade: AuthFacade,
    private ngrxFormsFacade: NgrxFormsFacade,
    private mediaFacade: MediaFacade,
    private ref: ChangeDetectorRef,
    private modalService: NgbModal,
    private evtSvc: EventService
  ) {}

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

    this.mediaFacade.medias$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response) {
          this.medias = response;
          var data = Rx.Observable.from(this.medias)
            .groupBy((x) => x.uploadSetId)
            .flatMap((group) => group.toArray())
            .map((g) => {
              // mapping
              return {
                name: g[0].uploadSetId, //take the first name because we grouped them by name
              };
            })
            .toArray() //.toArray because I guess you want to loop on it with ngFor
            .do((sum) => console.log('sum:', sum)) // just for debug
            .subscribe((d) => (this.groupedData = d));
          console.log(data);
          this.ref.detectChanges();
        } else {
          this.mediaFacade.getMediaList();
        }
      });
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true});
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
