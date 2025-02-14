import { TestBed } from '@angular/core/testing';

import { CusttypeService } from './custtype.service';

describe('CusttypeService', () => {
  let service: CusttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
