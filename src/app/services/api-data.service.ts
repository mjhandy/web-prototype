import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    const posts = this.httpClient.get(this.url);
    posts.subscribe(Response => console.log(Response))
    return posts
  }
}
