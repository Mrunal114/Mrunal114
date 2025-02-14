import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessdivisionComponent } from './businessdivision.component';

describe('BusinessdivisionComponent', () => {
  let component: BusinessdivisionComponent;
  let fixture: ComponentFixture<BusinessdivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessdivisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessdivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
