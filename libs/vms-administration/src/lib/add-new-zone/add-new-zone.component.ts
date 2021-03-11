import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable } from 'rxjs';
import { AdminFacade } from '../+state/admin.facade';
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
    name: 'zoneId',
    placeholder: 'Zone ID',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'zoneName',
    placeholder: 'Zone Name',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'description',
    placeholder: 'Discription',
    validator: [Validators.required],
  },
];


@Component({
  selector: 'vms-add-new-zone',
  templateUrl: './add-new-zone.component.html',
  styleUrls: ['./add-new-zone.component.css']
})
export class AddNewZoneComponent implements OnInit, OnDestroy{
  structure$: Observable<Field[]>;
  data$: Observable<any>;
 
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: AdminFacade,
    private modalService:NgbModal
  ) {}

  ngOnInit() {
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
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
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
