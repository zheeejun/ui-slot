import { TestBed } from '@angular/core/testing';

import { InfoCtrlService } from './info-ctrl.service';

describe('InfoCtrlService', () => {
  let service: InfoCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
