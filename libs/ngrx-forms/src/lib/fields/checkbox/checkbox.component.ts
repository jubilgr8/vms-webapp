import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Field } from '../../+state/ngrx-forms.interfaces';
import { FormGroup } from '@angular/forms';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
 changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() field: Field;
  @Input() id:string;
  // @Input() field: any;
  ngOnInit() {
    debugger;
  }
}

