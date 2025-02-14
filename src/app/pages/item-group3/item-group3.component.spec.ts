import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroup3Component } from './item-group3.component';

describe('ItemGroup3Component', () => {
  let component: ItemGroup3Component;
  let fixture: ComponentFixture<ItemGroup3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGroup3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemGroup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
