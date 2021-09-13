import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable } from 'rxjs';
import { AdminFacade } from '../+state/admin.facade';
import { Options } from "@angular-slider/ngx-slider";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'uOMName',
    placeholder: 'UOM Name',
    validator: [Validators.required],
  },
];

@Component({
  selector: 'vms-add-uom',
  templateUrl: './add-uom.component.html',
  styleUrls: ['./add-uom.component.css']
})
export class AddUomComponent implements OnInit {
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
