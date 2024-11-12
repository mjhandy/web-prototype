import {QuestionBase} from '../base/form-base';
export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}