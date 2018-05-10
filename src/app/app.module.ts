import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContentHeaderMenuComponent } from './content-header-menu/content-header-menu.component';
import { UserBlockComponent } from './sidebar-user-block/user-block.component';
import { SearchBlockComponent } from './sidebar-search-block/search-block.component';
import { ContactsCategoriesComponent } from './sidebar-contacts-categories/contacts-categories.component';
import { BirthdayComponent } from './sidebar-birthday/birthday.component';
import { NewContactComponent } from './sidebar-new-contact/new-contact.component';
import { ContactFormAvatarComponent } from './contact-form-avatar/contact-form-avatar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContactsViewComponent,
    ContactsComponent,
    ContactFormComponent,
    ContactDetailComponent,
    ContentHeaderMenuComponent,
    UserBlockComponent,
    SearchBlockComponent,
    ContactsCategoriesComponent,
    BirthdayComponent,
    NewContactComponent,
    ContactFormAvatarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
