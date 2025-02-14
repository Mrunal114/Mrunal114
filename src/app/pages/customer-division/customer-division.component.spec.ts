import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDivisionComponent } from './customer-division.component';

describe('CustomerDivisionComponent', () => {
  let component: CustomerDivisionComponent;
  let fixture: ComponentFixture<CustomerDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDivisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
