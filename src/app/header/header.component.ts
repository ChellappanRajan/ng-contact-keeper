import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ck-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
