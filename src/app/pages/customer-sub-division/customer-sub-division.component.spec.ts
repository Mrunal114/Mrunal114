import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSubDivisionComponent } from './customer-sub-division.component';

describe('CustomerSubDivisionComponent', () => {
  let component: CustomerSubDivisionComponent;
  let fixture: ComponentFixture<CustomerSubDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSubDivisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSubDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
