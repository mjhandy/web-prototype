import {QuestionBase} from './../base/question-base';
export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}