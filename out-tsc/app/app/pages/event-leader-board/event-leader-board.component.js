import { Component, signal, computed, input, effect, inject, DestroyRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ApUiTabGroupComponent } from '../../components/ap-ui-tab-group/ap-ui-tab-group.component';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApUiPaginationComponent } from '../../components/ap-ui-pagination/ap-pagination.component';
import { genLeadboardCacheKey } from '../../services/leader-board/leader-board.function';
import { eLeaderUserType } from '../../services/leader-board/leader-board.interface';
import { TruncatePipe } from '../../library/pipe/truncate.pipe';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { AppI18nPipe } from '../../library/pipe/app-i18n.pipe';
import { CommonFunctionService } from '../../services/common-function/common-function.service';
import { LoggerService } from '../../services/logger/logger.service';
import { HistoryReplayService } from '../../services/history-replay/history-replay.service';
import { offlineleaderBoardItems } from './event-leader-board.data';
import { HistoryReplayViewerComponent } from '../history-replay-viewer/history-replay-viewer.component';
import { useInGameUIlist } from '../../services/login-ctrl/game-id-list';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-profile/user-profile.service";
import * as i2 from "../../services/leader-board/leader-board.service";
import * as i3 from "../../services/login-ctrl/login-ctrl.service";
import * as i4 from "@angular/common";
function EventLeaderBoardComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 36);
    i0.ɵɵelement(2, "ap-icon", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 38);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "appI18n");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 1, "NoData_Text", "No rankings available yet."), " ");
} }
function EventLeaderBoardComponent_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵlistener("click", function EventLeaderBoardComponent_Conditional_48_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "div", 40);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "appI18n");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 1, "Spin_Info", "Spin means the total number of spins played during the event. The more you spin, the higher your chances of winning!"), " ");
} }
function EventLeaderBoardComponent_For_54_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 43);
} }
function EventLeaderBoardComponent_For_54_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 44);
} }
function EventLeaderBoardComponent_For_54_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-icon", 45);
} }
function EventLeaderBoardComponent_For_54_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", item_r2.sortedIndex, " ");
} }
function EventLeaderBoardComponent_For_54_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 58);
    i0.ɵɵlistener("click", function EventLeaderBoardComponent_For_54_Conditional_31_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const item_r2 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onReplayClick(item_r2)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("size", "small")("icon", "replay")("accentColor", "zinc");
} }
function EventLeaderBoardComponent_For_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 41)(2, "div", 42);
    i0.ɵɵconditionalCreate(3, EventLeaderBoardComponent_For_54_Conditional_3_Template, 1, 0, "ap-icon", 43)(4, EventLeaderBoardComponent_For_54_Conditional_4_Template, 1, 0, "ap-icon", 44)(5, EventLeaderBoardComponent_For_54_Conditional_5_Template, 1, 0, "ap-icon", 45)(6, EventLeaderBoardComponent_For_54_Conditional_6_Template, 1, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 46)(8, "div", 47)(9, "div", 48);
    i0.ɵɵelement(10, "img", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 50)(12, "div", 51);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 52);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "date");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(18, "td", 53);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "truncate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td", 54)(22, "div", 55)(23, "span");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span");
    i0.ɵɵtext(26);
    i0.ɵɵpipe(27, "number");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "td", 53);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "td", 56);
    i0.ɵɵconditionalCreate(31, EventLeaderBoardComponent_For_54_Conditional_31_Template, 1, 3, "ap-button", 57);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_20_0;
    const item_r2 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(" relative animate-fade-down animate-duration-300 hover:bg-zinc-600/50 border-b border-zinc-600 " + ($index_r5 % 2 === 0 ? " bg-zinc-800" : " bg-zinc-900"));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(item_r2.sortedIndex === 1 ? 3 : item_r2.sortedIndex === 2 ? 4 : item_r2.sortedIndex === 3 ? 5 : 6);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("src", item_r2.image, i0.ɵɵsanitizeUrl)("alt", item_r2.game + " banner");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r2.game.length > 18 ? i0.ɵɵpipeBind3(14, 12, item_r2.game, 0, 15) + "..." : item_r2.game, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(17, 16, item_r2.time * 1000, "yyyy-MM-dd"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 19, item_r2.multiplier), "x ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r2.currencySymbol);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(27, 21, item_r2.prize, "1.2-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r2.spin, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r3.loginCtrl.offline || (((tmp_20_0 = ctx_r3.api.loginResult()) == null ? null : tmp_20_0.note == null ? null : tmp_20_0.note.leader_board) ?? 0) >= 2 ? 31 : -1);
} }
export const compareLeaderBoardItems = (a, b, sortType, sortDirection) => {
    const primaryCompare = (left, right) => sortDirection === 'asc' ? left - right : right - left;
    const desc = (left, right) => right - left;
    const asc = (left, right) => left - right;
    let result = 0;
    if (sortType === 'multiplier') {
        result = primaryCompare(a.multiplier, b.multiplier);
        if (result !== 0)
            return result;
        result = desc(a.prizeForSort, b.prizeForSort);
        if (result !== 0)
            return result;
        result = asc(a.spin, b.spin);
        if (result !== 0)
            return result;
        return desc(a.time, b.time);
    }
    if (sortType === 'prize') {
        result = primaryCompare(a.prizeForSort, b.prizeForSort);
        if (result !== 0)
            return result;
        result = desc(a.multiplier, b.multiplier);
        if (result !== 0)
            return result;
        result = asc(a.spin, b.spin);
        if (result !== 0)
            return result;
        return desc(a.time, b.time);
    }
    result = primaryCompare(a.spin, b.spin);
    if (result !== 0)
        return result;
    result = desc(a.prizeForSort, b.prizeForSort);
    if (result !== 0)
        return result;
    result = desc(a.multiplier, b.multiplier);
    if (result !== 0)
        return result;
    return desc(a.time, b.time);
};
export class EventLeaderBoardComponent {
    user;
    leaderBoard;
    loginCtrl;
    // ✅ 使用 inject() 在類別屬性中注入服務
    appI18n = inject(AppI18nService);
    commonFunc = inject(CommonFunctionService);
    logger = inject(LoggerService);
    historyReplayService = inject(HistoryReplayService);
    destroyRef = inject(DestroyRef);
    login = inject(LoginCtrlService);
    api = inject(AppInterfaceService);
    replayViewerComponent;
    spinInfoLabel = input('Spin means the total number of spins played during the event. The more you spin, the higher your chances of winning!');
    showInfoModal = signal(false);
    isReplay = signal(false);
    isReplayPanel = signal(false);
    replayItem = signal(null);
    replayGameName = signal('');
    popupLabel = computed(() => this.appI18n.instant('replay_message_title', 'MESSAGE'));
    popupHintReplay = computed(() => this.appI18n.instant('replay_history_ticket_info', 'Spin History Replay.For display purposes only. This will not impact your balance or gameplay.'));
    cancelLabel = computed(() => this.appI18n.instant('replay_cancel', 'CANCEL'));
    confirmLabel = computed(() => this.appI18n.instant('replay_confirm', 'CONFIRM'));
    accountID = computed(() => this.api.loginResult()?.note.uid || '');
    // 使用 LeaderBoardService 的 currentItems Signal
    leaderBoardItems = computed(() => this.loginCtrl.offline ? offlineleaderBoardItems() : this.leaderBoard.currentItems());
    // ✅ 使用 computed 創建響應式 tabNameMap
    tabNameMap = computed(() => ({
        'CURRENT GAMES': this.appI18n.instant('CurrentGames_LeaderBoard_Tab', 'CURRENT GAMES'),
        'ALL GAMES': this.appI18n.instant('AllGames_LeaderBoard_Tab', 'ALL GAMES'),
    }));
    // ✅ tabs 也改為 computed
    tabs = computed(() => [
        { id: 'CURRENT GAMES', label: this.tabNameMap()['CURRENT GAMES'] },
        { id: 'ALL GAMES', label: this.tabNameMap()['ALL GAMES'] },
    ]);
    // 標記是否已初始化
    hasInitialized = false;
    constructor(user, leaderBoard, loginCtrl) {
        // ✅ Constructor 變得超級簡潔！
        this.user = user;
        this.leaderBoard = leaderBoard;
        this.loginCtrl = loginCtrl;
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
            const totalPages = Math.max(1, Math.ceil(this.sortedLeaderBoardItems().length / this.itemsPerPage()));
            const page = this.currentPage();
            if (page < 1) {
                this.currentPage.set(1);
            }
            else if (page > totalPages) {
                this.currentPage.set(totalPages);
            }
        });
    }
    ngOnInit() {
        // 頁面載入時發送第一次請求
        this.sendLeaderBoardRequest();
        this.hasInitialized = true;
    }
    shortenGameName(gameName = '', maxLength = 15) {
        return gameName.length > maxLength
            ? gameName.substring(0, maxLength) + '...'
            : gameName;
    }
    selectedTab = signal('CURRENT GAMES');
    selectedView = signal('personal');
    selectedInfoTab = signal('multiplier');
    isAllPlayers = signal(true);
    sortDirection = signal('desc');
    sortType = signal('multiplier');
    currentPage = signal(1);
    itemsPerPage = signal(10);
    /**
     * 共用方法: 根據當前狀態發送排行榜請求
     */
    sendLeaderBoardRequest() {
        // ✅ 根據 selectedView 決定 userType（使用 enum）
        const userType = this.isAllPlayers()
            ? eLeaderUserType.AllUser
            : eLeaderUserType.SingleUser;
        // 根據 selectedTab 決定 gameCode
        const gameCode = this.selectedTab() === 'CURRENT GAMES'
            ? (this.loginCtrl.gameId || '') // 當前遊戲代碼
            : ''; // ALL GAMES 使用空字串
        // 取得當前語系
        const language = this.loginCtrl.language;
        // 產生 tag name（使用 genLeadboardCacheKey）
        const tag = genLeadboardCacheKey(userType, gameCode);
        // 發送請求
        this.leaderBoard.sendLeaderBoardList(tag, userType, gameCode, language);
    }
    onToggleClick() {
        const newState = !this.isAllPlayers();
        this.isAllPlayers.set(newState);
    }
    selectTab(buttonType) {
        this.selectedTab.set(buttonType);
    }
    // onViewChange(view: 'personal' | 'team'): void {
    //   this.selectedView.set(view);
    //   this.sendLeaderBoardRequest();
    // }
    onTabChange(tabId) {
        this.selectedInfoTab.set(tabId);
    }
    onMultiplierSortClick() {
        if (this.sortType() === 'multiplier') {
            this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
        }
        else {
            this.sortType.set('multiplier');
            this.sortDirection.set('desc');
        }
        this.currentPage.set(1);
    }
    onPrizeSortClick() {
        if (this.sortType() === 'prize') {
            this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
        }
        else {
            this.sortType.set('prize');
            this.sortDirection.set('desc');
        }
        this.currentPage.set(1);
    }
    onSpinSortClick() {
        if (this.sortType() === 'spin') {
            this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
        }
        else {
            this.sortType.set('spin');
            this.sortDirection.set('asc'); // smaller spin = higher rank
        }
        this.currentPage.set(1);
    }
    getMultiplierSortIcon() {
        return this.sortType() === 'multiplier' && this.sortDirection() === 'asc'
            ? 'bars-arrow-up default'
            : 'bars-arrow-down default';
    }
    getPrizeSortIcon() {
        return this.sortType() === 'prize' && this.sortDirection() === 'asc'
            ? 'bars-arrow-up default'
            : 'bars-arrow-down default';
    }
    getSpinSortIcon() {
        return this.sortType() === 'spin' && this.sortDirection() === 'asc'
            ? 'bars-arrow-up default'
            : 'bars-arrow-down default';
    }
    sortedLeaderBoardItems = computed(() => {
        const items = [...this.leaderBoardItems()];
        const direction = this.sortDirection();
        const sortType = this.sortType();
        const ret = items.sort((a, b) => compareLeaderBoardItems(a, b, sortType, direction));
        // 補上ret的sortedIndex
        ret.forEach((item, index) => {
            // 'multiplier' ,'prize' 是越大越前面
            if (sortType === 'multiplier' || sortType === 'prize') {
                item.sortedIndex = direction === 'desc' ? index + 1 : ret.length - index;
            }
            else { // 'spin' 是越小越前面
                item.sortedIndex = direction === 'asc' ? index + 1 : ret.length - index;
            }
        });
        return ret;
    });
    paginationConfig = computed(() => {
        const totalItems = this.sortedLeaderBoardItems().length;
        const totalPages = Math.max(1, Math.ceil(totalItems / this.itemsPerPage()));
        return {
            currentPage: this.currentPage(),
            totalPages: totalPages,
            showPages: 1,
        };
    });
    paginatedItems = computed(() => {
        const allItems = this.sortedLeaderBoardItems();
        const totalPages = Math.max(1, Math.ceil(allItems.length / this.itemsPerPage()));
        const page = Math.min(this.currentPage(), totalPages);
        const perPage = this.itemsPerPage();
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        return allItems.slice(startIndex, endIndex);
    });
    openInfoModal(event) {
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
    async onReplayConfirmRequest() {
        const item = this.replayItem();
        if (!item) {
            this.logger.error('Replay item is null');
            return;
        }
        // 關閉確認對話框
        this.isReplay.set(false);
        const platformName = item.platformCode || 'default';
        const ticketNo = item.ticketNo;
        const gameId = item.gameId;
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
            // 查詢並生成 Replay URL
            const tickUrl = await this.historyReplayService.getEncryptedLeaderboardReplayAddress(gameId, ticketNo, platformName, item.multiplierFromServer, userType, targetaccountID);
            if (!tickUrl) {
                this.logger.error('Failed to generate encrypted replay address');
                return;
            }
            let replayUrl = tickUrl;
            this.logger.leaderboardLog('Generated replay URL:', replayUrl);
            // 使用 AppI18nService 獲取遊戲名稱
            const gameName = this.appI18n.instant(gameId, gameId);
            this.replayGameName.set(gameName);
            const isOldGame = useInGameUIlist.includes(gameId || '');
            // 呼叫子組件載入 URL
            if (this.replayViewerComponent) {
                this.isReplayPanel.set(true); // 顯示 replay panel
                this.replayViewerComponent.loadReplayUrl(replayUrl, isOldGame);
            }
            else {
                this.logger.error('ReplayViewerComponent not found');
            }
        }
        catch (error) {
            this.logger.error('Failed to generate replay URL:', error);
        }
    }
    /**
     * 處理複製 Replay 連結請求
     */
    async onCopyLinkRequest() {
        this.logger.leaderboardLog('Copy link request received');
        //改成呼叫 API.
        const userType = this.isAllPlayers()
            ? eLeaderUserType.AllUser
            : eLeaderUserType.SingleUser;
        // 根據 userType 決定 accountID：AllUser 時為空字串，SingleUser 時使用當前帳號
        const targetaccountID = userType === eLeaderUserType.AllUser
            ? ''
            : this.accountID();
        const shareUrl = await this.historyReplayService.GetShareLeaderboardReplayAddress(this.replayItem()?.gameId || '', this.replayItem()?.platformCode || '', this.replayItem()?.ticketNo || '', this.replayItem()?.multiplierFromServer || 0, userType || '', targetaccountID || '');
        this.logger.leaderboardLog('Generated data URL:', shareUrl);
        if (shareUrl) {
            this.logger.leaderboardLog('Generated share URL:', shareUrl);
            // 複製到剪貼板
            navigator.clipboard.writeText(shareUrl)
                .then(() => {
                this.logger.leaderboardLog('Replay URL copied to clipboard:', shareUrl);
                this.replayViewerComponent?.showCopyLinkToast();
            })
                .catch(err => {
                this.logger.error('Failed to copy replay link:', err);
            });
        }
        else {
            this.logger.error('ReplayViewerComponent shareUrl not found');
        }
        // 關閉 Replay 視窗
        // if (this.replayViewerComponent) {
        //   this.replayViewerComponent.closeReplayIframe();
        // }
        // // 從子組件獲取 Replay URL
        // if (this.replayViewerComponent) {
        //   const replayUrl = this.replayViewerComponent.getReplayUrl();
        //   if (replayUrl) {
        //     // 複製到剪貼板
        //     navigator.clipboard.writeText(replayUrl)
        //       .then(() => {
        //         this.logger.leaderboardLog('Replay URL copied to clipboard:', replayUrl);
        //       })
        //       .catch(err => {
        //         this.logger.error('Failed to copy replay link:', err);
        //       });
        //     // 關閉 Replay 視窗
        //     if (this.replayViewerComponent) {
        //       this.replayViewerComponent.closeReplayIframe();
        //     }
        //   }
        // } else {
        //   this.logger.error('ReplayViewerComponent not found');
        // }
    }
    /**
     * 點擊 Replay 按鈕
     * @param item 排行榜項目
     */
    onReplayClick(item) {
        this.replayItem.set(item);
        this.isReplay.set(true);
    }
    /**
     * 取消 Replay
     */
    onReplayCancel() {
        this.isReplay.set(false);
        this.replayItem.set(null);
    }
    /**
     * 關閉 Replay
     */
    onReplayClose() {
        this.isReplay.set(false);
        this.replayItem.set(null);
    }
    static ɵfac = function EventLeaderBoardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventLeaderBoardComponent)(i0.ɵɵdirectiveInject(i1.UserProfileService), i0.ɵɵdirectiveInject(i2.LeaderBoardService), i0.ɵɵdirectiveInject(i3.LoginCtrlService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventLeaderBoardComponent, selectors: [["event-leader-board"]], viewQuery: function EventLeaderBoardComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(HistoryReplayViewerComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.replayViewerComponent = _t.first);
        } }, inputs: { spinInfoLabel: [1, "spinInfoLabel"] }, decls: 58, vars: 63, consts: [[1, "relative", "flex", "flex-col", "bg-zinc-900", "justify-center", "h-full", 3, "click"], [1, "sticky", "z-sticky", "top-0", "bg-zinc-900", "px-4", "pt-6", "pb-4", "shrink-0"], [3, "tabChange", "tabs", "selectedTab"], [1, "flex", "flex-col", "md:flex-row", "items-center", "justify-center", "gap-8", "md:gap-12", "w-full", "md:mt-4"], [1, "flex", "justify-center", "w-full", "md:w-auto", "mt-2", "mb-2"], [1, "flex", "items-center", "gap-3", "font-bold", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], [1, "transition-colors", "cursor-pointer"], [1, "relative", "h-7", "w-14", "rounded-full", "transition-colors", "duration-200", "flex-shrink-0", "bg-yellow-500"], [1, "absolute", "left-1", "h-5", "w-5", "translate-y-1", "rounded-full", "border", "border-amber-500", "bg-white", "shadow", "transition-all", "duration-200"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "text-zinc-400", "-mt-20", "pointer-events-none"], [1, "relative", "bg-zinc-900", "gap-1", "px-1", "md:px-20", "overflow-y-scroll", "sm:mt-6", "mt-6", "h-full"], [1, "w-full", "text-zinc-100", "text-xs", "sm:text-md"], [1, "sticky", "z-dropdown", "-top-1", "bg-zinc-900"], [1, "text-md", "md:text-sm", "border-b", "border-zinc-600", "text-yellow-300", "bg-yellow-300/10", "uppercase"], [1, "text-center", "w-[10%]", "min-w-[1rem]", "whitespace-nowrap", "px-2"], [1, "inline-block", "min-w-[1rem]", "whitespace-nowrap"], [1, "text-left", "px-2", "w-40", "min-w-40", "max-w-40"], [1, "w-[20%]"], [1, "w-full", "min-h-8", "flex", "items-center", "gap-1", "hover:text-yellow-100", "cursor-pointer", "transition-colors", "justify-center", "uppercase", 3, "click"], [1, "flex", "items-center", "gap-1"], [1, "sm:size-5", "size-4", 3, "name"], [1, "w-[15%]"], [1, "[20%]"], [1, "w-full", "min-h-8", "flex", "items-center", "justify-center", "uppercase", 3, "click"], [1, "flex", "items-center"], [1, "flex", "hover:text-yellow-100", "cursor-pointer", "transition-colors", "items-center"], [1, "uppercase"], [1, "sm:size-5", "size-4", "ml-1", 3, "name"], [1, "relative", "inline-flex", "items-center"], [1, "sm:size-5", "size-4", "text-zinc-400", "hover:text-white", "cursor-pointer", "transition-colors", "mr-1", 3, "click", "name"], [1, "absolute", "left-1/2", "top-full", "z-popover", "mt-2", "w-28", "md:40", "sm:w-48", "max-w-[90vw]", "-translate-x-1/2", "rounded-lg", "border", "border-zinc-500", "bg-zinc-900", "p-4", "shadow-md", "animate-duration-300", "transition-all"], [1, "w-[10%]"], [3, "class"], [1, "relative", "shrink-0", "py-2"], [3, "pageChanged", "variant", "config"], [3, "confirmReplayRequest", "cancelReplay", "copyLinkRequest", "close", "showConfirmDialog", "popupLabel", "popupHintReplay", "cancelLabel", "confirmLabel", "isReplayPanel", "gameName"], [1, "flex", "flex-col", "items-center"], ["name", "ranking default", 1, "size-64"], [1, "text-xl"], [1, "absolute", "left-1/2", "top-full", "z-popover", "mt-2", "w-28", "md:40", "sm:w-48", "max-w-[90vw]", "-translate-x-1/2", "rounded-lg", "border", "border-zinc-500", "bg-zinc-900", "p-4", "shadow-md", "animate-duration-300", "transition-all", 3, "click"], [1, "text-md", "font-medium", "text-left", "text-zinc-300"], [1, "text-center", "text-lg", "font-medium", "text-white"], [1, "flex", "items-center", "justify-center"], ["name", "first", 1, "size-8"], ["name", "second", 1, "size-8"], ["name", "third", 1, "size-8"], [1, "w-40", "min-w-40", "max-w-40", "py-2", "text-left", "font-medium"], [1, "px-2", "flex", "flex-wrap", "relative", "items-center", "gap-1", "sm:gap-2"], [1, "w-10", "h-6", "sm:w-14", "sm:h-8", "rounded", "shrink-0", "overflow-hidden", "border", "border-yellow-200"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "flex", "flex-col"], [1, "text-yellow-200", "font-semibold", "text-sm", "sm:text-md"], [1, "text-xs", "text-left", "text-zinc-400"], [1, "text-center", "font-medium", "text-sm", "sm:text-md", "break-all", "align-center", "pb-1"], [1, "text-center", "font-medium", "text-sm", "sm:text-md", "align-center"], [1, "flex", "items-center", "justify-center", "gap-1", "whitespace-nowrap"], [1, "text-center"], [3, "size", "icon", "accentColor"], [3, "click", "size", "icon", "accentColor"]], template: function EventLeaderBoardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function EventLeaderBoardComponent_Template_div_click_0_listener() { return ctx.closeshowInfoModal(); });
            i0.ɵɵelementStart(1, "div", 1)(2, "ap-ui-tab-group", 2);
            i0.ɵɵlistener("tabChange", function EventLeaderBoardComponent_Template_ap_ui_tab_group_tabChange_2_listener($event) { return ctx.selectTab($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "button", 5);
            i0.ɵɵlistener("click", function EventLeaderBoardComponent_Template_button_click_5_listener() { return ctx.onToggleClick(); });
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "appI18n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "span", 7);
            i0.ɵɵelement(10, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span", 6);
            i0.ɵɵtext(12);
            i0.ɵɵpipe(13, "appI18n");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(14, EventLeaderBoardComponent_Conditional_14_Template, 6, 4, "div", 9);
            i0.ɵɵelementStart(15, "div", 10)(16, "table", 11)(17, "thead", 12)(18, "tr", 13)(19, "th", 14)(20, "span", 15);
            i0.ɵɵtext(21);
            i0.ɵɵpipe(22, "appI18n");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "th", 16);
            i0.ɵɵtext(24);
            i0.ɵɵpipe(25, "appI18n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "th", 17)(27, "button", 18);
            i0.ɵɵlistener("click", function EventLeaderBoardComponent_Template_button_click_27_listener() { return ctx.onMultiplierSortClick(); });
            i0.ɵɵelementStart(28, "span", 19);
            i0.ɵɵtext(29);
            i0.ɵɵpipe(30, "appI18n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(31, "ap-icon", 20);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "th", 21)(33, "button", 18);
            i0.ɵɵlistener("click", function EventLeaderBoardComponent_Template_button_click_33_listener() { return ctx.onPrizeSortClick(); });
            i0.ɵɵelementStart(34, "span", 19);
            i0.ɵɵtext(35);
            i0.ɵɵpipe(36, "appI18n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(37, "ap-icon", 20);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "th", 22)(39, "button", 23);
            i0.ɵɵlistener("click", function EventLeaderBoardComponent_Template_button_click_39_listener() { return ctx.onSpinSortClick(); });
            i0.ɵɵelementStart(40, "span", 24)(41, "div", 25)(42, "span", 26);
            i0.ɵɵtext(43);
            i0.ɵɵpipe(44, "appI18n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(45, "ap-icon", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "span", 28)(47, "ap-icon", 29);
            i0.ɵɵlistener("click", function EventLeaderBoardComponent_Template_ap_icon_click_47_listener($event) { return ctx.openInfoModal($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(48, EventLeaderBoardComponent_Conditional_48_Template, 4, 4, "div", 30);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(49, "th", 31);
            i0.ɵɵtext(50);
            i0.ɵɵpipe(51, "appI18n");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(52, "tbody");
            i0.ɵɵrepeaterCreate(53, EventLeaderBoardComponent_For_54_Template, 32, 24, "tr", 32, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(55, "div", 33)(56, "ap-ui-pagination", 34);
            i0.ɵɵlistener("pageChanged", function EventLeaderBoardComponent_Template_ap_ui_pagination_pageChanged_56_listener($event) { return ctx.currentPage.set($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "history-replay-viewer", 35);
            i0.ɵɵlistener("confirmReplayRequest", function EventLeaderBoardComponent_Template_history_replay_viewer_confirmReplayRequest_57_listener() { return ctx.onReplayConfirmRequest(); })("cancelReplay", function EventLeaderBoardComponent_Template_history_replay_viewer_cancelReplay_57_listener() { return ctx.onReplayCancel(); })("copyLinkRequest", function EventLeaderBoardComponent_Template_history_replay_viewer_copyLinkRequest_57_listener() { return ctx.onCopyLinkRequest(); })("close", function EventLeaderBoardComponent_Template_history_replay_viewer_close_57_listener() { return ctx.onReplayClose(); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("tabs", ctx.tabs())("selectedTab", ctx.selectedTab());
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("text-yellow-300", !ctx.isAllPlayers())("text-zinc-500", ctx.isAllPlayers());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(8, 39, "Personal_Toggle", "PERSONAL"));
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("translate-x-7", ctx.isAllPlayers());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("text-yellow-300", ctx.isAllPlayers())("text-zinc-500", !ctx.isAllPlayers());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(13, 42, "AllPlayers_Toggle", "ALL PLAYERS"));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.leaderBoardItems().length === 0 ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("hidden", ctx.leaderBoardItems().length === 0);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(22, 45, "Ranking_ColumnText", "#"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(25, 48, "GameName_ColumnText", "GAME"), " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(30, 51, "Multiplier_ColumnText", "MULT."));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", ctx.getMultiplierSortIcon());
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(36, 54, "Prize_ColumnText", "PRIZE"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", ctx.getPrizeSortIcon());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(44, 57, "Spin_ColumnText", "SPIN"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", ctx.getSpinSortIcon());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", "exclamation-circle");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showInfoModal() ? 48 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(51, 60, "Replay_ColumnText", "REPLAY"));
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.paginatedItems());
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("hidden", ctx.leaderBoardItems().length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("variant", "quick")("config", ctx.paginationConfig());
            i0.ɵɵadvance();
            i0.ɵɵproperty("showConfirmDialog", ctx.isReplay())("popupLabel", ctx.popupLabel())("popupHintReplay", ctx.popupHintReplay())("cancelLabel", ctx.cancelLabel())("confirmLabel", ctx.confirmLabel())("isReplayPanel", ctx.isReplayPanel())("gameName", ctx.replayGameName());
        } }, dependencies: [CommonModule, i4.SlicePipe, i4.DecimalPipe, i4.DatePipe, ApUiTabGroupComponent,
            ApButtonComponent,
            ApIconComponent,
            ApUiPaginationComponent,
            TruncatePipe,
            AppI18nPipe,
            HistoryReplayViewerComponent], styles: ["thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(253, 224, 71, 0.1), rgba(253, 224, 71, 0.1)) #18181b;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventLeaderBoardComponent, [{
        type: Component,
        args: [{ selector: 'event-leader-board', imports: [
                    CommonModule,
                    ApUiTabGroupComponent,
                    ApButtonComponent,
                    ApIconComponent,
                    ApUiPaginationComponent,
                    TruncatePipe,
                    AppI18nPipe,
                    HistoryReplayViewerComponent
                ], template: "<div\n  class=\"relative flex flex-col bg-zinc-900 justify-center h-full\"\n  (click)=\"closeshowInfoModal()\"\n>\n  <div class=\"sticky z-sticky top-0 bg-zinc-900 px-4 pt-6 pb-4 shrink-0\">\n    <ap-ui-tab-group\n      [tabs]=\"tabs()\"\n      [selectedTab]=\"selectedTab()\"\n      (tabChange)=\"selectTab($event)\"\n    />\n  </div>\n  <div\n    class=\"flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full md:mt-4\"\n  >\n    <!-- Personal/all players toggle -->\n    <div class=\"flex justify-center w-full md:w-auto mt-2 mb-2\">\n      <button\n        (click)=\"onToggleClick()\"\n        class=\"flex items-center gap-3 font-bold transition-colors duration-200 cursor-pointer\"\n      >\n        <span\n          class=\"transition-colors cursor-pointer\"\n          [class.text-yellow-300]=\"!isAllPlayers()\"\n          [class.text-zinc-500]=\"isAllPlayers()\"\n          >{{ \"Personal_Toggle\" | appI18n: \"PERSONAL\" }}</span\n        >\n        <span\n          class=\"relative h-7 w-14 rounded-full transition-colors duration-200 flex-shrink-0 bg-yellow-500\"\n        >\n          <div\n            class=\"absolute left-1 h-5 w-5 translate-y-1 rounded-full border border-amber-500 bg-white shadow transition-all duration-200\"\n            [class.translate-x-7]=\"isAllPlayers()\"\n          ></div>\n        </span>\n        <span\n          class=\"transition-colors cursor-pointer\"\n          [class.text-yellow-300]=\"isAllPlayers()\"\n          [class.text-zinc-500]=\"!isAllPlayers()\"\n          >{{ \"AllPlayers_Toggle\" | appI18n: \"ALL PLAYERS\" }}</span\n        >\n      </button>\n    </div>\n  </div>\n\n  @if (leaderBoardItems().length === 0) {\n    <div\n      class=\"flex flex-col items-center justify-center h-full text-zinc-400 -mt-20 pointer-events-none\"\n    >\n      <div class=\"flex flex-col items-center\">\n        <ap-icon name=\"ranking default\" class=\"size-64\" />\n      </div>\n      <div class=\"text-xl\">\n        {{ \"NoData_Text\" | appI18n: \"No rankings available yet.\" }}\n      </div>\n    </div>\n  }\n  <div\n    [class.hidden]=\"leaderBoardItems().length === 0\"\n    class=\"relative bg-zinc-900 gap-1 px-1 md:px-20 overflow-y-scroll sm:mt-6 mt-6 h-full\"\n  >\n    <table class=\"w-full text-zinc-100 text-xs sm:text-md\">\n      <!--Title-->\n      <thead class=\"sticky z-dropdown -top-1 bg-zinc-900\">\n        <tr\n          class=\"text-md md:text-sm border-b border-zinc-600 text-yellow-300 bg-yellow-300/10 uppercase\"\n        >\n          <th class=\"text-center w-[10%] min-w-[1rem] whitespace-nowrap px-2\">\n            <span class=\"inline-block min-w-[1rem] whitespace-nowrap\">\n              {{ \"Ranking_ColumnText\" | appI18n: \"#\" }}\n            </span>\n          </th>\n          <th class=\"text-left px-2 w-40 min-w-40 max-w-40\">\n            {{ \"GameName_ColumnText\" | appI18n: \"GAME\" }}\n          </th>\n          <th class=\"w-[20%]\">\n            <button\n              (click)=\"onMultiplierSortClick()\"\n              class=\"w-full min-h-8 flex items-center gap-1 hover:text-yellow-100 cursor-pointer transition-colors justify-center uppercase\"\n            >\n              <span class=\"flex items-center gap-1\">{{\n                \"Multiplier_ColumnText\" | appI18n: \"MULT.\"\n              }}</span>\n              <ap-icon\n                [name]=\"getMultiplierSortIcon()\"\n                class=\"sm:size-5 size-4\"\n              />\n            </button>\n          </th>\n          <th class=\"w-[15%]\">\n            <button\n              (click)=\"onPrizeSortClick()\"\n              class=\"w-full min-h-8 flex items-center gap-1 hover:text-yellow-100 cursor-pointer transition-colors justify-center uppercase\"\n            >\n              <span class=\"flex items-center gap-1\">{{\n                \"Prize_ColumnText\" | appI18n: \"PRIZE\"\n              }}</span>\n              <ap-icon [name]=\"getPrizeSortIcon()\" class=\"sm:size-5 size-4\" />\n            </button>\n          </th>\n          <th class=\"[20%]\">\n            <button\n              (click)=\"onSpinSortClick()\"\n              class=\"w-full min-h-8 flex items-center justify-center uppercase\"\n            >\n              <span class=\"flex items-center\">\n                <div\n                  class=\"flex hover:text-yellow-100 cursor-pointer transition-colors items-center\"\n                >\n                  <span class=\"uppercase\">{{\n                    \"Spin_ColumnText\" | appI18n: \"SPIN\"\n                  }}</span>\n                  <ap-icon\n                    [name]=\"getSpinSortIcon()\"\n                    class=\"sm:size-5 size-4 ml-1\"\n                  />\n                </div>\n                <span class=\"relative inline-flex items-center\">\n                  <ap-icon\n                    [name]=\"'exclamation-circle'\"\n                    class=\"sm:size-5 size-4 text-zinc-400 hover:text-white cursor-pointer transition-colors mr-1\"\n                    (click)=\"openInfoModal($event)\"\n                  />\n                  @if (showInfoModal()) {\n                    <div\n                      class=\"absolute left-1/2 top-full z-popover mt-2 w-28 md:40 sm:w-48 max-w-[90vw] -translate-x-1/2 rounded-lg border border-zinc-500 bg-zinc-900 p-4 shadow-md animate-duration-300 transition-all\"\n                      (click)=\"$event.stopPropagation()\"\n                    >\n                      <div class=\"text-md font-medium text-left text-zinc-300\">\n                        {{\n                          \"Spin_Info\"\n                            | appI18n\n                              : \"Spin means the total number of spins played during the event. The more you spin, the higher your chances of winning!\"\n                        }}\n                      </div>\n                    </div>\n                  }\n                </span>\n              </span>\n            </button>\n          </th>\n          <th class=\"w-[10%]\">{{ \"Replay_ColumnText\" | appI18n: \"REPLAY\" }}</th>\n        </tr>\n      </thead>\n      <tbody>\n        @for (item of paginatedItems(); track $index) {\n          <tr\n            [class]=\"\n              ' relative animate-fade-down animate-duration-300 hover:bg-zinc-600/50 border-b border-zinc-600 ' +\n              ($index % 2 === 0 ? ' bg-zinc-800' : ' bg-zinc-900')\n            \"\n          >\n            <td class=\"text-center text-lg font-medium text-white\">\n              <div class=\"flex items-center justify-center\">\n                @if (item.sortedIndex === 1) {\n                  <ap-icon name=\"first\" class=\"size-8\" />\n                } @else if (item.sortedIndex === 2) {\n                  <ap-icon name=\"second\" class=\"size-8\" />\n                } @else if (item.sortedIndex === 3) {\n                  <ap-icon name=\"third\" class=\"size-8\" />\n                } @else {\n                  {{ item.sortedIndex }}\n                }\n              </div>\n            </td>\n            <td class=\"w-40 min-w-40 max-w-40 py-2 text-left font-medium\">\n              <div\n                class=\"px-2 flex flex-wrap relative items-center gap-1 sm:gap-2\"\n              >\n                <div\n                  class=\"w-10 h-6 sm:w-14 sm:h-8 rounded shrink-0 overflow-hidden border border-yellow-200\"\n                >\n                  <img\n                    [src]=\"item.image\"\n                    [alt]=\"item.game + ' banner'\"\n                    class=\"w-full h-full object-cover\"\n                    loading=\"lazy\"\n                  />\n                </div>\n                <div class=\"flex flex-col\">\n                  <div\n                    class=\"text-yellow-200 font-semibold text-sm sm:text-md \"\n                  >\n                    {{\n                      item.game.length > 18\n                        ? (item.game | slice: 0 : 15) + \"...\"\n                        : item.game\n                    }}\n                  </div>\n                  <div class=\"text-xs text-left text-zinc-400\">\n                    {{ item.time * 1000 | date: \"yyyy-MM-dd\" }}\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td\n              class=\"text-center font-medium text-sm sm:text-md break-all align-center pb-1\"\n            >\n              {{ item.multiplier | truncate }}x\n            </td>\n            <td\n              class=\"text-center font-medium text-sm sm:text-md align-center\"\n            >\n              <div class=\"flex items-center justify-center gap-1 whitespace-nowrap\">\n                <span>{{ item.currencySymbol }}</span>\n                <span>{{ item.prize | number: \"1.2-2\" }}</span>\n              </div>\n            </td>\n            <td\n              class=\"text-center font-medium text-sm sm:text-md break-all align-center pb-1\"\n            >\n              {{ item.spin }}\n            </td>\n            <td class=\"text-center\">\n              @if (\n                loginCtrl.offline ||\n                (api.loginResult()?.note?.leader_board ?? 0) >= 2\n              ) {\n                <ap-button\n                  [size]=\"'small'\"\n                  [icon]=\"'replay'\"\n                  [accentColor]=\"'zinc'\"\n                  (click)=\"onReplayClick(item)\"\n                />\n              }\n            </td>\n          </tr>\n        }\n      </tbody>\n    </table>\n  </div>\n\n  <div\n    [class.hidden]=\"leaderBoardItems().length === 0\"\n    class=\"relative shrink-0 py-2\"\n  >\n    <ap-ui-pagination\n      [variant]=\"'quick'\"\n      [config]=\"paginationConfig()\"\n      (pageChanged)=\"currentPage.set($event)\"\n    />\n  </div>\n\n  <!-- Replay Viewer Component -->\n  <history-replay-viewer\n    [showConfirmDialog]=\"isReplay()\"\n    [popupLabel]=\"popupLabel()\"\n    [popupHintReplay]=\"popupHintReplay()\"\n    [cancelLabel]=\"cancelLabel()\"\n    [confirmLabel]=\"confirmLabel()\"\n    [isReplayPanel]=\"isReplayPanel()\"\n    [gameName]=\"replayGameName()\"\n    (confirmReplayRequest)=\"onReplayConfirmRequest()\"\n    (cancelReplay)=\"onReplayCancel()\"\n    (copyLinkRequest)=\"onCopyLinkRequest()\"\n    (close)=\"onReplayClose()\"\n  />\n</div>\n", styles: ["thead th {\n  background: linear-gradient(rgba(253, 224, 71, 0.1), rgba(253, 224, 71, 0.1)) #18181b;\n}\n"] }]
    }], () => [{ type: i1.UserProfileService }, { type: i2.LeaderBoardService }, { type: i3.LoginCtrlService }], { replayViewerComponent: [{
            type: ViewChild,
            args: [HistoryReplayViewerComponent]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EventLeaderBoardComponent, { className: "EventLeaderBoardComponent", filePath: "src/app/pages/event-leader-board/event-leader-board.component.ts", lineNumber: 88 }); })();
//# sourceMappingURL=event-leader-board.component.js.map