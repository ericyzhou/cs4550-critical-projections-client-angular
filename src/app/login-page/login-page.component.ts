import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username = '';
  password = '';
  validUsername = false;
  invalidUsernameNotification = false;
  invalidPasswordNotification = false;

  validateUsername = () => {
    this.userService.usernameIsValid(this.username)
      .then(response => this.validUsername = response.response === 0);
  }

  attemptLogin = () => {
    if (this.validUsername) {
      this.invalidUsernameNotification = false;
      this.userService.getUserByLogin({username: this.username, password: this.password})
        .then(response => this.serviceLogin(response));
    } else {
      this.invalidUsernameNotification = true;
    }
  }

  handleKeyPress = (target: { charCode: number; }) => {
    if (target.charCode === 13) {
      this.attemptLogin();
    }
  }

  serviceLogin = (serviceResponse: {response: number, user: any}) => {
    if (serviceResponse.response === 0) {
      this.invalidPasswordNotification = true;
    } else {
      this.router.navigate([''])
        .then(response => console.log(response));
    }
  }

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.validUsername = false;
    this.invalidUsernameNotification = false;
    this.invalidPasswordNotification = false;
  }

}
