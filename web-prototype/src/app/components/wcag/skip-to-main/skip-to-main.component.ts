import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { Router } from '@angular/router';


@Component({
  selector: 'wcag-skip-to-main',
  standalone: true,
  imports: [ 
    TranslateModule
  ],
  templateUrl: './skip-to-main.component.html',
  styleUrl: './skip-to-main.component.scss'
})
export class SkipToMainComponent {

  skipLinkPath: string | undefined;

  constructor(
    private router: Router
  ) {}

  ngOnInit(){
      // skip to main
      this.skipLinkPath = `${this.router.url}#main`;
  }

  skipToMain(id: string) {
    let el = document.getElementById(id);
    el?.setAttribute('tabindex','-1');
    el?.focus();
  }

}
