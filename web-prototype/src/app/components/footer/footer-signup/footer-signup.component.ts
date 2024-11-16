import { Component, input, ViewChild } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'footer-signup',
  standalone: true,
  imports: [],
  templateUrl: './footer-signup.component.html',
  styleUrl: './footer-signup.component.scss'
})
export class FooterSignupComponent {
  @ViewChild('input') footerEmail: any;

  inputValue: string  = '';
  footerSignUpForm: string = '';
  
  constructor(
    private LocalStorageService: LocalStorageService,
    private router: Router,
  ) {}

  submit(value: string){

    // the input value
    this.inputValue = value;
    // set the field value in to local storage
    this.LocalStorageService.setItem('footerEmail', value);
    // clear input field before redirecting    

    console.log('clicked', this.inputValue);      

    // redirect to the sign up page if the field has a value
    if (this.inputValue != ''){
      console.log('input cleared', this.inputValue);
      this.footerEmail.value = '';
      this.router.navigate(['en/sign-up-dynamic']);
    }
  }

}
