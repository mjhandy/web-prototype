import { Component } from '@angular/core';
import { NewsFeedService } from '../../services/news-feed.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { catchError, throwError } from 'rxjs';



@Component({
  selector: 'app-news-feed',
  imports: [MatProgressSpinnerModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {

  story: any;
  isLoading = true;
  isError = false;
  errorMessage : string | undefined;

  constructor(private nsewsFeedService: NewsFeedService) { }


  ngOnInit() {

    this.nsewsFeedService.getNews().subscribe({
      next: (data) => {
        this.story = data;
        this.story = this.story.articles;
        this.isLoading = false;
      },
      error: (error) => {
        this.isError = true;
        this.errorMessage = error.error.message;
       console.log('error', error)
      }
    })


    // this.nsewsFeedService.getNews()
    //   .subscribe(
    //     data => {
    //       this.story = data;
    //       this.story = this.story.articles;
    //       this.isLoading = false;
    //     },
    //     // error => {
    //     //   console.log ('loading error');
    //     // }
    //   );

  }

}
