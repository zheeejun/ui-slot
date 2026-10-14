import {
  ApOgHistoryDetailChickenComponent,
  ApOgHistoryDetailTopComponent
} from "./chunk-BN2VWTMK.js";
import "./chunk-74H6U7EF.js";
import "./chunk-47SOIXJB.js";
import "./chunk-H6P7MZH6.js";
import "./chunk-5KYQQMTR.js";
import "./chunk-OW2FH27N.js";
import "./chunk-4OJJGH2R.js";
import "./chunk-6XO7DG7K.js";
import {
  ActivatedRoute
} from "./chunk-YG42UXQC.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import "./chunk-MTOHY3QQ.js";
import "./chunk-3HIHH7J6.js";
import "./chunk-YL37OG34.js";
import {
  MoneyText,
  calc,
  dec
} from "./chunk-TIGXKRQH.js";
import {
  ClientSessionService
} from "./chunk-B2M5HODU.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-QGU3BS3L.js";

// src/app/layouts/layout-bo/layout-bo.component.ts
function LayoutBoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 6);
  }
}
var LayoutBoComponent = class _LayoutBoComponent {
  route = inject(ActivatedRoute);
  session = inject(ClientSessionService);
  http = inject(HttpClient);
  // 網址參數
  platform = signal(null);
  brand = signal(null);
  site = signal(null);
  ticket = signal(null);
  encoderequired = signal(null);
  isLoading = signal(true);
  isDetailThemeDark = signal(false);
  item = signal(null);
  balanceNew = signal(null);
  balanceOld = signal(null);
  displayBet = signal(0);
  isWin = signal(true);
  win = signal(0);
  eventString = signal("{}");
  seed = signal({
    server_seed: "",
    server_seed_hash: "",
    client_seed: ""
  });
  constructor() {
    const assetUrl = window.location.origin + "/report/gameresult/detail";
    this.session.setAssetUrl(assetUrl);
  }
  ngOnInit() {
    const queryParamMap = this.route.snapshot.queryParamMap;
    this.platform.set(queryParamMap.get("platform"));
    this.brand.set(queryParamMap.get("brand"));
    this.site.set(queryParamMap.get("site"));
    this.ticket.set(queryParamMap.get("ticketNo"));
    this.encoderequired.set(queryParamMap.get("encoderequired"));
    this.fetchHistoryResult();
  }
  fetchHistoryResult() {
    const apiUrl = window.location.origin + "/web/history/ticket/result";
    const params = new HttpParams().set("platform", this.platform() ?? "").set("ticketNo", this.ticket() ?? "");
    this.isLoading.set(true);
    this.http.get(apiUrl, { params }).subscribe((data) => {
      calc.amountRatio = Number(data.AmountRatio) ?? 1;
      Object.freeze(calc);
      dec.decimalPlaces = Number(data.DecimalPlaces) ?? 3;
      dec.disableComma = data.DisableComma === "1" ? true : false;
      Object.freeze(dec);
      MoneyText.currencySymbol = data.CurrencySymbol ?? "";
      Object.freeze(MoneyText);
      this.isLoading.set(false);
      this.setData(data);
    });
  }
  setData(data) {
    const balanceAfter = calc.s2c(Number(data.HistoryDetailData.info.after_balance) ?? 0);
    const balanceBefore = calc.s2c(Number(data.HistoryDetailData.info.before_balance) ?? 0);
    const bet = calc.s2c(Number(data.HistoryTicketData.bet) ?? 0);
    const win = calc.s2c(Number(data.HistoryTicketData.win) ?? 0);
    const isWin = win > 0;
    this.balanceNew.set(balanceAfter);
    this.balanceOld.set(balanceBefore);
    this.displayBet.set(bet);
    this.isWin.set(isWin);
    this.win.set(win);
    const plates = data.HistoryDetailData.result.main_game?.plate;
    this.eventString.set(plates[0].event ?? "{}");
    this.seed.set(data.HistoryDetailData.seed);
  }
  clickCopyTransaction(item, event) {
  }
  static \u0275fac = function LayoutBoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutBoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutBoComponent, selectors: [["layout-bo"]], decls: 7, vars: 12, consts: [[1, "flex", "size-full", "flex-col", "mx-auto", "bg-zinc-900"], [1, "shrink-0", "px-3", "sm:px-6", "w-full", "max-w-4xl", "mx-auto", "sm:mt-2"], [3, "ticketCopyClicked", "isDetailThemeDark", "ticket", "balanceNew", "balanceOld", "bet", "isWin", "win"], [1, "flex-1", "relative", "overflow-hidden", "overflow-y-auto"], [1, "px-3", "sm:px-6", "w-full", "max-w-4xl", "mx-auto", "pt-4", "pb-4"], [3, "eventString", "seed", "isWin", "enableProvableLink"], [1, "absolute", "inset-0", "bg-black/50"]], template: function LayoutBoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ap-og-history-detail-top", 2);
      \u0275\u0275listener("ticketCopyClicked", function LayoutBoComponent_Template_ap_og_history_detail_top_ticketCopyClicked_2_listener($event) {
        return ctx.item() && ctx.clickCopyTransaction(ctx.item(), $event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "ap-og-history-detail-chicken", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(6, LayoutBoComponent_Conditional_6_Template, 1, 0, "ap-loading-overlay", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("isDetailThemeDark", ctx.isDetailThemeDark())("ticket", ctx.ticket() || "")("balanceNew", ctx.balanceNew())("balanceOld", ctx.balanceOld())("bet", ctx.displayBet())("isWin", ctx.isWin())("win", ctx.win());
      \u0275\u0275advance(3);
      \u0275\u0275property("eventString", ctx.eventString())("seed", ctx.seed())("isWin", ctx.isWin())("enableProvableLink", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 6 : -1);
    }
  }, dependencies: [
    ApOgHistoryDetailTopComponent,
    ApOgHistoryDetailChickenComponent,
    ApLoadingOverlayComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n/*# sourceMappingURL=layout-bo.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutBoComponent, [{
    type: Component,
    args: [{ selector: "layout-bo", imports: [
      ApOgHistoryDetailTopComponent,
      ApOgHistoryDetailChickenComponent,
      ApLoadingOverlayComponent
    ], template: `<div class="flex size-full flex-col mx-auto bg-zinc-900">
  <!-- Header + Top Bar: unified card -->
  <div class="shrink-0 px-3 sm:px-6 w-full max-w-4xl mx-auto sm:mt-2">
    <ap-og-history-detail-top
      [isDetailThemeDark]="isDetailThemeDark()"
      [ticket]="ticket() || ''"
      [balanceNew]="balanceNew()"
      [balanceOld]="balanceOld()"
      [bet]="displayBet()"
      [isWin]="isWin()"
      [win]="win()"
      (ticketCopyClicked)="item() && clickCopyTransaction(item()!, $event)"
    />
  </div>

  <!-- Main Content: Default variant - Reel and Win Details -->
  <div class="flex-1 relative overflow-hidden overflow-y-auto">
    <div class="px-3 sm:px-6 w-full max-w-4xl mx-auto pt-4 pb-4">
      <ap-og-history-detail-chicken
        [eventString]="eventString()"
        [seed]="seed()"
        [isWin]="isWin()"
        [enableProvableLink]="false"
      />
    </div>
  </div>
</div>

@if (isLoading()) { <ap-loading-overlay class="absolute inset-0 bg-black/50" />}
`, styles: ["/* src/app/layouts/layout-bo/layout-bo.component.css */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n/*# sourceMappingURL=layout-bo.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutBoComponent, { className: "LayoutBoComponent", filePath: "src/app/layouts/layout-bo/layout-bo.component.ts", lineNumber: 25 });
})();
export {
  LayoutBoComponent
};
//# sourceMappingURL=chunk-MKFAGYLF.js.map
