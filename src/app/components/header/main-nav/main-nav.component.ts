import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { Router, RouterModule } from '@angular/router';
import { HTMLElementService } from '../../../services/html-elements.service';

@Component({
  selector: 'header-main-nav',
  imports: [RouterModule, TranslateModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {

  routes: {
    path: string;
    title: string;
    label: string;
  }[] = [];

  constructor(
    private router: Router) {
    // Filter routes that have a valid `path` and `title`, then map to the required type
    this.routes = this.router.config
      .filter(
        route => route.path &&
          typeof route.title === 'string' &&
          route.data && route.data['label'] &&
          route.data['showInMain'] === true
      )
      .map(route => ({
        path: route.path!,
        title: route.title as string,
        label: route.data!['label']
      }));
  }

}
