import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChannelComponent } from './sub-channel.component';

describe('SubChannelComponent', () => {
  let component: SubChannelComponent;
  let fixture: ComponentFixture<SubChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubChannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
