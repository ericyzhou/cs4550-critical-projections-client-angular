import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user = {username: '', password: '', email: '', role: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
