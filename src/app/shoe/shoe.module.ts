import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { ShoeRoutingModule } from './shoe-routing.module';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoeCardComponent } from './shoe-card/shoe-card.component';
import { ShoeDetailsPageComponent } from './shoe-details-page/shoe-details-page.component';
import { UpdateShoeComponent } from './update-shoe/update-shoe.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SearchBarShoeComponent } from './search-bar-shoe/search-bar-shoe.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AddShoeComponent,
    ShoeListComponent,
    ShoeCardComponent,
    ShoeDetailsPageComponent,
    UpdateShoeComponent,
    SearchBarShoeComponent,
  ],
  imports: [
    CommonModule,MatPaginatorModule, ShoeRoutingModule,ReactiveFormsModule,SharedModule,
  ],
  exports:[ AddShoeComponent,
    ShoeListComponent,SearchBarShoeComponent]
  
})
export class ShoeModule { }
