import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
