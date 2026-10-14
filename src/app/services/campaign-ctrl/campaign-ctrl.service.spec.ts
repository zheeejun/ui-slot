import { TestBed } from '@angular/core/testing';

import { CampaignCtrlService } from './campaign-ctrl.service';

describe('CampaignCtrlService', () => {
  let service: CampaignCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
