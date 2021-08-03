import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaFacade } from '../+state/media.facade';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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


@Component({
  selector: 'vms-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  ddlData: any;
  type :number;

  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: MediaFacade,
    private mediaFacade: MediaFacade,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const structure: Field[] = [
      {
        type: 'INPUT',
        name: 'plId',
        placeholder: 'Playlist ID',
        validator: [Validators.required],
        value: null,
        attrs: {
          disabled: this.type == 1 ? true : null,
        },
      },
      {
        type: 'INPUT',
        name: 'plName',
        placeholder: 'Playlist Name',
        validator: [Validators.required],
        value: null,
      },
      {
        type: 'INPUT',
        name: 'vmsHeight',
        placeholder: 'VMS Height',
        validator: [Validators.required],
        value: null
      },
      {
        type: 'INPUT',
        name: 'vmsWidth',
        placeholder: 'VMS Width',
        validator: [Validators.required],
        value: null
      }
    ];
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
  }
  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }
  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }

}
