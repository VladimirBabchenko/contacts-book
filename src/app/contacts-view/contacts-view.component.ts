import { Component, OnInit, Output, Input } from '@angular/core';
import { Contact } from "../contact.model";

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.scss']
})
export class ContactsViewComponent implements OnInit {
  @Input() showingForm: boolean;

  selectedContact: Contact;

  constructor() { }

  ngOnInit() {
  }

  onShowDetail(contact) {
    this.selectedContact = contact;
  }

}
