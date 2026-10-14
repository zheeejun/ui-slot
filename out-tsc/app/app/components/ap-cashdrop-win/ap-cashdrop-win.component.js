import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function ApCashdropWinComponent_For_14_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 10);
    i0.ɵɵlistener("animationend", function ApCashdropWinComponent_For_14_Template_img_animationend_0_listener($event) { const coin_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.handleAnimationEnd($event, coin_r2.id)); })("click", function ApCashdropWinComponent_For_14_Template_img_click_0_listener() { const coin_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onCoinClick(coin_r2.id)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const coin_r2 = ctx.$implicit;
    i0.ɵɵclassMap(coin_r2.shouldRotate ? "coin coin-rotate absolute object-contain cursor-pointer" : "coin coin-no-rotate absolute object-contain cursor-pointer");
    i0.ɵɵstyleProp("left", coin_r2.left, "%")("animation-delay", coin_r2.animationDelay, "s")("animation-duration", coin_r2.animationDuration, "s")("width", coin_r2.size, "px")("height", coin_r2.size, "px")("--sway-distance", coin_r2.swayDistance, "px");
} }
export class ApCashdropWinComponent {
    coins = signal([]);
    timeLeft = signal('00:00');
    currentProgress = signal(0);
    totalProgress = signal(10);
    winAmount = signal(0.0);
    timerSubscription;
    coinIntervalId;
    coinIntervalStartTimeoutId;
    // 時間倒數
    endTime = Date.now() + 5 * 60 * 1000;
    maxCoins = 30;
    timeUp = false;
    ngOnInit() {
        this.restartRun();
    }
    ngOnDestroy() {
        this.timerSubscription?.unsubscribe();
        this.stopCoinFlow();
    }
    restartRun() {
        this.timeUp = false;
        this.stopCoinFlow();
        this.timerSubscription?.unsubscribe();
        this.coins.set([]);
        this.endTime = Date.now() + 5 * 60 * 1000;
        this.generateCoins();
        this.startCountdown();
    }
    generateCoins() {
        const coinArray = [];
        const initialCoinCount = 10; // Start with more coins
        const spawnIntervalMs = 500; // Faster spawn rate
        const intervalStartDelayMs = 1000; // Shorter initial delay
        // 生成金幣
        for (let i = 0; i < initialCoinCount; i++) {
            coinArray.push(this.createCoin({
                size: 80,
                rotateThreshold: 0.25,
                delayMax: 4,
                swayMin: 10,
                swayRange: 20,
            }));
        }
        this.coins.set(coinArray);
        this.coinIntervalStartTimeoutId = window.setTimeout(() => {
            this.coinIntervalId = window.setInterval(() => {
                if (this.timeUp) {
                    return;
                }
                const currentCoins = this.coins();
                // 新增一個金幣，並確保不超過最大數量
                const newCoin = {
                    ...this.createCoin({
                        rotateThreshold: 0.4,
                        delayMax: 1,
                        swayMin: 8,
                        swayRange: 16,
                    }),
                };
                // 更新金幣陣列
                const updatedCoins = currentCoins.length >= this.maxCoins
                    ? [...currentCoins.slice(1), newCoin]
                    : [...currentCoins, newCoin];
                this.coins.set(updatedCoins);
            }, spawnIntervalMs);
        }, intervalStartDelayMs);
    }
    onCoinClick(coinId) {
        this.replaceCoin(coinId);
        // 增加贏取金額
        const randomWin = Math.random() * 10 + 1;
        this.winAmount.set(this.winAmount() + randomWin);
        // 增加進度計數器
        if (this.currentProgress() < this.totalProgress()) {
            this.currentProgress.set(this.currentProgress() + 1);
        }
    }
    startCountdown() {
        this.timerSubscription = interval(100).subscribe(() => {
            const now = Date.now();
            const remaining = Math.max(0, this.endTime - now);
            if (remaining === 0) {
                this.timeLeft.set('00:00');
                this.timerSubscription?.unsubscribe();
                this.timeUp = true;
                this.stopCoinFlow();
                return;
            }
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            const milliseconds = Math.floor((remaining % 1000) / 10);
            this.timeLeft.set(`${minutes.toString().padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`);
        });
    }
    setEndTime(minutes) {
        this.endTime = Date.now() + minutes * 60 * 1000;
    }
    replaceCoin(coinId) {
        if (this.timeUp) {
            return;
        }
        this.coins.update((current) => {
            const remaining = current.filter((coin) => coin.id !== coinId);
            return [
                ...remaining,
                this.createCoin({
                    rotateThreshold: 0.4,
                    delayMax: 1,
                    swayMin: 8,
                    swayRange: 16,
                }),
            ];
        });
    }
    handleAnimationEnd(event, coinId) {
        if (event.animationName === 'fall') {
            this.replaceCoin(coinId);
        }
    }
    stopCoinFlow() {
        if (this.coinIntervalId !== undefined) {
            clearInterval(this.coinIntervalId);
            this.coinIntervalId = undefined;
        }
        if (this.coinIntervalStartTimeoutId !== undefined) {
            clearTimeout(this.coinIntervalStartTimeoutId);
            this.coinIntervalStartTimeoutId = undefined;
        }
    }
    createCoin(options) {
        const { size = 60, rotateThreshold = 0.4, delayMax = 2, swayMin = 8, swayRange = 16, } = options || {};
        return {
            id: Date.now() + Math.random(),
            left: Math.random() * 100,
            animationDelay: Math.random() * delayMax,
            animationDuration: 5.5 + Math.random() * 1.5,
            size,
            shouldRotate: Math.random() > rotateThreshold,
            swayDistance: swayMin + Math.random() * swayRange,
        };
    }
    static ɵfac = function ApCashdropWinComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApCashdropWinComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApCashdropWinComponent, selectors: [["ap-cashdrop-win"]], decls: 15, vars: 4, consts: [[1, "relative", "w-[30rem]", "h-screen", "overflow-hidden", "bg-[url(assets/images/10065.png)]", "bg-cover", "bg-center", "bg-no-repeat", "flex", "flex-col", "items-center", "justify-between", "pt-12", "pb-8"], [1, "absolute", "inset-0", "bg-black/50", "z-0"], [1, "relative", "z-overlay", "text-center", "mb-8", "text-yellow-300"], [1, "timer-label", "text-5xl", "font-black", "tracking-[0.2rem]", "mb-5"], [1, "timer-value", "text-5xl", "font-black", "tracking-[0.3rem]"], [1, "relative", "z-overlay", "text-center"], [1, "timer-label", "progress-counter", "text-5xl", "font-black", "text-white", "mb-4"], [1, "timer-label", "win-amount", "text-4xl", "font-black", "text-emerald-400"], [1, "absolute", "top-0", "left-0", "w-full", "h-full", "overflow-hidden"], ["src", "assets/images/coin.png", "alt", "coin", 3, "class", "left", "animation-delay", "animation-duration", "width", "height", "--sway-distance"], ["src", "assets/images/coin.png", "alt", "coin", 3, "animationend", "click"]], template: function ApCashdropWinComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵtext(4, " TIME LEFT ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 5)(8, "div", 6);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 7);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 8);
            i0.ɵɵrepeaterCreate(13, ApCashdropWinComponent_For_14_Template, 1, 14, "img", 9, _forTrack0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.timeLeft(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2(" ", ctx.currentProgress(), "/", ctx.totalProgress(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" WIN ", ctx.winAmount().toFixed(3), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.coins());
        } }, dependencies: [CommonModule], styles: [".timer-label[_ngcontent-%COMP%] {\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3), 2px 2px 0 rgba(0, 0, 0, 0.3),\n    3px 3px 0 rgba(0, 0, 0, 0.3), 4px 4px 0 rgba(0, 0, 0, 0.3),\n    5px 5px 0 rgba(0, 0, 0, 0.3), 6px 6px 10px rgba(2, 0, 0, 0.6);\n  font: \"Futura\";\n}\n\n.timer-value[_ngcontent-%COMP%] {\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4), 2px 2px 0 rgba(0, 0, 0, 0.4),\n    3px 3px 0 rgba(0, 0, 0, 0.4), 4px 4px 0 rgba(0, 0, 0, 0.4),\n    5px 5px 0 rgba(0, 0, 0, 0.4), 6px 6px 0 rgba(0, 0, 0, 0.4),\n    7px 7px 0 rgba(0, 0, 0, 0.4), 8px 8px 15px rgba(0, 0, 0, 0.7);\n  font: \"Futura\";\n}\n\n.progress-counter[_ngcontent-%COMP%] {\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4), 2px 2px 0 rgba(0, 0, 0, 0.4),\n    3px 3px 0 rgba(0, 0, 0, 0.4), 4px 4px 0 rgba(0, 0, 0, 0.4),\n    5px 5px 0 rgba(0, 0, 0, 0.4), 6px 6px 0 rgba(0, 0, 0, 0.4),\n    7px 7px 0 rgba(0, 0, 0, 0.4), 8px 8px 15px rgba(0, 0, 0, 0.7);\n}\n\n.win-amount[_ngcontent-%COMP%] {\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4), 2px 2px 0 rgba(0, 0, 0, 0.4),\n    3px 3px 0 rgba(0, 0, 0, 0.4), 4px 4px 0 rgba(0, 0, 0, 0.4),\n    5px 5px 0 rgba(0, 0, 0, 0.4), 6px 6px 0 rgba(0, 0, 0, 0.4),\n    7px 7px 12px rgba(0, 0, 0, 0.7);\n}\n\n@keyframes _ngcontent-%COMP%_glow {\n  from {\n    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),\n      0 0 20px rgba(135, 206, 250, 0.6), 0 0 30px rgba(135, 206, 250, 0.4),\n      4px 4px 8px rgba(0, 0, 0, 0.8);\n  }\n  to {\n    text-shadow: 0 0 20px rgba(255, 255, 255, 1),\n      0 0 30px rgba(135, 206, 250, 0.8), 0 0 40px rgba(135, 206, 250, 0.6),\n      4px 4px 8px rgba(0, 0, 0, 0.8);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n}\n\n.coin[_ngcontent-%COMP%] {\n  top: -100px;\n  will-change: transform;\n}\n\n.coin-rotate[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_fall, _ngcontent-%COMP%_rotate, _ngcontent-%COMP%_sway;\n  animation-timing-function: linear, linear, ease-in-out; \n\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n.coin-no-rotate[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_fall, _ngcontent-%COMP%_sway;\n  animation-timing-function: linear, ease-in-out; \n\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fall {\n  0% {\n    top: -100px;\n    opacity: 1;\n  }\n  100% {\n    top: calc(120vh); \n\n    opacity: 1;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_sway {\n  0%,\n  100% {\n    margin-left: 0;\n  }\n  25% {\n    margin-left: var(--sway-distance, 20px);\n  }\n  75% {\n    margin-left: calc(var(--sway-distance, 20px) * -1);\n  }\n}\n\n.coin[_ngcontent-%COMP%]:nth-child(odd) {\n  animation-duration: inherit, 2s, 3s !important;\n}\n\n.coin[_ngcontent-%COMP%]:nth-child(even) {\n  animation-duration: inherit, 1.5s, 2.5s !important;\n}\n\n\n\n.coin[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  background: radial-gradient(\n    circle,\n    rgba(255, 255, 255, 0.8) 0%,\n    transparent 70%\n  );\n  animation: _ngcontent-%COMP%_sparkle 2s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_sparkle {\n  0%,\n  100% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.5);\n  }\n  50% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApCashdropWinComponent, [{
        type: Component,
        args: [{ selector: 'ap-cashdrop-win', standalone: true, imports: [CommonModule], template: "<div\n  class=\"relative w-[30rem] h-screen overflow-hidden bg-[url(assets/images/10065.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-between pt-12 pb-8\"\n>\n  <!-- Black Overlay -->\n  <div class=\"absolute inset-0 bg-black/50 z-0\"></div>\n\n  <!-- Countdown Timer -->\n  <div class=\"relative z-overlay text-center mb-8 text-yellow-300\">\n    <div class=\"timer-label text-5xl font-black tracking-[0.2rem] mb-5\">\n      TIME LEFT\n    </div>\n    <div class=\"timer-value text-5xl font-black tracking-[0.3rem]\">\n      {{ timeLeft() }}\n    </div>\n  </div>\n\n  <!-- Bottom Content -->\n  <div class=\"relative z-overlay text-center\">\n    <!-- Progress Counter -->\n    <div class=\"timer-label progress-counter text-5xl font-black text-white mb-4\">\n      {{ currentProgress() }}/{{ totalProgress() }}\n    </div>\n    <!-- Win Amount -->\n    <div class=\"timer-label win-amount text-4xl font-black text-emerald-400\">\n      WIN {{ winAmount().toFixed(3) }}\n    </div>\n  </div>\n\n  <!-- Falling Coins -->\n  <div class=\"absolute top-0 left-0 w-full h-full overflow-hidden\">\n    @for (coin of coins(); track coin.id) {\n    <img\n      [class]=\"\n        coin.shouldRotate\n          ? 'coin coin-rotate absolute object-contain cursor-pointer'\n          : 'coin coin-no-rotate absolute object-contain cursor-pointer'\n      \"\n      src=\"assets/images/coin.png\"\n      [style.left.%]=\"coin.left\"\n      [style.animation-delay.s]=\"coin.animationDelay\"\n      [style.animation-duration.s]=\"coin.animationDuration\"\n      [style.width.px]=\"coin.size\"\n      [style.height.px]=\"coin.size\"\n      [style.--sway-distance.px]=\"coin.swayDistance\"\n      (animationend)=\"handleAnimationEnd($event, coin.id)\"\n      (click)=\"onCoinClick(coin.id)\"\n      alt=\"coin\"\n    />\n    }\n  </div>\n</div>\n", styles: [".timer-label {\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3), 2px 2px 0 rgba(0, 0, 0, 0.3),\n    3px 3px 0 rgba(0, 0, 0, 0.3), 4px 4px 0 rgba(0, 0, 0, 0.3),\n    5px 5px 0 rgba(0, 0, 0, 0.3), 6px 6px 10px rgba(2, 0, 0, 0.6);\n  font: \"Futura\";\n}\n\n.timer-value {\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4), 2px 2px 0 rgba(0, 0, 0, 0.4),\n    3px 3px 0 rgba(0, 0, 0, 0.4), 4px 4px 0 rgba(0, 0, 0, 0.4),\n    5px 5px 0 rgba(0, 0, 0, 0.4), 6px 6px 0 rgba(0, 0, 0, 0.4),\n    7px 7px 0 rgba(0, 0, 0, 0.4), 8px 8px 15px rgba(0, 0, 0, 0.7);\n  font: \"Futura\";\n}\n\n.progress-counter {\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4), 2px 2px 0 rgba(0, 0, 0, 0.4),\n    3px 3px 0 rgba(0, 0, 0, 0.4), 4px 4px 0 rgba(0, 0, 0, 0.4),\n    5px 5px 0 rgba(0, 0, 0, 0.4), 6px 6px 0 rgba(0, 0, 0, 0.4),\n    7px 7px 0 rgba(0, 0, 0, 0.4), 8px 8px 15px rgba(0, 0, 0, 0.7);\n}\n\n.win-amount {\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4), 2px 2px 0 rgba(0, 0, 0, 0.4),\n    3px 3px 0 rgba(0, 0, 0, 0.4), 4px 4px 0 rgba(0, 0, 0, 0.4),\n    5px 5px 0 rgba(0, 0, 0, 0.4), 6px 6px 0 rgba(0, 0, 0, 0.4),\n    7px 7px 12px rgba(0, 0, 0, 0.7);\n}\n\n@keyframes glow {\n  from {\n    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),\n      0 0 20px rgba(135, 206, 250, 0.6), 0 0 30px rgba(135, 206, 250, 0.4),\n      4px 4px 8px rgba(0, 0, 0, 0.8);\n  }\n  to {\n    text-shadow: 0 0 20px rgba(255, 255, 255, 1),\n      0 0 30px rgba(135, 206, 250, 0.8), 0 0 40px rgba(135, 206, 250, 0.6),\n      4px 4px 8px rgba(0, 0, 0, 0.8);\n  }\n}\n\n@keyframes pulse {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n}\n\n.coin {\n  top: -100px;\n  will-change: transform;\n}\n\n.coin-rotate {\n  animation-name: fall, rotate, sway;\n  animation-timing-function: linear, linear, ease-in-out; /* keep fall speed constant */\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n.coin-no-rotate {\n  animation-name: fall, sway;\n  animation-timing-function: linear, ease-in-out; /* keep fall speed constant */\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fall {\n  0% {\n    top: -100px;\n    opacity: 1;\n  }\n  100% {\n    top: calc(120vh); /* fall past the bottom for a continuous drop */\n    opacity: 1;\n  }\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sway {\n  0%,\n  100% {\n    margin-left: 0;\n  }\n  25% {\n    margin-left: var(--sway-distance, 20px);\n  }\n  75% {\n    margin-left: calc(var(--sway-distance, 20px) * -1);\n  }\n}\n\n.coin:nth-child(odd) {\n  animation-duration: inherit, 2s, 3s !important;\n}\n\n.coin:nth-child(even) {\n  animation-duration: inherit, 1.5s, 2.5s !important;\n}\n\n/* Add sparkle effect */\n.coin::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  background: radial-gradient(\n    circle,\n    rgba(255, 255, 255, 0.8) 0%,\n    transparent 70%\n  );\n  animation: sparkle 2s ease-in-out infinite;\n}\n\n@keyframes sparkle {\n  0%,\n  100% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.5);\n  }\n  50% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApCashdropWinComponent, { className: "ApCashdropWinComponent", filePath: "src/app/components/ap-cashdrop-win/ap-cashdrop-win.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=ap-cashdrop-win.component.js.map