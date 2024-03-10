import { Directive, Input, OnChanges,} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

@Directive({
  selector: '[appEmailValidation]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:EmailValidationDirective,
    multi:true
  }]
})
export class EmailValidationDirective implements Validator, OnChanges {

  @Input() appEmailValidation: string[] = []
  validator: ValidatorFn = () => null;


  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control)
  }

  ngOnChanges(): void {
    this.validator = appEmailValidator();
  }
}