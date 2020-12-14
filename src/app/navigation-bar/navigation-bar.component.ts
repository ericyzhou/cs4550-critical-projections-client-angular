import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  userLoggedIn = false;
  currentUser = {id: 0, username: '', password: '', email: '', role: '', profilePic: ''};

  constructor(private userService: UserService,
              private router: Router) { }

  logout = () => {
    this.userService.logout()
      .then(response => {
        this.userLoggedIn = false;
        this.currentUser = {id: 0, username: '', password: '', email: '', role: '', profilePic: ''};
        this.router.navigate([''])
          .then(log => console.log(log)); });
  }

  ngOnInit(): void {
    this.userLoggedIn = false;
    this.currentUser = {id: 0, username: '', password: '', email: '', role: '', profilePic: ''};
    this.userService.getCurrentUser()
      .then(response => {
        if (response.response === 1) {
          this.userLoggedIn = true;
          this.currentUser = response.user;
        } else {
          this.userLoggedIn = false;
          this.currentUser = {id: 0, username: '', password: '', email: '', role: '', profilePic: ''};
        }});
  }

}
