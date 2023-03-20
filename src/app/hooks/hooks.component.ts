import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit {

  @Input() parrentData: number;

  constructor(private _demoService: DemoService) {
    console.log('HooksComponent constructor called');
  }

  ngOnInit(): void {
    // use when we want to display, fetch data from API
    console.log(`HooksComponent ngOnInit Called.`);
    this._demoService.getUsers().subscribe(res => {
      console.log(`res from ngOnInit`, res);
    })
  }
  // first call after constructor
  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooksComponent ngOnChanges called', changes);
  }

}
