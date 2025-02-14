import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSubTypeComponent } from './customer-sub-type.component';

describe('CustomerSubTypeComponent', () => {
  let component: CustomerSubTypeComponent;
  let fixture: ComponentFixture<CustomerSubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSubTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
