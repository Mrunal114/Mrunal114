import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerClassComponent } from './customer-class.component';

describe('CustomerClassComponent', () => {
  let component: CustomerClassComponent;
  let fixture: ComponentFixture<CustomerClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
