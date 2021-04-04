import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { elementAt, takeUntil } from 'rxjs/operators';
import { UserFacade } from '../+state/user.facade';
import { ZoneMaster } from '../../../../vms-administration/src/lib/+state/admin.interfaces';
import { AdminFacade } from '../../../../vms-administration/src/lib/+state/admin.facade';
import { SharedData } from '../user.service';
import { UserMaster } from '../+state/user.interfaces';
import { ActivatedRoute } from '@angular/router';

var defDdlList: KeyValue[] = [
  {
    name: '--Select--',
    value: 0,
  },
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
  ddlData: any;
  id: any;
  zones: ZoneMaster[];
  unsubscribe$: Subject<void> = new Subject();
  userId: any;
  type: any;
  view:boolean;
  edit:boolean;
  add:boolean;
  isLoading: boolean = true;
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: UserFacade,
    private adminFacade: AdminFacade,
    private ref: ChangeDetectorRef,
    private sharedData: SharedData,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userId = params['userId'];
      this.type = params['type'];
    });

    if (this.type) {
      if(this.type ==1)
      {
        this.view =true;
      }
      else if(this.type == 2)
      {
        this.edit = true;
      }
      this.facade.users$
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((response) => {
          if (response) {
            this.users = response.filter((x) => x.id == this.userId)[0];
            this.ref.detectChanges();
            debugger;
          } else {
            this.facade.getUserList();
          }
        });
    }
    else{
        this.add = true;
    }
    this.adminFacade.zones$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response) {
          debugger;
          var ddlList = response.map((x) => ({
            name: x.description,
            value: x.id,
          }));
            console.log(this.users);
          var structure: Field[] = [
            {
              type: 'INPUT',
              name: 'id',
              placeholder: '',
              validator: [Validators.required],
              value: this.users ? this.users.id : '',
              attrs: {
                type:'hidden'
              },
            },
            {
              type: 'INPUT',
              name: 'usrId',
              placeholder: 'User ID',
              validator: [Validators.required],
              value: this.users ? this.users.usrId : '',
              attrs: {
                disabled: this.type == 1 ? true : null,
              },
            },
            {
              type: 'INPUT',
              name: 'usrName',
              placeholder: 'Username',
              validator: [Validators.required],
              value: this.users ? this.users.usrName : '',
              attrs: {
                disabled: this.type == 1 ? true : null,
              },
            },
            {
              type: 'DROPDOWN',
              name: 'roleMasterId',
              ddlList: ddlList,
              placeholder: 'Role Master',
              validator: [Validators.required],
              selected: ddlList[0],
              attrs: {
                disabled: this.type == 1 ? true : null,
              },
            },
            {
              type: 'INPUT',
              name: 'usrDisplayname',
              placeholder: 'Display Name',
              validator: [Validators.required],
              value: this.users ? this.users.usrDisplayname : '',
              attrs: {
                disabled: this.type == 1 ? true : null,
              },
            },
            {
              type: 'INPUT',
              name: 'usrMobileNo',
              placeholder: 'Mobile No',
              validator: [Validators.required],
              value: this.users ? this.users.usrMobileNo : '',
              attrs: {
                disabled: this.type == 1 ? true : null,
              },
            },
            {
              type: 'INPUT',
              name: 'usrEmailId',
              placeholder: 'Email Id',
              validator: [Validators.required],
              value: this.users ? this.users.usrEmailId : '',
              attrs: {
                disabled: this.type == 1 ? true : null,
              },
            },
            {
              type: 'INPUT',
              name: 'usrPassword',
              placeholder: 'Password',
              validator: [Validators.required],
              value: this.users ? this.users.usrPassword : '',
              attrs: {
                type: 'password',
                disabled: this.type == 1 ? true : null,
              },
            },
            {
              type: 'INPUT',
              name: 'cnfrmPass',
              placeholder: 'Confirm Password',
              validator: [Validators.required],
              value: this.users ? this.users.usrPassword : '',
              attrs: {
                type: 'password',
                disabled: this.type == 1 ? true : null,
              },
            },
          ];
          const checkbox: Field = {
            type: 'CHECKBOX',
            name: 'isActive',
          };
          checkbox.type = 'CHECKBOX';
          this.ngrxFormsFacade.setStructure(structure);
          this.data$ = this.ngrxFormsFacade.data$;
          this.structure$ = this.ngrxFormsFacade.structure$;
          this.isLoading = false;
          this.ref.detectChanges();
        } else {
          this.adminFacade.getZoneList();
        }
      });
  }
  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  submit() {
    debugger;
    if (this.userId) {
      this.facade.updateUser();
    } else {
      this.facade.submitNewUser();
    }
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
}
