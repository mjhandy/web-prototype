import { inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FooterNavService {

  private router = inject(Router);
  
  getNavigationRoutes(): Route[] {
    return this.router.config
    .flatMap((route) => [route, …(route.children || [])])
    .filter((route) => route.data?.["showInFooter"]);
  }
}