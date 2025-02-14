import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgunitsetupComponent } from './orgunitsetup.component';

describe('OrgunitsetupComponent', () => {
  let component: OrgunitsetupComponent;
  let fixture: ComponentFixture<OrgunitsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgunitsetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgunitsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
