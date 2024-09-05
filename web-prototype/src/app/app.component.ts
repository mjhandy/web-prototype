import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { SkipToMainComponent } from './components/wcag/skip-to-main/skip-to-main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SkipToMainComponent,
    FooterComponent,
    HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-prototype';


}
