import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {QuestionService} from './services/question.service';
import {FormBase} from '../../shared/forms/base/form-base';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  providers: [QuestionService],
  imports: [AsyncPipe, DynamicFormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  questions$: Observable<FormBase<any>[]>;
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
