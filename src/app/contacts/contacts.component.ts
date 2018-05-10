import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contacts } from '../mock-contacts';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Output() onShowDetail = new EventEmitter();
  contacts = Contacts;

  constructor() { }

  ngOnInit() {
  }

  showDetail(contact) {
    this.onShowDetail.emit(contact);
  }
}
