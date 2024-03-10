import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidationDirective } from './validators/email-validation.directive';
import { MatchPasswordDirective,} from './validators/match-password-validation.directive';



@NgModule({
  declarations: [
    EmailValidationDirective,MatchPasswordDirective

  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmailValidationDirective,MatchPasswordDirective
  ]
})
export class SharedModule { }
