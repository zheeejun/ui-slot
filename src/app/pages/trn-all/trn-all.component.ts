import { Component, computed, effect, input, OnInit, OnDestroy, output, signal, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ApTrnFloatButtonComponent } from '../../components/ap-trn-float-button/ap-trn-float-button.component';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { ApTrnGameStartingComponent } from '../../components/ap-trn-game-starting/ap-trn-game-starting.component';
import { TrnGameConfirmComponent } from '../trn-game-confirm/trn-game-confirm.component';
import { ApTrnStatusBarComponent } from '../../components/ap-trn-status-bar/ap-trn-status-bar.component';
import { ApTrnGameResultComponent } from '../../components/ap-trn-game-result/ap-trn-game-result.component';
import { ApTrnEventSelectionComponent } from '../../components/ap-trn-event-selection/ap-trn-event-selection.component';
import { TrnData, TrnDebugSignalKey, TrnPrizeNotification, TrnRoomMatching, TrnRoomReady, TrnRaceUpdated } from '../../services/trn-ctrl/trn-ctrl.interface';
import { TrnPageType, TrnSignalToggleItem } from './trn-all.interface';
import { ApRowListItem, defaultPlayersList } from '../../components/ap-trn-list-row/ap-trn-list-row.interface';
import { ApTrnGameMatchFinished } from '../../components/ap-trn-game-match-finished/ap-trn-game-match-finished.component';
import { TrnCreatedNotificationComponent } from '../trn-created-notification/trn-created-notification.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { TrnIdleComponent } from "../trn-idle/trn-idle.component";
import { TrnMatchingComponent } from "../trn-matching/trn-matching.component";
import { TrnPlayingQuickComponent } from "../trn-playing-quick/trn-playing-quick.component";
import { TrnPlayingEventComponent } from "../trn-playing-event/trn-playing-event.component";
import { firstValueFrom, timer } from 'rxjs';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { TrnGameEventLeaveConfirmComponent } from '../trn-game-event-leave-confirm/trn-game-event-leave-confirm.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';

@Component({
  selector: 'trn-all',
  imports: [CommonModule, ApButtonComponent, ApTrnFloatButtonComponent, ApButtonComponent, ApTrnGameStartingComponent, TrnGameConfirmComponent, ApTrnStatusBarComponent, ApTrnGameResultComponent, ApTrnEventSelectionComponent, ApTrnGameMatchFinished, TrnIdleComponent, TrnMatchingComponent, TrnPlayingQuickComponent, TrnPlayingEventComponent, TrnCreatedNotificationComponent, TrnGameEventLeaveConfirmComponent, ApIconComponent],
  templateUrl: './trn-all.component.html',
  styleUrl: './trn-all.component.css',
})
export class TrnAllComponent implements OnInit, AfterViewInit, OnDestroy {
  protected appI18n = inject(AppI18nService);
  protected wallet = inject(PlayerWalletService);
  protected trn = inject(TrnCtrlService);
  protected api = inject(AppInterfaceService);
  readonly getGameStarting = this.appI18n.computed('GameStart_Banner', 'Game Start!');
  readonly getStatusModeBar = this.appI18n.computed('BetOn_Header', 'Quick Race Mode');
  readonly getConfirmHeader = this.appI18n.computed('JoinMessage_Title', 'Message');
  readonly getPopupHeader = this.appI18n.computed('Tournament_EventCenter_Tab', 'Event Selection');
  readonly getCountdownStartTitle = this.appI18n.computed('StartIn_Tip', 'Start in');
  readonly getCountdownEndTitle = this.appI18n.computed('EndIn_Tip', 'End in');
  readonly getDaysLabel = this.appI18n.computed('DAYS', 'DAYS');
  readonly getHoursLabel = this.appI18n.computed('HRS', 'HRS');
  readonly getMinutesLabel = this.appI18n.computed('MINS', 'MINS');
  readonly getSecondsLabel = this.appI18n.computed('SECS', 'SECS');
  readonly getPopupResultHeader = this.appI18n.computed('GameResult_Title', 'Game Result');
  readonly getEventDetailsButtonText = this.appI18n.computed('GameResult_DetailLink', 'Event details');
  readonly getPrizeLabel = this.appI18n.computed('Prizes_EventDetailTab', 'Prize');
  readonly getButtonLabel = this.appI18n.computed('OK_Btn', 'Confirm');
  readonly getQuickTitle = this.appI18n.computed('QuickRace_Tab', 'QUICK');
  readonly getEventTitle = this.appI18n.computed('EventRace_Tab', 'EVENT');
  readonly getConfirmButtonText = this.appI18n.computed('OK_Btn', 'Confirm');
  readonly getHeaderFinished = this.appI18n.computed('Finished_Tag', 'Match Finished');
  readonly progressLabel = this.appI18n.computed('MatchFinished_Progress', 'Calculating results...');
  /** 顯示主畫面 */
  showWindow = signal(false);
  private destroy$ = new Subject<void>();
  /** 主畫面主題 */
  themeType = signal<'quick' | 'event'>('quick');
  /** 顯示主畫面 */
  showMainPanel = computed(() => { return this.trn.showMainPanel(); });
  /** 目前選擇的長期競賽 */
  selectedEventTrn = signal<TrnData | null>(null);

  /** 顯示賽事選擇視窗 */
  showEventPopup = signal(false);
  /** 追蹤 trn-idle 內部的 showEventSelection 狀態 */
  showEventSelection = signal(false);
  /** 顯示完整玩家列表 */
  showAllPlayerList = signal(false);
  /** 顯示遊戲開始動畫 */
  showGameStarting = signal(false);
  /** 顯示彈出確認視窗 */
  showConfirmPopup = signal(false);
  /** Quick 或 Event 競賽確認視窗的類型 */
  confirmVariant = signal<'quick' | 'event'>('event');
  /** 顯示配對結束畫面 */
  showMatchFinished = signal(false);
  /** 顯示退出競賽視窗 */
  showExitPopup = signal(false);
  /** Event 是否因時間到結束 */
  isEventTimeoutEnded = signal(false);
  /** 顯示等待結果中 */
  showWaitingResult = signal(false);


  /** 顯示上方狀態列 */
  showStatusBar = computed(() => { return this.wallet.trnSetting() ? true : this.debugShowStatusBar(); });
  /** 顯示啟動提示訊息 */
  showHint = signal(false);
  /** 顯示遊戲結果 */
  showGameResult = signal(false);

  /** 結果主題 */
  resultTheme = signal<'quick' | 'event'>('quick');
  /** 結果倍率 */
  resultMultiplier = signal<number>(1);
  /** 獎金結果 */
  resultPrize = signal<number | null>(0);
  /** 遊戲結果完整列表 */
  resultListAll = signal<ApRowListItem[]>(defaultPlayersList.slice(0, 20));
  /** 遊戲結果使用者排名 */
  resultRank = signal<number | null>(null);
  /** 遊戲結果通知ID */
  resultNotificationId = signal<string>('');

  /** 目前頁面 */
  currentPage = signal<TrnPageType>('idle');
  /** 目前使用者的排名 */
  userRank = computed<number | null>(() => { return this.themeType() === 'quick' ? this.trn.roomRank() : null; });

  /** 是否啟用 BetData */
  isBetDataEnabled = computed<boolean>(() => {
    return this.wallet.trnData() !== null;
  });

  /** 是否正在遊玩 */
  isPlaying = computed<boolean>(() => {
    return this.trn.status() === 'playing-quick' || this.trn.status() === 'playing-event';
  });

  /** 測試用: 顯示上方狀態列 */
  debugShowStatusBar = signal(false);

  /** 控制用的signal*/
  signalList: TrnSignalToggleItem[] = [
    { key: 'game-starting', signal: this.showGameStarting },
    { key: 'confirm-popup', signal: this.showConfirmPopup },
    { key: 'event-popup', signal: this.showEventPopup },
    { key: 'match-finished', signal: this.showMatchFinished },
    { key: 'status-bar', signal: this.debugShowStatusBar },
    { key: 'game-result', signal: this.showGameResult },
    { key: 'waiting-result', signal: this.showWaitingResult },
  ];
  // injected services
  protected readonly storage = inject(StorageCtrlService);
  constructor() {
    // 根據目前頁面設定主題
    effect(() => {
      if (this.currentPage() === 'matching') this.themeType.set('quick');
      else if (this.currentPage() === 'playing-quick') this.themeType.set('quick');
      else if (this.currentPage() === 'playing-event') this.themeType.set('event');
    });
  }

  ngOnInit(): void {
    // 監聽房間配對事件
    this.trn.roomMatching$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomMatching.bind(this));
    // 監聽房間準備完成事件
    this.trn.roomReady$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomReady.bind(this));
    // 監聽房間結束事件
    this.trn.roomEnding$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomEnding.bind(this));
    // 監聽房間取消事件
    this.trn.roomCancelled$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomCancelled.bind(this));

    // 監聽活動賽事準備完成事件
    this.trn.eventRaceReady$.pipe(takeUntil(this.destroy$)).subscribe(this.onEventReady.bind(this));
    // 監聽活動賽事結束事件
    this.trn.eventRaceEnded$.pipe(takeUntil(this.destroy$)).subscribe(this.onEventEnded.bind(this));

    // 監聽獎項通知
    this.trn.prizeNotification$.pipe(takeUntil(this.destroy$)).subscribe(this.onPrizeNotification.bind(this));

    // 監聽錯誤
    this.trn.error$.pipe(takeUntil(this.destroy$)).subscribe(this.onError.bind(this));

    // 監聽Debug Panel強制切換頁面事件
    this.trn.debugPage$.pipe(takeUntil(this.destroy$)).subscribe(this.onDebugPage.bind(this));
    // 監聽Debug Panel強制觸發Signal事件
    this.trn.debugSignal$.pipe(takeUntil(this.destroy$)).subscribe(this.onDebugSignal.bind(this));

    // 如果有正在配對的快速賽事，直接進入配對畫面
    if (this.trn.status() === 'matching-quick') {
      this.showWindow.set(true);
      this.trn.enableBetListLimit(true);
      this.currentPage.set('matching');
    }

    // 如果有正在進行的快速賽事，直接進入遊玩畫面
    if (this.trn.status() === 'playing-quick') {
      this.showWindow.set(true);
      this.trn.enableBetData(true);
      this.currentPage.set('playing-quick');
    }

    // 如果有正在進行的活動賽事，直接進入遊玩畫面
    if (this.trn.status() === 'playing-event') {
      this.showWindow.set(true);
      this.trn.openEventRace(this.storage.trnEventRunning?.id || '');
      this.trn.enableBetData(this.storage.trnEventRunning?.betDataEnabled || false);
      this.selectedEventTrn.set(this.trn.betDataTrn());
      this.currentPage.set('playing-event');
    }

    // 如果沒有快速賽事，預設切換到長期競賽分頁
    if (this.trn.trnQuick() === null) {
      this.themeType.set('event');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    this.trn.sendPrizeRequest();
  }

  /** 遊戲結果玩家列表 */
  resultListPart = computed(() => {
    // 包括isHighlight的玩家, 跟全部前四名
    const highlightIndex = this.resultListAll().findIndex(item => item.highlighted);
    if (highlightIndex === -1 || highlightIndex < 4) {
      return this.resultListAll().slice(0, 5);
    } else {
      // 取得前四名
      const topList = this.resultListAll().slice(0, 4);
      // 加上isHighlight的玩家
      const highlightItem = this.resultListAll()[highlightIndex];
      return topList.concat([highlightItem]);
    }
  });


  onDebugSignal(key: TrnDebugSignalKey) {
    const signalItem = this.signalList.find(item => item.key === key);
    if (signalItem) {
      signalItem.signal.set(!signalItem.signal());
    }
  }

  onDebugPage(page: TrnPageType) {
    this.currentPage.set(page);
  }

  async onClickResultConfirm(notificationId: string) {
    this.trn.sendPrizeAck(notificationId);
    this.showGameResult.set(false);
    // 等待100毫秒確保視窗關閉動畫完成 這邊會有問題先暫時用timer解決
    await firstValueFrom(timer(100));
    // 請求獎項通知
    this.trn.sendPrizeRequest();
  }

  onEventPopupSelected(data: TrnData) {
    this.selectedEventTrn.set(data);
    this.showEventPopup.set(false);
  }

  /** 房間開始配對 */
  onRoomMatching(data: TrnRoomMatching) {
    this.currentPage.set('matching');
  }

  /** 房間遊戲開始 */
  onRoomReady(data: TrnRoomReady) {
    this.currentPage.set('playing-quick');
    this.showGameStarting.set(true);
  }

  /** 房間遊戲結束 */
  onRoomEnding(data: TrnRaceUpdated) {
    // 關閉BetData 關閉遊戲畫面
    this.showMatchFinished.set(true);
    this.currentPage.set('idle');
  }

  onRoomCancelled() {
    this.currentPage.set('idle');
  }

  /** 長期活動進入賽事介面 */
  onEventReady(data: TrnRaceUpdated) {
    this.showGameStarting.set(true);
    this.currentPage.set('playing-event');
  }

  /** 長期活動跳出競賽介面 */
  onEventEnded() {
    if (this.isEventTimeoutEnded()) {
      this.showMatchFinished.set(true);
      this.isEventTimeoutEnded.set(false);
    }
    this.showEventPopup.set(false);
    this.currentPage.set('idle');
  }

  /** 長期活動時間到結束 */
  onEventMatchTimeout() {
    this.isEventTimeoutEnded.set(true);
    this.trn.closeEventRace();
  }

  onClickTab(tab: 'quick' | 'event') {
    this.themeType.set(tab);
  }

  onCloseMatchFinished() {
    this.showMatchFinished.set(false);
  }

  onOpenEventPopup() {
    this.showEventPopup.set(true);
  }

  /** 退出競賽 */
  onExitEvent() {
    this.trn.closeEventRace();

    // 如果目前選擇的eventtrn正在運行，則保持選擇不變
    if (this.selectedEventTrn()?.status === 'running')
      return;

    // 如果目前選擇的eventtrn沒有運行，則嘗試自動選擇一個正在運行的競賽
    const firstEvent = this.trn.trnEventRunningList()?.[0] || null;
    this.selectedEventTrn.set(firstEvent);
  }

  onPrizeNotification(data: TrnPrizeNotification) {
    // 顯示通知視窗
    this.showGameResult.set(true);
    this.showMatchFinished.set(false);
    this.resultNotificationId.set(data.notificationId);
    this.resultListAll.set(data.playersList);
    this.resultTheme.set(data.type || 'quick');
    this.resultPrize.set(data.prize);
    this.resultRank.set(data.rank);
  }

  onError(error: any) {
    alert(`${JSON.stringify(error)}`);
    this.currentPage.set('idle');
  }
}
