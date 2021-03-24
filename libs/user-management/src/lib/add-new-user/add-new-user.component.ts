import { Component, OnDestroy, OnInit,ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserFacade } from '../+state/user.facade';
import {ZoneMaster} from '../../../../vms-administration/src/lib/+state/admin.interfaces';
import {AdminFacade} from '../../../../vms-administration/src/lib/+state/admin.facade';
import {SharedData} from '../user.service';
import {UserMaster} from '../+state/user.interfaces';

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
  checkbox$: Observable<Field>;
  data$: Observable<any>;
  users: UserMaster;
  ddlData:any;
  id:any;
  zones: ZoneMaster[]; unsubscribe$: Subject<void> = new Subject();

  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: UserFacade,
    private adminFacade:AdminFacade,private ref: ChangeDetectorRef,
    private sharedData: SharedData
  ) {}

  ngOnInit() {
      debugger;
        this.sharedData.data.subscribe(result => {
          this.id = result;
          if(this.id != undefined)
          {
            this.facade.users$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((response) => {
              if (response) {
                debugger;
                response.forEach(element => {
                  if(element.id == this.id)
                  {
                    this.users = element;
                  }
                });
                this.ref.detectChanges();
              } else {
                this.facade.getUserList();
              }
            });
          }
        });
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
      ];
      const checkbox: Field = {
        type: "CHECKBOX",
        name: 'isActive',
      }
      checkbox.type = "CHECKBOX";
      this.ngrxFormsFacade.setStructure(structure);
      } else {
        this.adminFacade.getZoneList();
      }
    });
  }
  updateForm(changes: any) {
    debugger;
    this.ngrxFormsFacade.updateData(changes);
  }

  submit() {
    this.facade.submitNewUser();
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
}
