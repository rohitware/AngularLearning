import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  count: number = 0;
  firstName: string = 'Rohit';
  lastname: string = 'Ware';


  @Input() child: string; // []
  @Output() fromChild: EventEmitter<string> = new EventEmitter<string>(); // (fromChild)
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

  sendToParent() {
    this.fromChild.emit(this.lastname);
  }


}
