import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Errors, Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { elementAt, takeUntil } from 'rxjs/operators';
import { UserFacade } from '../+state/user.facade';
import { ZoneMaster } from '../../../../vms-administration/src/lib/+state/admin.interfaces';
import { AdminFacade } from '../../../../vms-administration/src/lib/+state/admin.facade';
import { SharedData } from '../user.service';
import { UserMaster } from '../+state/user.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { FormValidatorsService } from 'libs/ngrx-forms/src/lib/services/form-validators.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

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
  isLoading: boolean = true;
  errors: Errors;
  isSubmitted$: Observable<boolean>;
  form: any;
  isFormValid: any;
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: UserFacade,
    private adminFacade: AdminFacade,
    private ref: ChangeDetectorRef,
    private sharedData: SharedData,
    private route: ActivatedRoute,
    private router: Router,
    private formValidatorsService: FormValidatorsService,
    private toastr: ToastrService,
    private service: UserService
  ) {}

  ngOnInit() {
    // this.type = null;
    // this.userId = null;
    this.route.queryParams.subscribe((params) => {
      this.userId = params['userId'];
      this.type = params['type'];
    });

    if (this.type) {
      this.facade.users$
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((response) => {
          if (response) {
            this.users = response.filter((x) => x.id == this.userId)[0];
            this.ref.detectChanges();
          } else {
            this.facade.getUserList();
          }
        });
    }
    this.adminFacade.zones$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response) {
          var ddlList = response.map((x) => ({
            name: x.description,
            value: x.id,
          }));

          var structure: Field[] = [
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
              selected: this.users
                ? ddlList.filter((x) => x.value == this.users.roleMasterId)[0]
                : null,
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
                name: 'Display Name',
                disabled: this.type == 1 ? true : null,
              },
            },
            {
              type: 'INPUT',
              name: 'usrMobileNo',
              placeholder: 'Mobile No',
              validator: [
                Validators.required,
                Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
              ],
              value: this.users ? this.users.usrMobileNo : '',
              attrs: {
                disabled: this.type == 1 ? true : null,
              },
            },
            {
              type: 'INPUT',
              name: 'usrEmailId',
              placeholder: 'Email Id',
              validator: [
                Validators.required,
                Validators.email,
                Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
              ],
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

  getForm(form: any) {
    this.form = form;
    if (this.form.status === 'INVALID') {
      this.isFormValid = true;
    } else {
      this.isFormValid = null;
    }
    this.ref.detectChanges();
  }
  submit() {
    this.formValidatorsService.validateAllFormFields(this.form);
    this.passwordMatch(this.form);

    if (this.form.valid) {
      if (this.userId) {
        var data = JSON.stringify(
          '{"cnfrmPass": "' +
            this.form.controls.cnfrmPass.value +
            '",' +
            '"roleMasterId":"' +
            this.form.controls.roleMasterId.value +
            '",' +
            '"usrDisplayname": "' +
            this.form.controls.usrDisplayname.value +
            '",' +
            '"usrEmailId": "' +
            this.form.controls.usrEmailId.value +
            '",' +
            '"usrId": "' +
            this.form.controls.usrId.value +
            '",' +
            '"usrMobileNo": "' +
            this.form.controls.usrMobileNo.value +
            '",' +
            '"usrName": "' +
            this.form.controls.usrName.value +
            '",' +
            '"usrPassword": "' +
            this.form.controls.cnfrmPass.value +
            '",' +
            '"id":"' +
            this.userId +
            '"}'
        );
        var sendData = JSON.parse(data);
        this.service.updateUser(JSON.parse(sendData)).subscribe((response) => {
          if (response == 1 || response == 4) {
            this.facade.getUserList();
            this.router.navigateByUrl('/user-management/users');
            this.toastr.success('User successfully updated.');
          }
        });
        // this.facade.updateUser();
      } else {
        this.facade.submitNewUser();
      }
    }
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
  passwordMatch(form: any) {
    if (
      form.controls.usrPassword.value != '' &&
      form.controls.cnfrmPass.value != ''
    ) {
      if (form.controls.usrPassword.value != form.controls.cnfrmPass.value) {
        this.form.status = 'INVALID';
        this.toastr.error('Password and Confirm Password does not matched.');
      } else {
        this.form.status = 'VALID';
      }
    }
  }
}
