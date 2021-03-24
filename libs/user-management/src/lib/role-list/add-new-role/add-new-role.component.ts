import { Component, OnDestroy, OnInit,ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { UserFacade } from '../../+state/user.facade';
import { takeUntil } from 'rxjs/operators';
import { RoleMaster, MenuMaster } from '../../+state/user.interfaces';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

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
  form: FormGroup;
  appForm :any;
  value: boolean[];
  structure$: Observable<Field[]>;
  checkbox$: Observable<Field>;
  data$: Observable<any>;
  menus: MenuMaster[];
  unsubscribe$: Subject<void> = new Subject();
  isMenu :boolean=false;
  checkboxes = [];

  masterSelected:boolean;
  checklist:any;
  checkedList:any;
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private ngrxFormsFacadeC: NgrxFormsFacade,
    private userFacade: UserFacade,
    private authFacade: AuthFacade,
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
  ) {
    this.masterSelected = false,
    this.checklist = [
      {id:1,value:'Elenor Anderson',isSelected:false},
      {id:2,value:'Caden Kunze',isSelected:true},
      {id:3,value:'Ms. Hortense Zulauf',isSelected:true},
      {id:4,value:'Grady Reichert',isSelected:false},
      {id:5,value:'Dejon Olson',isSelected:false},
      {id:6,value:'Jamir Pfannerstill',isSelected:false},
      {id:7,value:'Aracely Renner DVM',isSelected:false},
      {id:8,value:'Genoveva Luettgen',isSelected:false}
    ];
  }

  
  ngOnInit() {
    debugger;
    this.form=this.fb.group({
      //appForm:['',Validators.required],
      accessArrays : new FormArray([]),
    })
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
      debugger;
  }

    get f() { return this.form.controls; }
    get t() { return this.f.accessArrays as FormArray; }
    getCheckedItemList(){
      this.checkedList = [];
      for (var i = 0; i < this.checklist.length; i++) {
        if(this.checklist[i].isSelected)
        this.checkedList.push(this.checklist[i]);
      }
      this.checkedList = JSON.stringify(this.checkedList);
    }
  
    isAllSelected() {
      this.masterSelected = this.checklist.every(function(item:any) {
          return item.isSelected == true;
        })
      this.getCheckedItemList();
    }
  
    checkUncheckAll() {
      for (var i = 0; i < this.checklist.length; i++) {
        this.checklist[i].isSelected = this.masterSelected;
      }
      this.getCheckedItemList();
    }
  onSubmit() {
    this.data$.subscribe(res=>{
      alert(res.roleDesc);
    })
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
}

  updateItem(e, type) {
    debugger;
    const formArray: FormArray = this.form.get('accessArrays') as FormArray;

  /* Selected */
  if(e.target.checked){
    // Add a new control in the arrayForm
    formArray.push(new FormControl(e.target.value));
  }
  /* unselected */
  else{
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
    this.userFacade.submitNewRole();
  }

  CheckData() {
    this.isMenu=true;
    this.t.push(this.fb.group({
      accessArray:['',Validators.required],
      accessAdd: [false,Validators.required],
      accessDel: [false,Validators.required],
      accessUpd: [false,Validators.required],
      accessView:[false,Validators.required]
  }));
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
