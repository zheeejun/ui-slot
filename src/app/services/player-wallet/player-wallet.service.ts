import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { LoginResult, SpinRequest, SpinResult } from '../../shared/Protobuf/proto-ext';
import { LoginResultNote } from '../app-interface/login-result-note.interface';
import { BetDataInterface, BetDataTournamentInterface, SpinModeType } from '../../../chiikawa/ApWeb/ApWebInterface';
import { calc } from './player-wallet.function';
import { environment } from '../../../environments/app-environment';
import { LoggerService } from '../logger/logger.service';
import Decimal from 'decimal.js';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { CampaignType } from '../campaign-ctrl/campaign-ctrl.interface';
import { serverProto } from '../../shared/Protobuf/new_proto';
import { SpinDataNote } from '../app-interface/spin-data-note.interface';
import { ApBuyFeatureCard } from '../../pages/event-buy-feature/event-buy-feature.interface';
import { FindModeIndex } from '../../pages/event-buy-feature/event-buy-feature.function';
import { ClientSessionService } from '../client-session/client-session.service';
import { isHistoryReplaySupported } from '../history-replay/history-replay.function';
import { Subject } from 'rxjs';
import { WalletSpinResult } from './player-wallet.interface';

/**
 * PlayerWalletService 處理Spin相關的業務
 */
@Injectable({
  providedIn: 'root'
})
export class PlayerWalletService {
  protected api = inject( AppInterfaceService);
  protected logger = inject(LoggerService);
  protected session = inject(ClientSessionService);
  /** 貨幣代號 */
  private _currency = signal<string>('USD');
  /** 貨幣代號 */
  public readonly currency = this._currency.asReadonly();
  /** 貨幣符號 */
  private _currencySymbol = signal<string>('');
  /** 貨幣符號 */
  public readonly currencySymbol = this._currencySymbol.asReadonly();

  /** 現金錢包 */
  private _cashWallet = signal<number>(0);
  /** 現金錢包 */
  public readonly cashWallet = this._cashWallet.asReadonly();

  /** 目前餘額, 收到spin result之後馬上更新, 會依照不同wallet顯示 */
  public readonly balance = computed<number>(() => {
    // 先依照campaign setting顯示對應的錢包餘額, 如果沒有campaign則顯示cash wallet
    if (this.campaignSetting()) {
      return this.campaignSetting()!.balance;
    }
    return this._cashWallet();
  });

  /** Buy Feature 有哪些模式 */
  private _buyFeatureModes = signal<{ name: SpinModeType, rate: number }[]>([]);
  /** Buy Feature 有哪些模式 */
  public buyFeatureModes = this._buyFeatureModes.asReadonly();
  /** Double Chance 有哪些模式 */
  private _buyChanceModes = signal<{ name: SpinModeType, rate: number }[]>([]);
  /** Double Chance 有哪些模式 */
  public buyChanceModes = this._buyChanceModes.asReadonly();
  /** 特殊spin的模式 (extra bet) */
  private _extraBetMode = signal<{ name: SpinModeType, rate: number }[]>([]);
  /** 特殊spin的模式 (extra bet) */
  public extraBetMode = this._extraBetMode.asReadonly();
  /** 所有模式 */
  public allSpinModes = computed<{ name: SpinModeType, rate: number }[]>(() => {
    return [...this.buyFeatureModes(), ...this.buyChanceModes(), ...this.extraBetMode()];
  });
  /** 沒有Buy Feature也沒有Double Chance的模式 */
  public isBuyFeatureDisabled = computed(() => {
    return this.buyFeatureModes().length === 0 && this.buyChanceModes().length === 0;
  });

  /** Buy Feature的卡片資訊, 用來顯示在下注窗 */
  readonly buyFeatureCards = signal<ApBuyFeatureCard[]>([]);

  /** Double Chance的卡片資訊, 用來顯示在下注窗 */
  readonly buyChanceCards = signal<ApBuyFeatureCard[]>([]);

  /** 是否啟用 Buy Feature */
  public readonly isBuyFeature = computed<boolean>(() => {
    return this.buyFeatureModes().some(m => m.name === this.spinMode());
  });
  /** 是否啟用 Double Chance */
  public readonly isDoubleChance = computed<boolean>(() => {
    return this.buyChanceModes().some(m => m.name === this.spinMode());
  });
  /** 是否啟用 Extra Bet */
  public readonly isExtraBet = computed<boolean>(() => {
    return this.extraBetMode().some(m => m.name === this.spinMode());
  });
  /** 是否為特殊spin模式 */
  public readonly isSpecialSpinMode = computed<boolean>(() => {
    return this.allSpinModes().some(m => m.name === this.spinMode());
  });
  /** 特殊spin的模式 */
  private _spinMode = signal<SpinModeType>('');
  /** 特殊spin的模式 */
  public readonly spinMode = this._spinMode.asReadonly();

  /** 競賽下注的資料, 用來給trn-ctrl設定 */
  public readonly trnSetting = signal<BetDataTournamentInterface | null>(null);
  /** 活動相關設定 */
  public readonly campaignSetting = signal<CampaignType | null>(null);
  /** 活動ID */
  public readonly campaignId = computed<string | null>(() => {
    const campaign = this.campaignSetting();
    if (!campaign) return null;
    return campaign.id ?? null;
  });

  /** 目前的Bet */
  public readonly _bet = signal<number>(1);
  /** 目前的Bet */
  public readonly bet = this._bet.asReadonly();
  /** 顯示在下注窗的Bet, (不包含Buy Feature) */
  readonly displayBet = computed<number>(() => { return new Decimal(this.bet()).mul(this.displayBetRate()).mul(this.trnRate()).mul(calc.numberBase).toDecimalPlaces(0, Decimal.ROUND_HALF_UP).div(calc.numberBase).toNumber(); });
  /** 真正從錢包扣的Bet, (包含Buy Feature, Buy Chance, Tournament) */
  readonly realBet = computed<number>(() => { return new Decimal(this.bet()).mul(this.buySpecialRate()).mul(this.trnRate()).mul(calc.numberBase).toDecimalPlaces(0, Decimal.ROUND_HALF_UP).div(calc.numberBase).toNumber(); });

  /** 基礎Bet列表 */
  public readonly _baseBetList = signal<number[]>([1]);
  /** 基礎Bet列表 */
  public readonly baseBetList = this._baseBetList.asReadonly();

  /** Trn時Bet列表, 給Trn修改使用 */
  public trnBetList = signal<number[] | null>(null);

  public bonusWalletMaxBetIndex = signal<number | null>(null);

  /** Campaign的 Bet列表 */
  public campaignBetList = signal<number[] | null>(null);

  /** 目前的Bet List, 會依情境選擇 */
  public readonly betList = computed<number[]>(() => {
    if (this.trnBetList()) { return this.trnBetList()!; }
    if (this.campaignBetList()) { return this.campaignBetList()!; }
    return this.baseBetList();
  });

  /** 依照目前的Bet List, 現在的Bet對應的index, 找不到的話回傳null */
  public readonly betIndex = computed<number | null>(() => {
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
    if (this.isBetMin()) return;
    const nextBet = this.betList()[(this.betIndex() ?? 1) - 1];
    this.updateBet(nextBet);
  }

  /** 增加投注 */
  increaseBet() {
    if (this.isBetMax()) return;
    const nextBet = this.betList()[(this.betIndex() ?? -1) + 1];
    this.updateBet(nextBet);
  }

  /** 特殊spin的倍率 (ex: 50, 1.2, buy feature, buy chance共用) */
  public buySpecialRate = computed<number>(() => {
    // 如果沒開啟Special Spin，倍率直接回傳 1
    if (!this.isSpecialSpinMode()) { return 1; }
    const foundMode = this.allSpinModes().find(m => m.name === this.spinMode());
    return foundMode ? foundMode.rate : 1;
  });

  /** Display bet 倍率 (ex: 1.2) */
  public displayBetRate = computed<number>(() => {
    if (this.isDoubleChance()  || this.isExtraBet()) {
      const foundMode = this.allSpinModes().find(m => m.name === this.spinMode());
      return foundMode ? foundMode.rate : 1;      
    }
    return 1;
  });

  /** TRN的倍率 (ex: 1.1) */
  public trnRate = computed<number>(() => {
    return (this.trnSetting()?.feeRatio || 0) + 1;
  });

  constructor() {
    if (environment.production === false) {
      (window as any).wallet = this;
    }

    this.api.updateBalance$.subscribe(this.onUpdateCashwallet.bind(this));
    this.api.spinResult$.subscribe(this.onSpinResult.bind(this));

    // 初始化
    effect(() => {
      // 只追蹤這個
      const result = this.api.loginResult(); 
      // 只針對 loginResult 的變化做反應, updateLoginResult內部的讀取不被追蹤
      untracked(() => this.updateLoginResult(result));
    });
  }

  /** 更新登入結果 */
  updateLoginResult(result: LoginResult | null) {
    if (!result) return;
    this.updateLoginResultNote(result.note);
  }

  /** 更新登入結果與相關資訊, 包括在Note裡面的CampaignList */
  updateLoginResultNote(note: LoginResultNote) {
    // 設定CashBetSet
    const betList: number[] = note.betlevels.map((bet) => calc.s2c(bet)) || [1];
    const bet = betList[note.defaultbet || 0];
    this._baseBetList.set(betList);
    this._bet.set(bet);

    // Campaign相關的BetList設定
    const bonusWalletMaxBetIndex = note.bonus_wallet_max_bet_index || null;
    this.bonusWalletMaxBetIndex.set(bonusWalletMaxBetIndex);

    const buyFeatureEnabled = note.buyfeature?.enable === 1;
    const extraBetEnabled = note.extrabet === true;

    // 初始設定現金錢包
    this._cashWallet.set(calc.s2c(note.balance));
    this._currency.set(note.currency);
    this._currencySymbol.set(note.currency_symbol || '');
    const bfRules: { name: SpinModeType, rate: number }[] = [];
    const dcRules: { name: SpinModeType, rate: number }[] = [];
    const ebRules: { name: SpinModeType, rate: number }[] = [];

    note.game_mode?.forEach((mode) => {
      if (mode[0].startsWith("bf"))
        bfRules.push({ name: mode[0] as SpinModeType, rate: mode[1] });
      if (mode[0].startsWith("dc"))
        dcRules.push({ name: mode[0] as SpinModeType, rate: mode[1] });
      if (mode[0].startsWith("eb"))
        ebRules.push({ name: mode[0] as SpinModeType, rate: mode[1] });
    });

    bfRules.sort((a, b) => FindModeIndex(a.name ?? '') - FindModeIndex(b.name ?? ''));
    dcRules.sort((a, b) => FindModeIndex(a.name ?? '') - FindModeIndex(b.name ?? ''));
    ebRules.sort((a, b) => FindModeIndex(a.name ?? '') - FindModeIndex(b.name ?? ''));

    // 更新bc bf card
    const bfCards: ApBuyFeatureCard[] = [];
    for (const mode of bfRules) {
      const index = FindModeIndex(mode.name ?? '');
      const isDemoAvailable = isHistoryReplaySupported(this.session.gameId ?? '');
      const bfCard: ApBuyFeatureCard = {
        mode: mode.name,
        currency: this.currencySymbol(),
        rate: mode.rate,
        order: index,
        isDemoAvailable: isDemoAvailable,
      };
      bfCards.push(bfCard);
    }
    this.buyFeatureCards.set(bfCards);

    // 展示Buy Chance卡片
    const dcCards: ApBuyFeatureCard[] = [];
    for (const mode of dcRules) {
      //const bcImg = await this.getImgPath(mode.name ?? "");
      const dcCard: ApBuyFeatureCard = {
        mode: mode.name,
        currency: this.currencySymbol(),
        rate: mode.rate,
        order: 0,
      };
      dcCards.push(dcCard);
    }
    this.buyChanceCards.set(dcCards);

    if (buyFeatureEnabled) this._buyFeatureModes.set(bfRules);
    if (buyFeatureEnabled) this._buyChanceModes.set(dcRules);
    if (extraBetEnabled) this._extraBetMode.set(ebRules);
  }

  /** 最終的trn資料 */
  readonly trnData = computed<BetDataTournamentInterface | null>(() => {
    if (!this.trnSetting()) return null;
    return {
      id: this.trnSetting()?.id || '',
      roomId: this.trnSetting()?.roomId || '',
      feeRatio: this.trnSetting()?.feeRatio || 0,
      extra: new Decimal(this.bet()).mul(this.buySpecialRate()).mul(this.trnSetting()?.feeRatio || 0).toNumber(),
    }
  });

  /** 更新目前的Bet, 如果不在betList中則不更新 */
  public updateBet(bet: number) {
    // 檢查bet是否在betList中
    const betList = this.betList();
    if (betList.indexOf(bet) === -1) {
      this.logger.warn(`PlayerWalletService: Attempted to set invalid bet amount: ${bet}`);
    }
    this._bet.set(bet);
  }

  /** 設定SpinMode(buy feature, buy chance), 關閉請設定null或是空字串 */
  public updateSpinMode(mode: SpinModeType | null) {
    // 關閉SpinMode
    if (mode === null || mode === '') {
      this._spinMode.set('');
      return;
    }

    // 檢查mode是否在allSpinModes中
    const allModes = this.allSpinModes();
    if (mode && !allModes.some(m => m.name === mode)) {
      this.logger.warn(`PlayerWalletService: Attempted to set invalid spin mode: ${mode}`);
      return;
    }
    this._spinMode.set(mode);
  }

  private campaignBetId = computed<string | undefined>( () => {
    if (this.session.isLatestCampaign) {
      return this.campaignSetting()?.betId;
    }
    return this.campaignSetting()?.id;
  });

  private campaignWalletId = computed<number | undefined>(() => {
    return this.campaignSetting()?.walletId;
  });

  /** 取得目前的BetData, 整包傳給遊戲iframe使用, 因為只跟Bet相關所以不會包含Balance(cash wallet, bonus wallet) */
  public readonly betData = computed<BetDataInterface>(() => {
    return {
      bet: this.bet(),
      betIndex: this.betIndex() || 0,
      betList: this.betList(),
      isBuyFeature: this.isBuyFeature(),
      isDoubleChance: this.isDoubleChance(),
      modeName: this.spinMode() || "",
      campaignId: this.campaignBetId() || "",
      campaignWalletId: this.campaignWalletId() || null,
      tournament: this.trnData(),
    }
  });

  /** 更新旋轉結果, 也包括在Note裡面的CampaignList */
  protected onSpinResult(result: SpinResult) {
    // 更新cash wallet
    this._cashWallet.set(calc.s2c(result.data.balance as number));
  }
  
  /** 更新現金錢包 */
  protected onUpdateCashwallet(amount: number) {
    this._cashWallet.set(amount);
  }

  public setCashWallet(amount: number) {
    this._cashWallet.set(amount);
  }

  /** 上一次Spin的時間, 用來計算Spin的間隔時間, 以及提供給遊戲端做一些效能參考 */
  private lastSpinTime: number | null = null;

  /** 遊戲結束時間, 用來提供給遊戲端做一些效能參考 */
  private gameEndTime: number | null = null;

  /** 上一次遊戲的持續時間, 用來提供給遊戲端做一些效能參考 */
  public lastGameDuration: number | null = null;

  /** 演出結束後更新遊戲持續時間 */
  updateGameDuration() {
    // 更新上一次遊戲持續時間
    const now = Date.now();
    if (this.gameEndTime) {
      this.lastGameDuration = now - this.gameEndTime;
    }

    // 更新遊戲結束時間
    this.gameEndTime = now;
  }

  /** 遊戲速度, normal:0 fast:1 very fast:2 */
  public gameSpeed: number = 0;

  /** Auto Spin剩餘次數, null代表沒有Auto Spin */
  public autoSpinRemaining: number | null = null;

  /** 獲取遊戲的 Spin 結果
   * @param gameString 這是給遊戲端傳出來的參數, 可以讓Server知道這次Spin的額外資訊(依照遊戲規格), 預設為空字串, 代表沒有額外資訊
   * @param bet 只給測試用, 正常情況下會使用 this.bet() 的值
   * @param mode 只給測試用, 正常情況下會使用 this.spinMode() 的值
   */
  public sendSpinRequest(gameString: string = '', inputBet?: number, inputMode?: string) {
    let bet = this.betData().bet;
    let mode = this.betData().modeName;

    // 如果有傳入參數, 就使用參數, 沒有的話就使用目前的值
    if (inputBet !== undefined) {
      bet = inputBet;
    }
    if (inputMode !== undefined) {
      mode = inputMode as SpinModeType;
    }

    const spinData = serverProto.spin.create();
    // 取整數
    spinData.bet = Math.floor(calc.c2s(bet ?? 0));
    const note: SpinDataNote = {
      game: gameString,
      mode: mode,
      game_parameters: {
        round_time_gap: this.lastSpinTime ? Date.now() - this.lastSpinTime : 0,
        last_spin_duration: this.lastGameDuration ?? 0,
        spin_speed: this.gameSpeed,
        spin_epoch: Date.now(),
        auto_spin: this.autoSpinRemaining === Infinity ? -1 : (this.autoSpinRemaining === null ? undefined : this.autoSpinRemaining),
      },
    };

    // 處理bf dc rs等等額外事件的spin
    if (this.betData().modeName) {
      note.mode = this.betData().modeName;
    }

    // 處理Trn
    if (this.trnData()) {
      note.tournament_id = this.trnData()!.id;
      note.room_id = this.trnData()!.roomId;
      note.extra_amount = calc.c2s(this.trnData()!.extra || 0);
    }

    // 處理Campaign
    if (this.campaignSetting()) {
      note.campaign_id =  this.campaignBetId();
      note.bonus_wallet_id = this.campaignSetting()!.walletId;
    }

    spinData.note = JSON.stringify(note);

    const spin = new SpinRequest();
    spin.data = spinData;
    this.api.sendPack(spin.pack);

    // 更新上一次Spin的時間
    this.lastSpinTime = Date.now();
  }

  multiplyUserBet(multiplier: number = 1): number {
    // 轉成
    const newBet = new Decimal(this.bet()).mul(multiplier).toNumber();
    return newBet;
  }
}
