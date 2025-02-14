import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSourcemasterComponent } from './item-sourcemaster.component';

describe('ItemSourcemasterComponent', () => {
  let component: ItemSourcemasterComponent;
  let fixture: ComponentFixture<ItemSourcemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSourcemasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSourcemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
