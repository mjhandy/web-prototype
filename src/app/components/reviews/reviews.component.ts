import { Component, Input } from '@angular/core';
import { ReviewStarsComponent } from "../review-stars/review-stars.component";
// import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'aap-reviews',
  imports: [ReviewStarsComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  @Input() jsonData: any;
  silderID = 'slideID-' + this.randomString(5);
  review: any;

  constructor() { }

  randomString(length: number) {

    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

}
