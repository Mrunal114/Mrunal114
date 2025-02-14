import { TestBed } from '@angular/core/testing';

import { DistributionChannelService } from './distribution-channel.service';

describe('DistributionChannelService', () => {
  let service: DistributionChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributionChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
