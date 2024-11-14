import { Component } from '@angular/core';
import { FooterSignupComponent } from './footer-signup/footer-signup.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [
    FooterSignupComponent,
    FooterNavComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
