import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class LoginService {
  URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }


  login(userInfo:{username:string,password:string}): Observable<any>{
    return this.http.post(this.URL,{userId:'1'});
  }

}