import { Component, input, signal, ViewChild, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { FloorNumberPipe } from "../../library/pipe/floor-number.pipe";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["betValueContainer"];
const _c1 = ["betValueText"];
export class ApBfCardBetControlComponent {
    betValueContainer;
    betValueText;
    bet = input(null);
    isMax = input(false);
    isMin = input(false);
    currencySymbol = input(null);
    isCompactText = signal(false);
    increase = output();
    decrease = output();
    resizeObserver = null;
    constructor() {
    }
    ngAfterViewInit() {
        this.resizeObserver = new ResizeObserver(() => this.updateBetTextSize());
        if (this.betValueContainer?.nativeElement) {
            this.resizeObserver.observe(this.betValueContainer.nativeElement);
        }
        if (this.betValueText?.nativeElement) {
            this.resizeObserver.observe(this.betValueText.nativeElement);
        }
        queueMicrotask(() => this.updateBetTextSize());
    }
    ngOnDestroy() {
        this.resizeObserver?.disconnect();
    }
    inc() {
        this.increase.emit();
    }
    dec() {
        this.decrease.emit();
    }
    updateBetTextSize() {
        const container = this.betValueContainer?.nativeElement;
        const text = this.betValueText?.nativeElement;
        if (!container || !text)
            return;
        this.isCompactText.set(text.scrollWidth > container.clientWidth);
    }
    static ɵfac = function ApBfCardBetControlComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApBfCardBetControlComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApBfCardBetControlComponent, selectors: [["ap-bf-card-bet-control"]], viewQuery: function ApBfCardBetControlComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.betValueContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.betValueText = _t.first);
        } }, inputs: { bet: [1, "bet"], isMax: [1, "isMax"], isMin: [1, "isMin"], currencySymbol: [1, "currencySymbol"] }, outputs: { increase: "increase", decrease: "decrease" }, decls: 12, vars: 10, consts: [["betValueContainer", ""], ["betValueText", ""], [1, "flex", "border-[1rem]", "border-zinc-900", "rounded-2xl", "overflow-hidden", "w-fit", "select-none"], [1, "flex", "items-center", "bg-white", "border-[0.2rem]", "border-zinc-400", "rounded-xl", "overflow-hidden", "w-fit"], [1, "size-14", "flex", "items-center", "justify-center", "bg-black", "hover:bg-zinc-800", "disabled:bg-zinc-800", "disabled:opacity-100", "disabled:cursor-not-allowed", "cursor-pointer", "transition-colors", "duration-150", 3, "click", "disabled"], ["name", "minus default", 1, "size-10", "shrink-0", "transition-colors", "duration-150", 3, "ngClass"], [1, "flex", "px-4", "py-2", "justify-center", "text-zinc-400", "w-40", "overflow-hidden"], [1, "font-bold", "text-zinc-900", "text-center", "whitespace-nowrap", 3, "ngClass"], ["name", "plus default", 1, "size-10", "shrink-0", "transition-colors", "duration-150", 3, "ngClass"]], template: function ApBfCardBetControlComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "button", 4);
            i0.ɵɵlistener("click", function ApBfCardBetControlComponent_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.dec()); });
            i0.ɵɵelement(3, "ap-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 6, 0)(6, "div", 7, 1);
            i0.ɵɵtext(8);
            i0.ɵɵpipe(9, "floorNumber");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "button", 4);
            i0.ɵɵlistener("click", function ApBfCardBetControlComponent_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.inc()); });
            i0.ɵɵelement(11, "ap-icon", 8);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isMin());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.isMin() ? "text-zinc-600" : "text-zinc-200");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.isCompactText() ? "text-xl" : "text-2xl");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.currencySymbol(), " ", i0.ɵɵpipeBind2(9, 7, ctx.bet(), "1.2-2"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.isMax());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.isMax() ? "text-zinc-600" : "text-zinc-200");
        } }, dependencies: [CommonModule, i1.NgClass, ApIconComponent, FloorNumberPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApBfCardBetControlComponent, [{
        type: Component,
        args: [{ selector: 'ap-bf-card-bet-control', standalone: true, imports: [CommonModule, ApIconComponent, FloorNumberPipe], template: "<div\n  class=\"flex border-[1rem] border-zinc-900 rounded-2xl overflow-hidden w-fit select-none\"\n>\n  <div\n    class=\"flex items-center bg-white border-[0.2rem] border-zinc-400 rounded-xl overflow-hidden w-fit\"\n  >\n    <!-- decrease -->\n    <button\n      (click)=\"dec()\"\n      [disabled]=\"isMin()\"\n      class=\"size-14 flex items-center justify-center bg-black hover:bg-zinc-800 disabled:bg-zinc-800 disabled:opacity-100 disabled:cursor-not-allowed cursor-pointer transition-colors duration-150\"\n    >\n      <ap-icon\n        name=\"minus default\"\n        class=\"size-10 shrink-0 transition-colors duration-150\"\n        [ngClass]=\"isMin() ? 'text-zinc-600' : 'text-zinc-200'\"\n      />\n    </button>\n\n    <!-- Bet Value -->\n    <div #betValueContainer class=\"flex px-4 py-2 justify-center text-zinc-400 w-40 overflow-hidden\">\n      <div\n        #betValueText\n        class=\"font-bold text-zinc-900 text-center whitespace-nowrap\"\n        [ngClass]=\"isCompactText() ? 'text-xl' : 'text-2xl'\"\n      >\n        {{ currencySymbol() }} {{ bet() | floorNumber: \"1.2-2\" }}\n      </div>\n    </div>\n\n    <!-- Plus -->\n    <button\n      (click)=\"inc()\"\n      [disabled]=\"isMax()\"\n      class=\"size-14 flex items-center justify-center bg-black hover:bg-zinc-800 disabled:bg-zinc-800 disabled:opacity-100 disabled:cursor-not-allowed cursor-pointer transition-colors duration-150\"\n    >\n      <ap-icon\n        name=\"plus default\"\n        class=\"size-10 shrink-0 transition-colors duration-150\"\n        [ngClass]=\"isMax() ? 'text-zinc-600' : 'text-zinc-200'\"\n      />\n    </button>\n  </div>\n</div>\n" }]
    }], () => [], { betValueContainer: [{
            type: ViewChild,
            args: ['betValueContainer']
        }], betValueText: [{
            type: ViewChild,
            args: ['betValueText']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApBfCardBetControlComponent, { className: "ApBfCardBetControlComponent", filePath: "src/app/components/ap-bf-card-bet-control/ap-bf-card-bet-control.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=ap-bf-card-bet-control.component.js.map