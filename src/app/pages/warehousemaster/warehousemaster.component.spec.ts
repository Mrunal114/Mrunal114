import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousemasterComponent } from './warehousemaster.component';

describe('WarehousemasterComponent', () => {
  let component: WarehousemasterComponent;
  let fixture: ComponentFixture<WarehousemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarehousemasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehousemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
