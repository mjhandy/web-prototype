import { Component } from '@angular/core';
import { NewsFeedService } from '../../services/news-feed.service';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {

  article : any;

  constructor(private nsewsFeedService: NewsFeedService) { }


  ngOnInit() {

    this.nsewsFeedService.getNews()
      .subscribe(response => {
        
        this.article = response;
        console.log(this.article, this.article.title);
      });
  }

}
