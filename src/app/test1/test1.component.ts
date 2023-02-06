import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  username: string;

  constructor() { }

  ngOnInit() {

  }
  clearField() {
    this.username = null;
    console.log(`field get cleared`);
  }
}


