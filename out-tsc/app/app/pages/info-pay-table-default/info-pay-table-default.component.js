import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { InfoCtrlService } from '../../services/info-ctrl/info-ctrl.service';
import { LoginCtrlService } from '../../services/login-ctrl/login-ctrl.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2) => ({ "justify-start text-left": a0, "justify-center text-center": a1, "justify-end text-right": a2 });
const _c1 = (a0, a1, a2) => ({ "text-left": a0, "text-center": a1, "text-right": a2 });
function InfoPayTableDefaultComponent_For_4_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c0, entry_r1.position === "left", entry_r1.position === "center", entry_r1.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", entry_r1.content, " ");
} }
function InfoPayTableDefaultComponent_For_4_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c1, entry_r1.position === "left", entry_r1.position === "center", entry_r1.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", entry_r1.content, " ");
} }
function InfoPayTableDefaultComponent_For_4_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "img", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(3, _c1, entry_r1.position === "left", entry_r1.position === "center", entry_r1.position === "right"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.info.getImageUrl(entry_r1.content), i0.ɵɵsanitizeUrl)("alt", entry_r1.content);
} }
function InfoPayTableDefaultComponent_For_4_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "ul", 8)(2, "li");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const entry_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c1, entry_r1.position === "left", entry_r1.position === "center", entry_r1.position === "right"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r1.content);
} }
function InfoPayTableDefaultComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, InfoPayTableDefaultComponent_For_4_Case_0_Template, 2, 6, "div", 3)(1, InfoPayTableDefaultComponent_For_4_Case_1_Template, 2, 6, "div", 4)(2, InfoPayTableDefaultComponent_For_4_Case_2_Template, 2, 7, "div", 5)(3, InfoPayTableDefaultComponent_For_4_Case_3_Template, 4, 6, "div", 6);
} if (rf & 2) {
    let tmp_10_0;
    const entry_r1 = ctx.$implicit;
    i0.ɵɵconditional((tmp_10_0 = entry_r1.category) === "title" ? 0 : tmp_10_0 === "subtitle" ? 1 : tmp_10_0 === "image" ? 2 : tmp_10_0 === "content" ? 3 : -1);
} }
export class InfoPayTableDefaultComponent {
    login = inject(LoginCtrlService);
    api = inject(AppInterfaceService);
    info = inject(InfoCtrlService);
    ngOnInit() {
    }
    static ɵfac = function InfoPayTableDefaultComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InfoPayTableDefaultComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfoPayTableDefaultComponent, selectors: [["info-pay-table-default"]], decls: 5, vars: 0, consts: [[1, "flex", "flex-col", "bg-zinc-900", "justify-center", "pb-10", "min-h-full"], ["id", "symbols-section", 1, "w-full", "max-w-xl", "mx-auto", "flex", "flex-col", "items-center", "gap-6", "px-4"], [1, "w-full", "flex", "flex-col", "mt-4"], [1, "w-full", "text-2xl", "font-semibold", "text-yellow-200", "mt-16", "mb-8", 3, "ngClass"], [1, "w-full", "font-semibold", "text-white", "mt-2", 3, "ngClass"], [1, "w-full", "mb-4", 3, "ngClass"], [1, "w-full", "flex", 3, "ngClass"], [1, "inline-block", "object-contain", "w-full", "md:max-w-md", 3, "src", "alt"], [1, "text-white", "leading-relaxed", "max-w-xl"]], template: function InfoPayTableDefaultComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵrepeaterCreate(3, InfoPayTableDefaultComponent_For_4_Template, 4, 1, null, null, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.info.paytableEntries());
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfoPayTableDefaultComponent, [{
        type: Component,
        args: [{ selector: 'info-pay-table-default', imports: [CommonModule], template: "<div class=\"flex flex-col bg-zinc-900 justify-center pb-10 min-h-full\">\n  <div\n    id=\"symbols-section\"\n    class=\"w-full max-w-xl mx-auto flex flex-col items-center gap-6 px-4\"\n  >\n    <div class=\"w-full flex flex-col mt-4\">\n      @for (entry of info.paytableEntries(); track $index) {\n        @switch (entry.category) {\n          @case (\"title\") {\n            <div\n              class=\"w-full text-2xl font-semibold text-yellow-200 mt-16 mb-8\"\n              [ngClass]=\"{\n                'justify-start text-left': entry.position === 'left',\n                'justify-center text-center': entry.position === 'center',\n                'justify-end text-right': entry.position === 'right',\n              }\"\n            >\n              {{ entry.content }}\n            </div>\n          }\n          @case (\"subtitle\") {\n            <div\n              class=\"w-full font-semibold text-white mt-2\"\n              [ngClass]=\"{\n                'text-left': entry.position === 'left',\n                'text-center': entry.position === 'center',\n                'text-right': entry.position === 'right',\n              }\"\n            >\n              {{ entry.content }}\n            </div>\n          }\n          @case (\"image\") {\n            <div\n              class=\"w-full mb-4\"\n              [ngClass]=\"{\n                'text-left': entry.position === 'left',\n                'text-center': entry.position === 'center',\n                'text-right': entry.position === 'right',\n              }\"\n            >\n              <img\n                [src]=\"this.info.getImageUrl(entry.content)\"\n                [alt]=\"entry.content\"\n                class=\"inline-block object-contain w-full md:max-w-md\"\n              />\n            </div>\n          }\n          @case (\"content\") {\n            <div\n              class=\"w-full flex\"\n              [ngClass]=\"{\n                'text-left': entry.position === 'left',\n                'text-center': entry.position === 'center',\n                'text-right': entry.position === 'right',\n              }\"\n            >\n              <ul class=\"text-white leading-relaxed max-w-xl\">\n                <li>{{ entry.content }}</li>\n              </ul>\n            </div>\n          }\n        }\n      }\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InfoPayTableDefaultComponent, { className: "InfoPayTableDefaultComponent", filePath: "src/app/pages/info-pay-table-default/info-pay-table-default.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=info-pay-table-default.component.js.map