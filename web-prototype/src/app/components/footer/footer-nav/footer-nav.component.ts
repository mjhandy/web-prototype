import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FooterNavService } from '../../../services/footer-nav.service';

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

  private navigation = inject(FooterNavService);

  routes: Route[] = [];

  ngOnInit(): void {
    this.routes = this.getRoutes();
  }

  private getRoutes(): Route[] {
    return this.navigation.getNavigationRoutes();
  }

}
