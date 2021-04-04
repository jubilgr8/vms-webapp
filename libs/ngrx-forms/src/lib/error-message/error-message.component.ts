import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidatorsService } from '../services/form-validators.service';

@Component({
  selector: 'vms-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() public control: FormControl;

  constructor(private formValidatorsService: FormValidatorsService) {}
  ngOnInit(): void {}
  get errorMessage(): any {
    if (this.control) {
      for (const propertyName in this.control.errors) {
        if (
          this.control.errors.hasOwnProperty(propertyName) &&
          this.control.touched
        ) {
          return this.formValidatorsService.getValidatorErrorMessage(
            propertyName,
            this.control.errors[propertyName]
          );
        }
      }
    }
    return null;
  }
}
