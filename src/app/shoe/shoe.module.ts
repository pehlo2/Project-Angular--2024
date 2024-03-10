import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { ShoeRoutingModule } from './shoe-routing.module';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoeCardComponent } from './shoe-card/shoe-card.component';



@NgModule({
  declarations: [
    AddShoeComponent,
    ShoeListComponent,
    ShoeCardComponent
  ],
  imports: [
    CommonModule, ShoeRoutingModule,ReactiveFormsModule
  ],
  exports:[ AddShoeComponent,
    ShoeListComponent]
  
})
export class ShoeModule { }
