import { TestBed } from '@angular/core/testing';

import { CategorymasterService } from './categorymaster.service';

describe('CategorymasterService', () => {
  let service: CategorymasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorymasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
