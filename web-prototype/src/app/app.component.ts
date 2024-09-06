import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { RouterOutlet } from '@angular/router';

import { MatIconRegistry, MatIconModule } from '@angular/material/icon';


import { SkipToMainComponent } from './components/wcag/skip-to-main/skip-to-main.component';
import { ReadOnLoadComponent } from './components/wcag/read-on-load/read-on-load.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    SkipToMainComponent,
    ReadOnLoadComponent,
    FooterComponent,
    HeaderComponent,
    TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private iconPath = './icons/';

  constructor(
    private translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // site languages
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    // add SVG Icons
    this.matIconRegistry
      .addSvgIcon(
        "flag-en",
        this.setPath(`${this.iconPath}flags/ca.svg`)
      )
      .addSvgIcon(
        "flag-fr",
        this.setPath(`${this.iconPath}flags/fr.svg`)
      );
  }

  setPath(url: string): SafeResourceUrl{
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
