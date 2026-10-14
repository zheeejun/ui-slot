import { Component, signal } from '@angular/core';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { MobileComponent } from './mobile';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { ApHistoryReplayTopBarComponent } from '../ap-history-replay-top-bar/ap-history-replay-top-bar.component';
import * as i0 from "@angular/core";
function DemoGameScreenComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "ap-history-replay-top-bar");
    i0.ɵɵelementEnd();
} }
function DemoGameScreenComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "desktop", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("transform", "scale(" + ctx_r0.reelScale() + ") ");
} }
function DemoGameScreenComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mobile", 10);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("transform", "scale(" + ctx_r0.reelScale() + ")");
} }
function DemoGameScreenComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "ap-input-box", 11);
    i0.ɵɵlistener("onInput", function DemoGameScreenComponent_Conditional_4_Template_ap_input_box_onInput_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onReelScaleChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ap-select", 12);
    i0.ɵɵlistener("onSelect", function DemoGameScreenComponent_Conditional_4_Template_ap_select_onSelect_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.variant.set($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.reelScale().toString());
    i0.ɵɵadvance();
    i0.ɵɵproperty("selected", ctx_r0.variant())("options", ctx_r0.variantOptions);
} }
export class DemoGameScreenComponent {
    variant = signal('desktop');
    reelScale = signal(1.0);
    screenOrientation = signal('portrait');
    showControls = signal(false);
    showReplayTopBar = signal(false);
    modeOptions = [
        { value: 'reel', label: 'Reel Only' },
        { value: 'all', label: 'Full Screen' },
    ];
    variantOptions = [
        { value: 'desktop', label: 'Desktop' },
        { value: 'mobile', label: 'Mobile' },
    ];
    onReelScaleChange(value) {
        const num = Number(value);
        if (!isNaN(num)) {
            this.reelScale.set(num);
        }
    }
    static ɵfac = function DemoGameScreenComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DemoGameScreenComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DemoGameScreenComponent, selectors: [["demo-game-screen"]], decls: 13, vars: 7, consts: [["src", "assets/images/10087/01_FG/fg-bg_.png", 1, "relative", "size-full", "object-cover", "object-top"], [1, "absolute", "top-0", "left-0", "w-full", "z-50"], [1, "absolute", "h-[600px]", "w-[1100px]", "top-1/2", "left-1/2", "-translate-1/2", 3, "transform"], [1, "absolute", "h-[600px]", "w-[400px]", "top-1/2", "left-1/2", "-translate-1/2", 3, "transform"], [1, "absolute", "top-[1%]", "left-1/2", "-translate-x-1/2", "flex", "items-center", "gap-2", "text-zinc-100"], [1, "absolute", "top-6", "left-1", "flex", "items-center", "gap-2", "text-zinc-100"], [1, "text-sm", "font-semibold"], [3, "checkedChange", "checked", "size"], [1, "absolute", "bottom-2", "left-2", "flex", "items-center", "gap-2", "text-zinc-100"], [1, "absolute", "h-[600px]", "w-[1100px]", "top-1/2", "left-1/2", "-translate-1/2"], [1, "absolute", "h-[600px]", "w-[400px]", "top-1/2", "left-1/2", "-translate-1/2"], ["type", "number", "step", "0.05", 3, "onInput", "value"], [3, "onSelect", "selected", "options"]], template: function DemoGameScreenComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "img", 0);
            i0.ɵɵconditionalCreate(1, DemoGameScreenComponent_Conditional_1_Template, 2, 0, "div", 1);
            i0.ɵɵconditionalCreate(2, DemoGameScreenComponent_Conditional_2_Template, 1, 2, "desktop", 2)(3, DemoGameScreenComponent_Conditional_3_Template, 1, 2, "mobile", 3);
            i0.ɵɵconditionalCreate(4, DemoGameScreenComponent_Conditional_4_Template, 3, 3, "div", 4);
            i0.ɵɵelementStart(5, "div", 5)(6, "span", 6);
            i0.ɵɵtext(7, "Show Controls");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "ap-toggle-switch", 7);
            i0.ɵɵlistener("checkedChange", function DemoGameScreenComponent_Template_ap_toggle_switch_checkedChange_8_listener($event) { return ctx.showControls.set($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 8)(10, "span", 6);
            i0.ɵɵtext(11, "Show Replay Top Bar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "ap-toggle-switch", 7);
            i0.ɵɵlistener("checkedChange", function DemoGameScreenComponent_Template_ap_toggle_switch_checkedChange_12_listener($event) { return ctx.showReplayTopBar.set($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showReplayTopBar() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "desktop" ? 2 : ctx.variant() === "mobile" ? 3 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showControls() ? 4 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("checked", ctx.showControls())("size", "small");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("checked", ctx.showReplayTopBar())("size", "small");
        } }, dependencies: [CommonModule,
            ApSelectComponent,
            ApInputBox,
            DesktopComponent,
            MobileComponent,
            ApToggleSwitchComponent,
            ApHistoryReplayTopBarComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DemoGameScreenComponent, [{
        type: Component,
        args: [{ selector: 'demo-game-screen', imports: [
                    CommonModule,
                    ApSelectComponent,
                    ApInputBox,
                    DesktopComponent,
                    MobileComponent,
                    ApToggleSwitchComponent,
                    ApHistoryReplayTopBarComponent,
                ], template: "<img\n  src=\"assets/images/10087/01_FG/fg-bg_.png\"\n  class=\"relative size-full object-cover object-top\"\n/>\n\n<!-- Replay Top Bar -->\n@if (showReplayTopBar()) {\n<div class=\"absolute top-0 left-0 w-full z-50\">\n  <ap-history-replay-top-bar />\n</div>\n} @if (variant() === 'desktop') {\n<desktop\n  class=\"absolute h-[600px] w-[1100px] top-1/2 left-1/2 -translate-1/2\"\n  [style.transform]=\"'scale(' + reelScale() + ') '\"\n/>\n} @else if (variant() === 'mobile') {\n<mobile\n  class=\"absolute h-[600px] w-[400px] top-1/2 left-1/2 -translate-1/2\"\n  [style.transform]=\"'scale(' + reelScale() + ')'\"\n/>\n}\n\n<!-- Controls Input and Select - Centered -->\n@if (showControls()) {\n<div\n  class=\"absolute top-[1%] left-1/2 -translate-x-1/2 flex items-center gap-2 text-zinc-100\"\n>\n  <ap-input-box\n    type=\"number\"\n    step=\"0.05\"\n    [value]=\"reelScale().toString()\"\n    (onInput)=\"onReelScaleChange($event)\"\n  />\n  <ap-select\n    [selected]=\"variant()\"\n    [options]=\"variantOptions\"\n    (onSelect)=\"variant.set($event)\"\n  />\n</div>\n}\n\n<div class=\"absolute top-6 left-1 flex items-center gap-2 text-zinc-100\">\n  <span class=\"text-sm font-semibold\">Show Controls</span>\n  <ap-toggle-switch\n    [checked]=\"showControls()\"\n    (checkedChange)=\"showControls.set($event)\"\n    [size]=\"'small'\"\n  />\n</div>\n\n<div class=\"absolute bottom-2 left-2 flex items-center gap-2 text-zinc-100\">\n  <span class=\"text-sm font-semibold\">Show Replay Top Bar</span>\n  <ap-toggle-switch\n    [checked]=\"showReplayTopBar()\"\n    (checkedChange)=\"showReplayTopBar.set($event)\"\n    [size]=\"'small'\"\n  />\n</div>\n", styles: [":host {\n  display: block;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DemoGameScreenComponent, { className: "DemoGameScreenComponent", filePath: "src/app/components/demo-game-screen/demo-game-screen.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=demo-game-screen.component.js.map