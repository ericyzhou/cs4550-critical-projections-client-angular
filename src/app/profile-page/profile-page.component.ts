import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  settings = true;
   reviews = true;
   comments = true;
   error = false;
   userId = '';

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser()
      .then(response => console.log(response));
    this.activatedRoute.params.subscribe(params => {
      const userId = params.userId;
      if (typeof userId !== 'undefined') {
        this.userId = userId;
      }
      const tab = params.tab;
      if (typeof tab !== 'undefined') {
        switch (tab) {
          case 'settings':
            this.switchToSettings();
            break;
          case 'reviews':
            this.switchToReviews();
            break;
          case 'comments':
            this.switchToComments();
            break;
          default:
            this.switchToError();
        }
      }
    });
  }

  switchToSettings = () => {
    this.settings = false;
    this.reviews = true;
    this.comments = true;
    this.error = true;
  }

  switchToReviews = () => {
    this.settings = true;
    this.reviews = false;
    this.comments = true;
    this.error = true;
  }

  switchToComments = () => {
    this.settings = true;
    this.reviews = true;
    this.comments = false;
    this.error = true;
  }

  switchToError = () => {
    this.settings = true;
    this.reviews = true;
    this.comments = true;
    this.error = false;
  }
}
