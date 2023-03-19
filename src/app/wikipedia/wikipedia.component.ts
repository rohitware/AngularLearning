import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { WikipediaService } from '../Services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {
  search: any;
  searchResult: any = [];

  constructor(private _wikipediaService: WikipediaService) { }

  ngOnInit() {
    this.searchSpaces();
  }

  searchSpaces() {
    this._wikipediaService.getSpaces(this.search).subscribe(res => {
      this.searchResult = res.query.search;
      console.log('search wikipedia result', res);

    })

  }

  // searchSpaces() {
  //   this._wikipediaService.getSpaces(this.space).pipe(
  //     map(responseData => {
  //       console.log('before manipulate', responseData)
  //       // empty array 
  //       const postArray = [];
  //       // for in loop 
  //       for (const key in responseData) {
  //         // check the key 
  //         if (responseData.hasOwnProperty(key)) {
  //           // push new value into array 
  //           postArray.push({ ...responseData[key], id: key })
  //         }
  //       }
  //       return postArray;
  //     })
  //   ).subscribe(res => {
  //     console.log('wikipedia result', res);
  //     this.searchResult = res;

  //   })
  // }


}
