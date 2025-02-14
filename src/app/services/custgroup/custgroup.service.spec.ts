import { TestBed } from '@angular/core/testing';

import { CustgroupService } from './custgroup.service';

describe('CustgroupService', () => {
  let service: CustgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
