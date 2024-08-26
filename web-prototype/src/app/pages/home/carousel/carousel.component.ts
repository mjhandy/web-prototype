import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  slides: { url: string, h1: string, h2: string } [] = [
    { url: 'https://images.hdqwalls.com/download/2024-warframe-9s-1920x1080.jpg', h1: 'Slide 1 Heading 1', h2: 'Slide 1 Heading 2'},
    { url: 'https://images.hdqwalls.com/download/into-the-radius-uf-1920x1080.jpg', h1: 'Slide 2 Heading 1', h2: 'Slide 2 Heading 2'},
    { url: 'https://images.hdqwalls.com/download/dead-by-daylight-mobile-yj-1920x1080.jpg', h1: 'Slide 3 Heading 1', h2: 'Slide 3 Heading 2'},
    { url: 'https://images.hdqwalls.com/download/alien-rogue-incursion-pi-1920x1080.jpg', h1: 'Slide 4 Heading 1', h2: 'Slide 4 Heading 2'},
    { url: 'https://images.hdqwalls.com/download/earth-strongest-spiderman-ix-1920x1080.jpg', h1: 'Slide 5 Heading 1', h2: 'Slide 5 Heading 2s'},
  ]
  shuffledSlides: { url: string, h1: string, h2: string } [] =[]

  ngOnInit(): void{
    this.shuffleSlides();
  }

  shuffleSlides(): void {
    this.shuffledSlides = this.slides
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

}
