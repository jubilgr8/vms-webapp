import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

@Injectable()
export class FormValidatorsService {
  public getValidatorErrorMessage(
    validatorName: string,
    validatorValue?: any
  ): string | { [key: string]: any } {
    const config = {
      required: 'This Field is Required',
      minlength: {
        key: 'FORM_ERROR_MESSAGES.MIN_LENGTH',
        value: `${validatorValue.requiredLength}`,
      },
      maxlength: {
        key: 'FORM_ERROR_MESSAGES.MAX_LENGTH',
        value: `${validatorValue.requiredLength}`,
      },
      exactLength: 'FORM_ERROR_MESSAGES.EXACT_LENGTH',
      min: {
        key: 'FORM_ERROR_MESSAGES.MIN',
        value: `${validatorValue.min}`,
      },
      max: {
        key: 'FORM_ERROR_MESSAGES.MAX',
        value: `${validatorValue.max}`,
      },
    };
    return config[validatorName];
  }

  public exactLength(length: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const { value } = control;
      return value !== null && value.length !== Number(length)
        ? { exactLength: true }
        : null;
    };
  }

  public validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field: any) => {
      const c = formGroup.get(field);
      if (c instanceof FormControl) {
        c.markAsTouched({ onlySelf: true });
        c.updateValueAndValidity();
      }
    });
  }
}
