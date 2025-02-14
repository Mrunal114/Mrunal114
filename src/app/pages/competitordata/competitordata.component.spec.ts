import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitordataComponent } from './competitordata.component';

describe('CompetitordataComponent', () => {
  let component: CompetitordataComponent;
  let fixture: ComponentFixture<CompetitordataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitordataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitordataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
