import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { ApiDataService } from '../../services/api-data.service';

@Component({
  selector: 'app-api-feed',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './api-feed.component.html',
  styleUrl: './api-feed.component.scss'
})
export class ApiFeedComponent {


  posts: any;

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit() {

    this.apiDataService.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
  }



}
