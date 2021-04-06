import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
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
  accessUpd: boolean;
  accessDel: boolean;
  data: any;
  checklist: any;
  checkedList: any;
  roleId: any;
  type: any;
  isLoading: boolean = true;
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private ngrxFormsFacadeC: NgrxFormsFacade,
    private userFacade: UserFacade,
    private authFacade: AuthFacade,
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
    private service: UserService,
    private route: ActivatedRoute,
    private router : Router,
    private toastr : ToastrService,
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
    if (this.type) {
      if (this.type == 1) {
        this.isType = true;
      }
      this.userFacade.roles$
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((response) => {
          if (response) {
            this.roleForControl = response.filter(
              (x) => x.id == this.roleId
            )[0];
            this.fillData();
            this.ref.detectChanges();
            debugger;
          } else {
            this.userFacade.getRoleList();
            this.fillData();
          }
        });
      this.service.getRoleMenus().subscribe((response) => {
        debugger;
        response.forEach((element) => {
          if (element.roleMasterId == this.roleId) {
            if (element.accessView == true) {
              this.menus.find(
                (x) => x.id == element.menuMasterId
              ).accessView = true;
              this.getCheckedItemList('accessView');
            }
            if (element.accessAdd == true) {
              this.menus.find(
                (x) => x.id == element.menuMasterId
              ).accessAdd = true;
              this.getCheckedItemList('accessAdd');
            }
            if (element.accessUpd == true) {
              this.menus.find(
                (x) => x.id == element.menuMasterId
              ).accessUpd = true;
              this.getCheckedItemList('accessUpd');
            }
            if (element.accessDel == true) {
              this.menus.find(
                (x) => x.id == element.menuMasterId
              ).accessDel = true;
              this.getCheckedItemList('accessDel');
            }
            this.CheckData();
          }
        });
      });
    }
    // this.checkbox$ =this.ngrxFormsFacade.checkbox$;
  }
  get f() {
    return this.form.controls;
  }
  get t() {
    return this.f.accessArrays as FormArray;
  }
  getCheckedItemList(type: string, isAll?: boolean) {
    debugger;
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
    });
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
    this.isLoading = false;
  }

  isAllSelected(type: string) {
    this.masterSelected = this.menus.every(function (item: any) {
      return item[type] == true;
    });
    this.getCheckedItemList(type);
  }

  checkUncheckAll(e: Event, type: string) {
    debugger;
    for (let i = 0; i < this.menus.length; i++) {
      const element = this.menus[i];
      this.menus[i][type] = this[type];
    }
    this.getCheckedItemList(type, true);
  }
  onSubmit() {
    debugger;
    var res = "";
    for (var i = 0; i < this.menus.length; i++) {
      var accVw = this.menus[i].accessView == undefined ? false : true;
      var accAd = this.menus[i].accessAdd == undefined ? false : true;
      var accUp = this.menus[i].accessUpd == undefined ? false : true;
      var accDl = this.menus[i].accessDel == undefined ? false : true;
      var a = JSON.stringify(
        '{"roleMasterId":"' +
          this.role.id +
          '","menuMasterId":"' +
          this.menus[i].id +
          '","accessAdd":"' +
          accAd +
          '","accessView":"' +
          accVw +
          '","accessUpd":"' +
          accUp +
          '","accessDel":"' +
          accDl +
          '"}'
      );
      this.data = JSON.parse(JSON.parse(a));
      this.roleMenuRel = this.data;
      if (this.type == 2) {
        this.service.updateRoleMenu(this.roleMenuRel).subscribe((response) => {
          res= response;
          if(i == (this.menus.length - 1) && res == "1")
          {
              this.toastr.success('Role updated successfully!');
              this.router.navigateByUrl('/user-management/roles');
          }
        });
        
      } else {
        this.service.submitRoleMenu(this.roleMenuRel).subscribe((response) => {
          res = response;
          if(i == (this.menus.length - 1) && res == "1")
          {
              this.toastr.success('Role saved successfully!');
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
    debugger;
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
    debugger;
    //this.userFacade.submitNewRole();
  }

  CheckData() {
    if (!this.type) {
      this.userFacade.submitNewRole();
      debugger;
      this.userFacade.roles$
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((response) => {
          if (response) {
            this.role = response[response.length - 1];
            this.ref.detectChanges();
          } else {
            this.userFacade.getRoleList();
          }
        });
    } else {
      this.role = this.roleForControl;
    }
    this.userFacade.getRoleList();
    this.isMenu = true;
    this.t.push(
      this.fb.group({
        accessArray: ['', Validators.required],
        accessAdd: [false, Validators.required],
        accessDel: [false, Validators.required],
        accessUpd: [false, Validators.required],
        accessView: [false, Validators.required],
      })
    );
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
