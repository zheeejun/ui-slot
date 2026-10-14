import { Component, inject } from '@angular/core';
import { ApButtonComponent } from "../../../ap-components-lib/ap-button/ap-button.component";
import { BottomPanelService } from '../../services/bottom-panel/bottom-panel.service';
import { ApSelectComponent } from "../../../ap-components-lib/ap-select/ap-select.component";
import * as i0 from "@angular/core";
export class BottomPanelDebugComponent {
    panel = inject(BottomPanelService);
    panelStatusOptions = [
        { value: 'close', label: 'Close' },
        { value: 'free-game', label: 'Free Game' },
        { value: 'auto-spin', label: 'Auto Spin' },
        { value: 'free-spin', label: 'Free Spin' },
        { value: 'free-bonus', label: 'Free Bonus' },
        { value: 'double-chance', label: 'Double Chance' },
        { value: 'double-chance-auto-spin', label: 'Double Chance with Auto Spin' },
    ];
    spinButtonModeOptions = [
        { value: 'default', label: 'Default' },
        { value: 'auto-spin', label: 'Auto Spin' },
        { value: 'double-chance', label: 'Double Chance' },
        { value: 'free-spin', label: 'Free Spin' },
        { value: 'free-game', label: 'Free Game' },
    ];
    constructor() {
    }
    signalList = [
        { key: 'menu-button', label: 'Menu Button' },
    ];
    sendPanelStatus(status) {
        this.panel.sendDebugPanelStatus(status);
    }
    sendSpinButtonMode(mode) {
        this.panel.sendDebugSpinButtonMode(mode);
    }
    sendInsufficientBalance() {
        this.panel.sendDebugInsufficientBalance();
    }
    sendTogglePanelVisible(visible) {
        this.panel.sendDebugIsPanelVisible(visible);
    }
    sendToggleRsPanelVisible(visible) {
        this.panel.sendDebugIsRsPanelVisible(visible);
    }
    static ɵfac = function BottomPanelDebugComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BottomPanelDebugComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottomPanelDebugComponent, selectors: [["bottom-panel-debug"]], decls: 3, vars: 1, consts: [[1, "relative", "w-64", "top-5", "right-0", "flex", "flex-col", "gap-1", "p-1", "text-white", "bg-black/50", "rounded-xl"], ["label", "Panel Status", 3, "onSelect", "options"], ["size", "small", "label", "Send Insufficient Balance", 3, "clicked"]], template: function BottomPanelDebugComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "ap-select", 1);
            i0.ɵɵlistener("onSelect", function BottomPanelDebugComponent_Template_ap_select_onSelect_1_listener($event) { return ctx.sendPanelStatus($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ap-button", 2);
            i0.ɵɵlistener("clicked", function BottomPanelDebugComponent_Template_ap_button_clicked_2_listener() { return ctx.sendInsufficientBalance(); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.panelStatusOptions);
        } }, dependencies: [ApButtonComponent, ApSelectComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomPanelDebugComponent, [{
        type: Component,
        args: [{ selector: 'bottom-panel-debug', imports: [ApButtonComponent, ApSelectComponent], template: "<div\n  class=\"relative w-64 top-5 right-0 flex flex-col gap-1 p-1 text-white bg-black/50 rounded-xl\"\n>\n  <ap-select label=\"Panel Status\" [options]=\"panelStatusOptions\" (onSelect)=\"sendPanelStatus($event)\"/>\n  \n  <ap-button\n    size=\"small\"\n    label=\"Send Insufficient Balance\"\n    (clicked)=\"sendInsufficientBalance()\"\n  />\n</div>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BottomPanelDebugComponent, { className: "BottomPanelDebugComponent", filePath: "src/app/pages/bottom-panel-debug/bottom-panel-debug.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=bottom-panel-debug.component.js.map