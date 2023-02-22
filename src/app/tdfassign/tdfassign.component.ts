import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-tdfassign',
  templateUrl: './tdfassign.component.html',
  styleUrls: ['./tdfassign.component.css']
})
export class TDFAssignComponent {

  cities = ['Mumbai', 'Kolkata', 'Delhi'];

  userModel = new User('Rohit', 'Ware', 20, 'rohit@gmail.com', 9850979777, 'Mumbai', 'male', 'pass@123', 'pass@123')


  login(form: NgForm) {
    console.log(form);
    form.reset();
  }
}
