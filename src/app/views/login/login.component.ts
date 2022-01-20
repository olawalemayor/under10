import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/AuthService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login(form: any) {
    const { email, password } = form.value;
    if (email && password) this.userService.login(email, password);
  }

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {}
}
