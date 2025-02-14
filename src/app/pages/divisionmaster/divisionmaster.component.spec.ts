import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionmasterComponent } from './divisionmaster.component';

describe('DivisionmasterComponent', () => {
  let component: DivisionmasterComponent;
  let fixture: ComponentFixture<DivisionmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisionmasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
