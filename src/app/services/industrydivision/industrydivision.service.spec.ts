import { TestBed } from '@angular/core/testing';

import { IndustrydivisionService } from './industrydivision.service';

describe('IndustrydivisionService', () => {
  let service: IndustrydivisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustrydivisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
