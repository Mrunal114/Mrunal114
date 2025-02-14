import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAreaDeterminationComponent } from './sales-area-determination.component';

describe('SalesAreaDeterminationComponent', () => {
  let component: SalesAreaDeterminationComponent;
  let fixture: ComponentFixture<SalesAreaDeterminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesAreaDeterminationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesAreaDeterminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
