import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSetupComponent } from './departmentsetup.component';

describe('DepartmentsetupComponent', () => {
  let component: DepartmentSetupComponent;
  let fixture: ComponentFixture<DepartmentSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
