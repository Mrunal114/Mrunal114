import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSubTypeComponent } from './item-sub-type.component';

describe('ItemSubTypeComponent', () => {
  let component: ItemSubTypeComponent;
  let fixture: ComponentFixture<ItemSubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSubTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
