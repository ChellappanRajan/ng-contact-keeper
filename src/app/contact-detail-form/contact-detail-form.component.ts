import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ck-detail-form',
  templateUrl: './contact-detail-form.component.html',
  styleUrls: ['./contact-detail-form.component.scss']
})
export class ContactDetailFormComponent implements OnInit {
  // <!-- name:string,
  //   email:string,
  //   phoneNumber:number,
  //   jobtitleAndCompany:string,
  //   profilePicture:string,
  //   isFavourite:boolean -->

  contactForm = this._fb.group({
    name:[''],
    email:[],
    phoneNumber:[],
    jobtitleAndCompany:[],
    profilePictureUrl:[]
  })
  
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
