import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "bg-yellow-400 text-zinc-900": a0, "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700": a1 });
const _forTrack0 = ($index, $item) => $item.id;
function ApUiTabGroupComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function ApUiTabGroupComponent_For_2_Template_button_click_0_listener() { const tab_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onClick(tab_r2.id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, ctx_r2.current() === tab_r2.id, ctx_r2.current() !== tab_r2.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r2.label, " ");
} }
export class ApUiTabGroupComponent {
    /** Tab 列表 */
    tabs = input([
        { id: 'tab1', label: 'Tab 1' },
        { id: 'tab2', label: 'Tab 2' },
        { id: 'tab3', label: 'Tab 3' },
    ]);
    /** 起始選中的 Tab */
    selectedTab = input('tab1');
    /** 當前選中的 Tab */
    current = signal('tab1');
    /** Tab 切換事件 */
    tabChange = output();
    ngOnInit() {
        this.current.set(this.selectedTab());
    }
    onClick(value) {
        this.current.set(value);
        this.tabChange.emit(value);
    }
    static ɵfac = function ApUiTabGroupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApUiTabGroupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApUiTabGroupComponent, selectors: [["ap-ui-tab-group"]], inputs: { tabs: [1, "tabs"], selectedTab: [1, "selectedTab"] }, outputs: { tabChange: "tabChange" }, decls: 3, vars: 0, consts: [[1, "flex", "max-w-md", "mx-auto", "bg-zinc-800", "rounded-lg", "p-1"], [1, "flex-1", "py-2", "px-3", "text-base", "font-extrabold", "rounded-md", "transition-all", "duration-200", "text-center", "uppercase", "cursor-pointer", 3, "ngClass"], [1, "flex-1", "py-2", "px-3", "text-base", "font-extrabold", "rounded-md", "transition-all", "duration-200", "text-center", "uppercase", "cursor-pointer", 3, "click", "ngClass"]], template: function ApUiTabGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵrepeaterCreate(1, ApUiTabGroupComponent_For_2_Template, 2, 5, "button", 1, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.tabs());
        } }, dependencies: [CommonModule, i1.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApUiTabGroupComponent, [{
        type: Component,
        args: [{ selector: 'ap-ui-tab-group', standalone: true, imports: [CommonModule], template: "<div class=\"flex max-w-md mx-auto bg-zinc-800 rounded-lg p-1\">\n  @for (tab of tabs(); track tab.id) {\n  <button\n    class=\"flex-1 py-2 px-3 text-base font-extrabold rounded-md transition-all duration-200 text-center uppercase cursor-pointer\"\n    [ngClass]=\"{\n      'bg-yellow-400 text-zinc-900': current() === tab.id,\n      'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700':\n        current() !== tab.id\n    }\"\n    (click)=\"onClick(tab.id)\"\n  >\n    {{ tab.label }}\n  </button>\n  }\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApUiTabGroupComponent, { className: "ApUiTabGroupComponent", filePath: "src/app/components/ap-ui-tab-group/ap-ui-tab-group.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-ui-tab-group.component.js.map