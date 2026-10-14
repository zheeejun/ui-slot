import { TestBed } from '@angular/core/testing';

import { OgWalletService } from './og-wallet.service';

describe('OgWalletService', () => {
  let service: OgWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OgWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
