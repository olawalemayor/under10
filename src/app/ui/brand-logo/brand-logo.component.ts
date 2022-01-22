import { Component } from '@angular/core';

@Component({
  selector: 'site-logo',
  template: `<a routerLink="/"
    ><div id="logo">Under <span>10</span> Bucks</div></a
  >`,
  styles: [
    `
      #logo {
        font-size: var(--bigHeading);
      }

      #logo > span {
        color: var(--primaryCol);
        font-style: italic;
      }

      a {
        text-decoration: none;
      }
    `,
  ],
})
export class BrandLogoComponent {
  constructor() {}
}
