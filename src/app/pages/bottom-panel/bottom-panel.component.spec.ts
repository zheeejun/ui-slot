import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BottomPanelComponent } from './bottom-panel.component';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { RULE_GA_ES } from '../../../chiikawa/Tool/util/IGameCustomData';

describe('BottomPanelComponent', () => {
  let component: BottomPanelComponent;
  let fixture: ComponentFixture<BottomPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomPanelComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('GA customRule: 每一次 auto spin 都要重新觸發繞圈動畫', fakeAsync(() => {
    const game = TestBed.inject(GameIframeCtrlService);
    const panel = TestBed.inject(BottomPanelService);
    const wallet = TestBed.inject(PlayerWalletService);
    wallet.setCashWallet(1_000_000);

    // 模擬 GA customRule
    game.debugSetCustomData({
      customLogoKey: null,
      customLogoType: null,
      customGamekey: null,
      customBackground: null,
      customRTP: null,
      customRule: RULE_GA_ES,
    });
    fixture.detectChanges();

    const emitReadyForSpin = () => {
      (game as any).receiveMessage({
        origin: window.location.origin,
        source: undefined,
        data: { type: 'ReadyForSpin', content: {} },
      } as unknown as MessageEvent);
    };

    // 開始 auto spin 3 次
    panel.startAutoSpin(3);
    fixture.detectChanges();

    const ticks: number[] = [];
    // effect 是非同步排程，用 tick(0) + detectChanges 讓它先跑一次
    tick(0);
    fixture.detectChanges();
    ticks.push(component.spinCooldownTick());

    // spin 1 完成 -> 觸發 spin 2 (delay 50ms)
    emitReadyForSpin();
    tick(50);
    fixture.detectChanges();
    ticks.push(component.spinCooldownTick());

    // spin 2 完成 -> 觸發 spin 3
    emitReadyForSpin();
    tick(50);
    fixture.detectChanges();
    ticks.push(component.spinCooldownTick());

    // spin 3 完成 -> 結束 auto spin
    emitReadyForSpin();
    tick(50);
    fixture.detectChanges();

    // 把所有 timer 清乾淨，避免 fakeAsync 抱怨還有 pending timer
    tick(3000);

    expect(ticks[0]).toBeGreaterThan(0);
    expect(ticks[1]).toBeGreaterThan(ticks[0]);
    expect(ticks[2]).toBeGreaterThan(ticks[1]);
  }));
});
