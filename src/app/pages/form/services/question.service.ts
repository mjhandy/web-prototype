import {Injectable} from '@angular/core';
import {DropdownQuestion} from '../../../classes/forms/input-dropdown';
import {FormBase} from '../../../shared/forms//base/form-base';
import {TexboxInput} from '../../../classes/forms/input-textbox';
import { CheckboxInput } from '../../../classes/forms/input-checkbox';
import {of} from 'rxjs';

@Injectable()
export class QuestionService {


  // TODO: get from a remote source of question metadata



  
  getQuestions() {
    const questions: FormBase<string>[] = [
      
      new TexboxInput({
        key: 'fName',
        label: 'forms.label.fName',
        value: '',
        required: true,
        vpattern: "^[a-zA-Z']+$",
        order: 1,
      
      }),
      new TexboxInput({
        key: 'lName',
        label: 'forms.label.lName',
        value: '',
        required: true,
        vpattern: "^[a-zA-Z']+$",
        order: 2,
      }),      
      new TexboxInput({
        key: 'emailAddress',
        label: 'forms.label.email',
        type: 'email',
        required: true,
        vpattern: "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
        order: 3,
      }),
      new TexboxInput({
        key: 'address',
        label: 'forms.label.address',
        type: 'text',
        required: true,
        order: 4,
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
        order: 5,
        class: 'col-6'
      }),
      new DropdownQuestion({
        key: 'state',
        label:  'forms.label.state',
        options: [
          {key: 'ny', value: 'New Yorl'},
          {key: 'fl', value:'Florida'}
        ],
        order: 6,
        class: 'col-6'
      }),
      new TexboxInput({
        key: 'zipCode',
        label: 'forms.label.usZipCode',
        type: 'text',
        required: true,
        vpattern: "^[0-9]{5}(?:-[0-9]{4})?$",
        order: 7,
        class: 'w-50'
      }), 
      new TexboxInput({
        key: 'postalCode',
        label: 'forms.label.canPostalCode',
        type: 'text',
        required: true,
        vpattern: "^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$",
        order: 8,
        class: 'w-50'
      }),
    
      // new CheckboxInput({
      //   key, 'optinInPrivacy',
      //   label: 'Privacy'
      // })
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}