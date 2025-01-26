import { Component, Input } from '@angular/core';
import { ReviewStarsComponent } from "../review-stars/review-stars.component";

@Component({
  selector: 'aap-reviews',
  imports: [ReviewStarsComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  @Input() jsonData: any;
  review: any;


}
