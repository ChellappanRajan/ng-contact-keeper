import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactModule } from '../contact/contact.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactModule,
    SidebarModule,
    HomeModule
  ]
})
export class ContactsModule { }
