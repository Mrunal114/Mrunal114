import { TestBed } from '@angular/core/testing';

import { DepartmentsetupService } from './departmentsetup.service';

describe('DepartmentsetupService', () => {
  let service: DepartmentsetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentsetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
