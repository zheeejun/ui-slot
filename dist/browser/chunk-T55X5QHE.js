import {
  PlayerWalletService
} from "./chunk-HNY47POZ.js";
import {
  AppInterfaceService
} from "./chunk-Q3NF4QZ2.js";
import {
  LoggerService,
  calc,
  safeParse
} from "./chunk-TIGXKRQH.js";
import {
  ClientSessionService,
  LANGUAGE_MAP,
  StorageCtrlService,
  environment
} from "./chunk-B2M5HODU.js";
import {
  Injectable,
  Subject,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  firstValueFrom,
  inject,
  interval,
  setClassMetadata,
  signal,
  timer,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/app/services/trn-ctrl/trn-ctrl.function.ts
function formatTrnLogin(item, lang, account = "") {
  const startTime = item.start_time;
  const endTime = item.end_time;
  const exchangeRate = item?.exchange_rate || 1;
  const feeRatio = item.extra_fee_ratio / 100;
  const betMultiplier = 1 + feeRatio;
  const isQuick = item.type.toLowerCase() === "quick_match";
  const names = safeParse(item.name);
  const descriptions = safeParse(item.description);
  const tiers = [];
  item?.tiers?.forEach((tier) => {
    const names2 = safeParse(tier.tier_name);
    const fixedPrizes = [];
    tier.fixed_prizes?.forEach((fp) => {
      fixedPrizes.push({
        rank: fp.rank,
        rankFrom: fp.rank_from,
        rankTo: fp.rank_to,
        amount: calc.s2c(fp.amount * exchangeRate)
      });
    });
    const poolDistribution = [];
    tier.pool_distribution?.forEach((pd) => {
      poolDistribution.push({
        rank: pd.rank,
        rankFrom: pd.rank_from,
        rankTo: pd.rank_to,
        ratio: pd.basis_points / 1e4
        // basis_points轉換成比例
      });
    });
    const maxStakeAmount = tier.max_stake_amount !== void 0 ? calc.s2c(tier.max_stake_amount) : null;
    const minPlayerBalance = calc.s2c(tier.min_player_balance || 0);
    const minStakeAmount = tier.min_stake_amount !== void 0 ? calc.s2c(tier.min_stake_amount) : null;
    tiers.push({
      id: tier.tier_id,
      name: names2[LANGUAGE_MAP[lang ?? "en"]] || "Tier",
      order: tier.tier_order,
      totalPrize: fixedPrizes.reduce((sum, fp) => sum + fp.amount, 0),
      fixedPrizes,
      poolDistribution,
      maxStakeAmount,
      minPlayerBalance,
      minStakeAmount
    });
  });
  tiers.sort((a, b) => a.order - b.order);
  const title = names[LANGUAGE_MAP[lang ?? "en"]] || "Tournament";
  const playerStatus = item.player_status;
  const raceData = playerStatus ? {
    id: item.tournament_id,
    rank: playerStatus.room_rankings?.find((r) => r.account_id === account)?.rank ?? null,
    playersList: createApRowListByRankings(playerStatus.room_rankings || [], account, exchangeRate),
    currentPool: calc.s2c(playerStatus.total_pool_amount) * exchangeRate
  } : {
    id: item.tournament_id,
    rank: null,
    playersList: [],
    currentPool: 0
  };
  return {
    id: item.tournament_id,
    matchDuration: item.duration_seconds,
    startTime,
    name: title,
    status: item.status,
    type: isQuick ? "quick" : "event",
    endTime,
    exchangeRate,
    tiers,
    feeRatio,
    betMultiplier,
    maxPlayers: item.max_players,
    description: descriptions[LANGUAGE_MAP[lang ?? "en"]] || "Default description",
    bannerImage: "assets/images/tournament/quick-race/banner_default.png",
    raceData
  };
}
function createTrnBetList(betList, maxStakeAmount, minStakeAmount) {
  const newBetList = [];
  betList.forEach((bet) => {
    if ((maxStakeAmount === null || bet <= maxStakeAmount) && (minStakeAmount === null || bet >= minStakeAmount)) {
      newBetList.push(bet);
    }
  });
  return newBetList;
}
function createApRowListByPlayerList(player, account) {
  const list = [];
  player.forEach((p) => {
    const isYou = p.account_id === account;
    const item = {
      id: p.account_id,
      name: isYou ? "You" : `${p.nickname.charAt(0)}**`,
      rank: null,
      score: 0,
      win: 0,
      highlighted: isYou
    };
    list.push(item);
  });
  return list;
}
function createApRowListByRankings(rankings, account, exchangeRate) {
  const list = [];
  rankings?.forEach((r) => {
    const isYou = r.account_id === account;
    const item = {
      id: r.account_id,
      name: isYou ? "You" : `${r.nickname?.charAt(0)}**`,
      rank: r.rank ? Math.floor(r.rank) : null,
      score: Number(r.score || r.final_score || "0"),
      win: calc.s2c((r.prize_preview || r.prize_amount || r.prize || 0) * exchangeRate),
      highlighted: isYou
    };
    list.push(item);
  });
  list.sort((a, b) => {
    if (a.rank === null)
      return 1;
    if (b.rank === null)
      return -1;
    return a.rank - b.rank;
  });
  return list;
}
function updateApRowListByRankings(playerList, rankings, exchangeRate) {
  const list = [];
  playerList.forEach((player) => {
    const isYou = player.highlighted;
    const data = rankings.find((r) => r.account_id === player.id);
    const rank = data ? data.rank : playerList.length;
    const score = data ? Number(data.score || data.final_score || "0") : 0;
    const win = calc.s2c(data ? (data.prize_preview || data.prize_amount || 0) * exchangeRate : 0);
    const item = {
      id: player.id,
      name: player.name,
      rank: rank ? Math.floor(rank) : null,
      score,
      win,
      highlighted: isYou
      // For "You" player highlighting
    };
    list.push(item);
  });
  list.sort((a, b) => {
    if (a.rank === null)
      return 1;
    if (b.rank === null)
      return -1;
    return a.rank - b.rank;
  });
  return list;
}
function createPrizeNotification(data, account, exchangeRate) {
  const ranking = data.contextual_rankings || data.rankings || [];
  const playerData = ranking.find((ranking2) => ranking2.account_id === account);
  const rank = playerData?.rank || 0;
  const prize = calc.s2c((playerData?.prize_amount || playerData?.prize_preview || 0) * exchangeRate);
  const rankList = createApRowListByRankings(ranking, account, exchangeRate);
  const prizeNotification = {
    notificationId: data.notification_id,
    rank: rank ? Math.floor(rank) : null,
    prize,
    playersList: rankList
  };
  return prizeNotification;
}
function generatePlayerList() {
  const basePlayers = [
    { id: "You", title: "a**", baseScore: 5e4, baseBonus: 1e5 },
    { id: "b8l0n4o6q3r9", title: "b**", baseScore: 4e4, baseBonus: 5e4 },
    { id: "c9m1o5p7r4s0", title: "c**", baseScore: 1e6, baseBonus: 1e3 },
    { id: "d0n2p6q8s5t1", title: "d**", baseScore: 2e4, baseBonus: 1e3 },
    { id: "e1o3q7r9t6u2", title: "e**", baseScore: 1e4, baseBonus: 1e3 },
    { id: "f2p4r8s0u7v3", title: "f**", baseScore: 1e4, baseBonus: 1e3 },
    { id: "g3q5s9t1v8w4", title: "g**", baseScore: 3e4, baseBonus: 1e3 },
    { id: "h4r6t0u2w9x5", title: "h**", baseScore: 2e4, baseBonus: 1e3 },
    { id: "i5s7u1v3x0y6", title: "i**", baseScore: 1e4, baseBonus: 1e3 },
    { id: "j6t8v2w4y1z7", title: "j**", baseScore: 8e4, baseBonus: 1e3 },
    { id: "k7u9w3x5z2a8", title: "k**", baseScore: 15e3, baseBonus: 1500 },
    { id: "l8v0x4y6a3b9", title: "l**", baseScore: 25e3, baseBonus: 2500 },
    { id: "m9w1y5z7b4c0", title: "m**", baseScore: 35e3, baseBonus: 3500 },
    { id: "n0x2z6a8c5d1", title: "n**", baseScore: 45e3, baseBonus: 4500 }
  ];
  const playersWithScores = basePlayers.map((player) => ({
    id: player.id,
    name: player.id,
    rank: 0,
    score: Math.floor(player.baseScore * (0.8 + Math.random() * 0.7)),
    win: Math.floor(player.baseBonus * (0.8 + Math.random() * 0.5)),
    highlighted: player.id === "You",
    disabled: false
  }));
  playersWithScores.sort((a, b) => b.score - a.score);
  playersWithScores.forEach((player, index) => {
    player.rank = index + 1;
  });
  return playersWithScores;
}

// src/app/services/trn-ctrl/trn-ctrl.service.ts
var TrnCtrlService = class _TrnCtrlService {
  /** 目前TRN狀態 */
  _status = signal("idle");
  /** 目前TRN狀態 */
  status = this._status.asReadonly();
  /** 目前所有Trn資料 */
  _trnList = signal([]);
  /** 目前所有Trn資料 */
  trnList = this._trnList.asReadonly();
  /** 所有需要通知的獎項 */
  _prizeNotificationList = signal([]);
  /** 所有需要通知的獎項 */
  prizeNotificationList = this._prizeNotificationList.asReadonly();
  /** 目前正在投注的TrnId (用來判斷betData) */
  _betDataTrnId = signal(null);
  /** 目前正在投注的TrnId (用來判斷betData) */
  betDataTrnId = this._betDataTrnId.asReadonly();
  /** 目前運行的房間ID */
  _roomId = signal(null);
  /** 目前運行的房間ID */
  roomId = this._roomId.asReadonly();
  /** 房間心跳間隔 (秒) */
  roomHeartbeatInterval = signal(null);
  /** 排隊心跳計時器 */
  heartbeatSubscription = null;
  notifyQueueCreatedSubject = new Subject();
  /** 有玩家加入排隊 */
  get notifyQueueCreated$() {
    return this.notifyQueueCreatedSubject.asObservable();
  }
  notifyQueueUpdatedSubject = new Subject();
  /** 排隊狀態更新 */
  get notifyQueueUpdated$() {
    return this.notifyQueueUpdatedSubject.asObservable();
  }
  /** 正在配對, 房間狀態更新 */
  roomMatchingSubject = new Subject();
  /** 正在配對, 房間狀態更新 */
  get roomMatching$() {
    return this.roomMatchingSubject.asObservable();
  }
  /** 房間準備完成 */
  roomReadySubject = new Subject();
  /** 房間準備完成 */
  get roomReady$() {
    return this.roomReadySubject.asObservable();
  }
  /** 房間狀態更新 */
  roomUpdatedSubject = new Subject();
  /** 房間狀態更新 */
  get roomUpdated$() {
    return this.roomUpdatedSubject.asObservable();
  }
  /** 競賽結束 */
  roomEndingSubject = new Subject();
  /** 競賽結束 */
  get roomEnding$() {
    return this.roomEndingSubject.asObservable();
  }
  /** 統計結束 */
  //private roomEndedSubject = new Subject<TrnRaceUpdated>();
  /** 統計結束 */
  //public get roomEnded$() { return this.roomEndedSubject.asObservable();}
  /** 正在取消配對 */
  roomCancellingSubject = new Subject();
  /** 正在取消配對 */
  get roomCancelling$() {
    return this.roomCancellingSubject.asObservable();
  }
  /** 取消配對 */
  roomCancelledSubject = new Subject();
  /** 取消配對 */
  get roomCancelled$() {
    return this.roomCancelledSubject.asObservable();
  }
  /** 獎項通知 */
  prizeNotificationSubject = new Subject();
  /** 獎項通知 */
  get prizeNotification$() {
    return this.prizeNotificationSubject.asObservable();
  }
  /** Event競賽準備完成 */
  eventRaceReadySubject = new Subject();
  /** Event競賽準備完成 */
  get eventRaceReady$() {
    return this.eventRaceReadySubject.asObservable();
  }
  /** Event競賽狀態更新 */
  eventRaceUpdatedSubject = new Subject();
  /** Event競賽狀態更新 */
  get eventRaceUpdated$() {
    return this.eventRaceUpdatedSubject.asObservable();
  }
  /** Event競賽結束 */
  eventRaceEndedSubject = new Subject();
  /** Event競賽結束 */
  get eventRaceEnded$() {
    return this.eventRaceEndedSubject.asObservable();
  }
  /** 活動賽事排行榜頁面 */
  eventLeaderboardSubject = new Subject();
  /** 活動賽事排行更新 */
  get eventLeaderboard$() {
    return this.eventLeaderboardSubject.asObservable();
  }
  /** 活動賽事排名更新 */
  eventRankingSubject = new Subject();
  /** 活動賽事排名更新 */
  eventRanking$ = this.eventRankingSubject.asObservable();
  /** 活動賽事更新通知 */
  eventRefreshSubject = new Subject();
  /** 活動賽事更新通知 */
  get eventRefresh$() {
    return this.eventRefreshSubject.asObservable();
  }
  /** 發生錯誤 */
  errorSubject = new Subject();
  /** 發生錯誤 */
  get error$() {
    return this.errorSubject.asObservable();
  }
  /** 玩家歷史紀錄 */
  playerHistorySubject = new Subject();
  /** 玩家歷史紀錄 */
  get playerHistory$() {
    return this.playerHistorySubject.asObservable();
  }
  /** Debug Panel用: 強制觸發Signal */
  debugSignalSubject = new Subject();
  /** Debug Panel用: 強制觸發Signal */
  get debugSignal$() {
    return this.debugSignalSubject.asObservable();
  }
  /** Debug Panel用: 強制切換頁面 */
  debugPageSubject = new Subject();
  /** Debug Panel用: 強制切換頁面 */
  get debugPage$() {
    return this.debugPageSubject.asObservable();
  }
  /** Debug Panel用: 強制開啟 */
  debugForceEnable = signal(false);
  /** 玩家的貨幣代號 */
  currency = "";
  /** 玩家暱稱 */
  nickname = "";
  /** 玩家帳號 */
  account = "";
  /** 玩家的貨幣符號 */
  _currencySymbol = signal("$");
  /** 玩家的貨幣符號 */
  get currencySymbol() {
    return this._currencySymbol.asReadonly();
  }
  /** 參考由wallet.bet()產生出來的目前的Tier */
  currentTier = computed(() => {
    const bet = this.wallet.bet();
    const trn = this.trnQuick();
    if (!trn)
      return null;
    return trn.tiers.find((tier) => {
      return (tier.maxStakeAmount === null || bet <= tier.maxStakeAmount) && (tier.minStakeAmount === null || bet >= tier.minStakeAmount);
    }) || null;
  });
  // Room相關參數 (Quick使用)
  /** Room開始時間 Unix timestamp，單位為毫秒 */
  matchingStartTime = signal(null);
  /** Room結束時間 Unix timestamp，單位為毫秒 */
  roomEndTime = signal(null);
  /** Room的玩家數量 */
  roomCurrentPlayers = signal(1);
  /** Room正在玩的玩家列表 */
  roomPlayerList = signal([]);
  /** Room總獎金 */
  roomPrize = signal(null);
  /** Room玩家排名 */
  roomRank = signal(null);
  /** Room玩家階級 */
  roomTier = signal(null);
  /** Room最大玩家數量 */
  roomMaxPlayers = computed(() => {
    const trn = this.trnQuick();
    return trn ? trn.maxPlayers : null;
  });
  /** 全部長期賽事各階段排名快取 */
  allEventCachedData = signal({});
  /** 全部長期競賽參與狀態 */
  allEventPlayerJoined = signal({});
  /** 當下開啟的長期賽事結束時間 Unix timestamp，單位為毫秒 */
  eventEndedTime = signal(null);
  /** 當下開啟的長期賽事玩家列表 */
  eventPlayerList = signal([]);
  /** 當下開啟的長期賽事總獎金 */
  eventPrize = signal(null);
  /** 當下開啟的長期賽事玩家排名 */
  eventRank = signal(null);
  // inject 其他Service
  api = inject(AppInterfaceService);
  wallet = inject(PlayerWalletService);
  session = inject(ClientSessionService);
  logger = inject(LoggerService);
  storage = inject(StorageCtrlService);
  /** 是否需要更新Trn列表 */
  needUpdateTrnList = signal(true);
  constructor() {
    if (environment.production === false) {
      window.trn = this;
    }
    this.api.trn$.subscribe(this.onServerTrn.bind(this));
    effect(() => {
      const loginResult = this.api.loginResult();
      untracked(() => this.updateLoginResult(loginResult));
    });
    effect(() => {
      if (this.wallet.campaignSetting()) {
        this.enableBetData(false);
      }
    });
    effect(() => {
      this.enabledHeartbeat(this.status() === "matching-quick");
    });
  }
  /** 重置Quick房間相關的Signal */
  closeQuickRoom() {
    this._betDataTrnId.set(null);
    this.enableBetData(false);
    this.matchingStartTime.set(null);
    this._roomId.set(null);
    this.roomEndTime.set(null);
    this.roomCurrentPlayers.set(1);
    this.roomPlayerList.set([]);
    this.roomRank.set(null);
    this.roomTier.set(null);
    this.roomPrize.set(null);
    this._status.set("idle");
  }
  /** 關閉長期賽事頁面 */
  closeEventRace() {
    this._betDataTrnId.set(null);
    this.enableBetData(false);
    this.eventRaceEndedSubject.next();
    this.eventEndedTime.set(null);
    this.eventPlayerList.set([]);
    this.eventPrize.set(null);
    this.eventRank.set(null);
    this._status.set("idle");
  }
  /** 是否顯示主面板 */
  showMainPanel = computed(() => {
    if (this.debugForceEnable()) {
      return true;
    }
    return (this.trnRunningList() || []).length > 0 && this.api.loginResult()?.note?.disable_tournament !== true;
  });
  /** 是否要啟用Trn Component */
  enabled = computed(() => {
    return this.showMainPanel() || this.prizeNotificationList().length > 0;
  });
  /** 是否要顯示Trn tab */
  showTab = computed(() => {
    return (this.trnList() || []).length > 0 && this.api.loginResult()?.note?.disable_tournament !== true;
  });
  /** 快速賽事資料 */
  trnQuick = computed(() => {
    return this.trnList().find((trn) => trn.type === "quick") || null;
  });
  /** 長期活動賽事資料 */
  trnEventList = computed(() => {
    return this.trnList().filter((trn) => trn.type === "event") || null;
  });
  /** 正在運行的長期活動賽事 */
  trnEventRunningList = computed(() => {
    return this.trnEventList()?.filter((trn) => trn.status === "running") || null;
  });
  /** 所有正在運行的賽事 */
  trnRunningList = computed(() => {
    return this.trnList()?.filter((trn) => trn.status === "running") || null;
  });
  /** 目前的活動下注倍率 */
  betDataMultiplier = computed(() => {
    const trnId = this._betDataTrnId();
    if (!trnId)
      return 0;
    const trnData = this._trnList().find((trn) => trn.id === trnId);
    return trnData?.betMultiplier || 1;
  });
  /** 目前正在運行的下注倍率  */
  currentBetMultiplier = computed(() => {
    return this.betDataEnabled() ? this.betDataMultiplier() : 1;
  });
  /** 目前的額外費用比例 */
  betDataFeeRatio = computed(() => {
    const trnId = this._betDataTrnId();
    if (!trnId)
      return 0;
    const trnData = this._trnList().find((trn) => trn.id === trnId);
    return trnData?.feeRatio || 0;
  });
  /** 處理伺服器Info資訊 */
  onServerTrn(response) {
    if (response.error) {
      this.processError(response.error);
      return;
    }
    if (response.action === "tournament.event.list") {
      this.processEventList(response);
    } else if (response.action === "tournament.event.join") {
      this.processJoining(response);
    } else if (response.action === "tournament.room.ready") {
      this.processRoomReady(response);
    } else if (response.action === "tournament.room.updated") {
      this.processRoomStateUpdated(response);
    } else if (response.action === "tournament.prize.awarded") {
      this.processPrizeAwarded(response);
    } else if (response.action === "tournament.event.ranking") {
      this.processEventRanking(response);
    } else if (response.action === "tournament.event.leaderboard") {
      this.processEventLeaderboard(response);
    } else if (response.action === "tournament.events.refresh") {
      this.processEventRefresh(response);
    } else if (response.action === "tournament.player.history") {
      this.processPlayerHistory(response);
    } else if (response.action === "tournament.event.cancel") {
      this.processCancelJoin(response);
    } else if (response.action === "tournament.queue.updated") {
      this.processQueueUpdated(response);
    } else if (response.action === "tournament.queue.player_removed") {
      this.processQueuePlayerRemoved(response);
    } else if (response.action === "tournament.queue.waiting") {
      this.processTrnQueueWaiting(response);
    }
  }
  /** 處理登入結果資訊 */
  updateLoginResult(result) {
    if (!result)
      return;
    if (result.note?.nickname)
      this.nickname = result.note.nickname;
    if (result.note?.currency)
      this.currency = result.note.currency;
    if (result.note?.uid)
      this.account = result.note.uid;
    if (result.note?.currency_symbol)
      this._currencySymbol.set(result.note.currency_symbol);
    const list = [];
    const prizeList = [];
    result.note?.tournament?.forEach((trnItem) => {
      const trnData = formatTrnLogin(trnItem, this.session.language, this.account);
      list.push(trnData);
      const reconnectStatus = ["matching", "playing"];
      if (trnData.type === "quick" && reconnectStatus.includes(trnItem.player_status?.room_status)) {
        if (trnItem.player_status?.room_status === "matching") {
          this._status.set("matching-quick");
        } else if (trnItem.player_status?.room_status === "playing") {
          this._status.set("playing-quick");
        }
        this._betDataTrnId.set(trnData.id);
        this._roomId.set(trnItem.player_status?.room_id || null);
        this.roomEndTime.set(trnItem.player_status?.room_end_time || null);
        this.roomTier.set(trnData.tiers.find((tier) => tier.id === trnItem.player_status?.tier_id) || null);
        this.roomCurrentPlayers.set(trnItem.player_status?.current_players || 0);
        this.roomPrize.set(calc.s2c(trnItem.player_status?.total_pool_amount || 0) * trnData.exchangeRate || null);
        const rankings = createApRowListByPlayerList(trnItem.player_status?.players || [], this.account);
        this.roomPlayerList.set(updateApRowListByRankings(rankings, trnItem.player_status?.room_rankings || [], trnData.exchangeRate));
      }
      if (trnData.type === "event") {
        const isJoined = trnItem.player_status ? true : false;
        this.allEventPlayerJoined.update((prev) => {
          return __spreadProps(__spreadValues({}, prev), { [trnData.id]: isJoined });
        });
        if (trnData.id === this.storage.trnEventRunning?.id) {
          this._status.set("playing-event");
        }
      }
      trnItem.prize_notifications?.forEach((notification) => {
        const prizeNotification = createPrizeNotification(notification, this.account, trnData.exchangeRate);
        prizeNotification.type = trnData.type;
        prizeList.push(prizeNotification);
      });
    });
    this._trnList.set(list);
    this._prizeNotificationList.set(prizeList);
  }
  /** 目前正在進行的比賽資料 */
  betDataTrn = computed(() => {
    const trnId = this._betDataTrnId();
    if (!trnId) {
      return null;
    }
    return this.trnList().find((trn) => trn.id === trnId) || null;
  });
  /** 如果需要就更新Trn列表 */
  updateTrnListIfNeeded() {
    if (this.needUpdateTrnList()) {
      this.sendEventList();
      this.needUpdateTrnList.set(false);
    }
  }
  /** 發送賽事列表請求 */
  sendEventList(filterType = "") {
    const request = {
      action: "tournament.event.list",
      payload: {
        filter_type: filterType,
        currency: this.currency,
        game_code: this.session.gameId?.toString() || ""
      }
    };
    this.api.sendInfoMsg("Tournament", request);
  }
  /** 發送快速配對請求 */
  sendJoinQuick() {
    const request = {
      action: "tournament.event.join",
      payload: {
        tournament_id: this.trnQuick()?.id || "",
        currency: this.currency,
        stake_amount: calc.c2s(this.wallet.bet()),
        nickname: this.nickname
      }
    };
    this.roomTier.set(this.currentTier());
    this.api.sendInfoMsg("Tournament", request);
    this._status.set("joining-quick");
  }
  sendCancelJoinQuick() {
    const request = {
      action: "tournament.event.cancel",
      payload: {}
    };
    this.api.sendInfoMsg("Tournament", request);
    this._status.set("canceling-quick");
    this.roomCancellingSubject.next();
  }
  /** 是否啟動按照heartbeatInterval的間隔發送心跳 */
  enabledHeartbeat(enabled) {
    this.heartbeatSubscription?.unsubscribe();
    this.heartbeatSubscription = null;
    if (!enabled)
      return;
    const intervalSeconds = this.roomHeartbeatInterval();
    if (!intervalSeconds)
      return;
    this.heartbeatSubscription = interval(intervalSeconds * 1e3).subscribe(() => {
      const tournamentId = this._betDataTrnId();
      if (!tournamentId)
        return;
      const request = {
        action: "tournament.queue.heartbeat",
        payload: { tournament_id: tournamentId }
      };
      this.api.sendInfoMsg("Tournament", request);
    });
  }
  /** 發送長期競賽加入請求 */
  sendJoinEvent(eventId) {
    const request = {
      action: "tournament.event.join",
      payload: {
        tournament_id: eventId,
        currency: this.currency,
        stake_amount: calc.c2s(this.wallet.bet()),
        nickname: this.nickname
      }
    };
    this.api.sendInfoMsg("Tournament", request);
    this._status.set("joining-event");
  }
  /** 發送活動排名請求 */
  sendEventRanking(eventId) {
    const request = {
      action: "tournament.event.ranking",
      payload: {
        tournament_id: eventId
      }
    };
    this.api.sendInfoMsg("Tournament", request);
  }
  /** 詳細頁面的分頁排行榜 */
  sendEvnetLeaderboard(eventId, page = 1, pageSize = 10) {
    const request = {
      action: "tournament.event.leaderboard",
      payload: {
        tournament_id: eventId,
        page,
        page_size: pageSize
      }
    };
    this.api.sendInfoMsg("Tournament", request);
  }
  /** 請求獎項通知 */
  sendPrizeRequest() {
    if (this.prizeNotificationList().length === 0) {
      return;
    }
    const notification = this.prizeNotificationList()[0];
    this.prizeNotificationSubject.next(notification);
  }
  /** 確認獎項通知 */
  sendPrizeAck(id) {
    const request = {
      action: "tournament.prize.ack",
      payload: { notification_id: id }
    };
    const updatedList = this.prizeNotificationList().filter((item) => item.notificationId !== id);
    this._prizeNotificationList.set(updatedList);
    this.api.sendInfoMsg("Tournament", request);
  }
  sendPlayerHistory(limit, offset) {
    const request = {
      action: "tournament.player.history",
      payload: {
        limit,
        offset
      }
    };
    this.api.sendInfoMsg("Tournament", request);
  }
  /** 執行自訂的Action */
  sendCustomAction(action) {
    const request = {
      action
    };
    this.api.sendInfoMsg("Tournament", request);
  }
  /** 直接開啟長期賽事頁面 */
  openEventRace(eventId) {
    if (!this.allEventPlayerJoined()[eventId]) {
      this.sendJoinEvent(eventId);
      return;
    }
    this._betDataTrnId.set(eventId);
    this._status.set("matching-event");
    const cached = this.allEventCachedData()[eventId];
    if (!cached) {
      this.sendEventRanking(eventId);
      return;
    }
    const data = {
      id: eventId,
      rank: cached.rank,
      playersList: cached.playersList,
      currentPool: cached.currentPool
    };
    const endTime = this.trnEventList()?.find((trn) => trn.id === eventId)?.endTime || null;
    this.eventEndedTime.set(endTime);
    this.eventPlayerList.set(data.playersList);
    this.eventPrize.set(data.currentPool);
    this.eventRank.set(data.rank);
    this.eventRaceReadySubject.next(data);
    this.enableBetData(true);
    this._status.set("playing-event");
  }
  /** 是否啟用 BetData, 會從wallet.trnSetting()取得 */
  betDataEnabled = computed(() => {
    if (!this.wallet.trnSetting())
      return false;
    const trnId = this._betDataTrnId();
    if (!trnId)
      return false;
    return this.wallet.trnSetting()?.id === trnId;
  });
  /** 暫時啟用/關閉 BetData, 維持betDataTrn()不變 */
  enableBetData(enable) {
    if (!enable) {
      this.wallet.trnSetting.set(null);
      this.enableBetListLimit(false);
      return;
    }
    this.enableBetListLimit(true);
    const setting = {
      id: this.betDataTrn()?.id || "",
      roomId: this.roomId() || "",
      feeRatio: this.betDataFeeRatio()
    };
    this.wallet.trnSetting.set(setting);
  }
  /** 是否啟用 BetList限制 */
  enableBetListLimit(enable) {
    if (!enable) {
      this.wallet.trnBetList.set(null);
      return;
    }
    if (this.betDataTrn()?.type === "event") {
      this.wallet.trnBetList.set(null);
      return;
    }
    const betList = createTrnBetList(this.wallet.baseBetList(), this.roomTier()?.maxStakeAmount || null, this.roomTier()?.minStakeAmount || null);
    if (betList.length === 0) {
      this.logger.warn("trn-ctrl.service: Tournament BetData: No available bet list for current tier.");
      return;
    }
    if (betList.indexOf(this.wallet.bet()) === -1) {
      if (this.wallet.bet() < betList[0]) {
        this.wallet.updateBet(betList[0]);
      }
      if (this.wallet.bet() > betList[betList.length - 1]) {
        this.wallet.updateBet(betList[betList.length - 1]);
      }
    }
    this.wallet.trnBetList.set(betList);
  }
  /** 更新活動列表 */
  processEventList(response) {
    const list = response.data.events.map((item) => {
      return formatTrnLogin(item, this.session.language, this.account);
    });
    this._trnList.set(list);
  }
  /** 點擊Find Match之後 處理開始Matching的回應 */
  processJoining(response) {
    const id = response.data.tournament_id;
    this._betDataTrnId.set(id);
    this.roomHeartbeatInterval.set(response.data.heartbeat_interval_seconds);
    this.matchingStartTime.set((/* @__PURE__ */ new Date()).getTime());
    const isQuickMatch = this.trnQuick()?.id === id;
    if (isQuickMatch) {
      const data = {
        id
      };
      this.enableBetListLimit(true);
      if (this._status() !== "playing-quick") {
        this.roomMatchingSubject.next(data);
        this._status.set("matching-quick");
      }
    } else {
      this.sendEventList();
      this.sendEventRanking(id);
      this._status.set("matching-event");
    }
  }
  /** 更新排隊狀態 */
  processQueueUpdated(response) {
    const data = response.data;
    if (this.currentTier()?.id !== data.tier_id)
      return;
    const updated = {
      tournamentId: data.tournament_id,
      tierId: data.tier_id,
      currentPlayers: data.queue_size
    };
    this.roomCurrentPlayers.set(data.queue_size);
    this.notifyQueueUpdatedSubject.next(updated);
  }
  /** 開啟通知排隊等待狀態 */
  processTrnQueueWaiting(response) {
    const data = response.data;
    if (this.status() !== "idle")
      return;
    if (this.currentTier()?.id !== data.tier_id)
      return;
    const updated = {
      tournamentId: data.tournament_id,
      tierId: data.tier_id,
      currentPlayers: data.queue_size,
      maxPlayers: data.max_players
    };
    this.notifyQueueCreatedSubject.next(updated);
  }
  /** 處理玩家被移出排隊 */
  processQueuePlayerRemoved(response) {
    const data = response.data;
    if (this._betDataTrnId() !== data.tournament_id)
      return;
    this.closeQuickRoom();
    this.roomCancelledSubject.next();
  }
  /** 遊戲準備好 開始競賽 */
  processRoomReady(response) {
    const list = createApRowListByPlayerList(response.data.players || [], this.account);
    const prize = this.roomTier()?.totalPrize || null;
    this._roomId.set(response.data.room_id);
    this.roomEndTime.set(response.data.end_time);
    this.roomPlayerList.set(list);
    this.roomPrize.set(prize || null);
    this.roomCurrentPlayers.set(list.length);
    this.roomRank.set(null);
    const data = {
      endTime: response.data.end_time,
      playersList: list
    };
    this.roomReadySubject.next(data);
    this._status.set("playing-quick");
    this.enableBetData(true);
  }
  /** 處理Server房間狀態更新 */
  processRoomStateUpdated(response) {
    const serverStatus = response.data.status;
    const list = updateApRowListByRankings(this.roomPlayerList(), response.data.rankings, this.trnQuick()?.exchangeRate || 1);
    const totalPrize = calc.s2c(response.data.total_pool_amount) * (this.trnQuick()?.exchangeRate || 1);
    const userRank = list.find((p) => p.highlighted)?.rank || null;
    this.roomPrize.set(totalPrize);
    this.roomPlayerList.set(list);
    this.roomRank.set(userRank);
    const data = {
      id: response.data.room_id,
      rank: userRank,
      playersList: list,
      currentPool: totalPrize
    };
    if (serverStatus === "matching") {
      this.enableBetListLimit(true);
      this.roomCurrentPlayers.set(response.data.current_players);
    }
    if (serverStatus === "playing") {
      this.roomUpdatedSubject.next(data);
    }
    if (serverStatus === "ending") {
      this._betDataTrnId.set(null);
      this.closeQuickRoom();
      this.roomEndingSubject.next(data);
    }
    if (serverStatus === "cancelled") {
      this.closeQuickRoom();
      this._status.set("canceling-quick");
      this.roomCancellingSubject.next();
      firstValueFrom(timer(2e3)).then(() => {
        this.closeQuickRoom();
        this.roomCancelledSubject.next();
      });
    }
  }
  /** 處理Server獎項通知 */
  processPrizeAwarded(response) {
    const exchangeRate = this.trnEventList()?.find((trn) => trn.id === response.data.tournament_id)?.exchangeRate || 1;
    const prizeNotification = createPrizeNotification(response.data, this.account, exchangeRate);
    prizeNotification.type = response.data.tournament_id === this.trnQuick()?.id ? "quick" : "event";
    this.prizeNotificationSubject.next(prizeNotification);
  }
  /** 處理活動排名回應 */
  processEventRanking(response) {
    const exchangeRate = this.trnEventList()?.find((trn) => trn.id === response.data.tournament_id)?.exchangeRate || 1;
    const data = {
      id: response.data.tournament_id,
      rank: response.data.player_rank?.rank || null,
      playersList: createApRowListByRankings(response.data.rankings || [], this.account, exchangeRate),
      currentPool: calc.s2c(response.data.current_pool) * exchangeRate
    };
    this.allEventCachedData.update((prev) => __spreadProps(__spreadValues({}, prev), { [data.id]: data }));
    this.eventPlayerList.set(data.playersList);
    this.eventPrize.set(data.currentPool);
    this.eventRank.set(data.rank);
    if (this._status() === "idle") {
      this.eventRankingSubject.next(data);
    }
    if (this._status() === "matching-event") {
      const endTime = this.trnEventList()?.find((trn) => trn.id === data.id)?.endTime || null;
      this.eventEndedTime.set(endTime);
      this.eventRaceReadySubject.next(data);
      this.enableBetData(true);
      this._status.set("playing-event");
    }
    if (this._status() === "playing-event") {
      this.eventRaceUpdatedSubject.next(data);
    }
  }
  processEventLeaderboard(response) {
    return __async(this, null, function* () {
      const exchangeRate = this.trnEventList()?.find((trn) => trn.id === response.data.tournament_id)?.exchangeRate || 1;
      const leaderBoard = {
        page: response.data.page,
        pageSize: response.data.page_size,
        totalPages: response.data.total_pages,
        list: createApRowListByRankings(response.data.rankings || [], this.account, exchangeRate)
      };
      this.eventLeaderboardSubject.next(leaderBoard);
    });
  }
  processEventRefresh(response) {
    this.eventRefreshSubject.next(response);
    this.needUpdateTrnList.set(true);
    this.updateTrnListIfNeeded();
  }
  processPlayerHistory(response) {
    return __async(this, null, function* () {
      const totalCount = response.data.total_count;
      const pageSize = response.data.limit;
      const totalPages = Math.ceil(totalCount / pageSize);
      const page = Math.floor(response.data.offset / pageSize) + 1;
      const playHistory = {
        page,
        pageSize,
        totalPages,
        list: response.data.history.map((item) => {
          const names = safeParse(item.tournament_name);
          const name = names ? names[this.session.language] : "Unknown Tournament";
          return {
            name,
            id: item.room_id,
            type: item.event_type === "quick_match" ? "quick" : "event",
            rank: item.final_rank,
            score: item.final_score,
            prize: calc.s2c(item.prize_amount),
            /** unix timestamp, 單位為毫秒 */
            time: item.finished_at,
            /** 暫時放入固定值 */
            images: "assets/images/tournament/event-race/banner_default.png",
            status: item.status
          };
        })
      };
      this.playerHistorySubject.next(playHistory);
    });
  }
  /** 給Debug Panel用, 強制更新Room State */
  debugRoomUpdate(data) {
    this.roomUpdatedSubject.next(data);
  }
  /** 給Debug Panel用, 強制觸發Signal */
  debugToggleSignal(key) {
    this.debugSignalSubject.next(key);
  }
  debugTogglePage(page) {
    this.debugPageSubject.next(page);
  }
  debugAssignRoomUpdate(data) {
    this.roomUpdatedSubject.next(data);
  }
  processCancelJoin(response) {
    if (this.trnQuick() && this._status() === "canceling-quick") {
      this.closeQuickRoom();
      this.roomCancelledSubject.next();
    }
  }
  processError(error) {
    this.errorSubject.next(error);
    this.closeQuickRoom();
    this.closeEventRace();
  }
  static \u0275fac = function TrnCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrnCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TrnCtrlService, factory: _TrnCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrnCtrlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  generatePlayerList,
  TrnCtrlService
};
//# sourceMappingURL=chunk-T55X5QHE.js.map
