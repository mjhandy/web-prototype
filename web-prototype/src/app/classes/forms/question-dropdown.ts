export class QuestionDropdown {
}
import {FormBase} from '../../shared/forms/base/form-base';
export class DropdownQuestion extends FormBase<string> {
  override controlType = 'dropdown';
}