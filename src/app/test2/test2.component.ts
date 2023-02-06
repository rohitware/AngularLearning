import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  count: number = 0;
  firstName: string = 'Rohit';

  @Input() child: string; // []
  constructor() { }

  ngOnInit() {
    console.log(this.child);

  }
  onSave() {
    let counts = this.count += 1;
    console.log(counts);
  }

  onKeyUp(value) {
    console.log('$event', value.target.value)
  }
}
