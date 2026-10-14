import {
  PlayerWalletService
} from "./chunk-HNY47POZ.js";
import {
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-NMZ7HZYU.js";
import {
  AppInterfaceService
} from "./chunk-Q3NF4QZ2.js";
import {
  decimal_default
} from "./chunk-TIGXKRQH.js";
import {
  ClientSessionService,
  environment
} from "./chunk-B2M5HODU.js";
import {
  Injectable,
  Subject,
  computed,
  delay,
  effect,
  inject,
  setClassMetadata,
  signal,
  take,
  timer,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/chiikawa/Tool/util/IGameCustomData.ts
var RULE_GA_ES = "GA_ES";

// src/app/services/bottom-panel/bottom-panel.service.ts
var BottomPanelService = class _BottomPanelService {
  game = inject(GameIframeCtrlService);
  api = inject(AppInterfaceService);
  wallet = inject(PlayerWalletService);
  session = inject(ClientSessionService);
  /** Debug Panel用: 強制觸發Spin Button Mode */
  debugSpinButtonModeSubject = new Subject();
  /** Debug Panel用: 強制觸發Spin Button Mode */
  get debugSpinButtonMode$() {
    return this.debugSpinButtonModeSubject.asObservable();
  }
  /** 判斷遊戲是否忙碌中 */
  isBusy = computed(() => this.isAutoSpinning() || this.isInGlobalCooldown() || this.game.status() !== "Idle" || this.game.isInGamePopup() || !this.game.isInteractionEnabled());
  /** 目前的Bet*/
  bet = computed(() => this.wallet.displayBet());
  _balance = signal(this.wallet.balance());
  /** 目前顯示在畫面的餘額, 不能完全反映userProfile的餘額, 需要有不同時機點更新 */
  balance = this._balance.asReadonly();
  _win = signal(null);
  /** 顯示在Bottmon Panel欄位的贏分*/
  win = this._win.asReadonly();
  _autoSpinTotal = signal(null);
  /** auto spin總共要自動幾次 */
  autoSpinTotal = this._autoSpinTotal.asReadonly();
  _autoSpinRemaining = signal(null);
  /** auto spin剩下幾次 */
  autoSpinRemaining = this._autoSpinRemaining.asReadonly();
  /** 是否正在auto spin */
  isAutoSpinning = computed(() => this.autoSpinRemaining() !== null && this.autoSpinTotal() !== null);
  /** 目前的Feature Mode總共幾次, 沒有就null */
  featureTotal = computed(() => {
    return this.game.featureModeTotal() || null;
  });
  /** 目前的Feature Mode還剩幾次, 沒有就null */
  featureRemaining = computed(() => {
    return this.game.featureModeRemaining() || null;
  });
  /** 目前是否在Feature Mode */
  isFeatureMode = computed(() => this.game.isFeatureMode());
  /** auto spin事件 */
  autoSpinSubject = null;
  /** 餘額不足事件 */
  insufficientBalanceSubject = new Subject();
  /** 餘額不足事件 */
  get insufficientBalance$() {
    return this.insufficientBalanceSubject.asObservable();
  }
  /** 離開確認事件 */
  exitConfirmSubject = new Subject();
  /** 離開確認事件 */
  get exitConfirm$() {
    return this.exitConfirmSubject.asObservable();
  }
  /** 餘額不足/離開確認等 message popup 是否顯示中 */
  isMessagePopupVisible = signal(false);
  /** 是否餘額不足 */
  isBalanceInsufficient = computed(() => {
    if (this.wallet.campaignSetting()?.displayType === "freeSpins")
      return false;
    return this.wallet.balance() < this.wallet.realBet();
  });
  /** 每一回合(spin)結束才會更新的FreeSpin狀態 */
  isFreeSpinRound = signal(false);
  /** 每一回合(spin)結束才會更新的FreeBonus狀態 */
  isFreeBonusRound = signal(false);
  // Hold for Turbo Spin（按住加速）相關設定
  _holdTurboEnabled = signal(false);
  setHoldTurboEnabled(value) {
    this._holdTurboEnabled.set(value);
  }
  /** Hold for Turbo Spin（按住加速）功能開關，預設關閉，可由 Lab 的 Panel Debug 開啟 */
  holdTurboEnabled = computed(() => this._holdTurboEnabled());
  /** Hold for Turbo Spin 參數：長按門檻毫秒數 */
  turboHoldThresholdMs = signal(500);
  /** Hold for Turbo Spin 參數：連續觸發間隔毫秒數 */
  turboSkipIntervalMs = signal(100);
  /** Hold for Turbo Spin 參數：閒置提示顯示延遲毫秒數 */
  idleTooltipMs = signal(3e3);
  // Global Cooldown相關設定
  /** Global Cooldown的時間 (秒), 預設 0 */
  _globalCooldownTime = signal(0);
  /** Global Cooldown的時間 (秒), 預設 0 */
  get globalCooldownTime() {
    return this._globalCooldownTime.asReadonly();
  }
  /** 目前是否正處於Global Cooldown中 */
  isGlobalCooldownActive = signal(false);
  /** 是否還在Global Cooldown中 */
  isInGlobalCooldown = computed(() => this.isGlobalCooldownActive());
  /** Global Cooldown開始事件 */
  globalCooldownStartedSubject = new Subject();
  /** Global Cooldown開始事件 */
  get globalCooldownStarted$() {
    return this.globalCooldownStartedSubject.asObservable();
  }
  /** Global Cooldown結束事件, 給等待中的auto spin訂閱 */
  globalCooldownEndedSubject = new Subject();
  /** Global Cooldown倒數計時器 */
  globalCooldownSubscription = null;
  /** auto spin等待Global Cooldown結束的訂閱 */
  autoSpinCooldownWaitSubscription = null;
  constructor() {
    if (!environment.production) {
      window.panel = this;
    }
    effect(() => {
      this.wallet.campaignId();
      this.api.loginResult();
      untracked(() => this._balance.set(this.wallet.balance()));
    });
    this.game.readyForSpin$.subscribe(() => {
      this._balance.set(this.wallet.balance());
    });
    this.game.balanceAdded$.subscribe((message) => {
      this._balance.update((balance) => new decimal_default(balance).plus(message.amount).toNumber());
    });
    this.game.finalBalanceShown$.subscribe(() => {
      this._balance.set(this.wallet.balance());
    });
    this.game.winMoneyUpdated$.subscribe((message) => {
      this._win.set(message.win > 0 ? message.win : null);
    });
    this.game.readyForSpin$.subscribe(() => {
      const isFreeSpin = this.wallet.campaignSetting()?.displayType === "freeSpins";
      const isFreeBonus = this.wallet.campaignSetting()?.displayType === "freeBonus";
      this.isFreeSpinRound.set(isFreeSpin);
      this.isFreeBonusRound.set(isFreeBonus);
    });
    effect(() => {
      this.wallet.campaignId();
      untracked(() => {
        const campaign = this.wallet.campaignSetting();
        const isFreeSpin = campaign?.displayType === "freeSpins";
        const isFreeBonus = campaign?.displayType === "freeBonus";
        this.isFreeSpinRound.set(isFreeSpin);
        this.isFreeBonusRound.set(isFreeBonus);
      });
    });
    effect(() => {
      const autoSpinRemaining = this.autoSpinRemaining();
      untracked(() => {
        this.wallet.autoSpinRemaining = autoSpinRemaining;
      });
    });
    effect(() => {
      const customRule = this.game.customData()?.customRule || null;
      if (customRule === RULE_GA_ES) {
        this._globalCooldownTime.set(3);
      }
    });
  }
  sendDebugSpinButtonMode(mode) {
    this.debugSpinButtonModeSubject.next(mode);
  }
  sendDebugFreeSpinRound(enable) {
    this.isFreeSpinRound.set(enable);
  }
  sendDebugFreeBonusRound(enable) {
    this.isFreeBonusRound.set(enable);
  }
  sendDebugInsufficientBalance() {
    this.insufficientBalanceSubject.next({ current: this.wallet.balance(), required: this.wallet.bet() });
  }
  immediatelyStop() {
    this.game.immediatelyStop();
  }
  /** 觸發spin流程  */
  spin() {
    if (this.game.isInGamePopup()) {
      return;
    }
    if (this.game.status() !== "Idle") {
      this.game.immediatelyStop();
      return;
    }
    if (this.isInGlobalCooldown()) {
      return;
    }
    if (this.wallet.campaignSetting()?.displayType === "freeSpins") {
      this.game.spin();
      this.startGlobalCooldown();
      const spinningSub2 = this.game.startSpinning$.subscribe((content) => {
        spinningSub2.unsubscribe();
        this.wallet.sendSpinRequest(content.gameString);
      });
      this._win.set(null);
      return;
    }
    if (this.isBalanceInsufficient()) {
      this.insufficientBalanceSubject.next({ current: this.wallet.balance(), required: this.wallet.realBet() });
      return;
    }
    this.game.spin();
    this.startGlobalCooldown();
    const spinningSub = this.game.startSpinning$.subscribe((content) => {
      spinningSub.unsubscribe();
      this.wallet.sendSpinRequest(content.gameString);
    });
    this._balance.update((balance) => new decimal_default(balance).minus(this.wallet.realBet()).toNumber());
    this._win.set(null);
  }
  /** 開始auto spin, 傳入要自動幾次 */
  startAutoSpin(times) {
    if (times <= 0)
      return;
    if (this.autoSpinSubject)
      return;
    if (this.isBalanceInsufficient()) {
      this.insufficientBalanceSubject.next({ current: this.wallet.balance(), required: this.wallet.realBet() });
      return;
    }
    this._autoSpinTotal.set(times);
    this._autoSpinRemaining.set(times - 1);
    this.waitForCooldownThen(() => this.spin());
    this.autoSpinSubject = this.game.readyForSpin$.pipe(delay(50)).subscribe(() => {
      const remaining = this.autoSpinRemaining();
      if (remaining === null || remaining <= 0) {
        this.stopAutoSpin();
      } else if (this.isBalanceInsufficient()) {
        this.insufficientBalanceSubject.next({ current: this.wallet.balance(), required: this.wallet.realBet() });
        this.stopAutoSpin();
      } else if (this.game.popupRewardSystemLevelUp()) {
        const sub = this.game.InGamePopupClosed$.pipe(delay(50)).subscribe(() => {
          sub.unsubscribe();
          this.waitForCooldownThen(() => {
            this.spin();
            if (remaining !== null)
              this._autoSpinRemaining.set(remaining - 1);
          });
        });
      } else {
        this.waitForCooldownThen(() => {
          this.spin();
          if (remaining !== null)
            this._autoSpinRemaining.set(remaining - 1);
        });
      }
    });
  }
  /** 停止auto spin, 清空相關狀態 */
  stopAutoSpin() {
    this._autoSpinTotal.set(null);
    this._autoSpinRemaining.set(null);
    this.autoSpinSubject?.unsubscribe();
    this.autoSpinSubject = null;
    this.autoSpinCooldownWaitSubscription?.unsubscribe();
    this.autoSpinCooldownWaitSubscription = null;
  }
  /** 音樂開關 */
  enableMusic(enabled) {
    this.game.send(createApWebMessage("SetMusic", { enabled }));
  }
  /** 音效開關 */
  enableSound(enabled) {
    this.game.send(createApWebMessage("SetSound", { enabled }));
  }
  /** 設定遊戲速度 0: 慢速, 1: 正常, 2: 快速 */
  setGameSpeed(speed) {
    this.game.send(createApWebMessage("SetSpinType", { speed }));
    this.wallet.gameSpeed = speed;
  }
  /** 觸發一次Global Cooldown倒數, 時間到後解除isInGlobalCooldown並通知等待中的auto spin */
  startGlobalCooldown() {
    const cooldownTime = this.globalCooldownTime();
    if (cooldownTime <= 0)
      return;
    this.globalCooldownStartedSubject.next();
    this.isGlobalCooldownActive.set(true);
    this.globalCooldownSubscription?.unsubscribe();
    this.globalCooldownSubscription = timer(cooldownTime * 1e3).subscribe(() => {
      this.isGlobalCooldownActive.set(false);
      this.globalCooldownEndedSubject.next();
    });
  }
  /** 若還在Global Cooldown中, 等到結束才執行action; 否則立即執行 */
  waitForCooldownThen(action) {
    if (!this.isInGlobalCooldown()) {
      action();
      return;
    }
    this.autoSpinCooldownWaitSubscription?.unsubscribe();
    this.autoSpinCooldownWaitSubscription = this.globalCooldownEndedSubject.pipe(take(1)).subscribe(() => {
      this.autoSpinCooldownWaitSubscription = null;
      action();
    });
  }
  /** 是否為 Double Chance 模式 */
  isDoubleChance = computed(() => this.wallet.isDoubleChance());
  /** 關閉 Double Chance 模式 */
  stopDoubleChance() {
    this.wallet.updateSpinMode(null);
  }
  /** 是否達到最大投注 */
  isBetMax = computed(() => this.wallet.isBetMax());
  /** 增加投注 */
  increaseBet() {
    if (this.isBetMax())
      return;
    this.wallet.increaseBet();
  }
  /** 是否達到最小投注 */
  isBetMin = computed(() => this.wallet.isBetMin());
  /** 減少投注 */
  decreaseBet() {
    if (this.isBetMin())
      return;
    this.wallet.decreaseBet();
  }
  /** 觸發離開確認 */
  sendExitRequest() {
    this.exitConfirmSubject.next();
  }
  exitAndRedirect() {
    if (this.session.backurl) {
      window.location.href = decodeURIComponent(this.session.backurl);
    }
  }
  static \u0275fac = function BottomPanelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomPanelService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BottomPanelService, factory: _BottomPanelService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomPanelService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/bottom-panel/spin-button.type.ts
var SPIN_BUTTON_MODES = [
  "default",
  "auto-spin",
  "double-chance",
  "double-chance-auto-spin",
  "free-spin",
  "free-bonus",
  "free-bonus-auto-spin",
  "feature-mode"
];
var AUTO_SPIN_TIMES_BUTTON_MODES = [
  "feature-mode",
  "free-bonus-auto-spin",
  "double-chance-auto-spin",
  "auto-spin"
];
function isAutoSpinTimesButtonMode(mode) {
  return AUTO_SPIN_TIMES_BUTTON_MODES.includes(mode);
}

export {
  RULE_GA_ES,
  BottomPanelService,
  SPIN_BUTTON_MODES,
  isAutoSpinTimesButtonMode
};
//# sourceMappingURL=chunk-NVHIFZTE.js.map
