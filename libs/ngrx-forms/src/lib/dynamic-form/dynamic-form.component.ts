import { Field } from '../+state/ngrx-forms.interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, combineLatest } from 'rxjs';
import { debounceTime, map, takeUntil, tap, filter } from 'rxjs/operators';
import { FormValidatorsService } from '../services/form-validators.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() structure$: Observable<Field[]>;
  @Input() data$: Observable<any>;
  @Input() touchedForm$: Observable<boolean>;
  @Output() updateForm: EventEmitter<any> = new EventEmitter();
  @Output() getForm: EventEmitter<FormGroup> = new EventEmitter();
  unsubscribe$: Subject<void> = new Subject();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formValidatorsService: FormValidatorsService
  ) {}

  ngOnInit() {
    this.structure$
      .pipe(
        map(this.formBuilder),
        tap((f) => (this.form = f)),
        tap((f) => this.listenFormChanges(f)),
        (f$) => combineLatest([f$, this.data$]),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((x) => {
        this.patchValue;
        this.getForm.emit(this.form);
      });

    if (this.touchedForm$) {
      this.touchedForm$
        .pipe(
          filter((t) => !t && !!this.form),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((_) => this.form.reset());
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private formBuilder = (structure: Field[]): FormGroup => {
    const group = this.fb.group({});
    structure.forEach((field) =>
      group.addControl(field.name, this.control(field))
    );
    return group;
  };

  private control = (field: Field): FormControl => {
    return this.fb.control('', field.validator);
  };

  private patchValue = ([form, data]) => {
    !!data
      ? form.patchValue(data, { emitEvent: false })
      : form.patchValue({}, { emitEvent: false });
  };

  private listenFormChanges(form: FormGroup) {
    form.valueChanges
      .pipe(debounceTime(100), takeUntil(this.unsubscribe$))
      .subscribe((changes: any) => this.updateForm.emit(changes));
  }
}
