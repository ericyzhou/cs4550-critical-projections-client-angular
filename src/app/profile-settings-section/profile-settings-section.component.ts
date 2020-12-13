import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-profile-settings-section',
  templateUrl: './profile-settings-section.component.html',
  styleUrls: ['./profile-settings-section.component.css']
})
export class ProfileSettingsSectionComponent implements OnInit {

  user = {username: 'temp', password: '1234', email: '1324@5678.com', role: 'ADMIN'};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logout = () => {
    this.userService.logout()
      .then(response => alert('Logged out'));
  }

}
