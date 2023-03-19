import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  url = 'https://en.wikipedia.org/w/api.php';  

  constructor(private _httpClient: HttpClient) { }

  getSpaces(space: any):Observable<any> {
    return this._httpClient.get(this.url, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: space,
        origin: '*'
      }
    })
  }
}
