import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { SpinRequest } from '../../library/Protobuf/proto-ext';
import { calc, dec } from './user-profile.function';
import { environment } from '../../../environments/app-environment';
import { LoggerService } from '../logger/logger.service';
import { AppInterfaceService } from '../app-interface/app-interface.service';
import { serverProto } from '../../library/Protobuf/new_proto';
import * as i0 from "@angular/core";
/**
 * UserProfileService 處理Spin相關的業務
 */
export class UserProfileService {
    api = inject(AppInterfaceService);
    logger = inject(LoggerService);
    /** 貨幣代號 */
    _currency = signal('USD');
    /** 貨幣代號 */
    currency = this._currency.asReadonly();
    /** 貨幣符號 */
    _currencySymbol = signal('$');
    /** 貨幣符號 */
    currencySymbol = this._currencySymbol.asReadonly();
    /** 現金錢包 */
    _cashWallet = signal(0);
    /** 現金錢包 */
    cashWallet = this._cashWallet.asReadonly();
    /** 目前餘額, 收到spin result之後馬上更新, 會依照不同wallet顯示 */
    balance = computed(() => {
        // 先依照campaign setting顯示對應的錢包餘額, 如果沒有campaign則顯示cash wallet
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
    /** 所有模式 */
    allSpinModes = computed(() => {
        return [...this.buyFeatureModes(), ...this.buyChanceModes()];
    });
    /** 沒有Buy Feature也沒有Double Chance的模式 */
    noBuyFeatureOrChanceMode = computed(() => {
        return this.allSpinModes().length === 0;
    });
    /** 是否啟用 Buy Feature */
    isBuyFeature = computed(() => {
        return this.buyFeatureModes().some(m => m.name === this.spinMode());
    });
    /** 是否啟用 Double Chance */
    isDoubleChance = computed(() => {
        return this.buyChanceModes().some(m => m.name === this.spinMode());
    });
    /** 特殊spin的模式 */
    _spinMode = signal('');
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
    displayBet = computed(() => { return Math.round(this.bet() * this.buyChanceRate() * this.trnRate() * calc.numberBase) / calc.numberBase; });
    /** 真正從錢包扣的Bet, (包含Buy Feature, Buy Chance, Tournament) */
    realBet = computed(() => { return Math.round(this.bet() * this.buySpecialRate() * this.trnRate() * calc.numberBase) / calc.numberBase; });
    /** 基礎Bet列表 */
    _baseBetList = signal([1]);
    /** 基礎Bet列表 */
    baseBetList = this._baseBetList.asReadonly();
    /** Trn時Bet列表, 給Trn修改使用 */
    trnBetList = signal(null);
    bonusWalletMaxBetIndex = signal(null);
    /** Campaign的 Bet列表 */
    campaignBetList = computed(() => {
        // 如果沒有活動設定, 就回傳null
        if (!this.campaignSetting())
            return null;
        const campaign = this.campaignSetting();
        // 如果是Free Spins活動, 就回傳活動裡面設定的Bet列表
        if (campaign.displayType === 'freeSpins' && campaign.type === 'freeSpins') {
            return [campaign.spinBet];
        }
        // 如果是Free Bonus活動, 就回傳整個Bet列表, 但是超過bonusWalletMaxBetIndex的部分要過濾掉
        if (campaign.type === 'freeBonus') {
            const maxIndex = this.bonusWalletMaxBetIndex();
            if (maxIndex === null)
                return this.baseBetList();
            return this.baseBetList().filter((bet, index) => index <= maxIndex);
        }
        return null;
    });
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
        // 如果沒開啟 Buy Feature 也沒開啟 Double Chance，倍率直接回傳 1
        if (!this.isBuyFeature() && !this.isDoubleChance()) {
            return 1;
        }
        const modes = [...this.buyFeatureModes(), ...this.buyChanceModes()];
        const foundMode = modes.find(m => m.name === this.spinMode());
        return foundMode ? foundMode.rate : 1;
    });
    /** 只看Double Chance的倍率 (ex: 1.2) */
    buyChanceRate = computed(() => {
        if (!this.isDoubleChance()) {
            return 1;
        }
        const foundMode = this.buyChanceModes().find(m => m.name === this.spinMode());
        return foundMode ? foundMode.rate : 1;
    });
    /** TRN的倍率 (ex: 1.1) */
    trnRate = computed(() => {
        return (this.trnSetting()?.feeRatio || 0) + 1;
    });
    constructor() {
        if (environment.production === false) {
            window.profile = this;
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
    updateLoginResult(result) {
        if (!result)
            return;
        this.updateLoginResultNote(result.note);
    }
    /** 更新登入結果與相關資訊, 包括在Note裡面的CampaignList */
    updateLoginResultNote(note) {
        calc.numberBase = note.conversion_rate;
        calc.amountRatio = note.amountratio ?? 1;
        Object.freeze(calc);
        dec.decimalPlaces = note.decimalplaces ?? 3;
        Object.freeze(dec);
        // 設定CashBetSet
        const betList = note.betlevels.map((bet) => calc.s2c(bet)) || [1];
        const bet = betList[note.defaultbet || 0];
        this._baseBetList.set(betList);
        this._bet.set(bet);
        // Campaign相關的BetList設定
        const bonusWalletMaxBetIndex = note.bonus_wallet_max_bet_index || null;
        this.bonusWalletMaxBetIndex.set(bonusWalletMaxBetIndex);
        // 初始設定現金錢包
        this._cashWallet.set(calc.s2c(note.balance));
        this._currency.set(note.currency);
        this._currencySymbol.set(note.currency_symbol);
        const bfRules = [];
        const dcRules = [];
        note.game_mode?.forEach((mode) => {
            if (mode[0].startsWith("bf"))
                bfRules.push({ name: mode[0], rate: mode[1] });
            if (mode[0].startsWith("dc"))
                dcRules.push({ name: mode[0], rate: mode[1] });
        });
        this._buyFeatureModes.set(bfRules);
        this._buyChanceModes.set(dcRules);
    }
    /** 最終的trn資料 */
    trnData = computed(() => {
        if (!this.trnSetting())
            return null;
        return {
            id: this.trnSetting()?.id || '',
            roomId: this.trnSetting()?.roomId || '',
            feeRatio: this.trnSetting()?.feeRatio || 0,
            extra: this.bet() * this.buySpecialRate() * (this.trnSetting()?.feeRatio || 0),
        };
    });
    /** 更新目前的Bet, 如果不在betList中則不更新 */
    updateBet(bet) {
        // 檢查bet是否在betList中
        const betList = this.betList();
        if (betList.indexOf(bet) === -1) {
            this.logger.warn(`UserProfileService: Attempted to set invalid bet amount: ${bet}`);
            return;
        }
        this._bet.set(bet);
    }
    /** 設定SpinMode(buy feature, buy chance), 關閉請設定null */
    updateSpinMode(mode) {
        // 關閉SpinMode
        if (mode === null) {
            this._spinMode.set('');
            return;
        }
        // 檢查mode是否在allSpinModes中
        const allModes = this.allSpinModes();
        if (mode && !allModes.some(m => m.name === mode)) {
            this.logger.warn(`UserProfileService: Attempted to set invalid spin mode: ${mode}`);
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
            tournament: this.trnData(),
        };
    });
    /** 更新旋轉結果, 也包括在Note裡面的CampaignList */
    onSpinResult(result) {
        // 更新cash wallet
        this._cashWallet.set(calc.s2c(result.data.balance));
    }
    /** 更新現金錢包 */
    onUpdateCashwallet(amount) {
        this._cashWallet.set(amount);
    }
    /** 獲取遊戲的 Spin 結果, 可以用await等待回覆 */
    async sendSpinRequest() {
        const spinData = serverProto.spin.create();
        /** 取整數 */
        spinData.bet = Math.floor(calc.c2s(this.betData().bet ?? 0));
        const note = {
            mode: this.betData().modeName
        };
        /** 處理bf dc rs等等額外事件的spin */
        if (this.betData().modeName) {
            note.mode = this.betData().modeName;
        }
        /** 處理Trn */
        if (this.trnData()) {
            note.tournament_id = this.trnData().id;
            note.room_id = this.trnData().roomId;
            note.extra_amount = calc.c2s(this.trnData().extra || 0);
        }
        /** 處理Campaign */
        if (this.campaignSetting()) {
            note.campaign_id = this.campaignSetting().id;
            note.bonus_wallet_id = this.campaignSetting().walletId;
        }
        spinData.note = JSON.stringify(note);
        const spin = new SpinRequest();
        spin.data = spinData;
        this.api.sendPack(spin.pack);
        // 等待Spin結果
        return new Promise((resolve, reject) => {
            const subscription = this.api.spinResult$.subscribe((result) => {
                resolve(result);
                subscription.unsubscribe();
            });
        });
    }
    static ɵfac = function UserProfileService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserProfileService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserProfileService, factory: UserProfileService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserProfileService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=user-profile.service.js.map