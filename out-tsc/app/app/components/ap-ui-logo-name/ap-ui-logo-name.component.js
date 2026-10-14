/**
 * AP Logo Name Component
 * 點擊5次會顯示版本資訊，版本資訊從 /launch/version.json 取得
 * version.json 格式為 { version: string; time: string; branch: string; sha: string }
 */
import { Component, input, signal, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i0 from "@angular/core";
function ApUiLogoNameComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.versionInfo().version);
} }
export class ApUiLogoNameComponent {
    http = inject(HttpClient);
    destroyRef = inject(DestroyRef);
    logoName = input('Advant Play');
    versionInfo = signal(null);
    showVersion = signal(false);
    clickCount = 0;
    clickTimer$ = null;
    onLogoClick() {
        this.clickCount++;
        this.clickTimer$?.unsubscribe();
        if (this.clickCount >= 5) {
            this.clickCount = 0;
            this.fetchAndShowVersion();
            return;
        }
        // 超過 1.5 秒沒達到5下則重置
        this.clickTimer$ = timer(1500)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => { this.clickCount = 0; });
    }
    fetchAndShowVersion() {
        const url = `${window.location.origin}/launch/version.json`;
        this.http.get(url)
            .subscribe({
            next: (data) => {
                this.versionInfo.set(data);
                this.showVersion.set(true);
            },
            error: () => {
                this.versionInfo.set(null);
                this.showVersion.set(true);
            }
        });
    }
    static ɵfac = function ApUiLogoNameComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApUiLogoNameComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApUiLogoNameComponent, selectors: [["ap-ui-logo-name"]], inputs: { logoName: [1, "logoName"] }, decls: 4, vars: 2, consts: [[1, "w-full", "select-none", "uppercase", "text-stroke", "text-xs", "text-stroke", 3, "click"]], template: function ApUiLogoNameComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function ApUiLogoNameComponent_Template_div_click_0_listener() { return ctx.onLogoClick(); });
            i0.ɵɵelementStart(1, "div");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, ApUiLogoNameComponent_Conditional_3_Template, 2, 1, "div");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.logoName());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showVersion() ? 3 : -1);
        } }, dependencies: [CommonModule], styles: [".text-stroke[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow:\n    1px 1px 1px rgba(0, 0, 0, 1),\n    -1px 1px 1px rgba(0, 0, 0, 1),\n    1px -1px 1px rgba(0, 0, 0, 1),\n    -1px -1px 1px rgba(0, 0, 0, 1);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApUiLogoNameComponent, [{
        type: Component,
        args: [{ selector: 'ap-ui-logo-name', imports: [CommonModule], template: "<div\n  class=\"w-full select-none uppercase text-stroke text-xs text-stroke\"\n  (click)=\"onLogoClick()\"\n>\n  <div>{{ logoName() }}</div>\n  @if (showVersion()) {\n    <div>{{ versionInfo()!.version }}</div>\n  }\n  <!--If use logo <ap-icon name=\"ap-2\" class=\"size-7\" />-->\n</div>\n", styles: [".text-stroke {\n  color: #fff;\n  text-shadow:\n    1px 1px 1px rgba(0, 0, 0, 1),\n    -1px 1px 1px rgba(0, 0, 0, 1),\n    1px -1px 1px rgba(0, 0, 0, 1),\n    -1px -1px 1px rgba(0, 0, 0, 1);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApUiLogoNameComponent, { className: "ApUiLogoNameComponent", filePath: "src/app/components/ap-ui-logo-name/ap-ui-logo-name.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=ap-ui-logo-name.component.js.map