import { Component, OnInit } from '@angular/core';
import { DemoService } from '../Services/demo.service';
import { MyserviceService } from '../Services/myservice.service';
import { RapidapiService } from '../Services/rapidapi.service';

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

  constructor(private _myService: MyserviceService, private _demoService: DemoService, private rapidapiService: RapidapiService) { }

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


}
