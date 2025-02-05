import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  private apiKey = 'a5f25a762a2648bca39205529db2ad5b-';  
  private url = 'https://newsapi.org/v2/top-headlines?' ;
  private pageSize = 10;
  
  private feed = this.url + 'sources=bbc-news,cbc-news&apiKey='  +  this.apiKey

  constructor(private httpClient: HttpClient) { }

  getNews(){
    return this.httpClient.get(this.feed);
  }
}
