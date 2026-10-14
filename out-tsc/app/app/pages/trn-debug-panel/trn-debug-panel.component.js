import { Component, computed, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApSelectComponent } from "../../../ap-components-lib/ap-select/ap-select.component";
import { ApInputBox } from "../../../ap-components-lib/ap-input-box/ap-input-box";
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { generatePlayerList } from '../../services/trn-ctrl/trn-ctrl.function';
import * as i0 from "@angular/core";
import * as i1 from "../../services/trn-ctrl/trn-ctrl.service";
import * as i2 from "../../services/user-profile/user-profile.service";
import * as i3 from "../../services/app-interface/app-interface.service";
const _forTrack0 = ($index, $item) => $item.label;
function TrnDebugPanelComponent_For_27_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "ap-button", 16);
    i0.ɵɵlistener("clicked", function TrnDebugPanelComponent_For_27_Template_ap_button_clicked_1_listener() { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleSignal(item_r2.key)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r2.label, " ");
} }
function TrnDebugPanelComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "ap-loading-overlay");
    i0.ɵɵelementEnd();
} }
export class TrnDebugPanelComponent {
    trn;
    user;
    api;
    /** Debug Panel Loading顯示開關 */
    isDebugLoading = signal(false);
    destroy$ = new Subject();
    /** Debug: Status Options */
    trnStatusOptions = [
        { label: 'idle', value: 'idle' },
        { label: 'matching', value: 'matching' },
        { label: 'playing quick', value: 'playing-quick' },
        { label: 'playing event', value: 'playing-event' },
    ];
    /** Debug: 用 Quick Match Event ID Options */
    debugTrnIdOptions = computed(() => {
        return this.trn.trnList().map(trn => {
            return { label: `${trn.name} (${trn.id})`, value: trn.id };
        });
    });
    /** Debug: 選擇的Trn ID */
    debugTrnId = signal('');
    /** 輸入的 Leader Board Page */
    inputPage = signal(1);
    /** 輸入的 Leader Board Size */
    inputSize = signal(10);
    /** 輸入的 Player History Limit */
    inputLimit = signal(10);
    /** 輸入的 Player History Offset */
    inputOffset = signal(0);
    /** 輸入的 Custom Action  */
    customAction = signal('');
    /** 顯示的 Spin Result */
    spinResultBalance = signal('');
    /** 所有Signal切換清單 */
    signalList = [
        { key: 'game-starting', label: 'Game Starting' },
        { key: 'confirm-popup', label: 'Confirm Popup' },
        { key: 'event-popup', label: 'Event Popup' },
        { key: 'match-finished', label: 'Match Finished' },
        { key: 'created-notification', label: 'Created Notification' },
        { key: 'status-bar', label: 'Status Bar' },
        { key: 'game-result', label: 'Game Result' },
        { key: 'waiting-result', label: 'Waiting Result' },
    ];
    constructor(trn, user, api) {
        this.trn = trn;
        this.user = user;
        this.api = api;
    }
    ngOnInit() {
        this.api.spinResult$.pipe(takeUntil(this.destroy$)).subscribe(this.onSpinResult.bind(this));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterViewInit() {
        this.spinResultBalance.set(this.user.balance().toString());
    }
    generateRoomState() {
        const list = generatePlayerList();
        const data = {
            id: 'debug-room',
            rank: null,
            playersList: list,
            currentPool: Math.floor(Math.random() * 10000)
        };
        this.trn.debugAssignRoomUpdate(data);
    }
    /** 跟Server取得可用的Event */
    clickEventList() {
        this.trn.sendEventList();
    }
    /** 執行自訂Action */
    sendCustomAction(action) {
        this.trn.sendCustomAction(action);
    }
    /** 送出Leaderboard請求 */
    sendEvnetLeaderboard() {
        this.trn.sendEvnetLeaderboard(this.debugTrnId() || '', this.inputPage(), this.inputSize());
    }
    sendJoinEvent() {
        const trn = this.trn.trnList().find(trn => trn.id === this.debugTrnId());
        if (!trn)
            return;
        if (trn.type === 'quick')
            return; // 只處理Event的加入
        this.trn.sendJoinEvent(this.debugTrnId());
    }
    /** 送出Player History請求 */
    sendPlayerHistory() {
        this.trn.sendPlayerHistory(this.inputLimit(), this.inputOffset());
    }
    /** 取得Slot Spin結果 */
    sendTrnSpin() {
        this.isDebugLoading.set(true);
        this.user.sendSpinRequest();
    }
    onSpinResult(result) {
        if (result.data.errorCode)
            throw new Error(`Error Code: ${result.data.errorCode}`);
        this.spinResultBalance.set(result.data.balance?.toString() || 'No Result');
        this.isDebugLoading.set(false);
    }
    toggleSignal(key) {
        this.trn.debugToggleSignal(key);
    }
    togglePage(page) {
        this.trn.debugTogglePage(page);
    }
    static ɵfac = function TrnDebugPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrnDebugPanelComponent)(i0.ɵɵdirectiveInject(i1.TrnCtrlService), i0.ɵɵdirectiveInject(i2.UserProfileService), i0.ɵɵdirectiveInject(i3.AppInterfaceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrnDebugPanelComponent, selectors: [["trn-debug-panel"]], decls: 31, vars: 6, consts: [[1, "relative", "w-md", "top-5", "right-0", "flex", "flex-col", "gap-1", "p-1", "text-white", "bg-black/50", "rounded-xl"], [1, "flex", "items-center", "gap-2"], [3, "checkedChange", "checked"], [3, "onSelect", "options"], [1, "flex", "items-center"], ["placeholder", "Action", 3, "onInput", "value"], ["label", "Custom Action", 3, "clicked"], ["label", "Event List", 3, "clicked"], ["label", "Join Event", 3, "clicked"], [1, "flex", "gap-2", "items-center"], [1, "w-12", 3, "onInput"], ["label", "Leader Board", 3, "clicked"], ["label", "Play History", 3, "clicked"], ["label", "Tournament Spin", 3, "clicked"], ["label", "Generate List", 3, "clicked"], [1, "absolute", "inset-0", "bg-black/50"], ["size", "small", "label", "Toggle", 3, "clicked"]], template: function TrnDebugPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "ap-toggle-switch", 2);
            i0.ɵɵlistener("checkedChange", function TrnDebugPanelComponent_Template_ap_toggle_switch_checkedChange_2_listener($event) { return ctx.trn.debugForceEnable.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " Force Enabled ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ap-select", 3);
            i0.ɵɵlistener("onSelect", function TrnDebugPanelComponent_Template_ap_select_onSelect_4_listener($event) { return ctx.togglePage($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4)(6, "ap-input-box", 5);
            i0.ɵɵlistener("onInput", function TrnDebugPanelComponent_Template_ap_input_box_onInput_6_listener($event) { return ctx.customAction.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ap-button", 6);
            i0.ɵɵlistener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_7_listener() { return ctx.sendCustomAction(ctx.customAction()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "ap-button", 7);
            i0.ɵɵlistener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_8_listener() { return ctx.clickEventList(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "ap-select", 3);
            i0.ɵɵlistener("onSelect", function TrnDebugPanelComponent_Template_ap_select_onSelect_9_listener($event) { return ctx.debugTrnId.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "ap-button", 8);
            i0.ɵɵlistener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_10_listener() { return ctx.sendJoinEvent(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 9);
            i0.ɵɵtext(12, " Page ");
            i0.ɵɵelementStart(13, "ap-input-box", 10);
            i0.ɵɵlistener("onInput", function TrnDebugPanelComponent_Template_ap_input_box_onInput_13_listener($event) { return ctx.inputPage.set(+$event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(14, " Size ");
            i0.ɵɵelementStart(15, "ap-input-box", 10);
            i0.ɵɵlistener("onInput", function TrnDebugPanelComponent_Template_ap_input_box_onInput_15_listener($event) { return ctx.inputSize.set(+$event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "ap-button", 11);
            i0.ɵɵlistener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_16_listener() { return ctx.sendEvnetLeaderboard(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 9);
            i0.ɵɵtext(18, " Limit ");
            i0.ɵɵelementStart(19, "ap-input-box", 10);
            i0.ɵɵlistener("onInput", function TrnDebugPanelComponent_Template_ap_input_box_onInput_19_listener($event) { return ctx.inputLimit.set(+$event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(20, " Offset ");
            i0.ɵɵelementStart(21, "ap-input-box", 10);
            i0.ɵɵlistener("onInput", function TrnDebugPanelComponent_Template_ap_input_box_onInput_21_listener($event) { return ctx.inputOffset.set(+$event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "ap-button", 12);
            i0.ɵɵlistener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_22_listener() { return ctx.sendPlayerHistory(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 1);
            i0.ɵɵtext(24);
            i0.ɵɵelementStart(25, "ap-button", 13);
            i0.ɵɵlistener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_25_listener() { return ctx.sendTrnSpin(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(26, TrnDebugPanelComponent_For_27_Template, 3, 1, "div", 1, _forTrack0);
            i0.ɵɵelementStart(28, "div", 1)(29, "ap-button", 14);
            i0.ɵɵlistener("clicked", function TrnDebugPanelComponent_Template_ap_button_clicked_29_listener() { return ctx.generateRoomState(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(30, TrnDebugPanelComponent_Conditional_30_Template, 2, 0, "div", 15);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("checked", ctx.trn.debugForceEnable());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("options", ctx.trnStatusOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.customAction());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("options", ctx.debugTrnIdOptions());
            i0.ɵɵadvance(15);
            i0.ɵɵtextInterpolate1(" Balance: ", ctx.spinResultBalance(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.signalList);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.isDebugLoading() ? 30 : -1);
        } }, dependencies: [ApSelectComponent, ApInputBox, ApButtonComponent, ApLoadingOverlayComponent, ApToggleSwitchComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrnDebugPanelComponent, [{
        type: Component,
        args: [{ selector: 'trn-debug-panel', imports: [ApSelectComponent, ApInputBox, ApButtonComponent, ApLoadingOverlayComponent, ApToggleSwitchComponent], template: "\n<div\n  class=\"relative w-md top-5 right-0 flex flex-col gap-1 p-1 text-white bg-black/50 rounded-xl\"\n>\n  <div class=\"flex items-center gap-2\">\n    <ap-toggle-switch  [checked]=\"trn.debugForceEnable()\" (checkedChange)=\"trn.debugForceEnable.set($event)\"/>\n    Force Enabled\n  </div>\n  <ap-select\n    [options]=\"trnStatusOptions\"\n    (onSelect)=\"togglePage($event)\"\n  >\n  </ap-select>\n  <div class=\"flex items-center\">\n    <ap-input-box\n      placeholder=\"Action\"\n      [value]=\"customAction()\"\n      (onInput)=\"customAction.set($event)\"\n    />\n    <ap-button\n      label=\"Custom Action\"\n      (clicked)=\"sendCustomAction(customAction())\"\n    />\n  </div>\n  <ap-button label=\"Event List\" (clicked)=\"clickEventList()\" />\n  <ap-select\n    [options]=\"debugTrnIdOptions()\"\n    (onSelect)=\"debugTrnId.set($event)\"\n  />\n  <ap-button label=\"Join Event\" (clicked)=\"sendJoinEvent()\" />\n  <div class=\"flex gap-2 items-center\">\n    Page\n    <ap-input-box class=\"w-12\" (onInput)=\"inputPage.set(+$event)\"/>\n    Size\n    <ap-input-box class=\"w-12\"  (onInput)=\"inputSize.set(+$event)\"/>\n    <ap-button label=\"Leader Board\" (clicked)=\"sendEvnetLeaderboard()\" />\n  </div>\n  <div class=\"flex gap-2 items-center\">\n    Limit\n    <ap-input-box class=\"w-12\" (onInput)=\"inputLimit.set(+$event)\"/>\n    Offset\n    <ap-input-box class=\"w-12\"  (onInput)=\"inputOffset.set(+$event)\"/>\n    <ap-button label=\"Play History\" (clicked)=\"sendPlayerHistory()\" />\n  </div>\n  <div class=\"flex items-center gap-2\">\n    Balance: {{ spinResultBalance() }}\n    <ap-button label=\"Tournament Spin\" (clicked)=\"sendTrnSpin()\"></ap-button>\n  </div>\n  @for (item of signalList; track item.label) {\n    <div class=\"flex items-center gap-2\">\n      <ap-button\n        size=\"small\"\n        label=\"Toggle\"\n        (clicked)=\"toggleSignal(item.key)\"\n      />\n      {{ item.label }}\n    </div>\n  }\n  <div class=\"flex items-center gap-2\">\n    <ap-button label=\"Generate List\" (clicked)=\"generateRoomState()\"></ap-button>\n  </div>\n  @if (isDebugLoading()) {\n    <div class=\"absolute inset-0 bg-black/50\">\n      <ap-loading-overlay />\n    </div>\n  }\n</div>\n" }]
    }], () => [{ type: i1.TrnCtrlService }, { type: i2.UserProfileService }, { type: i3.AppInterfaceService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrnDebugPanelComponent, { className: "TrnDebugPanelComponent", filePath: "src/app/pages/trn-debug-panel/trn-debug-panel.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=trn-debug-panel.component.js.map