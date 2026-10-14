import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
export class ApHistoryReplayTopBarComponent {
    /** 是否顯示畫面 */
    onClose = output();
    detailItem = input(null);
    share = output();
    replay = output();
    detail = output();
    text = input('Quick Race Mode On: Bet x');
    multiplier = input(1.2);
    async copyTransaction(item, event) {
        event?.stopPropagation();
        try {
            await navigator.clipboard.writeText(item.transaction);
            // Optional: You can replace alert with a toast notification
            alert(`${item.transaction} copied to clipboard!`);
        }
        catch (err) {
            alert('Failed to copy transaction to clipboard');
        }
    }
    static ɵfac = function ApHistoryReplayTopBarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApHistoryReplayTopBarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApHistoryReplayTopBarComponent, selectors: [["ap-history-replay-top-bar"]], inputs: { detailItem: [1, "detailItem"], text: [1, "text"], multiplier: [1, "multiplier"] }, outputs: { onClose: "onClose", share: "share", replay: "replay", detail: "detail" }, decls: 22, vars: 16, consts: [[1, "w-full", "py-2", "sm:px-8", "px-4", "grid", "grid-cols-[1fr_auto_1fr]", "items-center", "select-none", "bg-zinc-950/75", "transition-all", "border-b", "border-zinc-900"], [1, "flex", "gap-2", "items-center", "cursor-pointer", "justify-self-start"], [3, "severity", "size", "icon"], [1, "text-lg", "font-medium", "text-white", "3sm:block"], [1, "flex", "items-center", "gap-1", "text-white", "justify-self-center", "text-center"], ["name", "document-text", 1, "size-5"], [1, "font-medium", "text-md", "text-left"], [1, "flex", "space-x-4", "justify-self-end"], [1, "flex", "gap-2", "items-center", "cursor-pointer"], [3, "icon", "variant", "size", "accentColor"], [1, "font-medium", "text-lg", "hidden", "sm:block"], [3, "click", "icon", "variant", "size", "accentColor"]], template: function ApHistoryReplayTopBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "ap-button", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtext(4, "Back to Game");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelement(6, "ap-icon", 5);
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 7)(10, "div", 8);
            i0.ɵɵelement(11, "ap-button", 9);
            i0.ɵɵelementStart(12, "div", 10);
            i0.ɵɵtext(13, "Replay");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 8);
            i0.ɵɵelement(15, "ap-button", 9);
            i0.ɵɵelementStart(16, "div", 10);
            i0.ɵɵtext(17, "Share");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 8)(19, "ap-button", 11);
            i0.ɵɵlistener("click", function ApHistoryReplayTopBarComponent_Template_ap_button_click_19_listener($event) { return ctx.detailItem() && ctx.copyTransaction(ctx.detailItem(), $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 10);
            i0.ɵɵtext(21, "Copy");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            let tmp_3_0;
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("severity", "contrast")("size", "small")("icon", "chevron-left");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ((tmp_3_0 = ctx.detailItem()) == null ? null : tmp_3_0.transaction) || "Transaction Numbers", " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("icon", "replay")("variant", "rounded-icon")("size", "small")("accentColor", "zinc");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("icon", "share")("variant", "rounded-icon")("size", "small")("accentColor", "zinc");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("icon", "copy")("variant", "rounded-icon")("size", "small")("accentColor", "zinc");
        } }, dependencies: [CommonModule, ApButtonComponent, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApHistoryReplayTopBarComponent, [{
        type: Component,
        args: [{ selector: 'ap-history-replay-top-bar', imports: [CommonModule, ApButtonComponent, ApIconComponent], template: "<div\n  class=\"w-full py-2 sm:px-8 px-4 grid grid-cols-[1fr_auto_1fr] items-center select-none bg-zinc-950/75 transition-all border-b border-zinc-900\"\n>\n  <!-- Back to Game -->\n  <div class=\"flex gap-2 items-center cursor-pointer justify-self-start\">\n    <ap-button\n      [severity]=\"'contrast'\"\n      [size]=\"'small'\"\n      [icon]=\"'chevron-left'\"\n    ></ap-button>\n    <div class=\"text-lg font-medium text-white 3sm:block\">Back to Game</div>\n  </div>\n\n  <!-- Transaction Details -->\n  <div\n    class=\"flex items-center gap-1 text-white justify-self-center text-center\"\n  >\n    <ap-icon name=\"document-text\" class=\"size-5\" />\n    <div class=\"font-medium text-md text-left\">\n      {{ detailItem()?.transaction || \"Transaction Numbers\" }}\n    </div>\n  </div>\n\n  <!--  Action Buttons -->\n  <div class=\"flex space-x-4 justify-self-end\">\n    <div class=\"flex gap-2 items-center cursor-pointer\">\n      <ap-button\n        [icon]=\"'replay'\"\n        [variant]=\"'rounded-icon'\"\n        [size]=\"'small'\"\n        [accentColor]=\"'zinc'\"\n      ></ap-button>\n      <div class=\"font-medium text-lg hidden sm:block\">Replay</div>\n    </div>\n    <div class=\"flex gap-2 items-center cursor-pointer\">\n      <ap-button\n        [icon]=\"'share'\"\n        [variant]=\"'rounded-icon'\"\n        [size]=\"'small'\"\n        [accentColor]=\"'zinc'\"\n      ></ap-button>\n      <div class=\"font-medium text-lg hidden sm:block\">Share</div>\n    </div>\n    <div class=\"flex gap-2 items-center cursor-pointer\">\n      <ap-button\n        (click)=\"detailItem() && copyTransaction(detailItem()!, $event)\"\n        [icon]=\"'copy'\"\n        [variant]=\"'rounded-icon'\"\n        [size]=\"'small'\"\n        [accentColor]=\"'zinc'\"\n      ></ap-button>\n      <div class=\"font-medium text-lg hidden sm:block\">Copy</div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApHistoryReplayTopBarComponent, { className: "ApHistoryReplayTopBarComponent", filePath: "src/app/components/ap-history-replay-top-bar/ap-history-replay-top-bar.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=ap-history-replay-top-bar.component.js.map