import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @ContentChild("child", { static: false }) contentChild: ElementRef;
  @Input() parentData: string;
  @ViewChild("childhook", { static: false }) viewChild: ElementRef;
  counter;
  subscription: Subscription;
  num: number = 1;

  constructor(private _demoService: DemoService) {
    console.log('HooksComponent constructor called');
  }
  ngOnDestroy(): void {
    console.log('HooksComponent ngOnDestroy called');
    clearInterval(this.counter);
    this.subscription.unsubscribe();
  }

  ngAfterViewChecked(): void {
    console.log('HooksComponent ngAfterViewChecked called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
  }

  ngAfterViewInit(): void {
    console.log('HooksComponent ngAfterViewInit called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
  }

  ngAfterContentChecked(): void {
    console.log('HooksComponent ngAfterContentChecked called');
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);

  }
  ngAfterContentInit(): void {
    console.log('HooksComponent ngAfterContentInit called', this.contentChild);
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
  }
  ngDoCheck(): void {
    console.log('HooksComponent ngDoCheck called');
  }

  ngOnInit(): void {
    // use when we want to display, fetch data from API
    console.log(`HooksComponent ngOnInit Called.`);
    this.subscription = this._demoService.getUsers().subscribe(res => {
      console.log('users from hooks component', res);
    });
    // this.counter = setInterval(() => {
    //   this.num = this.num + 1;
    //   console.log(this.num);
    // }, 1000)
  }
  // first call after constructor
  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooksComponent ngOnChanges called', changes);
    for (const propname in changes) {
      const prop = changes[propname] // parentData
      console.log(prop);

      const { previousValue, currentValue, firstChange } = prop; // 

      console.log(`Prop name ${propname}`);
      console.log(`Prev value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First change  ${firstChange}`);

      console.log("---------------------");
    }

  }
}
