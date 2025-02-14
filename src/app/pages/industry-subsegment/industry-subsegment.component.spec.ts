import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySubsegmentComponent } from './industry-subsegment.component';

describe('IndustrySubsegmentComponent', () => {
  let component: IndustrySubsegmentComponent;
  let fixture: ComponentFixture<IndustrySubsegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrySubsegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrySubsegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
