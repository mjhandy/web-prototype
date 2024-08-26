import { Component } from '@angular/core';

import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'aux-mobile-nav-toggle',
  standalone: true,
  imports: [MatIconModule, MatRippleModule],
  templateUrl: './mobile-nav-toggle.component.html',
  styleUrl: './mobile-nav-toggle.component.scss'
})
export class MobileNavToggleComponent {

}
