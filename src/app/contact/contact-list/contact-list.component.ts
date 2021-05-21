import { ChangeDetectionStrategy,EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';

export interface Contacts{
  name:string,
  email:string,
  phoneNumber:number,
  jobtitleAndCompany:string,
  profilePicture:string,
  isFavourite:boolean
}

@Component({
  selector: 'ck-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
  
  @Input() contacts!: Observable<Contacts[] | undefined>;
  @Output() addContactClick = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  addContact(event:Event):void{
    this.addContactClick.emit(event);
  }


}
