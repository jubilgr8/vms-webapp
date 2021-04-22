import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { UserFacade } from '../../+state/user.facade';
import { takeUntil } from 'rxjs/operators';
import {
  RoleMaster,
  MenuMaster,
  RoleMenuRelation,
  UserMaster,
} from '../../+state/user.interfaces';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

const checkbox: Field = {
  type: 'CHECKBOX',
  name: 'accessAdd',
};

checkbox.type = 'CHECKBOX';

@Component({
  selector: 'vms-add-new-role',
  templateUrl: './add-new-role.component.html',
  styleUrls: ['./add-new-role.component.less'],
})
export class AddNewRoleComponent implements OnInit {
  form: FormGroup;
  appForm: any;
  value: boolean[];
  structure$: Observable<Field[]>;
  checkbox$: Observable<Field>;
  data$: Observable<any>;
  menus: MenuMaster[];
  roleForControl: RoleMaster;
  role: RoleMaster;
  users: UserMaster;
  roleMenuRel: RoleMenuRelation;
  arrRoleMenuRel: any;
  unsubscribe$: Subject<void> = new Subject();
  isMenu: boolean = false;
  isType: boolean = false;
  checkboxes = [];

  masterSelected: boolean;
  accessAdd: boolean;
  accessView: boolean;
  accessEdit: boolean;
  accessDelete: boolean;
  data: any;
  checklist: any;
  checkedList: any;
  isFormValid: any;
  roleId: any;
  type: any;
  isLoading: boolean = true;
  rolesSub: Subscription;
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private ngrxFormsFacadeC: NgrxFormsFacade,
    private userFacade: UserFacade,
    private authFacade: AuthFacade,
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    (this.masterSelected = false),
      (this.checklist = [
        { id: 1, value: 'Elenor Anderson', isSelected: false },
        { id: 2, value: 'Caden Kunze', isSelected: true },
        { id: 3, value: 'Ms. Hortense Zulauf', isSelected: true },
        { id: 4, value: 'Grady Reichert', isSelected: false },
        { id: 5, value: 'Dejon Olson', isSelected: false },
        { id: 6, value: 'Jamir Pfannerstill', isSelected: false },
        { id: 7, value: 'Aracely Renner DVM', isSelected: false },
        { id: 8, value: 'Genoveva Luettgen', isSelected: false },
      ]);
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.roleId = params['roleId'];
      this.type = params['type'];

      this.fillData();
      this.userFacade.getRoleById(this.roleId);

      if (this.type) {
        if (this.type == 1) {
          this.isType = true;
        }
        this.rolesSub = this.userFacade.role$
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((response) => {
            if (response) {
              this.roleForControl = response[0];
              this.fillData();
            }
          });
        this.service.getRoleMenusById(this.roleId).subscribe((response) => {
          response.forEach((element) => {
            if (element.roleMasterId == this.roleId) {
              if (element.accessView == true) {
                this.menus.find(
                  (x) => x.id == element.menuMasterId
                ).accessView = true;
                this.getCheckedItemList('accessView');
                this.ref.detectChanges();
              }
              if (element.accessAdd == true) {
                this.menus.find(
                  (x) => x.id == element.menuMasterId
                ).accessAdd = true;
                this.getCheckedItemList('accessAdd');
                this.ref.detectChanges();
              }
              if (element.accessEdit == true) {
                this.menus.find(
                  (x) => x.id == element.menuMasterId
                ).accessEdit = true;
                this.getCheckedItemList('accessEdit');
                this.ref.detectChanges();
              }
              if (element.accessDelete == true) {
                this.menus.find(
                  (x) => x.id == element.menuMasterId
                ).accessDelete = true;
                this.getCheckedItemList('accessDelete');
                this.ref.detectChanges();
              }
              this.CheckData();
            }
          });
        });
      }
    });
    this.userFacade.menus$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response) {
          this.menus = JSON.parse(JSON.stringify(response));
          this.ref.detectChanges();
        } else {
          this.userFacade.getMenuList();
        }
      });

    // this.checkbox$ =this.ngrxFormsFacade.checkbox$;
  }
  get f() {
    return this.form.controls;
  }
  get t() {
    return this.f.accessArrays as FormArray;
  }
  get getaccessArrays() {
    return this.form.get('accessArrays') as FormArray;
  }
  getCheckedItemList(type: string, isAll?: boolean) {
    this.checkedList = [];
    for (var i = 0; i < this.menus.length; i++) {
      if (this.menus[i][type]) {
        this.checkedList.push(this.menus[i]);
        if (!isAll) {
          this[type] = false;
        }
      }
    }
    this.checkedList = JSON.stringify(this.menus);
  }

  fillData() {
    var structure: Field[] = [
      {
        type: 'INPUT',
        name: 'roleId',
        placeholder: 'Role ID',
        validator: [Validators.required],
        value: this.roleForControl ? this.roleForControl.roleId : '',
        attrs: {
          disabled: this.type == 1 ? true : null,
        },
      },
      {
        type: 'INPUT',
        name: 'roleName',
        placeholder: 'Role Name',
        validator: [Validators.required],
        value: this.roleForControl ? this.roleForControl.roleName : '',
        attrs: {
          disabled: this.type == 1 ? true : null,
        },
      },
      {
        type: 'INPUT',
        name: 'roleDesc',
        placeholder: 'Discription',
        validator: [Validators.required],
        value: this.roleForControl ? this.roleForControl.roleDesc : '',
        attrs: {
          disabled: this.type == 1 ? true : null,
        },
      },
    ];
    console.log(structure);
    this.form = this.fb.group({
      //appForm:['',Validators.required],
      accessArrays: new FormArray([]),
      roleId: '',
      roleName: '',
      roleDesc: '',
    });
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
    this.isLoading = false;
  }
  getForm(form: any) {
    // this.form = form;
    let val = form.value;
    this.form.patchValue({
      roleId: val.roleId,
      roleName: val.roleName,
      roleDesc: val.roleDesc,
    });
    this.form = form;
    if (this.form.status === 'INVALID') {
      this.isFormValid = true;
    } else {
      this.isFormValid = null;
    }
    this.ref.detectChanges();
    // if (this.form.status === 'VALID') {
    //   this.isFormValid = true;
    // } else {
    //   this.isFormValid = false;
    // }
    this.ref.detectChanges();
  }
  isAllSelected(type: string) {
    this.masterSelected = this.menus.every(function (item: any) {
      return item[type] == true;
    });
    this.getCheckedItemList(type);
  }

  checkUncheckAll(e: Event, type: string) {
    for (let i = 0; i < this.menus.length; i++) {
      const element = this.menus[i];
      this.menus[i][type] = this[type];
    }
    this.getCheckedItemList(type, true);
  }
  onSubmit() {
    var res = '';
    if (this.type) {
      res = this.roleId;
    } else {
      res = '0';
    }
    for (var i = 0; i < this.menus.length; i++) {
      var accVw =
        this.menus[i].accessView == undefined ||
        this.menus[i].accessView == false
          ? false
          : true;
      var accAd =
        this.menus[i].accessAdd == undefined || this.menus[i].accessAdd == false
          ? false
          : true;
      var accUp =
        this.menus[i].accessEdit == undefined ||
        this.menus[i].accessEdit == false
          ? false
          : true;
      var accDl =
        this.menus[i].accessDelete == undefined ||
        this.menus[i].accessDelete == false
          ? false
          : true;
      var a = JSON.stringify(
        '{"roleMasterId":"' +
          res +
          '","menuMasterId":"' +
          this.menus[i].id +
          '","accessAdd":"' +
          accAd +
          '","accessEdit":"' +
          accUp +
          '","accessDelete":"' +
          accDl +
          '","accessView":"' +
          accVw +
          '"}'
      );
      this.data = JSON.parse(JSON.parse(a));
      this.roleMenuRel = this.data;
      if (this.type == 2) {
        this.isLoading = true;
        this.service.updateRoleMenu(this.roleMenuRel).subscribe((response) => {
          res = response;

          if (i == this.menus.length) {
            this.isLoading = false;
            this.userFacade.getRoleList();
            this.userFacade.getMenuList();
            this.router.navigateByUrl('/user-management/roles');
          }
        });
      } else {
        this.isLoading = true;
        this.service.submitRoleMenu(this.roleMenuRel).subscribe((response) => {
          res = response;
          if (i == this.menus.length) {
            this.isLoading = false;
            this.userFacade.getRoleList();
            this.router.navigateByUrl('/user-management/roles');
          }
        });
      }
    }
    // this.toastr.success('Role updated successfully!');
    // this.toastr.success('Role saved successfully!');
    // this.router.navigateByUrl('/user-management/roles');
  }

  updateItem(e, type) {
    const formArray: FormArray = this.form.get('accessArrays') as FormArray;

    /* Selected */
    if (e.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(e.target.value));
    } else {
      /* unselected */
      // find the unselected element
      // let i: number = 0;
      // formArray.controls.forEach((ctrl: FormControl) => {
      //   if(ctrl.value == e.target.value) {
      //     // Remove the unselected element from the arrayForm
      //     formArray.removeAt(i);
      //     return;
      //   }
      //   i++;
      // });
    }
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  submit() {
    //this.userFacade.submitNewRole();
  }

  CheckData() {
    if (!this.type) {
      this.isLoading = true;
      this.userFacade.submitNewRole();
      // this.userFacade.getRoleList();
      this.isLoading = false;
    }
    this.isMenu = true;
    if (this.t) {
      this.t.push(
        this.fb.group({
          accessArray: ['', Validators.required],
          accessAdd: [false, Validators.required],
          accessDelete: [false, Validators.required],
          accessEdit: [false, Validators.required],
          accessView: [false, Validators.required],
        })
      );
    }
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
  toggleAll(state: boolean) {
    //this.checkboxes.controls.forEach(control => {
    //control.setValue(state);
    //});
  }
}
