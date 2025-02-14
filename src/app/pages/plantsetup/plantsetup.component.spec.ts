import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsetupComponent } from './plantsetup.component';

describe('PlantsetupComponent', () => {
  let component: PlantsetupComponent;
  let fixture: ComponentFixture<PlantsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
