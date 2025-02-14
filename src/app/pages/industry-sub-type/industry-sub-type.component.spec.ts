import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySubTypeComponent } from './industry-sub-type.component';

describe('IndustrySubTypeComponent', () => {
  let component: IndustrySubTypeComponent;
  let fixture: ComponentFixture<IndustrySubTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrySubTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrySubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
