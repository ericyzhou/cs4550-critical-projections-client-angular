import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-profile-settings-section',
  templateUrl: './profile-settings-section.component.html',
  styleUrls: ['./profile-settings-section.component.css']
})
export class ProfileSettingsSectionComponent implements OnInit {

  user = {username: 'temp', password: '1234', email: '1324@5678.com', role: ''};

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  isProfileOwner = () => {
    return false;
  }

  updateProfile = () => {
    this.userService.updateUser(this.user.username, this.user)
      .then(updatedUser => this.user = updatedUser);
  }

  logout = () => {
    console.log('not that user anymore');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const userId = params.userId;
      if (typeof userId !== 'undefined') {
        this.userService.getUserById(userId)
          .then(pageUser => this.user = pageUser);
      }
    });
  }

}
