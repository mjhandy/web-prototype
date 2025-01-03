import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {

 

  constructor(router: Router) {

    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });

  }


  
}
