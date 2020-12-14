import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-profile-settings-section',
  templateUrl: './profile-settings-section.component.html',
  styleUrls: ['./profile-settings-section.component.css']
})
export class ProfileSettingsSectionComponent implements OnInit {

  user = {_id: 0, username: 'temp', password: '1234', email: '1324@5678.com', role: ''};
  currentUser = {_id: 0};

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  // false -> owner, true -> not owner
  isProfileOwner = () => {
    return !(this.user._id === this.currentUser._id);
  }

  updateProfile = () => {
    this.userService.updateUser(this.user._id, this.user)
      .then(response => console.log(response));
  }

  logout = () => {
    this.userService.logout()
      .then(response => alert('Logged out'));
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const userId = params.userId;
      if (typeof userId !== 'undefined') {
        this.userService.getUserById(userId)
          .then(pageUser => this.user = pageUser);
      }
      this.userService.getCurrentUser()
        .then(currUser => this.currentUser = currUser);
    });
  }

}
