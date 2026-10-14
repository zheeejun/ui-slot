import { Component, effect, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { defaultPlayersList } from "./ap-trn-list-row.interface";
import { CompactNumberPipe } from "../../library/pipe/compact-number.pipe";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2, a3, a4, a5) => ({ "bg-zinc-900/80 border-t border-zinc-800": a0, "bg-zinc-700/80 border-t-2 border-b-2": a1, "border-yellow-300": a2, "border-purple-300": a3, "rank-up": a4, "rank-down": a5 });
const _c1 = (a0, a1) => ({ "text-xs": a0, "text-[10px] tracking-tight": a1 });
const _c2 = (a0, a1) => ({ "text-yellow-300": a0, "text-purple-300": a1 });
const _forTrack0 = ($index, $item) => $item.id;
function ApTrnListRowComponent_For_4_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c1, (item_r1.score || 0) < 1000000, (item_r1.score || 0) >= 1000000));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.score);
} }
function ApTrnListRowComponent_For_4_Conditional_10_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function ApTrnListRowComponent_For_4_Conditional_10_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "compactNumber");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c2, ctx_r1.variant() === "quick", ctx_r1.variant() === "event"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.currency(), "", i0.ɵɵpipeBind2(2, 3, item_r1.win, "1.0-1"), " ");
} }
function ApTrnListRowComponent_For_4_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApTrnListRowComponent_For_4_Conditional_10_Conditional_0_Template, 2, 0, "div", 9)(1, ApTrnListRowComponent_For_4_Conditional_10_Conditional_1_Template, 3, 9, "div", 10);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵconditional(item_r1.win === 0 ? 0 : 1);
} }
function ApTrnListRowComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 2)(1, "td", 3)(2, "div", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td", 5)(5, "div", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 7);
    i0.ɵɵconditionalCreate(8, ApTrnListRowComponent_For_4_Conditional_8_Template, 2, 5, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 7);
    i0.ɵɵconditionalCreate(10, ApTrnListRowComponent_For_4_Conditional_10_Template, 2, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(6, _c0, !item_r1.highlighted, item_r1.highlighted, item_r1.highlighted && ctx_r1.variant() === "quick", item_r1.highlighted && ctx_r1.variant() === "event", ctx_r1.getRankChange(item_r1.id) === "up", ctx_r1.getRankChange(item_r1.id) === "down"));
    i0.ɵɵattribute("data-id", item_r1.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r1.rank !== null ? item_r1.rank : "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r1.score !== undefined ? 8 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r1.win !== undefined ? 10 : -1);
} }
export class ApTrnListRowComponent {
    items = input(defaultPlayersList.slice(0, 5));
    showDividers = input(true);
    clickable = input(true);
    borderColor = input("border-zinc-500");
    selectable = input(false);
    selectedIds = input([]);
    variant = input("quick");
    currency = input("$");
    // 追蹤每個項目的排名變化
    rankChanges = new Map();
    previousRanks = new Map();
    constructor() {
        // 監聽 items 變化，計算排名變化
        effect(() => {
            const currentItems = this.items();
            const newRankChanges = new Map();
            currentItems.forEach((item) => {
                const previousRank = this.previousRanks.get(item.id);
                if (previousRank !== undefined && previousRank !== null && previousRank !== item.rank && item.rank !== null) {
                    // 排名數字變小 = 排名上升（例如從 5 到 3）
                    if (item.rank < previousRank) {
                        newRankChanges.set(item.id, 'up');
                    }
                    // 排名數字變大 = 排名下降（例如從 3 到 5）
                    else if (item.rank > previousRank) {
                        newRankChanges.set(item.id, 'down');
                    }
                }
                else {
                    newRankChanges.set(item.id, 'none');
                }
                // 更新記錄的排名
                this.previousRanks.set(item.id, item.rank);
            });
            this.rankChanges = newRankChanges;
            // 清除動畫狀態（1秒後）
            setTimeout(() => {
                this.rankChanges = new Map(Array.from(this.rankChanges.entries()).map(([id]) => [id, 'none']));
            }, 1000);
        });
    }
    getRankChange(id) {
        return this.rankChanges.get(id) || 'none';
    }
    static ɵfac = function ApTrnListRowComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApTrnListRowComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApTrnListRowComponent, selectors: [["ap-trn-list-row"]], inputs: { items: [1, "items"], showDividers: [1, "showDividers"], clickable: [1, "clickable"], borderColor: [1, "borderColor"], selectable: [1, "selectable"], selectedIds: [1, "selectedIds"], variant: [1, "variant"], currency: [1, "currency"] }, decls: 5, vars: 0, consts: [["list", ""], [1, "relative", "w-full"], [1, "relative", "text-sm", "text-white", 3, "ngClass"], [1, "p-0.5", "align-middle", "w-6"], [1, "w-4", "text-xs", "text-left"], [1, "py-0.5", "align-middle", "w-8"], [1, "w-6", "opacity-90", "truncate", "text-xs", "text-white"], [1, "p-0.5", "align-middle", "text-right"], [1, "font-semibold", "text-white", 3, "ngClass"], [1, "inline-block", "text-right", "font-semibold", "text-xs", "pr-1.5"], [1, "inline-block", "text-right", "font-semibold", "text-xs", 3, "ngClass"]], template: function ApTrnListRowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 1, 0)(2, "tbody");
            i0.ɵɵrepeaterCreate(3, ApTrnListRowComponent_For_4_Template, 11, 13, "tr", 2, _forTrack0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.items());
        } }, dependencies: [CommonModule, i1.NgClass, CompactNumberPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_rankUp {\n  0% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n\n\n@keyframes _ngcontent-%COMP%_rankDown {\n  0% {\n    transform: translateY(-10px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n\n\n.rank-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rankUp 0.25s ease-out;\n}\n\n.rank-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rankDown 0.25s ease-out;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApTrnListRowComponent, [{
        type: Component,
        args: [{ selector: "ap-trn-list-row", standalone: true, imports: [CommonModule, CompactNumberPipe], template: "<table #list class=\"relative w-full\">\n  <tbody>\n    @for (item of items(); track item.id; let i = $index) {\n    <tr class=\"relative text-sm text-white\"\n      [ngClass]=\"{ \n        'bg-zinc-900/80 border-t border-zinc-800': !item.highlighted,\n        'bg-zinc-700/80 border-t-2 border-b-2': item.highlighted,\n        'border-yellow-300': item.highlighted && variant() === 'quick',\n        'border-purple-300': item.highlighted && variant() === 'event',\n        'rank-up': getRankChange(item.id) === 'up',\n        'rank-down': getRankChange(item.id) === 'down'\n      }\"\n      [attr.data-id]=\"item.id\"\n    >\n      <!-- Left section with ranking -->\n      <td class=\"p-0.5 align-middle w-6\">\n        <div class=\"w-4 text-xs text-left\">{{ (item.rank !== null) ? item.rank : '-' }}</div>\n      </td>\n      <td class=\"py-0.5 align-middle w-8\">\n        <div class=\"w-6 opacity-90 truncate text-xs text-white\">{{item.name}}</div>\n      </td>\n\n      <!-- Right section with score and bonus -->\n      <td class=\"p-0.5 align-middle text-right \">\n        @if (item.score !== undefined) {\n          <span class=\"font-semibold text-white\" [ngClass]=\"{\n            'text-xs': (item.score || 0) < 1000000,\n            'text-[10px] tracking-tight': (item.score || 0) >= 1000000\n          }\">{{ item.score }}</span>\n        }\n      </td>\n      <td class=\"p-0.5 align-middle text-right \">\n        @if (item.win !== undefined) {\n          @if (item.win === 0) {\n            <div class=\"inline-block text-right font-semibold text-xs pr-1.5\">-</div>\n          } @else {\n            <div class=\"inline-block text-right font-semibold text-xs\" [ngClass]=\"{\n                'text-yellow-300': variant() === 'quick',\n                'text-purple-300': variant() === 'event'\n              }\">{{ currency() }}{{ item.win | compactNumber:'1.0-1' }}\n            </div>\n          }\n        }\n      </td>\n    </tr>\n  }\n  </tbody>\n</table>\n", styles: [":host {\n  display: block;\n  width: 100%;\n}\n\n/* \u6392\u540D\u4E0A\u5347\u52D5\u756B */\n@keyframes rankUp {\n  0% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n/* \u6392\u540D\u4E0B\u964D\u52D5\u756B */\n@keyframes rankDown {\n  0% {\n    transform: translateY(-10px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n/* \u61C9\u7528\u52D5\u756B */\n.rank-up {\n  animation: rankUp 0.25s ease-out;\n}\n\n.rank-down {\n  animation: rankDown 0.25s ease-out;\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApTrnListRowComponent, { className: "ApTrnListRowComponent", filePath: "src/app/components/ap-trn-list-row/ap-trn-list-row.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=ap-trn-list-row.component.js.map