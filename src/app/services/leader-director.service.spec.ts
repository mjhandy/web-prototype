import { TestBed } from '@angular/core/testing';

import { LeaderDirectorService } from './leader-director.service';

describe('LeaderDirectorService', () => {
  let service: LeaderDirectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderDirectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
