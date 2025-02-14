import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalDepotComponent } from './regional-depot.component';

describe('RegionalDepotComponent', () => {
  let component: RegionalDepotComponent;
  let fixture: ComponentFixture<RegionalDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionalDepotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionalDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
