import { TestBed } from '@angular/core/testing';

import { RouterCtrlService } from './router-ctrl.service';

describe('RouterCtrlService', () => {
  let service: RouterCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
