import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable } from 'rxjs';
import { UserFacade } from '../+state/user.facade';

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
    name: 'usrName',
    placeholder: 'Username',
    validator: [Validators.required],
  },
  {
    type: 'DROPDOWN',
    name: 'roleMasterId',
    ddlList: ddlList,
    placeholder: 'Role Master',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'usrDisplayname',
    placeholder: 'Display Name',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'usrMobileNo',
    placeholder: 'Mobile No',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'usrEmailId',
    placeholder: 'Email Id',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'usrPassword',
    placeholder: 'Password',
    validator: [Validators.required],
    attrs: {
      type: 'password',
    },
  },
];

@Component({
  selector: 'vms-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css'],
})
export class AddNewUserComponent implements OnInit, OnDestroy {
  structure$: Observable<Field[]>;
  data$: Observable<any>;

  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: UserFacade
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
    this.facade.submitNewUser();
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
}
