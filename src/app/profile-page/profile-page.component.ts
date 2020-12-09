import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user = {username: 'temp', password: '1234', email: '1324@5678.com', role: 'ADMIN'};

  constructor() { }

  ngOnInit(): void {
  }

}
