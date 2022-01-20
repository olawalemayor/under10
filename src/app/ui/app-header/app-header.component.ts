import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/AuthService/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {
  constructor(private userService: UserService) {}

  isAuthenticated() {
    return this.userService.isAuthenticated;
  }
  userName() {
    return this.userService.username;
  }

  logOut() {
    return this.userService.logOut();
  }

  ngOnInit(): void {
    let navButton = document.getElementById('mobile-menu') as HTMLButtonElement;
    navButton.addEventListener('click', () => {
      let mobileNav = document.getElementById('mobile-header');
      mobileNav?.classList.toggle('show-menu');
    });

    window.addEventListener('scroll', () => {
      let header = document.querySelector('header') as HTMLHeadElement;
      let headerHeight: number = header.offsetHeight;
      if (window.scrollY > headerHeight) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    });
  }
}
