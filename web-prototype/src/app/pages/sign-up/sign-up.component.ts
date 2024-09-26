import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  ReactiveFormsModule, 
  Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  submitted = false;
  emailReg = new RegExp("^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
  alphaReg = new RegExp("/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+$/u");
  zipCodeReg = new RegExp('');
  postalCodeReg = new RegExp('');
  country: any = [];

  constructor(
    private fb: FormBuilder,
  ) {
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
    })
  }



  ngOnInit() {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    console.log('Form has been submitted');
    console.log(JSON.stringify(this.signUpForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.signUpForm.reset();
  }
}
