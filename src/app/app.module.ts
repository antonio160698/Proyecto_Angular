import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaseComponent } from './clase/clase.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { Parte4Component } from './components/parte4/parte4.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaseComponent,
    HeaderComponent,
    UserComponent,
    Parte4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
