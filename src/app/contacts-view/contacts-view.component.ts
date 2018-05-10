import { Component, OnInit, Output } from '@angular/core';
import { Contact } from "../contact.model";

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.scss']
})
export class ContactsViewComponent implements OnInit {

  selectedContact: Contact;

  constructor() { }

  ngOnInit() {
  }

  onShowDetail(contact) {
    this.selectedContact = contact;
  }

}
