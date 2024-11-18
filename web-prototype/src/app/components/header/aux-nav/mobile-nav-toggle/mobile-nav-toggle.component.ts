import { Component, ElementRef, ViewChild } from '@angular/core';

import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'aux-mobile-nav-toggle',
  standalone: true,
  imports: [MatIconModule, MatRippleModule],
  templateUrl: './mobile-nav-toggle.component.html',
  styleUrl: './mobile-nav-toggle.component.scss'
})
export class MobileNavToggleComponent {
  @ViewChild('navToggle', {static: false}) navToggle: ElementRef | undefined;

  
 

  constructor(
    private router: Router
  ) {     }

  
  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.navToggle?.nativeElement.click();
      console.log('route change end');
    });

  }

}
