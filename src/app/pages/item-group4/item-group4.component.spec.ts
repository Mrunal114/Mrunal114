import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroup4Component } from './item-group4.component';

describe('ItemGroup4Component', () => {
  let component: ItemGroup4Component;
  let fixture: ComponentFixture<ItemGroup4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGroup4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemGroup4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
