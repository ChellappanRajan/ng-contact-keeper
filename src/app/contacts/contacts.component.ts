import { Component, OnInit } from '@angular/core';


export interface Contacts{
  name:string,
  email:string,
  phoneNumber:number,
  jobtitleAndCompany:string,
  profilePicture:string,
  isFavourite:boolean
}

@Component({
  selector: 'ck-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contacts[] = [
    {
      name:'Chellappan',
      email:'chellappan@gmail.com',
      phoneNumber:8754638712,
      jobtitleAndCompany:'Senior Consultant',
      profilePicture:'',
      isFavourite:false
    },
    {
      name:'Chellappan',
      email:'chellappan@gmail.com',
      phoneNumber:8754638712,
      jobtitleAndCompany:'Senior Consultant',
      profilePicture:'',
      isFavourite:false
    },
    {
      name:'Chellappan',
      email:'chellappan@gmail.com',
      phoneNumber:8754638712,
      jobtitleAndCompany:'Senior Consultant',
      profilePicture:'',
      isFavourite:false
    },
    {
      name:'Chellappan',
      email:'chellappan@gmail.com',
      phoneNumber:8754638712,
      jobtitleAndCompany:'Senior Consultant',
      profilePicture:'',
      isFavourite:false
    },
    {
      name:'Chellappan',
      email:'chellappan@gmail.com',
      phoneNumber:8754638712,
      jobtitleAndCompany:'Senior Consultant',
      profilePicture:'',
      isFavourite:false
    },
    {
      name:'Chellappan',
      email:'chellappan@gmail.com',
      phoneNumber:8754638712,
      jobtitleAndCompany:'Senior Consultant',
      profilePicture:'',
      isFavourite:false
    }, {
      name:'Chellappan',
      email:'chellappan@gmail.com',
      phoneNumber:8754638712,
      jobtitleAndCompany:'Senior Consultant',
      profilePicture:'',
      isFavourite:false
    }, {
      name:'Chellappan',
      email:'chellappan@gmail.com',
      phoneNumber:8754638712,
      jobtitleAndCompany:'Senior Consultant',
      profilePicture:'',
      isFavourite:false
    }, {
      name:'Chellappan',
      email:'chellappan@gmail.com',
      phoneNumber:8754638712,
      jobtitleAndCompany:'Senior Consultant',
      profilePicture:'',
      isFavourite:false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
