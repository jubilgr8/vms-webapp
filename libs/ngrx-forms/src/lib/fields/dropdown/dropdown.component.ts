import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, KeyValue } from '../../+state/ngrx-forms.interfaces';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  dropdownList: KeyValue[];
  defOption: KeyValue;
  constructor(private _changeDetector: ChangeDetectorRef, private evtSvc: EventService) {}
  @Input() field: Field;
  @Input() group: FormGroup;
  @Output() handleClick = new EventEmitter
  ngOnInit(): void {
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

  optionSelected(ev){
    debugger;
    this.evtSvc.emitChildEvent(ev);
  }
}
