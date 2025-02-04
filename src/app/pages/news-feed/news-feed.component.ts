import { Component } from '@angular/core';
import { NewsFeedService } from '../../services/news-feed.service';
import { LoadingComponent } from '../../components/loading/loading.component';



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

  constructor(private newsFeedService: NewsFeedService) { }


  ngOnInit() {

    this.newsFeedService.getNews().subscribe({
      next: (data) => {
        this.story = data;
        this.story = this.story.articles;
        this.isLoading = false;
        console.log(this.isLoading);
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
        this.errorMessage = error.error.message;
      }
    })
  }
}
