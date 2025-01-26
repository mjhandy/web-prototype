import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'aap-review-stars',
  imports: [
    MatIcon
  ],
  templateUrl: './review-stars.component.html',
  styleUrl: './review-stars.component.scss'
})
export class ReviewStarsComponent {

  @Input() displayMode: any;
  @Input() reviewCount: any;

  constructor(
    
  ){
    
  }

  ngOninit(){
    
    
  }

}
