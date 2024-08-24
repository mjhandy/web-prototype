import { Component } from '@angular/core';

import { LogoComponent } from './logo/logo.component';
import { AuxNavComponent } from './aux-nav/aux-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@Component({
  selector: 'header',
  standalone: true,
  imports: [ LogoComponent, AuxNavComponent, MainNavComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
