import { TestBed } from '@angular/core/testing';

import { TrnCtrlService } from './trn-ctrl.service';

describe('TrnCtrlService', () => {
  let service: TrnCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrnCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
