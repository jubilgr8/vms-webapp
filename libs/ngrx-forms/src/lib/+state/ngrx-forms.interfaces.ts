import { ValidatorFn } from '@angular/forms';

export interface NgrxForms {
  data: any;
  structure: Field[];
  valid: boolean;
  errors: Errors;
  touched: boolean;
  checkbox: Field[];
}

export interface Field {
  type: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  validator?: ValidatorFn[];
  attrs?: any;
  ddlList?: KeyValue[];
}

export interface Checkbox{
  name:string;
  id:string;
}

export interface KeyValue {
  name: string;
  value: number;
}

export type FieldType = 'INPUT' | 'TEXTAREA' | 'DROPDOWN' | 'CHECKBOX';

export interface Errors {
  [key: string]: string;
}
