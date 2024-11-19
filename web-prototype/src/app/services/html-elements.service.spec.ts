import { TestBed } from '@angular/core/testing';

import { HtmlElementsService } from './html-elements.service';

describe('HtmlElementsService', () => {
  let service: HtmlElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
