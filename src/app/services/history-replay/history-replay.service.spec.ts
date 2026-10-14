import { TestBed } from '@angular/core/testing';
import { HistoryReplayService } from './history-replay.service';
import { objectToBase64StringEncrypted } from '../../shared/base64';

describe('HistoryReplayService', () => {
  let service: HistoryReplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryReplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate encrypted replay address', () => {
    const gameId = '10087';
    const ticket = '7933967';
    const platform = 'transferwallet';

    const url = service.getEncryptedReplayAddress(gameId, ticket, platform);

    expect(url).toBeTruthy();
    expect(url).toContain('replayticket=');
    expect(url).toContain(window.location.origin);
  });

  it('should generate buy feature demo address', () => {
    const index = 1;

    const url = service.GetBuyFeatureDemoAddress(index, '10076', 'pid123', 'brandX', 'siteY');

    expect(url).toContain('buyfeaturedemo=');
    expect(url).toContain(index.toString());
  });

  it('should decrypt replay ticket correctly', () => {
    const originalData = {
      platform: 'test',
      ticketNo: '12345',
      replay: 'true',
      encoderequired: '1',
      env: undefined
    };

    const encrypted = objectToBase64StringEncrypted(originalData, 'qoo');
    expect(encrypted).toBeTruthy();

    const decrypted = service.decryptReplayTicket(encrypted!, 'qoo');
    expect(decrypted).toBeTruthy();
    expect(decrypted?.platform).toBe(originalData.platform);
    expect(decrypted?.ticketNo).toBe(originalData.ticketNo);
  });
});
