import { TestBed } from '@angular/core/testing';

import { CustomerDivisionService } from './customer-division.service';

describe('CustomerDivisionService', () => {
  let service: CustomerDivisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDivisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
