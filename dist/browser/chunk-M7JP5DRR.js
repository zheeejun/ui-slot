import {
  ApWebHistoryDetailSessionKey
} from "./chunk-MLWU5HFS.js";
import {
  AppInterfaceService
} from "./chunk-TLQLKLDD.js";
import {
  calc,
  dec,
  decimal_default,
  safeParse
} from "./chunk-CFCPEQLG.js";
import {
  ClientSessionService
} from "./chunk-54ITVL2G.js";
import {
  Injectable,
  Subject,
  __async,
  catchError,
  firstValueFrom,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  timeout,
  timer,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/app/services/history-ctrl/history-list.item.ts
var offlineHistoryCashList = [
  {
    date: "2023-09-29",
    type: "C",
    time: "19:00:04",
    rewardType: "Normal Game",
    transaction: "TX527310694",
    currency: "$",
    bet: 221.117,
    win: 628530.825,
    isStarred: false,
    isTrophy: false,
    isWin: true,
    replay: true,
    buyFeatureMode: "dc"
  },
  {
    date: "2025-12-23",
    type: "CTP",
    time: "14:28:46",
    rewardType: "Bonus Withdraw",
    transaction: "TX374826150",
    currency: "$",
    bet: 573.029,
    win: 162000.765,
    isStarred: false,
    isTrophy: false,
    isWin: false,
    replay: false,
    isCampaignHighlight: true,
    buyFeatureMode: ""
  },
  {
    date: "2025-12-26",
    type: "CTD",
    time: "11:37:52",
    rewardType: "CashDrop Reward",
    transaction: "TX106439582",
    currency: "$",
    bet: 478.61,
    win: 751320.4,
    isStarred: false,
    isTrophy: false,
    isWin: false,
    replay: false,
    isCashDropHighlight: true,
    buyFeatureMode: ""
  },
  {
    date: "2025-12-26",
    type: "C",
    time: "19:00:04",
    rewardType: "Normal Game",
    transaction: "TX527310694",
    currency: "$",
    bet: 221.117,
    win: 628530.825,
    isStarred: true,
    isTrophy: false,
    isWin: true,
    replay: true,
    buyFeatureMode: "bf"
  }
];
var offlineHistoryBonusList = [
  {
    date: "2023-08-29",
    type: "B",
    time: "19:00:04",
    rewardType: "Normal Game",
    transaction: "TX527310694",
    currency: "$",
    bet: 221.117,
    win: 628530.825,
    isStarred: false,
    isTrophy: true,
    isWin: true,
    replay: true,
    buyFeatureMode: ""
  },
  {
    date: "2023-10-23",
    type: "B",
    time: "14:28:46",
    rewardType: "Normal Game",
    transaction: "TX374826150",
    currency: "$",
    bet: 573.029,
    win: 162000.765,
    isStarred: true,
    isTrophy: false,
    isWin: false,
    replay: true,
    buyFeatureMode: ""
  },
  {
    date: "2023-05-06",
    type: "B",
    time: "06:37:52",
    rewardType: "Normal Game",
    transaction: "TX106439582",
    currency: "$",
    bet: 478.61,
    win: 751320.4,
    isStarred: false,
    isTrophy: false,
    isWin: true,
    replay: true,
    buyFeatureMode: ""
  }
];

// src/app/services/history-ctrl/history-server.response.ts
var serverHistorySpinDetailResponse = {
  "info": {
    "type": "C",
    "free_no": "",
    "before_balance": 1000485720,
    "after_balance": 1000476720
  },
  "result": {}
};
var serverHistoryCampaignDetailResponse = {
  "info": {
    "type": "CTP"
  },
  "transfer": {
    "campaign_id": "CP_eF5aBmHd3y9nBO",
    "name": "ChiikawaWithYouForever",
    "type": 5,
    "endtime": "2026-12-31 08:53:31",
    "withdraw_turnover_limit": 3e5,
    "withdraw_lower_limit": 3e5,
    "withdraw_upper_limit": 1e6,
    "status": 10,
    "turnover": 306e3,
    "bw_id": 1374,
    "bw_balance": 1012240,
    "popup_msg": 0,
    "use_wallet": "",
    "visible": 0,
    "withdraw_amount": 1e6,
    "last_bet_time": "",
    "pickup_condition_stats_range": 2
  }
};
var serverHistoryCashDropDetailResponse = {
  "info": {
    "type": "CTD"
  },
  "transfer": {
    "main_prize": 1e4,
    "mystery_prize": 1e5,
    "running_time": "2026-04-17 10:54:56",
    "settled_time": "2026-04-17 10:55:07",
    "after_balance": 976321480
  }
};

// src/app/services/history-ctrl/history-ctrl.service.ts
var HistoryCtrlService = class _HistoryCtrlService {
  api = inject(AppInterfaceService);
  session = inject(ClientSessionService);
  locale = this.session.locale;
  /** 控制 share 按鈕顯示 */
  forceShareDisplayed = signal(false);
  /** 控制 replay 按鈕顯示 */
  forceReplayDisplayed = signal(false);
  /** 控制 history detail 呈現版本 */
  historyDetailStyle = signal("default");
  /** 交易類型對應的獎勵類型 */
  rewardTypeMap = {
    "C": "Normal Game",
    "B": "Bonus Wallet",
    "CTP": "Bonus Withdraw",
    "CTD": "CashDrop Reward",
    "BTP": "Bonus Withdraw",
    "BRS": "Bonus Withdraw",
    "BTD": "Bonus Withdraw",
    "TournamentWinTicket": "Tournament Reward"
  };
  spinDetailSubject = new Subject();
  /** SpinDetail訂閱接口 @example: historyCtrl.spinDetail$.subscribe((event) => { ... }); */
  get spinDetail$() {
    return this.spinDetailSubject.asObservable();
  }
  campaignDetailSubject = new Subject();
  /** CampaignDetail訂閱接口 @example: historyCtrl.campaignDetail$.subscribe((event) => { ... }); */
  get campaignDetail$() {
    return this.campaignDetailSubject.asObservable();
  }
  cashDropDetailSubject = new Subject();
  /** CashDropDetail訂閱接口 @example: historyCtrl.cashDropDetail$.subscribe((event) => { ... }); */
  get cashDropDetail$() {
    return this.cashDropDetailSubject.asObservable();
  }
  /** HistoryList訂閱接口 @example: historyCtrl.historyList$.subscribe((event) => { ... }); */
  historyListSubject = new Subject();
  /** HistoryList訂閱接口 @example: historyCtrl.historyList$.subscribe((event) => { ... }); */
  get historyList$() {
    return this.historyListSubject.asObservable();
  }
  /** 當前歷史詳情的投注金額 */
  detailBet = 0;
  /** 當前歷史詳情的贏取金額 */
  detailWin = 0;
  constructor() {
    this.api.historyResult$.subscribe(this.processHistoryResponse.bind(this));
  }
  /** 格式化日期為服務器需要的格式 'YYYY/MM/DD HH:mm:ss' */
  formatDateTimeForServer(d) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const seconds = String(d.getSeconds()).padStart(2, "0");
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  }
  /** 獲取遊戲的歷史列表
   * @param filter 篩選條件: 'W'=win, 'L'=lose, 'A'=all
   * @param startDate 起始時間 (格式: 'YYYY/MM/DD HH:mm:ss')
   * @param endDate 結束時間 (格式: 'YYYY/MM/DD HH:mm:ss')
   * @param firstIndex 資料起點 (分頁用)
   * @param count 取出筆數
   */
  getCashHistoryList(filter = "winlose", startDate, endDate, firstIndex = 0, count = 20) {
    return __async(this, null, function* () {
      if (this.api.isOffline) {
        yield firstValueFrom(timer(500));
        let result = [...offlineHistoryCashList];
        if (filter === "win")
          result = result.filter((item) => item.isWin);
        else if (filter === "lose")
          result = result.filter((item) => !item.isWin);
        const items = result.slice(firstIndex, firstIndex + count);
        return {
          items,
          total_count: result.length,
          total_bet: items.reduce((sum, item) => sum + item.bet, 0),
          total_win: items.reduce((sum, item) => sum + item.win, 0)
        };
      }
      const startDateStr = startDate ? this.formatDateTimeForServer(startDate) : "";
      const endDateStr = endDate ? this.formatDateTimeForServer(endDate) : "";
      const filterString = filter === "win" ? "W" : filter === "lose" ? "L" : "A";
      const msg = `${filterString},${startDateStr},${endDateStr},${firstIndex},${count},C`;
      this.api.sendInfoMsgNostringify("History", msg);
      return firstValueFrom(this.api.historyResult$.pipe(map((response) => this.parseFullHistoryResponse(response)), timeout(1e4), catchError(() => of({ items: [], total_count: 0, total_bet: 0, total_win: 0 }))));
    });
  }
  /** 獲取遊戲的 Bonus 歷史列表
   * @param filter 篩選條件: 'W'=win, 'L'=lose, 'A'=all
   * @param startDate 起始時間 (格式: 'YYYY/MM/DD HH:mm:ss')
   * @param endDate 結束時間 (格式: 'YYYY/MM/DD HH:mm:ss')
   * @param firstIndex 資料起點 (分頁用)
   * @param count 取出筆數
   */
  getBonusHistoryList(filter, startDate, endDate, firstIndex = 0, count = 20) {
    return __async(this, null, function* () {
      if (this.api.isOffline) {
        yield firstValueFrom(timer(500));
        let result = [...offlineHistoryBonusList];
        if (filter === "win")
          result = result.filter((item) => item.isWin);
        else if (filter === "lose")
          result = result.filter((item) => !item.isWin);
        const items = result.slice(firstIndex, firstIndex + count);
        return {
          items,
          total_count: result.length,
          total_bet: items.reduce((sum, item) => sum + item.bet, 0),
          total_win: items.reduce((sum, item) => sum + item.win, 0)
        };
      }
      const startDateStr = startDate ? this.formatDateTimeForServer(startDate) : "";
      const endDateStr = endDate ? this.formatDateTimeForServer(endDate) : "";
      const filterString = filter === "win" ? "W" : filter === "lose" ? "L" : "A";
      const msg = `${filterString},${startDateStr},${endDateStr},${firstIndex},${count},B`;
      this.api.sendInfoMsgNostringify("History", msg);
      return firstValueFrom(this.api.historyResult$.pipe(map((response) => this.parseFullHistoryResponse(response)), timeout(1e4), catchError(() => of({ items: [], total_count: 0, total_bet: 0, total_win: 0 }))));
    });
  }
  /** 獲取本地今天的日期範圍（00:00:00 到 隔日 00:00:00）是要傳給服務器使用所以要轉成 GMT+00 時區的時間
   * @example (GMT+8) 會傳出 {from: 2026/04/09 16:00:00 , to: 2026/04/10 16:00:00}
  */
  getTodayRange() {
    const now = /* @__PURE__ */ new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1e3;
    const localFrom = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    const localTo = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const from = new Date(localFrom.getTime() + offsetMs);
    const to = new Date(localTo.getTime() + offsetMs);
    return { from, to };
  }
  /** 將本地時間範圍換為 GMT+00 時區的時間
   * @example (GMT+8) 從日曆選擇 2026/04/09 到 2026/04/09 會傳出 {from: 2026/04/08 16:00:00 , to: 2026/04/09 16:00:00}
   */
  getUtcDateRange(from, to) {
    const utcFrom = from;
    const utcTo = new Date(to.getTime());
    utcTo.setDate(utcTo.getDate() + 1);
    const now = /* @__PURE__ */ new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1e3;
    const fromWithOffset = new Date(utcFrom.getTime() + offsetMs);
    const toWithOffset = new Date(utcTo.getTime() + offsetMs);
    return { from: fromWithOffset, to: toWithOffset };
  }
  /** 獲取遊戲的歷史詳情 */
  getHistoryDetail(item) {
    if (!item)
      return;
    if (this.api.isOffline) {
      timer(1e3).subscribe(() => {
        if (item.rewardType === "Bonus Withdraw") {
          this.processHistoryResponse(serverHistoryCampaignDetailResponse);
        } else if (item.rewardType === "CashDrop Reward") {
          this.processHistoryResponse(serverHistoryCashDropDetailResponse);
        } else {
          this.processHistoryResponse(serverHistorySpinDetailResponse);
        }
      });
      return;
    }
    this.detailBet = item.bet;
    this.detailWin = item.win;
    const msg = `${item.transaction},${item.type}`;
    this.api.sendInfoMsgNostringify("History", msg);
  }
  /** 解析 Server History 回應為 IHistoryResponse (包含 metadata) */
  parseFullHistoryResponse(response) {
    const parsed = typeof response === "string" ? safeParse(response) : response;
    if (!parsed)
      return { items: [], total_count: 0, total_bet: 0, total_win: 0 };
    const total_count = parsed.total_count || 0;
    const total_bet = calc.s2c(parsed.total_bet) || 0;
    const total_win = calc.s2c(parsed.total_win) || 0;
    const items = this.parseHistoryResponse(parsed);
    const list = { items, total_count, total_bet, total_win };
    this.historyListSubject.next(list);
    return list;
  }
  /** 解析 Server History 回應為 HistoryListItem[] */
  parseHistoryResponse(response) {
    const parsed = typeof response === "string" ? safeParse(response) : response;
    if (!parsed)
      return [];
    const items = Array.isArray(parsed) ? parsed : parsed.data || [];
    return items.map((item) => {
      const betValue = item.bet || 0;
      const winValue = item.win || 0;
      const rewardType = this.rewardTypeMap[item.type] || "Normal Game";
      const isTrnHighlight = rewardType === "Tournament Reward";
      const utcDateString = item.time.replace(" ", "T") + "Z";
      const localTime = new Date(utcDateString);
      const date = localTime.toLocaleDateString(this.locale);
      const time = localTime.toLocaleTimeString(this.locale, { hour12: false });
      const isCampaignReward = item.type === "CTP" || item.type === "BTP" || item.type === "BRS" || item.type === "BTD";
      const isCashDropReward = item.type === "CTD";
      return {
        transaction: item.ticket || "",
        type: item.type,
        date,
        time,
        bet: calc.s2c(betValue),
        win: calc.s2c(winValue),
        replay: item.replay || false,
        currency: this.api.currencySymbol() || "$",
        isWin: winValue > 0,
        maxPayout: this.isMaxPayout(item.max_payout, winValue),
        featureType: item.fg === "1" ? "bf1" : item.bg === "1" ? "bf2" : void 0,
        isStarred: item.fg === "1" || item.bg === "1",
        isTrophy: item.tournament === "1",
        isTrnHighlight,
        isCampaignHighlight: isCampaignReward,
        isCashDropHighlight: isCashDropReward,
        rewardType,
        buyFeatureMode: item.mode || "",
        isDoubleChance: item.mode.startsWith("dc"),
        isBuyFeature: item.mode.startsWith("bf")
      };
    });
  }
  /** 最大下注額 */
  isMaxPayout(maxPayout, winValue) {
    const value = (maxPayout || "").trim().toLowerCase();
    if (!value)
      return false;
    if (["true", "yes", "y"].includes(value))
      return true;
    if (["false", "no", "n"].includes(value))
      return false;
    const numericValue = Number(value);
    if (Number.isNaN(numericValue))
      return false;
    if (numericValue === 1)
      return true;
    if (numericValue === 0)
      return false;
    return calc.s2c(numericValue) === calc.s2c(winValue);
  }
  processHistoryResponse(response) {
    if (!response)
      return;
    if ("result" in response) {
      this.saveSpinResultToStorage(response);
    }
    if ("info" in response) {
      this.processHistoryDetailResponse(response);
    }
  }
  /** 處理 History Detail 回應 */
  processHistoryDetailResponse(response) {
    if (!response)
      return;
    if (!("info" in response))
      return;
    const type = response.info.type;
    if (type === "C" || type === "B" || type === "BRS" || type === "CRS") {
      const r = response;
      const spinResult = r.result;
      const sumWinScore = (round) => (round?.plate ?? []).reduce((sum, plate) => new decimal_default(sum).plus(Number(plate.win_score ?? 0)).toNumber(), 0);
      const winList = [
        calc.s2c(sumWinScore(spinResult.main_game)),
        ...(spinResult.free_game ?? []).map((round) => calc.s2c(sumWinScore(round)))
      ];
      const afterBalance = calc.s2c(r.info.after_balance);
      const balanceList = winList.map((_, i) => {
        const winsAfter = winList.slice(i + 1).reduce((s, w) => new decimal_default(s).plus(w).toNumber(), 0);
        return new decimal_default(afterBalance).minus(winsAfter).toNumber();
      });
      this.spinDetailSubject.next({
        beforeBalance: calc.s2c(r.info.before_balance),
        afterBalance: calc.s2c(r.info.after_balance),
        winList,
        balanceList,
        result: r.result,
        seed: r.seed
      });
    } else if (type === "CTD") {
      const r = response;
      const toTs = (s) => (/* @__PURE__ */ new Date(s.replace(" ", "T") + "Z")).getTime();
      const mainPrize = calc.s2c(r.transfer.main_prize);
      const mysteryPrize = calc.s2c(r.transfer.mystery_prize);
      const totalWin = mainPrize + mysteryPrize;
      const afterBalance = calc.s2c(r.transfer.after_balance);
      const beforeBalance = afterBalance - mainPrize - mysteryPrize;
      this.cashDropDetailSubject.next({
        beforeBalance,
        afterBalance,
        mainPrize,
        mysteryPrize,
        totalWin,
        runningTime: toTs(r.transfer.running_time),
        settledTime: toTs(r.transfer.settled_time)
      });
    } else if (type === "CTP" || type === "BTP" || type === "BTD") {
      const r = response;
      const toTs = (s) => (/* @__PURE__ */ new Date(s.replace(" ", "T") + "Z")).getTime();
      this.campaignDetailSubject.next({
        name: r.transfer.name,
        amount: calc.s2c(r.transfer.withdraw_amount),
        expiryDate: toTs(r.transfer.endtime),
        turnoverRequirement: calc.s2c(r.transfer.withdraw_turnover_limit),
        bonusBalance: calc.s2c(r.transfer.bw_balance),
        maxWithdraw: calc.s2c(r.transfer.withdraw_upper_limit),
        minWithdraw: calc.s2c(r.transfer.withdraw_lower_limit)
      });
    }
  }
  saveSpinResultToStorage(response) {
    const data = {
      // 歷史紀錄的amountRatio計算方法不一樣, 是login來的值的倒數, 所以要用1除以calc.amountRatio
      AmountRatio: new decimal_default(1).dividedBy(calc.amountRatio).toString(),
      CurrencyCode: this.api.currencyCode() || "",
      CurrencySymbol: this.api.currencySymbol() || "",
      DecimalPlaces: dec.decimalPlaces.toString(),
      DisableComma: dec.disableComma ? "1" : "0",
      GameCode: this.session.gameId || "",
      GameMode: "",
      HistoryDetailData: response,
      HistoryTicketData: {
        time: "",
        ticket: "",
        fg: "",
        bg: "",
        jp: "",
        free: "",
        free_no: "",
        // 這邊是模擬伺服器送來的rawData，所以用calc.c2s
        bet: calc.c2s(this.detailBet),
        win: calc.c2s(this.detailWin),
        campaign_id: "",
        cd_amount: null,
        mode: ""
      },
      Platform: "",
      PlatformCode: "",
      SiteCode: "",
      Ts: "",
      X: "",
      Bg: ""
    };
    const jsonData = JSON.stringify(data);
    sessionStorage.setItem(ApWebHistoryDetailSessionKey, jsonData);
  }
  static \u0275fac = function HistoryCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HistoryCtrlService, factory: _HistoryCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryCtrlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  HistoryCtrlService
};
//# sourceMappingURL=chunk-M7JP5DRR.js.map
