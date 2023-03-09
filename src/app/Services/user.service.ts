import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http: HttpClient) { }

  getUser(): Observable<any> {
    return this._http.get<UserModel>(this.url);
  }

  getUserById(id: number):Observable<any> {
    return this._http.get<UserModel>(this.url + '/' + id);
   }
}
