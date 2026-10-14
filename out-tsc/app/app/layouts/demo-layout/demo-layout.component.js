import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { HistoryListComponent } from "../../pages/history-list/history-list.component";
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { EventCenterComponent } from "../../pages/event-center/event-center.component";
import { InfoComponent } from '../../pages/info/info.component';
import { DemoOverlayBannerComponent } from "../../components/demo-overlay-banner/demo-overlay-banner.component";
import { TrnAllComponent } from "../../pages/trn-all/trn-all.component";
import { DemoGameScreenComponent } from "../../components/demo-game-screen/demo-game-screen.component";
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { BottomPanelDemoComponent } from "../../pages/bottom-panel-demo/bottom-panel-demo.component";
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import * as i0 from "@angular/core";
function DemoLayoutComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-center", 0);
} }
function DemoLayoutComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "history-list", 2);
    i0.ɵɵlistener("close", function DemoLayoutComponent_Conditional_5_Template_history_list_close_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showHistory.set(false)); });
    i0.ɵɵelementEnd();
} }
function DemoLayoutComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "page-info", 3);
    i0.ɵɵlistener("close", function DemoLayoutComponent_Conditional_6_Template_page_info_close_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showInfo.set(false)); });
    i0.ɵɵelementEnd();
} }
/**
 * DemoLayoutComponent 是一個用於展示遊戲的佈局組件
 * 基本是展示主要UI, 內容也是以離線模式為主
 */
export class DemoLayoutComponent {
    api = inject(AppInterfaceService);
    eventCenter = inject(EventCenterCtrlService);
    login = inject(LoginCtrlService);
    /** 顯示Event Center  */
    showEventCenter = computed(() => this.eventCenter.isVisible());
    /** 顯示歷史紀錄 */
    showHistory = signal(false);
    /** 顯示Info頁面 */
    showInfo = signal(false);
    constructor() {
    }
    ngOnInit() {
        // demo模式下的設定值
        this.api.setup({
            authToken: null,
            gameId: '10087',
            socketUrl: null,
            assetUrl: 'https://dev.diresoft.net',
            language: this.login.language,
            offline: true
        });
    }
    static ɵfac = function DemoLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DemoLayoutComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DemoLayoutComponent, selectors: [["demo-layout"]], decls: 7, vars: 3, consts: [[1, "absolute", "inset-0"], [1, "animate-fade-up", "animate-duration-300", "animate-ease-in"], [1, "absolute", "inset-0", 3, "close"], [3, "close"]], template: function DemoLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "demo-game-screen", 0)(1, "bottom-panel-demo", 1)(2, "trn-all")(3, "demo-overlay-banner");
            i0.ɵɵconditionalCreate(4, DemoLayoutComponent_Conditional_4_Template, 1, 0, "event-center", 0);
            i0.ɵɵconditionalCreate(5, DemoLayoutComponent_Conditional_5_Template, 1, 0, "history-list", 0);
            i0.ɵɵconditionalCreate(6, DemoLayoutComponent_Conditional_6_Template, 1, 0, "page-info");
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.showEventCenter() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showHistory() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showInfo() ? 6 : -1);
        } }, dependencies: [CommonModule, DemoOverlayBannerComponent, BottomPanelDemoComponent, TrnAllComponent, HistoryListComponent, EventCenterComponent, InfoComponent, DemoGameScreenComponent], styles: ["[_nghost-%COMP%]{\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DemoLayoutComponent, [{
        type: Component,
        args: [{ selector: 'demo-layout', imports: [CommonModule, DemoOverlayBannerComponent, BottomPanelDemoComponent, TrnAllComponent, HistoryListComponent, EventCenterComponent, InfoComponent, DemoGameScreenComponent, BottomPanelDemoComponent], template: "<demo-game-screen class=\"absolute inset-0\" />\n<bottom-panel-demo  class=\"animate-fade-up animate-duration-300 animate-ease-in\"\n/>\n<trn-all />\n<demo-overlay-banner />\n@if (showEventCenter()) {<event-center class=\"absolute inset-0\" />}\n@if (showHistory()) {<history-list class=\"absolute inset-0\" (close)=\"showHistory.set(false)\" />}\n@if (showInfo()) {<page-info (close)=\"showInfo.set(false)\"/>}\n", styles: [":host{\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DemoLayoutComponent, { className: "DemoLayoutComponent", filePath: "src/app/layouts/demo-layout/demo-layout.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=demo-layout.component.js.map