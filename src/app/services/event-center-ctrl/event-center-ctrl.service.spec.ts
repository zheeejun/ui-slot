import { TestBed } from '@angular/core/testing';

import { EventCenterCtrlService } from './event-center-ctrl.service';

describe('EventCenterCtrlService', () => {
  let service: EventCenterCtrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventCenterCtrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
