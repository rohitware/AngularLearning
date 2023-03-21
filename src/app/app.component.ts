import { Component, OnInit } from '@angular/core';
import { DemoService } from './Services/demo.service';
import { MyserviceService } from './Services/myservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular App';
  data: string = 'red';

  changeFromParrent() {
    this.data += 1;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // name: string = '';

  // products = {};
  // public users: any;

  // constructor(private _myService: MyserviceService, private _demoService: DemoService) { }

  // ngOnInit(): void {
  //   this.products = this._myService.products;
  //   this._demoService.getUsers().subscribe(res => {
  //     this.users = res;
  //   }, err => {
  //     console.log(err);
  //   })
  // }

  // parentToChild: string = "I am coming from parent ";

  // posts = [
  //   {
  //     title: 'Pam Tree',
  //     content: 'I love this tree'
  //   },
  //   {
  //     title: 'Mango Tree',
  //     content: 'I love this tree'
  //   }
  // ]

  // // name = 'Rohit';

  // imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';

  // d: Date = new Date();

  // d1: string = new Date().toLocaleString();


  // onParent(val: any) {
  //   console.log('from child to parent', val);
  // }

  // empObj(val: any) {
  //   console.log(val);
  // }


  handleData(value) {

    this.data = value.target.value;

  }

}
