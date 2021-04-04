import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Field } from '../../+state/ngrx-forms.interfaces';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  @Input() field: Field;
  @Input() group: FormGroup;
  value: any;
  control: AbstractControl;
  isError: boolean;
  error: string;
  ngOnInit(): void {
    if (this.field?.value)
      this.value = JSON.parse(JSON.stringify(this.field.value));

    this.control = this.group.get(this.field.name);
    if (this.control.status === 'INVALID') {
      this.error = 'danger';
    } else {
      this.error = '';
    }
  }
}
