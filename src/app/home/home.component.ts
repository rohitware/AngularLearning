import { Component, OnInit } from '@angular/core';
import { DemoService } from '../Services/demo.service';
import { FirebaseService } from '../Services/firebase.service';
import { MyserviceService } from '../Services/myservice.service';
import { RapidapiService } from '../Services/rapidapi.service';
import { filter, map } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  namesearch: string = '';
  products = {};
  public users: any;
  finarray: any;
  receiveddata: any[];
  firebaseRes: any;

  constructor(private _myService: MyserviceService, private _demoService: DemoService, private rapidapiService: RapidapiService, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.products = this._myService.products;
    this._demoService.getUsers().subscribe(res => {
      this.users = res;
    }, err => {
      console.log(err);
    })

    this.rapidapiService.getFinance().subscribe(res => {
      console.log('Rapid Response', res);
      this.finarray = res;
    })


    // 1 2 3 o/p 2, 3, 4
    const obs = of(1,2,3).pipe(
      map(x => x + 1)
     ).subscribe(res => {
      console.log('obs of', res);
     })	 
	 
	 
	 // // emit (1,2,3,4,5)
    // const source = from([1,2,3,4,5]);

    // // filter out non-even numbers 
    
    // const example = source.pipe(filter(num => num % 2 === 0));
    // example.subscribe(res => {
    //   console.log(`Even number: ${res}`);
    // })


  }

  parentToChild: string = "I am coming from parent ";

  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ]

  name = 'Rohit';

  imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';

  d: Date = new Date();

  d1: string = new Date().toLocaleString();


  onParent(val: any) {
    console.log('from child to parent', val);
  }

  empObj(val: any) {
    console.log(val);
  }

  CreatePost() {
    this.firebaseService.createPosts().subscribe(res => {
      console.log('firebane post', res);
    })
  }

  // getData() {
  //   this.firebaseService.getPostDataFirebase().subscribe(res => {
  //     console.log('get data', res);
  //      this.firebaseRes = res;
  //   })
  // }

  getData() {
    this.firebaseService.getPostDataFirebase().pipe(
      map(responseData => {
        console.log('before manipulate', responseData)
        // empty array 
        const postArray = [];
        // for in loop 
        for (const key in responseData) {
          // check the key 
          if (responseData.hasOwnProperty(key)) {
            // push new value into array 
            postArray.push({ ...responseData[key], id: key })
          }
        }
        return postArray;
      })
    ).subscribe(res => {
      console.log('after manipulate data', res);
      this.firebaseRes = res;

    })
  }

}
