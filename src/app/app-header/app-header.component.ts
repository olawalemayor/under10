import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let navButton = document.getElementById('mobile-menu') as HTMLButtonElement;
    navButton.addEventListener('click', () => {
      let mobileNav = document.getElementById('mobile-header');
      mobileNav?.classList.toggle('show-menu');
    });
  }
}
