import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroup2Component } from './item-group2.component';

describe('ItemGroup2Component', () => {
  let component: ItemGroup2Component;
  let fixture: ComponentFixture<ItemGroup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGroup2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemGroup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
