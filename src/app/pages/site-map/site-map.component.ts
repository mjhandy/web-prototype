import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";

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
  routes: { 
    path:   string; 
    title:  string;  
    label:  string;
  }[] = [];

  constructor(private router: Router) {
    // Filter routes that have a valid `path` and `title`, then map to the required type
    this.routes = this.router.config
      .filter(
        route => route.path && 
        typeof route.title === 'string' && 
        route.data && route.data['label'] && 
        route.data['showInSiteMap'] === true
      )
      .map(route => ({ 
        path: route.path!, 
        title: route.title as string, 
        label: route.data!['label'] }));
  }

}
