import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyercodeComponent } from './buyercode.component';

describe('BuyercodeComponent', () => {
  let component: BuyercodeComponent;
  let fixture: ComponentFixture<BuyercodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyercodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
