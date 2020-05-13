import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { CardComponent } from './parts/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    P404Component,
    AdminComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
