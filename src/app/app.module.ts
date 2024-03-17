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

import { SharedModule } from './shared/shared.module';
import { AppInterceptorProvider } from './interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';



@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponentComponent,
    TextCardComponent,
    HomeComponent,
    AuthenticateComponent,
  
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    ShoeModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
