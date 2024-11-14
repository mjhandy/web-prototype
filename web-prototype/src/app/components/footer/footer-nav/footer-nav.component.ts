import { Component, inject } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

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
    this.routes = this.router.config.filter(
      route => route.path !== '' && route.data && route.title)
      .map(route => ({ path: route.path!, title: route.title!, }

    ));
  }

  // ngOnInit(): void {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     this.routes = this.router.config
  //       .filter(route => route.data && route.title )
  //       .map(route => ({ path: route.path, name: route.title }));
  //   });
  // }


}
