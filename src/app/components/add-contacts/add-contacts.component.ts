import { Contact, ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {

  contact:Contact={
    fullName:'',
    tele:undefined
  }

  isTxt="show form"

  isTrue=false

  constructor(private cnt:ContactService) { }
  
  changes(){
    this.isTrue=!this.isTrue;
    this.isTrue?this.isTxt="hide form":this.isTxt="show form"
  }

  addContact(){
    if(this.contact.fullName.length==0||this.contact.tele==undefined){
      alert("les champs sont aubligatoires");
    }
    else{
      this.cnt.add(this.contact);
      this.contact.fullName="";
      this.contact.tele=undefined;
      this.isTrue=false;
    }

  }

  ngOnInit(): void {
  }


}
