import { Component, inject } from '@angular/core';
import { NewsFeedService } from '../../services/news-feed.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { TranslateModule } from "@ngx-translate/core";
import { SnackBarService } from '../../services/snack-bar.service';



@Component({
  selector: 'app-news-feed',
  imports: [LoadingComponent,TranslateModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {
  story: any;
  isLoading: boolean = true;
  isError: boolean = false;
  errorMessage = "";
  snackMessageEN: string = "";
  snackMessageFR: string = "";

  constructor(
    private newsFeedService: NewsFeedService,
    private snackBar: SnackBarService) { }


  ngOnInit() {

    this.newsFeedService.getNews().subscribe({
      next: (data) => {
        this.story = data;
        this.story = this.story.articles;
        this.isLoading = false;
        this.snackMessageEN = 'News Loaded';
        this.snackMessageFR = 'Nouvelles chargées';
        this.snackBar.openSBAlert(this.snackMessageEN, this.snackMessageFR);
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
        this.snackMessageEN = 'Loading Error';
        this.snackMessageFR = 'Erreur de chargement';
        this.errorMessage = error.error.message;
        this.snackBar.openSBError(this.snackMessageEN, this.snackMessageFR);
      }
    })
  }


}
