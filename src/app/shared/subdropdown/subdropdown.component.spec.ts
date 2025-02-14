import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdropdownComponent } from './subdropdown.component';

describe('SubdropdownComponent', () => {
  let component: SubdropdownComponent;
  let fixture: ComponentFixture<SubdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubdropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
