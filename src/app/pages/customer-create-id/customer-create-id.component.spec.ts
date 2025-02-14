import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateIdComponent } from './customer-create-id.component';

describe('CustomerCreateIdComponent', () => {
  let component: CustomerCreateIdComponent;
  let fixture: ComponentFixture<CustomerCreateIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCreateIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCreateIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
