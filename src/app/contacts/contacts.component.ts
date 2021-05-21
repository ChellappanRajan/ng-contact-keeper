import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Contacts, ContactsState, getContacts } from '../store/contacts';



@Component({
  selector: 'ck-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts$!: Observable<Contacts[] | undefined>;

  constructor(private store: Store<ContactsState>,private route:Router) { }

  ngOnInit(): void {
    this.store.subscribe(value=>{
      console.log(value);
    })
    this.contacts$ = this.getContacts().pipe(tap((contacts)=>console.log(contacts)));
  }

  getContacts():Observable<Contacts[] | undefined>{
    return this.store.select(getContacts);
  }

  addContact():void{
    this.route.navigate(['/contacts/add-contact']);
  }

}
