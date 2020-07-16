import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactsList:AngularFirestoreCollection<Contact>
  contacts:Observable<Contact[]>
  contactDoc: AngularFirestoreDocument<Contact>;

  constructor(private db:AngularFirestore) {
    this.contactsList = this.db.collection('contacts');
    this.contacts = this.contactsList.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contact;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   getContacts(){
     return this.contacts;
   }

   add(contact:Contact){
    this.contactsList.add(contact);
   }

   edit(contact:Contact){
     this.contactDoc=this.contactsList.doc(contact.id);
     console.log(contact.id)
     this.contactDoc.update(contact);
   }

   delete(contact:Contact){
     this.contactDoc=this.contactsList.doc(contact.id);
     this.contactDoc.delete();
   }
}

export interface Contact{
  id?:string
  fullName?:string;
  tele?:number;
}
