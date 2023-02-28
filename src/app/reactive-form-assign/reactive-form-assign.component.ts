import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { identityRevealedValidator } from 'src/shared/confirm-password.validator';
@Component({
  selector: 'app-reactive-form-assign',
  templateUrl: './reactive-form-assign.component.html',
  styleUrls: ['./reactive-form-assign.component.css']
})
export class ReactiveFormAssignComponent {
  userForm: FormGroup;
  gender = ['male', 'female'];
  countries = ['India', 'UK', 'USA'];
  phoneNumber = "[7-9]{1}[0-9]{9}";


  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      bio: ['', [Validators.required, Validators.maxLength(256)]],



      accountDetails: this.fb.group({
        username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern("^[A-Za-z][A-Za-z0-9_]{0,24}$")]],
        email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{5,12}$")]],
        confirmPassword: ['', Validators.required],
        check: ['', Validators.required],
      })

    }, { validators: identityRevealedValidator });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
