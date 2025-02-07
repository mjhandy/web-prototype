import { Component, inject } from '@angular/core';
import { NewsFeedService } from '../../services/news-feed.service';
import { LoadingComponent } from '../../components/loading/loading.component';

import { SnackBarService } from '../../services/snack-bar.service';



@Component({
  selector: 'app-news-feed',
  imports: [LoadingComponent],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {
  story: any;
  isLoading: boolean = true;
  isError: boolean = false;
  errorMessage = "";
  snackMessage: string = "";

  constructor(
    private newsFeedService: NewsFeedService,
    private snackBar: SnackBarService) { }


  ngOnInit() {

    this.newsFeedService.getNews().subscribe({
      next: (data) => {
        this.story = data;
        this.story = this.story.articles;
        this.isLoading = false;
        this.snackMessage = 'News Loaded';
        this.snackBar.openSBAlert(this.snackMessage);
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
        this.snackMessage = 'Loading Error';
        this.errorMessage = error.error.message;
        this.snackBar.openSBError(this.snackMessage);
      }
    })
  }


}
