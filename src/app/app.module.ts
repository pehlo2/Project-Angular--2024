import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';
import { TextCardComponent } from './shared/text-card/text-card.component';
import { HomeComponent } from './home/home.component';
import { ShoeModule } from './shoe/shoe.module';
import { CatalogComponent } from './catalog/catalog.component';




@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponentComponent,
    TextCardComponent,
    HomeComponent,
    CatalogComponent,
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    ShoeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
