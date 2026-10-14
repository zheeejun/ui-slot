import { Component, computed, input, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApTrnCardTitleComponent } from '../ap-trn-card-title/ap-trn-card-title.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { trnDefaultDataList } from '../../services/trn-ctrl/trn-ctrl.data';
import { TrnData } from '../../services/trn-ctrl/trn-ctrl.interface';

export interface TrnListData {
  variant: 'quick' | 'event' | 'yellow' | 'purple';
  accentColor: 'yellow' | 'purple';
  title: string;
  listItems: string[];
  banner: string;
  titleQuick: string;
  titleEvent: string;
}

@Component({
  selector: 'ap-trn-game-list',
  standalone: true,
  imports: [CommonModule, ApTrnCardTitleComponent, ApButtonComponent, ApIconComponent,],
  templateUrl: './ap-trn-game-list.component.html',
})
export class ApTrnGameListComponent implements OnDestroy {
  // Quick 賽事的字串
  getQuickTimeLabel = input<string>('Regular Event');
  // Event 賽事的字串
  getDaysLabel = input<string>('D');
  getHoursLabel = input<string>('H');
  getMinutesLabel = input<string>('M');
  getSecondsLabel = input<string>('S');
  getCountdownStartTitle = input<string>('Start in');
  getCountdownEndTitle = input<string>('End in');
  getRejoinButtonLabel = input<string>('Rejoin');
  getJoinButtonLabel = input<string>('Join');
  getFinishedButtonLabel = input<string>('Finished');
  currencySymbol = input<string>('USD');
  getScoreLabel = input<string>(' Your Score');
  getPrizePoolLabel = input<string>(' Prize Pool');
  getPointLabel = input<string>(' Pts');
  // 賽事資料
  trnData = input<TrnData | null>(trnDefaultDataList[0] ?? null);
  accentColor = computed<'yellow' | 'purple'>(() => {
    return this.trnData()?.type === 'quick' ? 'yellow' : 'purple';
  });
  isDisabled = signal<boolean>(false);
  quickBannerImage = signal('assets/images/banners/img-trn-quick-banner-default-h.jpg');
  eventBannerImage = signal('assets/images/banners/img-trn-event-banner-default-2.jpg');
  description = computed(() => { return this.trnData()?.description || 'Default description'; });
  hasParticipated = input<boolean>(false);
  private readonly highlightedPlayer = computed(() =>
    this.trnData()?.raceData?.playersList.find((player) => player.highlighted) || null
  );
  getBonus = computed<number | null>(() => { return this.highlightedPlayer()?.win || null; });
  playerScore = computed<number | null>(() => { return this.highlightedPlayer()?.score || null; });
  prizePool = input<string>('500,000');

  // 只有在活動賽事且處於公告或進行中狀態才顯示倒數計時
  isShowingCountdown(): boolean {
    return (
      this.accentColor() === 'purple' &&
      (this.trnData()?.status === 'announced' || this.trnData()?.status === 'running')
    );
  }

  // 只有在賽事結束、結算或即將結束的狀態才顯示禁用按鈕
  isShowingDisabledButton(): boolean {
    return this.trnData()?.status === 'ending' || this.trnData()?.status === 'ended' || this.trnData()?.status === 'settled';
  }

  // 已參賽過但賽事已結束的情況下顯示重新參加按鈕
  isShowingRejoinButton(): boolean {
    return this.accentColor() === 'purple' && this.hasParticipated();
  }

  // 只有在活動賽事且已參加的情況下才顯示獎金
  isShowingBonus(): boolean {
    return this.accentColor() === 'purple' && this.hasParticipated() && this.getBonus() !== null;
  }

  // 根據賽事狀態決定顯示開始倒數還是結束倒數
  getCountdownTitle(): string {
    if (this.trnData()?.status === 'announced') {
      return this.getCountdownStartTitle();
    }
    return this.getCountdownEndTitle();
  }

  // 根據賽事狀態決定倒數的目標時間
  getCountdownTime(): number {
    if (this.trnData()?.status === 'announced') {
      return this.trnData()?.startTime || 0;
    }
    return this.trnData()?.endTime || 0;
  }

  private now = signal<number>(Date.now());
  private intervalId = setInterval(() => this.now.set(Date.now()), 1000);

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private timeRemaining = computed(() => {
    const target = this.getCountdownTime();
    return Math.max(0, target - this.now());
  });

  days = computed(() => Math.floor(this.timeRemaining() / (1000 * 60 * 60 * 24)));
  hours = computed(() => Math.floor((this.timeRemaining() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  minutes = computed(() => Math.floor((this.timeRemaining() % (1000 * 60 * 60)) / (1000 * 60)));
  seconds = computed(() => Math.floor((this.timeRemaining() % (1000 * 60)) / 1000));

  formatTime(value: number): string {
    return value.toString().padStart(2, '0');
  }

  formatNumber(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return '--';
    }

    return new Intl.NumberFormat('en-US').format(value);
  }
}
