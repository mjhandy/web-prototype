import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBase } from '../base/form-base';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrl: './dynamic-form-question.component.scss',
  imports: [TranslateModule, CommonModule, ReactiveFormsModule],
})
export class DynamicFormQuestionComponent {
  @Input() question!: FormBase<string>;
  @Input() form!: FormGroup;
  @Input() submitted!: string;
  
  // get submitted(){
  //   return this.form.touched;
  // }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}