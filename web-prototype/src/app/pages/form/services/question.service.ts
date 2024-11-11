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
        vpattern: "^[a-zA-Z' ]+$",
        order: 1,
      
      }),
      new TextboxQuestion({
        key: 'lName',
        label: 'forms.label.lName',
        value: '',
        required: true,
        vpattern: "^[a-zA-Z' ]+$",
        order: 2,
      }),      
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'forms.label.email',
        type: 'email',
        required: true,
        vpattern: "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
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
        class: 'col-6'
      }),
      new DropdownQuestion({
        key: 'state',
        label:  'forms.label.state',
        options: [
          {key: 'ny', value: 'New Yorl'},
          {key: 'fl', value:'Florida'}
        ],
        order: 4,
        class: 'col-6'
      })
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}