import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards: string[][] = [
    ['UDEMY', 'Cheap courses from Udemy', 'udemy'],
    ['PLURALSIGHT', 'Cheap courses from Pluralsight', 'pluralsight'],
    ['UDACITY', 'Cheap courses from Udacity', 'udacity'],
  ];

  ngOnInit(): void {}
}
