import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesofficeComponent } from './salesoffice.component';

describe('SalesofficeComponent', () => {
  let component: SalesofficeComponent;
  let fixture: ComponentFixture<SalesofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesofficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
