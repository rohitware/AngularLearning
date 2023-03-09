import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../models/userModel';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private _route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];

    this._userService.getUserById(id).subscribe(res => {
      this.users = res;
      console.log(res);

    })
  }
}
