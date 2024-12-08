import { Component } from '@angular/core';

import * as data from '../../Model/slider-data.json';

@Component({
  selector: 'aap-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  slideData: any = (data as any).default;
  silderID = 'slideID-' + this.randomString(5);

  constructor() {
    console.log('Slide Data:', this.slideData);
  }

  randomString(length: number) {

    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

}
