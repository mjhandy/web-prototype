import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "./carousel/carousel.component";
import { PricingTableComponent } from '../../components/pricing-table/pricing-table.component';

import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, PricingTableComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



}
