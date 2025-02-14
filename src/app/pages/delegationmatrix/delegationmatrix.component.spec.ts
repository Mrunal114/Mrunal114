import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationmatrixComponent } from './delegationmatrix.component';

describe('DelegationmatrixComponent', () => {
  let component: DelegationmatrixComponent;
  let fixture: ComponentFixture<DelegationmatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelegationmatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelegationmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
