import { TestBed } from '@angular/core/testing';

import { FooterNavService } from './footer-nav.service';

describe('FooterNavService', () => {
  let service: FooterNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
