import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable } from 'rxjs';
import { AdminFacade } from '../+state/admin.facade';
import { Options } from "@angular-slider/ngx-slider";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const ddlList: KeyValue[] = [
  {
    name: 'Administrator',
    value: 1,
  },
  {
    name: 'ABC',
    value: 2,
  },
];

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'vmsId',
    placeholder: 'VMS ID',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'vmsSrNo',
    placeholder: 'Sr no',
    validator: [Validators.required],
  },
  {
    type: 'DROPDOWN',
    name: 'zoneMasterId',
    ddlList: ddlList,
    placeholder: 'Select Zone',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'description',
    placeholder: 'Discription',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'createdDate',
    placeholder: 'Installation Date : dd-mm-yyyy hh:MM:ss',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'latitude',
    placeholder: 'Latitude',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'logintude',
    placeholder: 'Longitude',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'height',
    placeholder: 'Height',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'width',
    placeholder: 'Width',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'staticIp',
    placeholder: 'Static IP Address',
    validator: [Validators.required],
  },
];
@Component({
  selector: 'vms-add-new-vms',
  templateUrl: './add-new-vms.component.html',
  styleUrls: ['./add-new-vms.component.css']
})
export class AddNewVmsComponent implements OnInit {
  value: number = 123;
  options: Options = {
    floor: 0,
    ceil: 255
  };
  value2:number=100;
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  isLoading:boolean;
 
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: AdminFacade,
    private modalService:NgbModal
  ) {}

  ngOnInit() {
    this.isLoading =true;
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
    this.isLoading = false;
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  submit() {
    //this.facade.submitNewUser();
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true,size:"lg" });
  }
  
}
