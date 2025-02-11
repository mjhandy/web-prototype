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
    path:   string; 
    title:  string;  
    label:  string;
  }[] = [];

  constructor(
    private elementService: HTMLElementService, 
    private router: Router) {}

  @ViewChild('mainNav') mainNav!: ElementRef;

  ngAfterViewInit() {
    this.elementService.setElement('mainNav', this.mainNav.nativeElement);
  }

  closeOffcanvas(){
    // console.debug('menu clicked');
    
  }

}
