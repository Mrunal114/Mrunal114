import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRegionComponent } from './state-region.component';

describe('StateRegionComponent', () => {
  let component: StateRegionComponent;
  let fixture: ComponentFixture<StateRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
