import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrysegmentComponent } from './industrysegment.component';

describe('IndustrysegmentComponent', () => {
  let component: IndustrysegmentComponent;
  let fixture: ComponentFixture<IndustrysegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrysegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrysegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
