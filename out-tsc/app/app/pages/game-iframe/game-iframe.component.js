/**
 * 遊戲game-iframe-service的component，負責載入遊戲iframe以及處理與遊戲iframe的溝通
 * 一些game-iframe與其他service的溝通邏輯也會放在這裡
 */
import { Component, effect, inject, input, untracked, ViewChild } from '@angular/core';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import { createApWebMessage } from '../../../diresoftcocoscreatorslotcommon/ApWeb/ApWebMessages';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { QueryParamsService } from '../../services/query-params/query-params.service';
import * as i0 from "@angular/core";
const _c0 = ["gameIframe"];
export class GameIframeComponent {
    api = inject(AppInterfaceService);
    user = inject(UserProfileService);
    login = inject(LoginCtrlService);
    game = inject(GameIframeCtrlService);
    query = inject(QueryParamsService);
    /** 開啟遊戲的模式  */
    uiMode = input('ap-none');
    /** 取得遊戲的iframe元素 */
    set iframeRef(ref) {
        this.game.setIframe(ref.nativeElement);
    }
    /** 是否開啟遊戲內建UI */
    constructor() {
        // 偵測game啟動socket
        this.game.socketWakeUp$.subscribe(() => { this.game.send(createApWebMessage('SocketOnOpen', undefined)); });
        // 連結game -> network
        this.game.socketSend$.subscribe((message) => { this.api.sendPack(message.data); });
        this.game.socketClose$.subscribe((message) => { this.api.close(message.code, message.reason); });
        // 連結network -> game
        this.api.socketError$.subscribe((ev) => this.game.send(createApWebMessage('SocketOnError', undefined)));
        this.api.socketClose$.subscribe((ev) => this.game.send(createApWebMessage('SocketOnClose', { code: ev.code, reason: ev.reason, })));
        this.api.socketMessage$.subscribe((ev) => this.game.send(createApWebMessage('SocketOnMessage', { data: ev.data })));
        // 偵測game準備好可以開始Spin的時候，傳送目前的下注資訊給遊戲
        this.game.readyForSpin$.subscribe(this.onReadyForSpin.bind(this));
        // 偵測game更變下注的時候，更新UserProfileService裡的下注資訊
        this.game.betChanged$.subscribe(this.onChangeBet.bind(this));
        // 偵測game轉址的時候，導回目前頁面或是backurl
        this.game.UrlRedirection$.subscribe(this.onUrlRedirection.bind(this));
        // 偵測betData變更，傳送給遊戲
        effect(() => {
            const data = this.user.betData(); // 這是我們真正想追蹤的
            // 使用 untracked 包住後續動作，
            // 這樣裡面就算有讀取 logger 的 signal，也不會被視為依賴。
            untracked(() => {
                this.game.send(createApWebMessage('UpdateBetData', data));
            });
        });
    }
    ngOnInit() {
        // 啟動GameIframeCtrlService
        this.game.mode = this.uiMode();
        this.game.launch(this.login.gameId);
    }
    /** 偵測遊戲準備好可以開始Spin的時候 */
    onReadyForSpin() {
        // 每次準備好Spin的時候，如果目前是Buy Feature模式，關閉Buy Feature模式
        if (this.user.isBuyFeature()) {
            this.user.updateSpinMode(null);
        }
    }
    /** 遊戲更變下注 */
    onChangeBet(content) {
        this.user.updateBet(content.bet);
    }
    /** 偵測遊戲轉址 */
    onUrlRedirection(content) {
        window.location.href = this.query.backurl || window.location.href;
    }
    ngAfterViewInit() {
    }
    static ɵfac = function GameIframeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GameIframeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GameIframeComponent, selectors: [["game-iframe"]], viewQuery: function GameIframeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.iframeRef = _t.first);
        } }, inputs: { uiMode: [1, "uiMode"] }, decls: 2, vars: 0, consts: [["gameIframe", ""], ["frameborder", "0", "scrolling", "no", 1, "relative", "w-full", "h-full"]], template: function GameIframeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "iframe", 1, 0);
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: black;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GameIframeComponent, [{
        type: Component,
        args: [{ selector: 'game-iframe', imports: [], template: "<iframe #gameIframe class=\"relative w-full h-full \" frameborder=\"0\" scrolling=\"no\"></iframe>", styles: [":host {\n  display: block;\n  background-color: black;\n}"] }]
    }], () => [], { iframeRef: [{
            type: ViewChild,
            args: ['gameIframe', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GameIframeComponent, { className: "GameIframeComponent", filePath: "src/app/pages/game-iframe/game-iframe.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=game-iframe.component.js.map