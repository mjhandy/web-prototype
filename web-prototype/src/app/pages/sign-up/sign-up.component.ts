import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


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

  constructor(
    private fb: FormBuilder,
  ) {
    this.signUpForm = this.fb.group({
      fName: ['',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      eMail: ['',
        [
          Validators.required,          
          Validators.minLength(3),
          Validators.email
        ]
      ]
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
