import {
  ApButtonComponent
} from "./chunk-VX4L3GZI.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QGU3BS3L.js";

// src/app/components/ap-ui-frame-page/ap-ui-frame-page.component.ts
var _c0 = ["*"];
var ApUiFramePageComponent = class _ApUiFramePageComponent {
  /** 讓框架辨識這frame的用途 */
  id = input("");
  header = input("");
  enableBack = input(false);
  enableClose = input(true);
  close = output();
  back = output();
  static \u0275fac = function ApUiFramePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApUiFramePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApUiFramePageComponent, selectors: [["ap-ui-frame-page"]], inputs: { id: [1, "id"], header: [1, "header"], enableBack: [1, "enableBack"], enableClose: [1, "enableClose"] }, outputs: { close: "close", back: "back" }, ngContentSelectors: _c0, decls: 9, vars: 13, consts: [[1, "relative", "flex", "size-full", "popup-overlay", "justify-center", "items-center"], [1, "relative", "size-full", "bg-zinc-800", "border-zinc-500", "lg:border-2", "lg:rounded-xl", "lg:shadow-xl", "lg:max-w-5xl", "lg:max-h-[50rem]", "transition-all"], [1, "absolute", "w-full", "flex", "items-center", "justify-center", "h-16", "lg:rounded-t-xl", "bg-zinc-900"], [1, "uppercase"], [1, "absolute", "left-4", "top-4", 3, "click", "size", "icon", "variant", "accentColor", "hidden"], [1, "absolute", "right-4", "top-4", 3, "click", "size", "icon", "variant", "accentColor", "hidden"], [1, "absolute", "w-full", "top-16", "bottom-0", "lg:rounded-b-xl", "overflow-hidden"]], template: function ApUiFramePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "ap-button", 4);
      \u0275\u0275listener("click", function ApUiFramePageComponent_Template_ap_button_click_5_listener() {
        return ctx.back.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ap-button", 5);
      \u0275\u0275listener("click", function ApUiFramePageComponent_Template_ap_button_click_6_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275projection(8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.header());
      \u0275\u0275advance();
      \u0275\u0275property("size", "small")("icon", "back-2-line")("variant", "outlined-rounded")("accentColor", "zinc")("hidden", !ctx.enableBack());
      \u0275\u0275attribute("data-testid", ctx.id() + "-window-back");
      \u0275\u0275advance();
      \u0275\u0275property("size", "small")("icon", "x-mark")("variant", "outlined-rounded")("accentColor", "zinc")("hidden", !ctx.enableClose());
      \u0275\u0275attribute("data-testid", ctx.id() + "-window-close");
    }
  }, dependencies: [ApButtonComponent, CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-ui-frame-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApUiFramePageComponent, [{
    type: Component,
    args: [{ selector: "ap-ui-frame-page", imports: [ApButtonComponent, CommonModule], template: `<div
  class="relative flex size-full popup-overlay justify-center items-center "
>
  <div
    class="relative size-full bg-zinc-800 border-zinc-500 lg:border-2 lg:rounded-xl lg:shadow-xl lg:max-w-5xl lg:max-h-[50rem] transition-all"
  >
    <div
      class="absolute w-full flex items-center justify-center h-16 lg:rounded-t-xl bg-zinc-900"
    >
      <h1 class="uppercase">{{ header() }}</h1>
    </div>

    <ap-button
      class="absolute left-4 top-4"
      [size]="'small'"
      [icon]="'back-2-line'"
      [variant]="'outlined-rounded'"
      [accentColor]="'zinc'"
      [hidden]="!enableBack()"
      [attr.data-testid]="id() + '-window-back'"
      (click)="back.emit()"
    />

    <ap-button
      class="absolute right-4 top-4"
      [size]="'small'"
      [icon]="'x-mark'"
      [variant]="'outlined-rounded'"
      [accentColor]="'zinc'"
      [hidden]="!enableClose()"
      [attr.data-testid]="id() + '-window-close'"
      (click)="close.emit()"
    />

    <div
      class="absolute w-full top-16 bottom-0 lg:rounded-b-xl overflow-hidden"
    >
      <ng-content></ng-content>
    </div>
  </div>
</div>
`, styles: ["/* src/app/components/ap-ui-frame-page/ap-ui-frame-page.component.css */\n:host {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-ui-frame-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApUiFramePageComponent, { className: "ApUiFramePageComponent", filePath: "src/app/components/ap-ui-frame-page/ap-ui-frame-page.component.ts", lineNumber: 11 });
})();

// src/app/services/datacollector/gacollector.interface.ts
var TO_GA_ID = {
  // 音效/音樂
  MusicSwitch: "MusicSwitch",
  SoundSwitch: "SoundSwitch",
  VibrationSwitch: "VibrationSwitch",
  // History
  HistoryPageStayTime: "HistoryPageStayTime",
  HistorySortWithToday: "HistorySortWithToday",
  HistorySortWith7Days: "HistorySortWith7Days",
  HistorySortWithCustom: "HistorySortWithCustom",
  HistoryWinLose: "HistoryWinLose",
  HistoryReplayBySelectedTicket: "HistoryReplayBySelectedTicket",
  // Info
  InfoPageGuide: "InfoPageGuide",
  InfoPagePayTable: "InfoPagePayTable",
  InfoPageFeature: "InfoPageFeature",
  // AutoSpin
  AutoSpin10: "AutoSpin10",
  AutoSpin50: "AutoSpin50",
  AutoSpin100: "AutoSpin100",
  AutoSpin300: "AutoSpin300",
  AutoSpinInfinity: "AutoSpinInfinity",
  // Buy Feature
  BuyFeatureStayTime: "BuyFeatureStayTime",
  PlayWithBuyFeature: "PlayWithBuyFeature",
  PlayWithBuyFeatureDemo: "PlayWithBuyFeatureDemo",
  PlayWithDoubleChance: "PlayWithDoubleChance",
  // Spin
  SpinResult: "SpinResult",
  PlayRounds: "PlayRounds",
  IntoFreeGame: "IntoFreeGame",
  DoGameSkip: "DoGameSkip",
  // Bet
  CashBetIndex: "CashBetIndex",
  PromoBetIndex: "PromoBetIndex",
  // Download
  DownloadTime: "DownloadTime",
  DownloadFinishClickToMainGame: "DownloadFinishClickToMainGame",
  // CashDrop
  CashDropLoginCampaignInfoPage: "CashDropLoginCampaignInfoPage",
  CashDropCloseBetNotEnoughButton: "CashDropCloseBetNotEnoughButton",
  CashDropInfoPrize: "CashDropInfoPrize",
  CashDropInfoWinner: "CashDropInfoWinner",
  CashDropInfoWinnerChangeSort: "CashDropInfoWinnerChangeSort",
  CashDropInfoRule: "CashDropInfoRule",
  CashDropChangeCampaign: "CashDropChangeCampaign",
  BonusWalletCampaignDialog: "BonusWalletCampaignDialog",
  // Reward System
  RSIconButton: "RSIconButton",
  RSVIPPrivilegeButton: "RSVIPPrivilegeButton",
  RSVIPGuidelineButton: "RSVIPGuidelineButton",
  RSVIPPartiallyAvailableButton: "RSVIPPartiallyAvailableButton",
  RSVIPNextLevelButton: "RSVIPNextLevelButton",
  RSVIPButton: "RSVIPButton",
  RSVIPHistory: "RSVIPHistory",
  RSStoreButton: "RSStoreButton",
  RSStoreMyItemsButton: "RSStoreMyItemsButton",
  RSStoreNotAvailabileItemsButton: "RSStoreNotAvailabileItemsButton",
  RSStoreSelectableItemsButton: "RSStoreSelectableItemsButton",
  RSStoreHistoryButton: "RSStoreHistoryButton",
  RSStoreItemHistoryButton: "RSStoreItemHistoryButton",
  RSStoreUseMyItem: "RSStoreUseMyItem",
  RSStoreRecommandGameButton: "RSStoreRecommandGameButton",
  RSLuckyWheelButton: "RSStoreLuckyWheelButton",
  RSLuckyWheelTicketButton: "RSStoreLuckyWheelTicketButton",
  RSLuckyWheelHistoryButton: "RSStoreLuckyWheelHistoryButton",
  RSLuckyWheelSpinButton: "RSLuckyWheelSpinButton",
  RSHistoryButton: "RSHistoryButton",
  RSHistoryChangeTypeButton: "RSHistoryChangeTypeButton"
};
var InfoTabGAMap = {
  "Pay Table": TO_GA_ID.InfoPagePayTable,
  "Feature": TO_GA_ID.InfoPageFeature,
  "Guide": TO_GA_ID.InfoPageGuide
};
var HistoryDateOptionGAMap = {
  "today": TO_GA_ID.HistorySortWithToday,
  "last7days": TO_GA_ID.HistorySortWith7Days,
  "custom": TO_GA_ID.HistorySortWithCustom
};

export {
  ApUiFramePageComponent,
  TO_GA_ID,
  InfoTabGAMap,
  HistoryDateOptionGAMap
};
//# sourceMappingURL=chunk-3FMKOJKK.js.map
