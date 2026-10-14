import { TestBed } from '@angular/core/testing';

import { PlayerWalletService } from './player-wallet.service';

describe('PlayerWalletService', () => {
  let service: PlayerWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
