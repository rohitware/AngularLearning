import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-user-details-auth',
  templateUrl: './user-details-auth.component.html',
  styleUrls: ['./user-details-auth.component.css']
})
export class UserDetailsAuthComponent implements OnInit {
  users: any;

  constructor(private activateRoute:  ActivatedRoute) { }

  ngOnInit() {

    this.users = this.activateRoute.snapshot.data['data'];
    console.log(`resolve data before route`,this.users);
    
   }

}
