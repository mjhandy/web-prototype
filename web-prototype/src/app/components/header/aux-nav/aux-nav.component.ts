import { Component } from '@angular/core';

import { DarkLightModeComponent } from './dark-light-mode/dark-light-mode.component';
import { LoginComponent } from './login/login.component';
import { LangToggleComponent } from './lang-toggle/lang-toggle.component';
import { MobileNavToggleComponent } from './mobile-nav-toggle/mobile-nav-toggle.component';


@Component({
  selector: 'header-aux-nav',
  standalone: true,
  imports: [
    DarkLightModeComponent,
    MobileNavToggleComponent, 
    LoginComponent, 
    LangToggleComponent],
  templateUrl: './aux-nav.component.html',
  styleUrl: './aux-nav.component.scss'
})
export class AuxNavComponent {

}
