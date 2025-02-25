import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdComponent } from './dd.component';

describe('DdComponent', () => {
  let component: DdComponent;
  let fixture: ComponentFixture<DdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
