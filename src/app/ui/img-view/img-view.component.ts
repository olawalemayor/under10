import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-view',
  templateUrl: './img-view.component.html',
  styleUrls: ['./img-view.component.css'],
})
export class ImgViewComponent implements OnInit {
  constructor() {}

  images: string[][] = [
    ['../../../assets/images/AAPL.webp', 'Apple'],
    ['../../../assets/images/ADBE.webp', 'Adobe'],
    ['../../../assets/images/AMZN.webp', 'Amazon'],
    ['../../../assets/images/CSCO.webp', 'Cisco'],
    ['../../../assets/images/FB.webp', 'Facebook'],
    ['../../../assets/images/GOOG.webp', 'Google'],
    ['../../../assets/images/IBM.webp', 'IBM'],
    ['../../../assets/images/MSFT.webp', 'Microsoft'],
  ];

  ngOnInit(): void {}
}
