import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

   settings = false;
   reviews = true;
   comments = true;
   currTab = 0;

  constructor() { }

  ngOnInit(): void {
  }

  switchToSettings = () => {
    this.settings = false;
    this.reviews = true;
    this.comments = true;
  }

  switchToReviews = () => {
    this.settings = true;
    this.reviews = false;
    this.comments = true;
  }

  switchToComments = () => {
    this.settings = true;
    this.reviews = true;
    this.comments = false;
  }
}

enum ProfileTabs {
  Settings,
  Review,
  Comments
}
