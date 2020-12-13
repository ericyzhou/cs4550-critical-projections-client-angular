import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  role = '';

  validUsername = false;
  validEmail = false;
  validPassword = false;
  validRole = false;

  validUsernameCheck = () => {
    if (this.username === '') {
      this.validUsername = false;
    } else {
      this.userService.usernameIsValid(this.username)
        .then(response => this.validUsername = response.response === 1);
    }
  }

  validEmailCheck = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.validEmail = this.email !== '' && re.test(String(this.email).toLowerCase());
  }

  matchingPasswordCheck = () => {
    console.log(this.password);
    console.log(this.confirmPassword);
    this.validPassword = (this.password === this.confirmPassword) && (this.password !== '');
  }

  validRoleCheck = () => {
    console.log(this.role);
    this.validRole = this.role !== '';
  }

  createUser = () => {
    this.userService.createUser({username: this.username, password: this.password, role: this.role})
      .then(response => console.log(response));
    this.router.navigate([`user/${this.username}`])
      .then(response => console.log(response));
  }

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.role = '';
  }

}
