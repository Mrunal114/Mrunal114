import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSubGroupComponent } from './customer-sub-group.component';

describe('CustomerSubGroupComponent', () => {
  let component: CustomerSubGroupComponent;
  let fixture: ComponentFixture<CustomerSubGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSubGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
