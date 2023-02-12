import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assign',
  templateUrl: './directives-assign.component.html',
  styleUrls: ['./directives-assign.component.css']
})
export class DirectivesAssignComponent implements OnInit {

  content = 'Name = Rohit';
  isContentVisible = false;
  togglingLog = [];
  limit = 4;

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    const timestamp = new Date();
    this.togglingLog.push(timestamp);
    this.isContentVisible = !this.isContentVisible;
  }

  getColor(i: number): string {
    if (i >= this.limit) {
      return 'blue';
    } else {
      return 'white';
    }
  }

  getFontColor(i: number): string {
    if (i >= this.limit) {
      return 'white';
    } 
  }

}
