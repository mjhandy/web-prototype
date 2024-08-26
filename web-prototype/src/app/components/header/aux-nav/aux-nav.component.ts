import { Component } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { LangToggleComponent } from './lang-toggle/lang-toggle.component';
import { MobileNavToggleComponent } from './mobile-nav-toggle/mobile-nav-toggle.component';


@Component({
  selector: 'header-aux-nav',
  standalone: true,
  imports: [MobileNavToggleComponent, LoginComponent, LangToggleComponent],
  templateUrl: './aux-nav.component.html',
  styleUrl: './aux-nav.component.scss'
})
export class AuxNavComponent {

}
