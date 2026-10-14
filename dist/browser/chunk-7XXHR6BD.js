import {
  environment as environment2
} from "./chunk-USS23RIW.js";
import {
  PlayerWalletService
} from "./chunk-5GFZDTRR.js";
import {
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-OW6577YR.js";
import {
  AppInterfaceService,
  eCashDropMessageType
} from "./chunk-TLQLKLDD.js";
import {
  LoggerService,
  calc,
  decimal_default
} from "./chunk-CFCPEQLG.js";
import {
  ClientSessionService,
  StorageCtrlService,
  environment
} from "./chunk-54ITVL2G.js";
import {
  Injectable,
  Subject,
  __spreadProps,
  __spreadValues,
  computed,
  delay,
  effect,
  inject,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/app/services/campaign-ctrl/campaign-info-msg.interface.ts
var PromoEnum;
(function(PromoEnum2) {
  PromoEnum2[PromoEnum2["CashDrop"] = 4] = "CashDrop";
  PromoEnum2[PromoEnum2["FreeBonus"] = 5] = "FreeBonus";
  PromoEnum2[PromoEnum2["FreeSpins"] = 6] = "FreeSpins";
})(PromoEnum || (PromoEnum = {}));

// src/app/services/cash-drop/cash-drop.service.ts
var CashDropService = class _CashDropService {
  api = inject(AppInterfaceService);
  session = inject(ClientSessionService);
  storage = inject(StorageCtrlService);
  wallet = inject(PlayerWalletService);
  /** 所有Cash Drop */
  _cashDrops = signal([]);
  // 前端使用的Cash Drop
  /** 取得所有Cash Drop */
  cashDrops = this._cashDrops.asReadonly();
  /** 按照結束時間排序的Cash Drop, endTime越小越靠前 */
  cashDropsByEndTime = computed(() => {
    return [...this._cashDrops()].sort((a, b) => a.endTime - b.endTime);
  });
  /** 目前最快要結束的Cash Drop */
  focusCashDrop = computed(() => {
    const now = Date.now();
    const ongoingCashDrops = this.cashDropsByEndTime().filter((cashDrop) => cashDrop.beginTime <= now && cashDrop.endTime >= now);
    if (ongoingCashDrops.length > 0) {
      return ongoingCashDrops[0];
    }
    const cashDrops = this.cashDropsByEndTime();
    return cashDrops.length > 0 ? cashDrops[0] : null;
  });
  /** 目前最快要結束的Cash Drop的最小bet */
  focusCashDropMinBet = computed(() => {
    const focus = this.focusCashDrop();
    return focus ? focus.minBet : 0;
  });
  /** 是否超過最小投注額 */
  isOverMinBet = computed(() => {
    const minBet = this.focusCashDropMinBet();
    const result = minBet > 0 && this.wallet.bet() >= minBet;
    return result;
  });
  /** 是否顯示不符合投注額的Toast */
  isShowFailToast = computed(() => {
    if (this.cashDrops().length === 0)
      return false;
    const focus = this.focusCashDrop();
    if (!focus)
      return false;
    const now = Date.now();
    if (focus.beginTime > now)
      return false;
    if (this.wallet.campaignSetting())
      return false;
    return !this.isOverMinBet();
  });
  /** 是否顯示符合投注額的Toast */
  isShowPassToast = computed(() => {
    if (this.cashDrops().length === 0)
      return false;
    const focus = this.focusCashDrop();
    if (!focus)
      return false;
    const now = Date.now();
    if (focus.beginTime > now)
      return false;
    if (this.wallet.campaignSetting())
      return false;
    return this.isOverMinBet();
  });
  prizeListSubject = new Subject();
  prizeList$ = this.prizeListSubject.asObservable();
  latestWinnersSubject = new Subject();
  latestWinners$ = this.latestWinnersSubject.asObservable();
  biggestWinnersSubject = new Subject();
  biggestWinners$ = this.biggestWinnersSubject.asObservable();
  mostWinnersSubject = new Subject();
  mostWinners$ = this.mostWinnersSubject.asObservable();
  youWinsSubject = new Subject();
  youWins$ = this.youWinsSubject.asObservable();
  ruleDataSubject = new Subject();
  ruleData$ = this.ruleDataSubject.asObservable();
  userId = computed(() => this.api.loginResultNote()?.nickname ?? "");
  /** 搜尋storage.cashDropClicked是否有對應 userId_cashdropId 的紀錄 */
  hasNew = computed(() => {
    const allClicked = this.storage.cashDropClickedSignal() ?? [];
    return this.cashDrops().some((cd) => !allClicked.includes(`${this.userId()}_${cd.id}`));
  });
  constructor() {
    effect(() => {
      const result = this.api.loginResult();
      untracked(() => {
        this.updateLoginResult(result);
      });
    });
    if (!environment.production) {
      window.cashDrop = this;
    }
    this.api.cashDropResult$.subscribe(this.processCashDropResult.bind(this));
  }
  /** 是否開啟cash drop的tab */
  showTab = computed(() => {
    return this.cashDrops().length > 0;
  });
  updateLoginResult(result) {
    if (!result)
      return;
    this.updateCampaignList(result.note?.campaignlist ?? []);
  }
  /** 從Campaign List的資料更新Cash Drops */
  updateCampaignList(campaignList) {
    if (!campaignList || campaignList.length === 0) {
      return;
    }
    const cashDrops = campaignList.filter((campaign) => campaign.type === PromoEnum.CashDrop);
    const formattedCashDrops = cashDrops.map((cashDrop) => ({
      id: cashDrop.campaign_id,
      name: cashDrop.name,
      minBet: calc.s2c(cashDrop.min_bet_amount),
      beginTime: (/* @__PURE__ */ new Date(cashDrop.begintime.replace(" ", "T") + "Z")).getTime(),
      endTime: (/* @__PURE__ */ new Date(cashDrop.endtime.replace(" ", "T") + "Z")).getTime(),
      rawData: cashDrop
    }));
    this._cashDrops.update((current) => {
      for (const newCashDrop of formattedCashDrops) {
        const existingIndex = current.findIndex((c) => c.id === newCashDrop.id);
        if (existingIndex === -1) {
          current.push(newCashDrop);
        } else {
          current[existingIndex] = newCashDrop;
        }
      }
      return current;
    });
  }
  requestPageData(id) {
    const ruleDataRequest = {
      campaign_id: id,
      currency: this.api.currencySymbol() || "",
      language: this.session.language || ""
    };
    const prizeListRequest = {
      campaign_id: id,
      currency: this.api.currencySymbol() || ""
    };
    const winnerListRequest = {
      campaign_id: id,
      currency: this.api.currencySymbol() || "",
      page: 1,
      row_count: 100
    };
    this.api.getCashDropResult("PrizeList", prizeListRequest);
    this.api.getCashDropResult("RuleData", ruleDataRequest);
    this.api.getCashDropResult("LatestWinnerList", winnerListRequest);
    this.api.getCashDropResult("BiggestWinnerList", winnerListRequest);
    this.api.getCashDropResult("MostWinnerList", winnerListRequest);
    this.api.getCashDropResult("YouWinList", winnerListRequest);
  }
  processCashDropResult(message) {
    const mapWinners = (list) => list.map((w, index) => ({
      isYou: w.is_you !== -1,
      index,
      player: w.player_id,
      prize: calc.s2c(w.prize_amount)
    }));
    switch (message.cd_type) {
      case eCashDropMessageType.eCDMT_cd_type_Prize_List: {
        const res = message;
        this.prizeListSubject.next(res.prize_list.map((p, index) => ({
          index,
          prize: calc.s2c(p.prize_amount),
          left: p.prize_left
        })));
        break;
      }
      case eCashDropMessageType.eCDMT_cd_type_Rule_Data: {
        const res = message;
        res.rule_data.begin_time = (/* @__PURE__ */ new Date(res.rule_data.begin_time.replace(" ", "T") + "Z")).toLocaleString(this.session.locale, { hour12: false });
        res.rule_data.end_time = (/* @__PURE__ */ new Date(res.rule_data.end_time.replace(" ", "T") + "Z")).toLocaleString(this.session.locale, { hour12: false });
        res.rule_data.min_bet_amount = calc.s2c(res.rule_data.min_bet_amount);
        res.rule_data.total_prizes_amount = calc.s2c(res.rule_data.total_prizes_amount);
        this.ruleDataSubject.next(res.rule_data);
        break;
      }
      case eCashDropMessageType.eCDMT_cd_type_Latest_Winner_List: {
        const res = message;
        this.latestWinnersSubject.next(mapWinners(res.winner_list));
        break;
      }
      case eCashDropMessageType.eCDMT_cd_type_Biggest_Winner_List: {
        const res = message;
        this.biggestWinnersSubject.next(mapWinners(res.winner_list));
        break;
      }
      case eCashDropMessageType.eCDMT_cd_type_Most_Winner_List: {
        const res = message;
        this.mostWinnersSubject.next(mapWinners(res.winner_list));
        break;
      }
      case eCashDropMessageType.eCDMT_cd_type_You_Win_List: {
        const res = message;
        this.youWinsSubject.next(mapWinners(res.winner_list));
        break;
      }
    }
  }
  static \u0275fac = function CashDropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CashDropService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CashDropService, factory: _CashDropService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CashDropService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pages/event-center/event-center.type.ts
var EventcenterTabNameList = [
  "buy-feature",
  "tournament",
  "campaign",
  "cash-drop",
  "promo-code",
  "leader-board",
  "reward-system"
];

// src/app/services/event-center-ctrl/event-center-ctrl.service.ts
var EventCenterCtrlService = class _EventCenterCtrlService {
  /** 是否顯示 Event Center component */
  _isVisible = signal(false);
  /** 是否顯示 Event Center component */
  isVisible = this._isVisible.asReadonly();
  /** 主要路徑: buy-feature,  campaign, 請參靠EventcenterTabName*/
  _path = signal("buy-feature");
  /** 主要路徑: buy-feature,  campaign, 請參靠EventcenterTabName*/
  path = this._path.asReadonly();
  /** 次要路徑: buy-feature/tournmentId, campaign/campaignId */
  _subPath = signal("");
  /** 次要路徑: buy-feature/tournmentId, campaign/campaignId */
  subPath = this._subPath.asReadonly();
  constructor() {
  }
  /** 打開 Event Center，並設定要打開的分頁路徑
   *  因為Event Center裡面有分主要路徑跟次要路徑的概念，所以任何切換Tab或是上下頁的切換都必須呼叫這個函式，並帶入正確的路徑參數
   * @param target 目標路徑格式為 mainPath/subPath，例如 "tournament/12345" 或 "campaign/campaignGroupId"，如果沒有提供則預設打開 "buy-feature" 分頁
  */
  open(target) {
    this._path.set("buy-feature");
    this._subPath.set("");
    this._isVisible.set(true);
    if (!target) {
      return;
    }
    const path = target.split("/")[0];
    if (!EventcenterTabNameList.includes(path)) {
      return;
    }
    this._path.set(path);
    const subPath = target.split("/").slice(1).join("/");
    if (subPath) {
      this._subPath.set(subPath);
    }
  }
  /** 關閉 Event Center，並重置路徑 */
  close() {
    this._isVisible.set(false);
    this._path.set("buy-feature");
    this._subPath.set("");
  }
  back() {
    this._subPath.set("");
  }
  static \u0275fac = function EventCenterCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventCenterCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventCenterCtrlService, factory: _EventCenterCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventCenterCtrlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/campaign-ctrl/campaign-ctrl.interface.ts
var PromoCodeExchangeTypeEnum;
(function(PromoCodeExchangeTypeEnum2) {
  PromoCodeExchangeTypeEnum2[PromoCodeExchangeTypeEnum2["AllClosed"] = 0] = "AllClosed";
  PromoCodeExchangeTypeEnum2[PromoCodeExchangeTypeEnum2["OpenExchange"] = 1] = "OpenExchange";
  PromoCodeExchangeTypeEnum2[PromoCodeExchangeTypeEnum2["OpenExchangeAndQR"] = 2] = "OpenExchangeAndQR";
})(PromoCodeExchangeTypeEnum || (PromoCodeExchangeTypeEnum = {}));
var CampaignPopupId;
(function(CampaignPopupId2) {
  CampaignPopupId2[CampaignPopupId2["ReceivedFreeBonus"] = 1] = "ReceivedFreeBonus";
  CampaignPopupId2[CampaignPopupId2["FreeBonusFullyClaim"] = 2] = "FreeBonusFullyClaim";
  CampaignPopupId2[CampaignPopupId2["WithdrawSuccess"] = 3] = "WithdrawSuccess";
  CampaignPopupId2[CampaignPopupId2["OnGoingFreeBonus"] = 4] = "OnGoingFreeBonus";
  CampaignPopupId2[CampaignPopupId2["ReceivedFreeSpin"] = 13] = "ReceivedFreeSpin";
  CampaignPopupId2[CampaignPopupId2["RequiredTurnover"] = 14] = "RequiredTurnover";
  CampaignPopupId2[CampaignPopupId2["FreeSpinWithdrawMaximum"] = 15] = "FreeSpinWithdrawMaximum";
  CampaignPopupId2[CampaignPopupId2["OnGoingFreeSpin"] = 17] = "OnGoingFreeSpin";
  CampaignPopupId2[CampaignPopupId2["WithdrawFailed"] = 19] = "WithdrawFailed";
  CampaignPopupId2[CampaignPopupId2["UnderCondition"] = 21] = "UnderCondition";
  CampaignPopupId2[CampaignPopupId2["SucessFullyClaim"] = 22] = "SucessFullyClaim";
  CampaignPopupId2[CampaignPopupId2["FailFullyRedeemed"] = 23] = "FailFullyRedeemed";
  CampaignPopupId2[CampaignPopupId2["FreeSpinFullyClaim"] = 16] = "FreeSpinFullyClaim";
  CampaignPopupId2[CampaignPopupId2["WaitToJoin"] = 100] = "WaitToJoin";
  CampaignPopupId2[CampaignPopupId2["JoinedSuccess"] = 101] = "JoinedSuccess";
  CampaignPopupId2[CampaignPopupId2["OfferClaimSuccess"] = 102] = "OfferClaimSuccess";
  CampaignPopupId2[CampaignPopupId2["OfferClaimFail"] = 103] = "OfferClaimFail";
})(CampaignPopupId || (CampaignPopupId = {}));

// src/app/services/campaign-ctrl/campaign-action.interface.ts
var CampaignOfferType;
(function(CampaignOfferType2) {
  CampaignOfferType2["FreeBonus"] = "REWARD_TYPE_FREE_BONUS";
  CampaignOfferType2["FreeSpin"] = "REWARD_TYPE_FREE_SPIN";
})(CampaignOfferType || (CampaignOfferType = {}));
var CampaignOfferState;
(function(CampaignOfferState2) {
  CampaignOfferState2["Unspecified"] = "OFFER_STATE_UNSPECIFIED";
  CampaignOfferState2["NotEnrolled"] = "OFFER_STATE_NOT_ENROLLED";
  CampaignOfferState2["Locked"] = "OFFER_STATE_LOCKED";
  CampaignOfferState2["Claimable"] = "OFFER_STATE_CLAIMABLE";
  CampaignOfferState2["Exhausted"] = "OFFER_STATE_EXHAUSTED";
  CampaignOfferState2["Granted"] = "OFFER_STATE_GRANTED";
  CampaignOfferState2["InPlay"] = "OFFER_STATE_IN_PLAY";
  CampaignOfferState2["Qualified"] = "OFFER_STATE_QUALIFIED";
  CampaignOfferState2["Settling"] = "OFFER_STATE_SETTLING";
  CampaignOfferState2["Settled"] = "OFFER_STATE_SETTLED";
  CampaignOfferState2["SettleFailed"] = "OFFER_STATE_SETTLE_FAILED";
  CampaignOfferState2["Voided"] = "OFFER_STATE_VOIDED";
  CampaignOfferState2["BalanceDepleted"] = "OFFER_STATE_BALANCE_DEPLETED";
  CampaignOfferState2["Expired"] = "OFFER_STATE_EXPIRED";
  CampaignOfferState2["WithdrawExpired"] = "OFFER_STATE_WITHDRAW_EXPIRED";
})(CampaignOfferState || (CampaignOfferState = {}));

// src/app/services/campaign-ctrl/campaign-ctrl.function.ts
function offerAmount(amount) {
  return calc.s2c(Number(amount?.scaledAmount ?? 0));
}
function offerCount(value) {
  return Number(value ?? 0);
}
function offerStatus(offer) {
  switch (offer.state) {
    // 尚未報名
    case CampaignOfferState.NotEnrolled:
      return "waitingToJoin";
    // 領取條件未達成
    case CampaignOfferState.Locked:
      return "underCondition";
    // 已達成領取條件 / 已授予 / 使用中, 細部狀態看CampaignProgressStatus
    case CampaignOfferState.Claimable:
    case CampaignOfferState.Granted:
    case CampaignOfferState.InPlay:
      return "inProgress";
    // 已達提領門檻, 等待campaign.reward.withdraw
    case CampaignOfferState.Qualified:
      return "readyToWithdraw";
    // 已送出提領, 入帳中或入帳失敗重試中都不再顯示提領操作
    case CampaignOfferState.Settling:
    case CampaignOfferState.Settled:
    case CampaignOfferState.SettleFailed:
      return "completed";
    // 名額用完、商務取消、餘額用完、過期、提領逾期
    case CampaignOfferState.Exhausted:
    case CampaignOfferState.Voided:
    case CampaignOfferState.BalanceDepleted:
    case CampaignOfferState.Expired:
    case CampaignOfferState.WithdrawExpired:
      return "failed";
    // Unspecified或未知的state, 後端正常不會送出
    default:
      return "failed";
  }
}
function offerProgressStatus(offer) {
  switch (offer.state) {
    // 領取條件已達成, 等待玩家領取
    case CampaignOfferState.Claimable:
      return "claimable";
    // 已授予, 還沒用它下過注
    case CampaignOfferState.Granted:
      return "granted";
    // 用過了, 未達提領門檻
    case CampaignOfferState.InPlay:
      return "inPlay";
    default:
      return void 0;
  }
}
function processOfferCondition(campaign, offer) {
  if (campaign.status === "underCondition") {
    let condition = {};
    const target = offerAmount(offer.progress?.turnoverLimit);
    if (target > 0) {
      const current = offerAmount(offer.progress?.turnover);
      const remaining = decimal_default.max(0, new decimal_default(target).sub(current)).toNumber();
      const progress = target === 0 ? 0 : Math.min(100, new decimal_default(current).div(target).mul(100).toDecimalPlaces(0, decimal_default.ROUND_HALF_UP).toNumber());
      condition.turnover = { current, target, remaining, progress };
    }
    const betCountCurrent = offerCount(offer.progress?.betCount);
    const betCountTarget = offerCount(offer.progress?.betCountLimit);
    if (betCountTarget > 0) {
      condition.betCount = {
        current: betCountCurrent,
        target: betCountTarget,
        remaining: Math.max(0, betCountTarget - betCountCurrent),
        progress: Math.min(100, Math.round(betCountCurrent / betCountTarget * 100))
      };
    }
    campaign.condition = condition;
    return;
  }
}
function conditionProgress(current, target) {
  if (target === 0)
    return 0;
  return Math.min(100, new decimal_default(current).div(target).mul(100).toDecimalPlaces(0, decimal_default.ROUND_HALF_UP).toNumber());
}
function addCampaignConditionProgress(condition, turnover) {
  const result = __spreadValues({}, condition);
  if (condition.turnover) {
    const { target } = condition.turnover;
    const current = Math.min(target, new decimal_default(condition.turnover.current).add(turnover).toNumber());
    const remaining = decimal_default.max(0, new decimal_default(target).sub(current)).toNumber();
    result.turnover = { current, target, remaining, progress: conditionProgress(current, target) };
  }
  if (condition.betCount) {
    const { target } = condition.betCount;
    const current = Math.min(target, condition.betCount.current + 1);
    const remaining = Math.max(0, target - current);
    result.betCount = { current, target, remaining, progress: conditionProgress(current, target) };
  }
  return result;
}
function isCampaignConditionMet(condition) {
  const contents = [condition.turnover, condition.betCount].filter((c) => !!c);
  if (contents.length === 0)
    return false;
  return contents.every((c) => c.current >= c.target);
}
function createFreeBonusFromOffer(offer) {
  const status = offerStatus(offer);
  const progressStatus = offerProgressStatus(offer);
  const totalAmount = offerAmount(offer.rewardValue);
  const campaign = {
    id: offer.ref.campaignId,
    offerId: offer.offerId,
    walletId: Number(offer.bonusWalletId),
    type: "freeBonus",
    name: offer.name,
    status,
    totalAmount,
    balance: totalAmount,
    _rawData: offer,
    beginTime: offer.beginTime,
    endTime: offer.endTime,
    lastBetTime: 0,
    progressStatus,
    /** 待實作 */
    progressCurrent: 0,
    progressTotal: offerAmount(offer.rewardValue),
    /** 待實作 */
    progressRemaining: offerAmount(offer.rewardValue),
    isFullyClaimed: false,
    displayType: "freeBonus",
    groupId: offer.groupId ?? null
  };
  processOfferCondition(campaign, offer);
  return campaign;
}
function createFreeSpinsFromOffer(offer) {
  const status = offerStatus(offer);
  const totalAmount = offerAmount(offer.rewardValue);
  const campaign = {
    id: offer.ref.campaignId,
    offerId: offer.offerId,
    type: "freeSpins",
    name: offer.name,
    status,
    spinCount: offer.freeSpinCount ?? 0,
    // 新版panel.get目前沒有提供每把的bet金額
    spinBet: 0,
    totalAmount,
    balance: totalAmount,
    _rawData: offer,
    beginTime: offer.beginTime,
    endTime: offer.endTime,
    lastBetTime: 0,
    progressStatus: offerProgressStatus(offer),
    /** 待實作 */
    progressCurrent: 0,
    /** 待實作 */
    progressTotal: 0,
    /** 待實作 */
    progressRemaining: 0,
    isFullyClaimed: false,
    displayType: "freeSpins",
    groupId: offer.groupId ?? null
  };
  processOfferCondition(campaign, offer);
  return campaign;
}
function formatCampaignPanelOffers(offers) {
  const ret = {
    freeBonus: [],
    freeSpins: []
  };
  for (const offer of offers ?? []) {
    if (offer.type === CampaignOfferType.FreeSpin) {
      ret.freeSpins.push(createFreeSpinsFromOffer(offer));
    } else if (offer.type === CampaignOfferType.FreeBonus) {
      ret.freeBonus.push(createFreeBonusFromOffer(offer));
    }
  }
  return ret;
}
function formatCampaignOffer(offer) {
  if (offer.type === CampaignOfferType.FreeSpin)
    return createFreeSpinsFromOffer(offer);
  if (offer.type === CampaignOfferType.FreeBonus)
    return createFreeBonusFromOffer(offer);
  return null;
}
function refreshCampaignGroups(groups, campaignList) {
  return groups.map((group) => {
    const campaigns = campaignList.filter((c) => group.campaignIdList.includes(c.id));
    return __spreadProps(__spreadValues({}, group), {
      visible: !campaigns.every((c) => c.status === "completed"),
      endTime: Math.max(0, ...campaigns.map((c) => c.endTime))
    });
  });
}
function formatCampaignPanelGroups(groups, campaignList, assetUrl = "") {
  const result = [];
  for (const groupItem of groups ?? []) {
    const list = groupItem.campaignIds.filter((campaignId) => campaignList.some((c) => c.id === campaignId));
    if (list.length === 0)
      continue;
    const allCompleted = campaignList.filter((c) => list.includes(c.id)).every((c) => c.status === "completed");
    result.push({
      visible: !allCompleted,
      id: groupItem.groupId,
      title: groupItem.title ?? "Noname",
      image: `/ap-promo-images/${groupItem.bannerUrl || "150e4004-d72d-4a44-afca-86c303d4825b.png"}`,
      campaignIdList: list,
      description: "",
      weight: groupItem.weight,
      endTime: Math.max(0, ...list.map((campaignId) => campaignList.find((c) => c.id === campaignId)?.endTime ?? 0))
    });
  }
  result.sort((a, b) => b.weight - a.weight);
  return result;
}

// src/app/services/campaign-ctrl/campaign-ctrl.service.ts
var CampaignCtrlService = class _CampaignCtrlService {
  api = inject(AppInterfaceService);
  game = inject(GameIframeCtrlService);
  wallet = inject(PlayerWalletService);
  session = inject(ClientSessionService);
  storage = inject(StorageCtrlService);
  logger = inject(LoggerService);
  /** campaign popup是否啟動*/
  _popupActivated = signal(false);
  /** campaign popup是否啟動*/
  popupActivated = this._popupActivated.asReadonly();
  /** campaign popup 是否啟用 */
  popupEnabled = computed(() => {
    return true;
  });
  /** promo/campaign 訊息彈窗目前是否顯示中 */
  _popupMessageVisible = signal(false);
  /** promo/campaign 訊息彈窗目前是否顯示中 */
  popupMessageVisible = this._popupMessageVisible.asReadonly();
  /** 設定 campaign popup 是否啟動 */
  setPopupActivated(value) {
    this._popupActivated.set(value);
  }
  /** 設定 promo/campaign 訊息彈窗是否顯示中 */
  setPopupMessageVisible(value) {
    this._popupMessageVisible.set(value);
  }
  /** 所有Campaign */
  _campaignList = signal([]);
  /** 所有Campaign */
  campaignList = this._campaignList.asReadonly();
  /** 所有Campaign Group */
  _campaignGroupList = signal([]);
  /** 所有Campaign Group */
  campaignGroupList = this._campaignGroupList.asReadonly();
  /** 目前選取的活動的ID */
  _currentCampaignId = signal(null);
  /** 目前選取的活動的ID */
  currentCampaignId = this._currentCampaignId.asReadonly();
  /** 目前選取的活動 */
  currentCampaign = computed(() => {
    const id = this.currentCampaignId();
    return this.campaignList().find((c) => c.id === id) || null;
  });
  /** Campaign運行中 */
  isRunning = computed(() => !!this.currentCampaign());
  /** Free Spin 運行中 */
  isFreeSpinRunning = computed(() => this.currentCampaign()?.displayType === "freeSpins");
  /** Free Bonus 運行中 */
  isFreeBonusRunning = computed(() => this.currentCampaign()?.displayType === "freeBonus");
  /** status = waitingToJoin的Campaigns */
  waitToJoinCampaigns = computed(() => this.campaignList().filter((c) => c.status === "waitingToJoin"));
  /** status = underCondition的Campaigns */
  underConditionCampaigns = computed(() => this.campaignList().filter((c) => c.status === "underCondition"));
  /** status = inProgress的Campaigns */
  inProgressCampaigns = computed(() => this.campaignList().filter((c) => c.status === "inProgress"));
  // 以下是各種事件的Subject和Observable
  activatedCampaignSubject = new Subject();
  /** 當有活動被啟動的事件, 會帶入被啟動的活動, 沒有活動被啟動(取消選擇)的話會帶入null */
  get activatedCampaign$() {
    return this.activatedCampaignSubject.asObservable();
  }
  /** 收到underCondition狀態的Campaign */
  underConditionSubject = new Subject();
  /** 收到underCondition狀態的Campaign */
  get underCondition$() {
    return this.underConditionSubject.asObservable();
  }
  receivedFreeBonusSubject = new Subject();
  get receivedFreeBonus$() {
    return this.receivedFreeBonusSubject.asObservable();
  }
  receivedFreeSpinSubject = new Subject();
  get receivedFreeSpin$() {
    return this.receivedFreeSpinSubject.asObservable();
  }
  onGoingFreeBonusSubject = new Subject();
  get onGoingFreeBonus$() {
    return this.onGoingFreeBonusSubject.asObservable();
  }
  onGoingFreeSpinSubject = new Subject();
  get onGoingFreeSpin$() {
    return this.onGoingFreeSpinSubject.asObservable();
  }
  requiredTurnoverSubject = new Subject();
  /** 當有free spin需要達到流水需求, 轉成free bonus */
  get requiredTurnover$() {
    return this.requiredTurnoverSubject.asObservable();
  }
  freeSpinWithdrawMaximumSubject = new Subject();
  get freeSpinWithdrawMaximum$() {
    return this.freeSpinWithdrawMaximumSubject.asObservable();
  }
  failedSubject = new Subject();
  get failed$() {
    return this.failedSubject.asObservable();
  }
  successSubject = new Subject();
  get success$() {
    return this.successSubject.asObservable();
  }
  sucessFullyClaimSubject = new Subject();
  get sucessFullyClaim$() {
    return this.sucessFullyClaimSubject.asObservable();
  }
  failFullyRedeemedSubject = new Subject();
  get failFullyRedeemed$() {
    return this.failFullyRedeemedSubject.asObservable();
  }
  openEventCenterCampaignSubject = new Subject();
  get openEventCenterCampaign$() {
    return this.openEventCenterCampaignSubject.asObservable();
  }
  joinedSuccessSubject = new Subject();
  /** 成功加入活動 */
  get joinedSuccess$() {
    return this.joinedSuccessSubject.asObservable();
  }
  offerClaimSuccessSubject = new Subject();
  /** 成功領取活動獎勵 */
  get offerClaimSuccess$() {
    return this.offerClaimSuccessSubject.asObservable();
  }
  offerClaimFailSubject = new Subject();
  /** 領取活動獎勵失敗 */
  get offerClaimFail$() {
    return this.offerClaimFailSubject.asObservable();
  }
  waitToJoinSubject = new Subject();
  /** 等待加入活動 */
  get waitToJoin$() {
    return this.waitToJoinSubject.asObservable();
  }
  userId = computed(() => this.api.loginResultNote()?.nickname ?? "");
  codeExchangeType = signal(PromoCodeExchangeTypeEnum.OpenExchangeAndQR);
  constructor() {
    this.api.loginResult$.pipe(delay(100)).subscribe((result) => this.onLoginResult(result));
    this.api.campaign$.subscribe((response) => this.onCampaignActionResponse(response));
    this.api.spinResult$.subscribe((result) => this.onSpinResult(result));
    if (!environment2.production) {
      window.campaign = this;
    }
    effect(() => {
      if (this.popupActivated()) {
        this.processFirstMessage();
      }
    });
  }
  /** 是否要顯示Campaign在event center的tab條件 */
  showTab = computed(() => {
    return true;
  });
  /** 設定現在使用中的活動錢包, null表示沒有活動被選擇 */
  setCurrentId(id) {
    if (!id) {
      const preId = this.currentCampaignId();
      if (!preId)
        return;
      this._currentCampaignId.set(null);
      this.wallet.campaignSetting.set(null);
      this.activatedCampaignSubject.next(null);
      this.game.send(createApWebMessage("UseCampaign", { campaignId: null }));
      return;
    }
    const campaign = this.campaignList().find((c) => c.id === id);
    this.wallet.updateSpinMode(null);
    if (!campaign)
      return;
    if (campaign.status === "underCondition")
      return;
    if (campaign.status === "completed")
      return;
    this._currentCampaignId.set(id);
    this.wallet.campaignSetting.set(this.currentCampaign());
    this.activatedCampaignSubject.next(campaign);
    this.game.send(createApWebMessage("UseCampaign", { campaignId: id }));
    if (campaign.displayType === "freeBonus") {
      const betList = this.wallet.betList();
      if (betList && betList.length > 0) {
        this.wallet.updateBet(betList[0]);
      }
    }
  }
  /**
   * 處理登入結果
   * @param result 登入結果
   */
  onLoginResult(result) {
    const offers = result.note.campaign_panel?.offers ?? [];
    const groups = result.note.campaign_panel?.groups ?? [];
    const { freeBonus, freeSpins } = formatCampaignPanelOffers(offers);
    const campaigns = [...freeBonus, ...freeSpins];
    this._campaignList.set(campaigns);
    const formattedGroups = formatCampaignPanelGroups(groups, campaigns, this.session.assetUrl);
    this._campaignGroupList.set(formattedGroups);
    if (campaigns.length === 0) {
      this.sendPanelGet();
    }
  }
  /**
   * 處理Spin結果的回應
   * @param result Spin結果, 目前用不到
   */
  onSpinResult(result) {
    const turnover = this.wallet.realBet();
    let updated = false;
    const campaigns = this.campaignList().map((campaign) => {
      if (campaign.status !== "underCondition" || !campaign.condition)
        return campaign;
      updated = true;
      const condition = addCampaignConditionProgress(campaign.condition, turnover);
      if (isCampaignConditionMet(condition)) {
        return __spreadProps(__spreadValues({}, campaign), { condition: void 0, status: "inProgress", progressStatus: "claimable" });
      }
      return __spreadProps(__spreadValues({}, campaign), { condition });
    });
    if (!updated)
      return;
    this._campaignList.set(campaigns);
  }
  /**
   * 用來分類不同類型的Campaign Action回應
   * @param response Campaign Action回應
   */
  onCampaignActionResponse(response) {
    if (response.action === "campaign.panel.get") {
      this.onPanelGetResponse(response);
    } else if (response.action === "campaign.enrollment.create") {
      this.onEnrollmentCreateResponse(response);
    } else if (response.action === "campaign.offer.claim") {
      this.onOfferClaimResponse(response);
    }
  }
  /**
   * 處理Campaign Panel Get的回應
   * @param response Campaign Panel Get回應
   */
  onPanelGetResponse(response) {
    const { freeBonus, freeSpins } = formatCampaignPanelOffers(response.payload.offers);
    const campaigns = [...freeBonus, ...freeSpins];
    this._campaignList.set(campaigns);
    const groups = formatCampaignPanelGroups(response.payload.groups, campaigns, this.session.assetUrl);
    this._campaignGroupList.set(groups);
  }
  /**
   * 處理Campaign Enrollment Create的回應
   * @param response Campaign Enrollment Create回應
   */
  onEnrollmentCreateResponse(response) {
    const offer = response.payload?.offer;
    if (!response.success || !offer) {
      this.logger.campaignLog("Enrollment create failed", response);
      return;
    }
    const campaign = formatCampaignOffer(offer);
    if (!campaign)
      return;
    this._campaignList.update((list) => {
      const index = list.findIndex((c) => c.id === campaign.id);
      if (index === -1)
        return [...list, campaign];
      return list.map((c, i) => i === index ? campaign : c);
    });
    this._campaignGroupList.update((groups) => refreshCampaignGroups(groups, this.campaignList()));
    this.joinedSuccessSubject.next({ id: CampaignPopupId.JoinedSuccess, campaignList: [campaign] });
  }
  /**
   * 處理Campaign Offer Claim的回應
   * @param response Campaign Offer Claim回應
   */
  onOfferClaimResponse(response) {
    const offerId = response.payload?.offer?.offerId;
    const errorCode = response.error?.code ?? response.payload?.result ?? "";
    const errorMessage = response.error?.message ?? "";
    if (!response.success || !offerId) {
      this.logger.campaignLog("Offer claim failed", response);
      this.offerClaimFailSubject.next({ id: CampaignPopupId.OfferClaimFail, errorCode, errorMessage });
      return;
    }
    const target = this.campaignList().find((c) => c.offerId === offerId);
    const walletId = Number(response.payload?.bonusWalletId || "0");
    const grantedAmount = offerAmount(response.payload?.grantedValue);
    const campaign = __spreadProps(__spreadValues({}, target), {
      walletId,
      status: "inProgress",
      progressStatus: "granted",
      condition: void 0,
      totalAmount: grantedAmount,
      balance: grantedAmount
    });
    this._campaignList.update((list) => list.map((c) => c.id === campaign.id ? campaign : c));
    this._campaignGroupList.update((groups) => refreshCampaignGroups(groups, this.campaignList()));
    this.offerClaimSuccessSubject.next({ id: CampaignPopupId.OfferClaimSuccess, campaignList: [campaign] });
  }
  /** 當campaign  */
  processFirstMessage() {
    const waitToJoinCampaigns = this.campaignList().filter((c) => !this.storage.isCampaignMessageShownToday("joined", c.id));
    if (waitToJoinCampaigns.length > 0) {
      this.waitToJoinSubject.next({ id: CampaignPopupId.WaitToJoin, campaignList: waitToJoinCampaigns });
      waitToJoinCampaigns.forEach((c) => this.storage.markCampaignMessageShown("joined", c.id));
    }
  }
  /**
   * @deprecated
   */
  updateCampaignList(campaignNotes) {
  }
  /**
   * @deprecated
   */
  updateCampaignGroupList(campaignGroupNotes) {
  }
  sendAction(action) {
    this.api.sendInfoMsg("Campaign", action);
  }
  sendPanelGet() {
    this.sendAction({
      action: "campaign.panel.get",
      command_id: `${Date.now()}`,
      payload: { languageCode: this.session.locale }
    });
  }
  sendEnrollmentCreate(campaignId) {
    this.sendAction({
      action: "campaign.enrollment.create",
      command_id: `${Date.now()}`,
      payload: {
        campaignId,
        enrollId: `enroll${Date.now()}`
      }
    });
  }
  sendOfferClaim(offerId) {
    const commandId = `${Date.now()}`;
    this.sendAction({
      action: "campaign.offer.claim",
      command_id: commandId,
      payload: {
        offerId,
        // claimId 為奈秒 unix timestamp, 以毫秒補零換算
        claimId: `claim${Date.now()}`
      }
    });
  }
  static \u0275fac = function CampaignCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CampaignCtrlService, factory: _CampaignCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampaignCtrlService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/services/campaign-ctrl/campaign-legacy.function.ts
function formatCampaignList(campaignList) {
  const ret = {
    freeBonus: [],
    freeSpins: []
  };
  for (const campaign of campaignList ?? []) {
    if (campaign.popup_msg === CampaignPopupId.FailFullyRedeemed || campaign.popup_msg === CampaignPopupId.FreeSpinFullyClaim || campaign.popup_msg === CampaignPopupId.FreeBonusFullyClaim) {
      continue;
    }
    let item;
    const fs = createFreeSpins(campaign);
    const fb = createFreeBonus(campaign);
    item = fs ?? fb;
    if (!item) {
      continue;
    }
    processCondition(item);
    processWithdrawal(item);
    if (fs)
      ret.freeSpins.push(fs);
    if (fb)
      ret.freeBonus.push(fb);
  }
  return ret;
}
var statusList = ["underCondition", "inProgress", "completed"];
function parseTimeToTimestamp(timeString) {
  if (!timeString) {
    return 0;
  }
  const isoString = timeString.replace(" ", "T") + "Z";
  const date = new Date(isoString);
  return isNaN(date.getTime()) ? 0 : date.getTime();
}
function createFreeSpins(fs) {
  if (fs.type !== PromoEnum.FreeSpins) {
    return null;
  }
  let status = statusList[fs.visible ?? 0];
  const spinBet = calc.s2c(fs.freespin_single_bet_amount ?? 0);
  let balance = 0;
  if (fs.is_freespin === true) {
    balance = calc.s2c(fs.freespin_total_win_amount ?? 0);
  } else {
    balance = calc.s2c(fs.bw_balance ?? 0);
  }
  let displayType = fs.is_freespin ? "freeSpins" : "freeBonus";
  let total = fs.freespin_total_count ?? 0;
  let currentSpins = (fs.freespin_total_count ?? 0) - (fs.freespin_remaining_count ?? 0);
  let remaining = total - currentSpins;
  let totalAmount = new decimal_default(total).mul(spinBet).toNumber();
  let isFullyClaimed = false;
  if (status === "underCondition") {
    displayType = "freeSpins";
    total = fs.freespin_count ?? 0;
    let isBetCountCompleted = true;
    if (typeof fs.bet_count_limit === "number") {
      isBetCountCompleted = (fs.bet_count ?? 0) >= fs.bet_count_limit;
    }
    let isTurnoverCompleted = true;
    if (typeof fs.turnover_limit === "number") {
      isTurnoverCompleted = (fs.turnover ?? 0) >= fs.turnover_limit;
    }
    isFullyClaimed = isBetCountCompleted && isTurnoverCompleted;
  }
  if (displayType === "freeBonus") {
    total = calc.s2c(fs.withdraw_turnover_limit ?? 0);
    currentSpins = calc.s2c(fs.turnover ?? 0);
    remaining = decimal_default.max(0, new decimal_default(total).sub(currentSpins)).toNumber();
  }
  const beginTime = parseTimeToTimestamp(fs.begintime);
  const endTime = parseTimeToTimestamp(fs.endtime);
  const lastBetTime = parseTimeToTimestamp(fs.last_bet_time);
  if (endTime < Date.now() && status !== "completed") {
    status = "failed";
  }
  return {
    id: fs.campaign_id,
    type: "freeSpins",
    name: fs.name,
    status,
    spinCount: total,
    spinBet,
    totalAmount,
    walletId: fs.bw_id,
    balance,
    _rawData: fs,
    beginTime,
    endTime,
    lastBetTime,
    progressCurrent: currentSpins,
    progressTotal: total,
    progressRemaining: remaining,
    isFullyClaimed,
    displayType,
    groupId: null
  };
}
function createFreeBonus(fb) {
  if (fb.type !== PromoEnum.FreeBonus) {
    return null;
  }
  let status = statusList[fb.visible ?? 0];
  const turnover = calc.s2c(fb.turnover ?? 0);
  const target = calc.s2c(fb.withdraw_turnover_limit ?? 0);
  const remaining = decimal_default.max(0, new decimal_default(target).sub(turnover)).toNumber();
  let totalAmount = calc.s2c(fb.bw_balance ?? 0);
  let isFullyClaimed = false;
  if (status === "underCondition") {
    totalAmount = calc.s2c(fb.freebonus_amount ?? 0);
    isFullyClaimed = fb.visible === void 0;
    let isBetCountCompleted = true;
    if (typeof fb.bet_count_limit === "number") {
      isBetCountCompleted = (fb.bet_count ?? 0) >= fb.bet_count_limit;
    }
    let isTurnoverCompleted = true;
    if (typeof fb.turnover_limit === "number") {
      isTurnoverCompleted = (fb.turnover ?? 0) >= fb.turnover_limit;
    }
    isFullyClaimed = isBetCountCompleted && isTurnoverCompleted;
  }
  const beginTime = parseTimeToTimestamp(fb.begintime);
  const endTime = parseTimeToTimestamp(fb.endtime);
  const lastBetTime = parseTimeToTimestamp(fb.last_bet_time);
  if (endTime < Date.now() && status !== "completed") {
    status = "failed";
  }
  return {
    id: fb.campaign_id,
    type: "freeBonus",
    name: fb.name,
    status,
    totalAmount,
    walletId: fb.bw_id,
    balance: totalAmount,
    _rawData: fb,
    beginTime,
    endTime,
    lastBetTime,
    progressCurrent: turnover,
    progressTotal: target,
    progressRemaining: remaining,
    isFullyClaimed,
    displayType: "freeBonus",
    groupId: null
  };
}
function processCondition(campaign) {
  if (campaign.status !== "underCondition") {
    return;
  }
  const condition = {};
  if ("bet_count_limit" in campaign._rawData) {
    const current = campaign._rawData.bet_count ?? 0;
    const target = campaign._rawData.bet_count_limit ?? 0;
    const progress = target === 0 ? 0 : Math.min(100, Math.round(current / target * 100));
    condition.betCount = {
      current,
      target,
      remaining: Math.max(0, target - current),
      progress
    };
  }
  if ("turnover_limit" in campaign._rawData) {
    const current = calc.s2c(campaign._rawData.turnover ?? 0);
    const target = calc.s2c(campaign._rawData.turnover_limit ?? 0);
    const progress = target === 0 ? 0 : Math.min(100, new decimal_default(current).div(target).mul(100).toDecimalPlaces(0, decimal_default.ROUND_HALF_UP).toNumber());
    condition.turnover = {
      current,
      target,
      remaining: decimal_default.max(0, new decimal_default(target).sub(current)).toNumber(),
      progress
    };
  }
  campaign.condition = condition;
}
function processWithdrawal(campaign) {
  if (campaign.status === "underCondition") {
    return;
  }
  if (!("withdraw_turnover_limit" in campaign._rawData)) {
    return;
  }
  const rawData = campaign._rawData;
  const turnover = calc.s2c(rawData.turnover ?? 0);
  const threshold = calc.s2c(rawData.withdraw_turnover_limit ?? 0);
  const withdrawal = {
    // 目前流水
    turnover,
    // 可提領的流水門檻
    turnoverThreshold: threshold,
    // 可提領的流水還有多少
    turnoverRemaining: decimal_default.max(0, new decimal_default(threshold).sub(turnover)).toNumber(),
    // 可提領的餘額門檻
    balanceThreshold: calc.s2c(rawData.withdraw_lower_limit ?? 0),
    // 提領上限
    limit: calc.s2c(rawData.withdraw_upper_limit ?? 0),
    // 提領金額
    amount: calc.s2c(rawData.withdraw_amount ?? 0)
  };
  campaign.withdrawal = withdrawal;
}

// src/app/services/campaign-ctrl/campaign-legacy.service.ts
var CampaignLegacyService = class _CampaignLegacyService {
  api = inject(AppInterfaceService);
  wallet = inject(PlayerWalletService);
  game = inject(GameIframeCtrlService);
  session = inject(ClientSessionService);
  storage = inject(StorageCtrlService);
  logger = inject(LoggerService);
  imgFolder = "/ap-promo-images/";
  /** campaign popup是否啟動*/
  _popupActivated = signal(false);
  /** campaign popup是否啟動*/
  popupActivated = this._popupActivated.asReadonly();
  /** campaign popup 是否啟用 */
  popupEnabled = computed(() => {
    return true;
  });
  /** promo/campaign 訊息彈窗目前是否顯示中 */
  _popupMessageVisible = signal(false);
  /** promo/campaign 訊息彈窗目前是否顯示中 */
  popupMessageVisible = this._popupMessageVisible.asReadonly();
  /** 設定 campaign popup 是否啟動 */
  setPopupActivated(value) {
    this._popupActivated.set(value);
  }
  /** 設定 promo/campaign 訊息彈窗是否顯示中 */
  setPopupMessageVisible(value) {
    this._popupMessageVisible.set(value);
  }
  /** 所有Campaign */
  _campaignList = signal([]);
  /** 所有Campaign */
  campaignList = this._campaignList.asReadonly();
  /** 所有Campaign Group */
  _campaignGroupList = signal([]);
  /** 所有Campaign Group */
  campaignGroupList = this._campaignGroupList.asReadonly();
  /** 目前選取的活動的ID */
  _currentCampaignId = signal(null);
  /** 目前選取的活動的ID */
  currentCampaignId = this._currentCampaignId.asReadonly();
  /** 目前選取的活動 */
  currentCampaign = computed(() => {
    const id = this.currentCampaignId();
    return this.campaignList().find((c) => c.id === id) || null;
  });
  /** Campaign運行中 */
  isRunning = computed(() => !!this.currentCampaign());
  /** Free Spin 運行中 */
  isFreeSpinRunning = computed(() => this.currentCampaign()?.displayType === "freeSpins");
  /** Free Bonus 運行中 */
  isFreeBonusRunning = computed(() => this.currentCampaign()?.displayType === "freeBonus");
  // 以下是各種事件的Subject和Observable
  activatedCampaignSubject = new Subject();
  /** 當有活動被啟動的事件, 會帶入被啟動的活動, 沒有活動被啟動(取消選擇)的話會帶入null */
  get activatedCampaign$() {
    return this.activatedCampaignSubject.asObservable();
  }
  /** 收到underCondition狀態的Campaign */
  underConditionSubject = new Subject();
  /** 收到underCondition狀態的Campaign */
  get underCondition$() {
    return this.underConditionSubject.asObservable();
  }
  receivedFreeBonusSubject = new Subject();
  get receivedFreeBonus$() {
    return this.receivedFreeBonusSubject.asObservable();
  }
  receivedFreeSpinSubject = new Subject();
  get receivedFreeSpin$() {
    return this.receivedFreeSpinSubject.asObservable();
  }
  onGoingFreeBonusSubject = new Subject();
  get onGoingFreeBonus$() {
    return this.onGoingFreeBonusSubject.asObservable();
  }
  onGoingFreeSpinSubject = new Subject();
  get onGoingFreeSpin$() {
    return this.onGoingFreeSpinSubject.asObservable();
  }
  requiredTurnoverSubject = new Subject();
  /** 當有free spin需要達到流水需求, 轉成free bonus */
  get requiredTurnover$() {
    return this.requiredTurnoverSubject.asObservable();
  }
  freeSpinWithdrawMaximumSubject = new Subject();
  /** 當free spin達到領取上限的事件 */
  get freeSpinWithdrawMaximum$() {
    return this.freeSpinWithdrawMaximumSubject.asObservable();
  }
  failedSubject = new Subject();
  get failed$() {
    return this.failedSubject.asObservable();
  }
  successSubject = new Subject();
  get success$() {
    return this.successSubject.asObservable();
  }
  sucessFullyClaimSubject = new Subject();
  get sucessFullyClaim$() {
    return this.sucessFullyClaimSubject.asObservable();
  }
  failFullyRedeemedSubject = new Subject();
  get failFullyRedeemed$() {
    return this.failFullyRedeemedSubject.asObservable();
  }
  openEventCenterCampaignSubject = new Subject();
  get openEventCenterCampaign$() {
    return this.openEventCenterCampaignSubject.asObservable();
  }
  joinedSuccessSubject = new Subject();
  /** 成功加入活動 */
  get joinedSuccess$() {
    return this.joinedSuccessSubject.asObservable();
  }
  offerClaimSuccessSubject = new Subject();
  /** 成功領取活動獎勵 */
  get offerClaimSuccess$() {
    return this.offerClaimSuccessSubject.asObservable();
  }
  offerClaimFailSubject = new Subject();
  /** 領取活動獎勵失敗 */
  get offerClaimFail$() {
    return this.offerClaimFailSubject.asObservable();
  }
  waitToJoinSubject = new Subject();
  /** 等待加入活動 */
  get waitToJoin$() {
    return this.waitToJoinSubject.asObservable();
  }
  userId = computed(() => this.api.loginResultNote()?.nickname ?? "");
  codeExchangeType = signal(PromoCodeExchangeTypeEnum.OpenExchangeAndQR);
  constructor() {
    console.log("CampaignLegacyService initialized");
    this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
    this.api.loginResult$.subscribe((result) => {
      this.updateLoginResult(result);
    });
    effect(() => {
      if (this.popupActivated()) {
        untracked(() => {
          const result = this.processPopupMessages(this.api.loginResult()?.note.campaignlist ?? [], true);
          this.logger.campaignLog("Process campaign popup message on login", result);
          if (result.relatedGroupList.length > 0) {
            const endGroupId = result.relatedGroupList[result.relatedGroupList.length - 1].id;
            this.openEventCenterCampaignSubject.next(endGroupId);
          }
        });
      }
    });
    this.api.spinResult$.subscribe((result) => {
      this.setCampaignList(result.note?.campaignlist ?? []);
      this.setCampaignGroupList(result.note?.campaign_group_list ?? []);
      const sub = this.game.readyForSpin$.subscribe(() => {
        const messages = this.processPopupMessages(result.note?.campaignlist ?? []);
        this.logger.campaignLog("Process campaign popup message on spin result", messages);
        const list = [CampaignPopupId.ReceivedFreeBonus, CampaignPopupId.ReceivedFreeSpin];
        if (messages.popupList.some((m) => list.includes(m.id))) {
          const relatedGroups = messages.relatedGroupList;
          if (relatedGroups.length > 0) {
            const endGroupId = relatedGroups[relatedGroups.length - 1].id;
            this.openEventCenterCampaignSubject.next(endGroupId);
          }
        }
        sub.unsubscribe();
      });
      this.logger.campaignLog("Receive campaignlist", result.note?.campaignlist);
    });
    effect(() => {
      this.currentCampaignId();
      untracked(() => {
        this.updateBetList();
      });
    });
    this.requiredTurnover$.subscribe(() => {
      this.updateBetList();
    });
    if (!environment.production) {
      window.campaign = this;
    }
  }
  /** 是否要顯示Campaign在event center的tab條件 */
  showTab = computed(() => {
    return true;
  });
  updateLoginResult(result) {
    if (!result)
      return;
    this.setCampaignList(result.note?.campaignlist ?? []);
    this.setCampaignGroupList(result.note?.campaign_group_list ?? []);
    this.codeExchangeType.set(result.note?.coupon ?? PromoCodeExchangeTypeEnum.OpenExchangeAndQR);
  }
  /** 設定現在使用中的活動錢包, null表示沒有活動被選擇 */
  setCurrentId(id) {
    if (!id) {
      const preId = this.currentCampaignId();
      if (!preId)
        return;
      this._currentCampaignId.set(null);
      this.wallet.campaignSetting.set(null);
      this.activatedCampaignSubject.next(null);
      this.game.send(createApWebMessage("UseCampaign", { campaignId: null }));
      return;
    }
    const campaign = this.campaignList().find((c) => c.id === id);
    this.wallet.updateSpinMode(null);
    if (!campaign)
      return;
    if (campaign.status === "underCondition")
      return;
    if (campaign.status === "completed")
      return;
    this._currentCampaignId.set(id);
    this.wallet.campaignSetting.set(this.currentCampaign());
    this.activatedCampaignSubject.next(campaign);
    this.game.send(createApWebMessage("UseCampaign", { campaignId: id }));
    if (campaign.displayType === "freeBonus") {
      const betList = this.wallet.betList();
      if (betList && betList.length > 0) {
        this.wallet.updateBet(betList[0]);
      }
    }
  }
  /** 更新campaigns, 新的ID就加入, 存在的ID就取代 */
  updateCampaigns(campaigns) {
    this._campaignList.update((list) => {
      const updated = [...list];
      for (const campaign of campaigns) {
        const existingIndex = updated.findIndex((c) => c.id === campaign.id);
        if (existingIndex === -1) {
          updated.push(campaign);
        } else {
          updated[existingIndex] = campaign;
        }
      }
      return updated;
    });
    this.wallet.campaignSetting.set(this.currentCampaign());
  }
  /** 從server note 更新CampaignList, 新的ID就加入, 存在的ID就取代 */
  updateCampaignList(campaignNotes) {
    const campaignAll = formatCampaignList(campaignNotes);
    const campaigns = [...campaignAll.freeBonus, ...campaignAll.freeSpins];
    this.updateCampaigns(campaigns);
  }
  /** 從server note 設定CampaignList, 直接覆蓋現有的CampaignList */
  setCampaignList(campaignNotes) {
    const campaignAll = formatCampaignList(campaignNotes);
    const campaigns = [...campaignAll.freeBonus, ...campaignAll.freeSpins];
    this._campaignList.set(campaigns);
    this.wallet.campaignSetting.set(this.currentCampaign());
  }
  /** 從server note 更新CampaignGroupList, 新的ID就加入, 存在的ID就取代 */
  updateCampaignGroupList(campaignGroupNotes) {
    const updated = [...this.campaignGroupList()];
    for (const groupNote of campaignGroupNotes) {
      const list = groupNote.campaign_id_list.filter((campaignId) => this.campaignList().some((c) => c.id === campaignId));
      if (list.length === 0)
        continue;
      const existingIndex = updated.findIndex((g) => g.id === groupNote.group_id);
      const emptyList = list.length === 0;
      const allCompletely = this.campaignList().filter((c) => groupNote.campaign_id_list.includes(c.id)).every((c) => c.status === "completed");
      const newGroup = {
        visible: !emptyList && !allCompletely,
        id: groupNote.group_id,
        title: groupNote.title,
        image: this.session.assetUrl + this.imgFolder + groupNote.banner_url,
        campaignIdList: list,
        description: groupNote.description,
        weight: groupNote.weight,
        endTime: Math.max(...list.map((campaignId) => {
          const campaign = this.campaignList().find((c) => c.id === campaignId);
          return campaign ? campaign.endTime : 0;
        }))
      };
      if (existingIndex === -1) {
        updated.push(newGroup);
      } else {
        const existingGroup = updated[existingIndex];
        const existingCampaignIdList = existingGroup.campaignIdList;
        const newCampaignIdList = newGroup.campaignIdList;
        const combinedCampaignIdList = Array.from(/* @__PURE__ */ new Set([...existingCampaignIdList, ...newCampaignIdList]));
        newGroup.campaignIdList = combinedCampaignIdList;
        updated[existingIndex] = newGroup;
      }
    }
    updated.sort((a, b) => b.weight - a.weight);
    this._campaignGroupList.set(updated);
    this._campaignList.update((list) => {
      return list.map((campaign) => {
        const group = updated.find((g) => g.campaignIdList.includes(campaign.id));
        return __spreadProps(__spreadValues({}, campaign), { groupId: group ? group.id : null });
      });
    });
  }
  /** 從server note 設定CampaignGroupList, 直接覆蓋現有的CampaignGroupList */
  setCampaignGroupList(campaignGroupNotes) {
    const groups = [];
    for (const groupNote of campaignGroupNotes) {
      const list = groupNote.campaign_id_list.filter((campaignId) => this.campaignList().some((c) => c.id === campaignId));
      if (list.length === 0)
        continue;
      const allCompletely = this.campaignList().filter((c) => groupNote.campaign_id_list.includes(c.id)).every((c) => c.status === "completed");
      const newGroup = {
        visible: !allCompletely,
        id: groupNote.group_id,
        title: groupNote.title,
        description: groupNote.description,
        image: this.session.assetUrl + this.imgFolder + groupNote.banner_url,
        campaignIdList: groupNote.campaign_id_list,
        weight: groupNote.weight,
        endTime: Math.max(...groupNote.campaign_id_list.map((campaignId) => {
          const campaign = this.campaignList().find((c) => c.id === campaignId);
          return campaign ? campaign.endTime : 0;
        }))
      };
      groups.push(newGroup);
    }
    groups.sort((a, b) => b.weight - a.weight);
    this._campaignGroupList.set(groups);
    this._campaignList.update((list) => {
      return list.map((campaign) => {
        const group = groups.find((g) => g.campaignIdList.includes(campaign.id));
        return __spreadProps(__spreadValues({}, campaign), { groupId: group ? group.id : null });
      });
    });
  }
  /** 觸發popup訊息, 回傳是否有有效訊息 */
  processPopupMessages(campaignNotes, combine = false) {
    const result = { popupList: [], relatedGroupList: [] };
    for (const campaignNote of campaignNotes) {
      if (campaignNote.type === PromoEnum.CashDrop) {
        continue;
      }
      const popupMsg = campaignNote.popup_msg;
      const id = campaignNote.campaign_id;
      if (popupMsg === CampaignPopupId.FailFullyRedeemed || popupMsg === CampaignPopupId.FreeSpinFullyClaim || popupMsg === CampaignPopupId.FreeBonusFullyClaim) {
        continue;
      }
      if (typeof popupMsg === "number" && popupMsg > 0) {
        const pupup = {
          id: popupMsg,
          campaignList: this.campaignList().filter((c) => c.id === id)
        };
        if (pupup.campaignList.length === 0)
          continue;
        const combinePopupIds = [
          CampaignPopupId.ReceivedFreeBonus,
          CampaignPopupId.OnGoingFreeBonus,
          CampaignPopupId.ReceivedFreeSpin,
          CampaignPopupId.RequiredTurnover,
          CampaignPopupId.OnGoingFreeSpin,
          CampaignPopupId.UnderCondition
        ];
        if (combine && combinePopupIds.includes(popupMsg)) {
          const existingPopup = result.popupList.find((p) => p.id === popupMsg);
          if (existingPopup) {
            existingPopup.campaignList = Array.from(/* @__PURE__ */ new Set([...existingPopup.campaignList, ...pupup.campaignList]));
          } else {
            result.popupList.push(pupup);
          }
        } else {
          result.popupList.push(pupup);
        }
      }
    }
    const sortOrder = [
      CampaignPopupId.WithdrawSuccess
    ];
    result.popupList.sort((a, b) => {
      const aIndex = sortOrder.indexOf(a.id);
      const bIndex = sortOrder.indexOf(b.id);
      if (aIndex === -1 && bIndex === -1)
        return 0;
      if (aIndex === -1)
        return 1;
      if (bIndex === -1)
        return -1;
      return aIndex - bIndex;
    });
    result.popupList.forEach((message) => {
      switch (message.id) {
        case CampaignPopupId.UnderCondition:
          this.underConditionSubject.next(message);
          break;
        case CampaignPopupId.ReceivedFreeBonus:
          this.receivedFreeBonusSubject.next(message);
          break;
        case CampaignPopupId.ReceivedFreeSpin:
          this.receivedFreeSpinSubject.next(message);
          break;
        case CampaignPopupId.OnGoingFreeBonus:
          this.onGoingFreeBonusSubject.next(message);
          break;
        case CampaignPopupId.OnGoingFreeSpin:
          this.onGoingFreeSpinSubject.next(message);
          break;
        case CampaignPopupId.RequiredTurnover:
          this.requiredTurnoverSubject.next(message);
          break;
        case CampaignPopupId.FreeSpinWithdrawMaximum:
          this.freeSpinWithdrawMaximumSubject.next(message);
          break;
        case CampaignPopupId.WithdrawFailed:
          this.failedSubject.next(message);
          break;
        case CampaignPopupId.WithdrawSuccess:
          this.successSubject.next(message);
          break;
        case CampaignPopupId.SucessFullyClaim:
          this.sucessFullyClaimSubject.next(message);
          break;
        case CampaignPopupId.FailFullyRedeemed:
          this.failFullyRedeemedSubject.next(message);
          break;
      }
      const groups = this.campaignGroupList().filter((group) => group.campaignIdList.some((campaignId) => message.campaignList.some((c) => c.id === campaignId)));
      groups.forEach((group) => {
        if (!result.relatedGroupList.some((g) => g.id === group.id)) {
          result.relatedGroupList.push(group);
        }
      });
    });
    return result;
  }
  /** 遊戲演出完成之後要處理的事情 */
  onReadyForSpin() {
    const current = this.currentCampaign();
    if (!current)
      return;
    if (current.status === "underCondition" || current.status === "completed") {
      this.setCurrentId(null);
    }
  }
  /** 更新Bet列表, 更新時機點是切換campaign跟當free spin轉換成free bonus時 */
  updateBetList() {
    if (!this.currentCampaign()) {
      this.wallet.campaignBetList.set(null);
      this.wallet.updateBet(this.wallet.baseBetList()[0]);
      return;
    }
    ;
    const campaign = this.currentCampaign();
    if (campaign.displayType === "freeSpins" && campaign.type === "freeSpins") {
      this.wallet.campaignBetList.set([campaign.spinBet]);
      this.wallet.updateBet(campaign.spinBet);
      return;
    }
    if (campaign.displayType === "freeBonus") {
      const maxIndex = this.wallet.bonusWalletMaxBetIndex();
      if (maxIndex === null) {
        this.wallet.campaignBetList.set(this.wallet.baseBetList());
      } else {
        this.wallet.campaignBetList.set(this.wallet.baseBetList().filter((bet, index) => index <= maxIndex));
      }
      this.wallet.updateBet(this.wallet.baseBetList()[0]);
      return;
    }
  }
  sendAction(action) {
  }
  sendEnrollmentCreate(campaignId) {
  }
  sendOfferClaim(offerId) {
  }
  static \u0275fac = function CampaignLegacyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignLegacyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CampaignLegacyService, factory: _CampaignLegacyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampaignLegacyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/services/campaign-ctrl/campaign-facade.service.ts
var CampaignFacadeService = class _CampaignFacadeService {
  session = inject(ClientSessionService);
  storage = inject(StorageCtrlService);
  api = inject(AppInterfaceService);
  userId = computed(() => this.api.userId());
  active = this.session.isLatestCampaign ? inject(CampaignCtrlService) : inject(CampaignLegacyService);
  get campaignList() {
    return this.active.campaignList;
  }
  get campaignGroupList() {
    return this.active.campaignGroupList;
  }
  get currentCampaign() {
    return this.active.currentCampaign;
  }
  get isRunning() {
    return this.active.isRunning;
  }
  get isFreeSpinRunning() {
    return this.active.isFreeSpinRunning;
  }
  get isFreeBonusRunning() {
    return this.active.isFreeBonusRunning;
  }
  get popupEnabled() {
    return this.active.popupEnabled;
  }
  get popupActivated() {
    return this.active.popupActivated;
  }
  get popupMessageVisible() {
    return this.active.popupMessageVisible;
  }
  get codeExchangeType() {
    return this.active.codeExchangeType;
  }
  get showTab() {
    return this.active.showTab;
  }
  get activatedCampaign$() {
    return this.active.activatedCampaign$;
  }
  get requiredTurnover$() {
    return this.active.requiredTurnover$;
  }
  get freeSpinWithdrawMaximum$() {
    return this.active.freeSpinWithdrawMaximum$;
  }
  get underCondition$() {
    return this.active.underCondition$;
  }
  get receivedFreeBonus$() {
    return this.active.receivedFreeBonus$;
  }
  get receivedFreeSpin$() {
    return this.active.receivedFreeSpin$;
  }
  get onGoingFreeBonus$() {
    return this.active.onGoingFreeBonus$;
  }
  get onGoingFreeSpin$() {
    return this.active.onGoingFreeSpin$;
  }
  get failed$() {
    return this.active.failed$;
  }
  get success$() {
    return this.active.success$;
  }
  get sucessFullyClaim$() {
    return this.active.sucessFullyClaim$;
  }
  get failFullyRedeemed$() {
    return this.active.failFullyRedeemed$;
  }
  get openEventCenterCampaign$() {
    return this.active.openEventCenterCampaign$;
  }
  get joinedSuccess$() {
    return this.active.joinedSuccess$;
  }
  get offerClaimSuccess$() {
    return this.active.offerClaimSuccess$;
  }
  get offerClaimFail$() {
    return this.active.offerClaimFail$;
  }
  get waitToJoin$() {
    return this.active.waitToJoin$;
  }
  setPopupActivated(value) {
    this.active.setPopupActivated(value);
  }
  setPopupMessageVisible(value) {
    this.active.setPopupMessageVisible(value);
  }
  // 舊的接口
  setCurrentId(id) {
    this.active.setCurrentId(id);
  }
  updateCampaignList(campaignNotes) {
    this.active.updateCampaignList(campaignNotes);
  }
  updateCampaignGroupList(campaignGroupNotes) {
    this.active.updateCampaignGroupList(campaignGroupNotes);
  }
  // 新的接口
  sendAction(action) {
    this.active.sendAction(action);
  }
  sendEnrollmentCreate(campaignId) {
    this.active.sendEnrollmentCreate(campaignId);
  }
  sendOfferClaim(offerId) {
    this.active.sendOfferClaim(offerId);
  }
  // 新舊共用的部分
  maxRecordedClickedCards = 20;
  /** 紀錄已點擊的活動群組 */
  recordClickedGroup(groupId) {
    const key = `${this.userId()}_${groupId}`;
    if (!(this.storage.campaignGroupsClicked || []).includes(key)) {
      this.storage.campaignGroupsClicked = [...this.storage.campaignGroupsClicked || [], key];
    }
    if ((this.storage.campaignGroupsClicked || []).length > this.maxRecordedClickedCards) {
      this.storage.campaignGroupsClicked = (this.storage.campaignGroupsClicked || []).slice(-this.maxRecordedClickedCards);
    }
  }
  /** 是否有尚未點開過的新活動群組 */
  haveNewGroup = computed(() => {
    const clicked = this.storage.campaignGroupsClickedSignal() || [];
    return this.campaignGroupList().some((group) => {
      const key = `${this.userId()}_${group.id}`;
      return !clicked.includes(key);
    });
  });
  /** 檢查指定的活動群組是否已被點擊過 */
  checkNewGroup(groupId) {
    const key = `${this.userId()}_${groupId}`;
    return !(this.storage.campaignGroupsClicked || []).includes(key);
  }
  /** 清除「活動群組已點開」的紀錄 */
  cleanClickedGroups() {
    this.storage.campaignGroupsClicked = null;
  }
  static \u0275fac = function CampaignFacadeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignFacadeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CampaignFacadeService, factory: _CampaignFacadeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampaignFacadeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CashDropService,
  EventCenterCtrlService,
  PromoCodeExchangeTypeEnum,
  formatCampaignList,
  CampaignFacadeService
};
//# sourceMappingURL=chunk-7XXHR6BD.js.map
