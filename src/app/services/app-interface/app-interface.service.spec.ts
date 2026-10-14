import { TestBed } from '@angular/core/testing';

import { AppInterfaceService } from './app-interface.service';

describe('AppInterfaceService', () => {
  let service: AppInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
