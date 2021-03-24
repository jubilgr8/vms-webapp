import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, KeyValue } from '../../+state/ngrx-forms.interfaces';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  dropdownList: KeyValue[];
  defOption: KeyValue;
  constructor(private _changeDetector: ChangeDetectorRef) {}
  @Input() field: Field;
  @Input() group: FormGroup;
  ngOnInit(): void {
    debugger;
    if (!this.field.selected) {
      this.defOption = {
        name: '--Select--',
        value: 0,
      };
    } else {
      this.defOption = this.field.selected;
    }

    this.dropdownList = this.field.ddlList
      .concat(this.defOption)
      .sort((a, b) => a.value - b.value);
    this._changeDetector.detectChanges();
  }
}
