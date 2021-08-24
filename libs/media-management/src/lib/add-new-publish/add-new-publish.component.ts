import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaFacade } from '../+state/media.facade';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'vms-add-new-publish',
  templateUrl: './add-new-publish.component.html',
  styleUrls: ['./add-new-publish.component.css']
})
export class AddNewPublishComponent implements OnInit {
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  ddlData: any;
  type :number;
  ddlList:any;
  dropdownList:any;
  vmsList:any;
  constructor(private ngrxFormsFacade: NgrxFormsFacade,
    private facade: MediaFacade,
    private mediaFacade: MediaFacade,
    private ref: ChangeDetectorRef) { }
   
  ngOnInit(): void {
    const structure: Field[] = [
      {
        type: 'DROPDOWN',
        name: 'zoneList',
        ddlList: this.ddlList,
        placeholder: 'Select Zone',
        validator: [Validators.required],
      },
      {
        type: 'DROPDOWN',
        name: 'vmsList',
        ddlList: this.vmsList,
        placeholder: 'Select VMS',
        validator: [Validators.required],
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
  CloseModal(){
    
  }
}
