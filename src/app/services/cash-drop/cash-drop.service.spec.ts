import { TestBed } from '@angular/core/testing';

import { CashDropService } from './cash-drop.service';

describe('CashDropngService', () => {
  let service: CashDropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashDropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
