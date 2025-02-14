import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroup1Component } from './item-group1.component';

describe('ItemGroup1Component', () => {
  let component: ItemGroup1Component;
  let fixture: ComponentFixture<ItemGroup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGroup1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemGroup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
