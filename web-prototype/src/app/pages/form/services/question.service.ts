import {Injectable} from '@angular/core';
import {DropdownQuestion} from './../classes/question-dropdown';
import {QuestionBase} from './../base/question-base';
import {TextboxQuestion} from './../classes/question-textbox';
import {of} from 'rxjs';

@Injectable()
export class QuestionService {


  // TODO: get from a remote source of question metadata



  
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      
      new TextboxQuestion({
        key: 'fName',
        label: 'forms.label.fName',
        value: '',
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'lName',
        label: 'forms.label.lName',
        value: '',
        required: true,
        order: 2,
      }),      
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'forms.label.email',
        type: 'email',
        order: 3,
      }),
      new DropdownQuestion({
        key: 'country',
        label: 'forms.label.country',
        options: [
          {key: 'ca', value: 'Canada'},
          {key: 'us', value: 'United States of America'},
          {key: 'uk', value: 'United Kingdom of Great Britian'},
          {key: 'fr', value: 'France'},
        ],
        order: 4,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}