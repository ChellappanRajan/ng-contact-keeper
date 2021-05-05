import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../store/login/login-page.actions';

@Component({
  selector: 'ck-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store) { 
    this.store.select((app)=>app).subscribe(value=>{
      console.log(value);
    })
  }

  ngOnInit(): void {
  }

  logIn():void{
    this.store.dispatch(login({username:'Chellappan',password:'password'}))
  }

}
