import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDetailFormComponent } from './contact-detail-form.component';


@NgModule({
  declarations: [
    ContactDetailFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[ContactDetailFormComponent]
})
export class ContactFormModule { }
