import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/AuthService/user.service';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class ProfileComponent implements OnInit {
  email() {
    return this.userService.username;
  }

  constructor(private userService: UserService) {}
  ngOnInit(): void {}
}
