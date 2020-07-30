import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home.component";
import {AboutComponent} from "./components/about.component";
import {AuthenticationModule} from "./authentication/authentication.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AUTH_INIT_PROVIDER} from "./app-initializer";
import {MSAL_CFG_PROVIDER, NG_CFG_PROVIDER} from "./auth-config";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AuthenticationModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AUTH_INIT_PROVIDER,
    NG_CFG_PROVIDER,
    MSAL_CFG_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
