import { TestBed } from '@angular/core/testing';

import { UpskillingService } from './upskilling.service';

describe('UpskillingService', () => {
  let service: UpskillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpskillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
