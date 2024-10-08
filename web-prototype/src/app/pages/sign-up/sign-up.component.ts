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
import { of } from 'rxjs';



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
  zipCodeReg = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");
  postalCodeReg = new RegExp("^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$");
  countries: any = [];
  states: any = [];
  provinces: any = [];

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
      ],
      usZipCode: ['',
        [
          Validators.required,
          Validators.pattern(this.zipCodeReg)
        ]
      ],
      canPostalCode: ['',
        [
          Validators.required,
          Validators.pattern(this.postalCodeReg)
        ]
      ],
      state: ['',
        [
          Validators.required
        ]
      ],
      province:['',
        [
          Validators.required
        ]
      ],
      city:['',
        [
          Validators.required,
          Validators.pattern(this.alphaReg)
        ]
      ]
    });

    // this.countries = this.getCountries();
    this.provinces = this.getCanProv();
    this.states = this.getUsStates();


    // asnyc countries
    of(this.getCountries()).subscribe(countries => {
      this.countries = countries;
    });
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
      console.log(JSON.stringify(this.signUpForm.value, null, 2));
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
      { value: 'ca', label: 'forms.countryList.ca'},
      { value: 'us', label: 'forms.countryList.us'},
      { value: 'au', label: 'forms.countryList.au'},
      { value: 'fa', label: 'forms.countryList.fa'},
    ]
  }

  //state list
  getUsStates(){
    return[
      {value: 'ca', label: 'California'}
    ]
  }

  //Canadian Provinces List
  getCanProv(){
    return[
      { value: 'nl', label:'forms.provList.nl' },
      { value: 'pe', label:'forms.provList.pe' },
      { value: 'ns', label:'forms.provList.ns' },
      { value: 'nb', label:'forms.provList.nb' },
      { value: 'qc', label:'forms.provList.qc' },
      { value: 'on', label:'forms.provList.on' },
      { value: 'mb', label:'forms.provList.mb' },
      { value: 'sk', label:'forms.provList.sk' },
      { value: 'ab', label:'forms.provList.ab' },
      { value: 'bc', label:'forms.provList.bc' },
      { value: 'yt', label:'forms.provList.yt' },
      { value: 'nt', label:'forms.provList.nt' },
      { value: 'nu', label:'forms.provList.nu' },
    ]
  }
}
