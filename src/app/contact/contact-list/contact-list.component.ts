import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-keeper-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}