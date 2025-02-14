import { TestBed } from '@angular/core/testing';

import { IndustrysegmentService } from './industrysegment.service';

describe('IndustrysegmentService', () => {
  let service: IndustrysegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustrysegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
