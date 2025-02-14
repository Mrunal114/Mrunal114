import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroup2Component } from './customer-group-2.component';

describe('CustomerGroup2Component', () => {
  let component: CustomerGroup2Component;
  let fixture: ComponentFixture<CustomerGroup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerGroup2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerGroup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
