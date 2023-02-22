import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-assign',
  templateUrl: './reactive-assign.component.html',
  styleUrls: ['./reactive-assign.component.css']
})
export class ReactiveAssignComponent {
  reactiveForm: FormGroup;
  Subscriptions = ["Basic", "Advanced", "Pro"];
  minDate: Date;
  isSubmitted: boolean = false;
  default = 'Advanced';



  constructor(private fb: FormBuilder) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subscriptions: ['Advanced'],
      password: ['', Validators.required],
      date: ['', Validators.required]
    });

  }
  onSubmit() {
    this.isSubmitted = true;

    console.log(this.reactiveForm.value);
  }
}