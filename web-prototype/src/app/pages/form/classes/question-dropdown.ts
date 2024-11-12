export class QuestionDropdown {
}
import {QuestionBase} from '../base/form-base';
export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}