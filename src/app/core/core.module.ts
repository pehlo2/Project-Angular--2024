import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatioBarComponent } from './navigatio-bar/navigatio-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../shared/search/search.component';



@NgModule({
  declarations: [
    NavigatioBarComponent,
    FooterComponent,SearchComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [NavigatioBarComponent,
    FooterComponent]
})
export class CoreModule { }
