import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupmodalComponent } from './popupmodal.component';

describe('PopupmodalComponent', () => {
  let component: PopupmodalComponent;
  let fixture: ComponentFixture<PopupmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
