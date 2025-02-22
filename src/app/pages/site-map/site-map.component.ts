import { Component, inject } from '@angular/core';
import { RouterModule, Router, Route } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { SitemapService } from '../../services/navs/sitemap.service';

@Component({
  selector: 'app-site-map',
  imports: [
    TranslateModule,
    RouterModule
  ],
  templateUrl: './site-map.component.html',
  styleUrl: './site-map.component.scss'
})
export class SiteMapComponent {

  private navigation = inject(SitemapService);

  routes: Route[] = [];

  ngOnInit(): void {
    this.routes = this.getRoutes();
  }

  private getRoutes(): Route[] {
    return this.navigation.getSiteMapNavRouters();
  }
}
