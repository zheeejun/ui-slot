import { Component, computed, effect, input, OnInit, OnDestroy, output, signal, inject, viewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { ApTrnCardBonusComponent } from "../../components/ap-trn-card-bonus/ap-trn-card-bonus.component";
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { TrnData, TrnRaceUpdated } from '../../services/trn-ctrl/trn-ctrl.interface';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { ApTrnCardTitleComponent } from "../../components/ap-trn-card-title/ap-trn-card-title.component";
import { ApTrnGameListComponent } from '../../components/ap-trn-game-list/ap-trn-game-list.component';

@Component({
  selector: 'trn-idle',
  imports: [CommonModule, ApTrnCardTitleComponent, ApIconComponent, ApTrnCardBonusComponent, ApButtonComponent, ApTrnGameListComponent],
  templateUrl: './trn-idle.component.html',
  styleUrl: './trn-idle.component.css'
})
export class TrnIdleComponent implements OnInit, OnDestroy {
  private readonly dontShowStorageKey = 'ap_storage_trn_game_confirm_dont_show';
  private appI18n = inject(AppI18nService);
  protected trn = inject(TrnCtrlService);
  protected wallet = inject(PlayerWalletService);
  protected game = inject(GameIframeCtrlService);
  protected eventCenter = inject(EventCenterCtrlService);
  readonly getQuickTabText = this.appI18n.computed('QuickRace_Tab', 'QUICK');
  readonly getEventTabText = this.appI18n.computed('EventRace_Tab', 'EVENT');
  readonly getEventDetailsButtonText = this.appI18n.computed('GameResult_DetailLink', 'Event details')
  readonly betMultiplierTitle = this.appI18n.computed('BetBoost', 'BET');
  readonly getJoinButtonText = this.appI18n.computed('Join_Btn', 'Join Event');
  readonly getRejoinButtonText = this.appI18n.computed('Rejoin_Btn', 'REJOIN');
  readonly getMatchButtonText = this.appI18n.computed('Match_Btn', 'Find Match');
  readonly insufficientBalance = this.appI18n.computed('not_enough_bet', 'Insufficient Balance');
  /** 是否顯示快速競賽分頁 */
  showTabQuick = computed(() => this.trn.trnQuick() !== null);
  /** 是否顯示長期競賽分頁 */
  showTabEvent = computed(() => (this.trn.trnEventRunningList()?.length || 0) > 0);
  /** 起始的分頁 */
  selectedTab = input<'quick' | 'event'>('quick');
  /** 是否已經開啟主畫面 */
  windowOpened = input<boolean>(false);
  /** 目前選擇的分頁 */
  currentTab = signal<'quick' | 'event'>('quick');
  /** 目前選擇的長期競賽 */
  selectedEvent = signal<TrnData | null>(null);
  /** 長期競賽的總獎金 */
  selectedEventTotalPrize = signal<number | null>(null);
  /** 長期競賽玩家自己的分數/獎金 */
  selectedEventUserPoint = signal<number | null>(null);
  /** 是否正在跟Server拿取總獎金 */
  isTotalPrizeLoading = signal(false);
  /** 長期競賽的投注倍數 */
  betMultiplierEvent = computed(() => this.selectedEvent()?.betMultiplier || null);
  /** 快速競賽的總獎金 */
  prizeAmountQuick = computed(() => this.trn.currentTier()?.totalPrize || null);
  /** 快速競賽的投注倍數 */
  betMultiplierQuick = computed(() => this.currentQuick()?.betMultiplier || null);
  /** 長期競賽是否已經加入過 */
  isSelectedEventJoined = computed(() => this.selectedEventUserPoint() !== null);
  /* Tab 切換後內容高度與寬度 */
  quickContent = viewChild<ElementRef<HTMLDivElement>>('quickContent');
  eventContent = viewChild<ElementRef<HTMLDivElement>>('eventContent');
  contentHeight = signal<number | undefined>(undefined);
  /** Event 選擇視窗面板開關 */
  showEventSelection = signal(false);
    

  getDaysLabel=input<string>('DAYS');
  getHoursLabel=input<string>('HRS');
  getMinutesLabel=input<string>('MINS');
  getSecondsLabel=input<string>('SECS');
  getCountdownStartTitle=input<string>('Start in');
  getCountdownEndTitle=input<string>('End in');
  readonly trnList = computed<TrnData[]>(() => this.trn.trnEventRunningList() || []);
  readonly selectEvent = output<TrnData>({ alias: 'selectedEvent' });
  header = input('Event Selection');

  /** 長期競賽按鈕文字 */
  readonly joinEventButtonText = computed(() =>
    this.isSelectedEventJoined()
      ? this.getRejoinButtonText()
      : this.getJoinButtonText()
  );

  /** 按鈕載入中狀態 */
  isButtonLoading = computed(() => this.trn.status() !== 'idle');
  /** 是否允許加入競賽 */
  isJoinDisabled = signal<boolean>(false);
  /** 關閉長期競賽加入按鈕 */
  isJoinEventDisabled = computed<boolean>(() => {
    return this.isJoinDisabled() || !this.selectedEvent() || this.isInsufficientBalance() || this.isPlayerUseCampaign();
  });
  /** 關閉快速競賽加入按鈕 */
  isJoinQuickDisabled = computed<boolean>(() => {
    return this.isJoinDisabled() || !this.currentQuick() || this.isInsufficientBalance() || this.isPlayerUseCampaign();
  });
  /** 使用者點選分頁 */
  clickTab = output<'quick' | 'event'>();
  /** 如果wallet.campaignSetting有設定表示使用者正在使用campaign */
  isPlayerUseCampaign = computed(() => {
    const setting = this.wallet.campaignSetting();
    return setting ? true : false;
  });

  private destroy$ = new Subject<void>();
  private destroyed = false;

  openConfirm = output<{ variant: 'quick' | 'event'; event: TrnData | null }>();

  currentQuick = computed(() => this.trn.trnQuick());

  /** 快速競賽餘額不足 */
  isInsufficientBalance = computed(() => {
    const min = this.trn.currentTier()?.minPlayerBalance || 0;
    return this.wallet.balance() < min;
  });
  /** 快速競賽所需餘額 */
  requiredBalanceString = computed(() =>
    `${this.trn.currencySymbol()}${this.trn.currentTier()?.minPlayerBalance || 0}`
  );

  constructor(

  ) {
    effect(() => {
      const event = this.selectedEvent();
      if (event) {
        this.selectedEventTotalPrize.set(null);
        this.selectedEventUserPoint.set(null);
        this.isTotalPrizeLoading.set(true);
        this.trn.sendEventRanking(event.id);
      }
    });

    effect(() => { 
      if (!this.windowOpened())
        this.showEventSelection.set(false);
     });

  }

  ngAfterViewInit(): void {
    this.updateContentHeight();
    // 如果只有一個長期競賽正在進行，預設選擇它
    if (this.trn.trnEventRunningList()?.length === 1) {
      this.selectedEvent.set(this.trn.trnEventRunningList()![0]);
    }
  }

  ngOnInit(): void {
    this.currentTab.set(this.selectedTab());
    try {
      const saved = JSON.parse(localStorage.getItem('ap_storage_trn_idle_state') ?? 'null');
      if (saved?.selectedEventId) {
        const event = this.trn.trnEventRunningList()?.find(e => e.id === saved.selectedEventId);
        if (event) this.selectedEvent.set(event);
      }
    } catch { localStorage.removeItem('ap_storage_trn_idle_state'); }

    this.game.startSpinning$.pipe(takeUntil(this.destroy$)).subscribe(() => this.isJoinDisabled.set(true));
    this.game.readyForSpin$.pipe(takeUntil(this.destroy$)).subscribe(() => this.isJoinDisabled.set(false));
    this.trn.eventRanking$.pipe(takeUntil(this.destroy$)).subscribe(this.onEventRanking.bind(this));
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    localStorage.setItem('ap_storage_trn_idle_state', JSON.stringify({
      selectedEventId: this.selectedEvent()?.id ?? null,
    }));
    this.destroy$.next();
    this.destroy$.complete();
  }

  /** 快速競賽 
  onFindMatch(): void {
    this.trn.sendJoinQuick();
  }*/
  onJoinQuick(): void {
    const quick = this.currentQuick();
    if (!quick) return;

    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const last = this.getDontShowAgainByEvent(quick.id);

    // 跳出不足的條件
    

    if (!last || now - last > oneWeek) {
      this.openConfirm.emit({ variant: 'quick', event: quick });
      return;
    }

    this.trn.sendJoinQuick();
  }

  /** 長期競賽 */
  onJoinEvent(): void {
    const event = this.selectedEvent();
    if (!event) return;

    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const last = this.getDontShowAgainByEvent(event.id);

    if (!last || now - last > oneWeek) {
      this.openConfirm.emit({ variant: 'event', event });
      return;
    }

    this.trn.openEventRace(event.id);
  }

  private getDontShowAgainByEvent(eventId: string): number | null {
    const raw = localStorage.getItem(this.dontShowStorageKey);
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw);
      return typeof parsed?.[eventId] === 'number' ? parsed[eventId] : null;
    } catch {
      return null;
    }
  }

  onEventRanking(data: TrnRaceUpdated) {
    this.selectedEventTotalPrize.set(data.currentPool);
    this.selectedEventUserPoint.set(
      data.playersList.find(p => p.highlighted)?.win ?? null
    );
    this.isTotalPrizeLoading.set(false);
    this.updateContentHeight();
  }

  onClickEventDetails(): void {
    if (!this.selectedEvent()) return;
    this.eventCenter.open(`tournament/${this.selectedEvent()!.id}`);
  }

  onClickQuickDetails(): void {
    if (!this.currentQuick()) return;
    this.eventCenter.open(`tournament/${this.currentQuick()!.id}`);
  }

  onClickTab(tab: 'quick' | 'event'): void {
    this.currentTab.set(tab);
    this.clickTab.emit(tab);
    this.updateContentHeight();
    // 如果有多於一個長期競賽，顯示長期競賽選擇面板
    if ((this.trn.trnEventRunningList()?.length || 0) > 1)
      this.showEventSelection.set(tab === 'event');
  }

  // 內容高度更新，包含初始載入和切換分頁
  updateContentHeight() {
    Promise.resolve().then(() => {
      requestAnimationFrame(() => {
        if (this.destroyed) return;
        let newHeight: number | undefined;
        
        if (this.currentTab() === 'quick') {
          newHeight = this.quickContent()?.nativeElement.scrollHeight;
        } else {
          newHeight = this.eventContent()?.nativeElement.scrollHeight;
        }
        this.contentHeight.set(newHeight);
      });
    });
  }

  hasJoinedEvent(trn: TrnData): boolean {
    return trn.raceData?.rank !== null || !!trn.raceData?.playersList?.some(player => player.highlighted);
  }

  onEventClick(trn: TrnData): void {
    this.selectedEvent.set(trn);
    this.selectEvent.emit(trn);
    this.onJoinEvent();
  }

  clickClose() {
    this.showEventSelection.set(false);
  }
}
