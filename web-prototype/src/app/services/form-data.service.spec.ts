import { TestBed } from '@angular/core/testing';

import { FormfieldControlService } from './form-data.service';

describe('FormDataService', () => {
  let service: FormfieldControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormfieldControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
