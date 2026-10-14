import { Component, inject } from '@angular/core';
import { HistoryCtrlService } from '../../services/history-ctrl/history-ctrl.service';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label;
function HistoryDebugPanelComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-toggle-switch", 2);
    i0.ɵɵlistener("checkedChange", function HistoryDebugPanelComponent_For_2_Template_ap_toggle_switch_checkedChange_0_listener($event) { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; return i0.ɵɵresetView(item_r2.signal.set($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", item_r2.label)("checked", item_r2.signal());
} }
export class HistoryDebugPanelComponent {
    ctrl = inject(HistoryCtrlService);
    toggleList = [
        { label: 'Show Replay', signal: this.ctrl.forceReplayDisplayed },
        { label: 'Show Share', signal: this.ctrl.forceShareDisplayed },
    ];
    static ɵfac = function HistoryDebugPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HistoryDebugPanelComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HistoryDebugPanelComponent, selectors: [["history-debug-panel"]], decls: 3, vars: 0, consts: [[1, "relative", "w-xs", "top-5", "right-0", "flex", "flex-col", "gap-1", "p-2", "text-white", "bg-black/50", "rounded-xl"], ["fitMode", "container", 3, "label", "checked"], ["fitMode", "container", 3, "checkedChange", "label", "checked"]], template: function HistoryDebugPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵrepeaterCreate(1, HistoryDebugPanelComponent_For_2_Template, 1, 2, "ap-toggle-switch", 1, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.toggleList);
        } }, dependencies: [ApToggleSwitchComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryDebugPanelComponent, [{
        type: Component,
        args: [{ selector: 'history-debug-panel', imports: [ApToggleSwitchComponent], template: "<div class=\"relative w-xs top-5 right-0 flex flex-col gap-1 p-2 text-white bg-black/50 rounded-xl\">\n  @for (item of toggleList; track item.label) {\n    <ap-toggle-switch\n      fitMode=\"container\"\n      [label]=\"item.label\"\n      [checked]=\"item.signal()\"\n      (checkedChange)=\"item.signal.set($event)\"\n    />\n  }\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HistoryDebugPanelComponent, { className: "HistoryDebugPanelComponent", filePath: "src/app/pages/history-debug-panel/history-debug-panel.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=history-debug-panel.component.js.map