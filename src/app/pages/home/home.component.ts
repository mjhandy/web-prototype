import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingTableComponent } from '../../components/pricing-table/pricing-table.component';

import { SliderComponent } from '../../components/slider/slider.component';
import { AccoridonComponent } from '../../components/accoridon/accoridon.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';

import * as data from '../../Model/slider-data.json';
import * as pdata from '../../Model/pricing-packages.json';
import * as qaData from "../../Model/faq-data.json";
import * as reviewData from "../../Model/reviews.json"

@Component({
    selector: 'app-home',
    imports: [CommonModule, PricingTableComponent, SliderComponent, AccoridonComponent, ReviewsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  slideData: any = (data as any).default;
  pricingData: any = (pdata as any).default;
  AD: any = (qaData as any).default;
  reviewData: any = (reviewData as any).default;
  sortedRewiews = [];

  constructor() {}

  ngOnInit(){
    this.sortedRewiews = this.reviewData.sort((a: { rating: number; }, b: { rating: number; }) => b.rating - a.rating);
  }

}
