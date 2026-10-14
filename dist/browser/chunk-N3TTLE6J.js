import {
  GameIframeCtrlService
} from "./chunk-NMZ7HZYU.js";
import {
  AppI18nService
} from "./chunk-MTOHY3QQ.js";
import {
  ApButtonComponent
} from "./chunk-3HIHH7J6.js";
import {
  ClientSessionService
} from "./chunk-B2M5HODU.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  Injectable,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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

// src/app/services/info-ctrl/info-ctrl.data.ts
var featureEntriesData = [
  {
    category: "title",
    position: "left",
    content: "Cascading Reels"
  },
  {
    category: "content",
    position: "left",
    content: "Winning combinations will be removed, and new symbols fall from above to fill the reels that can possibly make consecutive wins. The cascade process will continue till no more wins are achieved."
  },
  {
    category: "content",
    position: "left",
    content: "Players have a chance to win consecutive prizes by cascading reels."
  },
  {
    category: "title",
    position: "center",
    content: "Wild"
  },
  {
    category: "image",
    position: "center",
    content: "bf1.png"
  },
  {
    category: "content",
    position: "left",
    content: "Wild substitute all symbols except Clay Pot and Pinata Board."
  },
  {
    category: "title",
    position: "center",
    content: "Clay Pot"
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p1.png"
  },
  {
    category: "content",
    position: "left",
    content: "Clay Pot appears with a random prize of 0.2 to 5 times the total bet, then the Clay Pot opens to reveal 0 to 3 Bat symbols randomly."
  },
  {
    category: "title",
    position: "center",
    content: "Pinata Board"
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p2.png"
  },
  {
    category: "content",
    position: "left",
    content: "If Pinata Board and Clay Pot appear at the same time, each Pinata Board collect the prize on all the Clay Pots, then player wins prize from all the Pinata Board."
  },
  {
    category: "content",
    position: "left",
    content: "If Pinata Board and Bat symbols appear at the same time, Pinata Board collect all the Bat symbols. Each Pinata Board collect at most 6 Bat symbols."
  },
  {
    category: "content",
    position: "left",
    content: "The first three Bat symbols collected by a Pinata Board are blue, and the fourth to sixth Bat symbol collected turn into red Bat symbols."
  },
  {
    category: "content",
    position: "left",
    content: "When there are multiple Pinata Boards and Bat symbols, each Pinata Board will collect at most 3 Bat symbols by order first, then Pinata Board collect remaining Bat symbols by order if there are still uncollected Bat symbols."
  },
  {
    category: "content",
    position: "left",
    content: "Order of collecting Bat symbols with multiple Pinata Boards."
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p3.jpg"
  },
  {
    category: "title",
    position: "center",
    content: "Bonus Game"
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p4.png"
  },
  {
    category: "content",
    position: "left",
    content: "The first order Pinata Board collects 1 / 2 / 3 / 4 / 5 / 6 Bat symbols triggers 5 / 6 / 7 / 8 / 9 / 10 Bonus Game respectively."
  },
  {
    category: "content",
    position: "left",
    content: "When all Pinata Boards collect 6 Bat symbols, but there are still uncollected Bat symbol, each remaining Bat symbol will randomly convert into 1 or 2 Bonus Game spins."
  },
  {
    category: "content",
    position: "left",
    content: "When Bonus Game is triggered, all Pinata Boards on the reels are brought into the Bonus Game. Clay Pot, Yellow Candy, Purple Candy, Green Candy, Red Candy or nothing may appears on the reels in Bonus Game."
  },
  {
    category: "content",
    position: "left",
    content: "The number and color of Bat symbols collected by the first order Pinata Board determine the number of rows and color of the Star Pinatas above the reels."
  },
  {
    category: "content",
    position: "left",
    content: "1 / 2 / 3 or more Bat symbols collected by the first order Pinata Board activate 1 / 2 / 3 rows of the Star Pinata respectively."
  },
  {
    category: "content",
    position: "left",
    content: "A blue Bat symbol activate a row of Star Pinatas that contains yellow or blue Star Pinatas randomly. A red Bat symbol activate a row of Star Pinatas that contains yellow, blue or red Star Pinatas randomly"
  },
  {
    category: "content",
    position: "left",
    content: "Clay Pots stay on the reels in the Bonus Game untill be removed by Yellow Candy."
  },
  {
    category: "content",
    position: "left",
    content: "Each blue Bat symbol collected by Pinata Board in Bonus Game opens a yellow or blue Star Pinatas randomly. Each red Bat symbol collected by Pinata Board in Bonus Game opens a yellow or red Star Pinatas randomly."
  },
  {
    category: "content",
    position: "left",
    content: "When a Pinata Board collects 3 red Bat symbols, all Star Pinatas are opened."
  },
  {
    category: "content",
    position: "left",
    content: "The player wins 1 to 5 Bonus Game spins randomly when opening a yellow Star Pinata."
  },
  {
    category: "content",
    position: "left",
    content: "The player wins a random prize of 0.8 to 25 times the total bet when opening a blue Star Pinata."
  },
  {
    category: "content",
    position: "left",
    content: "The prize of a random Clay Pot is multiplied by 2 to 10 times randomly when opening a red Star Pinata."
  },
  {
    category: "content",
    position: "left",
    content: "When all Pinata Boards collect 6 Bat symbols, but there are still uncollected Bat symbol, one remaining Bat symbol will convert into a new Pinata Board at random position. Then the new Pinata Board continue to collect the remaining Bat symbols."
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p5.png"
  },
  {
    category: "content",
    position: "left",
    content: "Yellow Candy remove all Clay Pots and convert into a Clay Pot with the prize that is the sum of all removed Clay Pots."
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p6.png"
  },
  {
    category: "content",
    position: "left",
    content: "Purple Candy makes all Clay Pot prize multiply by 1.2 and convert into a Clay Pot with a random prize of 0.2 to 5 times the total bet."
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p7.png"
  },
  {
    category: "content",
    position: "left",
    content: "Green Candy convert into a Clay Pot with the prize that is the highest prize among the top, bottom, left, right adjacent Clay Pots."
  },
  {
    category: "image",
    position: "center",
    content: "info_feature_p8.png"
  },
  {
    category: "content",
    position: "left",
    content: "Red Candy convert into a Clay Pot with the prize that is the sum of all other Clay Pots."
  },
  {
    category: "content",
    position: "left",
    content: "When multiple different Candies appear at the same time, the Candies activate by the order of Green, Purple, Red and Yellow. When multiple same Candies appear at the same time, the Candies activate by the order of top to bottom, then left to right."
  },
  {
    category: "content",
    position: "left",
    content: "When all position appear Pinata Boards and Clay Pots, Pinata Boards convert into random Candies and then activate. The Pinata Boards convert by the order of top to bottom, then left to right."
  },
  {
    category: "content",
    position: "left",
    content: "Bonus Game ends when all position appear Clay Pots or there is no remaining Bonus Game spin."
  },
  {
    category: "content",
    position: "left",
    content: " When Bonus Game ends, the Pinata Boards convert into random Candies and then activate. The Pinata Boards convert by the order of top to bottom, then left to right. After all Candies activate, the player wins prize of all Clay Pots."
  },
  {
    category: "content",
    position: "left",
    content: "Bonus Game is played at the same bet level as the spin that triggered the Bonus Game feature."
  },
  {
    category: "content",
    position: "left",
    content: "Bonus Game wins is awarded to the play after the round completes."
  }
];

// src/app/services/info-ctrl/info-ctrl.service.ts
var InfoCtrlService = class _InfoCtrlService {
  appI18n = inject(AppI18nService);
  session = inject(ClientSessionService);
  game = inject(GameIframeCtrlService);
  featureEntries = computed(() => {
    const data = this.appI18n.getGameWordList();
    const entries = Object.entries(data || {}).filter(([key]) => key.startsWith("info_feature_")).map(([, value]) => this.parseInfoEntry(value)).filter((entry) => !!entry);
    return entries.length > 0 ? entries : featureEntriesData;
  });
  paytableEntries = computed(() => {
    const data = this.appI18n.getGameWordList();
    const entries = Object.entries(data || {}).filter(([key]) => key.startsWith("info_paytable_")).map(([, value]) => this.parseInfoEntry(value)).filter((entry) => !!entry);
    return entries.length > 0 ? entries : [];
  });
  gameId = this.session.gameId || "10087";
  infoFolder = computed(() => {
    const customGamekey = this.customGamekey();
    return customGamekey ? `${customGamekey}_${this.gameId}` : this.gameId;
  });
  assetUrl = computed(() => `${this.session.assetUrl}/system/Info/${this.infoFolder()}`);
  customGamekey = computed(() => this.game.customGameKey());
  entryMap = [
    "title_left",
    "title_center",
    "title_right",
    "subtitle_left",
    "subtitle_center",
    "subtitle_right",
    "image_left",
    "image_center",
    "image_right",
    "content_left",
    "content_center",
    "content_right"
  ];
  parseInfoEntry(value) {
    const match = value.split("@");
    if (!match)
      return null;
    const index = Number(match[0]);
    const prefix = this.entryMap[index];
    if (!prefix)
      return null;
    let [category, position] = prefix.split("_");
    let content = match[1];
    if (content === "info_feature_p99.jpg")
      category = "buyFeature";
    return {
      category,
      position,
      content
    };
  }
  getImageUrl(fileName) {
    if (fileName === "info_feature_p99.jpg") {
      return this.assetUrl() + "/" + fileName;
    }
    return this.assetUrl() + "/en/" + fileName;
  }
  static \u0275fac = function InfoCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InfoCtrlService, factory: _InfoCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoCtrlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ApUiFramePageComponent,
  TO_GA_ID,
  InfoTabGAMap,
  HistoryDateOptionGAMap,
  InfoCtrlService
};
//# sourceMappingURL=chunk-N3TTLE6J.js.map
