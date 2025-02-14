import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionchannelComponent } from './distributionchannel.component';

describe('DistributionchannelComponent', () => {
  let component: DistributionchannelComponent;
  let fixture: ComponentFixture<DistributionchannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionchannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionchannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
