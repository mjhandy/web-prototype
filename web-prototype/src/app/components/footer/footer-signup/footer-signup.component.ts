import { Component, input, Output, ViewChild } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage-service';
import { Router } from '@angular/router';
// import { DataSignalService } from '../../../services/data.service'

@Component({
  selector: 'footer-signup',
  standalone: true,
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
    // private dataService: DataSignalService,
    private LocalStorageService: LocalStorageService,
    private router: Router,
  ) { }

  submit(value: string) {

    // clear input field before redirecting    

    console.log('clicked', value);

    // redirect to the sign up page if the field has a value
    if (value != '') {
      // set the field value in to local storage
      this.LocalStorageService.setItem('footerEmail', value);
      // send data via data service
      // this.dataService.setData(value);
      // console.log('input cleared', value);
      this.router.navigate(['en/sign-up-dynamic']);
    }
  }

}
