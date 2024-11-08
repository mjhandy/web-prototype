import {QuestionBase} from './signUp-base';
export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}