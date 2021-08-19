import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaFacade } from '../+state/media.facade';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'vms-add-new-party',
  templateUrl: './add-new-party.component.html',
  styleUrls: ['./add-new-party.component.css']
})
export class AddNewPartyComponent implements OnInit {
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  ddlData: any;
  type :number;
  constructor(private ngrxFormsFacade: NgrxFormsFacade,
    private facade: MediaFacade,
    private mediaFacade: MediaFacade,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    const structure: Field[] = [
      {
        type: 'INPUT',
        name: 'partyid',
        placeholder: 'Party ID',
        validator: [Validators.required],
        value: null,
        attrs: {
          disabled: true,
        },
      },
      {
        type: 'INPUT',
        name: 'partyName',
        placeholder: 'Party Name',
        validator: [Validators.required],
        value: null,
      },
      {
        type: 'INPUT',
        name: 'description',
        placeholder: 'Description',
        validator: [Validators.required],
        value: null
      },
      {
        type: 'INPUT',
        name: 'contactDetails',
        placeholder: 'Contact Details',
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
