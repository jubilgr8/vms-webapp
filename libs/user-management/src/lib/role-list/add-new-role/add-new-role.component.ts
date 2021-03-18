import { Component, OnDestroy, OnInit,ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { UserFacade } from '../../+state/user.facade';
import { takeUntil } from 'rxjs/operators';
import { RoleMaster, MenuMaster } from '../../+state/user.interfaces';

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'roleId',
    placeholder: 'Role ID',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'roleName',
    placeholder: 'Role Name',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'roleDesc',
    placeholder: 'Discription',
    validator: [Validators.required],
    attrs : "col-md-3",
  },
];
const checkbox: Field = {
  type: "CHECKBOX",
  name: 'accessAdd',
  
}

checkbox.type = "CHECKBOX";

@Component({
  selector: 'vms-add-new-role',
  templateUrl: './add-new-role.component.html',
  styleUrls: ['./add-new-role.component.less']
})


export class AddNewRoleComponent implements OnInit {
  value: boolean[];
  structure$: Observable<Field[]>;
  checkbox$: Observable<Field>;
  data$: Observable<any>;
  menus: MenuMaster[];
  unsubscribe$: Subject<void> = new Subject();
  isMenu :boolean=false;
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private ngrxFormsFacadeC: NgrxFormsFacade,
    private userFacade: UserFacade,
    private authFacade: AuthFacade,
    private ref: ChangeDetectorRef,
  ) {}

  ngOnInit() {
   
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
    // this.checkbox$ =this.ngrxFormsFacade.checkbox$;
    this.userFacade.menus$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response) {
          this.menus = response;
          this.ref.detectChanges();
        } else {
          this.userFacade.getMenuList();
        }
      });
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  submit() {
    debugger;
    this.userFacade.submitNewRole();
  }

  CheckData() {
    this.isMenu=true;
    debugger;
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
  toggleAll(state: boolean)
  {
    //this.checkboxes.controls.forEach(control => {
      //control.setValue(state);
    //});
  }

}
