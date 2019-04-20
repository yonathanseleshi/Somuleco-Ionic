import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/User';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {UserDataService} from '../services/user-data/user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;

  constructor(private user: User, private auth: AuthenticationService, private userData: UserDataService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({


      'fName': new FormControl(null, [Validators.required, Validators.maxLength(35)]),
      'lName': new FormControl(null, [Validators.required, Validators.maxLength(35)]),
      'userName': new FormControl(null, Validators.required),
      'displayName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirmPassword': new FormControl(null, [Validators.required, Validators.minLength(8)])

    });

  }


  onSignup() {

    if (this.signupForm.valid) {

      this.user.firstName = this.signupForm.get('fName').value;
      this.user.lastName = this.signupForm.get('lName').value;
      this.user.userName = this.signupForm.get('userName').value;
      this.user.email = this.signupForm.get('email').value;
      this.user.displayName = this.signupForm.get('displayName').value;
      this.user.password = this.signupForm.get('password').value;

    }

  }
}
