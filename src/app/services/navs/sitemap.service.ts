import { inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SitemapService {
  private router = inject(Router);
  constructor() { }

  getSiteMapNavRouters() : Route[] {
    return this.router.config
      .flat()
      .filter((route) => route.data?.["showInSiteMap"]);
  }

}
