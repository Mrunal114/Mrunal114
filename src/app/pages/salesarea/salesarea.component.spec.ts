import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesareaComponent } from './salesarea.component';

describe('SalesareaComponent', () => {
  let component: SalesareaComponent;
  let fixture: ComponentFixture<SalesareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
