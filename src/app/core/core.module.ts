import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatioBarComponent } from './navigatio-bar/navigatio-bar.component';

import { RouterModule } from '@angular/router';
import { ShoeModule } from '../shoe/shoe.module';
import { UserModule } from '../user/user.module';
import { ErrorComponent } from './error/error.component';




@NgModule({
  declarations: [
    NavigatioBarComponent,
    ErrorComponent,
    
  ],
  imports: [
    CommonModule,RouterModule,ShoeModule,UserModule
  ],
  exports: [NavigatioBarComponent,ErrorComponent
  ]
})
export class CoreModule { }
