import { Component, input, Output, ViewChild } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage-service';
import { Router } from '@angular/router';
// import { FooterMapComponent } from "../footer-map/footer-map.component";

@Component({
    selector: 'footer-signup',
    imports: [],
    templateUrl: './footer-signup.component.html',
    styleUrl: './footer-signup.component.scss'
})
export class FooterSignupComponent {
  @ViewChild('input') footerEmail: any;
  @Output('footerEmail') string: any;

  inputValue: string = '';
  footerSignUpForm: string = '';


  constructor(
    private LocalStorageService: LocalStorageService,
    private router: Router,
  ) { }

  submit(value: string) {

    // clear input field before redirecting    

    console.log('clicked', value);
    console.log('current router:', this.router);

    // redirect to the sign up page if the field has a value
    if (value != '') {
      // set the field value in to local storage
      this.LocalStorageService.setItem('footerEmail', value);
      // send data via data service
      this.router.navigate(['en/sign-up-dynamic']);
    }
  }

}
