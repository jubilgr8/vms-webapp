import { Component, OnDestroy, OnInit,ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserFacade } from '../+state/user.facade';
import {ZoneMaster} from '../../../../vms-administration/src/lib/+state/admin.interfaces';
import {AdminFacade} from '../../../../vms-administration/src/lib/+state/admin.facade';

var defDdlList: KeyValue[] = [
  {
    name: '--Select--',
    value: 0,
  }
];



@Component({
  selector: 'vms-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css'],
})
export class AddNewUserComponent implements OnInit, OnDestroy {
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  ddlData:any;
  zones: ZoneMaster[]; unsubscribe$: Subject<void> = new Subject();

  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: UserFacade,
    private adminFacade:AdminFacade,private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
        
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
    this.adminFacade.zones$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((response) => {
      if (response) {
        var ddlList = response.map(x => ({
          name: x.description,
          value: x.id
        }))

        var structure: Field[] = [
        {
          type: 'INPUT',
          name: 'usrId',
          placeholder: 'User ID',
          validator: [Validators.required],
        },
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
        {
          type: 'INPUT',
          name: 'cnfrmPass',
          placeholder: 'Confirm Password',
          validator: [Validators.required],
          attrs: {
            type: 'password',
          },
        },
        {
          type: 'CHECKBOX',
          name: 'isActive',
          placeholder: 'Is Active',
          validator: [Validators.required],
        },
      ];
      this.ngrxFormsFacade.setStructure(structure);
      } else {
        this.adminFacade.getZoneList();
      }
    });
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
