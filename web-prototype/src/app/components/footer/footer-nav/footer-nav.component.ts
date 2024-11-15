import { Component, inject } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'footer-nav',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './footer-nav.component.html',
  styleUrl: './footer-nav.component.scss'
})
export class FooterNavComponent {
 routes: { 
    path:   string; 
    title:  string;  
  }[] = [];

  constructor(private router: Router) {
    // Filter routes that have a valid `path` and `title`, then map to the required type
    this.routes = this.router.config
      .filter(route => route.path && typeof route.title === 'string')
      .map(route => ({ path: route.path!, title: route.title as string }));
  }

}
