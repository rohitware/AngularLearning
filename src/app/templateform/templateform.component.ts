import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../Services/myservice.service';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  defaultValue = 'Angular';
  defaultGender = 'Male';
  courses: string[] = ['Angular', 'Javascript', 'Typescript'];
  genders = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  emails = '';
  showAge: number;
  age: any;
  constructor(private objService: MyserviceService, private _router: Router) { }

  ngOnInit() {
    this.objService.display();

    this.objService.print();

  }


  login(form: NgForm) {
    this._router.navigate(['/userdata'])
    console.log(form);
    form.reset();
  }

  ageCalculator() {
    this.showAge = this.objService.ageCalculator(this.age);
  }

}
