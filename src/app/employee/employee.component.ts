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
    // this.empFrmChild.emit(this.emp.id);
    // this.empFrmChild.emit(this.emp.name);
    // this.empFrmChild.emit(this.emp.adderss);




  }
}
