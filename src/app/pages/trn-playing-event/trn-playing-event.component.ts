import { Component, computed, signal, OnInit, OnDestroy, inject, output, effect } from '@angular/core';
import { Subscription, interval, Subject, takeUntil } from 'rxjs';
import { ApTrnFloatCountdownComponent } from "../../components/ap-trn-float-countdown/ap-trn-float-countdown.component";
import { ApTrnCardBonusComponent } from "../../components/ap-trn-card-bonus/ap-trn-card-bonus.component";
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { ApRowListItem } from '../../components/ap-trn-list-row/ap-trn-list-row.interface';
import { CommonModule } from '@angular/common';
import { ApTrnListRowComponent } from "../../components/ap-trn-list-row/ap-trn-list-row.component";
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { ApTrnTabComponent } from "../../components/ap-trn-tab/ap-trn-tab.component";
import { TrnRaceUpdated } from '../../services/trn-ctrl/trn-ctrl.interface';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { ApTrnGameHintComponent } from "../../components/ap-trn-game-hint/ap-trn-game-hint.component";
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { StorageEventRunning } from '../../services/storage-ctrl/storage-ctrl.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component"; //確認版面用按鈕移除後，這個也移除
@Component({
  selector: 'trn-playing-event',
  imports: [ApTrnFloatCountdownComponent, ApTrnCardBonusComponent, CommonModule, ApTrnListRowComponent, ApButtonComponent, ApLoadingOverlayComponent, ApTrnTabComponent, ApToggleSwitchComponent, ApTrnGameHintComponent, ApIconComponent],
  templateUrl: './trn-playing-event.component.html',
  styleUrl: './trn-playing-event.component.css'
})
export class TrnPlayingEventComponent implements OnInit, OnDestroy {
  protected appI18n = inject(AppI18nService);
  protected trn = inject(TrnCtrlService);
  protected wallet = inject(PlayerWalletService);
  protected game = inject(GameIframeCtrlService);
  protected api = inject(AppInterfaceService);
  readonly getEventTabText = this.appI18n.computed('EventRace_Tab', 'EVENT');
  readonly getBetTitle = this.appI18n.computed('BetBoost', 'BET');
  readonly betMultiplierTitle = this.appI18n.computed('BetBoost', 'BET');
  readonly getExitButton = this.appI18n.computed('Exit_Btn', 'EXIT')
  readonly getEventMessage = computed(() => {
    const isEnabled = this.trn.currentBetMultiplier() > 1;
    const key = isEnabled ? 'BetToggleOn_Tip' : 'BetToggleOff_Tip';
    const fallback = isEnabled
      ? 'Enable Tournament Bet'
      : 'Disable Tournament Bet';
    return this.appI18n.instant(key, fallback);
  });
  storage = inject(StorageCtrlService);
  /** 目前的長期競賽資料 */
  trnData = computed(() => this.trn.betDataTrn());
  /** 是否使用 BetData */
  isBetDataEnabled = computed<boolean>(() => { return this.wallet.trnData() !== null; });
  /** 結束時間 (Unix timestamp 豪秒) */
  endTime = signal<number | null>(null);
  /** 玩家列表載入中 */
  isPlayersListLoading = signal(false);
  /** 玩家列表 */
  playerListAll = signal<ApRowListItem[]>([]);
  /** 顯示完整玩家列表 */
  showAllPlayerList = signal(false);
  /** 顯示切換Enable Bet提示 */
  showHint = signal(false);
  /** 確認版面用-切換新舊版面 */
  useNewLayout = signal(true);
  /** 總獎金 */
  prize = signal<number | null>(null);
  /** 下注倍率 */
  multiplier = signal<number>(1);
  /** 是否允許離開競賽 */
  isExitDisabled = computed(() => this.game.status() !== 'Idle');
  /** Toggle能不能作用 */
  isBetDataToggleEnabled = computed(() => this.game.status() === 'Idle');
  /** 存到 Storage 的長期競賽狀態 */
  storageEventRunning = computed<StorageEventRunning>(() => { return { id: this.trn.betDataTrnId(), betDataEnabled: this.isBetDataEnabled() }; });
  private destroy$ = new Subject<void>();

  private updateInterval?: Subscription;

  /** 退出競賽事件 */
  exitLeave = output<void>();
  /** 競賽時間到事件 */
  matchTimeout = output<void>();

  constructor() {
    effect(() => {
      if (this.trnData()?.status !== 'running') {
        // 競賽結束或尚未開始，觸發退出事件
        this.trn.closeEventRace();
      }
    });
  }

  ngOnInit(): void {
    // 監聽比賽更新
    this.trn.eventRaceUpdated$.pipe(takeUntil(this.destroy$)).subscribe(this.onStatusUpdate.bind(this));

    this.game.readyForSpin$.pipe(takeUntil(this.destroy$)).subscribe(this.sendRankingRequest.bind(this));
    this.playerListAll.set(this.trn.eventPlayerList());
    this.endTime.set(this.trn.eventEndedTime());
    this.prize.set(this.trn.eventPrize());
    this.multiplier.set(this.trn.betDataMultiplier());
    this.updateInterval = interval(10000).subscribe(this.sendRankingRequest.bind(this));

    // 將目前正在運行的長期競賽ID存到storage
    this.storage.trnEventRunning = this.storageEventRunning();
  }

  ngOnDestroy(): void {
    this.updateInterval?.unsubscribe();
    // 清除目前正在運行的長期競賽ID
    this.storage.trnEventRunning = null;
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClickExit() {
    this.exitLeave.emit();
  }

  onMatchTimeout() {
    this.matchTimeout.emit();
  }

  /** 遊戲中片段顯示的玩家列表 */
  playerListPart = computed(() => {
    // 包括isHighlight的玩家 跟isHighlight的玩家前4名
    const highlightIndex = this.playerListAll().findIndex(item => item.highlighted);
    if (highlightIndex === -1 || highlightIndex < 4) {
      return this.playerListAll().slice(0, 5);
    } else {
      const start = Math.max(0, highlightIndex - 4);
      const end = Math.min(this.playerListAll().length, highlightIndex + 1);
      return this.playerListAll().slice(start, end);
    }
  });

  sendRankingRequest() {
    this.trn.sendEventRanking(this.trn.betDataTrn()?.id || '');
  }

  onToggleBetData(enable: boolean) {
    this.showHint.set(true)
    this.trn.enableBetData(enable);
    if (!enable) {
      this.storage.trnEventRunning = null;
    }
  }

  onStatusUpdate(status: TrnRaceUpdated) {
    this.playerListAll.set(status.playersList);
    this.prize.set(status.currentPool || null);
  }
}
