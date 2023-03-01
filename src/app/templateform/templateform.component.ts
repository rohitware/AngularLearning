import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private objService: MyserviceService) { }

  ngOnInit() {
    this.objService.display();

    this.objService.print();


  }


  login(form: NgForm) {
    console.log(form);
    form.reset();
  }

  ageCalculator() {
    this.showAge = this.objService.ageCalculator(this.age);
  }
 
}
