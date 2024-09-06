import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { RouterOutlet } from '@angular/router';


import { SkipToMainComponent } from './components/wcag/skip-to-main/skip-to-main.component';
import { ReadOnLoadComponent } from './components/wcag/read-on-load/read-on-load.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SkipToMainComponent,
    ReadOnLoadComponent,
    FooterComponent,
    HeaderComponent,
    TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-prototype';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
