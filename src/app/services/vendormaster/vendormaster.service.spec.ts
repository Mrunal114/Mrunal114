import { TestBed } from '@angular/core/testing';

import { VendormasterService } from './vendormaster.service';

describe('VendormasterService', () => {
  let service: VendormasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendormasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
