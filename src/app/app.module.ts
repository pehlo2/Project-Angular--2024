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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth-guard.activate';



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
    CommonModule,
    CoreModule,
    UserModule,
    ShoeModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [AppInterceptorProvider,AuthGuard],
  bootstrap: [AppComponent],
  exports: [AuthenticateComponent]
})
export class AppModule { }
