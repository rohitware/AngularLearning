import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
  constructor(private httpClient : HttpClient) { }

  getFinance() {
    let headers=new HttpHeaders({
        'X-RapidAPI-Key': '0958eee78dmsh756247b27bb46c3p1810f1jsnd92e4163e708',
        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    })
    return this.httpClient.get(this.url,{headers: headers});

  }
}