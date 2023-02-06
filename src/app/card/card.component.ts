import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: any;
  @Input() content: any;
  constructor() { }

  ngOnInit() {
    console.log(this.title);

    console.log(this.content);
  }

}
