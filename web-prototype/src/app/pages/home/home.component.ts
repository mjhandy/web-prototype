import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingTableComponent } from '../../components/pricing-table/pricing-table.component';

import { SliderComponent } from '../../components/slider/slider.component';
import { AccoridonComponent } from '../../components/accoridon/accoridon.component';

import * as data from '../../Model/slider-data.json';
import * as pdata from '../../Model/pricing-packages.json';
import * as qaData from "../../Model/faq-data.json";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PricingTableComponent, SliderComponent, AccoridonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  slideData: any = (data as any).default;
  pricingData: any = (pdata as any).default;
  AD: any = (qaData as any).default;
  constructor() {
    console.log('Slide Data:', this.slideData);
  }

}
