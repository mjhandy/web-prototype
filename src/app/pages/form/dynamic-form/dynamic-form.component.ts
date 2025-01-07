import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormQuestionComponent} from './../dynamic-form-question/dynamic-form-question.component';
import {FormBase} from '../../../shared/forms/base/form-base';
import {QuestionControlService} from './../services/question-control.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [QuestionControlService],
    imports: [
        TranslateModule,
        CommonModule,
        DynamicFormQuestionComponent,
        ReactiveFormsModule
    ]
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: FormBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';
  Submitted = false;
  constructor(private qcs: QuestionControlService) {}
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as FormBase<string>[]);
  }
  onSubmit() {
    this.Submitted = true;
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}