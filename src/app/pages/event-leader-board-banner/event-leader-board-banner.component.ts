import { Component, signal, computed, input, OnInit, effect, inject, DestroyRef, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ApUiTabGroupComponent } from '../../components/ap-ui-tab-group/ap-ui-tab-group.component';
import { TabItem } from '../../components/ap-ui-tab-group/ap-ui-tab-group.interface';
import { SelectedTabType } from './event-leader-board-banner.interface';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { LeaderBoardService } from '../../services/leader-board/leader-board.service';
import { genLeadboardCacheKey } from '../../services/leader-board/leader-board.function';
import { eLeaderUserType } from '../../services/leader-board/leader-board.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';
import { LoggerService } from '../../services/logger/logger.service';
import { HistoryReplayService } from '../../services/history-replay/history-replay.service';
import { offlineleaderBoardItems } from './event-leader-board-banner.data';
import { HistoryReplayViewerComponent } from '../history-replay-viewer/history-replay-viewer.component';
import { IReplayItemData } from '../history-replay-viewer/history-replay-viewer.interface';
import { ILeaderBoardItem } from '../../services/leader-board/leader-board.interface';
import { useInGameUIlist } from '../../services/client-session/game-id-list';
import { ApUiPaginationComponent, PaginationConfig } from '../../../ap-components-lib/ap-ui-pagination/ap-pagination.component';
import { ApHistoryPopupReplayComponent } from "../../components/ap-history-popup-replay/ap-history-popup-replay.component";
import { isHistoryReplaySupported } from '../../services/history-replay/history-replay.function';
import { ApWebReplaySessionKey } from '../../../chiikawa/ApWeb/ApWebInterface';
import { MoneyText } from '../../services/player-wallet/player-wallet.function';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { NavigatorShareService } from '../../services/navigator-share/navigator-share.service';
import { ApIconBadgeFirstComponent } from "../../icons/ap-icon-badge-first/ap-icon-badge-first.component";
import { ApIconBadgeSecondComponent } from "../../icons/ap-icon-badge-second/ap-icon-badge-second.component";
import { ApIconBadgeThirdComponent } from "../../icons/ap-icon-badge-third/ap-icon-badge-third.component";

type SortType = 'multiplier' | 'prize' | 'spin';
type SortDirection = 'asc' | 'desc';

export const compareLeaderBoardItems = (
  a: Pick<ILeaderBoardItem, 'multiplier' | 'prizeForSort' | 'spin' | 'time'>,
  b: Pick<ILeaderBoardItem, 'multiplier' | 'prizeForSort' | 'spin' | 'time'>,
  sortType: SortType,
  sortDirection: SortDirection,
): number => {
  const primaryCompare = (left: number, right: number) =>
    sortDirection === 'asc' ? left - right : right - left;
  const desc = (left: number, right: number) => right - left;
  const asc = (left: number, right: number) => left - right;

  let result = 0;

  /** 排序邏輯說明：
   * 1. 主要排序依據為 sortType 指定的欄位（multiplier、prizeForSort 或 spin），排序方向由 sortDirection 決定。
   * 2. 如果主要排序欄位的值相同，則依次比較其他欄位以確保排序的穩定性：
   *  - multiplier 為主要排序時，次要排序依序為 prizeForSort（降序）、spin（升序）、time（降序）。
   * - prizeForSort 為主要排序時，次要排序依序為 multiplier（降序）、spin（升序）、time（降序）。
   * - spin 為主要排序時，次要排序依序為 prizeForSort（降序）、multiplier（降序）、time（降序）。
   */
  if (sortType === 'multiplier') {
    result = primaryCompare(a.multiplier, b.multiplier);
    if (result !== 0) return result;
    result = desc(a.prizeForSort, b.prizeForSort);
    if (result !== 0) return result;
    result = asc(a.spin, b.spin);
    if (result !== 0) return result;
    return desc(a.time, b.time);
  }

  if (sortType === 'prize') {
    result = primaryCompare(a.prizeForSort, b.prizeForSort);
    if (result !== 0) return result;
    result = desc(a.multiplier, b.multiplier);
    if (result !== 0) return result;
    result = asc(a.spin, b.spin);
    if (result !== 0) return result;
    return desc(a.time, b.time);
  }

  result = primaryCompare(a.spin, b.spin);
  if (result !== 0) return result;
  result = desc(a.prizeForSort, b.prizeForSort);
  if (result !== 0) return result;
  result = desc(a.multiplier, b.multiplier);
  if (result !== 0) return result;
  return desc(a.time, b.time);
};

@Component({
  selector: 'event-leader-board-banner',
  imports: [
    CommonModule,
    ApUiTabGroupComponent,
    ApIconComponent,
    ApUiPaginationComponent,
    AppI18nPipe,
    HistoryReplayViewerComponent,
    ApHistoryPopupReplayComponent,
    MoneyTextPipe,
    ApIconBadgeFirstComponent,
    ApIconBadgeSecondComponent,
    ApIconBadgeThirdComponent
],
  templateUrl: './event-leader-board-banner.component.html',
  styleUrl: './event-leader-board-banner.component.css',
})
export class EventLeaderBoardBannerComponent implements OnInit {
  readonly playerToggleTranslateYRem = '0.25rem';
  readonly playerToggleCheckedTranslateXRem = '1.75rem';

  // ✅ 使用 inject() 在類別屬性中注入服務
  private appI18n = inject(AppI18nService);
  private logger = inject(LoggerService);
  private replay = inject(HistoryReplayService);
  private locale = inject(ClientSessionService).locale;
  private session = inject(ClientSessionService);
  private nav = inject(NavigatorShareService)
  protected api = inject(AppInterfaceService);

  @ViewChild(HistoryReplayViewerComponent) replayViewerComponent?: HistoryReplayViewerComponent;
  @ViewChild('listContainer') listContainer?: ElementRef<HTMLElement>;

  spinInfoLabel = input('Spin means the total number of spins played during the event. The more you spin, the higher your chances of winning!');
  showInfoModal = signal<boolean>(false);
  readonly showReplayConfirm = signal<boolean>(false);
  readonly showReplayViewer = computed(() => this.replay.showReplayViewer());
  readonly replayItem = signal<IReplayItemData | null>(null);
  readonly replayGameName = signal<string>('');
  readonly hoveredItemIndex = signal<number | null>(null);

  accountID = computed(() => this.api.loginResult()?.note.uid || '');

  isMobile = computed(() => this.session.isMobile());
  isNarrow = computed(() => this.session.isNarrow());
  isOffline = computed(() => this.session.offline);

  // 使用 LeaderBoardService 的 currentItems Signal
  readonly leaderBoardItems = computed(() =>
    this.session.offline ? offlineleaderBoardItems() : this.leaderBoard.currentItems()
  );

  // ✅ 使用 computed 創建響應式 tabNameMap
  readonly tabNameMap = computed<Record<SelectedTabType, string>>(() => ({
    'CURRENT GAMES': this.appI18n.instant('CurrentGames_LeaderBoard_Tab', 'CURRENT GAMES'),
    'ALL GAMES': this.appI18n.instant('AllGames_LeaderBoard_Tab', 'ALL GAMES'),
  }));
  readonly replayCtaLabel = computed<string>(() =>
    this.appI18n.instant('LeaderBoard_Replay_ButtonText', 'Experience the win!'),
  );

  // ✅ tabs 也改為 computed
  readonly tabs = computed<TabItem[]>(() => [
    { id: 'CURRENT GAMES', label: this.tabNameMap()['CURRENT GAMES'] },
    { id: 'ALL GAMES', label: this.tabNameMap()['ALL GAMES'] },
  ]);

  // 標記是否已初始化
  private hasInitialized = false;

  constructor(
    protected user: PlayerWalletService,
    protected leaderBoard: LeaderBoardService,
  ) {
    // ✅ Constructor 變得超級簡潔！

    // 監聽 isAllPlayers 變化，自動發送請求
    effect(() => {
      // 讀取 signal 以建立依賴
      this.isAllPlayers();
      this.selectedTab();

      // 跳過初始化時的執行（因為 ngOnInit 會處理）
      if (this.hasInitialized) {
        // 切換時重置到第一頁（避免頁碼超出新資料範圍）
        this.currentPage.set(1);
        this.sendLeaderBoardRequest();
      }
    });

    effect(() => {
      const totalPages = Math.max(
        1,
        Math.ceil(this.sortedLeaderBoardItems().length / this.itemsPerPage()),
      );
      const page = this.currentPage();

      if (page < 1) {
        this.currentPage.set(1);
      } else if (page > totalPages) {
        this.currentPage.set(totalPages);
      }
    });
  }

  ngOnInit(): void {
    // 頁面載入時發送第一次請求
    this.sendLeaderBoardRequest();
    this.hasInitialized = true;
  }

  getPlayerToggleTransform(): string {
    const translateX = this.isAllPlayers() ? this.playerToggleCheckedTranslateXRem : '0rem';
    return `translate(${translateX}, ${this.playerToggleTranslateYRem})`;
  }

  // 判斷 multiplier 是否過長以決定字體大小
  isMultiplierLong(multiplier: number): boolean {
    if (multiplier === null || multiplier === undefined || isNaN(multiplier)) {
      return false;
    }

    return Math.abs(Math.floor(multiplier)).toString().length > 6;
  }

  // 判斷 prize 是否過長以決定字體大小
  isPrizeLong(prize: number): boolean {
    if (prize === null || prize === undefined || isNaN(prize)) {
      return false;
    }

    return Math.abs(Math.floor(prize)).toString().length > 6;
  }

  prizeForRef(item: ILeaderBoardItem): string {
    return MoneyText.format(item.prize, { customCurrencySymbol: item.currencySymbol, nonBreakingSpace: true });
  }

  prizeForMobile(item: ILeaderBoardItem): string {
    return MoneyText.format(item.prize, { customCurrencySymbol: item.currencySymbol, nonBreakingSpace: true });
  }

  prizeDefault(item: ILeaderBoardItem): string {
    return MoneyText.format(item.prize, { customCurrencySymbol: item.currencySymbol });
  }

  selectedTab = signal<SelectedTabType>('CURRENT GAMES');
  selectedView = signal<'personal' | 'team'>('personal');
  selectedInfoTab = signal<string>('multiplier');
  isAllPlayers = signal<boolean>(true);


  sortDirection = signal<SortDirection>('desc');
  sortType = signal<SortType>('multiplier');

  currentPage = signal<number>(1);
  itemsPerPage = signal<number>(10);

  /**
   * 共用方法: 根據當前狀態發送排行榜請求
   */
  private sendLeaderBoardRequest(): void {
    // ✅ 根據 selectedView 決定 userType（使用 enum）
    const userType = this.isAllPlayers()
      ? eLeaderUserType.AllUser
      : eLeaderUserType.SingleUser;

    // 根據 selectedTab 決定 gameCode
    const gameCode = this.selectedTab() === 'CURRENT GAMES'
      ? (this.session.gameId || '')  // 當前遊戲代碼
      : '';                          // ALL GAMES 使用空字串

    // 取得當前語系
    const language = this.session.language;

    // 產生 tag name（使用 genLeadboardCacheKey）
    const tag = genLeadboardCacheKey(userType, gameCode);

    // 發送請求
    this.leaderBoard.sendLeaderBoardList(tag, userType, gameCode, language);
  }

  /** 根據 second timestamp 取得日期字串 (不含時間) */
  getDateString(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(this.locale);
  }

  onPageChanged(page: number): void {
    this.currentPage.set(page);
    setTimeout(() => {
      this.listContainer?.nativeElement.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }

  private resetToFirstPage(): void {
    this.currentPage.set(1);
    setTimeout(() => {
      this.listContainer?.nativeElement.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }

  onToggleClick(): void {
    const newState = !this.isAllPlayers();
    this.isAllPlayers.set(newState);
  }

  selectTab(buttonType: string): void {
    this.selectedTab.set(buttonType as SelectedTabType);

  }

  onTabChange(tabId: string): void {
    this.selectedInfoTab.set(tabId);
  }

  onMultiplierSortClick() {
    if (this.sortType() === 'multiplier') {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortType.set('multiplier');
      this.sortDirection.set('desc');
    }
    this.resetToFirstPage();
  }

  onPrizeSortClick() {
    if (this.sortType() === 'prize') {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortType.set('prize');
      this.sortDirection.set('desc');
    }
    this.resetToFirstPage();
  }

  onSpinSortClick() {
    if (this.sortType() === 'spin') {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortType.set('spin');
      this.sortDirection.set('asc'); // smaller spin = higher rank
    }
    this.resetToFirstPage();
  }

  getMultiplierSortIcon(): string {
    if (this.sortType() !== 'multiplier') return 'bar-3';
    return this.sortDirection() === 'asc' ? 'bars-arrow-up default' : 'bars-arrow-down default';
  }

  getPrizeSortIcon(): string {
    if (this.sortType() !== 'prize') return 'bar-3';
    return this.sortDirection() === 'asc' ? 'bars-arrow-up default' : 'bars-arrow-down default';
  }

  getSpinSortIcon(): string {
    if (this.sortType() !== 'spin') return 'bar-3';
    return this.sortDirection() === 'asc' ? 'bars-arrow-up default' : 'bars-arrow-down default';
  }



  readonly sortedLeaderBoardItems = computed(() => {
    const items = [...this.leaderBoardItems()];
    const direction = this.sortDirection();
    const sortType = this.sortType();
    const ret = items.sort((a, b) => compareLeaderBoardItems(a, b, sortType, direction));
    // 補上ret的sortedIndex
    ret.forEach((item, index) => {
      // 'multiplier' ,'prize' 是越大越前面
      if (sortType === 'multiplier' || sortType === 'prize') {
        item.sortedIndex = direction === 'desc' ? index + 1 : ret.length - index;
      } else {// 'spin' 是越小越前面
        item.sortedIndex = direction === 'asc' ? index + 1 : ret.length - index;
      }
    });
    return ret;
  });

  readonly paginationConfig = computed<PaginationConfig>(() => {
    const totalItems = this.sortedLeaderBoardItems().length;
    const totalPages = Math.max(1, Math.ceil(totalItems / this.itemsPerPage()));

    return {
      currentPage: this.currentPage(),
      totalPages: totalPages,
      showPages: 1,
    };
  });

  readonly paginatedItems = computed(() => {
    const allItems = this.sortedLeaderBoardItems();
    const totalPages = Math.max(1, Math.ceil(allItems.length / this.itemsPerPage()));
    const page = Math.min(this.currentPage(), totalPages);
    const perPage = this.itemsPerPage();

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return allItems.slice(startIndex, endIndex);
  });

  /** Item with the largest prize value; its text anchors the prize column width so all rows fit */
  readonly referencePrizeItem = computed(() => {
    const items = this.sortedLeaderBoardItems();
    if (items.length === 0) return null;
    return items.reduce((max, item) => item.prize > max.prize ? item : max, items[0]);
  });

  /**
   * 检查指定的游戏 ID 是否支援 Replay
   * @param gameId 游戏 ID
   * @returns true 表示支援 Replay，false 表示不支援
   */
  checkGameReplaySupported(gameId: string): boolean {
    return isHistoryReplaySupported(gameId);
  }

  canReplay(item: ILeaderBoardItem): boolean {
    return (
      (this.isOffline() || (this.api.loginResult()?.note?.leader_board ?? 0) >= 2) &&
      this.checkGameReplaySupported(item.gameId)
    );
  }

  openInfoModal(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.showInfoModal.set(!this.showInfoModal());
  }

  closeshowInfoModal() {
    this.showInfoModal.set(false);
  }

  /**
   * 處理 Replay 確認請求
   */
  onReplayConfirm() {
    const item = this.replayItem();
    if (!item) {
      this.logger.error('Replay item is null');
      return;
    }

    // 關閉確認對話框
    this.showReplayConfirm.set(false);

    const platformName = item.platformCode || 'default';
    let ticketNo = item.ticketNo;
    let gameId = item.gameId;

    const userType = this.isAllPlayers()
      ? eLeaderUserType.AllUser
      : eLeaderUserType.SingleUser;


    if (!ticketNo) {
      this.logger.error('Ticket number not found in item:', item);
      return;
    }

    try {
      // 根據 userType 決定 accountID：AllUser 時為空字串，SingleUser 時使用當前帳號
      const targetaccountID = userType === eLeaderUserType.AllUser
        ? ''
        : this.accountID();

      // 訂閱 ticket$ 事件
      const subscription = this.replay.ticket$.subscribe((response) => {
        // 先退訂
        subscription.unsubscribe();
        
        this.logger.leaderboardLog('Received ShortURL from subscription:', response);
        
        // 處理收到的 URL
        if (response.HistoryDetailData) {
          // 使用 AppI18nService 獲取遊戲名稱
          const gameName = this.appI18n.instant(gameId, gameId);
          this.replayGameName.set(gameName);

          // 舊遊戲
          const isOldGame = useInGameUIlist.includes(gameId || '');

          // 呼叫子組件載入 URL
          let replayUrl: string;
          if (this.session.remoteHost) {
            const replayResult = sessionStorage.getItem(ApWebReplaySessionKey) ?? '';
            this.replay.setPendingPostSessionData({ [ApWebReplaySessionKey]: replayResult });
            replayUrl = `${this.session.remoteHost}?replayurl=0`;
          } else {
            replayUrl = `/${gameId}/index.html?replayurl=0`;
          }
          this.replay.openReplayViewer(replayUrl, isOldGame);
        }
      });
        
      const isCopyLink = userType === eLeaderUserType.AllUser ? false : true; // 只有 SingleUser 會有複製連結的需求.
      const gameidforserver = userType === eLeaderUserType.AllUser ? "" : gameId; // 如果是 AllUser，則不帶 gameId 參數，讓後端決定使用哪個遊戲的 Replay.  
      const mulforserver = userType === eLeaderUserType.AllUser ? null : (item.multiplierFromServer || 0); // 如果是 AllUser，則 multiplier 從 server 取 0，讓後端決定使用哪個遊戲的 Replay.
      
      // 發送請求
      this.replay.getTicketDetail(
        ticketNo,
        userType,
        gameidforserver,
        mulforserver,
      );

    } catch (error) {
      this.logger.error('Failed to generate replay URL:', error);
    }
  }

  /**
   * 處理複製 Replay 連結請求
   */
  async onCopyLinkRequest(): Promise<void> {
    this.logger.leaderboardLog('Copy link request received');

    const item = this.replayItem();
    if (!item) {
      this.logger.error('No replay item selected');
      return;
    }

    try {
      // 取得 ticket number
      const ticketNo = item.ticketNo || '';

      // 訂閱 shortUrl$ 事件
      const subscription = this.replay.shortUrl$.subscribe((response) => {
        // 先退訂
        subscription.unsubscribe();
        
        this.logger.leaderboardLog('Received ShortURL from subscription for copy:', response);

        // 處理收到的 URL
        if (response.url) {
          // 複製到剪貼板
          this.nav.copyToClipboard(response.url)
            .then(() => {
              this.logger.leaderboardLog('Replay URL copied to clipboard:', response.url);
              this.replayViewerComponent?.showCopyLinkToast();
            })
            .catch(err => {
              this.logger.error('Failed to copy replay link:', err);
            });
        }
      });

      const usertype = this.isAllPlayers() ? eLeaderUserType.AllUser : eLeaderUserType.SingleUser;
      const gameid = this.replayItem()?.gameId || '';
      const multiplierFromServer = this.replayItem()?.multiplierFromServer || 0;
      // 發送請求
      this.replay.getShortUrl(ticketNo, usertype, gameid, multiplierFromServer);

    } catch (error) {
      this.logger.error('Failed to copy link:', error);
    }
  }

  /**
   * 點擊 Replay 按鈕
   * @param item 排行榜項目
   */
  onReplayClick(item: any): void {
    this.replayItem.set(item);
    this.showReplayConfirm.set(true);
  }

  setHoveredItemIndex(index: number | null): void {
    this.hoveredItemIndex.set(index);
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
    this.showReplayConfirm.set(false);
    this.replayItem.set(null);
    this.replay.closeReplayViewer();
  }

}
