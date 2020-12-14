import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  searchTerm = '';
  userLoggedIn = false;
  currentUser = {id: 0, username: '', password: '', email: '', role: '', profilePic: ''};

  constructor(private userService: UserService,
              private router: Router) { }

  searchMovie = () => {
    this.router.navigate([`/search/${this.searchTerm}`])
      .then(response => console.log(response));

  }

  handleKeyPress = (target: { charCode: number; }) => {
    if (target.charCode === 13) {
      this.searchMovie();
    }
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
