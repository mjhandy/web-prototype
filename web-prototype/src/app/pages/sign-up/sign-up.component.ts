import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  ReactiveFormsModule, 
  Validators } from '@angular/forms';
import { FormErrorFocusDirective } from '../../directives/formErrorFocus.directive';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    CommonModule,
    FormErrorFocusDirective
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  submitted = false;
  emailReg = new RegExp("^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
  alphaReg = new RegExp("^[a-zA-Z' ]+$");
  zipCodeReg = new RegExp("");
  postalCodeReg = new RegExp("");
  countries: any = [];

  constructor( private fb: FormBuilder ) {
    this.signUpForm = this.fb.group({
      fName: ['',
        [
          Validators.required,
          Validators.pattern(this.alphaReg)
        ]
      ],
      lName: ['',
        [
          Validators.required,
          Validators.pattern(this.alphaReg)
        ]
      ],      
      eMail: ['',
        [
          Validators.required,
          Validators.pattern(this.emailReg)

        ]
      ],
      address: ['',
        [
          Validators.required
        ]
      ],
      country: ['',
        [
          Validators.required
        ]
      ]
    });

    this.countries = this.getCountries();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }

  ngOnInit() {
  }

  // form submit
  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.signUpForm.value, null, 2));
    if (this.signUpForm.invalid) {
      console.log('Form is not valid');
      
      return;
    }
    console.log('Form has been submitted');
    console.log(JSON.stringify(this.signUpForm.value, null, 2));
  }

  // form reset
  onReset(): void {
    this.submitted = false;
    this.signUpForm.reset();
  }

  // country list
  getCountries(){
    return [
      { value: 'ca', label: 'Canada'},
      { value: 'us', label: 'United States of America'},
      { value: 'dz', label: 'Algeria'},
      { value: 'au', label: 'Australia'},
      { value: 'fa', label: 'France'},
    ]
  }
}
