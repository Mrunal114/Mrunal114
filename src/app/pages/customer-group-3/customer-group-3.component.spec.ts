import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroup3Component } from './customer-group-3.component';

describe('CustomerGroup3Component', () => {
  let component: CustomerGroup3Component;
  let fixture: ComponentFixture<CustomerGroup3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerGroup3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerGroup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
