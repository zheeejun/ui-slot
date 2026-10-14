import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCoverComponent } from "../../pages/game-cover/game-cover.component";
import { GameBridgeComponent } from '../../pages/game-bridge/game-bridge.component';
import { environment } from '../../../environments/app-environment';
import * as i0 from "@angular/core";
import * as i1 from "../../services/login-ctrl/login-ctrl.service";
import * as i2 from "../../services/app-interface/app-interface.service";
import * as i3 from "@angular/router";
function AppLayoutComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "game-bridge", 0);
} }
function AppLayoutComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "game-cover", 0);
} }
/**
 * AppLayoutComponent 應用程式的最主要的入口
 */
export class AppLayoutComponent {
    login;
    api;
    router;
    // 拿 Angular 用來操作 view 的容器，插入動態內容用
    /** 顯示登入畫面 */
    showLogin = signal(false);
    /** 顯示遊戲覆蓋模式 (html ui) */
    showGameCover = signal(false);
    /** 顯示遊戲橋接模式 (in-game ui)*/
    showGameBridge = signal(false);
    constructor(login, api, router) {
        this.login = login;
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
        // 處理AppInterfaceService的設定與連線
        if (environment.production) {
            this.openGameIframe();
        }
        else {
            // Dev 環境會判斷是否要輸入token等登入資訊
            if (this.login.needLogin) {
                this.router.navigate(['login']);
            }
            else {
                this.openGameIframe();
            }
        }
    }
    openGameIframe() {
        //預設是Html UI的遊戲走這邊
        if (this.login.isUseHtmlUI()) {
            if (this.login.uimode === 'in-game')
                this.runBridgeMode();
            else
                this.runCoverMode();
            return;
        }
        // 其餘情況由網址決定使用哪種UI模式
        if (this.login.uimode === 'html')
            this.runCoverMode();
        else
            this.runBridgeMode();
        return;
    }
    /** 完全交給Cocos遊戲端處理, Web完全跳出控制 */
    runCocosMode() {
    }
    /** 遊戲橋接模式, 目前由Cocos連接Socket */
    runBridgeMode() {
        this.api.setup(this.login.setting);
        this.api.connect();
        this.showGameBridge.set(true);
        // 此模式是由Cocos遊戲端來處理登入行為
    }
    /** UI覆蓋遊戲模式, 目前由Cocos連接Socket */
    runCoverMode() {
        this.api.setup(this.login.setting);
        this.api.connect();
        this.showGameCover.set(true);
        // 此模式是由Cocos遊戲端來處理登入行為
    }
    /** API主動連接Socket */
    runMasterMode() {
        this.api.setup(this.login.setting);
        this.api.connect();
        // Master模式偵測socket開啟
        this.api.socketOpen$.subscribe((ev) => this.onSocketOpen(ev));
        // TODO: 顯示Master模式的Component
    }
    /** Socket開啟行為 */
    onSocketOpen(event) {
        // 主動登入
        this.api.sendLogin();
    }
    static ɵfac = function AppLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppLayoutComponent)(i0.ɵɵdirectiveInject(i1.LoginCtrlService), i0.ɵɵdirectiveInject(i2.AppInterfaceService), i0.ɵɵdirectiveInject(i3.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppLayoutComponent, selectors: [["app-layout"]], decls: 2, vars: 2, consts: [[1, "absolute", "inset-0"]], template: function AppLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, AppLayoutComponent_Conditional_0_Template, 1, 0, "game-bridge", 0);
            i0.ɵɵconditionalCreate(1, AppLayoutComponent_Conditional_1_Template, 1, 0, "game-cover", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.showGameBridge() ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showGameCover() ? 1 : -1);
        } }, dependencies: [CommonModule, GameCoverComponent, GameBridgeComponent], styles: ["[_nghost-%COMP%]{\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppLayoutComponent, [{
        type: Component,
        args: [{ selector: 'app-layout', imports: [CommonModule, GameCoverComponent, GameBridgeComponent], template: "@if (showGameBridge()) {\n  <game-bridge class=\"absolute inset-0\"/>\n}\n@if (showGameCover()) {\n  <game-cover class=\"absolute inset-0\"/>\n}\n", styles: [":host{\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n\n"] }]
    }], () => [{ type: i1.LoginCtrlService }, { type: i2.AppInterfaceService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppLayoutComponent, { className: "AppLayoutComponent", filePath: "src/app/layouts/app-layout/app-layout.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=app-layout.component.js.map