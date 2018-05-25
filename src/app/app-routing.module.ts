import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import { PageNotFoundComponent } from './page-not-found/not-found.component';

const routes: Routes = [
    { path: "", component: ContactsViewComponent },
    { path: "contacts", component: ContactsComponent},
    { path: "detail", component: ContactDetailComponent },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


