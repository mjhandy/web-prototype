import { Component } from '@angular/core';

import  * as data from '../../Model/slider-data.json';

@Component({
  selector: 'aap-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  slideData: any = (data as any).default;

  constructor() {
    console.log('Slide Data:', this.slideData);
  }



}
