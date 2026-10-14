import { TestBed } from '@angular/core/testing';

import { GameIframeCtrlService } from './game-iframe-ctrl.service';

describe('GameIframeCtrlService', () => {
  let service: GameIframeCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameIframeCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
