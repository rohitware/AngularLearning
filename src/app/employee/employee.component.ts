import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp = {
    id: 111,
    name: 'yashraj',
    adderss: 'pune'

  }

  @Output() public empFrmChild = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(): void {
    this.empFrmChild.emit(this.emp);

    console.log(this.emp.id, this.emp.name, this.emp.adderss);
    console.log(`onject details `,this.emp);

    
  }
}
