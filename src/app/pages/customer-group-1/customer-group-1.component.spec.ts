import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroup1Component } from './customer-group-1.component';

describe('CustomerGroup1Component', () => {
  let component: CustomerGroup1Component;
  let fixture: ComponentFixture<CustomerGroup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerGroup1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerGroup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
