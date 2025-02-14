import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorgComponent } from './salesorg.component';

describe('SalesorgComponent', () => {
  let component: SalesorgComponent;
  let fixture: ComponentFixture<SalesorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesorgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
