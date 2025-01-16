import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { TranslateModule } from "@ngx-translate/core";
import { filter } from 'rxjs';

@Component({
    selector: 'wcag-read-on-load',
    imports: [TranslateModule],
    templateUrl: './read-on-load.component.html',
    styleUrl: './read-on-load.component.scss'
})
export class ReadOnLoadComponent {

  announceText: string | undefined;
  url: string | undefined;

  constructor(private router: Router) {
  }

  ngOnInit() {

    // when a route change occurs, we need to update a div with copy for screen readers.
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.url = event.urlAfterRedirects;
      switch ( this.url){
        case '/en':
          this.announceText = "This is the home page";
          break;
        case '/en/about-us':
          this.announceText = 'This is the about us';
          break;
        case '/en/sign-up-dynamic':
          this.announceText = 'This is the Sign Up page';
          break;
        case '/en/packages':
          this.announceText = 'This is the Packages page.';
          break;
        case '/en/signup':
          this.announceText = 'This is the Sign Up form'; 
          break;
        case '/en/components/accordions':
          this.announceText = 'This is the Accordion example page';
          break
        case '/en/components/tables':
          this.announceText = 'This is the data driven table example page';
          break
           
      }

    });
  }
  

}
