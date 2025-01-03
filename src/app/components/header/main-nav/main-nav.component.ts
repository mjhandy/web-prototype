import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from '@angular/router';
import { HTMLElementService } from '../../../services/html-elements.service';

@Component({
  selector: 'header-main-nav',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {

  constructor(private elementService: HTMLElementService) {}

  @ViewChild('mainNav') mainNav!: ElementRef;

  ngAfterViewInit() {
    this.elementService.setElement('mainNav', this.mainNav.nativeElement);
  }

  closeOffcanvas(){
    // console.debug('menu clicked');
    
  }

}
