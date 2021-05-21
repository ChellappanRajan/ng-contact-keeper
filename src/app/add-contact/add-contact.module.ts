import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact.component';
import { ContactFormModule } from '../contact-detail-form/contact-form.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddContactComponent
  ],
  imports: [
    CommonModule,
    ContactFormModule,
    RouterModule.forChild([{
      path:'',
      component:AddContactComponent
    }])
  ],
  exports:[AddContactComponent]
})
export class AddContactModule { }
