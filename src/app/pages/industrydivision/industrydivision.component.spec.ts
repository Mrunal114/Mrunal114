import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrydivisionComponent } from './industrydivision.component';

describe('IndustrydivisionComponent', () => {
  let component: IndustrydivisionComponent;
  let fixture: ComponentFixture<IndustrydivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrydivisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrydivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
