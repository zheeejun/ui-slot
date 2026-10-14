import {
  AppInterfaceService,
  SpinRequest
} from "./chunk-TLQLKLDD.js";
import {
  LoggerService,
  calc,
  decimal_default,
  require_new_proto
} from "./chunk-CFCPEQLG.js";
import {
  ClientSessionService,
  environment
} from "./chunk-54ITVL2G.js";
import {
  CommonModule,
  DomSanitizer
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  Injectable,
  __toESM,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QGU3BS3L.js";

// src/app/services/player-wallet/player-wallet.service.ts
var import_new_proto = __toESM(require_new_proto());

// src/app/pages/event-buy-feature/event-buy-feature.function.ts
function FindModeIndex(mode) {
  const numberPart = mode.replace(/^\D+/g, "");
  if (numberPart === "" || numberPart === "1") {
    return 0;
  }
  const num = parseInt(numberPart, 10);
  return isNaN(num) ? 0 : num - 1;
}

// src/app/services/history-replay/history-replay.config.ts
var UNSUPPORTED_REPLAY_GAME_IDS = [
  "10029",
  "10030",
  "10033",
  "10035",
  "10036",
  "10050"
];

// src/app/services/history-replay/history-replay.function.ts
function isHistoryReplaySupported(gameId) {
  return !UNSUPPORTED_REPLAY_GAME_IDS.includes(gameId);
}

// src/app/services/player-wallet/player-wallet.service.ts
var PlayerWalletService = class _PlayerWalletService {
  api = inject(AppInterfaceService);
  logger = inject(LoggerService);
  session = inject(ClientSessionService);
  /** 貨幣代號 */
  _currency = signal("USD");
  /** 貨幣代號 */
  currency = this._currency.asReadonly();
  /** 貨幣符號 */
  _currencySymbol = signal("");
  /** 貨幣符號 */
  currencySymbol = this._currencySymbol.asReadonly();
  /** 現金錢包 */
  _cashWallet = signal(0);
  /** 現金錢包 */
  cashWallet = this._cashWallet.asReadonly();
  /** 目前餘額, 收到spin result之後馬上更新, 會依照不同wallet顯示 */
  balance = computed(() => {
    if (this.campaignSetting()) {
      return this.campaignSetting().balance;
    }
    return this._cashWallet();
  });
  /** Buy Feature 有哪些模式 */
  _buyFeatureModes = signal([]);
  /** Buy Feature 有哪些模式 */
  buyFeatureModes = this._buyFeatureModes.asReadonly();
  /** Double Chance 有哪些模式 */
  _buyChanceModes = signal([]);
  /** Double Chance 有哪些模式 */
  buyChanceModes = this._buyChanceModes.asReadonly();
  /** 特殊spin的模式 (extra bet) */
  _extraBetMode = signal([]);
  /** 特殊spin的模式 (extra bet) */
  extraBetMode = this._extraBetMode.asReadonly();
  /** 所有模式 */
  allSpinModes = computed(() => {
    return [...this.buyFeatureModes(), ...this.buyChanceModes(), ...this.extraBetMode()];
  });
  /** 沒有Buy Feature也沒有Double Chance的模式 */
  isBuyFeatureDisabled = computed(() => {
    return this.buyFeatureModes().length === 0 && this.buyChanceModes().length === 0;
  });
  /** Buy Feature的卡片資訊, 用來顯示在下注窗 */
  buyFeatureCards = signal([]);
  /** Double Chance的卡片資訊, 用來顯示在下注窗 */
  buyChanceCards = signal([]);
  /** 是否啟用 Buy Feature */
  isBuyFeature = computed(() => {
    return this.buyFeatureModes().some((m) => m.name === this.spinMode());
  });
  /** 是否啟用 Double Chance */
  isDoubleChance = computed(() => {
    return this.buyChanceModes().some((m) => m.name === this.spinMode());
  });
  /** 是否啟用 Extra Bet */
  isExtraBet = computed(() => {
    return this.extraBetMode().some((m) => m.name === this.spinMode());
  });
  /** 是否為特殊spin模式 */
  isSpecialSpinMode = computed(() => {
    return this.allSpinModes().some((m) => m.name === this.spinMode());
  });
  /** 特殊spin的模式 */
  _spinMode = signal("");
  /** 特殊spin的模式 */
  spinMode = this._spinMode.asReadonly();
  /** 競賽下注的資料, 用來給trn-ctrl設定 */
  trnSetting = signal(null);
  /** 活動相關設定 */
  campaignSetting = signal(null);
  /** 活動ID */
  campaignId = computed(() => {
    const campaign = this.campaignSetting();
    if (!campaign)
      return null;
    return campaign.id ?? null;
  });
  /** 目前的Bet */
  _bet = signal(1);
  /** 目前的Bet */
  bet = this._bet.asReadonly();
  /** 顯示在下注窗的Bet, (不包含Buy Feature) */
  displayBet = computed(() => {
    return new decimal_default(this.bet()).mul(this.displayBetRate()).mul(this.trnRate()).mul(calc.numberBase).toDecimalPlaces(0, decimal_default.ROUND_HALF_UP).div(calc.numberBase).toNumber();
  });
  /** 真正從錢包扣的Bet, (包含Buy Feature, Buy Chance, Tournament) */
  realBet = computed(() => {
    return new decimal_default(this.bet()).mul(this.buySpecialRate()).mul(this.trnRate()).mul(calc.numberBase).toDecimalPlaces(0, decimal_default.ROUND_HALF_UP).div(calc.numberBase).toNumber();
  });
  /** 基礎Bet列表 */
  _baseBetList = signal([1]);
  /** 基礎Bet列表 */
  baseBetList = this._baseBetList.asReadonly();
  /** Trn時Bet列表, 給Trn修改使用 */
  trnBetList = signal(null);
  bonusWalletMaxBetIndex = signal(null);
  /** Campaign的 Bet列表 */
  campaignBetList = signal(null);
  /** 目前的Bet List, 會依情境選擇 */
  betList = computed(() => {
    if (this.trnBetList()) {
      return this.trnBetList();
    }
    if (this.campaignBetList()) {
      return this.campaignBetList();
    }
    return this.baseBetList();
  });
  /** 依照目前的Bet List, 現在的Bet對應的index, 找不到的話回傳null */
  betIndex = computed(() => {
    const index = this.betList().indexOf(this.bet());
    return index >= 0 ? index : null;
  });
  /** 是否達到最大投注 */
  isBetMax = computed(() => {
    const index = this.betIndex();
    return index !== null && index >= this.betList().length - 1;
  });
  /** 是否達到最小投注 */
  isBetMin = computed(() => {
    const index = this.betIndex();
    return index !== null && index <= 0;
  });
  /** 減少投注 */
  decreaseBet() {
    if (this.isBetMin())
      return;
    const nextBet = this.betList()[(this.betIndex() ?? 1) - 1];
    this.updateBet(nextBet);
  }
  /** 增加投注 */
  increaseBet() {
    if (this.isBetMax())
      return;
    const nextBet = this.betList()[(this.betIndex() ?? -1) + 1];
    this.updateBet(nextBet);
  }
  /** 特殊spin的倍率 (ex: 50, 1.2, buy feature, buy chance共用) */
  buySpecialRate = computed(() => {
    if (!this.isSpecialSpinMode()) {
      return 1;
    }
    const foundMode = this.allSpinModes().find((m) => m.name === this.spinMode());
    return foundMode ? foundMode.rate : 1;
  });
  /** Display bet 倍率 (ex: 1.2) */
  displayBetRate = computed(() => {
    if (this.isDoubleChance() || this.isExtraBet()) {
      const foundMode = this.allSpinModes().find((m) => m.name === this.spinMode());
      return foundMode ? foundMode.rate : 1;
    }
    return 1;
  });
  /** TRN的倍率 (ex: 1.1) */
  trnRate = computed(() => {
    return (this.trnSetting()?.feeRatio || 0) + 1;
  });
  constructor() {
    if (environment.production === false) {
      window.wallet = this;
    }
    this.api.updateBalance$.subscribe(this.onUpdateCashwallet.bind(this));
    this.api.spinResult$.subscribe(this.onSpinResult.bind(this));
    effect(() => {
      const result = this.api.loginResult();
      untracked(() => this.updateLoginResult(result));
    });
  }
  /** 更新登入結果 */
  updateLoginResult(result) {
    if (!result)
      return;
    this.updateLoginResultNote(result.note);
  }
  /** 更新登入結果與相關資訊, 包括在Note裡面的CampaignList */
  updateLoginResultNote(note) {
    const betList = note.betlevels.map((bet2) => calc.s2c(bet2)) || [1];
    const bet = betList[note.defaultbet || 0];
    this._baseBetList.set(betList);
    this._bet.set(bet);
    const bonusWalletMaxBetIndex = note.bonus_wallet_max_bet_index || null;
    this.bonusWalletMaxBetIndex.set(bonusWalletMaxBetIndex);
    const buyFeatureEnabled = note.buyfeature?.enable === 1;
    const extraBetEnabled = note.extrabet === true;
    this._cashWallet.set(calc.s2c(note.balance));
    this._currency.set(note.currency);
    this._currencySymbol.set(note.currency_symbol || "");
    const bfRules = [];
    const dcRules = [];
    const ebRules = [];
    note.game_mode?.forEach((mode) => {
      if (mode[0].startsWith("bf"))
        bfRules.push({ name: mode[0], rate: mode[1] });
      if (mode[0].startsWith("dc"))
        dcRules.push({ name: mode[0], rate: mode[1] });
      if (mode[0].startsWith("eb"))
        ebRules.push({ name: mode[0], rate: mode[1] });
    });
    bfRules.sort((a, b) => FindModeIndex(a.name ?? "") - FindModeIndex(b.name ?? ""));
    dcRules.sort((a, b) => FindModeIndex(a.name ?? "") - FindModeIndex(b.name ?? ""));
    ebRules.sort((a, b) => FindModeIndex(a.name ?? "") - FindModeIndex(b.name ?? ""));
    const bfCards = [];
    for (const mode of bfRules) {
      const index = FindModeIndex(mode.name ?? "");
      const isDemoAvailable = isHistoryReplaySupported(this.session.gameId ?? "");
      const bfCard = {
        mode: mode.name,
        currency: this.currencySymbol(),
        rate: mode.rate,
        order: index,
        isDemoAvailable
      };
      bfCards.push(bfCard);
    }
    this.buyFeatureCards.set(bfCards);
    const dcCards = [];
    for (const mode of dcRules) {
      const dcCard = {
        mode: mode.name,
        currency: this.currencySymbol(),
        rate: mode.rate,
        order: 0
      };
      dcCards.push(dcCard);
    }
    this.buyChanceCards.set(dcCards);
    if (buyFeatureEnabled)
      this._buyFeatureModes.set(bfRules);
    if (buyFeatureEnabled)
      this._buyChanceModes.set(dcRules);
    if (extraBetEnabled)
      this._extraBetMode.set(ebRules);
  }
  /** 最終的trn資料 */
  trnData = computed(() => {
    if (!this.trnSetting())
      return null;
    return {
      id: this.trnSetting()?.id || "",
      roomId: this.trnSetting()?.roomId || "",
      feeRatio: this.trnSetting()?.feeRatio || 0,
      extra: new decimal_default(this.bet()).mul(this.buySpecialRate()).mul(this.trnSetting()?.feeRatio || 0).toNumber()
    };
  });
  /** 更新目前的Bet, 如果不在betList中則不更新 */
  updateBet(bet) {
    const betList = this.betList();
    if (betList.indexOf(bet) === -1) {
      this.logger.warn(`PlayerWalletService: Attempted to set invalid bet amount: ${bet}`);
    }
    this._bet.set(bet);
  }
  /** 設定SpinMode(buy feature, buy chance), 關閉請設定null或是空字串 */
  updateSpinMode(mode) {
    if (mode === null || mode === "") {
      this._spinMode.set("");
      return;
    }
    const allModes = this.allSpinModes();
    if (mode && !allModes.some((m) => m.name === mode)) {
      this.logger.warn(`PlayerWalletService: Attempted to set invalid spin mode: ${mode}`);
      return;
    }
    this._spinMode.set(mode);
  }
  /** 取得目前的BetData, 整包傳給遊戲iframe使用, 因為只跟Bet相關所以不會包含Balance(cash wallet, bonus wallet) */
  betData = computed(() => {
    return {
      bet: this.bet(),
      betIndex: this.betIndex() || 0,
      betList: this.betList(),
      isBuyFeature: this.isBuyFeature(),
      isDoubleChance: this.isDoubleChance(),
      modeName: this.spinMode() || "",
      campaignId: this.campaignSetting()?.id || "",
      tournament: this.trnData()
    };
  });
  /** 更新旋轉結果, 也包括在Note裡面的CampaignList */
  onSpinResult(result) {
    this._cashWallet.set(calc.s2c(result.data.balance));
  }
  /** 更新現金錢包 */
  onUpdateCashwallet(amount) {
    this._cashWallet.set(amount);
  }
  setCashWallet(amount) {
    this._cashWallet.set(amount);
  }
  /** 上一次Spin的時間, 用來計算Spin的間隔時間, 以及提供給遊戲端做一些效能參考 */
  lastSpinTime = null;
  /** 遊戲結束時間, 用來提供給遊戲端做一些效能參考 */
  gameEndTime = null;
  /** 上一次遊戲的持續時間, 用來提供給遊戲端做一些效能參考 */
  lastGameDuration = null;
  /** 演出結束後更新遊戲持續時間 */
  updateGameDuration() {
    const now = Date.now();
    if (this.gameEndTime) {
      this.lastGameDuration = now - this.gameEndTime;
    }
    this.gameEndTime = now;
  }
  /** 遊戲速度, normal:0 fast:1 very fast:2 */
  gameSpeed = 0;
  /** Auto Spin剩餘次數, null代表沒有Auto Spin */
  autoSpinRemaining = null;
  /** 獲取遊戲的 Spin 結果
   * @param gameString 這是給遊戲端傳出來的參數, 可以讓Server知道這次Spin的額外資訊(依照遊戲規格), 預設為空字串, 代表沒有額外資訊
   * @param bet 只給測試用, 正常情況下會使用 this.bet() 的值
   * @param mode 只給測試用, 正常情況下會使用 this.spinMode() 的值
   */
  sendSpinRequest(gameString = "", inputBet, inputMode) {
    let bet = this.betData().bet;
    let mode = this.betData().modeName;
    if (inputBet !== void 0) {
      bet = inputBet;
    }
    if (inputMode !== void 0) {
      mode = inputMode;
    }
    const spinData = import_new_proto.serverProto.spin.create();
    spinData.bet = Math.floor(calc.c2s(bet ?? 0));
    const note = {
      game: gameString,
      mode,
      game_parameters: {
        round_time_gap: this.lastSpinTime ? Date.now() - this.lastSpinTime : 0,
        last_spin_duration: this.lastGameDuration ?? 0,
        spin_speed: this.gameSpeed,
        spin_epoch: Date.now(),
        auto_spin: this.autoSpinRemaining === Infinity ? -1 : this.autoSpinRemaining === null ? void 0 : this.autoSpinRemaining
      }
    };
    if (this.betData().modeName) {
      note.mode = this.betData().modeName;
    }
    if (this.trnData()) {
      note.tournament_id = this.trnData().id;
      note.room_id = this.trnData().roomId;
      note.extra_amount = calc.c2s(this.trnData().extra || 0);
    }
    if (this.campaignSetting()) {
      note.campaign_id = this.campaignSetting().id;
      note.bonus_wallet_id = this.campaignSetting().walletId;
    }
    spinData.note = JSON.stringify(note);
    const spin = new SpinRequest();
    spin.data = spinData;
    this.api.sendPack(spin.pack);
    this.lastSpinTime = Date.now();
  }
  multiplyUserBet(multiplier = 1) {
    const newBet = new decimal_default(this.bet()).mul(multiplier).toNumber();
    return newBet;
  }
  static \u0275fac = function PlayerWalletService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlayerWalletService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlayerWalletService, factory: _PlayerWalletService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlayerWalletService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/icons/ap-icon-music-circle/ap-icon-music-circle.component.ts
var ApIconMusicCircleComponent = class _ApIconMusicCircleComponent {
  variant = input("default");
  sanitizer = inject(DomSanitizer);
  defaultPath = "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z";
  pressedPath = "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72ZZ";
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_music)" filter="url(#filter0_i_music)"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(16 16) scale(2.0)">
  <path fill-rule="evenodd" d="${this.defaultPath}" clip-rule="evenodd" fill="#D4D4D8"/></g>
  <defs>
    <filter id="filter0_i_music" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_music"/>
    </filter>
    <linearGradient id="paint0_linear_music" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A6A6A"/>
      <stop offset="0.4" stop-color="#424242"/>
      <stop offset="0.8" stop-color="#343434"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>`,
    pressed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_music)" filter="url(#filter0_i_music)"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(16 16) scale(2.0)">
  <path fill-rule="evenodd" d="${this.pressedPath}" clip-rule="evenodd" fill="#D4D4D8"/></g>
  <defs>
    <filter id="filter0_i_music" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_music"/>
    </filter>
    <linearGradient id="paint0_linear_music" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A6A6A"/>
      <stop offset="0.4" stop-color="#424242"/>
      <stop offset="0.8" stop-color="#343434"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg[this.variant()]));
  static \u0275fac = function ApIconMusicCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconMusicCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconMusicCircleComponent, selectors: [["ap-icon-music-circle"]], inputs: { variant: [1, "variant"] }, decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconMusicCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconMusicCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-music-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconMusicCircleComponent, { className: "ApIconMusicCircleComponent", filePath: "src/app/icons/ap-icon-music-circle/ap-icon-music-circle.component.ts", lineNumber: 12 });
})();

// src/app/icons/ap-icon-close-circle/ap-icon-close-circle.component.ts
var ApIconCloseCircleComponent = class _ApIconCloseCircleComponent {
  sanitizer = inject(DomSanitizer);
  path = "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z";
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_close)" filter="url(#filter0_i_close)"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(16 16) scale(2.0)">
  <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g>
  <defs>
    <filter id="filter0_i_close" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_close"/>
    </filter>
    <linearGradient id="paint0_linear_close" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A6A6A"/>
      <stop offset="0.4" stop-color="#424242"/>
      <stop offset="0.8" stop-color="#343434"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconCloseCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconCloseCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconCloseCircleComponent, selectors: [["ap-icon-close-circle"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconCloseCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconCloseCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-close-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconCloseCircleComponent, { className: "ApIconCloseCircleComponent", filePath: "src/app/icons/ap-icon-close-circle/ap-icon-close-circle.component.ts", lineNumber: 10 });
})();

// src/app/components/ap-ui-replay-mode/ap-ui-replay-mode.component.ts
function ApUiReplayModeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ApUiReplayModeComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.isMusicPressed.set(!ctx_r1.isMusicPressed());
      return \u0275\u0275resetView(ctx_r1.enableMusicSound.emit());
    });
    \u0275\u0275element(1, "ap-icon-music-circle", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("variant", ctx_r1.isMusicPressed() ? "pressed" : "default");
  }
}
function ApUiReplayModeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ApUiReplayModeComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(1, "ap-icon-close-circle", 8);
    \u0275\u0275elementEnd();
  }
}
var ApUiReplayModeComponent = class _ApUiReplayModeComponent {
  label = input("Replay Mode");
  showIcon = input(true);
  showCloseButton = input(true);
  enableMusicSound = output();
  close = output();
  isMusicPressed = signal(false);
  static \u0275fac = function ApUiReplayModeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApUiReplayModeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApUiReplayModeComponent, selectors: [["ap-ui-replay-mode"]], inputs: { label: [1, "label"], showIcon: [1, "showIcon"], showCloseButton: [1, "showCloseButton"] }, outputs: { enableMusicSound: "enableMusicSound", close: "close" }, decls: 6, vars: 3, consts: [[1, "play-mode-gradient", "inline-flex", "select-none", "items-center", "justify-center", "gap-2", "px-2", "py-1"], [1, "flex", "items-center", "justify-center", "text-center", "font-bold", "leading-none", "text-stroke", "break-normal", "tracking-wide"], [1, "flex", "space-x-2"], ["type", "button", "aria-label", "Music", 1, "inline-flex", "cursor-pointer", "items-center", "justify-center", "p-0"], ["type", "button", "aria-label", "Close", 1, "inline-flex", "cursor-pointer", "items-center", "justify-center", "p-0"], ["type", "button", "aria-label", "Music", 1, "inline-flex", "cursor-pointer", "items-center", "justify-center", "p-0", 3, "click"], [1, "inline-flex", "items-center", "justify-center", "size-8", 3, "variant"], ["type", "button", "aria-label", "Close", 1, "inline-flex", "cursor-pointer", "items-center", "justify-center", "p-0", 3, "click"], ["variant", "default", 1, "inline-flex", "items-center", "justify-center", "size-8"]], template: function ApUiReplayModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275conditionalCreate(4, ApUiReplayModeComponent_Conditional_4_Template, 2, 1, "button", 3);
      \u0275\u0275conditionalCreate(5, ApUiReplayModeComponent_Conditional_5_Template, 2, 0, "button", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.label(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showIcon() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCloseButton() ? 5 : -1);
    }
  }, dependencies: [CommonModule, ApIconMusicCircleComponent, ApIconCloseCircleComponent], styles: ["\n\n.play-mode-gradient[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, #000 50%, rgba(0, 0, 0, 0) 100%);\n  background-image:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0) 0%,\n      #000 50%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.text-stroke[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow:\n    1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9);\n}\n/*# sourceMappingURL=ap-ui-replay-mode.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApUiReplayModeComponent, [{
    type: Component,
    args: [{ selector: "ap-ui-replay-mode", imports: [CommonModule, ApIconMusicCircleComponent, ApIconCloseCircleComponent], template: `<div
  class="play-mode-gradient inline-flex select-none items-center justify-center gap-2 px-2 py-1"
>
  <h3
    class="flex items-center justify-center text-center font-bold leading-none text-stroke break-normal tracking-wide"
  >
    {{ label() }}
  </h3>

  <div class="flex space-x-2">
    @if (showIcon()) {
      <button
        class="inline-flex cursor-pointer items-center justify-center p-0"
        type="button"
        aria-label="Music"
        (click)="isMusicPressed.set(!isMusicPressed()); enableMusicSound.emit()"
      >
        <ap-icon-music-circle 
          class="inline-flex items-center justify-center size-8"
          [variant]="isMusicPressed() ? 'pressed' : 'default'"
        />
      </button>
    }

    @if (showCloseButton()) {
      <button
        class="inline-flex cursor-pointer items-center justify-center p-0"
        type="button"
        aria-label="Close"
        (click)="close.emit()"
      >
        <ap-icon-close-circle
          class="inline-flex items-center justify-center size-8"
          variant="default"
        />
      </button>
    }
  </div>
</div>
`, styles: ["/* src/app/components/ap-ui-replay-mode/ap-ui-replay-mode.component.css */\n.play-mode-gradient {\n  background-color: transparent;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, #000 50%, rgba(0, 0, 0, 0) 100%);\n  background-image:\n    linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0) 0%,\n      #000 50%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.text-stroke {\n  color: #fff;\n  text-shadow:\n    1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9);\n}\n/*# sourceMappingURL=ap-ui-replay-mode.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApUiReplayModeComponent, { className: "ApUiReplayModeComponent", filePath: "src/app/components/ap-ui-replay-mode/ap-ui-replay-mode.component.ts", lineNumber: 12 });
})();

export {
  ApIconCloseCircleComponent,
  ApIconMusicCircleComponent,
  FindModeIndex,
  isHistoryReplaySupported,
  PlayerWalletService,
  ApUiReplayModeComponent
};
//# sourceMappingURL=chunk-5GFZDTRR.js.map
