import { Component, inject } from '@angular/core';
import { LoggerService } from '../../services/logger/logger.service';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label;
function LogDebugPanelComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-toggle-switch", 2);
    i0.ɵɵlistener("checkedChange", function LogDebugPanelComponent_For_2_Template_ap_toggle_switch_checkedChange_0_listener($event) { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; return i0.ɵɵresetView(item_r2.signal.set($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", item_r2.label)("checked", item_r2.signal());
} }
export class LogDebugPanelComponent {
    logger = inject(LoggerService);
    toggleList = [
        { label: 'Normal Log', signal: this.logger.logEnabled },
        { label: 'Iframe Log', signal: this.logger.iframeLogEnabled },
        { label: 'Iframe Socket Log', signal: this.logger.iframeSocketLogEnabled },
        { label: 'API Log', signal: this.logger.apiLogEnabled },
        { label: 'LeaderBoard Log', signal: this.logger.leaderboardLogEnabled },
        { label: 'Iframe Replay Log', signal: this.logger.iframeReplayLogEnabled },
        { label: 'Iframe History Log', signal: this.logger.iframeHistoryLogEnabled },
        { label: 'Reward System Log', signal: this.logger.rewardSystemLogEnabled },
        { label: 'Campaign Log', signal: this.logger.campaignLogEnabled },
    ];
    static ɵfac = function LogDebugPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LogDebugPanelComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LogDebugPanelComponent, selectors: [["log-debug-panel"]], decls: 3, vars: 0, consts: [[1, "relative", "w-xs", "top-5", "right-0", "flex", "flex-col", "gap-1", "p-2", "text-white", "bg-black/50", "rounded-xl"], ["fitMode", "container", 3, "label", "checked"], ["fitMode", "container", 3, "checkedChange", "label", "checked"]], template: function LogDebugPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵrepeaterCreate(1, LogDebugPanelComponent_For_2_Template, 1, 2, "ap-toggle-switch", 1, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.toggleList);
        } }, dependencies: [ApToggleSwitchComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogDebugPanelComponent, [{
        type: Component,
        args: [{ selector: 'log-debug-panel', imports: [ApToggleSwitchComponent], template: "<div class=\"relative w-xs top-5 right-0 flex flex-col gap-1 p-2 text-white bg-black/50 rounded-xl\">\n  @for (item of toggleList; track item.label) {\n    <ap-toggle-switch\n      fitMode=\"container\"\n      [label]=\"item.label\"\n      [checked]=\"item.signal()\"\n      (checkedChange)=\"item.signal.set($event)\"\n    />\n  }\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LogDebugPanelComponent, { className: "LogDebugPanelComponent", filePath: "src/app/pages/log-debug-panel/log-debug-panel.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=log-debug-panel.component.js.map