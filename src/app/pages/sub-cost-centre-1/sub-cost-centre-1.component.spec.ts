import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCostCentre1Component } from './sub-cost-centre-1.component';

describe('SubCostCentre1Component', () => {
  let component: SubCostCentre1Component;
  let fixture: ComponentFixture<SubCostCentre1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubCostCentre1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCostCentre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
