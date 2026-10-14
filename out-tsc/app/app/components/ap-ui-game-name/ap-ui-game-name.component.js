import { Component, input, signal, } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class ApUiGameNameComponent {
    gameName = input('Game Name');
    /** 遊戲計時器 */
    gameTime = signal('00:00:00');
    _gameTimerInterval = null;
    _gameTimeSeconds = 0;
    ngOnInit() {
        if (this._gameTimerInterval)
            return;
        // 開始計時
        this._gameTimerInterval = setInterval(() => {
            this._gameTimeSeconds++;
            const h = Math.floor(this._gameTimeSeconds / 3600);
            const m = Math.floor((this._gameTimeSeconds % 3600) / 60);
            const s = this._gameTimeSeconds % 60;
            this.gameTime.set(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
        }, 1000);
    }
    ngOnDestroy() {
        if (this._gameTimerInterval)
            clearInterval(this._gameTimerInterval);
    }
    static ɵfac = function ApUiGameNameComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApUiGameNameComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApUiGameNameComponent, selectors: [["ap-ui-game-name"]], inputs: { gameName: [1, "gameName"] }, decls: 7, vars: 2, consts: [[1, "flex", "w-full", "select-none", "uppercase", "gap-0.5", "text-xs", "text-stroke", "items-center"], [1, "text-[0.6rem]"]], template: function ApUiGameNameComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵtext(4, "|");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.gameName());
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.gameTime());
        } }, dependencies: [CommonModule], styles: [".text-stroke[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow:\n    1px 1px 1px rgba(0, 0, 0, 1),\n    -1px 1px 1px rgba(0, 0, 0, 1),\n    1px -1px 1px rgba(0, 0, 0, 1),\n    -1px -1px 1px rgba(0, 0, 0, 1);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApUiGameNameComponent, [{
        type: Component,
        args: [{ selector: 'ap-ui-game-name', imports: [CommonModule], template: "<div\n  class=\"flex w-full select-none uppercase gap-0.5 text-xs text-stroke items-center\"\n>\n  <div>{{ gameName() }}</div>\n  <div class=\"text-[0.6rem]\">|</div>\n  <div>{{ gameTime() }}</div>\n</div>\n", styles: [".text-stroke {\n  color: #fff;\n  text-shadow:\n    1px 1px 1px rgba(0, 0, 0, 1),\n    -1px 1px 1px rgba(0, 0, 0, 1),\n    1px -1px 1px rgba(0, 0, 0, 1),\n    -1px -1px 1px rgba(0, 0, 0, 1);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApUiGameNameComponent, { className: "ApUiGameNameComponent", filePath: "src/app/components/ap-ui-game-name/ap-ui-game-name.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=ap-ui-game-name.component.js.map