import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'header-aux-nav',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './aux-nav.component.html',
  styleUrl: './aux-nav.component.scss'
})
export class AuxNavComponent {

  mobileToggleActive = [false, false];

  toggleClass(id: number) {
    this.mobileToggleActive[id] = !this.mobileToggleActive[id];
  }

}
