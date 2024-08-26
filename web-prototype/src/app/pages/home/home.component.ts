import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



}
