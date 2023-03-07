import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  todaysDate = new Date();

  price: number = 7000;

  employee = {
    empid: '1',
    empname: 'Jack'
  }

  countLenght: number = 500;

  constructor() { }

  ngOnInit() {
    console.log(this.todaysDate);
  }

}
