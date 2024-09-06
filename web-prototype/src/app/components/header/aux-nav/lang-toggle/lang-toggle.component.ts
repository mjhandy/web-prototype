import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'aux-lang-toggle',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    TranslateModule
  ],
  templateUrl: './lang-toggle.component.html',
  styleUrl: './lang-toggle.component.scss'
})
export class LangToggleComponent {
  constructor(

  ) {

  }



}
