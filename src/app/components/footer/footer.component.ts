import { Component } from '@angular/core';
import { FooterSignupComponent } from './footer-signup/footer-signup.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { FooterSocialComponent } from './footer-social/footer-social.component';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [
    FooterSignupComponent,
    FooterNavComponent,
    FooterSocialComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
