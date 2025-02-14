import { TestBed } from '@angular/core/testing';

import { CustomerClassService } from './customer-class.service';

describe('CustomerClassService', () => {
  let service: CustomerClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
