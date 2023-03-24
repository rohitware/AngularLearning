import { Component, OnInit } from '@angular/core';
import { from, interval, of, timer } from 'rxjs';
import { take, takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // of and from operators
    const ofObs = of([1, 2, 3]);

    ofObs.subscribe(res => {
      console.log('of example', res);
    });

    const fromObs = from([1, 2, 3]);

    fromObs.subscribe(res => {
      console.log(`from example`, res);
    });


    // Take operator 
    const source = interval(1000);
    source.pipe(
      take(5)
    ).subscribe(res => {
      console.log('take operator', res)
    })

    // take last 
    let randomNames = ['Rohit', 'Codemind', 'Angular', 'HTML', 'Javascript', 'Typescript'];
    const results = from(randomNames);
    results.pipe(
      takeLast(2)
    ).subscribe(res => {
      console.log('takeLast example', res);
    })

    // takeUntil 
    const custObs = interval(1000);
    let condition = timer(6000);
    custObs.pipe(
      takeUntil(condition)
    ).subscribe(res => {
      console.log('takeUntil', res)
    })
  }
}

