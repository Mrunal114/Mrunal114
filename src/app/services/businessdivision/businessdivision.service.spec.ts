import { TestBed } from '@angular/core/testing';

import { BusinessdivisionService } from './businessdivision.service';

describe('BusinessdivisionService', () => {
  let service: BusinessdivisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessdivisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
