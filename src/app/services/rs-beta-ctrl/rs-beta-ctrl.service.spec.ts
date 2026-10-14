import { TestBed } from '@angular/core/testing';

import { RsBetaCtrlService } from './rs-beta-ctrl.service';

describe('RsBetaCtrlService', () => {
  let service: RsBetaCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsBetaCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
