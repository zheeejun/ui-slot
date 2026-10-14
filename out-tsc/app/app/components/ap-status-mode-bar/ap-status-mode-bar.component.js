import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ApStatusModeBarComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "span", 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.text(), " ");
} }
export class ApStatusModeBarComponent {
    mode = input('close');
    isVisible = input(true);
    appI18n = inject(AppI18nService);
    text = computed(() => {
        switch (this.mode()) {
            case 'replay-mode':
                return this.appI18n.instant('replay_replay_mode', 'Replay Mode');
            case 'demo-mode':
                return this.appI18n.instant('replay_demo_mode', 'Demo Mode');
            case 'free-spin':
                return this.appI18n.instant('promo_free_spins', 'Free Spin Mode');
            case 'free-bonus':
                return this.appI18n.instant('status_mode_free_bonus', 'Free Bonus Mode');
            case 'free-game':
                return this.appI18n.instant('replay_free_game', 'Free Game Mode');
            case 'double-chance':
                return this.appI18n.instant('dc_title', 'Double Chance Mode');
            case 'auto-spin':
                return '';
            case 'double-chance-auto-spin':
                return this.appI18n.instant('dc_title', 'Double Chance');
            default:
                return '';
        }
    });
    static ɵfac = function ApStatusModeBarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApStatusModeBarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApStatusModeBarComponent, selectors: [["ap-status-mode-bar"]], inputs: { mode: [1, "mode"], isVisible: [1, "isVisible"] }, decls: 1, vars: 1, consts: [[1, "size-full", "mx-auto", "flex", "items-center", "justify-center", "select-none", "bg-gradient-to-r", "from--yellow-500", "from-0%", "via-yellow-500", "via-50%", "to--yellow-500", "to-100%", 3, "ngClass"], [1, "font-bold", "text-[1em]", "text-white", "tracking-wide", "text-stroke"]], template: function ApStatusModeBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApStatusModeBarComponent_Conditional_0_Template, 3, 1, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.mode() !== "close" ? 0 : -1);
        } }, dependencies: [CommonModule, i1.NgClass], styles: ["@keyframes _ngcontent-%COMP%_fade-out {\n  0% { opacity: 1; }\n  100% { opacity: 0; }\n}\n\n.animate-fade-out[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-out 0.6s ease-out 3s forwards;\n}\n\n.text-stroke[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow:\n    1.2px 1.2px 1.2px rgba(130, 72, 0, 0.9),\n    -1.2px 1.2px 1.2px rgba(130, 72, 0, 0.9),\n    1.2px -1.2px 1.2px rgba(130, 72, 0, 0.9),\n    -1.2px -1.2px 1.2px rgba(130, 72, 0, 0.9);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApStatusModeBarComponent, [{
        type: Component,
        args: [{ selector: 'ap-status-mode-bar', imports: [CommonModule], template: "@if (mode() !== \"close\") {\n  <div\n    class=\"size-full mx-auto flex items-center justify-center select-none bg-gradient-to-r from--yellow-500 from-0% via-yellow-500 via-50% to--yellow-500 to-100%\"\n    [ngClass]=\"\"\n\n  >\n    <span class=\"font-bold text-[1em] text-white tracking-wide text-stroke\">\n      {{ text() }}\n    </span>\n  </div>\n}\n", styles: ["@keyframes fade-out {\n  0% { opacity: 1; }\n  100% { opacity: 0; }\n}\n\n.animate-fade-out {\n  animation: fade-out 0.6s ease-out 3s forwards;\n}\n\n.text-stroke {\n  color: #fff;\n  text-shadow:\n    1.2px 1.2px 1.2px rgba(130, 72, 0, 0.9),\n    -1.2px 1.2px 1.2px rgba(130, 72, 0, 0.9),\n    1.2px -1.2px 1.2px rgba(130, 72, 0, 0.9),\n    -1.2px -1.2px 1.2px rgba(130, 72, 0, 0.9);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApStatusModeBarComponent, { className: "ApStatusModeBarComponent", filePath: "src/app/components/ap-status-mode-bar/ap-status-mode-bar.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-status-mode-bar.component.js.map