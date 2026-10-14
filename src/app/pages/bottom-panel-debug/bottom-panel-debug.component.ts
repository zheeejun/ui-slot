import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';

import { ApSelectComponent } from "../../../ap-components-lib/ap-select/ap-select.component";
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { calc } from '../../services/player-wallet/player-wallet.function';
import { SpinResult } from '../../shared/Protobuf/proto-ext';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { Subscription, take, timer } from 'rxjs';
import { SPIN_BUTTON_MODES, SpinButtonMode } from '../../services/bottom-panel/spin-button.type';

@Component({
  selector: 'bottom-panel-debug',
  imports: [ApButtonComponent, ApSelectComponent, ApInputBox, ApToggleSwitchComponent],
  templateUrl: './bottom-panel-debug.component.html',
  styleUrl: './bottom-panel-debug.component.css'
})
export class BottomPanelDebugComponent implements OnInit, OnDestroy {
  protected panel = inject(BottomPanelService);
  protected wallet = inject(PlayerWalletService);
  protected api = inject(AppInterfaceService);
  /** 連續Spin次數 */
  protected spinLoopTimesLabel = signal("1");
  /** 連續Spin間隔時間 */
  protected spinLoopIntervalLabel = signal("0.5");
  /** 是否正在進行連續Spin */
  protected isSpinLooping = signal(false);
  /** Hold Turbo 參數：按住門檻毫秒 */
  protected turboHoldThresholdMsLabel = signal('500');
  /** Hold Turbo 參數：連續觸發間隔毫秒 */
  protected turboSkipIntervalMsLabel = signal('500');
  /** Hold Turbo 參數：閒置提示延遲毫秒 */
  protected idleTooltipMsLabel = signal('500');
  panelStatusOptions: ApSelectOption[] = [
    { value: 'closed', label: 'Closed' },
    { value: 'freeSpins', label: 'Free Spins' },
    { value: 'freeBonus', label: 'Free Bonus' },
  ];

  spinButtonModeOptions: ApSelectOption[] = SPIN_BUTTON_MODES.map(mode => ({
    value: mode,
    label: mode,
  }));

  debugSpinBet = signal('');
  debugSpinMode = signal('');
  debugBalance = signal<number | null>(null);
  /** 是否顯示Remaining Turnover，獨立於panel，跟bottom-panel一樣自行持有狀態 */
  showRemainingTurnover = signal(false);
  private spinLoopSubscription: Subscription | null = null;

  ngOnInit() {
    this.api.spinResult$.subscribe(this.onSpinResult.bind(this));
    this.turboHoldThresholdMsLabel.set(String(this.panel.turboHoldThresholdMs()));
    this.turboSkipIntervalMsLabel.set(String(this.panel.turboSkipIntervalMs()));
    this.idleTooltipMsLabel.set(String(this.panel.idleTooltipMs()));
  }

  ngOnDestroy(): void {
    this.cancelSpinLoop();
  }

  sendPanelStatus(status: string) {
    if (status === 'closed') {
      this.panel.sendDebugFreeBonusRound(false);
      this.panel.sendDebugFreeSpinRound(false);
    } else if (status === 'freeSpins') {
      this.panel.sendDebugFreeSpinRound(true);
      this.panel.sendDebugFreeBonusRound(false);
    } else if (status === 'freeBonus') {
      this.panel.sendDebugFreeBonusRound(true);
      this.panel.sendDebugFreeSpinRound(false);
    }
  }

  sendSpinButtonMode(mode: string) {
    this.panel.sendDebugSpinButtonMode(mode as SpinButtonMode);
  }

  sendInsufficientBalance() {
    this.panel.sendDebugInsufficientBalance();
  }

  /** 切換 Hold for Turbo Spin（按住加速）功能 */
  sendHoldTurboEnabled(enabled: boolean) {
    this.panel.setHoldTurboEnabled(enabled);
  }

  sendTurboHoldThresholdMs(value: string) {
    const parsed = this.parseMsValue(value, 500);
    this.turboHoldThresholdMsLabel.set(String(parsed));
    this.panel.turboHoldThresholdMs.set(parsed);
  }

  sendTurboSkipIntervalMs(value: string) {
    const parsed = this.parseMsValue(value, 500);
    this.turboSkipIntervalMsLabel.set(String(parsed));
    this.panel.turboSkipIntervalMs.set(parsed);
  }

  sendIdleTooltipMs(value: string) {
    const parsed = this.parseMsValue(value, 500);
    this.idleTooltipMsLabel.set(String(parsed));
    this.panel.idleTooltipMs.set(parsed);
  }

  sendDebugSpin(bet: number, mode: string) {
    if (this.isSpinLooping()) {
      return;
    }

    this.cancelSpinLoop();
    this.debugBalance.set(null);

    const loopTimes = this.parseSpinLoopTimes();
    const intervalMs = this.parseSpinLoopIntervalMs();
    this.isSpinLooping.set(true);

    this.spinLoopSubscription = timer(0, intervalMs).pipe(take(loopTimes)).subscribe({
      next: () => {
        this.wallet.sendSpinRequest('', bet, mode);
      },
      complete: () => {
        this.spinLoopSubscription = null;
        this.isSpinLooping.set(false);
      }
    });
  }

  private cancelSpinLoop() {
    if (this.spinLoopSubscription) {
      this.spinLoopSubscription.unsubscribe();
      this.spinLoopSubscription = null;
    }
    this.isSpinLooping.set(false);
  }

  private parseSpinLoopTimes(): number {
    const value = Number(this.spinLoopTimesLabel());
    if (!Number.isFinite(value) || value < 1) {
      this.spinLoopTimesLabel.set('1');
      return 1;
    }

    const times = Math.floor(value);
    this.spinLoopTimesLabel.set(String(times));
    return times;
  }

  private parseSpinLoopIntervalMs(): number {
    const value = Number(this.spinLoopIntervalLabel());
    if (!Number.isFinite(value) || value < 0) {
      this.spinLoopIntervalLabel.set('0');
      return 0;
    }

    const intervalSec = value;
    this.spinLoopIntervalLabel.set(String(intervalSec));
    return intervalSec * 1000;
  }

  private parseMsValue(value: string, fallback: number): number {
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed < 0) {
      return fallback;
    }
    return Math.floor(parsed);
  }

  /** 更新Balance */
  protected onSpinResult(result: SpinResult) {
    // 更新cash wallet
    this.debugBalance.set(calc.s2c(result.data.balance as number));
  }
}
