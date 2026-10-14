import { TestBed } from '@angular/core/testing';

import { BottomPanelService } from './bottom-panel.service';

describe('BottomPanelService', () => {
  let service: BottomPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottomPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
