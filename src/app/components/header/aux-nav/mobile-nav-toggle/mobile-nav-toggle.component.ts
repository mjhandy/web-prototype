import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HTMLElementService } from '../../../../services/html-elements.service';

@Component({
  selector: 'aux-mobile-nav-toggle',
  standalone: true,
  imports: [MatIconModule, MatRippleModule],
  templateUrl: './mobile-nav-toggle.component.html',
  styleUrl: './mobile-nav-toggle.component.scss'
})




export class MobileNavToggleComponent {
  @ViewChild('navToggle', { static: false }) navToggle: ElementRef | undefined;

  className: string | undefined;
  mainNavVisible: boolean | undefined;
  menuOpenIcon = 'menu';
  menuOpen = false;



  constructor(
    private router: Router,
    private elementService: HTMLElementService
  ) { }


  ngOnInit() {

    this.mainNavVisible = false;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {

      this.elementService.getElement('mainNav').subscribe(element => {
        if (element) {

          // get all the clsses from the mainNav
          this.className = element.className;
          // do we have the 'show class
          this.mainNavVisible = this.className.includes('show');
          // if so, trigget the nav toggle click 
          if (this.mainNavVisible) {
            this.navToggle?.nativeElement.click();
          }
        }
      });

    });

  }

  menu(){
    
    if (this.menuOpen === false){
      this.menuOpen = true;
      this.menuOpenIcon = 'close';
    }
    else {
      this.menuOpen = false;
      this.menuOpenIcon = 'menu';
    }
    
  }

}
