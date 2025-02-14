import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedialogcomponentComponent } from './redialogcomponent.component';

describe('RedialogcomponentComponent', () => {
  let component: RedialogcomponentComponent;
  let fixture: ComponentFixture<RedialogcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedialogcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedialogcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
