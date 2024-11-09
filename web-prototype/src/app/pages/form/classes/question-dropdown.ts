export class QuestionDropdown {
}
import {QuestionBase} from './../base/question-base';
export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}