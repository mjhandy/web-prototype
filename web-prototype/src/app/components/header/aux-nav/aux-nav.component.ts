import { Component } from '@angular/core';

import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'header-aux-nav',
  standalone: true,
  imports: [MatIconModule, MatRippleModule],
  templateUrl: './aux-nav.component.html',
  styleUrl: './aux-nav.component.scss'
})
export class AuxNavComponent {

  mobileToggleActive = [false, false];

  radius : number | undefined;
  color: string | undefined;

  toggleClass(id: number) {
    this.mobileToggleActive[id] = !this.mobileToggleActive[id];
  }

}
