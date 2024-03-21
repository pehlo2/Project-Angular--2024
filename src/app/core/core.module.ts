import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatioBarComponent } from './navigatio-bar/navigatio-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SearchBarShoeComponent } from '../shoe/search-bar-shoe/search-bar-shoe.component';
import { ShoeModule } from '../shoe/shoe.module';
import { UserModule } from '../user/user.module';




@NgModule({
  declarations: [
    NavigatioBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,RouterModule,ShoeModule,UserModule
  ],
  exports: [NavigatioBarComponent,
    FooterComponent]
})
export class CoreModule { }
