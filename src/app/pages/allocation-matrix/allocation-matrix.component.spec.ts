import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationMatrixComponent } from './allocation-matrix.component';

describe('AllocationMatrixComponent', () => {
  let component: AllocationMatrixComponent;
  let fixture: ComponentFixture<AllocationMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllocationMatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocationMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
