import { Component, output, signal, computed, inject } from '@angular/core';
import { BaseTimer } from '../../library/base-timer';
import { CommonModule } from '@angular/common';
import { ApUiFramePageComponent } from '../../components/ap-ui-frame-page/ap-ui-frame-page.component';
import { ApTabMenu4Component, } from '../../../ap-components-lib/ap-tab-menu-4/ap-tab-menu-4.component';
import { InfoFeatureComponent } from '../info-feature/info-feature.component';
import { InfoGuideComponent } from '../info-guide/info-guide.component';
import { InfoPayTableDefaultComponent } from "../info-pay-table-default/info-pay-table-default.component";
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../services/network/network.service";
import * as i3 from "../../services/user-profile/user-profile.service";
import * as i4 from "../../services/login-ctrl/login-ctrl.service";
import * as i5 from "../../services/app-interface/app-interface.service";
function InfoComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "info-pay-table-default");
} }
function InfoComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "info-feature");
} }
function InfoComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "info-guide");
} }
var EntryEnum;
(function (EntryEnum) {
    EntryEnum[EntryEnum["title_left"] = 0] = "title_left";
    EntryEnum[EntryEnum["title_center"] = 1] = "title_center";
    EntryEnum[EntryEnum["title_right"] = 2] = "title_right";
    EntryEnum[EntryEnum["subtitle_left"] = 3] = "subtitle_left";
    EntryEnum[EntryEnum["subtitle_center"] = 4] = "subtitle_center";
    EntryEnum[EntryEnum["subtitle_right"] = 5] = "subtitle_right";
    EntryEnum[EntryEnum["image_left"] = 6] = "image_left";
    EntryEnum[EntryEnum["image_center"] = 7] = "image_center";
    EntryEnum[EntryEnum["image_right"] = 8] = "image_right";
    EntryEnum[EntryEnum["content_left"] = 9] = "content_left";
    EntryEnum[EntryEnum["content_center"] = 10] = "content_center";
    EntryEnum[EntryEnum["content_right"] = 11] = "content_right";
})(EntryEnum || (EntryEnum = {}));
class InfoEntry {
    category = 'content';
    position = 'center';
    content = 'Invalid entry.';
    activedTab = signal('Pay Table');
    constructor(str) {
        // ex: 1@DOUBLE CHANCE"
        const match = str.match(/^(\d+)@(.+)$/);
        if (match) {
            const prefix = EntryEnum[Number(match[1])]; // '1 -> title_center'
            const subfix = match[2]; // 'DOUBLE CHANCE'
            this.category = prefix.split('_')[0]; // 'title'
            this.position = prefix.split('_')[1]; // 'center'
            this.content = subfix;
        }
    }
}
export class InfoComponent {
    http;
    network;
    profile;
    login;
    api;
    appI18n = inject(AppI18nService);
    header = computed(() => this.appI18n.instant('info') ?? 'Info');
    tabs = computed(() => [
        {
            id: 'Pay Table',
            label: this.appI18n.instant('paytable') ?? 'Pay Table',
            icon: 'document-text',
        },
        {
            id: 'Feature',
            label: this.appI18n.instant('feature') ?? 'Feature',
            icon: 'sparkles',
        },
        {
            id: 'Guide',
            label: this.appI18n.instant('guide') ?? 'Guide',
            icon: 'book-open',
        },
    ]);
    activedTab = signal('Pay Table');
    isBack = signal(false);
    activeTabLabel = computed(() => {
        const tab = this.tabs().find(t => t.id === this.activedTab());
        return tab?.label ?? this.activedTab();
    });
    close = output();
    isLoadingFinished = false;
    featureEntries = [];
    paytableEntries = [];
    timer = new BaseTimer();
    imagePrefix = '';
    gameId = '10087';
    constructor(http, network, profile, login, api) {
        this.http = http;
        this.network = network;
        this.profile = profile;
        this.login = login;
        this.api = api;
    }
    ngOnInit() {
    }
    // State
    selectedTab = signal('Pay Table');
    selectTab(buttonType) {
        this.selectedTab.set(buttonType);
    }
    changeTab(tabId) {
        this.activedTab.set(tabId);
    }
    async ngAfterViewInit() {
        this.imagePrefix = `/system/Info/${this.gameId}/${this.login.language}/`;
        const data = await this.getInfoData();
        await this.timer.delay(2);
        this.featureEntries = data.feature;
        const _loginResult = this.api.loginResult();
        if (_loginResult && _loginResult['rtp']) {
            this.featureEntries.push(new InfoEntry('9@● RTP: ' + _loginResult['rtp']));
        }
        this.paytableEntries = data.paytable;
        this.isLoadingFinished = true;
    }
    async getInfoData() {
        return new Promise((resolve, reject) => {
            const path = `../system/game_word/${this.gameId}/${this.login.language}/game_word.json`;
            this.http.get(path).subscribe({
                next: (data) => {
                    const feature = Object.entries(data)
                        .filter(([key]) => key.startsWith('info_feature_'))
                        .map(([, value]) => value);
                    const paytable = Object.entries(data)
                        .filter(([key]) => key.startsWith('info_paytable_'))
                        .map(([, value]) => value);
                    resolve({
                        feature: feature.map((value) => new InfoEntry(value)),
                        paytable: paytable.map((value) => new InfoEntry(value)),
                    });
                },
                error: (err) => {
                    reject(err);
                },
            });
        });
    }
    static ɵfac = function InfoComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InfoComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.NetworkService), i0.ɵɵdirectiveInject(i3.UserProfileService), i0.ɵɵdirectiveInject(i4.LoginCtrlService), i0.ɵɵdirectiveInject(i5.AppInterfaceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfoComponent, selectors: [["page-info"]], outputs: { close: "close" }, decls: 6, vars: 7, consts: [[1, "relative", 3, "close", "header", "enableBack"], [3, "tabChange", "tabs", "selectedTab", "color", "accentColor"], [1, "h-[calc(100%-4.5rem)]", "overflow-y-auto", "pt-0"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ap-ui-frame-page", 0);
            i0.ɵɵlistener("close", function InfoComponent_Template_ap_ui_frame_page_close_0_listener() { return ctx.close.emit(); });
            i0.ɵɵelementStart(1, "ap-tab-menu-4", 1);
            i0.ɵɵlistener("tabChange", function InfoComponent_Template_ap_tab_menu_4_tabChange_1_listener($event) { return ctx.changeTab($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵconditionalCreate(3, InfoComponent_Conditional_3_Template, 1, 0, "info-pay-table-default")(4, InfoComponent_Conditional_4_Template, 1, 0, "info-feature")(5, InfoComponent_Conditional_5_Template, 1, 0, "info-guide");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("header", ctx.activeTabLabel())("enableBack", ctx.isBack());
            i0.ɵɵadvance();
            i0.ɵɵproperty("tabs", ctx.tabs())("selectedTab", ctx.activedTab())("color", "zinc")("accentColor", "yellow");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.activedTab() === "Pay Table" ? 3 : ctx.activedTab() === "Feature" ? 4 : ctx.activedTab() === "Guide" ? 5 : -1);
        } }, dependencies: [CommonModule, ApUiFramePageComponent, ApTabMenu4Component, InfoFeatureComponent, InfoGuideComponent, InfoPayTableDefaultComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfoComponent, [{
        type: Component,
        args: [{ selector: 'page-info', imports: [CommonModule, ApUiFramePageComponent, ApTabMenu4Component, InfoFeatureComponent, InfoGuideComponent, InfoPayTableDefaultComponent], template: "<ap-ui-frame-page\n  class=\"relative\"\n  [header]=\"activeTabLabel()\"\n  [enableBack]=\"isBack()\"\n  (close)=\"close.emit()\"\n>\n  <ap-tab-menu-4\n    [tabs]=\"tabs()\"\n    [selectedTab]=\"activedTab()\"\n    [color]=\"'zinc'\"\n    [accentColor]=\"'yellow'\"\n    (tabChange)=\"changeTab($event)\"\n  />\n\n  <div class=\"h-[calc(100%-4.5rem)] overflow-y-auto pt-0\">\n    @if (activedTab() === 'Pay Table') {\n    <info-pay-table-default />\n    } @else if (activedTab() === 'Feature'){\n    <info-feature />} @else if (activedTab() === 'Guide') {\n    <info-guide/>\n    }\n  </div>\n</ap-ui-frame-page>\n" }]
    }], () => [{ type: i1.HttpClient }, { type: i2.NetworkService }, { type: i3.UserProfileService }, { type: i4.LoginCtrlService }, { type: i5.AppInterfaceService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InfoComponent, { className: "InfoComponent", filePath: "src/app/pages/info/info.component.ts", lineNumber: 66 }); })();
//# sourceMappingURL=info.component.js.map