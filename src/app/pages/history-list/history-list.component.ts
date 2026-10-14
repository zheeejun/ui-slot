import { AfterViewInit, Component, computed, inject, input, OnInit, output, signal, ViewChild } from '@angular/core';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { GACollectorService } from '../../services/datacollector/gacollector.service';
import { HistoryDateOptionGAMap, TO_GA_ID } from '../../services/datacollector/gacollector.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { CommonModule } from '@angular/common';
import { ApHistoryListComponent } from '../../components/ap-history-list/ap-history-list.component';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { ApUiFramePageComponent } from '../../components/ap-ui-frame-page/ap-ui-frame-page.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApHistoryPopupShareComponent } from '../../components/ap-history-popup-share/ap-history-popup-share.component';
import { TabMenuItem, ApTabMenuTextComponent } from '../../../ap-components-lib/ap-tab-menu-text/ap-tab-menu-text.component';
import { DateRange, DateRangeOption } from '../../components/ap-history-calender/ap-history-calender.interface';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';
import { HistoryReplayService } from '../../services/history-replay/history-replay.service';
import { HistoryReplayViewerComponent } from '../history-replay-viewer/history-replay-viewer.component';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { HistoryCtrlService } from '../../services/history-ctrl/history-ctrl.service';
import { NavigatorShareService } from '../../services/navigator-share/navigator-share.service';
import { LoggerService } from '../../services/logger/logger.service';
import { LeaderBoardService } from '../../services/leader-board/leader-board.service';
import { HistoryListItem } from '../../services/history-ctrl/history-list.interface';
import { HistoryDetailRewardComponent } from "../history-detail-reward/history-detail-reward.component";
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { TicketMessageResponse } from '../../services/history-replay/history-replay.interface';
import { ApHistoryPopupReplayComponent } from "../../components/ap-history-popup-replay/ap-history-popup-replay.component";
import { isHistoryReplaySupported } from '../../services/history-replay/history-replay.function';
import { ApHistoryCalenderComponent } from "../../components/ap-history-calender/ap-history-calender.component";
import { ClickOutsideDirective } from '../../shared/directives/click-out-side/click-out-side.directive';
import { firstValueFrom, timer } from 'rxjs';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { HistoryDetailComponent } from '../history-detail/history-detail.component';
import { HistoryDetailStyleType } from '../../services/history-ctrl/history-detail-style.type';
import { ApWebReplaySessionKey } from '../../../chiikawa/ApWeb/ApWebInterface';
import { HistoryWinLoseFilter } from '../../components/ap-history-list/ap-history-list.interface';
import { MoneyText } from '../../services/player-wallet/player-wallet.function';
@Component({
  selector: 'history-list',
  imports: [CommonModule, ApUiFramePageComponent, ApUiFramePopupComponent, ApHistoryListComponent, ApLoadingOverlayComponent, ApHistoryPopupShareComponent, ApTabMenuTextComponent, AppI18nPipe, HistoryReplayViewerComponent, HistoryDetailRewardComponent, ApHistoryPopupReplayComponent, ApHistoryCalenderComponent, ClickOutsideDirective, ApIconComponent, ApButtonComponent, HistoryDetailComponent],
  templateUrl: './history-list.component.html',
  styleUrl: './history-list.component.css',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HistoryListComponent implements AfterViewInit, OnInit {
  // Services
  protected readonly api = inject(AppInterfaceService);
  private readonly gaCollector = inject(GACollectorService);
  protected readonly appI18n = inject(AppI18nService);
  protected readonly replay = inject(HistoryReplayService);
  protected readonly session = inject(ClientSessionService);
  protected readonly history = inject(HistoryCtrlService);
  protected readonly nav = inject(NavigatorShareService);
  protected readonly logger = inject(LoggerService);
  protected readonly leaderBoard = inject(LeaderBoardService);
  protected readonly user = inject(PlayerWalletService);
  protected isMobile = computed(() => this.session.isMobile());
  protected isGhana = computed(() => this.session.isGhanaUI);
  // Localization
  readonly header = this.appI18n.computed('history_history', 'History');
  readonly winLabelState = signal<HistoryWinLoseFilter>('winlose');

  /** server login 控制 replay, share 按鈕顯示 */
  readonly serverReplayEnabled = computed(() => { return this.api.loginResult()?.note?.history_replay === 1; });

  // 檢查遊戲是否支援 Replay
  readonly isReplaySupported = computed(() => {
    const gameId = this.session.gameId;
    if (!gameId) return false;
    return isHistoryReplaySupported(gameId);
  });
  // 舊遊戲.
  readonly isOldGame = computed(() => this.session.isUseInGameUI);
  // Data
  readonly cashList = signal<HistoryListItem[]>([]);
  readonly bonusList = signal<HistoryListItem[]>([]);
  readonly wallet = signal<'cash' | 'bonus'>('cash');
  readonly hideTabMenu = input(false);
  readonly walletTabs = computed<TabMenuItem[]>(() => [
    {
      id: 'cash',
      label: this.appI18n.instant('history_cash_wallet_tab', 'Cash'),
      icon: 'wallet',
    },
    {
      id: 'bonus',
      label: this.appI18n.instant('history_bonus_wallet_tab', 'Bonus'),
      icon: 'star',
    },
  ]);


  // Server response metadata
  private cashTotalCount = signal<number>(0);
  private cashTotalBet = signal<number>(0);
  private cashTotalWin = signal<number>(0);
  private bonusTotalCount = signal<number>(0);
  private bonusTotalBet = signal<number>(0);
  private bonusTotalWin = signal<number>(0);

  // Pagination
  private cashFirstIndex = signal<number>(0);
  private bonusFirstIndex = signal<number>(0);
  private readonly batchSize = 20;

  // Loading more state
  readonly isLoadingMore = signal<boolean>(false);

  // State
  readonly isLoading = signal<boolean>(true);
  readonly isShareLoading = signal<boolean>(false);
  readonly isShare = signal<boolean>(false);
  readonly isReplay = signal<boolean>(false);
  readonly isSpin = signal<boolean>(false);
  readonly replayItem = signal<HistoryListItem | null>(null);
  readonly sharedItem = signal<HistoryListItem | null>(null);
  readonly detailItem = signal<HistoryListItem | null>(null);

  readonly isReelResultItem = computed(() => {
    const item = this.detailItem();
    if (!item) return false;
    if (item.rewardType === 'Normal Game') return true;
    if (item.rewardType === 'Bonus Wallet') return true;
    return false;
  });
  readonly historyDetailStyle = computed<HistoryDetailStyleType>(() => this.history.historyDetailStyle());

  /** 是否顯示詳細資訊 */
  readonly isDetail = signal<boolean>(false);

  // Replay viewer 相關
  readonly showReplayConfirm = signal<boolean>(false);
  readonly showReplayViewer = computed(() => this.replay.showReplayViewer());

  // Date Range 相關
  readonly selectedDateRange = signal<DateRange | null>(this.getTodayRange());
  readonly showCalendar = signal<boolean>(false);

  readonly close = output<void>();

  // copy transaction notification
  showCopyNotification = signal<boolean>(false);
  copiedTransaction = signal<string>('');
  ngOnInit(): void {
    this.replay.ticket$.subscribe(this.onReplayTicketResponse.bind(this));
  }

  ngAfterViewInit() {
    // 只載入預設的 cash wallet 資料
    this.loadCashHistory();
  }

  /** 載入 Cash 錢包歷史記錄 */
  private async loadCashHistory() {
    this.isLoading.set(true);
    // 增加延遲避免來回切換時閃爍, 也不要讓使用者連續點擊切換時發太多請求
    await firstValueFrom(timer(500));
    try {
      const range = this.selectedDateRange();
      const startDate = range?.from || new Date();
      const endDate = range?.to || new Date();

      // 根據 winLabelState 決定過濾條件
      const filterType = this.winLabelState();

      // 重置分頁索引
      this.cashFirstIndex.set(0);

      const response = await this.history.getCashHistoryList(filterType, startDate, endDate, 0, this.batchSize);

      this.cashList.set(response.items);
      this.cashTotalCount.set(response.total_count);
      this.cashTotalBet.set(response.total_bet);
      this.cashTotalWin.set(response.total_win);

      // 更新下一批的起始索引
      this.cashFirstIndex.set(response.items.length);
    } catch (error) {
      this.logger.error('[History] Failed to load cash history:', error);
    } finally {
      this.isLoading.set(false);
    }
  }

  /** 載入 Bonus 錢包歷史記錄 */
  private async loadBonusHistory() {
    this.isLoading.set(true);
    // 增加延遲避免來回切換時閃爍, 也不要讓使用者連續點擊切換時發太多請求
    await firstValueFrom(timer(500));
    try {
      const range = this.selectedDateRange();
      const startDate = range?.from || new Date();
      const endDate = range?.to || new Date();

      // 根據 winLabelState 決定過濾條件
      const filterType = this.winLabelState();

      // 重置分頁索引
      this.bonusFirstIndex.set(0);

      const response = await this.history.getBonusHistoryList(filterType, startDate, endDate, 0, this.batchSize);

      this.bonusList.set(response.items);
      this.bonusTotalCount.set(response.total_count);
      this.bonusTotalBet.set(response.total_bet);
      this.bonusTotalWin.set(response.total_win);

      // 更新下一批的起始索引
      this.bonusFirstIndex.set(response.items.length);
    } catch (error) {
      this.logger.error('[History] Failed to load bonus history:', error);
    } finally {
      this.isLoading.set(false);
    }
  }

  openReplayConfirm(item: HistoryListItem | null) {
    this.gaCollector.trackButtonClick({ buttonName: TO_GA_ID.HistoryReplayBySelectedTicket });
    this.replayItem.set(item);
    this.showReplayConfirm.set(true);
  }

  onReplayTicketResponse(ticket: TicketMessageResponse) {
    this.showReplayConfirm.set(false);
    let replayUrl: string;
    if (this.session.remoteHost) {
      const replayResult = sessionStorage.getItem(ApWebReplaySessionKey) ?? '';
      this.replay.setPendingPostSessionData({ [ApWebReplaySessionKey]: replayResult });
      replayUrl = `${this.session.remoteHost}?replayurl=0`;
    } else {
      replayUrl = `/${this.session.gameId}/index.html?replayurl=0`;
    }
    this.replay.openReplayViewer(replayUrl, this.isOldGame());
  }

  onReplayConfirm() {
    const item = this.replayItem();
    if (!item) return;
    this.replay.getTicketDetail(item.transaction, 'History');
  }

  /**
   * 取消 Replay
   */
  onReplayCancel(): void {
    this.showReplayConfirm.set(false);
    this.replayItem.set(null);
  }

  /**
   * 關閉 Replay
   */
  onReplayClose(): void {
    this.replay.closeReplayViewer();
    this.showReplayConfirm.set(false);
    this.replayItem.set(null);
  }

  /**
   * 處理複製 Replay 連結請求
   */
  async onCopyLinkRequest(item: HistoryListItem | null): Promise<void> {
    if (!item) {
      this.logger.error('[History] No replay item selected');
      return;
    }

    try {
      // 取得 ticket number (從 transaction 欄位)
      const ticketNo = item.transaction || '';

      // 訂閱 shortUrl$ 事件
      const subscription = this.replay.shortUrl$.subscribe((response) => {
        // 先退訂
        subscription.unsubscribe();

        this.logger.log('[History] Received ShortURL from subscription for copy:', response);

        // 處理收到的 URL
        if (response.url) {
          // 複製到剪貼板
          this.nav.copyToClipboard(response.url)
            .then(() => {
              // 顯示複製成功提示
              //this.replayViewerComponent?.showCopyLinkToast();
            })
            .catch(err => {
              this.logger.error('[History] Failed to copy replay link:', err);
            });
        }
      });

      // 發送請求
      this.replay.getShortUrl(ticketNo, 'History', '', null);

    } catch (error) {
      this.logger.error('[History] Failed to copy link:', error);
    }
  }

  async copyTransaction(transaction: string) {
    await this.nav.copyToClipboard(transaction)
    this.copiedTransaction.set(transaction);
    this.showCopyNotification.set(true);
  }
  
  dismissCopyNotification() {
    this.showCopyNotification.set(false);
  }

  /**
   * 取得當前分享項目的分享連結
   */
  getShareUrlForCurrentItem = async (): Promise<string | null> => {
    const item = this.sharedItem();
    if (!item) {
      this.logger.error('[History] No share item selected');
      return null;
    }

    try {
      // 取得 ticket number (從 transaction 欄位)
      const ticketNo = item.transaction || '';

      // 使用 Promise 包裝訂閱，等待 URL 返回
      return new Promise<string | null>((resolve, reject) => {
        // 訂閱 shortUrl$ 事件
        const subscription = this.replay.shortUrl$.subscribe((response) => {
          // 先退訂
          subscription.unsubscribe();

          this.logger.log('[History] Received ShortURL from subscription for getShareUrl:', response);

          // 處理收到的 URL
          if (response.url) {
            this.logger.log('[History] Generated share URL:', response.url);
            resolve(response.url);
          } else {
            this.logger.error('[History] Failed to generate share URL');
            resolve(null);
          }
        });

        // 發送請求
        this.replay.getShortUrl(ticketNo, 'History', '', null);
      });
    } catch (error) {
      this.logger.error('[History] Failed to generate share URL:', error);
      return null;
    }
  };


  showDetail(item: HistoryListItem) {
    this.isDetail.set(true);
    this.detailItem.set(item);
  }

  async shareToWebSns(item: HistoryListItem | null) {
    if (!item) return;
    this.isShareLoading.set(true);
    try {
      const ticketNo = item.transaction || '';

      // 訂閱 shortUrl$ 事件
      const subscription = this.replay.shortUrl$.subscribe(async (response) => {
        // 先退訂
        subscription.unsubscribe();

        // 處理收到的 URL
        if (response.url) {
          try {
            const result = await this.nav.shareToWebSns({
              title: this.appI18n.instant('history_share_title', 'Share Game History'),
              text: this.appI18n.instant('history_share_text', 'Check out my game result!'),
              url: response.url
            });

            // Web Share API not supported — fall back to share popup
            if (!result.supported || result.error) {
              this.isShare.set(true);
              this.sharedItem.set(item);
            }
          } catch (shareError) {
            this.logger.error('[History] Failed to share:', shareError);
            this.isShare.set(true);
            this.sharedItem.set(item);
          }
        }

        this.isShareLoading.set(false);
      });

      // 發送請求
      this.replay.getShortUrl(ticketNo, 'History', '', null);

    } catch (error) {
      this.logger.error('[History] Failed to request share URL:', error);
      this.isShare.set(true);
      this.sharedItem.set(item);
      this.isShareLoading.set(false);
    }
  }


  onWalletTabChange(tabId: string) {
    const walletType = tabId as 'cash' | 'bonus';
    this.wallet.set(walletType);
    this.winLabelState.set('winlose'); // 切換錢包時，重置 winLabelState 為 'winlose'

    // 切換到該 wallet 時，如果該 wallet 的資料還沒載入，就載入
    if (walletType === 'cash') {
      this.loadCashHistory();
    } else if (walletType === 'bonus') {
      this.loadBonusHistory();
    }
  }

  onWinLabelClick(state: HistoryWinLoseFilter) {
    this.winLabelState.set(state);
    this.gaCollector.trackButtonClick({ buttonName: TO_GA_ID.HistoryWinLose });

    // 重新載入當前錢包的數據
    this.reloadCurrentWallet();
  }

  /** 重新載入當前錢包的數據 */
  private reloadCurrentWallet() {
    const wallet = this.wallet();
    if (wallet === 'cash') {
      this.loadCashHistory();
    } else {
      this.loadBonusHistory();
    }
  }

  /** 載入更多 Cash 記錄 */
  async loadMoreCash() {
    if (this.isLoadingMore() || this.isLoading()) return;

    const currentCount = this.cashList().length;
    const totalCount = this.cashTotalCount();

    // 如果已經載入所有資料，不再請求
    if (currentCount >= totalCount) {
      return;
    }

    this.isLoadingMore.set(true);

    try {
      const range = this.selectedDateRange();
      const startDate = range?.from || new Date();
      const endDate = range?.to || new Date();
      const filterType = this.winLabelState();
      const firstIndex = this.cashFirstIndex();

      const response = await this.history.getCashHistoryList(filterType, startDate, endDate, firstIndex, this.batchSize);

      // 追加資料到現有清單
      this.cashList.update(list => [...list, ...response.items]);

      // 更新下一批的起始索引
      this.cashFirstIndex.set(firstIndex + response.items.length);

    } catch (error) {
      this.logger.error('[History] Failed to load more cash history:', error);
    } finally {
      this.isLoadingMore.set(false);
    }
  }

  /** 載入更多 Bonus 記錄 */
  async loadMoreBonus() {
    if (this.isLoadingMore() || this.isLoading()) return;

    const currentCount = this.bonusList().length;
    const totalCount = this.bonusTotalCount();

    // 如果已經載入所有資料，不再請求
    if (currentCount >= totalCount) {
      return;
    }

    this.isLoadingMore.set(true);

    try {
      const range = this.selectedDateRange();
      const startDate = range?.from || new Date();
      const endDate = range?.to || new Date();
      const filterType = this.winLabelState();
      const firstIndex = this.bonusFirstIndex();

      const response = await this.history.getBonusHistoryList(filterType, startDate, endDate, firstIndex, this.batchSize);

      // 追加資料到現有清單
      this.bonusList.update(list => [...list, ...response.items]);

      // 更新下一批的起始索引
      this.bonusFirstIndex.set(firstIndex + response.items.length);
    } catch (error) {
      this.logger.error('[History] Failed to load more bonus history:', error);
    } finally {
      this.isLoadingMore.set(false);
    }
  }

  /** 處理滾動事件，快到底部時載入更多 */
  onScrollNearEnd() {
    const wallet = this.wallet();
    if (wallet === 'cash') {
      this.loadMoreCash();
    } else {
      this.loadMoreBonus();
    }
  }

  // Computed properties for bottom info table
  readonly currentList = computed<HistoryListItem[]>(() => {
    return this.wallet() === 'cash' ? this.cashList() : this.bonusList();
  });

  private filterByDateRange(list: HistoryListItem[]): HistoryListItem[] {
    const range = this.selectedDateRange();
    if (!range || (!range.from && !range.to)) return list;
    if (range.from && range.to) {
      const fromDateOnly = range.from.toLocaleDateString(this.session.locale);
      const toDateOnly = range.to.toLocaleDateString(this.session.locale);
      if (fromDateOnly === toDateOnly) {
        return list.filter((item) => (item.date || '').trim() === fromDateOnly);
      }
      const fromTime = new Date(
        range.from.getFullYear(),
        range.from.getMonth(),
        range.from.getDate(),
        0,
        0,
        0,
        0,
      ).getTime();
      const toTime = new Date(
        range.to.getFullYear(),
        range.to.getMonth(),
        range.to.getDate(),
        23,
        59,
        59,
        999,
      ).getTime();
      return list.filter((item) => {
        const dt = this.parseItemDateTime(item.date, item.time).getTime();
        return dt >= fromTime && dt <= toTime;
      });
    }
    return list;
  }

  readonly filteredList = computed<HistoryListItem[]>(() => {
    return this.filterByDateRange(this.currentList());
  });

  readonly historyNumber = computed<string>(() => {
    const wallet = this.wallet();
    const totalCount = wallet === 'cash' ? this.cashTotalCount() : this.bonusTotalCount();
    return totalCount.toString();
  });

  readonly historyDateRange = computed<string>(() => {
    const list = this.filteredList();
    const range = this.selectedDateRange();
    if (range?.from && range?.to) {
      const fromStr = range.from.toLocaleDateString(this.session.locale);
      const toStr = range.to.toLocaleDateString(this.session.locale);
      return fromStr === toStr ? fromStr : `${fromStr} ~ ${toStr}`;
    }

    if (list.length === 0) return '-';

    // Sort by date to get oldest and newest
    const sortedByDate = [...list].sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateA.getTime() - dateB.getTime();
    });

    const oldest = sortedByDate[0];
    const newest = sortedByDate[sortedByDate.length - 1];

    return `${oldest.date}-${newest.date}`;
  });

  readonly historyTotalBet = computed<string>(() => {
    const wallet = this.wallet();
    const totalBet = wallet === 'cash' ? this.cashTotalBet() : this.bonusTotalBet();

    // Server 回傳的 total_bet 要轉換
    return MoneyText.format(totalBet);
  });

  readonly historyTotalWin = computed<string>(() => {
    const wallet = this.wallet();
    //const totalBet = wallet === 'cash' ? this.cashTotalBet() : this.bonusTotalBet();
    const totalWin = wallet === 'cash' ? this.cashTotalWin() : this.bonusTotalWin();

    // Server 回傳的 total_win 要轉換
    return MoneyText.format(totalWin);
  });

  private parseItemDateTime(date: string, time: string): Date {
    const isoString = `${(date || '').trim()}T${(time || '').trim()}`;
    const parsed = new Date(isoString);
    return isNaN(parsed.getTime()) ? new Date(date) : parsed;
  }

  /** 獲取本地今天的日期範圍 */
  private getTodayRange(): DateRange {
    const range = this.history.getTodayRange();
    return { from: range.from, to: range.to, type: 'today' as DateRangeOption };
  }

  /** 從ap-history-calender 獲取出來的時間是本地時間，需要轉換為 GMT+00 時區的時間*/
  onDateRangeConfirm(localRange: DateRange) {
        // 發送 GA 事件
    const gaName = HistoryDateOptionGAMap[localRange.type];

    if (gaName) {
      this.gaCollector.trackButtonClick({
        buttonName: gaName,
      });
    }


    if (!localRange.from || !localRange.to) {
      return;
    }

    // 轉換為 GMT+00 時區的時間
    const utcRange = this.history.getUtcDateRange(localRange.from, localRange.to);

    this.selectedDateRange.set({ from: utcRange.from, to: utcRange.to, type: localRange.type });
    this.reloadCurrentWallet();
    this.showCalendar.set(false)
  }
}
