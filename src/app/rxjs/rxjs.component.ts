import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // of and from operators
    const ofObs = of([1,2,3]);

    ofObs.subscribe(res=>{
      console.log('of example', res);      
    });

    const fromObs = from([1,2,3]);

    fromObs.subscribe(res=>{
      console.log(`from example`, res);
      
    })
  }

}
