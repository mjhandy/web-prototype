import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTMLElementService {
  private elements: { [key: string]: BehaviorSubject<HTMLElement | null> } = {};

  setElement(key: string, element: HTMLElement) {
    if (!this.elements[key]) {
      this.elements[key] = new BehaviorSubject<HTMLElement | null>(null);
    }
    this.elements[key].next(element);
  }

  getElement(key: string): BehaviorSubject<HTMLElement | null> {
    if (!this.elements[key]) {
      this.elements[key] = new BehaviorSubject<HTMLElement | null>(null);
    }
    return this.elements[key];
  }
}
