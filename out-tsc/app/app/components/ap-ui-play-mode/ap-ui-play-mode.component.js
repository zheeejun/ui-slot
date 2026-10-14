import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
function ApUiPlayModeComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ApUiPlayModeComponent_Conditional_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.isMusicPressed.set(!ctx_r1.isMusicPressed()); return i0.ɵɵresetView(ctx_r1.enableMusicSound.emit()); });
    i0.ɵɵelement(1, "ap-icon", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", ctx_r1.isMusicPressed() ? "music pressed" : "music default");
} }
export class ApUiPlayModeComponent {
    label = input('Replay Mode');
    showIcon = input(true);
    enableMusicSound = output();
    isMusicPressed = signal(false);
    static ɵfac = function ApUiPlayModeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApUiPlayModeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApUiPlayModeComponent, selectors: [["ap-ui-play-mode"]], inputs: { label: [1, "label"], showIcon: [1, "showIcon"] }, outputs: { enableMusicSound: "enableMusicSound" }, decls: 4, vars: 2, consts: [[1, "inline-flex", "select-none", "items-center", "justify-center", "gap-4", "bg-gradient-to-r", "from-black/0", "via-black", "to-black/0", "px-2", "py-1"], [1, "flex", "items-center", "justify-center", "text-center", "sm:text-md", "text-xl", "font-bold", "leading-none", "text-stroke", "tracking-wide"], ["type", "button", "aria-label", "Music", 1, "inline-flex", "cursor-pointer", "items-center", "justify-center", "p-0"], ["type", "button", "aria-label", "Music", 1, "inline-flex", "cursor-pointer", "items-center", "justify-center", "p-0", 3, "click"], [1, "inline-flex", "items-center", "justify-center", "size-8", 3, "name"]], template: function ApUiPlayModeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, ApUiPlayModeComponent_Conditional_3_Template, 2, 1, "button", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.label(), " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showIcon() ? 3 : -1);
        } }, dependencies: [CommonModule, ApIconComponent], styles: [".text-stroke[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow:\n    1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApUiPlayModeComponent, [{
        type: Component,
        args: [{ selector: 'ap-ui-play-mode', imports: [CommonModule, ApIconComponent], template: "<div\n  class=\"inline-flex select-none items-center justify-center gap-4 bg-gradient-to-r from-black/0 via-black to-black/0 px-2 py-1\"\n>\n  <div\n    class=\"flex items-center justify-center text-center sm:text-md text-xl font-bold leading-none text-stroke tracking-wide\"\n  >\n    {{ label() }}\n  </div>\n\n  @if (showIcon()) {\n    <button\n      class=\"inline-flex cursor-pointer items-center justify-center p-0\"\n      type=\"button\"\n      aria-label=\"Music\"\n      (click)=\"isMusicPressed.set(!isMusicPressed()); enableMusicSound.emit()\"\n    >\n      <ap-icon\n        class=\"inline-flex items-center justify-center size-8\"\n        [name]=\"isMusicPressed() ? 'music pressed' : 'music default'\"\n      />\n    </button>\n  }\n</div>\n", styles: [".text-stroke {\n  color: #fff;\n  text-shadow:\n    1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px 1.2px 1.2px rgba(0, 0, 0, 0.9),\n    1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9),\n    -1.2px -1.2px 1.2px rgba(0, 0, 0, 0.9);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApUiPlayModeComponent, { className: "ApUiPlayModeComponent", filePath: "src/app/components/ap-ui-play-mode/ap-ui-play-mode.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=ap-ui-play-mode.component.js.map