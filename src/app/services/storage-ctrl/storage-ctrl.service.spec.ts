import { TestBed } from '@angular/core/testing';

import { StorageCtrlService } from './storage-ctrl.service';

describe('StorageCtrlService', () => {
  let service: StorageCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
