import { Component, signal } from '@angular/core';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { EventCashdropToastComponent } from '../event-cashdrop-toast/event-cashdrop-toast.component';
import { ApUiPlayModeComponent } from '../../components/ap-ui-play-mode/ap-ui-play-mode.component';
import * as i0 from "@angular/core";
function MiscDebugPanelComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "event-cashdrop-toast", 3);
} }
function MiscDebugPanelComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-ui-play-mode", 4);
} }
export class MiscDebugPanelComponent {
    showCashdropDebug = signal(false);
    showPlayModeDebug = signal(false);
    static ɵfac = function MiscDebugPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MiscDebugPanelComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MiscDebugPanelComponent, selectors: [["misc-debug-panel"]], decls: 5, vars: 4, consts: [[1, "relative", "w-xs", "top-5", "right-0", "flex", "flex-col", "gap-1", "p-2", "text-white", "bg-black/50", "rounded-xl"], ["fitMode", "container", "label", "Replay/Demo Mode", 3, "checkedChange", "checked"], ["fitMode", "container", "label", "CashDrop Toast Debug", 3, "checkedChange", "checked"], [1, "fixed", "top-7", "left-1/4"], [1, "fixed", "top-1", "left-1/2", "-translate-x-1/2"]], template: function MiscDebugPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "ap-toggle-switch", 1);
            i0.ɵɵlistener("checkedChange", function MiscDebugPanelComponent_Template_ap_toggle_switch_checkedChange_1_listener($event) { return ctx.showPlayModeDebug.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ap-toggle-switch", 2);
            i0.ɵɵlistener("checkedChange", function MiscDebugPanelComponent_Template_ap_toggle_switch_checkedChange_2_listener($event) { return ctx.showCashdropDebug.set($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(3, MiscDebugPanelComponent_Conditional_3_Template, 1, 0, "event-cashdrop-toast", 3);
            i0.ɵɵconditionalCreate(4, MiscDebugPanelComponent_Conditional_4_Template, 1, 0, "ap-ui-play-mode", 4);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("checked", ctx.showPlayModeDebug());
            i0.ɵɵadvance();
            i0.ɵɵproperty("checked", ctx.showCashdropDebug());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showCashdropDebug() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showPlayModeDebug() ? 4 : -1);
        } }, dependencies: [ApToggleSwitchComponent, EventCashdropToastComponent, ApUiPlayModeComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MiscDebugPanelComponent, [{
        type: Component,
        args: [{ selector: 'misc-debug-panel', imports: [ApToggleSwitchComponent, EventCashdropToastComponent, ApUiPlayModeComponent], template: "<div class=\"relative w-xs top-5 right-0 flex flex-col gap-1 p-2 text-white bg-black/50 rounded-xl\">\n  <ap-toggle-switch fitMode=\"container\" label=\"Replay/Demo Mode\" [checked]=\"showPlayModeDebug()\" (checkedChange)=\"showPlayModeDebug.set($event)\" />\n  <ap-toggle-switch fitMode=\"container\" label=\"CashDrop Toast Debug\" [checked]=\"showCashdropDebug()\" (checkedChange)=\"showCashdropDebug.set($event)\" />\n</div>\n\n@if (showCashdropDebug()) {<event-cashdrop-toast class=\"fixed top-7 left-1/4\"/>}\n@if (showPlayModeDebug()) {<ap-ui-play-mode class=\"fixed top-1 left-1/2 -translate-x-1/2\"/>}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MiscDebugPanelComponent, { className: "MiscDebugPanelComponent", filePath: "src/app/pages/misc-debug-panel/misc-debug-panel.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=misc-debug-panel.component.js.map