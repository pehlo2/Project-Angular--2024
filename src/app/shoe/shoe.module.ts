import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { ShoeRoutingModule } from './shoe-routing.module';
import { ShoeListComponent } from './shoe-list/shoe-list.component';



@NgModule({
  declarations: [
    AddShoeComponent,
    ShoeListComponent
  ],
  imports: [
    CommonModule, ShoeRoutingModule
  ],
  exports:[ AddShoeComponent,
    ShoeListComponent]
  
})
export class ShoeModule { }
