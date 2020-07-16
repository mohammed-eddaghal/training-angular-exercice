import { ContactService } from './services/contact.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListContactComponent,
    AddContactComponent,
    AddContactsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
