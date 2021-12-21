import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  cards: string[][] = [
    ['UDEMY', 'Cheap courses from Udemy'],
    ['PLURALSIGHT', 'Cheap courses from Pluralsight'],
    ['UDACITY', 'Cheap courses from Udacity'],
  ];

  ngOnInit(): void {}
}
