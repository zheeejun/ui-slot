import { TestBed } from '@angular/core/testing';

import { HistoryCtrlService } from './history-ctrl.service';

describe('HistoryCtrlService', () => {
  let service: HistoryCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
