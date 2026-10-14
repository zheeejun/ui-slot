import { TestBed } from '@angular/core/testing';

import { FaviconCtrlService } from './favicon-ctrl.service';

describe('FaviconCtrlService', () => {
  let service: FaviconCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaviconCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
