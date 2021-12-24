import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css'],
})
export class AppFooterComponent implements OnInit {
  constructor() {}

  links: string[][] = [
    ['Udemy', 'udemy'],
    ['Pluralsight', 'pluralsight'],
    ['Udacity', 'udacity'],
  ];

  resources: string[][] = [
    ['Google', 'https://www.google.com'],
    ['DevDocs', 'https://devdocs.io'],
    ['GitHub', 'https://github.io'],
  ];

  ngOnInit(): void {}
}
