import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/AuthService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register(form: any) {
    const { email, password, name } = form.value;
    if (name && email && password)
      this.userService.register(name, email, password);
  }

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {}
}
