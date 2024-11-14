import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

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


  routes: { path: string, label: string }[];
  constructor(private router: Router) {
    this.routes = this.router.config.filter(route => route.path !== '' && route.data && route.data['label'])
      .map(route => ({ path: route.path!, label: route.data!['label'] }));
  }

}
