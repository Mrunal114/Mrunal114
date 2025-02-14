import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorgComponent } from './purchaseorg.component';

describe('PurchaseorgComponent', () => {
  let component: PurchaseorgComponent;
  let fixture: ComponentFixture<PurchaseorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseorgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
