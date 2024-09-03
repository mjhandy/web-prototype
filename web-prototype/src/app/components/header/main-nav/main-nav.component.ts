import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'header-main-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {

  mobileMenu = document.getElementById('mainNav');

  closeOffcanvas(){
    console.debug('menu clicked');
    
  }

}
