import { ContactService, Contact, } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  listCntcts: any[]
  forEdit = false
  id: string = ""
  con: Contact = {
    id: "",
    fullName: "",
    tele: undefined
  };
  constructor(private contact: ContactService) { }

  saveEdit(contact) {
    this.contact.edit(contact);
    this.forEdit = !this.forEdit;

  }

  removeContact(contact) {
    if (confirm('are you sure to delete this contact'))
      this.contact.delete(contact);
  }

  ngOnInit(): void {
    this.contact.getContacts().subscribe(
      contacts => {
        this.listCntcts = contacts
        console.log(contacts)
      }
    );
  }

  showForm(contact) {
    this.forEdit = !this.forEdit;
    this.con = contact
    console.log(this.con)
  }

}
