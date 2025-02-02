import { Component } from '@angular/core';
import { NewsFeedService } from '../../services/news-feed.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
    selector: 'app-news-feed',
    imports: [MatProgressSpinnerModule],
    templateUrl: './news-feed.component.html',
    styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {

  story : any;
  isLoading = true;

  constructor(private nsewsFeedService: NewsFeedService) { }


  ngOnInit() {

    // this.nsewsFeedService.getNews()
    //   .subscribe(response => {
        
    //     this.story = response;
    //     this.story = this.story.articles;
        
    //     console.log('Article', this.story);
    //     console.log('Article Title:', this.story[0].title)
    //   });

    this.nsewsFeedService.getNews()
      .subscribe(
        data => {
          this.story = data;
          this.story = this.story.articles;
          this.isLoading = false;
        }
      );

  }

}
