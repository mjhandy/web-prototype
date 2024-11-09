import {QuestionBase} from './signUp-base';
export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}