import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatioBarComponent } from './navigatio-bar/navigatio-bar.component';

import { RouterModule } from '@angular/router';
import { ShoeModule } from '../shoe/shoe.module';
import { UserModule } from '../user/user.module';




@NgModule({
  declarations: [
    NavigatioBarComponent,
    
  ],
  imports: [
    CommonModule,RouterModule,ShoeModule,UserModule
  ],
  exports: [NavigatioBarComponent,
  ]
})
export class CoreModule { }
