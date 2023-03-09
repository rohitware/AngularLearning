import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
    return this.http.get<Post>(this.url);
  }

  getPostById(id: number):Observable<any> {
   return this.http.get<Post>(this.url + '/' + id);
  }
}
