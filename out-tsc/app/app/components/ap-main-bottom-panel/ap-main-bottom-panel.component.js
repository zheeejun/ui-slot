import { Component, HostBinding, input, output, signal, ViewChild, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["bottomDiv"];
function ApMainBottomPanelComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵlistener("click", function ApMainBottomPanelComponent_div_19_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.isMenuOpen.set(false)); });
    i0.ɵɵelementEnd();
} }
function ApMainBottomPanelComponent_div_20_ng_container_2_ap_toggle_switch_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-toggle-switch", 32);
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", true)("checked", ctx_r2.toggleMap[item_r5.id]);
} }
function ApMainBottomPanelComponent_div_20_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵlistener("click", function ApMainBottomPanelComponent_div_20_ng_container_2_Template_div_click_1_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; return i0.ɵɵresetView(item_r5.action()); });
    i0.ɵɵelement(2, "ap-icon", 29);
    i0.ɵɵelementStart(3, "span", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ApMainBottomPanelComponent_div_20_ng_container_2_ap_toggle_switch_5_Template, 1, 2, "ap-toggle-switch", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r2.iconMap[item_r5.id]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r5.toggle);
} }
function ApMainBottomPanelComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 26);
    i0.ɵɵtemplate(2, ApMainBottomPanelComponent_div_20_ng_container_2_Template, 6, 3, "ng-container", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.menuItems);
} }
function ApMainBottomPanelComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵlistener("click", function ApMainBottomPanelComponent_div_21_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.isAutoplayMenuOpen.set(false)); });
    i0.ɵɵelementEnd();
} }
function ApMainBottomPanelComponent_div_22_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 35);
    i0.ɵɵlistener("click", function ApMainBottomPanelComponent_div_22_ng_container_2_Template_div_click_1_listener() { const option_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectAutoplayOption(option_r8)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.selectedAutoplay() === option_r8 ? "text-yellow-400" : "text-white hover:text-yellow-200 hover:bg-zinc-900 active:bg-zinc-700");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getAutoplayDisplayValue(option_r8), " ");
} }
function ApMainBottomPanelComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34);
    i0.ɵɵtemplate(2, ApMainBottomPanelComponent_div_22_ng_container_2_Template, 3, 2, "ng-container", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.isLandscape() ? "right-4/24 top-1/6 -translate-y-full" : "right-1/30 top-1/30 -translate-y-full");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.autoplayOptions);
} }
export class ApMainBottomPanelComponent {
    elRef;
    bottomDivRef;
    spin = output();
    info = output();
    history = output();
    music = output();
    sound = output();
    eventCenter = output();
    getHeaderBalance = signal('balance');
    getHeaderBet = signal('bet');
    getHeaderWin = signal('win');
    displayBalance = input('$999,999,999.000');
    displayBet = input('$999.000');
    displayWin = input('$999,999.000');
    gameRatio = 9 / 16; // 預設遊戲比例
    hostWidthRatio = 1.78; // 橫向展開時，容器寬度與遊戲寬度的比例
    panelLandscapeRatio = 0.2; // 橫向展開時，容器高度與寬度的比例
    panelPortraitRatio = 0.25; // 縱向展開時，容器高度與遊寬度的比例
    resizeObserver;
    get cssWidth() {
        return `${this.hostWidth()}px`;
    }
    get cssHeight() {
        return `${this.hostHeight()}px`;
    }
    get cssBottom() {
        return `${this.hostBottom()}px`;
    }
    get cssLeft() {
        return `${this.hostLeft()}px`;
    }
    hostWidth = signal(0);
    hostHeight = signal(0);
    hostBottom = signal(0);
    hostLeft = signal(0);
    /** 由容器寬高比例，決定是否為橫版 */
    isLandscape = signal(true);
    /** 與遊戲比例相比，決定是否為水平算法，容器比例比遊戲寬就是水平算法 */
    isHorizontal = signal(true);
    isAnimated = signal(false); // 是否啟用動畫
    defaultFontSize = 24; // 預設底部文字大小，預設為 24px
    bottomFontSize = signal(this.defaultFontSize);
    isTurboPressed = signal(false); // 是否按下 Turbo 按鈕
    isTwoLine = signal(false); // 是否為兩行文字
    isMenuOpen = signal(false); // 是否開啟選單
    isAutoplayMenuOpen = signal(false); // 是否開啟自動旋轉選單
    selectedAutoplay = signal(null); // 選中的自動旋轉次數
    isMusicOn = signal(true); // 音樂是否開啟
    isSoundOn = signal(true); // 音效是否開啟
    musicIcon = signal('musical-note'); // 音樂圖示
    soundIcon = signal('speaker-wave'); // 音效圖示
    spinIcon = signal('spin default'); // 旋轉按鈕圖示
    addIcon = signal('add default'); // 增加賭注圖示
    decreaseIcon = signal('decrease default'); // 減少賭注圖示
    turboIcon = signal('turbo default'); // Turbo按鈕圖示
    autoplayOptions = [10, 50, 100, 300, Infinity]; // 自動旋轉選項
    menuItems = [
        {
            id: 'info',
            label: 'Info',
            action: () => {
                this.info.emit();
                this.isMenuOpen.set(false);
            },
            toggle: false,
        },
        {
            id: 'history',
            label: 'History',
            action: () => {
                this.history.emit();
                this.isMenuOpen.set(false);
            },
            toggle: false,
        },
        {
            id: 'music',
            label: 'Music',
            action: () => this.onMusicClick(),
            toggle: true,
        },
        {
            id: 'sound',
            label: 'Sound',
            action: () => this.onSoundClick(),
            toggle: true,
        },
    ];
    get iconMap() {
        return {
            info: 'exclamation-circle',
            history: 'document-text',
            music: this.musicIcon(),
            sound: this.soundIcon(),
        };
    }
    get toggleMap() {
        return {
            info: false,
            history: false,
            music: this.isMusicOn(),
            sound: this.isSoundOn(),
        };
    }
    constructor(elRef) {
        this.elRef = elRef;
    }
    ngOnInit() {
        const parent = this.elRef.nativeElement.parentElement;
        if (!parent)
            return;
        this.resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                this.resizeByParent(entry.contentRect);
            });
            this.changeBottomFontSize(this.bottomDivRef.nativeElement);
        });
        this.resizeObserver.observe(parent);
    }
    ngAfterViewInit() {
        const sub = timer(10).subscribe(() => {
            sub.unsubscribe();
            /** 要延遲一下再啟動動畫 */
            this.isAnimated.set(true);
            /** 要延遲一下再調整字大小 */
            this.changeBottomFontSize(this.bottomDivRef.nativeElement);
        });
    }
    resizeByParent(parent) {
        const parentRatio = parent.width / parent.height;
        if (parentRatio > 0.75)
            this.isLandscape.set(true);
        else
            this.isLandscape.set(false);
        let hostHeightRatio = this.panelLandscapeRatio; // Landscape Panel 高度比例
        if (parentRatio > 1) {
            this.isTwoLine.set(false);
        }
        else {
            this.isTwoLine.set(true);
            hostHeightRatio = this.panelPortraitRatio; // Portrait Panel 高度比例
        }
        if (parentRatio > this.gameRatio) {
            // 容器比例大於遊戲比例，使用水平算法
            this.isHorizontal.set(true);
            const gameHeight = parent.height;
            const gameWidth = gameHeight * this.gameRatio;
            this.hostHeight.set(gameHeight * hostHeightRatio);
            const targetHostWidth = gameWidth * this.hostWidthRatio;
            // 如果容器寬度小於目標寬度，則使用容器寬度
            const hostWidth = Math.min(parent.width, targetHostWidth);
            this.hostWidth.set(hostWidth);
            this.hostLeft.set((parent.width - hostWidth) / 2);
            this.hostBottom.set(0);
        }
        else {
            // 容器比例小於遊戲比例，使用垂直算法
            this.isHorizontal.set(false);
            const gameWidth = parent.width;
            const gameHeight = gameWidth / this.gameRatio;
            this.hostWidth.set(gameWidth);
            this.hostHeight.set(gameHeight * hostHeightRatio);
            this.hostLeft.set(0);
            this.hostBottom.set((parent.height - gameHeight) / 2);
        }
    }
    changeBottomFontSize(div) {
        const rect = div.getBoundingClientRect();
        const minFontSize = 14; // 最小字體大小
        const padding = 16; // 考慮 padding 空間 (pt-4 = 16px + p-1 = 4px)
        if (this.isTwoLine()) {
            const targetHeight = 60;
            const availableHeight = Math.max(rect.height - padding, 10);
            const baseFontSize = this.defaultFontSize * 0.8;
            const calculatedSize = baseFontSize * (availableHeight / targetHeight);
            this.bottomFontSize.set(Math.max(minFontSize, calculatedSize));
        }
        else {
            const targetHeight = 50;
            const availableHeight = Math.max(rect.height - padding, 10);
            const calculatedSize = this.defaultFontSize * (availableHeight / targetHeight);
            this.bottomFontSize.set(Math.max(minFontSize, calculatedSize));
        }
    }
    onMusicClick() {
        if (this.musicIcon() === 'musical-note') {
            this.musicIcon.set('musical-note pressed');
            this.isMusicOn.set(false);
            this.music.emit(false);
        }
        else {
            this.musicIcon.set('musical-note');
            this.isMusicOn.set(true);
            this.music.emit(true);
        }
    }
    onSoundClick() {
        if (this.soundIcon() === 'speaker-wave') {
            this.soundIcon.set('speaker-wave pressed');
            this.isSoundOn.set(false);
            this.sound.emit(false);
        }
        else {
            this.soundIcon.set('speaker-wave');
            this.isSoundOn.set(true);
            this.sound.emit(true);
        }
    }
    onSpinMouseEnter() {
        this.spinIcon() === 'spin default';
        {
            this.spinIcon.set('spin hover');
        }
    }
    onSpinMouseLeave() {
        this.spinIcon.set('spin default');
    }
    onSpinMouseDown() {
        this.spinIcon.set('spin pressed');
        this.spin.emit();
    }
    onSpinMouseUp() {
        this.spinIcon.set('spin hover');
    }
    isSpinning = false;
    onSpinClick() {
        this.isSpinning = true;
        this.spin.emit();
        // 2秒後停止動畫
        setTimeout(() => {
            this.isSpinning = false;
        }, 2000);
    }
    getCenterBoxClasses() {
        return {
            'w-[26%]': this.isLandscape(),
            'w-[44%]': !this.isLandscape(),
            'h-[35%]': !this.isTwoLine(),
            'h-[28%]': this.isTwoLine(),
            'duration-300': this.isAnimated(),
        };
    }
    getCloseBtnClasses() {
        return {
            'left-[37.5%]': this.isLandscape(),
            'left-[28.5%]': !this.isLandscape(),
            'h-[30%]': !this.isTwoLine(),
            'h-[25%]': this.isTwoLine(),
            'duration-300': this.isAnimated(),
            'hover:scale-102': true,
            'active:scale-95': true,
            'hover:opacity-80': true,
            'transition-all': true,
        };
    }
    getAddBtnClasses() {
        return {
            'right-[37.5%]': this.isLandscape(),
            'right-[28.5%]': !this.isLandscape(),
            'h-[30%]': !this.isTwoLine(),
            'h-[25%]': this.isTwoLine(),
            'duration-300': this.isAnimated(),
            'hover:scale-102': true,
            'active:scale-95': true,
            'hover:opacity-80': true,
            'transition-all': true,
        };
    }
    getCrownBtnClasses() {
        return {
            'left-1/20 top-1/2': this.isLandscape(),
            'left-1/12 top-1/4': !this.isLandscape(),
            'h-[40%]': !this.isTwoLine(),
            'h-[35%]': this.isTwoLine(),
            'duration-300': this.isAnimated(),
            'hover:scale-105': true,
            'transition-all': true,
            'active:scale-95': true,
        };
    }
    getTicketBtnClasses() {
        return {
            'left-4/20 top-1/2': this.isLandscape(),
            'left-1/12 top-3/4': !this.isLandscape(),
            'h-[40%]': !this.isTwoLine(),
            'h-[35%]': this.isTwoLine(),
            'duration-300': this.isAnimated(),
            'hover:scale-108': true,
            'transition-all': true,
            'active:scale-95': true,
        };
    }
    getSpinBtnClasses() {
        return {
            'h-[70%]': !this.isTwoLine(),
            'h-[60%]': this.isTwoLine(),
            'duration-300': this.isAnimated(),
            'hover:scale-108': true,
            'transition-all': true,
            'active:scale-95': true,
        };
    }
    getAutoplayBtnClasses() {
        return {
            'right-4/20 top-1/2': this.isLandscape(),
            'right-1/12 top-1/4': !this.isLandscape(),
            'h-[40%]': !this.isTwoLine(),
            'h-[35%]': this.isTwoLine(),
            'duration-300': this.isAnimated(),
            'hover:scale-108': true,
            'transition-all': true,
            'active:scale-95': true,
        };
    }
    getTurboBtnClasses() {
        return {
            'right-1/20 top-1/2': this.isLandscape(),
            'right-1/12 top-3/4': !this.isLandscape(),
            'h-[40%]': !this.isTwoLine(),
            'h-[35%]': this.isTwoLine(),
            'duration-300': this.isAnimated(),
            'hover:scale-108': true,
            'transition-all': true,
            'active:scale-95': true,
            transform: this.isTurboPressed(),
        };
    }
    ngOnDestroy() {
        this.resizeObserver?.disconnect();
    }
    onAddMouseEnter() {
        this.addIcon() === 'add default';
        {
            this.addIcon.set('add hover');
        }
    }
    onAddMouseLeave() {
        this.addIcon.set('add default');
    }
    onAddMouseDown() {
        this.addIcon.set('add pressed');
    }
    onAddMouseUp() {
        this.addIcon.set('add hover');
    }
    onDecreaseMouseEnter() {
        this.decreaseIcon() === 'decrease default';
        {
            this.decreaseIcon.set('decrease hover');
        }
    }
    onDecreaseMouseLeave() {
        this.decreaseIcon.set('decrease default');
    }
    onDecreaseMouseDown() {
        this.decreaseIcon.set('decrease pressed');
    }
    onDecreaseMouseUp() {
        this.decreaseIcon.set('decrease hover');
    }
    onTurboClick() {
        const currentState = this.turboIcon();
        if (currentState === 'turbo default') {
            this.turboIcon.set('turbo pressed1');
        }
        else if (currentState === 'turbo pressed1') {
            this.turboIcon.set('turbo pressed2');
        }
        else if (currentState === 'turbo pressed2') {
            this.turboIcon.set('turbo default');
        }
    }
    onAutoplayClick() {
        this.isAutoplayMenuOpen.set(!this.isAutoplayMenuOpen());
    }
    selectAutoplayOption(option) {
        this.selectedAutoplay.set(option);
        this.isAutoplayMenuOpen.set(false);
    }
    getAutoplayDisplayValue(value) {
        return value === Infinity ? '∞' : value.toString();
    }
    static ɵfac = function ApMainBottomPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApMainBottomPanelComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApMainBottomPanelComponent, selectors: [["ap-main-bottom-panel"]], viewQuery: function ApMainBottomPanelComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bottomDivRef = _t.first);
        } }, hostVars: 8, hostBindings: function ApMainBottomPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.cssWidth)("height", ctx.cssHeight)("bottom", ctx.cssBottom)("left", ctx.cssLeft);
        } }, inputs: { displayBalance: [1, "displayBalance"], displayBet: [1, "displayBet"], displayWin: [1, "displayWin"] }, outputs: { spin: "spin", info: "info", history: "history", music: "music", sound: "sound", eventCenter: "eventCenter" }, decls: 44, vars: 30, consts: [["bottomDiv", ""], [1, "relative", "size-full", "bg-gradient-to-t", "from-black/90", "to-transparent", "duration-300", "select-none"], [1, "relative", "w-full", "h-[calc(100%-2.8rem)]"], [1, "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "bg-zinc-900/80", "rounded-xl", 3, "ngClass"], [1, "flex", "justify-center", "items-center", "h-full"], [1, "flex", "items-center"], [1, "flex", "cursor-pointer"], [1, "primary-button", 3, "mouseenter", "mouseleave", "mousedown", "mouseup", "name", "ngClass"], [1, "flex", "justify-center", "cursor-pointer"], [1, "primary-button", "animate-spin", "-translate-y-3/7", 3, "click", "mouseenter", "mouseleave", "mousedown", "mouseup", "name", "ngClass"], ["name", "rs default", 1, "primary-button", 3, "ngClass"], ["name", "event default", 1, "primary-button", 3, "click", "ngClass"], ["name", "autoplay default", 1, "primary-button", 3, "click", "ngClass"], [1, "primary-button", 3, "click", "name", "ngClass"], ["class", "fixed size-full left-0 bottom-0", 3, "click", 4, "ngIf"], ["class", "absolute -translate-y-1/1 animate-fade-up animate-once animate-duration-200", 4, "ngIf"], ["class", "absolute animate-fade-up animate-once animate-duration-200", 3, "ngClass", 4, "ngIf"], [1, "relative", "w-full"], [1, "bottom-0", "w-full", "h-[3rem]", "flex", "flex-row", "justify-center", "items-center", "text-zinc-100", "text-center", "font-semibold", "border-t-2", "border-white/20", "overflow-hidden"], [1, "aspect-square", "p-1", 3, "ngClass"], [1, "h-full", "hover:text-yellow-200", "active:text-zinc-400", "cursor-pointer", 3, "click"], ["name", "bar-3", 1, "size-8"], [1, "flex", "items-center", "justify-center", "gap-x-2", 3, "ngClass"], [1, "text-yellow-400", "uppercase"], [1, "fixed", "size-full", "left-0", "bottom-0", 3, "click"], [1, "absolute", "-translate-y-1/1", "animate-fade-up", "animate-once", "animate-duration-200"], [1, "min-w-48", "rounded-t-md", "border", "border-zinc-700", "bg-zinc-900", "text-white"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "m-4", "cursor-pointer", "hover:bg-zinc-800", "hover:text-yellow-200", "active:bg-zinc-700", "active:bg-yellow-300", "rounded-lg", "text-xl", "font-semibold", 3, "click"], [1, "size-6", 3, "name"], [1, "flex-1"], ["variant", "quick", 3, "disabled", "checked", 4, "ngIf"], ["variant", "quick", 3, "disabled", "checked"], [1, "absolute", "animate-fade-up", "animate-once", "animate-duration-200", 3, "ngClass"], [1, "min-w-32", "rounded-xl", "border-3", "border-zinc-50", "bg-zinc-800", "text-white", "shadow-2xl", "outline-3", "outline-offset-0", "outline-zinc-900"], [1, "flex", "items-center", "justify-center", "py-3", "px-6", "cursor-pointer", "border-b-2", "border-zinc-700", "last:border-b-0", "text-2xl", "font-bold", 3, "click", "ngClass"]], template: function ApMainBottomPanelComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
            i0.ɵɵelement(2, "div", 3);
            i0.ɵɵelementStart(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "ap-icon", 7);
            i0.ɵɵlistener("mouseenter", function ApMainBottomPanelComponent_Template_ap_icon_mouseenter_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDecreaseMouseEnter()); })("mouseleave", function ApMainBottomPanelComponent_Template_ap_icon_mouseleave_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDecreaseMouseLeave()); })("mousedown", function ApMainBottomPanelComponent_Template_ap_icon_mousedown_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDecreaseMouseDown()); })("mouseup", function ApMainBottomPanelComponent_Template_ap_icon_mouseup_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDecreaseMouseUp()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 8)(8, "ap-icon", 9);
            i0.ɵɵlistener("click", function ApMainBottomPanelComponent_Template_ap_icon_click_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSpinClick()); })("mouseenter", function ApMainBottomPanelComponent_Template_ap_icon_mouseenter_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSpinMouseEnter()); })("mouseleave", function ApMainBottomPanelComponent_Template_ap_icon_mouseleave_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSpinMouseLeave()); })("mousedown", function ApMainBottomPanelComponent_Template_ap_icon_mousedown_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSpinMouseDown()); })("mouseup", function ApMainBottomPanelComponent_Template_ap_icon_mouseup_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSpinMouseUp()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 6)(10, "ap-icon", 7);
            i0.ɵɵlistener("mouseenter", function ApMainBottomPanelComponent_Template_ap_icon_mouseenter_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onAddMouseEnter()); })("mouseleave", function ApMainBottomPanelComponent_Template_ap_icon_mouseleave_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onAddMouseLeave()); })("mousedown", function ApMainBottomPanelComponent_Template_ap_icon_mousedown_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onAddMouseDown()); })("mouseup", function ApMainBottomPanelComponent_Template_ap_icon_mouseup_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onAddMouseUp()); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(11, "div", 6);
            i0.ɵɵelement(12, "ap-icon", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 6)(14, "ap-icon", 11);
            i0.ɵɵlistener("click", function ApMainBottomPanelComponent_Template_ap_icon_click_14_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.eventCenter.emit()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 6)(16, "ap-icon", 12);
            i0.ɵɵlistener("click", function ApMainBottomPanelComponent_Template_ap_icon_click_16_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onAutoplayClick()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 6)(18, "ap-icon", 13);
            i0.ɵɵlistener("click", function ApMainBottomPanelComponent_Template_ap_icon_click_18_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onTurboClick()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(19, ApMainBottomPanelComponent_div_19_Template, 1, 0, "div", 14)(20, ApMainBottomPanelComponent_div_20_Template, 3, 1, "div", 15)(21, ApMainBottomPanelComponent_div_21_Template, 1, 0, "div", 14)(22, ApMainBottomPanelComponent_div_22_Template, 3, 2, "div", 16);
            i0.ɵɵelementStart(23, "div", 17)(24, "div", 18, 0)(26, "div", 19)(27, "button", 20);
            i0.ɵɵlistener("click", function ApMainBottomPanelComponent_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.isMenuOpen.set(!ctx.isMenuOpen())); });
            i0.ɵɵelement(28, "ap-icon", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 22)(30, "div", 23);
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div");
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 22)(35, "div", 23);
            i0.ɵɵtext(36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div");
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 22)(40, "div", 23);
            i0.ɵɵtext(41);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div");
            i0.ɵɵtext(43);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.getCenterBoxClasses());
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("name", ctx.decreaseIcon())("ngClass", ctx.getCloseBtnClasses());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", ctx.spinIcon())("ngClass", ctx.getSpinBtnClasses());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", ctx.addIcon())("ngClass", ctx.getAddBtnClasses());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.getCrownBtnClasses());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.getTicketBtnClasses());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.getAutoplayBtnClasses());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("name", ctx.turboIcon())("ngClass", ctx.getTurboBtnClasses());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isMenuOpen());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isMenuOpen());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isAutoplayMenuOpen());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isAutoplayMenuOpen());
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("font-size", ctx.bottomFontSize(), "px")("line-height", "1.2");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.isTwoLine() ? "basis-1/12" : "basis-1/24");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.isTwoLine() ? "flex-col basis-4/12" : "basis-8/24");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.getHeaderBalance());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.displayBalance());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.isTwoLine() ? "flex-col basis-3/12" : "basis-7/24");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.getHeaderBet());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.displayBet());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.isTwoLine() ? "flex-col basis-4/12" : "basis-8/24");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.getHeaderWin());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.displayWin());
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, ApIconComponent,
            ApToggleSwitchComponent], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  display: block;\n}\n\n.primary-button-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.primary-button[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateY(-50%);\n  flex-shrink: 0;\n}\n\n.animate-spin[_ngcontent-%COMP%] {\n  transform-origin: center center;\n  animation: _ngcontent-%COMP%_spin-cw 2.0s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin-cw {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApMainBottomPanelComponent, [{
        type: Component,
        args: [{ selector: 'ap-main-bottom-panel', imports: [
                    CommonModule,
                    ApIconComponent,
                    ApToggleSwitchComponent,
                ], template: "<div\n  class=\"relative size-full bg-gradient-to-t from-black/90 to-transparent duration-300 select-none\"\n>\n  <div class=\"relative w-full h-[calc(100%-2.8rem)]\">\n    <div\n      class=\"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900/80 rounded-xl\"\n      [ngClass]=\"getCenterBoxClasses()\"\n    ></div>\n\n    <div class=\"flex justify-center items-center h-full\">\n      <div class=\"flex items-center\">\n        <!-- Decrease -->\n        <div class=\"flex cursor-pointer\">\n          <ap-icon\n            [name]=\"decreaseIcon()\"\n            class=\"primary-button\"\n            [ngClass]=\"getCloseBtnClasses()\"\n            (mouseenter)=\"onDecreaseMouseEnter()\"\n            (mouseleave)=\"onDecreaseMouseLeave()\"\n            (mousedown)=\"onDecreaseMouseDown()\"\n            (mouseup)=\"onDecreaseMouseUp()\"\n          ></ap-icon>\n        </div>\n\n        <!-- Spin -->\n        <div class=\"flex justify-center cursor-pointer\">\n          <ap-icon\n            [name]=\"spinIcon()\"\n            class=\"primary-button animate-spin -translate-y-3/7\"\n            [ngClass]=\"getSpinBtnClasses()\"\n            (click)=\"onSpinClick()\"\n            (mouseenter)=\"onSpinMouseEnter()\"\n            (mouseleave)=\"onSpinMouseLeave()\"\n            (mousedown)=\"onSpinMouseDown()\"\n            (mouseup)=\"onSpinMouseUp()\"\n          ></ap-icon>\n        </div>\n\n        <!-- Add -->\n        <div class=\"flex cursor-pointer\">\n          <ap-icon\n            [name]=\"addIcon()\"\n            class=\"primary-button\"\n            [ngClass]=\"getAddBtnClasses()\"\n            (mouseenter)=\"onAddMouseEnter()\"\n            (mouseleave)=\"onAddMouseLeave()\"\n            (mousedown)=\"onAddMouseDown()\"\n            (mouseup)=\"onAddMouseUp()\"\n          ></ap-icon>\n        </div>\n      </div>\n    </div>\n\n    <!-- RS -->\n    <div class=\"flex cursor-pointer\">\n      <ap-icon\n        name=\"rs default\"\n        class=\"primary-button\"\n        [ngClass]=\"getCrownBtnClasses()\"\n      ></ap-icon>\n    </div>\n\n    <!-- Event Center -->\n    <div class=\"flex cursor-pointer\">\n      <ap-icon\n        name=\"event default\"\n        class=\"primary-button\"\n        [ngClass]=\"getTicketBtnClasses()\"\n        (click)=\"eventCenter.emit()\"\n      ></ap-icon>\n    </div>\n\n    <!-- AutoPlay -->\n    <div class=\"flex cursor-pointer\">\n      <ap-icon\n        name=\"autoplay default\"\n        class=\"primary-button\"\n        [ngClass]=\"getAutoplayBtnClasses()\"\n        (click)=\"onAutoplayClick()\"\n      ></ap-icon>\n    </div>\n\n    <!-- Turbo -->\n    <div class=\"flex cursor-pointer\">\n      <ap-icon\n        [name]=\"turboIcon()\"\n        class=\"primary-button\"\n        [ngClass]=\"getTurboBtnClasses()\"\n        (click)=\"onTurboClick()\"\n      ></ap-icon>\n    </div>\n\n    <!-- Main Menu Overlay -->\n    <div\n      *ngIf=\"isMenuOpen()\"\n      class=\"fixed size-full left-0 bottom-0\"\n      (click)=\"isMenuOpen.set(false)\"\n    ></div>\n    <div\n      *ngIf=\"isMenuOpen()\"\n      class=\"absolute -translate-y-1/1 animate-fade-up animate-once animate-duration-200\"\n    >\n      <div\n        class=\"min-w-48 rounded-t-md border border-zinc-700 bg-zinc-900 text-white\"\n      >\n        <ng-container *ngFor=\"let item of menuItems\">\n          <div\n            class=\"flex items-center gap-2 px-3 py-2 m-4 cursor-pointer hover:bg-zinc-800 hover:text-yellow-200 active:bg-zinc-700 active:bg-yellow-300 rounded-lg text-xl font-semibold\"\n            (click)=\"item.action()\"\n          >\n            <ap-icon [name]=\"iconMap[item.id]\" class=\"size-6\"></ap-icon>\n            <span class=\"flex-1\">{{ item.label }}</span>\n            <ap-toggle-switch\n              variant=\"quick\"\n              *ngIf=\"item.toggle\"\n              [disabled]=\"true\"\n              [checked]=\"toggleMap[item.id]\"\n            ></ap-toggle-switch>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n\n    <!-- Autoplay Menu Overlay -->\n    <div\n      *ngIf=\"isAutoplayMenuOpen()\"\n      class=\"fixed size-full left-0 bottom-0\"\n      (click)=\"isAutoplayMenuOpen.set(false)\"\n    ></div>\n    <div\n      *ngIf=\"isAutoplayMenuOpen()\"\n      class=\"absolute animate-fade-up animate-once animate-duration-200\"\n      [ngClass]=\"\n        isLandscape()\n          ? 'right-4/24 top-1/6 -translate-y-full'\n          : 'right-1/30 top-1/30 -translate-y-full'\n      \"\n    >\n      <div\n        class=\"min-w-32 rounded-xl border-3 border-zinc-50 bg-zinc-800 text-white shadow-2xl outline-3 outline-offset-0 outline-zinc-900\"\n      >\n        <ng-container *ngFor=\"let option of autoplayOptions\">\n          <div\n            class=\"flex items-center justify-center py-3 px-6 cursor-pointer border-b-2 border-zinc-700 last:border-b-0 text-2xl font-bold\"\n            [ngClass]=\"\n              selectedAutoplay() === option\n                ? 'text-yellow-400'\n                : 'text-white hover:text-yellow-200 hover:bg-zinc-900 active:bg-zinc-700'\n            \"\n            (click)=\"selectAutoplayOption(option)\"\n          >\n            {{ getAutoplayDisplayValue(option) }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n\n    <div class=\"relative w-full\">\n      <!-- Free Spin Notification\n      <div\n        class=\"pointer-events-none absolute left-1/2 bottom-full -translate-x-1/2 w-full flex items-center justify-center\"\n      >\n        <div\n          class=\"w-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/70 to-yellow-400/0 flex items-center justify-center\"\n        >\n          <span class=\"text-lg sm:text-md font-bold text-black uppercase\"\n            >free spin:50</span\n          >\n        </div>\n      </div>-->\n\n      <div\n        #bottomDiv\n        class=\"bottom-0 w-full h-[3rem] flex flex-row justify-center items-center text-zinc-100 text-center font-semibold border-t-2 border-white/20 overflow-hidden\"\n        [style.fontSize.px]=\"bottomFontSize()\"\n        [style.lineHeight]=\"'1.2'\"\n      >\n        <!-- Menu Button -->\n        <div\n          class=\"aspect-square p-1\"\n          [ngClass]=\"isTwoLine() ? 'basis-1/12' : 'basis-1/24'\"\n        >\n          <button\n            (click)=\"isMenuOpen.set(!isMenuOpen())\"\n            class=\"h-full hover:text-yellow-200 active:text-zinc-400 cursor-pointer\"\n          >\n            <ap-icon name=\"bar-3\" class=\"size-8\"></ap-icon>\n          </button>\n        </div>\n\n        <!-- Balance -->\n        <div\n          class=\"flex items-center justify-center gap-x-2\"\n          [ngClass]=\"isTwoLine() ? 'flex-col basis-4/12' : 'basis-8/24'\"\n        >\n          <div class=\"text-yellow-400 uppercase\">{{ getHeaderBalance() }}</div>\n          <div>{{ displayBalance() }}</div>\n        </div>\n\n        <!-- Bet -->\n        <div\n          class=\"flex items-center justify-center gap-x-2\"\n          [ngClass]=\"isTwoLine() ? 'flex-col basis-3/12' : 'basis-7/24'\"\n        >\n          <div class=\"text-yellow-400 uppercase\">{{ getHeaderBet() }}</div>\n          <div>{{ displayBet() }}</div>\n        </div>\n\n        <!-- Win -->\n        <div\n          class=\"flex items-center justify-center gap-x-2\"\n          [ngClass]=\"isTwoLine() ? 'flex-col basis-4/12' : 'basis-8/24'\"\n        >\n          <div class=\"text-yellow-400 uppercase\">{{ getHeaderWin() }}</div>\n          <div>{{ displayWin() }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [":host {\n  position: absolute;\n  display: block;\n}\n\n.primary-button-container {\n  position: relative;\n}\n\n.primary-button {\n  position: absolute;\n  transform: translateY(-50%);\n  flex-shrink: 0;\n}\n\n.animate-spin {\n  transform-origin: center center;\n  animation: spin-cw 2.0s linear infinite;\n}\n\n@keyframes spin-cw {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n"] }]
    }], () => [{ type: i0.ElementRef }], { bottomDivRef: [{
            type: ViewChild,
            args: ['bottomDiv']
        }], cssWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], cssHeight: [{
            type: HostBinding,
            args: ['style.height']
        }], cssBottom: [{
            type: HostBinding,
            args: ['style.bottom']
        }], cssLeft: [{
            type: HostBinding,
            args: ['style.left']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApMainBottomPanelComponent, { className: "ApMainBottomPanelComponent", filePath: "src/app/components/ap-main-bottom-panel/ap-main-bottom-panel.component.ts", lineNumber: 35 }); })();
//# sourceMappingURL=ap-main-bottom-panel.component.js.map