import { TestBed } from '@angular/core/testing';

import { CalserveService } from './calserve.service';

describe('CalserveService', () => {
  let service: CalserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
