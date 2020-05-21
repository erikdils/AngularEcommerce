import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HeaderComponent } from './parts/general/header/header.component';
import { FooterComponent } from './parts/general/footer/footer.component';
import { CardComponent } from './parts/special/card/card.component';
import {ExtraAlertComponent} from './parts/general/extra-alert/extra-alert.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    P404Component,
    AdminComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ExtraAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
