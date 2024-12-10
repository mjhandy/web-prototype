import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingTableComponent } from '../../components/pricing-table/pricing-table.component';

import { SliderComponent } from '../../components/slider/slider.component';


import * as data from '../../Model/slider-data.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PricingTableComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  slideData: any = (data as any).default;
  constructor() {
    console.log('Slide Data:', this.slideData);
  }

}
