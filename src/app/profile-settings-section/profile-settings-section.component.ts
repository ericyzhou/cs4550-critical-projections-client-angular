import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-settings-section',
  templateUrl: './profile-settings-section.component.html',
  styleUrls: ['./profile-settings-section.component.css']
})
export class ProfileSettingsSectionComponent implements OnInit {

  user = {username: 'temp', password: '1234', email: '1324@5678.com', role: 'ADMIN'};

  constructor() { }

  ngOnInit(): void {
  }

}
