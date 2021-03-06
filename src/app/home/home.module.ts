import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactModule } from '../contact/contact.module';
import { ContactsModule } from '../contacts/contacts.module';
import { HeaderModule } from '../header/header.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContactsModule,
    SidebarModule,
    RouterModule,
    HeaderModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
