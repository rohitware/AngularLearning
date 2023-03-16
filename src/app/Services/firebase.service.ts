import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url = 'https://angularcrudcodemind-default-rtdb.firebaseio.com/';

  constructor(private _httpClient: HttpClient) { }

  createPosts() {
    let postData = {
      title: 'this is firebase example',
      content: 'we are calling angular post'
    }
    return this._httpClient.post(this.url + 'post.json', postData)
  }

  getPostDataFirebase() {
    return this._httpClient.get(this.url + 'post.json');
  }

  // getPostDataFirebase():Observable<any> {
  //   return this._httpClient.get(this.url + 'post.json').pipe(
  //     map((res: Response) => res.json()));
  // }

}