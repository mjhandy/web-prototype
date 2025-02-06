import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { MatIconRegistry, MatIconModule } from '@angular/material/icon';


import { SkipToMainComponent } from './components/wcag/skip-to-main/skip-to-main.component';
import { ReadOnLoadComponent } from './components/wcag/read-on-load/read-on-load.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GeolocationService } from './services/geolocation.service';
import { LocalStorageService } from './services/local-storage-service';


@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        MatIconModule,
        SkipToMainComponent,
        ReadOnLoadComponent,
        FooterComponent,
        HeaderComponent,
        TranslateModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  private iconPath = './icons/'  

  constructor(
    private translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private LocalStorageService: LocalStorageService,
    private geolocationService: GeolocationService
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
      )
      .addSvgIcon(
        "social-fb",
        this.setPath(`${this.iconPath}bs/facebook.svg`)
      )
      .addSvgIcon(
        "social-it",
        this.setPath(`${this.iconPath}bs/instagram.svg`)
      )
      .addSvgIcon(
        "social-li",
        this.setPath(`${this.iconPath}bs/linkedin.svg`)
      )
      .addSvgIcon(
        "social-tt",
        this.setPath(`${this.iconPath}bs/tiktok.svg`)
      )
      .addSvgIcon(
        "site-logo",
        this.setPath(`${this.iconPath}logos/site-logo.svg`)
      );
  }

  ngOnInit(){
    this.router.events.subscribe( (evt) => {
      if (!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    });

    this.getGeoLocation();  
  }

  setPath(url: string): SafeResourceUrl{
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getGeoLocation() {
    this.geolocationService.getCurrentPosition().subscribe({
      next: (position) => {
        // console.log('Latitude:', position.coords.latitude);
        // console.log('Longitude:', position.coords.longitude);
        // store lat long in local storage
        this.LocalStorageService.setItem('lat', position.coords.latitude);
        this.LocalStorageService.setItem('long', position.coords.longitude);
      },
      error: (error) => {
        console.error('Error getting geolocation:', error);
      },
    });
  }

}
