import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router'

import { filter } from 'rxjs';

@Component({
  selector: 'wcag-read-on-load',
  standalone: true,
  imports: [],
  templateUrl: './read-on-load.component.html',
  styleUrl: './read-on-load.component.scss'
})
export class ReadOnLoadComponent {

  announceText: string | undefined;
  url: string | undefined;

  constructor(
    private router: Router
  ) {     }

  ngOnInit() {

    // when a route change occurs, we need to update a div with copy for screen readers.

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.url = event.urlAfterRedirects;

      console.log('Current route:', this.url);

      switch ( this.url){
        case '/en':
          console.log('home');
          this.announceText = 'This is the home page';
          break;
        case '/en/about-us':
          console.log('About Us');
          this.announceText = 'This is the about us';
          break;
      }

    });
  }
  

}
