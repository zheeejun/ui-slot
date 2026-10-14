import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApInputBox } from "../../../ap-components-lib/ap-input-box/ap-input-box";
import { ApSelectComponent } from "../../../ap-components-lib/ap-select/ap-select.component";
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import * as i0 from "@angular/core";
import * as i1 from "../../services/login-ctrl/login-ctrl.service";
import * as i2 from "../../services/query-params/query-params.service";
import * as i3 from "@angular/router";
import * as i4 from "../../services/storage-ctrl/storage-ctrl.service";
/**
 * LoginLayoutComponent 用來處理網站頁面的登入功能,
 * 負責處理loginService, queryParams的相關設定
 * 請注意只會在Dev模式才會啟用
 */
export class LoginLayoutComponent {
    login;
    query;
    router;
    storage;
    inputToken = signal('');
    inputUrl = signal('');
    inputAssetUrl = signal('');
    inputGameId = signal('10087');
    inputUIMode = signal('html');
    uimode = computed(() => this.inputUIMode() === 'html' ? '1' : '0');
    inputLanguage = signal('en');
    rememberMe = signal(false);
    /** inputToken inputUrl inputAssetUrl inputGameId, 都有數值得時候, 可以login*/
    accepted = computed(() => {
        return !!this.inputToken() && !!this.inputUrl() && !!this.inputAssetUrl() && !!this.inputGameId();
    });
    tokenIsInvalid = computed(() => {
        // 簡單驗證 token 格式, 這邊只是示範, 實際驗證方式可能會更複雜
        const token = this.inputToken();
        return token.length <= 0;
    });
    platformOptions = signal([
        { label: 'Dev', value: 'wss://dev.diresoft.net/api/agent' },
        { label: 'QA', value: 'wss://qa.diresoft.net/api/agent' },
    ]);
    assetUrlOptions = signal([
        { label: 'Localhost', value: window.location.origin + "/launch" },
        { label: 'Dev', value: 'https://dev.diresoft.net' },
        { label: 'QA', value: 'https://qa.diresoft.net' },
    ]);
    modeOptions = signal([
        { label: 'In-Game', value: 'in-game' },
        { label: 'html', value: 'html' },
    ]);
    languageOptions = signal([
        { label: 'English', value: 'en' },
        { label: 'Chinese', value: 'cn' },
        { label: 'Japanese', value: 'ja' },
    ]);
    commonStringDevUrl = computed(() => {
        const baseUrl = 'https://dev.diresoft.net';
        const lang = this.inputLanguage() || this.login.language || 'en';
        return `${baseUrl}/system/game_word/CommonString/${lang}/game_common_word.json`;
    });
    commonStringQAUrl = computed(() => {
        const baseUrl = 'https://qa.diresoft.net';
        const lang = this.inputLanguage() || this.login.language || 'en';
        return `${baseUrl}/system/game_word/CommonString/${lang}/game_common_word.json`;
    });
    constructor(login, query, router, storage) {
        this.login = login;
        this.query = query;
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
        // 如果之前有儲存登入設定，則載入這些設定
        if (this.storage.loginSetting)
            this.rememberMe.set(true);
        // 登入頁面負責處理loginService的設定
        const token = this.storage.loginSetting?.token ?? this.login.authToken ?? '';
        const gameId = this.storage.loginSetting?.gameId ?? this.login.gameId ?? '10087';
        const url = this.storage.loginSetting?.url ?? this.login.socketUrl ?? 'wss://dev.diresoft.net/api/agent';
        // 這邊比較特殊, 因為localhost的asset url是localhost:4200/launch/, 所以不會使用預設的login.assetUrl (window.location.origin)
        const assetUrl = this.storage.loginSetting?.assetUrl ?? 'https://dev.diresoft.net';
        const lang = this.storage.loginSetting?.language ?? this.login.language ?? 'en';
        const uiMode = this.storage.loginSetting?.uiMode ?? this.login.uimode ?? 'html';
        this.onTokenChange(token);
        this.onGameIdChange(gameId);
        this.onUrlChange(url);
        this.onAssetUrlChange(assetUrl);
        this.onLangChange(lang);
        this.onUIModeChange(uiMode);
    }
    /** 頁面切換 UI 模式 */
    onUIModeChange(mode) {
        this.inputUIMode.set(mode);
        this.query.uimode = this.uimode();
        this.login.setUIMode(mode);
    }
    /** 頁面切換語言 */
    onLangChange(lang) {
        this.inputLanguage.set(lang);
        this.query.lang = lang;
        this.login.setLanguage(lang);
    }
    /** 頁面切換遊戲ID */
    onGameIdChange(id) {
        this.inputGameId.set(id);
        this.query.gameId = id;
        this.login.setGameId(id);
    }
    /** 頁面切換 Token */
    onTokenChange(token) {
        this.inputToken.set(token);
        this.login.setAuthToken(token);
    }
    /** 頁面切換 Remember Me */
    onRememberMeChange(checked) {
        this.rememberMe.set(checked);
        if (!checked) {
            this.storage.loginSetting = null; // 取消記住，清除儲存的設定
            this.login.deleteSession(); // 清除 sessionStorage 中的登入資訊
        }
    }
    saveLoginSettingToStorage() {
        this.storage.loginSetting = {
            token: this.inputToken(),
            url: this.inputUrl(),
            assetUrl: this.inputAssetUrl(),
            gameId: this.inputGameId(),
            uiMode: this.inputUIMode(),
            language: this.inputLanguage()
        };
    }
    saveLoginSettingToService() {
        // 登入時在觸發一次 onXXXChange，確保 loginService 的設定是最新的
        this.onTokenChange(this.inputToken());
        this.onGameIdChange(this.inputGameId());
        this.onUrlChange(this.inputUrl());
        this.onAssetUrlChange(this.inputAssetUrl());
        this.onLangChange(this.inputLanguage());
        this.onUIModeChange(this.inputUIMode());
    }
    /** 頁面切換 url */
    onUrlChange(url) {
        this.inputUrl.set(url);
        this.login.setSocketUrl(url);
    }
    /** 頁面切換 assetUrl */
    onAssetUrlChange(url) {
        this.inputAssetUrl.set(url);
        this.login.setAssetUrl(url);
    }
    /** 按下登入按鈕 */
    onLoginClick() {
        this.router.navigate(["/"], {
            queryParams: {
                gameId: this.inputGameId(),
                lang: this.inputLanguage(),
                uimode: this.uimode()
            }
        });
        this.saveLoginSettingToService(); // 確保登入設定已經儲存到 loginService 中
        // 如果 Remember Me 打勾，儲存到 localStorage
        if (this.rememberMe())
            this.saveLoginSettingToStorage();
    }
    /** 前往Lab頁面 */
    onLabClick() {
        this.router.navigate(["/lab"], {
            queryParams: {
                gameId: this.inputGameId(),
                lang: this.inputLanguage(),
                uimode: this.uimode()
            }
        });
        this.saveLoginSettingToService(); // 確保登入設定已經儲存到 loginService 中
        // 如果 Remember Me 打勾，儲存到 localStorage
        if (this.rememberMe())
            this.saveLoginSettingToStorage();
    }
    /** 前往離線模式頁面 */
    onOfflineClick() {
        this.login.setOffline(true);
        this.router.navigate(["/lab"], {
            queryParams: {
                lang: this.inputLanguage(),
                uimode: this.uimode()
            }
        });
    }
    /** 前往Demo頁面 */
    onDemoClick() {
        this.login.setOffline(true);
        this.router.navigate(["/lab/demo"], {
            queryParams: {
                lang: this.inputLanguage(),
            }
        });
    }
    /** 前往Dev頁面 */
    onDevClick() {
        this.login.setOffline(true);
        this.router.navigate(["/dev"]);
    }
    static ɵfac = function LoginLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginLayoutComponent)(i0.ɵɵdirectiveInject(i1.LoginCtrlService), i0.ɵɵdirectiveInject(i2.QueryParamsService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.StorageCtrlService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginLayoutComponent, selectors: [["login-layout"]], decls: 21, vars: 25, consts: [[1, "flex", "flex-col", "gap-4", "relative", "w-full", "sm:w-xl", "text-zinc-300", "bg-zinc-800", "rounded-2xl", "p-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-2"], ["label", "Platform", 3, "onSelect", "options", "selected"], ["label", "Game ID", 3, "onInput", "value"], ["label", "Asset URL", 3, "onSelect", "options", "selected"], ["label", "UI Mode", 3, "onSelect", "options", "selected"], ["label", "Language", 3, "onSelect", "options", "selected"], ["label", "Token", 3, "onInput", "error", "value"], ["label", "Remember Me", 3, "checkedChange", "checked"], [1, "flex", "flex-col", "gap-4", "sm:gap-12", "sm:flex-row", "sm:justify-between"], [1, "flex", "flex-col", "sm:flex-row", "gap-2", "sm:gap-4", "w-full", "sm:w-auto"], [1, "w-full", "sm:w-auto", 3, "clicked", "disabled", "label"], [1, "w-full", "sm:w-auto", 3, "clicked", "label", "variant", "disabled"], [1, "w-full", "sm:w-auto", 3, "clicked", "label", "variant"], ["target", "_blank", "rel", "noopener noreferrer", 1, "bottom-4", "right-4", "text-sm", "text-blue-400", "hover:underline", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "bottom-4", "right-40", "text-sm", "text-blue-400", "hover:underline", 3, "href"]], template: function LoginLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "ap-select", 2);
            i0.ɵɵlistener("onSelect", function LoginLayoutComponent_Template_ap_select_onSelect_2_listener($event) { return ctx.onUrlChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "ap-input-box", 3);
            i0.ɵɵlistener("onInput", function LoginLayoutComponent_Template_ap_input_box_onInput_3_listener($event) { return ctx.onGameIdChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ap-select", 4);
            i0.ɵɵlistener("onSelect", function LoginLayoutComponent_Template_ap_select_onSelect_4_listener($event) { return ctx.onAssetUrlChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "ap-select", 5);
            i0.ɵɵlistener("onSelect", function LoginLayoutComponent_Template_ap_select_onSelect_5_listener($event) { return ctx.onUIModeChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "ap-select", 6);
            i0.ɵɵlistener("onSelect", function LoginLayoutComponent_Template_ap_select_onSelect_6_listener($event) { return ctx.onLangChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ap-input-box", 7);
            i0.ɵɵlistener("onInput", function LoginLayoutComponent_Template_ap_input_box_onInput_7_listener($event) { return ctx.onTokenChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "ap-toggle-switch", 8);
            i0.ɵɵlistener("checkedChange", function LoginLayoutComponent_Template_ap_toggle_switch_checkedChange_8_listener($event) { return ctx.onRememberMeChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 9)(10, "div", 10)(11, "ap-button", 11);
            i0.ɵɵlistener("clicked", function LoginLayoutComponent_Template_ap_button_clicked_11_listener() { return ctx.onLoginClick(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "ap-button", 12);
            i0.ɵɵlistener("clicked", function LoginLayoutComponent_Template_ap_button_clicked_12_listener() { return ctx.onLabClick(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 10)(14, "ap-button", 13);
            i0.ɵɵlistener("clicked", function LoginLayoutComponent_Template_ap_button_clicked_14_listener() { return ctx.onOfflineClick(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "ap-button", 13);
            i0.ɵɵlistener("clicked", function LoginLayoutComponent_Template_ap_button_clicked_15_listener() { return ctx.onDemoClick(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "ap-button", 13);
            i0.ɵɵlistener("clicked", function LoginLayoutComponent_Template_ap_button_clicked_16_listener() { return ctx.onDevClick(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(17, "a", 14);
            i0.ɵɵtext(18, "Open Dev CommonString");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "a", 15);
            i0.ɵɵtext(20, "Open QA CommonString");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("options", ctx.platformOptions())("selected", ctx.inputUrl());
            i0.ɵɵadvance();
            i0.ɵɵproperty("value", ctx.inputGameId());
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.assetUrlOptions())("selected", ctx.inputAssetUrl());
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.modeOptions())("selected", ctx.inputUIMode());
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.languageOptions())("selected", ctx.inputLanguage());
            i0.ɵɵadvance();
            i0.ɵɵproperty("error", ctx.tokenIsInvalid())("value", ctx.inputToken());
            i0.ɵɵadvance();
            i0.ɵɵproperty("checked", ctx.rememberMe());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.accepted() === false)("label", "Login");
            i0.ɵɵadvance();
            i0.ɵɵproperty("label", "Lab")("variant", "outlined")("disabled", ctx.accepted() === false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("label", "Offline")("variant", "outlined");
            i0.ɵɵadvance();
            i0.ɵɵproperty("label", "Demo")("variant", "outlined");
            i0.ɵɵadvance();
            i0.ɵɵproperty("label", "Dev")("variant", "outlined");
            i0.ɵɵadvance();
            i0.ɵɵproperty("href", ctx.commonStringDevUrl(), i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("href", ctx.commonStringQAUrl(), i0.ɵɵsanitizeUrl);
        } }, dependencies: [RouterModule, CommonModule, FormsModule, ApInputBox, ApSelectComponent, ApButtonComponent, ApToggleSwitchComponent], styles: ["[_nghost-%COMP%]{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginLayoutComponent, [{
        type: Component,
        args: [{ selector: 'login-layout', imports: [RouterModule, CommonModule, FormsModule, ApInputBox, ApSelectComponent, ApButtonComponent, ApToggleSwitchComponent], template: "<div class=\"flex flex-col gap-4 relative w-full sm:w-xl text-zinc-300 bg-zinc-800 rounded-2xl  p-6 \">\n  <div\n    class=\"grid grid-cols-1 sm:grid-cols-2 gap-2\"\n  >\n    <!-- Platform -->\n    <ap-select\n      label=\"Platform\"\n      [options]=\"platformOptions()\"\n      [selected]=\"inputUrl()\"\n      (onSelect)=\"onUrlChange($event)\"\n    />\n\n    <!-- Game ID -->\n    <ap-input-box\n      label=\"Game ID\"\n      [value]=\"inputGameId()\"\n      (onInput)=\"onGameIdChange($event)\"\n    />\n\n    <ap-select\n      label=\"Asset URL\"\n      [options]=\"assetUrlOptions()\"\n      [selected]=\"inputAssetUrl()\"\n      (onSelect)=\"onAssetUrlChange($event)\"\n    />\n\n    <!-- UI Mode -->\n    <ap-select\n      label=\"UI Mode\"\n      [options]=\"modeOptions()\"\n      [selected]=\"inputUIMode()\"\n      (onSelect)=\"onUIModeChange($event)\"\n    />\n\n    <!-- Language -->\n    <ap-select\n      label=\"Language\"\n      [options]=\"languageOptions()\"\n      [selected]=\"inputLanguage()\"\n      (onSelect)=\"onLangChange($event)\"\n    />\n\n    <!-- Token -->\n    <ap-input-box\n      label=\"Token\"\n      [error]=\"tokenIsInvalid()\"\n      [value]=\"inputToken()\"\n      (onInput)=\"onTokenChange($event)\"\n    />\n  </div>\n  <!-- Remember Me -->\n  <ap-toggle-switch\n    label=\"Remember Me\"\n    [checked]=\"rememberMe()\"\n    (checkedChange)=\"onRememberMeChange($event)\"\n  />\n  <!-- Buttons -->\n  <div\n    class=\"flex flex-col gap-4 sm:gap-12 sm:flex-row sm:justify-between\"\n  >\n    <div class=\"flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto\">\n      <ap-button\n        class=\"w-full sm:w-auto\"\n        [disabled]=\"accepted() === false\"\n        [label]=\"'Login'\"\n        (clicked)=\"onLoginClick()\"\n      ></ap-button>\n      <ap-button\n        class=\"w-full sm:w-auto\"\n        [label]=\"'Lab'\"\n        [variant]=\"'outlined'\"\n        [disabled]=\"accepted() === false\"\n        (clicked)=\"onLabClick()\"\n      ></ap-button>\n    </div>\n    <div class=\"flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto\">\n      <ap-button\n        class=\"w-full sm:w-auto\"\n        [label]=\"'Offline'\"\n        [variant]=\"'outlined'\"\n        (clicked)=\"onOfflineClick()\"\n      ></ap-button>\n      <ap-button\n        class=\"w-full sm:w-auto\"\n        [label]=\"'Demo'\"\n        [variant]=\"'outlined'\"\n        (clicked)=\"onDemoClick()\"\n      ></ap-button>\n      <ap-button\n        class=\"w-full sm:w-auto\"\n        [label]=\"'Dev'\"\n        [variant]=\"'outlined'\"\n        (clicked)=\"onDevClick()\"\n      ></ap-button>\n    </div>\n    <!-- \u53E6\u958B\u65B0\u8996\u7A97\u7D66 commonStringUrl-->\n  </div>\n  <a\n    class=\"bottom-4 right-4 text-sm text-blue-400 hover:underline\"\n    [href]=\"commonStringDevUrl()\"\n    target=\"_blank\"\n    rel=\"noopener noreferrer\"\n  >Open Dev CommonString</a>\n  <a\n    class=\"bottom-4 right-40 text-sm text-blue-400 hover:underline\"\n    [href]=\"commonStringQAUrl()\"\n    target=\"_blank\"\n    rel=\"noopener noreferrer\"\n  >Open QA CommonString</a>\n</div>\n", styles: [":host{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}"] }]
    }], () => [{ type: i1.LoginCtrlService }, { type: i2.QueryParamsService }, { type: i3.Router }, { type: i4.StorageCtrlService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginLayoutComponent, { className: "LoginLayoutComponent", filePath: "src/app/layouts/login-layout/login-layout.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=login-layout.component.js.map