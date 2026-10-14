import { Component, computed, DestroyRef, ElementRef, HostBinding, HostListener, inject, input, output, signal, effect, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { ApStatusModeBarComponent } from '../../components/ap-status-mode-bar/ap-status-mode-bar.component';
import { ApButtonFreeSpinsComponent } from '../../components/ap-button-free-spins/ap-button-free-spins.component';
import { ApButtonAutoSpinTimesComponent } from '../../components/ap-button-auto-spin-times/ap-button-auto-spin-times.component';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApIconBadgeComponent } from '../../../ap-components-lib/ap-icon-badge/ap-icon-badge.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.id;
function BottomPanelRSComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-button-free-spins", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("scale", ctx_r0.freeSpinScale())("totalSpins", ctx_r0.rsTotalSpins())("currentSpins", ctx_r0.rsCurrentSpins());
} }
function BottomPanelRSComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-button-auto-spin-times", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("accentColor", "double-chance-auto-spin")("scale", ctx_r0.freeSpinScale())("totalSpins", ctx_r0.rsTotalSpins())("currentSpins", ctx_r0.rsCurrentSpins());
} }
function BottomPanelRSComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-button-auto-spin-times", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("scale", ctx_r0.freeSpinScale())("totalSpins", ctx_r0.freeGameTotal() || 0)("currentSpins", ctx_r0.freeGameRemaining() || 0);
} }
function BottomPanelRSComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-icon-badge", 22);
    i0.ɵɵlistener("click", function BottomPanelRSComponent_Conditional_6_Template_ap_icon_badge_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.clickSpin()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r0.spinIconSize());
    i0.ɵɵproperty("name", ctx_r0.spinIcon())("ngClass", ctx_r0.isSpinDisabled() ? "" : "cursor-pointer hover:scale-105 transition-transform active:scale-95 animate-spin animate-infinite animate-duration-[1500ms]")("hasBadge", false)("disabled", ctx_r0.isSpinDisabled());
} }
function BottomPanelRSComponent_Conditional_26_For_4_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-toggle-switch", 30);
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("accentColor", "yellow")("checked", ctx_r0.toggleMap()[item_r5.id]);
} }
function BottomPanelRSComponent_Conditional_26_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵlistener("click", function BottomPanelRSComponent_Conditional_26_For_4_Template_div_click_0_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; return i0.ɵɵresetView(item_r5.action()); });
    i0.ɵɵelement(1, "ap-icon", 28);
    i0.ɵɵelementStart(2, "span", 29);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, BottomPanelRSComponent_Conditional_26_For_4_Conditional_4_Template, 1, 2, "ap-toggle-switch", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", ctx_r0.iconMap()[item_r5.id]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r5.hasToggle ? 4 : -1);
} }
function BottomPanelRSComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵlistener("click", function BottomPanelRSComponent_Conditional_26_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeMenu()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "div", 24)(2, "div", 25);
    i0.ɵɵrepeaterCreate(3, BottomPanelRSComponent_Conditional_26_For_4_Template, 5, 3, "div", 26, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("margin-bottom", ctx_r0.menuOffset());
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.menuItems);
} }
function BottomPanelRSComponent_Conditional_27_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.displayCurrency(), " ");
} }
function BottomPanelRSComponent_Conditional_27_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formattedDisplayWin(), " ");
} }
function BottomPanelRSComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 31)(2, "span", 32);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 33)(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 34)(10, "span", 32);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 35)(13, "div", 36)(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(18, "div", 37)(19, "span", 32);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 33)(22, "span");
    i0.ɵɵconditionalCreate(23, BottomPanelRSComponent_Conditional_27_Conditional_23_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵconditionalCreate(25, BottomPanelRSComponent_Conditional_27_Conditional_25_Template, 1, 1);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.currentBalanceLabel(), " ");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.displayCurrency());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.formattedDisplayBalance(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.getBetLabel(), " ");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.displayCurrency());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formattedDisplayBet());
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.getWinLabel(), " ");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.displayCurrency() !== null ? 23 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.displayWin() !== null ? 25 : -1);
} }
function BottomPanelRSComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 38);
    i0.ɵɵelement(2, "ap-icon", 39);
    i0.ɵɵelementStart(3, "div", 40)(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 41)(9, "div", 42);
    i0.ɵɵelement(10, "ap-icon", 43)(11, "div", 40);
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 41)(17, "div", 42);
    i0.ɵɵelement(18, "ap-icon", 44);
    i0.ɵɵelementStart(19, "div", 33)(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("height", ctx_r0.bottomIconSize());
    i0.ɵɵproperty("name", ctx_r0.statusBarMode() === "free-bonus" ? "star" : "wallet");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.displayCurrency());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formattedDisplayBalance());
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("height", ctx_r0.bottomIconSize());
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.displayCurrency());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formattedDisplayBet());
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("height", ctx_r0.bottomIconSize());
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("font-size", ctx_r0.bottomBarFontSize());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.displayCurrency());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formattedDisplayWin());
} }
// Turbo 按鈕狀態轉換規則
const TURBO_STATE_TRANSITIONS = {
    default: 'pressed1',
    pressed1: 'pressed2',
    pressed2: 'default',
};
// 自動旋轉選項設定
const AUTOPLAY_OPTIONS = [10, 50, 100, 300, Infinity];
// 單顆按鈕及元件的尺寸設定
const SIZE_CONFIG = {
    desktop: {
        spinIcon: 4.85,
        buttonIcon: 2.85,
        controlIcon: 2,
        listBottomHeight: 1.4,
        buttonGap: 2.5,
        centerGroupGap: 0.4,
        centerSpacerWidth: 4.7,
        menuOffset: 0.2,
        buttonsAreaTranslateY: 0.5,
        //狀態列
        statusBarHeight: 1.5,
        statusBarWidth: 20,
        statusBarFontSize: 1,
        statusBarGap: -0.5,
        //底部欄位
        bottomBarFontSize: 0.7,
        bottomIconSize: 1,
    },
    mobile: {
        spinIcon: 6,
        buttonIcon: 3.2,
        controlIcon: 2.5,
        listBottomHeight: 2,
        buttonGap: 1,
        centerGroupGap: 0.5,
        centerSpacerWidth: 6.5,
        menuOffset: 0,
        buttonsAreaTranslateY: 1.5,
        //狀態列
        statusBarHeight: 1.5,
        statusBarWidth: 18,
        statusBarFontSize: 1,
        statusBarGap: 0.2,
        //底部欄位
        bottomBarFontSize: 0.7,
        bottomIconSize: 0.7,
    },
};
const FREE_SPIN_BASE_SIZE_REM = 6;
const LAYOUT_CONFIG = {
    GAME_RATIO: 9 / 16,
    HOST_WIDTH_RATIO: 1.78,
    PANEL_LANDSCAPE_RATIO: 0.2,
    PANEL_PORTRAIT_RATIO: 0.25,
};
export class BottomPanelRSComponent {
    api = inject(AppInterfaceService);
    appI18n = inject(AppI18nService);
    elRef = inject((ElementRef));
    destroyRef = inject(DestroyRef);
    panel = inject(BottomPanelService);
    getBalanceLabel = this.appI18n.computed('spin_area_balance', 'BALANCE');
    getBonusLabel = this.appI18n.computed('spin_area_bonus', 'BONUS');
    getBetLabel = this.appI18n.computed('spin_area_bet', 'BET');
    getWinLabel = this.appI18n.computed('spin_area_win', 'WIN');
    // RS圖片名稱輸入
    rsIconName = input('');
    // RS圖片URL，根據 rsIconName 自動計算
    getRSImage = computed(() => {
        const iconName = this.rsIconName();
        if (iconName) {
            return this.toRSItemIconAssetDownloadUrl(iconName);
        }
        return '/assets/images/icons/img_freegame_5x.png';
    });
    // RS Spin Button Mode 輸入
    rsSpinButtonMode = input(null);
    // RS Spins tracking (從父組件傳入)
    rsTotalSpins = input(0);
    rsCurrentSpins = input(0);
    // Inputs
    displayCurrency = computed(() => this.api.currencySymbol()); // 顯示的餘額、投注額、贏得金額等數值的貨幣符號
    displayBalance = computed(() => {
        return this.panel.balance();
    });
    displayBet = input(0);
    displayWin = computed(() => {
        return this.panel.win();
    });
    // 格式化函數會將數字格式化為帶有千分位分隔符和固定小數位的字符串
    formattedDisplayBalance = computed(() => this.formatDisplayNumber(this.displayBalance()));
    formattedDisplayBet = computed(() => this.formatDisplayNumber(this.displayBet()));
    formattedDisplayWin = computed(() => {
        const win = this.displayWin();
        return win === null ? null : this.formatDisplayNumber(win);
    });
    scale = signal(1.4);
    // Outputs
    spin = output();
    info = output();
    history = output();
    music = output();
    sound = output();
    clickBuyFeature = output();
    clickCampaign = output();
    // Internal state - Layout
    hostWidth = signal(0);
    hostHeight = signal(0);
    hostBottom = signal(0);
    hostLeft = signal(0);
    isLandscape = signal(true);
    isHorizontal = signal(true);
    deviceMode = signal(window.innerWidth > window.innerHeight ? 'desktop' : 'mobile');
    viewportWidth = signal(window.innerWidth);
    spinButtonMode = signal('default');
    statusBarMode = signal('close');
    // Internal state - UI
    isMenuOpen = signal(false);
    isAutoplayMenuOpen = signal(false);
    isMusicOn = signal(true);
    isSoundOn = signal(true);
    turboState = signal('default');
    resizeObserver = null;
    windowResizeHandler = null;
    get cssWidth() {
        return this.hostWidth();
    }
    get cssHeight() {
        return this.hostHeight();
    }
    get cssBottom() {
        return this.hostBottom();
    }
    get cssLeft() {
        return this.hostLeft();
    }
    // Computed helpers
    isDesktop = computed(() => this.deviceMode() === 'desktop');
    isMobile = computed(() => this.deviceMode() === 'mobile');
    isDemoMode = computed(() => this.statusBarMode() === 'demo-mode');
    isDoubleChanceMode = computed(() => this.statusBarMode() === 'double-chance' ||
        this.statusBarMode() === 'double-chance-auto-spin');
    isDefaultMode = computed(() => this.statusBarMode() === 'close' ||
        this.statusBarMode() === 'double-chance-auto-spin');
    config = computed(() => SIZE_CONFIG[this.deviceMode()]);
    // 縮放後的尺寸計算
    spinIconSize = computed(() => `${this.config().spinIcon * this.scale()}rem`);
    buttonIconSize = computed(() => `${this.config().buttonIcon * this.scale()}rem`);
    controlIconSize = computed(() => `${this.config().controlIcon * this.scale()}rem`);
    listBottomHeight = computed(() => `${this.config().listBottomHeight * this.scale()}rem`);
    buttonGap = computed(() => `${this.config().buttonGap * this.scale()}rem`);
    centerGroupGap = computed(() => `${this.config().centerGroupGap * this.scale()}rem`);
    centerSpacerWidth = computed(() => `${this.config().centerSpacerWidth * this.scale()}rem`);
    menuOffset = computed(() => `${this.config().menuOffset * this.scale()}rem`);
    // 狀態列間距
    statusBarGap = computed(() => `${this.config().statusBarGap * this.scale()}rem`);
    statusBarHeight = computed(() => `${this.config().statusBarHeight * this.scale()}rem`);
    statusBarWidth = computed(() => `${this.config().statusBarWidth * this.scale()}rem`);
    statusBarFontSize = computed(() => `${this.config().statusBarFontSize * this.scale()}rem`);
    // 底部欄位字體大小
    bottomBarFontSize = computed(() => `${this.config().bottomBarFontSize * this.scale()}rem`);
    bottomIconSize = computed(() => `${this.config().bottomIconSize * this.scale()}rem`);
    buttonsAreaTranslateY = computed(() => `translateY(${this.config().buttonsAreaTranslateY * this.scale()}rem)`);
    // Turbo 按鈕圖示根據狀態變化
    turboIcon = computed(() => {
        const mode = this.statusBarMode();
        if (mode === 'close') {
            return 'turbo disabled';
        }
        if (mode === 'double-chance' || mode === 'double-chance-auto-spin') {
            return 'turbo default';
        }
        const state = this.turboState();
        return state === 'default' ? 'turbo default' : `turbo ${state}`;
    });
    // Free Spin 按鈕縮放比例
    freeSpinScale = computed(() => (this.config().spinIcon * this.scale()) / FREE_SPIN_BASE_SIZE_REM);
    // 音樂開關狀態變化
    musicIcon = computed(() => this.isMusicOn() ? 'musical-note' : 'musical-note pressed');
    // 聲音開關狀態變化
    soundIcon = computed(() => this.isSoundOn() ? 'speaker-wave' : 'speaker-wave pressed');
    /** 判斷 Spin 按鈕是否禁用 */
    isSpinDisabled = signal(false);
    // Spin 按鈕圖示根據狀態列模式變化
    spinIcon = computed(() => {
        const mode = this.statusBarMode();
        if (mode === 'double-chance') {
            return 'spin bonus';
        }
        return 'spin default';
    });
    currentBalanceLabel = computed(() => this.statusBarMode() === 'free-bonus'
        ? this.getBonusLabel()
        : this.getBalanceLabel());
    // 處理加速按鈕點擊事件
    clickTurbo() {
        this.turboState.update((current) => TURBO_STATE_TRANSITIONS[current]);
        // default: 0, pressed1: 1, pressed2: 2
        const speed = this.turboState() === 'default' ? 0 : this.turboState() === 'pressed1' ? 1 : 2;
        this.panel.setGameSpeed(speed);
    }
    /** 判斷 Turbo 按鈕是否禁用 */
    isTurboDisabled = computed(() => {
        return this.statusBarMode() === 'close';
    });
    menuIcon = computed(() => {
        return 'bar-3';
    });
    // 定義選單圖示對應表
    iconMap = computed(() => ({
        info: 'exclamation-circle',
        history: 'document-text',
        music: this.musicIcon(),
        sound: this.soundIcon(),
    }));
    // 定義選單切換狀態對應表
    toggleMap = computed(() => ({
        info: false,
        history: false,
        music: this.isMusicOn(),
        sound: this.isSoundOn(),
    }));
    // 定義自動旋轉選項
    autoplayOptions = AUTOPLAY_OPTIONS.map((value) => ({
        label: value === Infinity ? '∞' : value.toString(),
        value: value,
        isInfinity: value === Infinity,
    }));
    /** 判斷 Double Chance 按鈕是否禁用 */
    isDoubleChanceDisabled = computed(() => {
        return this.panel.isBusy() || this.isDoubleChanceMode();
    });
    /** 判斷 Double Chance 按鈕是否禁用 */
    isDefaultDisabled = computed(() => {
        return this.panel.isBusy() || this.isDefaultMode();
    });
    // 定義選單項目
    menuItems = [
        {
            id: 'info',
            label: this.appI18n.instant('info', 'Info'),
            action: () => this.handleMenuAction(() => this.info.emit()),
            hasToggle: false,
        },
        {
            id: 'history',
            label: this.appI18n.instant('history', 'History'),
            action: () => this.handleMenuAction(() => this.history.emit()),
            hasToggle: false,
        },
        {
            id: 'music',
            label: this.appI18n.instant('music', 'Music'),
            action: () => this.toggleMusic(),
            hasToggle: true,
        },
        {
            id: 'sound',
            label: this.appI18n.instant('sound', 'Sound'),
            action: () => this.toggleSound(),
            hasToggle: true,
        },
    ];
    constructor() {
        this.panel.debugPanelStatus$.subscribe(this.debugPanelStatus.bind(this));
        this.panel.debugSpinButtonMode$.subscribe(this.debugSpinButtonMode.bind(this));
        // 控制 statusBarMode 的 double-chance 同步
        effect(() => {
            if (this.statusBarMode() === 'double-chance') {
                this.statusBarMode.set(this.panel.isAutoSpinning()
                    ? 'double-chance-auto-spin'
                    : 'double-chance');
            }
        });
        // 控制spin button狀態的effect
        effect(() => {
            this.spinButtonMode.set(this.rsSpinButtonMode() || 'default');
        });
    }
    debugPanelStatus(status) {
        this.statusBarMode.set(status);
        this.spinButtonMode.set(status === 'double-chance' || status === 'double-chance-auto-spin'
            ? 'double-chance'
            : 'default');
        if (status === 'demo-mode') {
            this.isMenuOpen.set(false);
        }
    }
    debugSpinButtonMode(mode) {
        this.spinButtonMode.set(mode);
    }
    ngAfterViewInit() {
        this.initResizeObserver();
        this.initWindowResizeListener();
        this.destroyRef.onDestroy(() => this.cleanup());
    }
    initWindowResizeListener() {
        this.windowResizeHandler = () => {
            this.viewportWidth.set(window.innerWidth);
        };
        window.addEventListener('resize', this.windowResizeHandler);
    }
    cleanup() {
        this.resizeObserver?.disconnect();
        if (this.windowResizeHandler) {
            window.removeEventListener('resize', this.windowResizeHandler);
        }
    }
    initResizeObserver() {
        const parent = this.elRef.nativeElement.parentElement;
        if (!parent)
            return;
        this.resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                this.resizeByParent(entry.contentRect);
            }
        });
        this.resizeObserver.observe(parent);
    }
    resizeByParent(parent) {
        const parentRatio = parent.width / parent.height;
        this.isLandscape.set(parentRatio > 0.75);
        if (parentRatio > LAYOUT_CONFIG.GAME_RATIO) {
            this.applyHorizontalLayout(parent, LAYOUT_CONFIG.PANEL_LANDSCAPE_RATIO);
        }
        else {
            this.applyVerticalLayout(parent, LAYOUT_CONFIG.PANEL_PORTRAIT_RATIO);
        }
    }
    applyHorizontalLayout(parent, heightRatio) {
        this.isHorizontal.set(true);
        const gameHeight = parent.height;
        const gameWidth = gameHeight * LAYOUT_CONFIG.GAME_RATIO;
        const targetHostWidth = gameWidth * LAYOUT_CONFIG.HOST_WIDTH_RATIO;
        let hostWidth;
        if (targetHostWidth < parent.width) {
            hostWidth = targetHostWidth;
            const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            const hostWidthRem = hostWidth / rootFontSize;
            const scale = (hostWidthRem / 59) * 1.4;
            this.scale.set(scale);
        }
        else {
            hostWidth = parent.width;
            const ratio = hostWidth / targetHostWidth;
            const calcScale = (ratio, minScale, baseScale = 1.34) => {
                const rawScale = baseScale * Math.pow(ratio, 0.85);
                return Math.max(rawScale, minScale);
            };
            this.scale.set(calcScale(ratio, 1.1));
        }
        this.hostHeight.set(gameHeight * heightRatio);
        this.hostWidth.set(hostWidth);
        this.deviceMode.set('desktop');
        this.hostLeft.set((parent.width - hostWidth) / 2);
        this.hostBottom.set(0);
    }
    applyVerticalLayout(parent, heightRatio) {
        this.isHorizontal.set(false);
        const gameWidth = parent.width;
        const gameHeight = gameWidth / LAYOUT_CONFIG.GAME_RATIO;
        this.hostWidth.set(gameWidth);
        this.hostHeight.set(gameHeight * heightRatio);
        this.hostLeft.set(0);
        this.hostBottom.set((parent.height - gameHeight) / 2);
        this.deviceMode.set('mobile');
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const hostHeightRem = this.hostHeight() / rootFontSize;
        const scale = (hostHeightRem / 18) * 1.6;
        this.scale.set(scale);
    }
    // 切換音樂狀態並發出事件
    toggleMusic() {
        this.isMusicOn.update((current) => {
            const newState = !current;
            this.music.emit(newState);
            return newState;
        });
        this.panel.enableMusic(this.isMusicOn());
    }
    // 切換聲音狀態並發出事件
    toggleSound() {
        this.isSoundOn.update((current) => {
            const newState = !current;
            this.sound.emit(newState);
            return newState;
        });
        this.panel.enableSound(this.isSoundOn());
    }
    // 處理 Spin 按鈕點擊事件
    clickSpin() {
        this.spin.emit();
        this.panel.spin();
    }
    handleMenuAction(action) {
        action();
        this.isMenuOpen.set(false);
    }
    toggleMenu() {
        if (this.isDemoMode() || this.isDoubleChanceDisabled())
            return;
        this.isMenuOpen.update((open) => !open);
    }
    closeMenu() {
        this.isMenuOpen.set(false);
    }
    clickAutoplay() {
        this.isAutoplayMenuOpen.update((open) => !open);
    }
    closeAutoplayMenu() {
        this.isAutoplayMenuOpen.set(false);
    }
    /** 關閉自動旋轉選單 */
    onWindowBlur() {
        this.isAutoplayMenuOpen.set(false);
        this.isMenuOpen.set(false);
    }
    clickAutoplayOption(value) {
        this.closeAutoplayMenu();
        this.panel.startAutoSpin(value);
    }
    clickStopAutoSpin() {
        this.panel.stopAutoSpin();
        if (this.spinButtonMode() === 'auto-spin') {
            this.spinButtonMode.set('default');
        }
    }
    /** 判斷 Increase 按鈕是否禁用 */
    isIncreaseDisabled = computed(() => {
        return this.panel.isBusy() || this.panel.isBetMax();
    });
    clickIncreaseBet() {
        this.panel.increaseBet();
    }
    /** 判斷 Decrease 按鈕是否禁用 */
    isDecreaseDisabled = computed(() => {
        return this.panel.isBusy() || this.panel.isBetMin();
    });
    clickDecreaseBet() {
        this.panel.decreaseBet();
    }
    // 固定小數位的字符串
    formatDisplayNumber(value) {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
        }).format(value);
    }
    autoSpinTotal = computed(() => this.panel.autoSpinTotal());
    autoSpinRemaining = computed(() => this.panel.autoSpinRemaining());
    isAutoSpinInfinity = computed(() => this.autoSpinTotal() === Infinity);
    freeGameTotal = computed(() => this.panel.freeGameTotal());
    freeGameRemaining = computed(() => this.panel.freeGameRemaining());
    toRSItemIconAssetDownloadUrl(imgname) {
        let ret = "";
        // ///usr/share/nginx/html/games/system/Info/RewardSystem/store/item_icon
        // ret = l_strURL + "/system/Info/RewardSystem/store/item_icon/" + imgname + ".png" + verstr;
        ret = this.toIMGDataAssetDownloadUrl("/system/Info/RewardSystem/store/item_icon/", imgname);
        return ret;
    }
    toIMGDataAssetDownloadUrl(relpath, imgname) {
        let ret = "";
        let l_strURL = location.origin;
        if (l_strURL.includes("192.168") || l_strURL.includes("localhost")) {
            l_strURL = "https://dev.diresoft.net/";
        }
        else {
            //do this?
            //let l_strURL = InfoMgr.CDN_URL;
            l_strURL = window.location.origin;
        }
        ///usr/share/nginx/html/games/system/Info/RewardSystem/common/openrs_icon
        ret = l_strURL + relpath + imgname + ".png";
        return ret;
    }
    static ɵfac = function BottomPanelRSComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BottomPanelRSComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottomPanelRSComponent, selectors: [["bottom-panel-rs"]], hostVars: 8, hostBindings: function BottomPanelRSComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function BottomPanelRSComponent_blur_HostBindingHandler() { return ctx.onWindowBlur(); }, i0.ɵɵresolveWindow);
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.cssWidth, "px")("height", ctx.cssHeight, "px")("bottom", ctx.cssBottom, "px")("left", ctx.cssLeft, "px");
        } }, inputs: { rsIconName: [1, "rsIconName"], rsSpinButtonMode: [1, "rsSpinButtonMode"], rsTotalSpins: [1, "rsTotalSpins"], rsCurrentSpins: [1, "rsCurrentSpins"], displayBet: [1, "displayBet"] }, outputs: { spin: "spin", info: "info", history: "history", music: "music", sound: "sound", clickBuyFeature: "clickBuyFeature", clickCampaign: "clickCampaign" }, decls: 29, vars: 90, consts: [[1, "size-full", "bg-gradient-to-t", "from-black/90", "to-transparent"], [1, "relative", "w-full", "flex-1", "flex", "items-center", "px-6"], [1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-sticky"], [3, "scale", "totalSpins", "currentSpins"], [3, "accentColor", "scale", "totalSpins", "currentSpins"], [3, "name", "ngClass", "height", "hasBadge", "disabled"], [1, "relative", "w-full", "flex", "items-center", "justify-between"], [1, "flex", "items-center"], [3, "name", "hasBadge", "disabled"], [1, "flex", "items-center", "bg-zinc-900/80", "rounded-xl", "p-1"], [3, "click", "name", "ngClass", "disabledCoverVariant", "hasBadge", "disabled"], [1, "relative", "shrink-0"], [1, "absolute", "inset-0", "w-full", "h-full", "text-zinc-100", 3, "name"], ["alt", "RS", 1, "absolute", "left-1/2", "top-1/2", "z-10", "w-[90%]", "h-[90%]", "-translate-x-1/2", "-translate-y-1/2", "-rotate-6", "object-contain", "pointer-events-none", "drop-shadow-[0_0.15rem_0.2rem_rgba(0,0,0,0.55)]", 3, "src"], [3, "click", "ngClass", "name", "hasBadge", "disabled"], [1, "absolute", "top-0", "left-1/2", "flex", "items-center", "justify-center", "-translate-x-1/2"], [3, "mode"], [1, "flex", "border-t-[0.15rem]", "border-zinc-400/50", "items-center", "justify-between", "pr-4", "text-zinc-100", "font-semibold", "bg-black/50"], ["type", "button", 1, "flex", "items-center", "justify-center", "w-6", "h-6", 3, "click", "disabled", "ngClass"], [1, "w-full", "h-full", 3, "name", "hasBadge", "disabledCoverVariant", "disabled"], [1, "grid", "flex-1", "grid-cols-3", "items-center"], [1, "grid", "flex-1", "grid-cols-3"], [3, "click", "name", "ngClass", "hasBadge", "disabled"], [1, "fixed", "inset-0", 3, "click"], [1, "absolute", "left-0", "bottom-full", "animate-fade-up", "animate-once", "animate-duration-200", "z-dropdown"], [1, "min-w-56", "justify-center", "items-center", "rounded-t-md", "border-1", "border-zinc-400/50", "bg-zinc-900", "text-zinc-300", "p-2"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold"], [1, "flex", "items-center", "justify-start", "relative", "gap-2", "px-2", "py-2", "m-2", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-400", "active:bg-zinc-700", "hover:rounded-lg", "text-xl", "font-semibold", 3, "click"], [1, "size-6", 3, "name"], [1, "flex-1"], ["variant", "quick", 3, "accentColor", "checked"], [1, "flex", "items-center", "justify-start", "space-x-2", "ml-2"], [1, "text-yellow-400"], [1, "flex", "space-x-1", "text-zinc-200"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "inline-block", "min-w-[4ch]", "text-left", "tabular-nums", "text-zinc-200"], [1, "flex", "space-x-1"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "flex", "justify-start", "items-center", "space-x-1", "ml-1"], [1, "text-yellow-400", 3, "name"], [1, "flex", "text-zinc-200"], [1, "flex", "justify-center"], [1, "flex", "items-center", "space-x-1"], ["name", "prizes", 1, "text-yellow-400"], ["name", "trophy", 1, "text-yellow-400"]], template: function BottomPanelRSComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵconditionalCreate(3, BottomPanelRSComponent_Conditional_3_Template, 1, 3, "ap-button-free-spins", 3)(4, BottomPanelRSComponent_Conditional_4_Template, 1, 4, "ap-button-auto-spin-times", 4)(5, BottomPanelRSComponent_Conditional_5_Template, 1, 3, "ap-button-auto-spin-times", 3)(6, BottomPanelRSComponent_Conditional_6_Template, 1, 6, "ap-icon-badge", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6)(8, "div", 7);
            i0.ɵɵelement(9, "ap-icon-badge", 8)(10, "ap-icon-badge", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 9)(12, "ap-icon-badge", 10);
            i0.ɵɵlistener("click", function BottomPanelRSComponent_Template_ap_icon_badge_click_12_listener() { return ctx.clickDecreaseBet(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "div");
            i0.ɵɵelementStart(14, "ap-icon-badge", 10);
            i0.ɵɵlistener("click", function BottomPanelRSComponent_Template_ap_icon_badge_click_14_listener() { return ctx.clickIncreaseBet(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 7)(16, "div", 11);
            i0.ɵɵelement(17, "ap-icon", 12)(18, "img", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "ap-icon-badge", 14);
            i0.ɵɵlistener("click", function BottomPanelRSComponent_Template_ap_icon_badge_click_19_listener() { return ctx.clickTurbo(); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(20, "div", 15);
            i0.ɵɵelement(21, "ap-status-mode-bar", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 17)(23, "div", 11)(24, "button", 18);
            i0.ɵɵlistener("click", function BottomPanelRSComponent_Template_button_click_24_listener() { return ctx.toggleMenu(); });
            i0.ɵɵelement(25, "ap-icon-badge", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(26, BottomPanelRSComponent_Conditional_26_Template, 5, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(27, BottomPanelRSComponent_Conditional_27_Template, 26, 21, "div", 20)(28, BottomPanelRSComponent_Conditional_28_Template, 24, 19, "div", 21);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassProp("flex", ctx.isDesktop())("flex-col", ctx.isDesktop());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("transform", ctx.buttonsAreaTranslateY());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.spinButtonMode() === "free-spin" ? 3 : ctx.spinButtonMode() === "double-chance" ? 4 : ctx.spinButtonMode() === "free-game" ? 5 : 6);
            i0.ɵɵadvance(5);
            i0.ɵɵstyleProp("gap", ctx.buttonGap());
            i0.ɵɵclassProp("flex-row", ctx.isDesktop())("flex-col", ctx.isMobile());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.buttonIconSize());
            i0.ɵɵproperty("name", "campaign")("hasBadge", true)("disabled", true);
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.buttonIconSize());
            i0.ɵɵproperty("name", "buy-feature")("hasBadge", false)("disabled", true);
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("gap", ctx.centerGroupGap());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.controlIconSize());
            i0.ɵɵproperty("name", "decrease")("ngClass", ctx.isDecreaseDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabledCoverVariant", "half")("hasBadge", false)("disabled", ctx.isDecreaseDisabled());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("width", ctx.centerSpacerWidth());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.controlIconSize());
            i0.ɵɵproperty("name", "increase")("ngClass", ctx.isIncreaseDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("disabledCoverVariant", "half")("hasBadge", false)("disabled", ctx.isIncreaseDisabled());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("gap", ctx.buttonGap());
            i0.ɵɵclassProp("flex-row", ctx.isDesktop())("flex-col", ctx.isMobile());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("width", ctx.buttonIconSize())("height", ctx.buttonIconSize());
            i0.ɵɵadvance();
            i0.ɵɵproperty("name", "blank");
            i0.ɵɵadvance();
            i0.ɵɵproperty("src", ctx.getRSImage(), i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.buttonIconSize());
            i0.ɵɵproperty("ngClass", ctx.isTurboDisabled() ? "" : "cursor-pointer transition-transform hover:scale-105 active:scale-95")("name", ctx.turboIcon())("hasBadge", false)("disabled", ctx.isTurboDisabled());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("top", ctx.statusBarGap());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.statusBarHeight())("width", ctx.statusBarWidth())("font-size", ctx.statusBarFontSize());
            i0.ɵɵproperty("mode", ctx.statusBarMode());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("font-size", ctx.bottomBarFontSize())("height", ctx.isDesktop() ? ctx.listBottomHeight() : null);
            i0.ɵɵclassProp("shrink-0", ctx.isDesktop())("absolute", ctx.isMobile())("bottom-0", ctx.isMobile())("left-0", ctx.isMobile())("right-0", ctx.isMobile());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isDoubleChanceDisabled())("ngClass", ctx.isDoubleChanceDisabled() ? "cursor-not-allowed opacity-50" : "hover:text-yellow-200 active:text-zinc-400 cursor-pointer");
            i0.ɵɵadvance();
            i0.ɵɵproperty("name", ctx.menuIcon())("hasBadge", false)("disabledCoverVariant", "half")("disabled", ctx.isDoubleChanceDisabled());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isMenuOpen() ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isDesktop() ? 27 : 28);
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent,
            ApToggleSwitchComponent,
            ApStatusModeBarComponent,
            ApButtonFreeSpinsComponent,
            ApButtonAutoSpinTimesComponent,
            ApIconBadgeComponent], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomPanelRSComponent, [{
        type: Component,
        args: [{ selector: 'bottom-panel-rs', standalone: true, imports: [
                    CommonModule,
                    ApIconComponent,
                    ApToggleSwitchComponent,
                    ApStatusModeBarComponent,
                    ApButtonFreeSpinsComponent,
                    ApButtonAutoSpinTimesComponent,
                    ApIconBadgeComponent,
                ], template: "<div\n  class=\"size-full bg-gradient-to-t from-black/90 to-transparent\"\n  [class.flex]=\"isDesktop()\"\n  [class.flex-col]=\"isDesktop()\"\n>\n  <!-- Buttons Area -->\n  <div\n    class=\"relative w-full flex-1 flex items-center px-6\"\n    [style.transform]=\"buttonsAreaTranslateY()\"\n  >\n    <div\n      class=\"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-sticky\"\n    >\n      <!-- Spin Button -->\n      @if (spinButtonMode() === \"free-spin\") {\n        <ap-button-free-spins \n          [scale]=\"freeSpinScale()\" \n          [totalSpins]=\"rsTotalSpins()\"\n          [currentSpins]=\"rsCurrentSpins()\"\n        />\n      } @else if (spinButtonMode() === \"double-chance\") {\n        <ap-button-auto-spin-times\n          [accentColor]=\"'double-chance-auto-spin'\"\n          [scale]=\"freeSpinScale()\"\n          [totalSpins]=\"rsTotalSpins()\"\n          [currentSpins]=\"rsCurrentSpins()\"\n        />\n      } @else if (spinButtonMode() === \"free-game\") {\n        <ap-button-auto-spin-times\n          [scale]=\"freeSpinScale()\"\n          [totalSpins]=\"freeGameTotal() || 0\"\n          [currentSpins]=\"freeGameRemaining() || 0\"\n        />\n      } @else {\n        <ap-icon-badge\n          [name]=\"spinIcon()\"\n          [ngClass]=\"\n            isSpinDisabled()\n              ? ''\n              : 'cursor-pointer hover:scale-105 transition-transform active:scale-95 animate-spin animate-infinite animate-duration-[1500ms]'\n          \"\n          [style.height]=\"spinIconSize()\"\n          [hasBadge]=\"false\"\n          [disabled]=\"isSpinDisabled()\"\n          (click)=\"clickSpin()\"\n        />\n      }\n    </div>\n\n    <!-- All Buttons Row -->\n    <div class=\"relative w-full flex items-center justify-between\">\n      <!-- Left Group -->\n      <div\n        class=\"flex items-center\"\n        [class.flex-row]=\"isDesktop()\"\n        [class.flex-col]=\"isMobile()\"\n        [style.gap]=\"buttonGap()\"\n      >\n        <ap-icon-badge\n          [name]=\"'campaign'\"\n          [style.height]=\"buttonIconSize()\"\n          [hasBadge]=\"true\"\n          [disabled]=\"true\"\n        />\n        <ap-icon-badge\n          [name]=\"'buy-feature'\"\n          [style.height]=\"buttonIconSize()\"\n          [hasBadge]=\"false\"\n          [disabled]=\"true\"\n        />\n      </div>\n\n      <!-- Center Group -->\n      <div\n        class=\"flex items-center bg-zinc-900/80 rounded-xl p-1\"\n        [style.gap]=\"centerGroupGap()\"\n      >\n        <ap-icon-badge\n          [name]=\"'decrease'\"\n          [ngClass]=\"\n            isDecreaseDisabled()\n              ? ''\n              : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'\n          \"\n          [style.height]=\"controlIconSize()\"\n          [disabledCoverVariant]=\"'half'\"\n          [hasBadge]=\"false\"\n          [disabled]=\"isDecreaseDisabled()\"\n          (click)=\"clickDecreaseBet()\"\n        />\n\n        <div [style.width]=\"centerSpacerWidth()\"></div>\n\n        <ap-icon-badge\n          [name]=\"'increase'\"\n          [ngClass]=\"\n            isIncreaseDisabled()\n              ? ''\n              : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'\n          \"\n          [style.height]=\"controlIconSize()\"\n          [disabledCoverVariant]=\"'half'\"\n          [hasBadge]=\"false\"\n          [disabled]=\"isIncreaseDisabled()\"\n          (click)=\"clickIncreaseBet()\"\n        />\n      </div>\n\n      <!-- Right Group -->\n      <div\n        class=\"flex items-center\"\n        [class.flex-row]=\"isDesktop()\"\n        [class.flex-col]=\"isMobile()\"\n        [style.gap]=\"buttonGap()\"\n      >\n        <div\n          class=\"relative shrink-0\"\n          [style.width]=\"buttonIconSize()\"\n          [style.height]=\"buttonIconSize()\"\n        >\n          <!-- RS Img -->\n          <ap-icon\n            [name]=\"'blank'\"\n            class=\"absolute inset-0 w-full h-full text-zinc-100\"\n          />\n          <img\n            [src]=\"getRSImage()\"\n            alt=\"RS\"\n            class=\"absolute left-1/2 top-1/2 z-10 w-[90%] h-[90%] -translate-x-1/2 -translate-y-1/2 -rotate-6 object-contain pointer-events-none drop-shadow-[0_0.15rem_0.2rem_rgba(0,0,0,0.55)]\"\n          />\n        </div>\n        <ap-icon-badge\n          [ngClass]=\"\n            isTurboDisabled()\n              ? ''\n              : 'cursor-pointer transition-transform hover:scale-105 active:scale-95'\n          \"\n          [name]=\"turboIcon()\"\n          [style.height]=\"buttonIconSize()\"\n          [hasBadge]=\"false\"\n          [disabled]=\"isTurboDisabled()\"\n          (click)=\"clickTurbo()\"\n        />\n      </div>\n    </div>\n  </div>\n\n  <div\n    class=\"absolute top-0 left-1/2 flex items-center justify-center -translate-x-1/2\"\n    [style.top]=\"statusBarGap()\"\n  >\n    <ap-status-mode-bar\n      [mode]=\"statusBarMode()\"\n      [style.height]=\"statusBarHeight()\"\n      [style.width]=\"statusBarWidth()\"\n      [style.fontSize]=\"statusBarFontSize()\"\n    />\n  </div>\n\n  <!-- Bottom Bar -->\n  <div\n    class=\"flex border-t-[0.15rem] border-zinc-400/50 items-center justify-between pr-4 text-zinc-100 font-semibold bg-black/50\"\n    [class.shrink-0]=\"isDesktop()\"\n    [class.absolute]=\"isMobile()\"\n    [class.bottom-0]=\"isMobile()\"\n    [class.left-0]=\"isMobile()\"\n    [class.right-0]=\"isMobile()\"\n    [style.fontSize]=\"bottomBarFontSize()\"\n    [style.height]=\"isDesktop() ? listBottomHeight() : null\"\n  >\n    <div class=\"relative shrink-0\">\n      <button\n        type=\"button\"\n        [disabled]=\"isDoubleChanceDisabled()\"\n        (click)=\"toggleMenu()\"\n        class=\"flex items-center justify-center w-6 h-6\"\n        [ngClass]=\"\n          isDoubleChanceDisabled()\n            ? 'cursor-not-allowed opacity-50'\n            : 'hover:text-yellow-200 active:text-zinc-400 cursor-pointer'\n        \"\n      >\n        <ap-icon-badge\n          [name]=\"menuIcon()\"\n          class=\"w-full h-full\"\n          [hasBadge]=\"false\"\n          [disabledCoverVariant]=\"'half'\"\n          [disabled]=\"isDoubleChanceDisabled()\"\n        />\n      </button>\n      @if (isMenuOpen()) {\n        <div class=\"fixed inset-0\" (click)=\"closeMenu()\"></div>\n        <div\n          class=\"absolute left-0 bottom-full animate-fade-up animate-once animate-duration-200 z-dropdown\"\n          [style.marginBottom]=\"menuOffset()\"\n        >\n          <div\n            class=\"min-w-56 justify-center items-center rounded-t-md border-1 border-zinc-400/50 bg-zinc-900 text-zinc-300 p-2\"\n          >\n            @for (item of menuItems; track item.id) {\n              <div\n                class=\"flex items-center justify-start relative gap-2 px-2 py-2 m-2 cursor-pointer hover:bg-zinc-800 hover:text-yellow-400 active:bg-zinc-700 hover:rounded-lg text-xl font-semibold\"\n                (click)=\"item.action()\"\n              >\n                <ap-icon [name]=\"iconMap()[item.id]\" class=\"size-6\" />\n                <span class=\"flex-1\">{{ item.label }}</span>\n                @if (item.hasToggle) {\n                  <ap-toggle-switch\n                    variant=\"quick\"\n                    [accentColor]=\"'yellow'\"\n                    [checked]=\"toggleMap()[item.id]\"\n                  />\n                }\n              </div>\n            }\n          </div>\n        </div>\n      }\n    </div>\n\n    @if (isDesktop()) {\n      <div class=\"grid flex-1 grid-cols-3 items-center\">\n        <div class=\"flex items-center justify-start space-x-2 ml-2\">\n          <span class=\"text-yellow-400\" [style.fontSize]=\"bottomBarFontSize()\"\n            >{{ currentBalanceLabel() }}\n          </span>\n          <div\n            class=\"flex space-x-1 text-zinc-200\"\n            [style.fontSize]=\"bottomBarFontSize()\"\n          >\n            <span> {{ displayCurrency() }}</span>\n            <span>{{ formattedDisplayBalance() }} </span>\n          </div>\n        </div>\n\n        <div class=\"flex items-center justify-center gap-2\">\n          <span class=\"text-yellow-400\" [style.fontSize]=\"bottomBarFontSize()\"\n            >{{ getBetLabel() }}\n          </span>\n          <div\n            class=\"inline-block min-w-[4ch] text-left tabular-nums text-zinc-200\"\n            [style.fontSize]=\"bottomBarFontSize()\"\n          >\n            <div class=\"flex space-x-1\">\n              <span> {{ displayCurrency() }}</span\n              ><span>{{ formattedDisplayBet() }}</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"flex items-center justify-center space-x-2\">\n          <span class=\"text-yellow-400\" [style.fontSize]=\"bottomBarFontSize()\"\n            >{{ getWinLabel() }}\n          </span>\n          <div\n            class=\"flex space-x-1 text-zinc-200\"\n            [style.fontSize]=\"bottomBarFontSize()\"\n          >\n            <span>\n              @if (displayCurrency() !== null) {\n                {{ displayCurrency() }}\n              }\n            </span>\n            <span>\n              @if (displayWin() !== null) {\n                {{ formattedDisplayWin() }}\n              }\n            </span>\n          </div>\n        </div>\n      </div>\n      <!-- Mobile -->\n    } @else {\n      <!-- Balance -->\n      <div class=\"grid flex-1 grid-cols-3\">\n        <div class=\"flex justify-start items-center space-x-1 ml-1\">\n          <ap-icon\n            class=\"text-yellow-400\"\n            [style.height]=\"bottomIconSize()\"\n            [name]=\"statusBarMode() === 'free-bonus' ? 'star' : 'wallet'\"\n          />\n          <div\n            class=\"flex text-zinc-200\"\n            [style.fontSize]=\"bottomBarFontSize()\"\n          >\n            <span>{{ displayCurrency() }}</span\n            ><span>{{ formattedDisplayBalance() }}</span>\n          </div>\n        </div>\n\n        <!-- Bet -->\n        <div class=\"flex justify-center\">\n          <div class=\"flex items-center space-x-1\">\n            <ap-icon\n              name=\"prizes\"\n              class=\"text-yellow-400\"\n              [style.height]=\"bottomIconSize()\"\n            />\n            <div\n              class=\"flex text-zinc-200\"\n              [style.fontSize]=\"bottomBarFontSize()\"\n            ></div>\n            <span>{{ displayCurrency() }}</span>\n            <span>{{ formattedDisplayBet() }}</span>\n          </div>\n        </div>\n\n        <!-- Win -->\n        <div class=\"flex justify-center\">\n          <div class=\"flex items-center space-x-1\">\n            <ap-icon\n              name=\"trophy\"\n              class=\"text-yellow-400\"\n              [style.height]=\"bottomIconSize()\"\n            />\n            <div\n              class=\"flex space-x-1 text-zinc-200\"\n              [style.fontSize]=\"bottomBarFontSize()\"\n            >\n              <span>{{ displayCurrency() }}</span>\n            </div>\n            <span>{{ formattedDisplayWin() }}</span>\n          </div>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n", styles: [":host {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n"] }]
    }], () => [], { cssWidth: [{
            type: HostBinding,
            args: ['style.width.px']
        }], cssHeight: [{
            type: HostBinding,
            args: ['style.height.px']
        }], cssBottom: [{
            type: HostBinding,
            args: ['style.bottom.px']
        }], cssLeft: [{
            type: HostBinding,
            args: ['style.left.px']
        }], onWindowBlur: [{
            type: HostListener,
            args: ['window:blur']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BottomPanelRSComponent, { className: "BottomPanelRSComponent", filePath: "src/app/pages/bottom-panel-rs/bottom-panel-rs.component.ts", lineNumber: 105 }); })();
//# sourceMappingURL=bottom-panel-rs.component.js.map