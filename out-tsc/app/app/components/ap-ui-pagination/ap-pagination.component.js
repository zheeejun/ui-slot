import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
function ApUiPaginationComponent_Conditional_0_For_5_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1, " ... ");
    i0.ɵɵelementEnd();
} }
function ApUiPaginationComponent_Conditional_0_For_5_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ApUiPaginationComponent_Conditional_0_For_5_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const page_r4 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onPageClick(page_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap("flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg sm:border-2 border-1 transition-all duration-200 text-lg sm:text-md font-semibold cursor-pointer " + (ctx_r1.isActivePage(page_r4) ? "border-yellow-400 bg-yellow-400 text-zinc-900" : "border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 hover:bg-yellow-300/15 active:bg-yellow-500/15"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", page_r4, " ");
} }
function ApUiPaginationComponent_Conditional_0_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApUiPaginationComponent_Conditional_0_For_5_Conditional_0_Template, 2, 0, "div", 6)(1, ApUiPaginationComponent_Conditional_0_For_5_Conditional_1_Template, 2, 3, "button", 7);
} if (rf & 2) {
    const page_r4 = ctx.$implicit;
    i0.ɵɵconditional(page_r4 === "..." ? 0 : 1);
} }
function ApUiPaginationComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "button", 2);
    i0.ɵɵlistener("click", function ApUiPaginationComponent_Conditional_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onPreviousClick()); });
    i0.ɵɵelement(2, "ap-icon", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵrepeaterCreate(4, ApUiPaginationComponent_Conditional_0_For_5_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 2);
    i0.ɵɵlistener("click", function ApUiPaginationComponent_Conditional_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onNextClick()); });
    i0.ɵɵelement(7, "ap-icon", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap("flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border-1 sm:border-2 transition-all duration-200 cursor-pointer " + (ctx_r1.isPreviousDisabled() ? "border-zinc-600 text-zinc-500 cursor-not-allowed" : "border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800 active:bg-zinc-700"));
    i0.ɵɵproperty("disabled", ctx_r1.isPreviousDisabled());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.visiblePages);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border-1 sm:border-2 transition-all duration-200 cursor-pointer " + (ctx_r1.isNextDisabled() ? "border-zinc-600 text-zinc-500 cursor-not-allowed" : "border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800 active:bg-zinc-700"));
    i0.ɵɵproperty("disabled", ctx_r1.isNextDisabled());
} }
function ApUiPaginationComponent_Conditional_1_For_5_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1, " ... ");
    i0.ɵɵelementEnd();
} }
function ApUiPaginationComponent_Conditional_1_For_5_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ApUiPaginationComponent_Conditional_1_For_5_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const page_r7 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onPageClick(page_r7)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap("flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg sm:border-2 border-1 transition-all duration-200 text-lg sm:text-md font-semibold cursor-pointer " + (ctx_r1.isActivePage(page_r7) ? "border-purple-400 bg-purple-400 text-zinc-900" : "border-zinc-600 text-zinc-300 hover:border-zinc-500   hover:text-zinc-100 hover:bg-purple-300/15 active:bg-purple-500/15"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", page_r7, " ");
} }
function ApUiPaginationComponent_Conditional_1_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApUiPaginationComponent_Conditional_1_For_5_Conditional_0_Template, 2, 0, "div", 6)(1, ApUiPaginationComponent_Conditional_1_For_5_Conditional_1_Template, 2, 3, "button", 7);
} if (rf & 2) {
    const page_r7 = ctx.$implicit;
    i0.ɵɵconditional(page_r7 === "..." ? 0 : 1);
} }
function ApUiPaginationComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "button", 2);
    i0.ɵɵlistener("click", function ApUiPaginationComponent_Conditional_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onPreviousClick()); });
    i0.ɵɵelement(2, "ap-icon", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵrepeaterCreate(4, ApUiPaginationComponent_Conditional_1_For_5_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 2);
    i0.ɵɵlistener("click", function ApUiPaginationComponent_Conditional_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onNextClick()); });
    i0.ɵɵelement(7, "ap-icon", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap("flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border-1 sm:border-2 transition-all duration-200 " + (ctx_r1.isPreviousDisabled() ? "border-zinc-600 text-zinc-500 cursor-not-allowed" : "border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800 active:bg-zinc-700"));
    i0.ɵɵproperty("disabled", ctx_r1.isPreviousDisabled());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.visiblePages);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg sm:border-2 border-1 transition-all duration-200 " + (ctx_r1.isNextDisabled() ? "border-zinc-700 text-zinc-500 cursor-not-allowed" : "border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800 active:bg-zinc-700"));
    i0.ɵɵproperty("disabled", ctx_r1.isNextDisabled());
} }
export class ApUiPaginationComponent {
    variant = input('quick');
    config = input.required();
    pageChanged = output();
    get visiblePages() {
        const { currentPage, totalPages, showPages = 1 } = this.config();
        const pages = [];
        // Simple pagination logic - show all pages if 7 or fewer
        if (totalPages <= 7) {
            // Show all pages if total is 7 or less
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }
        else {
            // Always show first page
            pages.push(1);
            const startPage = Math.max(2, currentPage - showPages);
            const endPage = Math.min(totalPages - 1, currentPage + showPages);
            // Add ellipsis after first page if needed
            if (startPage > 2) {
                pages.push('...');
            }
            // Add pages around current page
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            // Add ellipsis before last page if needed
            if (endPage < totalPages - 1) {
                pages.push('...');
            }
            // Always show last page
            if (totalPages > 1) {
                pages.push(totalPages);
            }
        }
        return pages;
    }
    onPageClick(page) {
        if (typeof page === 'number' && page !== this.config().currentPage) {
            this.pageChanged.emit(page);
        }
    }
    onPreviousClick() {
        const { currentPage } = this.config();
        if (currentPage > 1) {
            this.pageChanged.emit(currentPage - 1);
        }
    }
    onNextClick() {
        const { currentPage, totalPages } = this.config();
        if (currentPage < totalPages) {
            this.pageChanged.emit(currentPage + 1);
        }
    }
    isPreviousDisabled() {
        return this.config().currentPage <= 1;
    }
    isNextDisabled() {
        const { currentPage, totalPages } = this.config();
        return currentPage >= totalPages;
    }
    isActivePage(page) {
        return typeof page === 'number' && page === this.config().currentPage;
    }
    static ɵfac = function ApUiPaginationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApUiPaginationComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApUiPaginationComponent, selectors: [["ap-ui-pagination"]], inputs: { variant: [1, "variant"], config: [1, "config"] }, outputs: { pageChanged: "pageChanged" }, decls: 2, vars: 2, consts: [[1, "flex", "items-center", "justify-center", "gap-0.5", "sm:gap-1", "py-4"], [1, "flex", "items-center", "justify-center", "gap-2", "sm:gap-1", "py-4"], [3, "click", "disabled"], ["name", "chevron-left default", 1, "size-4", "sm:size-5"], [1, "flex", "items-center", "gap-2", "sm:gap-2", "mx-1", "sm:mx-2"], ["name", "chevron-right default", 1, "size-4", "sm:size-5"], [1, "flex", "items-center", "justify-center", "w-6", "h-8", "sm:w-10", "sm:h-10", "text-zinc-400", "text-sm"], [3, "class"], [3, "click"]], template: function ApUiPaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApUiPaginationComponent_Conditional_0_Template, 8, 6, "div", 0);
            i0.ɵɵconditionalCreate(1, ApUiPaginationComponent_Conditional_1_Template, 8, 6, "div", 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.variant() === "quick" ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "event" ? 1 : -1);
        } }, dependencies: [CommonModule, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApUiPaginationComponent, [{
        type: Component,
        args: [{ selector: 'ap-ui-pagination', imports: [CommonModule, ApIconComponent], template: "@if (variant() === 'quick') {\n<div class=\"flex items-center justify-center gap-0.5 sm:gap-1 py-4\">\n  <!-- Previous Button -->\n  <button\n    (click)=\"onPreviousClick()\"\n    [disabled]=\"isPreviousDisabled()\"\n    [class]=\"\n      'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border-1 sm:border-2 transition-all duration-200 cursor-pointer ' +\n      (isPreviousDisabled()\n        ? 'border-zinc-600 text-zinc-500 cursor-not-allowed'\n        : 'border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800 active:bg-zinc-700')\n    \"\n  >\n    <ap-icon name=\"chevron-left default\" class=\"size-4 sm:size-5\"></ap-icon>\n  </button>\n\n  <!-- Page Numbers -->\n  <div class=\"flex items-center gap-2 sm:gap-2 mx-1 sm:mx-2\">\n    @for (page of visiblePages; track $index) { @if (page === '...') {\n    <div\n      class=\"flex items-center justify-center w-6 h-8 sm:w-10 sm:h-10 text-zinc-400 text-sm\"\n    >\n      ...\n    </div>\n    } @else {\n    <button\n      (click)=\"onPageClick(page)\"\n      [class]=\"\n        'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg sm:border-2 border-1 transition-all duration-200 text-lg sm:text-md font-semibold cursor-pointer ' +\n        (isActivePage(page)\n          ? 'border-yellow-400 bg-yellow-400 text-zinc-900'\n          : 'border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 hover:bg-yellow-300/15 active:bg-yellow-500/15')\n      \"\n    >\n      {{ page }}\n    </button>\n    } }\n  </div>\n\n  <!-- Next Button -->\n  <button\n    (click)=\"onNextClick()\"\n    [disabled]=\"isNextDisabled()\"\n    [class]=\"\n      'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border-1 sm:border-2 transition-all duration-200 cursor-pointer ' +\n      (isNextDisabled()\n        ? 'border-zinc-600 text-zinc-500 cursor-not-allowed'\n        : 'border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800 active:bg-zinc-700')\n    \"\n  >\n    <ap-icon name=\"chevron-right default\" class=\"size-4 sm:size-5\"></ap-icon>\n  </button>\n</div>\n\n<!--Event Type-->\n} @if (variant() === 'event') {\n<div class=\"flex items-center justify-center gap-2 sm:gap-1 py-4\">\n  <!-- Previous Button -->\n  <button\n    (click)=\"onPreviousClick()\"\n    [disabled]=\"isPreviousDisabled()\"\n    [class]=\"\n      'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border-1 sm:border-2 transition-all duration-200 ' +\n      (isPreviousDisabled()\n        ? 'border-zinc-600 text-zinc-500 cursor-not-allowed'\n        : 'border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800 active:bg-zinc-700')\n    \"\n  >\n    <ap-icon name=\"chevron-left default\" class=\"size-4 sm:size-5\"></ap-icon>\n  </button>\n\n  <!-- Page Numbers -->\n  <div class=\"flex items-center gap-2 sm:gap-2 mx-1 sm:mx-2\">\n    @for (page of visiblePages; track $index) { @if (page === '...') {\n    <div\n      class=\"flex items-center justify-center w-6 h-8 sm:w-10 sm:h-10 text-zinc-400 text-sm\"\n    >\n      ...\n    </div>\n    } @else {\n    <button\n      (click)=\"onPageClick(page)\"\n      [class]=\"\n        'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg sm:border-2 border-1 transition-all duration-200 text-lg sm:text-md font-semibold cursor-pointer ' +\n        (isActivePage(page)\n          ? 'border-purple-400 bg-purple-400 text-zinc-900'\n          : 'border-zinc-600 text-zinc-300 hover:border-zinc-500   hover:text-zinc-100 hover:bg-purple-300/15 active:bg-purple-500/15')\n      \"\n    >\n      {{ page }}\n    </button>\n    } }\n  </div>\n\n  <!-- Next Button -->\n  <button\n    (click)=\"onNextClick()\"\n    [disabled]=\"isNextDisabled()\"\n    [class]=\"\n      'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg sm:border-2 border-1 transition-all duration-200 ' +\n      (isNextDisabled()\n        ? 'border-zinc-700 text-zinc-500 cursor-not-allowed'\n        : 'border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800 active:bg-zinc-700')\n    \"\n  >\n    <ap-icon name=\"chevron-right default\" class=\"size-4 sm:size-5\"></ap-icon>\n  </button>\n</div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApUiPaginationComponent, { className: "ApUiPaginationComponent", filePath: "src/app/components/ap-ui-pagination/ap-pagination.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=ap-pagination.component.js.map