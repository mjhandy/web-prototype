import {Injectable} from '@angular/core';
import {DropdownQuestion} from './../classes/question-dropdown';
import {QuestionBase} from './../base/question-base';
import {TextboxQuestion} from './../classes/question-textbox';
import {of} from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class QuestionService {
  fname: string | undefined;

  // TODO: get from a remote source of question metadata

  constructor(public translate: TranslateService) {
   let fname = this.translate.get('forms.label.fName').subscribe();
  }

  
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      
      new TextboxQuestion({
        key: 'fName',
        label: 'AA' + this.fname,
        value: '',
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'lName',
        label: 'Last Name',
        value: '',
        required: true,
        order: 2,
      }),      
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 3,
      }),
      new DropdownQuestion({
        key: 'country',
        label: 'Country',
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