import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username = '';
  password = '';
  confirmPassword = '';
  role = '';

  validUsername = false;
  validPassword = false;
  validRole = false;

  validUsernameCheck = () => {
    this.userService.getUserByName(this.username)
      .then(response => this.validUsername = response.response);
  }

  matchingPasswordCheck = () => {
    return this.password === this.confirmPassword;
  }

  validRoleCheck = () => {
    return this.validRole;
  }

  createUser = () => {
    this.userService.createUser({username: this.username, password: this.password, role: this.role})
      .then(response => console.log(response));
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.role = '';
  }

}
