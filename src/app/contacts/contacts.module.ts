import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactModule } from '../contact/contact.module';
import { ContactsComponent } from './contacts.component';


@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactModule
  ]
})
export class ContactsModule { }
