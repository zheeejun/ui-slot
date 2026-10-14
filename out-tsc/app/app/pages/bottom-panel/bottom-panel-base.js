import { Directive, DestroyRef, ElementRef, HostBinding, computed, inject, signal } from '@angular/core';
import { FREE_SPIN_BASE_SIZE_REM, LAYOUT_CONFIG, SIZE_CONFIG, TURBO_STATE_TRANSITIONS, } from './bottom-panel-constants';
import * as i0 from "@angular/core";
/**
 * 所有 bottom-panel 系列 component 的抽象基底類別。
 * 封裝共用的版面計算、尺寸縮放、ResizeObserver 生命週期與 @HostBinding。
 * 子類別只需實作各自的業務邏輯（按鈕行為、狀態、選單等）。
 */
export class BottomPanelBase {
    elRef = inject((ElementRef));
    destroyRef = inject(DestroyRef);
    /** 尺寸設定，子類別可覆寫（e.g. SIZE_CONFIG_LEAN for replay / demo） */
    sizeConfig = SIZE_CONFIG;
    // ── Layout signals ──────────────────────────────────────────
    scale = signal(1.4);
    hostWidth = signal(0);
    hostHeight = signal(0);
    hostBottom = signal(0);
    hostLeft = signal(0);
    isLandscape = signal(true);
    isHorizontal = signal(true);
    viewportWidth = signal(window.innerWidth);
    deviceMode = signal(window.innerWidth > window.innerHeight ? 'desktop' : 'mobile');
    turboState = signal('default');
    resizeObserver = null;
    windowResizeHandler = null;
    // ── @HostBinding ────────────────────────────────────────────
    get cssWidth() { return this.hostWidth(); }
    get cssHeight() { return this.hostHeight(); }
    get cssBottom() { return this.hostBottom(); }
    get cssLeft() { return this.hostLeft(); }
    // ── Computed helpers ─────────────────────────────────────────
    isDesktop = computed(() => this.deviceMode() === 'desktop');
    isMobile = computed(() => this.deviceMode() === 'mobile');
    config = computed(() => this.sizeConfig[this.deviceMode()]);
    // ── Sizing computeds (rem 字串) ──────────────────────────────
    spinIconSize = computed(() => `${this.config().spinIcon * this.scale()}rem`);
    buttonIconSize = computed(() => `${this.config().buttonIcon * this.scale()}rem`);
    controlIconSize = computed(() => `${this.config().controlIcon * this.scale()}rem`);
    listBottomHeight = computed(() => `${this.config().listBottomHeight * this.scale()}rem`);
    centerGroupGap = computed(() => `${this.config().centerGroupGap * this.scale()}rem`);
    centerSpacerWidth = computed(() => `${this.config().centerSpacerWidth * this.scale()}rem`);
    menuOffset = computed(() => `${this.config().menuOffset * this.scale()}rem`);
    statusBarGap = computed(() => `${this.config().statusBarGap * this.scale()}rem`);
    statusBarHeight = computed(() => `${this.config().statusBarHeight * this.scale()}rem`);
    statusBarWidth = computed(() => `${this.config().statusBarWidth * this.scale()}rem`);
    statusBarFontSize = computed(() => `${this.config().statusBarFontSize * this.scale()}rem`);
    bottomBarFontSize = computed(() => `${this.config().bottomBarFontSize * this.scale()}rem`);
    bottomHintFontSize = computed(() => `${this.config().bottomHintFontSize * this.scale()}rem`);
    bottomHintIconSize = computed(() => `${this.config().bottomHintIconSize * this.scale()}rem`);
    bottomIconSize = computed(() => `${this.config().bottomIconSize * this.scale()}rem`);
    buttonGap = computed(() => `${this.config().buttonGap * Math.pow(this.scale(), 3)}rem`);
    freeSpinScale = computed(() => (this.config().spinIcon * this.scale()) / FREE_SPIN_BASE_SIZE_REM);
    buttonsAreaTranslateY = computed(() => `translateY(${this.config().buttonsAreaTranslateY * this.scale()}rem)`);
    getRemainingTurnoverLabel = computed(() => 'Remaining turnover');
    displayRemainingTurnover = computed(() => null);
    showRemainingTurnover = computed(() => this.displayRemainingTurnover() !== null);
    /** Turbo 按鈕圖示（子類別可 override） */
    turboIcon = computed(() => {
        const state = this.turboState();
        return state === 'default' ? 'turbo default' : `turbo ${state}`;
    });
    // ── Utilities ────────────────────────────────────────────────
    /** 更新 turboState 並回傳對應速度 0 / 1 / 2 */
    updateTurboState() {
        this.turboState.update(current => TURBO_STATE_TRANSITIONS[current]);
        const s = this.turboState();
        return s === 'default' ? 0 : s === 'pressed1' ? 1 : 2;
    }
    /** 將數字格式化為含千分位、3 位小數的字串 */
    formatDisplayNumber(value) {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
        }).format(value);
    }
    // ── Lifecycle ────────────────────────────────────────────────
    ngAfterViewInit() {
        this.initResizeObserver();
        this.destroyRef.onDestroy(() => this.cleanup());
        this.windowResizeHandler = () => this.viewportWidth.set(window.innerWidth);
        window.addEventListener('resize', this.windowResizeHandler);
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
        const ratio = parent.width / parent.height;
        this.isLandscape.set(ratio > 0.75);
        if (ratio > LAYOUT_CONFIG.GAME_RATIO) {
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
            this.scale.set((hostWidth / rootFontSize / 59) * 1.4);
        }
        else {
            hostWidth = parent.width;
            this.applyViewportScale(hostWidth, targetHostWidth);
        }
        this.hostHeight.set(gameHeight * heightRatio);
        this.hostWidth.set(hostWidth);
        this.deviceMode.set('desktop');
        this.hostLeft.set((parent.width - hostWidth) / 2);
        this.hostBottom.set(0);
    }
    /**
     * 視窗寬度不足時的縮放計算（override point）。
     */
    applyViewportScale(hostWidth, targetWidth) {
        const ratio = hostWidth / targetWidth;
        this.scale.set(Math.max(1.34 * Math.pow(ratio, 0.85), 1));
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
        this.scale.set((this.hostHeight() / rootFontSize / 18) * 1.6);
    }
    cleanup() {
        this.resizeObserver?.disconnect();
        if (this.windowResizeHandler) {
            window.removeEventListener('resize', this.windowResizeHandler);
        }
    }
    static ɵfac = function BottomPanelBase_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BottomPanelBase)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BottomPanelBase, hostVars: 8, hostBindings: function BottomPanelBase_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.cssWidth, "px")("height", ctx.cssHeight, "px")("bottom", ctx.cssBottom, "px")("left", ctx.cssLeft, "px");
        } } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomPanelBase, [{
        type: Directive
    }], null, { cssWidth: [{
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
        }] }); })();
//# sourceMappingURL=bottom-panel-base.js.map