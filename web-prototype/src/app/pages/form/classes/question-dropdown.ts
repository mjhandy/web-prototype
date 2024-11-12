export class QuestionDropdown {
}
import {FormBase} from '../base/form-base';
export class DropdownQuestion extends FormBase<string> {
  override controlType = 'dropdown';
}