import { Component, inject } from '@angular/core';
import { NewsFeedService } from '../../services/news-feed.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';



@Component({
  selector: 'app-news-feed',
  imports: [LoadingComponent, MatSnackBarModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {
  story: any;
  isLoading: boolean = true;
  isError: boolean = false;
  errorMessage = "";
  snackMessage: string = "";
  snackType: string = "";

  private _snackBar = inject(MatSnackBar);
  constructor(
    private newsFeedService: NewsFeedService) { }


  ngOnInit() {

    this.newsFeedService.getNews().subscribe({
      next: (data) => {
        this.story = data;
        this.story = this.story.articles;
        this.isLoading = false;
        this.snackType = 'alert';
        this.snackMessage = 'News Loaded';
        this.openSnackBar();
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
        this.snackType = 'error';
        this.snackMessage = 'Loading Error';
        this.errorMessage = error.error.message;
        this.openSnackBar();
      }
    })
  }

  openSnackBar() {
    this._snackBar.open(this.snackMessage, '', {
      duration: 1500, 
      panelClass: ['snack-' + this.snackType]
    });
  }
}
