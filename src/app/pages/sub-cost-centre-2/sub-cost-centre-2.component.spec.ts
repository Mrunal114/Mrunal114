import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCostCentre2Component } from './sub-cost-centre-2.component';

describe('SubCostCentre2Component', () => {
  let component: SubCostCentre2Component;
  let fixture: ComponentFixture<SubCostCentre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubCostCentre2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCostCentre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
