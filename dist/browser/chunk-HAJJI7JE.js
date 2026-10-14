import {
  ApHistoryPopupShareComponent,
  ApIconIncDecComponent
} from "./chunk-2CCP266M.js";
import {
  ClickOutsideDirective,
  InfoCtrlService
} from "./chunk-S5BUS6WA.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-W2PA37WH.js";
import {
  ApHistoryCalenderComponent,
  ApHistoryListComponent,
  ApTabMenuTextComponent
} from "./chunk-WKKSI4JZ.js";
import {
  HistoryCtrlService
} from "./chunk-M7JP5DRR.js";
import {
  ApSelectComponent
} from "./chunk-V4GGUMNZ.js";
import {
  GACollectorService,
  LeaderBoardService
} from "./chunk-JGNZAH3T.js";
import {
  HistoryReplayService,
  HistoryReplayViewerComponent
} from "./chunk-GORS6YCV.js";
import {
  NavigatorShareService
} from "./chunk-DODGKEVZ.js";
import {
  ApBfCardFeatureComponent,
  ApHistoryPopupReplayComponent
} from "./chunk-MMAYEOJZ.js";
import {
  ApIconAutoplayCircleComponent,
  ApIconHoldTurboSpinComponent,
  ApIconSpinComponent,
  ApIconTurboCircleComponent
} from "./chunk-XYMPOXOA.js";
import {
  ApUiFramePageComponent,
  HistoryDateOptionGAMap,
  InfoTabGAMap,
  TO_GA_ID
} from "./chunk-3FMKOJKK.js";
import {
  takeUntilDestroyed
} from "./chunk-COCIR4RJ.js";
import {
  AppI18nPipe
} from "./chunk-7GQKM4M3.js";
import {
  ApUiFramePopupComponent
} from "./chunk-HUKCMLYY.js";
import {
  BaseSymbolTextureService
} from "./chunk-AYE6H5VR.js";
import {
  MoneyTextPipe
} from "./chunk-U7TK2FIU.js";
import {
  BottomPanelService
} from "./chunk-MQEPEO5W.js";
import {
  PlayerWalletService,
  isHistoryReplaySupported
} from "./chunk-5GFZDTRR.js";
import {
  ApWebBase,
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-OW6577YR.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  ApWebReplaySessionKey
} from "./chunk-MLWU5HFS.js";
import {
  ApButtonComponent
} from "./chunk-VX4L3GZI.js";
import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  AppInterfaceService
} from "./chunk-TLQLKLDD.js";
import {
  LoggerService,
  MoneyText,
  dec,
  decimal_default,
  safeParse
} from "./chunk-CFCPEQLG.js";
import {
  ClientSessionService
} from "./chunk-54ITVL2G.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgIf
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DestroyRef,
  ViewChild,
  __async,
  computed,
  effect,
  firstValueFrom,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-QGU3BS3L.js";

// src/app/pages/history-detail-reward/history-detail-reward.component.ts
function HistoryDetailRewardComponent_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.mainPrize()), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.mysteryPrize()), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_15_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "moneyText");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.balanceNew()), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_15_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "moneyText");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.balanceOld()), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
    \u0275\u0275elementStart(1, "div", 14)(2, "div")(3, "h6", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "h4", 17);
    \u0275\u0275conditionalCreate(7, HistoryDetailRewardComponent_Conditional_15_Conditional_7_Template, 2, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div")(9, "h6", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h4", 18);
    \u0275\u0275conditionalCreate(12, HistoryDetailRewardComponent_Conditional_15_Conditional_12_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "h6", 15);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 16);
    \u0275\u0275conditionalCreate(17, HistoryDetailRewardComponent_Conditional_15_Conditional_17_Template, 3, 3, "h4", 19);
    \u0275\u0275conditionalCreate(18, HistoryDetailRewardComponent_Conditional_15_Conditional_18_Template, 3, 3, "h5", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-start px-2 py-4 text-center sm:px-4 sm:border-b-0 border-r sm:border-r rounded-bl-2xl sm:rounded-bl-2xl " + (ctx_r0.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.mainPrizeLabel(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.mainPrize() !== null ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-start px-2 py-4 text-center sm:px-4 sm:border-b-0 sm:border-r " + (ctx_r0.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.mysteryPrizeLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.mysteryPrize() !== null ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 col-span-2 border-t sm:col-span-1 sm:border-l sm:border-t-0 sm:border-r-0 sm:border-l-0 rounded-br-2xl rounded-bl-2xl sm:rounded-br-2xl sm:rounded-bl-none " + (ctx_r0.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.balanceTitle(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.balanceNew() !== null ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.balanceOld() !== null ? 18 : -1);
  }
}
function HistoryDetailRewardComponent_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.campaignBonusBalance()), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.campaignMaxWithdraw()), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_16_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.campaignAmount()), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
    \u0275\u0275elementStart(1, "div", 14)(2, "div")(3, "h6", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275conditionalCreate(6, HistoryDetailRewardComponent_Conditional_16_Conditional_6_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h6", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h4", 21);
    \u0275\u0275conditionalCreate(11, HistoryDetailRewardComponent_Conditional_16_Conditional_11_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "h6", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h4", 18);
    \u0275\u0275conditionalCreate(16, HistoryDetailRewardComponent_Conditional_16_Conditional_16_Template, 2, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 border-r sm:border-r rounded-bl-2xl sm:rounded-bl-2xl " + (ctx_r0.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.bonusBalanceLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.campaignBonusBalance() !== null ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 border-r sm:border-r rounded-bl-2xl sm:rounded-bl-2xl " + (ctx_r0.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.maxWithdrawLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.campaignMaxWithdraw() !== null ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 col-span-2 border-t sm:col-span-1 sm:border-l sm:border-t-0 sm:border-r-0 sm:border-l-0 rounded-br-2xl rounded-bl-2xl sm:rounded-br-2xl sm:rounded-bl-none " + (ctx_r0.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.amountLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.campaignAmount() !== null ? 16 : -1);
  }
}
function HistoryDetailRewardComponent_Conditional_17_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 34);
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeOut", void 0);
  }
}
function HistoryDetailRewardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "div", 25)(5, "div", 26);
    \u0275\u0275text(6, " Reward Details ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27)(8, "table", 28)(9, "thead")(10, "tr", 29)(11, "th", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 30);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody")(16, "tr", 31)(17, "td", 32);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 33);
    \u0275\u0275text(20, " Running ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tr")(22, "td", 32);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 33);
    \u0275\u0275text(25, " Settled ");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275conditionalCreate(26, HistoryDetailRewardComponent_Conditional_17_Conditional_26_Template, 1, 1, "ap-loading-overlay", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.dateLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.runningDateTime(), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.settledDateTime(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isLoading() ? 26 : -1);
  }
}
function HistoryDetailRewardComponent_Conditional_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.campaignName(), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.expiryDateLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.campaignExpiryDate(), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_18_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.campaignTurnoverRequirement()), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_18_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.campaignMinWithdraw()), " ");
  }
}
function HistoryDetailRewardComponent_Conditional_18_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 34);
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeOut", void 0);
  }
}
function HistoryDetailRewardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "div", 25)(5, "h6", 35);
    \u0275\u0275text(6, " Reward Details ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27)(8, "table", 36)(9, "tbody")(10, "tr", 37)(11, "td", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 39);
    \u0275\u0275conditionalCreate(14, HistoryDetailRewardComponent_Conditional_18_Conditional_14_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, HistoryDetailRewardComponent_Conditional_18_Conditional_15_Template, 5, 2, "tr", 37);
    \u0275\u0275elementStart(16, "tr", 37)(17, "td", 38);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 40);
    \u0275\u0275conditionalCreate(20, HistoryDetailRewardComponent_Conditional_18_Conditional_20_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tr")(22, "td", 38);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 40);
    \u0275\u0275conditionalCreate(25, HistoryDetailRewardComponent_Conditional_18_Conditional_25_Template, 2, 3);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275conditionalCreate(26, HistoryDetailRewardComponent_Conditional_18_Conditional_26_Template, 1, 1, "ap-loading-overlay", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.nameLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.campaignName() !== null ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showExpiryDate() ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.turnoverRequirementLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.campaignTurnoverRequirement() !== null ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.minWithdrawLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.campaignMinWithdraw() !== null ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isLoading() ? 26 : -1);
  }
}
var HistoryDetailRewardComponent = class _HistoryDetailRewardComponent {
  i18n = inject(AppI18nService);
  historyCtrl = inject(HistoryCtrlService);
  api = inject(AppInterfaceService);
  destroyRef = inject(DestroyRef);
  locale = inject(ClientSessionService).locale;
  isLoading = signal(true);
  currency = computed(() => this.api.currencySymbol());
  item = input(null);
  ticket = computed(() => this.item()?.transaction || "N/A");
  // Table Headers
  betTitle = this.i18n.computed("history_bet", "Bet");
  balanceTitle = this.i18n.computed("history_balance", "Balance");
  winTitle = this.i18n.computed("history_win", "Win");
  // bet / balance / win values
  winDown = signal(null);
  balanceOld = signal(null);
  balanceNew = signal(null);
  // CashDrop Detail Labels
  dateLabel = this.i18n.computed("history_date", "Date");
  statusLabel = this.i18n.computed("history_jackpot_status", "Status");
  mainPrizeLabel = this.i18n.computed("cashdrop_D2_3", "Main Prize");
  mysteryPrizeLabel = this.i18n.computed("cashdrop_D2_4", "Mystery Prize");
  // CashDrop Detail Values
  mainPrize = signal(null);
  mysteryPrize = signal(null);
  runningDateTime = signal("");
  settledDateTime = signal("");
  // Campaign Detail Labels
  nameLabel = this.i18n.computed("promo_name", "Name");
  amountLabel = this.i18n.computed("history_withdraw_amount", "Withdraw Amount");
  expiryDateLabel = this.i18n.computed("promo_expire_date", "Expiry Date:");
  turnoverRequirementLabel = this.i18n.computed("TurnoverRequirement_Text", "Turnover Requirement:");
  bonusBalanceLabel = this.i18n.computed("promo_balance", "Bonus Balance");
  maxWithdrawLabel = this.i18n.computed("MaxWithdraw_Text", "Max Withdraw:");
  minWithdrawLabel = this.i18n.computed("MinWithdraw_Text", "Min Withdraw:");
  // Campaign Detail Values
  campaignName = signal("");
  campaignAmount = signal(null);
  campaignExpiryDate = signal("");
  campaignTurnoverRequirement = signal(null);
  campaignBonusBalance = signal(null);
  campaignMaxWithdraw = signal(null);
  campaignMinWithdraw = signal(null);
  // Display Label
  campaignRewardLabel = this.i18n.computed("history_bonus_withdraw", "Bonus Withdraw");
  cashDropRewardLabel = this.i18n.computed("cashdrop_D1_1", "CashDrop Reward");
  displayName = computed(() => {
    const item = this.item();
    if (!item)
      return "";
    if (item.rewardType === "CashDrop Reward")
      return this.cashDropRewardLabel();
    if (item.rewardType === "Bonus Withdraw")
      return this.campaignRewardLabel();
    return "";
  });
  isCashDrop = computed(() => this.item()?.rewardType === "CashDrop Reward");
  isCampaign = computed(() => this.item()?.rewardType === "Bonus Withdraw");
  copyTransaction = output();
  isWinResult = computed(() => !!this.item()?.isWin);
  isDetailThemeDark = computed(() => this.item()?.detailTheme === "dark");
  showExpiryDate = signal(false);
  ngOnInit() {
    this.historyCtrl.campaignDetail$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((detail) => {
      this.campaignName.set(detail.name);
      this.campaignAmount.set(detail.amount);
      this.campaignExpiryDate.set(new Date(detail.expiryDate).toLocaleString(this.locale, { hour12: false }));
      this.campaignTurnoverRequirement.set(detail.turnoverRequirement);
      this.campaignBonusBalance.set(detail.bonusBalance);
      this.campaignMaxWithdraw.set(detail.maxWithdraw);
      this.campaignMinWithdraw.set(detail.minWithdraw);
      this.isLoading.set(false);
    });
    this.historyCtrl.cashDropDetail$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((detail) => {
      this.balanceOld.set(detail.beforeBalance);
      this.balanceNew.set(detail.afterBalance);
      this.winDown.set(detail.totalWin);
      this.mainPrize.set(detail.mainPrize);
      this.mysteryPrize.set(detail.mysteryPrize);
      this.runningDateTime.set(new Date(detail.runningTime).toLocaleString(this.locale, { hour12: false }));
      this.settledDateTime.set(new Date(detail.settledTime).toLocaleString(this.locale, { hour12: false }));
      this.isLoading.set(false);
    });
    this.historyCtrl.getHistoryDetail(this.item() || null);
  }
  clickCopyTransaction(item, event) {
    event?.stopPropagation();
    this.copyTransaction.emit(item.transaction);
  }
  static \u0275fac = function HistoryDetailRewardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryDetailRewardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryDetailRewardComponent, selectors: [["history-detail-reward"]], inputs: { item: [1, "item"] }, outputs: { copyTransaction: "copyTransaction" }, decls: 19, vars: 6, consts: [[1, "flex", "size-full", "flex-col", "mx-auto", "bg-zinc-900"], [1, "shrink-0", "px-3", "sm:px-6", "w-full", "max-w-4xl", "mx-auto", "sm:mt-2"], [1, "px-2", "py-2", "sm:px-4", "sm:py-2", "justify-center"], [1, "grid", "gap-2", "sm:grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)]", "sm:items-center", "sm:gap-6"], [1, "min-w-0", "text-center", "sm:text-left"], [1, "mt-1", "truncate", "font-medium", "text-zinc-100"], [1, "min-w-0", "text-center", "sm:justify-self-center"], [1, "inline-flex", "max-w-full", "items-center", "gap-3", "px-3", "py-1", "text-zinc-400"], [1, "flex", "shrink-0", "cursor-pointer", "items-center", "gap-1", "border-bottom-zinc", 3, "click"], ["name", "document-text", 1, "size-4", "shrink-0"], [1, "truncate"], [1, "min-w-0"], [1, "relative", "flex-1", "bg-zinc-900", "overflow-auto", "mt-4"], [1, "history-ticket-divider"], [1, "top-bar-summary", "grid", "grid-cols-2", "sm:grid-cols-3"], [1, "font-semibold", "uppercase", "tracking-wider", "text-zinc-500"], [1, "relative", "mt-2", "flex", "min-w-0", "flex-row", "items-center", "justify-center", "gap-2.5", "sm:flex-col", "sm:gap-1"], [1, "font-semibold", "text-emerald-400"], [1, "mt-2", "font-semibold", "text-emerald-400"], [1, "font-semibold", "text-white"], [1, "text-zinc-400"], [1, "mt-2", "font-semibold", "text-white"], [1, "px-3", "sm:px-6", "w-full", "max-w-4xl", "mx-auto"], [1, "history-ticket-card", "rounded-2xl", "border", "bg-zinc-900"], [1, "px-4", "py-6", "sm:px-6", "flex", "flex-col", "gap-4"], [1, "space-y-1"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-zinc-400"], [1, "overflow-hidden", "rounded-xl", "border", "border-zinc-800", "bg-zinc-950/50"], [1, "w-full", "border-collapse"], [1, "text-left"], [1, "border-b", "border-zinc-800", "px-4", "py-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-zinc-500"], [1, "border-b", "border-zinc-800"], [1, "px-4", "py-3", "text-sm", "text-zinc-400"], [1, "px-4", "py-3", "text-sm", "font-medium", "text-zinc-400"], [1, "absolute", "inset-0", "bg-zinc-900"], [1, "font-semibold", "uppercase", "tracking-wider", "text-zinc-400"], [1, "w-full", "border-collapse", "text-sm"], [1, "border-bottom-zinc"], [1, "px-4", "py-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-zinc-500"], [1, "px-4", "py-3", "text-right", "text-sm", "text-zinc-400"], [1, "px-4", "py-3", "text-right", "text-sm", "font-medium", "text-zinc-400"]], template: function HistoryDetailRewardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h5", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "button", 8);
      \u0275\u0275listener("click", function HistoryDetailRewardComponent_Template_button_click_10_listener($event) {
        return ctx.item() && ctx.clickCopyTransaction(ctx.item(), $event);
      });
      \u0275\u0275element(11, "ap-icon", 9);
      \u0275\u0275elementStart(12, "p", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(14, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, HistoryDetailRewardComponent_Conditional_15_Template, 19, 13)(16, HistoryDetailRewardComponent_Conditional_16_Template, 17, 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, HistoryDetailRewardComponent_Conditional_17_Template, 27, 5, "div", 12)(18, HistoryDetailRewardComponent_Conditional_18_Template, 27, 8, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classMap("history-ticket-card relative rounded-xl border " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.displayName(), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.ticket());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isCashDrop() ? 15 : ctx.isCampaign() ? 16 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isCashDrop() ? 17 : ctx.isCampaign() ? 18 : -1);
    }
  }, dependencies: [ApIconComponent, MoneyTextPipe, ApLoadingOverlayComponent], styles: ["\n\n.history-ticket-card[_ngcontent-%COMP%] {\n  border-color: #3f3f46;\n  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.03);\n}\n.history-ticket-divider[_ngcontent-%COMP%] {\n  position: relative;\n  border-top: 1px dashed oklch(37% 0.013 285.805);\n}\n.top-bar-summary[_ngcontent-%COMP%] {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.top-bar-summary-cell[_ngcontent-%COMP%] {\n  border-color: #3f3f46;\n}\n/*# sourceMappingURL=history-detail-reward.component.css.map */"], data: { animation: [
    trigger("fadeOut", [
      transition(":leave", [animate("300ms ease-in", style({ opacity: 0 }))])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryDetailRewardComponent, [{
    type: Component,
    args: [{ selector: "history-detail-reward", imports: [ApIconComponent, MoneyTextPipe, ApLoadingOverlayComponent], animations: [
      trigger("fadeOut", [
        transition(":leave", [animate("300ms ease-in", style({ opacity: 0 }))])
      ])
    ], template: `<div class="flex size-full flex-col mx-auto bg-zinc-900">
  <!-- Header card -->
  <div class="shrink-0 px-3 sm:px-6 w-full max-w-4xl mx-auto sm:mt-2">
    <div
      [class]="
        'history-ticket-card relative rounded-xl border ' +
        (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
      "
    >
      <!-- Name + Date/Transaction -->
      <div class="px-2 py-2 sm:px-4 sm:py-2 justify-center">
        <div
          class="grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)] sm:items-center sm:gap-6"
        >
          <div class="min-w-0 text-center sm:text-left">
            <h5 class="mt-1 truncate font-medium text-zinc-100">
              {{ displayName() }}
            </h5>
          </div>
          <div class="min-w-0 text-center sm:justify-self-center">
            <div
              class="inline-flex max-w-full items-center gap-3 px-3 py-1 text-zinc-400"
            >
              <button
                class="flex shrink-0 cursor-pointer items-center gap-1 border-bottom-zinc"
                (click)="item() && clickCopyTransaction(item()!, $event)"
              >
                <ap-icon name="document-text" class="size-4 shrink-0" />
                <p class="truncate">{{ ticket() }}</p>
              </button>
            </div>
          </div>
          <div class="min-w-0"></div>
        </div>
      </div>

      @if (isCashDrop()) {
        <!-- Top Bar: Bet (N/A), Win, Balance -->
        <div class="history-ticket-divider"></div>
        <div class="top-bar-summary grid grid-cols-2 sm:grid-cols-3">
          <!-- Main Prize -->
          <div
            [class]="
              'top-bar-summary-cell flex min-w-0 flex-col items-center justify-start px-2 py-4 text-center sm:px-4 sm:border-b-0 border-r sm:border-r rounded-bl-2xl sm:rounded-bl-2xl ' +
              (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
            "
          >
            <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
              {{ mainPrizeLabel() }}
            </h6>
            <div
              class="relative mt-2 flex min-w-0 flex-row items-center justify-center gap-2.5 sm:flex-col sm:gap-1"
            >
              <h4 class="font-semibold text-emerald-400">
                @if (mainPrize() !== null) {
                  {{ mainPrize()! | moneyText }}
                }
              </h4>
            </div>
          </div>
          <!-- Mystery Prize -->
          <div
            [class]="
              'top-bar-summary-cell flex min-w-0 flex-col items-center justify-start px-2 py-4 text-center sm:px-4 sm:border-b-0 sm:border-r ' +
              (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
            "
          >
            <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
              {{ mysteryPrizeLabel() }}
            </h6>
            <h4 class="mt-2 font-semibold text-emerald-400">
              @if (mysteryPrize() !== null) {
                {{ mysteryPrize()! | moneyText }}
              }
            </h4>
          </div>
          <!-- Balance -->
          <div
            [class]="
              'top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 col-span-2 border-t sm:col-span-1 sm:border-l sm:border-t-0 sm:border-r-0 sm:border-l-0 rounded-br-2xl rounded-bl-2xl sm:rounded-br-2xl sm:rounded-bl-none ' +
              (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
            "
          >
            <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
              {{ balanceTitle() }}
            </h6>
            <div
              class="relative mt-2 flex min-w-0 flex-row items-center justify-center gap-2.5 sm:flex-col sm:gap-1"
            >
              @if (balanceNew() !== null) {
                <h4 class="font-semibold text-white">
                  {{ balanceNew()! | moneyText }}
                </h4>
              }
              @if (balanceOld() !== null) {
                <h5 class="text-zinc-400">
                  {{ balanceOld()! | moneyText }}
                </h5>
              }
            </div>
          </div>
        </div>
      } @else if (isCampaign()) {
        <div class="history-ticket-divider"></div>
        <div class="top-bar-summary grid grid-cols-2 sm:grid-cols-3">
          <div
            [class]="
              'top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 border-r sm:border-r rounded-bl-2xl sm:rounded-bl-2xl ' +
              (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
            "
          >
            <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
              {{ bonusBalanceLabel() }}
            </h6>
            <div class="mt-2 font-semibold text-white">
              @if (campaignBonusBalance() !== null) {
                {{ campaignBonusBalance()! | moneyText }}
              }
            </div>
          </div>
          <div
            [class]="
              'top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 border-r sm:border-r rounded-bl-2xl sm:rounded-bl-2xl ' +
              (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
            "
          >
            <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
              {{ maxWithdrawLabel() }}
            </h6>
            <h4 class="mt-2 font-semibold text-white">
              @if (campaignMaxWithdraw() !== null) {
                {{ campaignMaxWithdraw()! | moneyText }}
              }
            </h4>
          </div>

          <div
            [class]="
              'top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 col-span-2 border-t sm:col-span-1 sm:border-l sm:border-t-0 sm:border-r-0 sm:border-l-0 rounded-br-2xl rounded-bl-2xl sm:rounded-br-2xl sm:rounded-bl-none ' +
              (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
            "
          >
            <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
              {{ amountLabel() }}
            </h6>
            <h4 class="mt-2 font-semibold text-emerald-400">
              @if (campaignAmount() !== null) {
                {{ campaignAmount()! | moneyText }}
              }
            </h4>
          </div>
        </div>
      }
    </div>
  </div>

  <!-- Content Area -->
  @if (isCashDrop()) {
    <div class="relative flex-1 bg-zinc-900 overflow-auto mt-4">
      <div class="px-3 sm:px-6 w-full max-w-4xl mx-auto">
        <div class="history-ticket-card rounded-2xl border bg-zinc-900">
          <div class="px-4 py-6 sm:px-6 flex flex-col gap-4">
            <div class="space-y-1">
              <div
                class="text-xs font-semibold uppercase tracking-wider text-zinc-400"
              >
                Reward Details
              </div>
            </div>

            <!-- Date status table -->
            <div
              class="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50"
            >
              <table class="w-full border-collapse">
                <thead>
                  <tr class="text-left">
                    <th
                      class="border-b border-zinc-800 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500"
                    >
                      {{ dateLabel() }}
                    </th>
                    <th
                      class="border-b border-zinc-800 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500"
                    >
                      {{ statusLabel() }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-zinc-800">
                    <td class="px-4 py-3 text-sm text-zinc-400">
                      {{ runningDateTime() }}
                    </td>
                    <td class="px-4 py-3 text-sm font-medium text-zinc-400">
                      Running
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm text-zinc-400">
                      {{ settledDateTime() }}
                    </td>
                    <td class="px-4 py-3 text-sm font-medium text-zinc-400">
                      Settled
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      @if (isLoading()) {
        <ap-loading-overlay class="absolute inset-0 bg-zinc-900" @fadeOut />
      }
    </div>
  } @else if (isCampaign()) {
    <div class="relative flex-1 bg-zinc-900 overflow-auto mt-4">
      <div class="px-3 sm:px-6 w-full max-w-4xl mx-auto">
        <div class="history-ticket-card rounded-2xl border bg-zinc-900">
          <div class="px-4 py-6 sm:px-6 flex flex-col gap-4">
            <div class="space-y-1">
              <h6 class="font-semibold uppercase tracking-wider text-zinc-400">
                Reward Details
              </h6>
            </div>

            <div
              class="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50"
            >
              <table class="w-full border-collapse text-sm">
                <tbody>
                  <tr class="border-bottom-zinc">
                    <td
                      class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500"
                    >
                      {{ nameLabel() }}
                    </td>
                    <td class="px-4 py-3 text-right text-sm text-zinc-400">
                      @if (campaignName() !== null) {
                        {{ campaignName()! }}
                      }
                    </td>
                  </tr>
                  @if (showExpiryDate()) {
                    <tr class="border-bottom-zinc">
                      <td
                        class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500"
                      >
                        {{ expiryDateLabel() }}
                      </td>
                      <td class="px-4 py-3 text-right text-sm text-zinc-400">
                        {{ campaignExpiryDate() }}
                      </td>
                    </tr>
                  }
                  <tr class="border-bottom-zinc">
                    <td
                      class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500"
                    >
                      {{ turnoverRequirementLabel() }}
                    </td>
                    <td
                      class="px-4 py-3 text-right text-sm font-medium text-zinc-400"
                    >
                      @if (campaignTurnoverRequirement() !== null) {
                        {{ campaignTurnoverRequirement()! | moneyText }}
                      }
                    </td>
                  </tr>

                  <tr>
                    <td
                      class="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500"
                    >
                      {{ minWithdrawLabel() }}
                    </td>
                    <td
                      class="px-4 py-3 text-right text-sm font-medium text-zinc-400"
                    >
                      @if (campaignMinWithdraw() !== null) {
                        {{ campaignMinWithdraw()! | moneyText }}
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      @if (isLoading()) {
        <ap-loading-overlay class="absolute inset-0 bg-zinc-900" @fadeOut />
      }
    </div>
  }
</div>
`, styles: ["/* src/app/pages/history-detail-reward/history-detail-reward.component.css */\n.history-ticket-card {\n  border-color: #3f3f46;\n  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.03);\n}\n.history-ticket-divider {\n  position: relative;\n  border-top: 1px dashed oklch(37% 0.013 285.805);\n}\n.top-bar-summary {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.top-bar-summary-cell {\n  border-color: #3f3f46;\n}\n/*# sourceMappingURL=history-detail-reward.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryDetailRewardComponent, { className: "HistoryDetailRewardComponent", filePath: "src/app/pages/history-detail-reward/history-detail-reward.component.ts", lineNumber: 24 });
})();

// src/app/pages/history-detail/history-detail.component.ts
var _c0 = ["gameIframe"];
var _c1 = (a0, a1) => ({ hidden: a0, "whitespace-nowrap": a1 });
function HistoryDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function HistoryDetailComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.replay.emit(ctx_r2.item()));
    });
    \u0275\u0275element(1, "ap-icon", 37);
    \u0275\u0275elementEnd();
  }
}
function HistoryDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function HistoryDetailComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.share.emit(ctx_r2.item()));
    });
    \u0275\u0275element(1, "ap-icon", 38);
    \u0275\u0275elementEnd();
  }
}
function HistoryDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-select", 39);
    \u0275\u0275listener("onSelect", function HistoryDetailComponent_Conditional_19_Template_ap_select_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRound($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("accentColor", "yellow")("disabled", ctx_r2.roundSelectorDisabled())("options", ctx_r2.roundOptions())("selected", ctx_r2.currentRound().toString());
  }
}
function HistoryDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function HistoryDetailComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.replay.emit(ctx_r2.item()));
    });
    \u0275\u0275element(1, "ap-icon", 37);
    \u0275\u0275elementEnd();
  }
}
function HistoryDetailComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function HistoryDetailComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.share.emit(ctx_r2.item()));
    });
    \u0275\u0275element(1, "ap-icon", 38);
    \u0275\u0275elementEnd();
  }
}
function HistoryDetailComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r2.lineBet()), " ");
  }
}
function HistoryDetailComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " N/A ");
  }
}
function HistoryDetailComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 32);
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeOut", void 0);
  }
}
function HistoryDetailComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 41);
    \u0275\u0275listener("click", function HistoryDetailComponent_Conditional_61_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clickPreRound());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("icon", "chevron-left")("size", "small")("accentColor", "yellow");
  }
}
function HistoryDetailComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 41);
    \u0275\u0275listener("click", function HistoryDetailComponent_Conditional_63_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clickNextRound());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("icon", "chevron-right")("size", "small")("accentColor", "yellow");
  }
}
var HistoryDetailComponent = class _HistoryDetailComponent {
  gameIframe;
  set iframeRef(ref) {
    this.setIframe(ref?.nativeElement);
  }
  iframe = null;
  i18n = inject(AppI18nService);
  api = inject(AppInterfaceService);
  session = inject(ClientSessionService);
  historyCtrl = inject(HistoryCtrlService);
  logger = inject(LoggerService);
  wallet = inject(PlayerWalletService);
  gameIframeCtrl = inject(GameIframeCtrlService);
  isGhana = computed(() => this.session.isGhanaUI);
  destroyRef = inject(DestroyRef);
  // Table Headers
  betTitle = this.i18n.computed(this.isGhana() ? "og_bet_info_stake" : "history_bet", "Bet");
  balanceTitle = this.i18n.computed("history_balance", "Balance");
  winTitle = this.i18n.computed("history_win", "Win");
  loseTitle = this.i18n.computed("history_lose", "Lose");
  // List Labels
  roundLabel = this.i18n.computed("history_round", "Round");
  wayLabel = this.i18n.computed("history_way", "WAY");
  kindLabel = this.i18n.computed("history_kind", "OF A KIND");
  winColumnLabel = this.i18n.computed("history_win", "WIN");
  lineLabel = this.i18n.computed("history_line_bet", " /Line");
  normalGamelabel = this.i18n.computed("history_normal_game", "Normal Spin");
  freeGameLabel = this.i18n.computedGame("buyfeature_bf_title", this.i18n.instant("history_free_game"));
  showLineBetLabel = computed(() => {
    const gameType = this.gameIframeCtrl.slotGameType();
    return gameType === "Line" || gameType === "Line_way" || gameType === "One_Line";
  });
  /** 轉圈遮蓋 */
  isLoading = signal(true);
  item = input(null);
  ticket = computed(() => this.item()?.transaction || "N/A");
  currency = computed(() => this.item()?.currency || "");
  currentBalance = computed(() => this.balanceList()[this.currentRound()] ?? null);
  currentWin = computed(() => this.winList()[this.currentRound()] ?? 0);
  /** 計算舊的餘額 */
  balanceOld = computed(() => {
    let balance = this.currentBalance();
    if (balance === null)
      return null;
    if (this.currentRound() === 0)
      balance = new decimal_default(balance).plus(this.bet()).toNumber();
    return new decimal_default(balance).minus(this.currentWin()).toNumber();
  });
  balanceNew = computed(() => this.currentBalance());
  balanceList = signal([]);
  line = computed(() => {
    return this.gameIframeCtrl.lineRule()?.length ?? null;
  });
  bet = computed(() => {
    return this.item().bet || 0;
  });
  displayBet = computed(() => {
    if (this.currentRound() === 0)
      return this.bet();
    return 0;
  });
  baseBet = computed(() => new decimal_default(this.bet()).div(this.bfRate()).toNumber());
  lineBet = computed(() => this.line() !== null ? new decimal_default(this.baseBet()).div(this.line()).toNumber() : null);
  win = computed(() => this.currentWin());
  winList = signal([]);
  isLongAmount(value) {
    if (value === null)
      return false;
    return dec.comma(value).replace(/\D/g, "").length > 9;
  }
  // Bet column
  betSummaryTitle = computed(() => this.betTitle() + (this.showLineBetLabel() ? this.lineLabel() : ""));
  // Win column
  isWinResult = computed(() => !!this.item()?.isWin);
  winSummaryTitle = computed(() => this.isWinResult() ? this.winTitle() : this.loseTitle());
  // Balance column
  balanceOldIsHidden = computed(() => this.balanceOld() === null);
  balanceNewIsHidden = computed(() => this.balanceNew() === null);
  balanceOldIsLong = computed(() => this.isLongAmount(this.balanceOld()));
  balanceNewIsLong = computed(() => this.isLongAmount(this.balanceNew()));
  isDetailThemeDark = computed(() => this.item()?.detailTheme === "dark");
  replay = output();
  share = output();
  bfMode = signal("");
  bfRate = computed(() => {
    return this.wallet.allSpinModes().find((mode) => mode.name === this.bfMode())?.rate ?? 1;
  });
  showPlateSelector = signal(false);
  /** 當前 round，從 0 開始 */
  currentRound = signal(0);
  /** 有FG就是從1~XX */
  maxRound = signal(0);
  showRoundSelector = computed(() => this.item()?.isStarred || false);
  roundSelectorDisabled = computed(() => this.isLoading() || this.maxRound() <= 1);
  /** 顯示當前 round 的數字，例如 "Round (1/3)" */
  roundNumberText = computed(() => {
    if (this.currentRound() <= 0)
      return "";
    return ` (${this.currentRound()}/${this.maxRound()})`;
  });
  //readonly defaultDoubleChanceLabel = this.i18n.computed('history_double_chance', 'Double Chance');
  //readonly defaultBuyFeatureLabel = this.i18n.computed('BuyFeature_EventCenter_Tab', 'Buy Feature');
  /** 最左上角的顯示名稱 */
  displayName = computed(() => {
    const item = this.item();
    if (!item)
      return this.normalGamelabel();
    if (item.isStarred && this.currentRound() > 0)
      return this.freeGameLabel();
    return this.normalGamelabel();
  });
  boundReceiveMessage = this.receiveMessage.bind(this);
  boundAdjustTopByWidth = this.adjustTopByWidth.bind(this);
  copyTransaction = output();
  ngOnInit() {
    window.addEventListener("message", this.boundReceiveMessage, false);
    this.historyCtrl.spinDetail$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((detail) => {
      const note = detail.result.note;
      if (note && note.length > 0) {
        const mode = safeParse(note, { mode: "" }).mode;
        this.bfMode.set(mode);
      }
      this.balanceList.set(detail.balanceList);
      this.winList.set(detail.winList);
    });
    this.historyCtrl.getHistoryDetail(this.item() || null);
  }
  ngAfterViewInit() {
    this.adjustTopByWidth();
    window.addEventListener("resize", this.boundAdjustTopByWidth);
    if (this.iframe?.contentWindow) {
      this.iframe.contentWindow.name = this.iframeName();
      this.iframe.src = this.iframeUrl();
    }
  }
  ngOnDestroy() {
    window.removeEventListener("message", this.boundReceiveMessage, false);
    window.removeEventListener("resize", this.boundAdjustTopByWidth);
  }
  setIframe(iframe) {
    if (iframe)
      this.iframe = iframe;
  }
  iframeUrl = computed(() => {
    const urlParams = new URLSearchParams();
    urlParams.set("webangular", "1");
    urlParams.set("sessionHistory", "1");
    urlParams.set("lang", this.session.language);
    const gameId = this.session.gameId?.toString() || "";
    if (this.session.remoteHost) {
      return `${this.session.remoteHost}?${urlParams.toString()}`;
    } else {
      return `/${gameId}/?${urlParams.toString()}`;
    }
  });
  iframeName = computed(() => {
    const apweb = new ApWebBase();
    apweb.setMode("ap-history");
    return apweb.toString();
  });
  clickCopyTransaction(item, event) {
    event?.stopPropagation();
    this.copyTransaction.emit(item.transaction);
  }
  /** ap-select的選項 先放入Normal Game, 再根據 maxRound 產生 roundOptions，並在 label 顯示 XxxxGame + 數字 */
  roundOptions = computed(() => {
    const options = [];
    options.push({
      value: "0",
      label: this.normalGamelabel(),
      content: [this.currency() + dec.comma(this.winList()[0])]
    });
    for (let i = 1; i <= this.maxRound(); i++) {
      options.push({
        value: i.toString(),
        label: this.freeGameLabel() + " " + i,
        content: [this.currency() + dec.comma(this.winList()[i])]
      });
    }
    return options;
  });
  /** 給ap-select使用的 */
  selectRound(value) {
    const index = parseInt(value, 10);
    if (isNaN(index))
      return;
    this.currentRound.set(index);
    this.sendMessage(createApWebMessage("ChangeHistoryPageIndex", { pageIndex: index }));
  }
  /** 控制 replay 按鈕顯示 */
  showReplayButtons = computed(() => {
    if (this.historyCtrl.forceReplayDisplayed())
      return true;
    return this.api.loginResult()?.note?.history_replay === 1 && this.item()?.replay;
  });
  /** 控制 share 按鈕顯示 */
  showShareButtons = computed(() => {
    if (this.historyCtrl.forceShareDisplayed())
      return true;
    return this.api.loginResult()?.note?.history_replay === 1 && this.item()?.replay;
  });
  isPreRoundEnabled = computed(() => this.currentRound() > 0);
  clickPreRound() {
    const pre = this.currentRound() - 1;
    if (pre < 0)
      return;
    this.currentRound.set(pre);
    this.sendMessage(createApWebMessage("ChangeHistoryPageIndex", {
      pageIndex: this.currentRound()
    }));
  }
  isNextRoundEnabled = computed(() => this.maxRound() > this.currentRound());
  clickNextRound() {
    const next = this.currentRound() + 1;
    const nextRound = next > this.maxRound() ? 0 : next;
    this.currentRound.set(nextRound);
    this.sendMessage(createApWebMessage("ChangeHistoryPageIndex", {
      pageIndex: this.currentRound()
    }));
  }
  isLocalOrigin() {
    const origin = window.location.origin;
    return origin.includes("localhost") || origin.includes("192.168");
  }
  sendMessage(message) {
    if (this.iframe?.contentWindow) {
      const targetOrigin = this.isLocalOrigin() ? "*" : window.location.origin;
      this.iframe.contentWindow.postMessage(message, targetOrigin);
    }
  }
  receiveMessage(event) {
    if (!this.isLocalOrigin() && event.origin !== window.location.origin)
      return;
    if (event.source !== this.iframe?.contentWindow)
      return;
    this.logger.iframeHistoryLog("iframe\u27A1\uFE0F:", event.data);
    const message = event.data;
    if (message.type === "HistoryDetailLoaded") {
      this.processHistoryDetailLoaded(message.content);
      return;
    }
  }
  processHistoryDetailLoaded(data) {
    this.isLoading.set(false);
    const spinResult = data.spinResult;
    this.maxRound.set(spinResult.free_game?.length || 0);
  }
  // 根據長寬比例調整 iframe 的縮放，以適應不同尺寸的螢幕
  adjustTopByWidth() {
    const width = window.innerWidth;
    const scale = width < 512 ? width / 512 : 1;
    if (this.gameIframe) {
      this.gameIframe.nativeElement.style.transform = `scale(${scale})`;
    }
  }
  static \u0275fac = function HistoryDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryDetailComponent, selectors: [["history-detail"]], viewQuery: function HistoryDetailComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gameIframe = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iframeRef = _t.first);
    }
  }, inputs: { item: [1, "item"] }, outputs: { replay: "replay", share: "share", copyTransaction: "copyTransaction" }, decls: 64, vars: 47, consts: [["gameIframe", ""], [1, "flex", "size-full", "flex-col", "mx-auto", "bg-zinc-900"], [1, "shrink-0", "px-3", "sm:px-6", "w-full", "max-w-4xl", "mx-auto", "sm:mt-2"], [1, "px-2", "py-2", "sm:px-4", "sm:py-2", "justify-center"], [1, "grid", "gap-2", "sm:grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)]", "sm:items-center", "sm:gap-6"], [1, "min-w-0", "text-center", "sm:text-left"], [1, "mt-1", "truncate", "font-medium", "text-zinc-100"], [1, "min-w-0", "text-center", "sm:justify-self-center"], [1, "space-y-1"], [1, "inline-flex", "max-w-full", "items-center", "gap-3", "px-3", "py-1", "text-zinc-400"], [1, "flex", "shrink-0", "cursor-pointer", "items-center", "justify-center", "space-x-1", "transition-colors", "border-bottom-zinc", 3, "click"], ["name", "copy", 1, "size-4", "shrink-0"], [1, "truncate"], [1, "flex", "shrink-0", "items-center", "justify-center", "cursor-pointer", "text-yellow-400", "transition-colors", "sm:hidden"], [1, "min-w-0", "text-center"], [1, "history-detail-header-actions", "mt-1.5", "flex", "flex-wrap", "items-center", "sm:justify-end", "justify-center", "gap-3"], [1, "history-detail-round-select", "w-full", "max-w-[16rem]", "sm:w-44", "md:w-52", 3, "accentColor", "disabled", "options", "selected"], [1, "hidden", "items-center", "justify-center", "cursor-pointer", "text-yellow-400", "hover:text-yellow-300", "color-transition", "sm:flex"], [1, "history-ticket-divider"], [1, "top-bar-summary", "grid", "grid-cols-2", "sm:grid-cols-3"], [1, "font-semibold", "uppercase", "tracking-wider", "text-zinc-500"], [1, "relative", "mt-2", "flex", "min-w-0", "flex-row", "items-center", "justify-center", "gap-2.5", "sm:flex-col", "sm:gap-1"], ["data-testid", "history-detail-bet", 1, "font-semibold", "text-white"], ["data-testid", "history-detail-line-bet", 1, "text-zinc-400"], ["data-testid", "history-detail-win", 1, "font-semibold", "w-full", "text-center", 3, "ngClass"], [1, "invisible", "absolute", "opacity-0", "pointer-events-none", "sm:static", "sm:opacity-100"], ["data-testid", "history-detail-balance-new", 1, "font-semibold", "text-white", 3, "ngClass"], ["data-testid", "history-detail-balance-old", 1, "text-zinc-400", 3, "ngClass"], [1, "flex-1", "relative", "bg-zinc-900", "overflow-hidden"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "flex-1", "h-full", "flex", "items-center", "justify-center"], ["frameborder", "0", "scrolling", "no", 1, "absolute", "top-2", "sm:w-full", "min-w-lg", "origin-top", "h-220"], [1, "absolute", "inset-0", "bg-zinc-900"], [1, "absolute", "left-0", "top-0", "h-full", "w-16", "flex", "items-center", "justify-center", "pointer-events-none"], ["variant", "outlined", 1, "pointer-events-auto", "opacity-60", "hover:opacity-100", 3, "icon", "size", "accentColor"], [1, "absolute", "right-0", "top-0", "h-full", "w-16", "flex", "items-center", "justify-center", "pointer-events-none"], [1, "flex", "shrink-0", "items-center", "justify-center", "cursor-pointer", "text-yellow-400", "transition-colors", "sm:hidden", 3, "click"], ["name", "play-circle", 1, "info-icon"], ["name", "share", 1, "info-icon"], [1, "history-detail-round-select", "w-full", "max-w-[16rem]", "sm:w-44", "md:w-52", 3, "onSelect", "accentColor", "disabled", "options", "selected"], [1, "hidden", "items-center", "justify-center", "cursor-pointer", "text-yellow-400", "hover:text-yellow-300", "color-transition", "sm:flex", 3, "click"], ["variant", "outlined", 1, "pointer-events-auto", "opacity-60", "hover:opacity-100", 3, "click", "icon", "size", "accentColor"]], template: function HistoryDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "button", 10);
      \u0275\u0275listener("click", function HistoryDetailComponent_Template_button_click_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.item() && ctx.clickCopyTransaction(ctx.item(), $event));
      });
      \u0275\u0275element(12, "ap-icon", 11);
      \u0275\u0275elementStart(13, "p", 12);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, HistoryDetailComponent_Conditional_15_Template, 2, 0, "button", 13);
      \u0275\u0275conditionalCreate(16, HistoryDetailComponent_Conditional_16_Template, 2, 0, "button", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 15);
      \u0275\u0275conditionalCreate(19, HistoryDetailComponent_Conditional_19_Template, 1, 4, "ap-select", 16);
      \u0275\u0275conditionalCreate(20, HistoryDetailComponent_Conditional_20_Template, 2, 0, "button", 17);
      \u0275\u0275conditionalCreate(21, HistoryDetailComponent_Conditional_21_Template, 2, 0, "button", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(22, "div", 18);
      \u0275\u0275elementStart(23, "div", 19)(24, "div")(25, "h6", 20);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 21)(28, "h4", 22);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "moneyText");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "h5", 23);
      \u0275\u0275conditionalCreate(32, HistoryDetailComponent_Conditional_32_Template, 2, 3)(33, HistoryDetailComponent_Conditional_33_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div")(35, "h6", 20);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 21)(38, "h4", 24);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "moneyText");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h4", 25);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "moneyText");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div")(45, "h6", 20);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 21)(48, "h4", 26);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "moneyText");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "h5", 27);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "moneyText");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(54, "div", 28)(55, "div", 29)(56, "div", 30);
      \u0275\u0275element(57, "iframe", 31, 0);
      \u0275\u0275conditionalCreate(59, HistoryDetailComponent_Conditional_59_Template, 1, 1, "ap-loading-overlay", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 33);
      \u0275\u0275conditionalCreate(61, HistoryDetailComponent_Conditional_61_Template, 1, 3, "ap-button", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 35);
      \u0275\u0275conditionalCreate(63, HistoryDetailComponent_Conditional_63_Template, 1, 3, "ap-button", 34);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classMap("history-ticket-card relative rounded-xl border " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.displayName(), "", ctx.roundNumberText(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.ticket());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showReplayButtons() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showShareButtons() ? 16 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showRoundSelector() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showReplayButtons() ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showShareButtons() ? 21 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 border-r sm:border-r rounded-bl-2xl sm:rounded-bl-2xl " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.betSummaryTitle(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 31, ctx.displayBet()), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.lineBet() !== null ? 32 : 33);
      \u0275\u0275advance(2);
      \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 sm:border-r " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.winSummaryTitle(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.isWinResult() ? "text-emerald-400" : "text-white");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 33, ctx.win()), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 35, ctx.win()), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classMap("top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 col-span-2 border-t sm:col-span-1 sm:border-l sm:border-t-0 sm:border-r-0 sm:border-l-0 rounded-br-2xl rounded-bl-2xl sm:rounded-br-2xl sm:rounded-bl-none " + (ctx.isDetailThemeDark() ? "bg-zinc-900" : "bg-zinc-800"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.balanceTitle(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(41, _c1, ctx.balanceNewIsHidden(), ctx.balanceNewIsLong()));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 37, ctx.balanceNew()), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(44, _c1, ctx.balanceOldIsHidden(), ctx.balanceOldIsLong()));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 39, ctx.balanceOld()), " ");
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isLoading() ? 59 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isPreRoundEnabled() ? 61 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isNextRoundEnabled() ? 63 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent, ApButtonComponent, ApLoadingOverlayComponent, ApSelectComponent, MoneyTextPipe], styles: ["\n\n.history-ticket-card[_ngcontent-%COMP%] {\n  border-color: #3f3f46;\n  box-shadow: inset 0 1px 0 #ffffff08;\n}\n.history-ticket-divider[_ngcontent-%COMP%] {\n  position: relative;\n  border-top: 1px dashed #3f3f46;\n}\n@media (min-width: 640px) {\n  .history-detail-header-actions[_ngcontent-%COMP%] {\n    border-top: none;\n    padding-top: 0;\n  }\n  .history-detail-round-select[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n}\n.top-bar-summary[_ngcontent-%COMP%] {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.top-bar-summary-cell[_ngcontent-%COMP%] {\n  border-color: #3f3f46;\n}\n/*# sourceMappingURL=history-detail.component.css.map */"], data: { animation: [
    trigger("fadeOut", [
      transition(":leave", [animate("300ms ease-in", style({ opacity: 0 }))])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryDetailComponent, [{
    type: Component,
    args: [{ selector: "history-detail", imports: [CommonModule, ApIconComponent, ApButtonComponent, ApLoadingOverlayComponent, ApSelectComponent, ApSelectComponent, MoneyTextPipe], animations: [
      trigger("fadeOut", [
        transition(":leave", [animate("300ms ease-in", style({ opacity: 0 }))])
      ])
    ], template: `<div class="flex size-full flex-col mx-auto bg-zinc-900">
  <!-- Header + Top Bar: unified card -->
  <div class="shrink-0 px-3 sm:px-6 w-full max-w-4xl mx-auto sm:mt-2">
    <div
      [class]="
        'history-ticket-card relative rounded-xl border ' +
        (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
      "
    >
      <!-- Header: Game Info, Date, Actions -->
      <div class="px-2 py-2 sm:px-4 sm:py-2 justify-center">
        <div
          class="grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)] sm:items-center sm:gap-6"
        >
          <div class="min-w-0 text-center sm:text-left">
            <h5 class="mt-1 truncate font-medium text-zinc-100">
              {{ displayName() }}{{ roundNumberText() }}
            </h5>
          </div>
          <!-- Mobile -->
          <div class="min-w-0 text-center sm:justify-self-center">
            <div class="space-y-1">
              <div
                class="inline-flex max-w-full items-center gap-3 px-3 py-1 text-zinc-400"
              >
                <button
                  class="flex shrink-0 cursor-pointer items-center justify-center space-x-1 transition-colors border-bottom-zinc"
                  (click)="item() && clickCopyTransaction(item()!, $event)"
                >
                  <ap-icon name="copy" class="size-4 shrink-0" />
                  <p class="truncate">{{ ticket() }}</p>
                </button>
                @if (showReplayButtons()) {
                  <button
                    class="flex shrink-0 items-center justify-center cursor-pointer text-yellow-400 transition-colors sm:hidden"
                    (click)="replay.emit(item())"
                  >
                    <ap-icon name="play-circle" class="info-icon" />
                  </button>
                }
                @if (showShareButtons()) {
                  <button
                    class="flex shrink-0 items-center justify-center cursor-pointer text-yellow-400 transition-colors sm:hidden"
                    (click)="share.emit(item())"
                  >
                    <ap-icon name="share" class="info-icon" />
                  </button>
                }
              </div>
            </div>
          </div>
          <!-- Desktop -->
          <div class="min-w-0 text-center">
            <div
              class="history-detail-header-actions mt-1.5 flex flex-wrap items-center sm:justify-end justify-center gap-3"
            >
              @if (showRoundSelector()) {
                <ap-select
                  class="history-detail-round-select w-full max-w-[16rem] sm:w-44 md:w-52"
                  [accentColor]="'yellow'"
                  [disabled]="roundSelectorDisabled()"
                  [options]="roundOptions()"
                  [selected]="currentRound().toString()"
                  (onSelect)="selectRound($event)"
                />
              }
              @if (showReplayButtons()) {
                <button
                  class="hidden items-center justify-center cursor-pointer text-yellow-400 hover:text-yellow-300 color-transition sm:flex"
                  (click)="replay.emit(item())"
                >
                  <ap-icon name="play-circle" class="info-icon" />
                </button>
              }
              @if (showShareButtons()) {
                <button
                  class="hidden items-center justify-center cursor-pointer text-yellow-400 hover:text-yellow-300 color-transition sm:flex"
                  (click)="share.emit(item())"
                >
                  <ap-icon name="share" class="info-icon" />
                </button>
              }
            </div>
          </div>
        </div>
      </div>

      <!-- Top Bar: Bet, Balance, Win -->
      <div class="history-ticket-divider"></div>
      <div class="top-bar-summary grid grid-cols-2 sm:grid-cols-3">
        <!-- Bet column -->
        <div
          [class]="
            'top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 border-r sm:border-r rounded-bl-2xl sm:rounded-bl-2xl ' +
            (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
          "
        >
          <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
            {{ betSummaryTitle() }}
          </h6>

          <div
            class="relative mt-2 flex min-w-0 flex-row items-center justify-center gap-2.5 sm:flex-col sm:gap-1"
          >
            <h4 data-testid="history-detail-bet" class="font-semibold text-white">
              {{ displayBet() | moneyText }}
            </h4>
            <h5 data-testid="history-detail-line-bet" class="text-zinc-400">
              @if (lineBet() !== null) {
                {{ lineBet()! | moneyText }}
              } @else {
                N/A
              }
            </h5>
          </div>
        </div>

        <!-- Win/Lose column -->
        <div
          [class]="
            'top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 sm:border-r ' +
            (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
          "
        >
          <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
            {{ winSummaryTitle() }}
          </h6>
          <div
            class="relative mt-2 flex min-w-0 flex-row items-center justify-center gap-2.5 sm:flex-col sm:gap-1"
          >
            <h4
              data-testid="history-detail-win"
              class="font-semibold w-full text-center"
              [ngClass]="isWinResult() ? 'text-emerald-400' : 'text-white'"
            >
              {{ win() | moneyText }}
            </h4>
            <h4
              class="invisible absolute opacity-0 pointer-events-none sm:static sm:opacity-100"
            >
              {{ win() | moneyText }}
            </h4>
          </div>
        </div>

        <!-- Balance column -->
        <div
          [class]="
            'top-bar-summary-cell flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:border-b-0 col-span-2 border-t sm:col-span-1 sm:border-l sm:border-t-0 sm:border-r-0 sm:border-l-0 rounded-br-2xl rounded-bl-2xl sm:rounded-br-2xl sm:rounded-bl-none ' +
            (isDetailThemeDark() ? 'bg-zinc-900' : 'bg-zinc-800')
          "
        >
          <h6 class="font-semibold uppercase tracking-wider text-zinc-500">
            {{ balanceTitle() }}
          </h6>
          <div
            class="relative mt-2 flex min-w-0 flex-row items-center justify-center gap-2.5 sm:flex-col sm:gap-1"
          >
            <h4
              data-testid="history-detail-balance-new"
              class="font-semibold text-white"
              [ngClass]="{
                hidden: balanceNewIsHidden(),
                'whitespace-nowrap': balanceNewIsLong(),
              }"
            >
              {{ balanceNew()! | moneyText }}
            </h4>
            <h5
              data-testid="history-detail-balance-old"
              class="text-zinc-400"
              [ngClass]="{
                hidden: balanceOldIsHidden(),
                'whitespace-nowrap': balanceOldIsLong(),
              }"
            >
              {{ balanceOld()! | moneyText }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Content: Default variant - Reel and Win Details -->
  <div class="flex-1 relative bg-zinc-900 overflow-hidden">
    <div class="absolute inset-0 flex items-center justify-center">
      <!-- Content Area -->
      <div class="flex-1 h-full flex items-center justify-center">
        <iframe
          #gameIframe
          class="absolute top-2 sm:w-full min-w-lg origin-top h-220"
          frameborder="0"
          scrolling="no"
        ></iframe>
        @if (isLoading()) {
          <ap-loading-overlay class="absolute inset-0 bg-zinc-900" @fadeOut />
        }
      </div>

      <!-- Left Arrow -->
      <div
        class="absolute left-0 top-0 h-full w-16 flex items-center justify-center pointer-events-none"
      >
        @if (isPreRoundEnabled()) {
          <ap-button
            class="pointer-events-auto opacity-60 hover:opacity-100"
            (click)="clickPreRound()"
            [icon]="'chevron-left'"
            variant="outlined"
            [size]="'small'"
            [accentColor]="'yellow'"
          />
        }
      </div>

      <!-- Right Arrow -->
      <div
        class="absolute right-0 top-0 h-full w-16 flex items-center justify-center pointer-events-none"
      >
        @if (isNextRoundEnabled()) {
          <ap-button
            class="pointer-events-auto opacity-60 hover:opacity-100"
            (click)="clickNextRound()"
            [icon]="'chevron-right'"
            variant="outlined"
            [size]="'small'"
            [accentColor]="'yellow'"
          />
        }
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/history-detail/history-detail.component.css */\n.history-ticket-card {\n  border-color: #3f3f46;\n  box-shadow: inset 0 1px 0 #ffffff08;\n}\n.history-ticket-divider {\n  position: relative;\n  border-top: 1px dashed #3f3f46;\n}\n@media (min-width: 640px) {\n  .history-detail-header-actions {\n    border-top: none;\n    padding-top: 0;\n  }\n  .history-detail-round-select {\n    padding-top: 0;\n  }\n}\n.top-bar-summary {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.top-bar-summary-cell {\n  border-color: #3f3f46;\n}\n/*# sourceMappingURL=history-detail.component.css.map */\n"] }]
  }], null, { gameIframe: [{
    type: ViewChild,
    args: ["gameIframe"]
  }], iframeRef: [{
    type: ViewChild,
    args: ["gameIframe", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryDetailComponent, { className: "HistoryDetailComponent", filePath: "src/app/pages/history-detail/history-detail.component.ts", lineNumber: 40 });
})();

// src/app/pages/history-list/history-list.component.ts
function HistoryListComponent_ap_ui_frame_page_0_div_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-tab-menu-text", 19);
    \u0275\u0275listener("tabChange", function HistoryListComponent_ap_ui_frame_page_0_div_1_Conditional_1_Template_ap_tab_menu_text_tabChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onWalletTabChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("tabs", ctx_r1.walletTabs())("selectedTab", ctx_r1.wallet())("accentColor", "yellow");
  }
}
function HistoryListComponent_ap_ui_frame_page_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275conditionalCreate(1, HistoryListComponent_ap_ui_frame_page_0_div_1_Conditional_1_Template, 1, 3, "ap-tab-menu-text", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hideTabMenu() ? 1 : -1);
  }
}
function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-history-list", 20);
    \u0275\u0275listener("share", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_5_Template_ap_history_list_share_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareToWebSns($event));
    })("replay", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_5_Template_ap_history_list_replay_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openReplayConfirm($event));
    })("detail", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_5_Template_ap_history_list_detail_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showDetail($event));
    })("winLoseLabelClick", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_5_Template_ap_history_list_winLoseLabelClick_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onWinLabelClick($event));
    })("scrollNearEnd", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_5_Template_ap_history_list_scrollNearEnd_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onScrollNearEnd());
    })("openCalendar", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_5_Template_ap_history_list_openCalendar_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showCalendar.set(true));
    })("copyTransaction", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_5_Template_ap_history_list_copyTransaction_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyTransaction($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("list", ctx_r1.cashList())("historyDateRange", ctx_r1.historyDateRange())("isLoadingMore", ctx_r1.isLoadingMore())("forcedReplayButton", ctx_r1.history.forceReplayDisplayed())("forcedShareButton", ctx_r1.history.forceShareDisplayed())("serverReplayEnabled", ctx_r1.serverReplayEnabled() && ctx_r1.isReplaySupported());
  }
}
function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-history-list", 21);
    \u0275\u0275listener("winLoseLabelClick", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_6_Template_ap_history_list_winLoseLabelClick_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onWinLabelClick($event));
    })("share", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_6_Template_ap_history_list_share_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareToWebSns($event));
    })("replay", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_6_Template_ap_history_list_replay_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openReplayConfirm($event));
    })("detail", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_6_Template_ap_history_list_detail_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showDetail($event));
    })("scrollNearEnd", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_6_Template_ap_history_list_scrollNearEnd_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onScrollNearEnd());
    })("openCalendar", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_6_Template_ap_history_list_openCalendar_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showCalendar.set(true));
    })("copyTransaction", function HistoryListComponent_ap_ui_frame_page_0_ap_history_list_6_Template_ap_history_list_copyTransaction_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyTransaction($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("list", ctx_r1.bonusList())("historyDateRange", ctx_r1.historyDateRange())("isLoadingMore", ctx_r1.isLoadingMore())("forcedReplayButton", ctx_r1.history.forceReplayDisplayed())("forcedShareButton", ctx_r1.history.forceShareDisplayed())("serverReplayEnabled", ctx_r1.serverReplayEnabled() && ctx_r1.isReplaySupported());
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 10);
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 22);
    \u0275\u0275elementStart(1, "ap-history-calender", 23);
    \u0275\u0275listener("clickOutside", function HistoryListComponent_ap_ui_frame_page_0_Conditional_8_Template_ap_history_calender_clickOutside_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showCalendar.set(false));
    })("onConfirm", function HistoryListComponent_ap_ui_frame_page_0_Conditional_8_Template_ap_history_calender_onConfirm_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDateRangeConfirm($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("maxDayRange", 7)("accentColor", "yellow")("startDayBeforeRestriction", 90)("startDayAfterRestriction", 0);
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "appI18n");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "history_total_stake_amount"), " ");
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "appI18n");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "history_total_bet_amount", "Total Bet"), " ");
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 10);
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 26);
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "history-detail", 25);
    \u0275\u0275listener("replay", function HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Conditional_1_Template_history_detail_replay_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openReplayConfirm($event));
    })("share", function HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Conditional_1_Template_history_detail_share_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.shareToWebSns($event));
    })("copyTransaction", function HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Conditional_1_Template_history_detail_copyTransaction_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyTransaction($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Conditional_1_Conditional_1_Template, 1, 0, "ap-loading-overlay", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("item", ctx_r1.detailItem());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading() ? 1 : -1);
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "history-detail-reward", 27);
    \u0275\u0275listener("copyTransaction", function HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Conditional_2_Template_history_detail_reward_copyTransaction_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyTransaction($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("item", ctx_r1.detailItem());
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Conditional_1_Template, 2, 2)(2, HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Conditional_2_Template, 1, 1, "history-detail-reward", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isReelResultItem() ? 1 : 2);
  }
}
function HistoryListComponent_ap_ui_frame_page_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "ap-history-popup-share", 28);
    \u0275\u0275pipe(2, "appI18n");
    \u0275\u0275pipe(3, "appI18n");
    \u0275\u0275listener("close", function HistoryListComponent_ap_ui_frame_page_0_div_32_Template_ap_history_popup_share_close_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isShare.set(false));
    })("copyLink", function HistoryListComponent_ap_ui_frame_page_0_div_32_Template_ap_history_popup_share_copyLink_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCopyLinkRequest($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("header", \u0275\u0275pipeBind2(2, 4, "share_title", "Share"))("linkLabel", \u0275\u0275pipeBind2(3, 7, "replay_copy_link", "Copy Link"))("getShareUrl", ctx_r1.getShareUrlForCurrentItem)("item", ctx_r1.sharedItem());
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "ap-ui-frame-popup", 29);
    \u0275\u0275listener("close", function HistoryListComponent_ap_ui_frame_page_0_Conditional_33_Template_ap_ui_frame_popup_close_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dismissCopyNotification());
    });
    \u0275\u0275elementStart(2, "div", 30);
    \u0275\u0275element(3, "ap-icon", 31);
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 33);
    \u0275\u0275elementStart(7, "h4", 34);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "appI18n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 35)(11, "ap-button", 36);
    \u0275\u0275pipe(12, "appI18n");
    \u0275\u0275listener("clicked", function HistoryListComponent_ap_ui_frame_page_0_Conditional_33_Template_ap_button_clicked_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dismissCopyNotification());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.copiedTransaction());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 5, "copy_transaction_item", "Transaction ID copied successfully."), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind2(12, 8, "Confirm_Btn", "Confirm"))("accentColor", "yellow")("size", "large");
  }
}
function HistoryListComponent_ap_ui_frame_page_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-ui-frame-page", 3);
    \u0275\u0275listener("close", function HistoryListComponent_ap_ui_frame_page_0_Template_ap_ui_frame_page_close_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    })("back", function HistoryListComponent_ap_ui_frame_page_0_Template_ap_ui_frame_page_back_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isDetail.set(false));
    });
    \u0275\u0275template(1, HistoryListComponent_ap_ui_frame_page_0_div_1_Template, 2, 1, "div", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "div", 6)(4, "div", 7);
    \u0275\u0275template(5, HistoryListComponent_ap_ui_frame_page_0_ap_history_list_5_Template, 1, 6, "ap-history-list", 8)(6, HistoryListComponent_ap_ui_frame_page_0_ap_history_list_6_Template, 1, 6, "ap-history-list", 9);
    \u0275\u0275conditionalCreate(7, HistoryListComponent_ap_ui_frame_page_0_Conditional_7_Template, 1, 0, "ap-loading-overlay", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, HistoryListComponent_ap_ui_frame_page_0_Conditional_8_Template, 2, 4);
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12)(11, "div")(12, "th", 13);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "appI18n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "th", 13);
    \u0275\u0275conditionalCreate(19, HistoryListComponent_ap_ui_frame_page_0_Conditional_19_Template, 2, 3)(20, HistoryListComponent_ap_ui_frame_page_0_Conditional_20_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 14);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "th", 13);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "appI18n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 14);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(29, HistoryListComponent_ap_ui_frame_page_0_Conditional_29_Template, 1, 0, "div", 2);
    \u0275\u0275conditionalCreate(30, HistoryListComponent_ap_ui_frame_page_0_Conditional_30_Template, 1, 0, "ap-loading-overlay", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(31, HistoryListComponent_ap_ui_frame_page_0_Conditional_31_Template, 3, 1, "div", 2);
    \u0275\u0275template(32, HistoryListComponent_ap_ui_frame_page_0_div_32_Template, 4, 10, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, HistoryListComponent_ap_ui_frame_page_0_Conditional_33_Template, 13, 11, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("header", ctx_r1.header())("@fadeOut", void 0)("enableBack", ctx_r1.isDetail());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isDetail());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.wallet() === "cash");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wallet() === "bonus");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCalendar() ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 19, "history_transaction", "Transaction"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.historyNumber(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isGhana() ? 19 : 20);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.historyTotalBet(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 22, "history_total_win_amount", "history_total_win_amount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.historyTotalWin(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading() ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isShareLoading() ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isDetail() ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isShare());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCopyNotification() ? 33 : -1);
  }
}
function HistoryListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "history-replay-viewer", 37);
    \u0275\u0275listener("confirmReplayRequest", function HistoryListComponent_Conditional_1_Template_history_replay_viewer_confirmReplayRequest_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReplayConfirm());
    })("cancelReplay", function HistoryListComponent_Conditional_1_Template_history_replay_viewer_cancelReplay_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReplayCancel());
    })("copyLinkRequest", function HistoryListComponent_Conditional_1_Template_history_replay_viewer_copyLinkRequest_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCopyLinkRequest(ctx_r1.replayItem()));
    })("close", function HistoryListComponent_Conditional_1_Template_history_replay_viewer_close_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReplayClose());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("showWatchAgain", true)("showCopyLink", true)("isReplayPanel", true);
  }
}
function HistoryListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-history-popup-replay", 38);
    \u0275\u0275listener("confirm", function HistoryListComponent_Conditional_2_Template_ap_history_popup_replay_confirm_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReplayConfirm());
    })("close", function HistoryListComponent_Conditional_2_Template_ap_history_popup_replay_close_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReplayCancel());
    });
    \u0275\u0275elementEnd();
  }
}
var HistoryListComponent = class _HistoryListComponent {
  // Services
  api = inject(AppInterfaceService);
  gaCollector = inject(GACollectorService);
  appI18n = inject(AppI18nService);
  replay = inject(HistoryReplayService);
  session = inject(ClientSessionService);
  history = inject(HistoryCtrlService);
  nav = inject(NavigatorShareService);
  logger = inject(LoggerService);
  leaderBoard = inject(LeaderBoardService);
  user = inject(PlayerWalletService);
  isMobile = computed(() => this.session.isMobile());
  isGhana = computed(() => this.session.isGhanaUI);
  // Localization
  header = this.appI18n.computed("history_history", "History");
  winLabelState = signal("winlose");
  /** server login 控制 replay, share 按鈕顯示 */
  serverReplayEnabled = computed(() => {
    return this.api.loginResult()?.note?.history_replay === 1;
  });
  // 檢查遊戲是否支援 Replay
  isReplaySupported = computed(() => {
    const gameId = this.session.gameId;
    if (!gameId)
      return false;
    return isHistoryReplaySupported(gameId);
  });
  // 舊遊戲.
  isOldGame = computed(() => this.session.isUseInGameUI);
  // Data
  cashList = signal([]);
  bonusList = signal([]);
  wallet = signal("cash");
  hideTabMenu = input(false);
  walletTabs = computed(() => [
    {
      id: "cash",
      label: this.appI18n.instant("history_cash_wallet_tab", "Cash"),
      icon: "wallet"
    },
    {
      id: "bonus",
      label: this.appI18n.instant("history_bonus_wallet_tab", "Bonus"),
      icon: "star"
    }
  ]);
  // Server response metadata
  cashTotalCount = signal(0);
  cashTotalBet = signal(0);
  cashTotalWin = signal(0);
  bonusTotalCount = signal(0);
  bonusTotalBet = signal(0);
  bonusTotalWin = signal(0);
  // Pagination
  cashFirstIndex = signal(0);
  bonusFirstIndex = signal(0);
  batchSize = 20;
  // Loading more state
  isLoadingMore = signal(false);
  // State
  isLoading = signal(true);
  isShareLoading = signal(false);
  isShare = signal(false);
  isReplay = signal(false);
  isSpin = signal(false);
  replayItem = signal(null);
  sharedItem = signal(null);
  detailItem = signal(null);
  isReelResultItem = computed(() => {
    const item = this.detailItem();
    if (!item)
      return false;
    if (item.rewardType === "Normal Game")
      return true;
    if (item.rewardType === "Bonus Wallet")
      return true;
    return false;
  });
  historyDetailStyle = computed(() => this.history.historyDetailStyle());
  /** 是否顯示詳細資訊 */
  isDetail = signal(false);
  // Replay viewer 相關
  showReplayConfirm = signal(false);
  showReplayViewer = computed(() => this.replay.showReplayViewer());
  // Date Range 相關
  selectedDateRange = signal(this.getTodayRange());
  showCalendar = signal(false);
  close = output();
  // copy transaction notification
  showCopyNotification = signal(false);
  copiedTransaction = signal("");
  ngOnInit() {
    this.replay.ticket$.subscribe(this.onReplayTicketResponse.bind(this));
  }
  ngAfterViewInit() {
    this.loadCashHistory();
  }
  /** 載入 Cash 錢包歷史記錄 */
  loadCashHistory() {
    return __async(this, null, function* () {
      this.isLoading.set(true);
      yield firstValueFrom(timer(500));
      try {
        const range = this.selectedDateRange();
        const startDate = range?.from || /* @__PURE__ */ new Date();
        const endDate = range?.to || /* @__PURE__ */ new Date();
        const filterType = this.winLabelState();
        this.cashFirstIndex.set(0);
        const response = yield this.history.getCashHistoryList(filterType, startDate, endDate, 0, this.batchSize);
        this.cashList.set(response.items);
        this.cashTotalCount.set(response.total_count);
        this.cashTotalBet.set(response.total_bet);
        this.cashTotalWin.set(response.total_win);
        this.cashFirstIndex.set(response.items.length);
      } catch (error) {
        this.logger.error("[History] Failed to load cash history:", error);
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  /** 載入 Bonus 錢包歷史記錄 */
  loadBonusHistory() {
    return __async(this, null, function* () {
      this.isLoading.set(true);
      yield firstValueFrom(timer(500));
      try {
        const range = this.selectedDateRange();
        const startDate = range?.from || /* @__PURE__ */ new Date();
        const endDate = range?.to || /* @__PURE__ */ new Date();
        const filterType = this.winLabelState();
        this.bonusFirstIndex.set(0);
        const response = yield this.history.getBonusHistoryList(filterType, startDate, endDate, 0, this.batchSize);
        this.bonusList.set(response.items);
        this.bonusTotalCount.set(response.total_count);
        this.bonusTotalBet.set(response.total_bet);
        this.bonusTotalWin.set(response.total_win);
        this.bonusFirstIndex.set(response.items.length);
      } catch (error) {
        this.logger.error("[History] Failed to load bonus history:", error);
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  openReplayConfirm(item) {
    this.gaCollector.trackButtonClick({ buttonName: TO_GA_ID.HistoryReplayBySelectedTicket });
    this.replayItem.set(item);
    this.showReplayConfirm.set(true);
  }
  onReplayTicketResponse(ticket) {
    this.showReplayConfirm.set(false);
    let replayUrl;
    if (this.session.remoteHost) {
      const replayResult = sessionStorage.getItem(ApWebReplaySessionKey) ?? "";
      this.replay.setPendingPostSessionData({ [ApWebReplaySessionKey]: replayResult });
      replayUrl = `${this.session.remoteHost}?replayurl=0`;
    } else {
      replayUrl = `/${this.session.gameId}/index.html?replayurl=0`;
    }
    this.replay.openReplayViewer(replayUrl, this.isOldGame());
  }
  onReplayConfirm() {
    const item = this.replayItem();
    if (!item)
      return;
    this.replay.getTicketDetail(item.transaction, "History");
  }
  /**
   * 取消 Replay
   */
  onReplayCancel() {
    this.showReplayConfirm.set(false);
    this.replayItem.set(null);
  }
  /**
   * 關閉 Replay
   */
  onReplayClose() {
    this.replay.closeReplayViewer();
    this.showReplayConfirm.set(false);
    this.replayItem.set(null);
  }
  /**
   * 處理複製 Replay 連結請求
   */
  onCopyLinkRequest(item) {
    return __async(this, null, function* () {
      if (!item) {
        this.logger.error("[History] No replay item selected");
        return;
      }
      try {
        const ticketNo = item.transaction || "";
        const subscription = this.replay.shortUrl$.subscribe((response) => {
          subscription.unsubscribe();
          this.logger.log("[History] Received ShortURL from subscription for copy:", response);
          if (response.url) {
            this.nav.copyToClipboard(response.url).then(() => {
            }).catch((err) => {
              this.logger.error("[History] Failed to copy replay link:", err);
            });
          }
        });
        this.replay.getShortUrl(ticketNo, "History", "", null);
      } catch (error) {
        this.logger.error("[History] Failed to copy link:", error);
      }
    });
  }
  copyTransaction(transaction) {
    return __async(this, null, function* () {
      yield this.nav.copyToClipboard(transaction);
      this.copiedTransaction.set(transaction);
      this.showCopyNotification.set(true);
    });
  }
  dismissCopyNotification() {
    this.showCopyNotification.set(false);
  }
  /**
   * 取得當前分享項目的分享連結
   */
  getShareUrlForCurrentItem = () => __async(this, null, function* () {
    const item = this.sharedItem();
    if (!item) {
      this.logger.error("[History] No share item selected");
      return null;
    }
    try {
      const ticketNo = item.transaction || "";
      return new Promise((resolve, reject) => {
        const subscription = this.replay.shortUrl$.subscribe((response) => {
          subscription.unsubscribe();
          this.logger.log("[History] Received ShortURL from subscription for getShareUrl:", response);
          if (response.url) {
            this.logger.log("[History] Generated share URL:", response.url);
            resolve(response.url);
          } else {
            this.logger.error("[History] Failed to generate share URL");
            resolve(null);
          }
        });
        this.replay.getShortUrl(ticketNo, "History", "", null);
      });
    } catch (error) {
      this.logger.error("[History] Failed to generate share URL:", error);
      return null;
    }
  });
  showDetail(item) {
    this.isDetail.set(true);
    this.detailItem.set(item);
  }
  shareToWebSns(item) {
    return __async(this, null, function* () {
      if (!item)
        return;
      this.isShareLoading.set(true);
      try {
        const ticketNo = item.transaction || "";
        const subscription = this.replay.shortUrl$.subscribe((response) => __async(this, null, function* () {
          subscription.unsubscribe();
          if (response.url) {
            try {
              const result = yield this.nav.shareToWebSns({
                title: this.appI18n.instant("history_share_title", "Share Game History"),
                text: this.appI18n.instant("history_share_text", "Check out my game result!"),
                url: response.url
              });
              if (!result.supported || result.error) {
                this.isShare.set(true);
                this.sharedItem.set(item);
              }
            } catch (shareError) {
              this.logger.error("[History] Failed to share:", shareError);
              this.isShare.set(true);
              this.sharedItem.set(item);
            }
          }
          this.isShareLoading.set(false);
        }));
        this.replay.getShortUrl(ticketNo, "History", "", null);
      } catch (error) {
        this.logger.error("[History] Failed to request share URL:", error);
        this.isShare.set(true);
        this.sharedItem.set(item);
        this.isShareLoading.set(false);
      }
    });
  }
  onWalletTabChange(tabId) {
    const walletType = tabId;
    this.wallet.set(walletType);
    this.winLabelState.set("winlose");
    if (walletType === "cash") {
      this.loadCashHistory();
    } else if (walletType === "bonus") {
      this.loadBonusHistory();
    }
  }
  onWinLabelClick(state) {
    this.winLabelState.set(state);
    this.gaCollector.trackButtonClick({ buttonName: TO_GA_ID.HistoryWinLose });
    this.reloadCurrentWallet();
  }
  /** 重新載入當前錢包的數據 */
  reloadCurrentWallet() {
    const wallet = this.wallet();
    if (wallet === "cash") {
      this.loadCashHistory();
    } else {
      this.loadBonusHistory();
    }
  }
  /** 載入更多 Cash 記錄 */
  loadMoreCash() {
    return __async(this, null, function* () {
      if (this.isLoadingMore() || this.isLoading())
        return;
      const currentCount = this.cashList().length;
      const totalCount = this.cashTotalCount();
      if (currentCount >= totalCount) {
        return;
      }
      this.isLoadingMore.set(true);
      try {
        const range = this.selectedDateRange();
        const startDate = range?.from || /* @__PURE__ */ new Date();
        const endDate = range?.to || /* @__PURE__ */ new Date();
        const filterType = this.winLabelState();
        const firstIndex = this.cashFirstIndex();
        const response = yield this.history.getCashHistoryList(filterType, startDate, endDate, firstIndex, this.batchSize);
        this.cashList.update((list) => [...list, ...response.items]);
        this.cashFirstIndex.set(firstIndex + response.items.length);
      } catch (error) {
        this.logger.error("[History] Failed to load more cash history:", error);
      } finally {
        this.isLoadingMore.set(false);
      }
    });
  }
  /** 載入更多 Bonus 記錄 */
  loadMoreBonus() {
    return __async(this, null, function* () {
      if (this.isLoadingMore() || this.isLoading())
        return;
      const currentCount = this.bonusList().length;
      const totalCount = this.bonusTotalCount();
      if (currentCount >= totalCount) {
        return;
      }
      this.isLoadingMore.set(true);
      try {
        const range = this.selectedDateRange();
        const startDate = range?.from || /* @__PURE__ */ new Date();
        const endDate = range?.to || /* @__PURE__ */ new Date();
        const filterType = this.winLabelState();
        const firstIndex = this.bonusFirstIndex();
        const response = yield this.history.getBonusHistoryList(filterType, startDate, endDate, firstIndex, this.batchSize);
        this.bonusList.update((list) => [...list, ...response.items]);
        this.bonusFirstIndex.set(firstIndex + response.items.length);
      } catch (error) {
        this.logger.error("[History] Failed to load more bonus history:", error);
      } finally {
        this.isLoadingMore.set(false);
      }
    });
  }
  /** 處理滾動事件，快到底部時載入更多 */
  onScrollNearEnd() {
    const wallet = this.wallet();
    if (wallet === "cash") {
      this.loadMoreCash();
    } else {
      this.loadMoreBonus();
    }
  }
  // Computed properties for bottom info table
  currentList = computed(() => {
    return this.wallet() === "cash" ? this.cashList() : this.bonusList();
  });
  filterByDateRange(list) {
    const range = this.selectedDateRange();
    if (!range || !range.from && !range.to)
      return list;
    if (range.from && range.to) {
      const fromDateOnly = range.from.toLocaleDateString(this.session.locale);
      const toDateOnly = range.to.toLocaleDateString(this.session.locale);
      if (fromDateOnly === toDateOnly) {
        return list.filter((item) => (item.date || "").trim() === fromDateOnly);
      }
      const fromTime = new Date(range.from.getFullYear(), range.from.getMonth(), range.from.getDate(), 0, 0, 0, 0).getTime();
      const toTime = new Date(range.to.getFullYear(), range.to.getMonth(), range.to.getDate(), 23, 59, 59, 999).getTime();
      return list.filter((item) => {
        const dt = this.parseItemDateTime(item.date, item.time).getTime();
        return dt >= fromTime && dt <= toTime;
      });
    }
    return list;
  }
  filteredList = computed(() => {
    return this.filterByDateRange(this.currentList());
  });
  historyNumber = computed(() => {
    const wallet = this.wallet();
    const totalCount = wallet === "cash" ? this.cashTotalCount() : this.bonusTotalCount();
    return totalCount.toString();
  });
  historyDateRange = computed(() => {
    const list = this.filteredList();
    const range = this.selectedDateRange();
    if (range?.from && range?.to) {
      const fromStr = range.from.toLocaleDateString(this.session.locale);
      const toStr = range.to.toLocaleDateString(this.session.locale);
      return fromStr === toStr ? fromStr : `${fromStr} ~ ${toStr}`;
    }
    if (list.length === 0)
      return "-";
    const sortedByDate = [...list].sort((a, b) => {
      const dateA = /* @__PURE__ */ new Date(`${a.date} ${a.time}`);
      const dateB = /* @__PURE__ */ new Date(`${b.date} ${b.time}`);
      return dateA.getTime() - dateB.getTime();
    });
    const oldest = sortedByDate[0];
    const newest = sortedByDate[sortedByDate.length - 1];
    return `${oldest.date}-${newest.date}`;
  });
  historyTotalBet = computed(() => {
    const wallet = this.wallet();
    const totalBet = wallet === "cash" ? this.cashTotalBet() : this.bonusTotalBet();
    return MoneyText.format(totalBet);
  });
  historyTotalWin = computed(() => {
    const wallet = this.wallet();
    const totalWin = wallet === "cash" ? this.cashTotalWin() : this.bonusTotalWin();
    return MoneyText.format(totalWin);
  });
  parseItemDateTime(date, time) {
    const isoString = `${(date || "").trim()}T${(time || "").trim()}`;
    const parsed = new Date(isoString);
    return isNaN(parsed.getTime()) ? new Date(date) : parsed;
  }
  /** 獲取本地今天的日期範圍 */
  getTodayRange() {
    const range = this.history.getTodayRange();
    return { from: range.from, to: range.to, type: "today" };
  }
  /** 從ap-history-calender 獲取出來的時間是本地時間，需要轉換為 GMT+00 時區的時間*/
  onDateRangeConfirm(localRange) {
    const gaName = HistoryDateOptionGAMap[localRange.type];
    if (gaName) {
      this.gaCollector.trackButtonClick({
        buttonName: gaName
      });
    }
    if (!localRange.from || !localRange.to) {
      return;
    }
    const utcRange = this.history.getUtcDateRange(localRange.from, localRange.to);
    this.selectedDateRange.set({ from: utcRange.from, to: utcRange.to, type: localRange.type });
    this.reloadCurrentWallet();
    this.showCalendar.set(false);
  }
  static \u0275fac = function HistoryListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryListComponent, selectors: [["history-list"]], inputs: { hideTabMenu: [1, "hideTabMenu"] }, outputs: { close: "close" }, decls: 3, vars: 3, consts: [["id", "history", 3, "header", "enableBack", "close", "back", 4, "ngIf"], [3, "showWatchAgain", "showCopyLink", "isReplayPanel"], [1, "absolute", "inset-0", "z-overlay"], ["id", "history", 3, "close", "back", "header", "enableBack"], ["class", "relative z-sticky", "style", "pointer-events: auto", 4, "ngIf"], [1, "relative", "flex", "flex-col", "h-full"], [1, "relative", "flex-1", "pt-12", "overflow-hidden", "flex", "flex-col"], [1, "relative", "flex-1", "bg-zinc-900", "md:px-20"], [3, "list", "historyDateRange", "isLoadingMore", "forcedReplayButton", "forcedShareButton", "serverReplayEnabled", "share", "replay", "detail", "winLoseLabelClick", "scrollNearEnd", "openCalendar", "copyTransaction", 4, "ngIf"], [3, "list", "historyDateRange", "isLoadingMore", "forcedReplayButton", "forcedShareButton", "serverReplayEnabled", "winLoseLabelClick", "share", "replay", "detail", "scrollNearEnd", "openCalendar", "copyTransaction", 4, "ngIf"], [1, "absolute", "inset-0", "popup-overlay", "z-overlay"], [1, "shrink-0", "bg-zinc-950", 2, "border-top", "1px solid rgb(113, 113, 123, 0.8)"], [1, "grid", "grid-cols-3", "gap-2", "px-2", "md:px-20", "py-2", "text-zinc-400", "uppercase"], [1, "mb-1", "text-center", "flex", "justify-center"], [1, "flex", "justify-center", "text-zinc-100"], [4, "ngIf"], [1, "absolute", "inset-0", "z-overlay", "popup-overlay", "flex", "items-center", "justify-center", "fade-out"], [1, "relative", "z-sticky", 2, "pointer-events", "auto"], [3, "tabs", "selectedTab", "accentColor"], [3, "tabChange", "tabs", "selectedTab", "accentColor"], [3, "share", "replay", "detail", "winLoseLabelClick", "scrollNearEnd", "openCalendar", "copyTransaction", "list", "historyDateRange", "isLoadingMore", "forcedReplayButton", "forcedShareButton", "serverReplayEnabled"], [3, "winLoseLabelClick", "share", "replay", "detail", "scrollNearEnd", "openCalendar", "copyTransaction", "list", "historyDateRange", "isLoadingMore", "forcedReplayButton", "forcedShareButton", "serverReplayEnabled"], [1, "absolute", "inset-0", "sm:hidden", "popup-overlay", "z-overlay"], ["clickOutside", "", 1, "history-list-calendar", "absolute", "top-20", "z-modal", "p-1", "sm:z-dropdown", 3, "clickOutside", "onConfirm", "maxDayRange", "accentColor", "startDayBeforeRestriction", "startDayAfterRestriction"], [1, "flex-1", 3, "item"], [1, "flex-1", 3, "replay", "share", "copyTransaction", "item"], [1, "absolute", "inset-0", "popup-overlay"], [1, "flex-1", 3, "copyTransaction", "item"], [1, "absolute", "inset-0", "z-overlay", 3, "close", "copyLink", "header", "linkLabel", "getShareUrl", "item"], [3, "close"], [1, "p-4", "text-center", "space-y-4"], ["name", "copy", 1, "popup-icon", "text-yellow-400"], [1, "block", "w-full", "text-center"], [1, "h-px", "w-full", "divider-gradient-yellow", "opacity-80"], [1, "text-zinc-300"], [1, "flex", "justify-center", "gap-6", "p-6"], [1, "w-[50%]", 3, "clicked", "label", "accentColor", "size"], [3, "confirmReplayRequest", "cancelReplay", "copyLinkRequest", "close", "showWatchAgain", "showCopyLink", "isReplayPanel"], [1, "absolute", "inset-0", "z-overlay", 3, "confirm", "close"]], template: function HistoryListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, HistoryListComponent_ap_ui_frame_page_0_Template, 34, 25, "ap-ui-frame-page", 0);
      \u0275\u0275conditionalCreate(1, HistoryListComponent_Conditional_1_Template, 1, 3, "history-replay-viewer", 1);
      \u0275\u0275conditionalCreate(2, HistoryListComponent_Conditional_2_Template, 1, 0, "ap-history-popup-replay", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.isSpin());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showReplayViewer() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showReplayConfirm() ? 2 : -1);
    }
  }, dependencies: [CommonModule, NgIf, ApUiFramePageComponent, ApUiFramePopupComponent, ApHistoryListComponent, ApLoadingOverlayComponent, ApHistoryPopupShareComponent, ApTabMenuTextComponent, AppI18nPipe, HistoryReplayViewerComponent, HistoryDetailRewardComponent, ApHistoryPopupReplayComponent, ApHistoryCalenderComponent, ClickOutsideDirective, ApIconComponent, ApButtonComponent, HistoryDetailComponent], styles: ["\n\n.history-list-calendar[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media (min-width: 640px) {\n  .history-list-calendar[_ngcontent-%COMP%] {\n    left: 5rem;\n    transform: none;\n  }\n}\n/*# sourceMappingURL=history-list.component.css.map */"], data: { animation: [
    trigger("fadeOut", [
      transition(":leave", [animate("300ms ease-in", style({ opacity: 0 }))])
    ]),
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("300ms ease-out", style({ opacity: 1 }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryListComponent, [{
    type: Component,
    args: [{ selector: "history-list", imports: [CommonModule, ApUiFramePageComponent, ApUiFramePopupComponent, ApHistoryListComponent, ApLoadingOverlayComponent, ApHistoryPopupShareComponent, ApTabMenuTextComponent, AppI18nPipe, HistoryReplayViewerComponent, HistoryDetailRewardComponent, ApHistoryPopupReplayComponent, ApHistoryCalenderComponent, ClickOutsideDirective, ApIconComponent, ApButtonComponent, HistoryDetailComponent], animations: [
      trigger("fadeOut", [
        transition(":leave", [animate("300ms ease-in", style({ opacity: 0 }))])
      ]),
      trigger("fadeIn", [
        transition(":enter", [
          style({ opacity: 0 }),
          animate("300ms ease-out", style({ opacity: 1 }))
        ])
      ])
    ], template: `<ap-ui-frame-page
  *ngIf="!isSpin()"
  id="history"
  [header]="header()"
  @fadeOut
  (close)="close.emit()"
  [enableBack]="isDetail()"
  (back)="isDetail.set(false)"
>
  <div
    *ngIf="!isDetail()"
    class="relative z-sticky"
    style="pointer-events: auto"
  >
    @if (!hideTabMenu()) {
      <ap-tab-menu-text
        [tabs]="walletTabs()"
        [selectedTab]="wallet()"
        [accentColor]="'yellow'"
        (tabChange)="onWalletTabChange($event)"
      />
    }
  </div>

  <div class="relative flex flex-col h-full">
    <!-- List -->
    <div
      class="relative flex-1 pt-12 overflow-hidden flex flex-col"
    >
      <div class="relative flex-1 bg-zinc-900 md:px-20">
        <ap-history-list
          *ngIf="wallet() === 'cash'"
          [list]="cashList()"
          [historyDateRange]="historyDateRange()"
          [isLoadingMore]="isLoadingMore()"
          [forcedReplayButton]="history.forceReplayDisplayed()"
          [forcedShareButton]="history.forceShareDisplayed()"
          [serverReplayEnabled]="serverReplayEnabled() && isReplaySupported()"
          (share)="shareToWebSns($event)"
          (replay)="openReplayConfirm($event)"
          (detail)="showDetail($event)"
          (winLoseLabelClick)="onWinLabelClick($event)"
          (scrollNearEnd)="onScrollNearEnd()"
          (openCalendar)="showCalendar.set(true)"
          (copyTransaction)="copyTransaction($event)"
        />
        <ap-history-list
          *ngIf="wallet() === 'bonus'"
          [list]="bonusList()"
          [historyDateRange]="historyDateRange()"
          [isLoadingMore]="isLoadingMore()"
          [forcedReplayButton]="history.forceReplayDisplayed()"
          [forcedShareButton]="history.forceShareDisplayed()"
          [serverReplayEnabled]="serverReplayEnabled() && isReplaySupported()"
          (winLoseLabelClick)="onWinLabelClick($event)"
          (share)="shareToWebSns($event)"
          (replay)="openReplayConfirm($event)"
          (detail)="showDetail($event)"
          (scrollNearEnd)="onScrollNearEnd()"
          (openCalendar)="showCalendar.set(true)"
          (copyTransaction)="copyTransaction($event)"
        />

        @if (isLoading()) {
          <ap-loading-overlay
            class="absolute inset-0 popup-overlay z-overlay"
          />
        }
      </div>

      @if (showCalendar()) {
        <div class="absolute inset-0 sm:hidden popup-overlay z-overlay"></div>
        <ap-history-calender
          class="history-list-calendar absolute top-20 z-modal p-1 sm:z-dropdown"
          [maxDayRange]="7"
           [accentColor]="'yellow'"
          [startDayBeforeRestriction]="90"
          [startDayAfterRestriction]="0"
          clickOutside
          (clickOutside)="showCalendar.set(false)"
          (onConfirm)="onDateRangeConfirm($event)"
        />
      }
      <!-- Bottom Info Table -->
      <div
        class="shrink-0 bg-zinc-950"
        style="border-top: 1px solid rgb(113, 113, 123, 0.8)"
      >
        <div
          class="grid grid-cols-3 gap-2 px-2 md:px-20 py-2 text-zinc-400 uppercase"
        >
          <div>
            <th class="mb-1 text-center flex justify-center">
              {{ "history_transaction" | appI18n: "Transaction" }}
            </th>
            <td class="flex justify-center text-zinc-100">
              {{ historyNumber() }}
            </td>
          </div>
          <div>
            <th class="mb-1 text-center flex justify-center">
              @if (isGhana()) {
                {{ "history_total_stake_amount" | appI18n }}
              } @else {
                {{ "history_total_bet_amount" | appI18n: "Total Bet" }}
              }
            </th>
            <td class="flex justify-center text-zinc-100">
              {{ historyTotalBet() }}
            </td>
          </div>
          <div>
            <th class="mb-1 text-center flex justify-center">
              {{
                "history_total_win_amount" | appI18n: "history_total_win_amount"
              }}
            </th>
            <td class="flex justify-center text-zinc-100">
              {{ historyTotalWin() }}
            </td>
          </div>
        </div>
      </div>

      @if (isLoading()) {
        <!-- \u7528\u4F86\u906E\u4F4Ftab\u7684loading\u64CD\u4F5C -->
        <div class="absolute inset-0 z-overlay"></div>
      }

      @if (isShareLoading()) {
        <ap-loading-overlay class="absolute inset-0 popup-overlay z-overlay" />
      }
    </div>

    @if (isDetail()) {
      <div class="absolute inset-0 z-overlay">
      @if (isReelResultItem()) {
        <!-- Detail -->
        <history-detail
          class="flex-1"
          [item]="detailItem()"
          (replay)="openReplayConfirm($event)"
          (share)="shareToWebSns($event)"
          (copyTransaction)="copyTransaction($event)"
        />
        @if (isLoading()) {
          <ap-loading-overlay class="absolute inset-0 popup-overlay" />
        }
      } @else {
        <history-detail-reward
          class="flex-1"
          [item]="detailItem()"
          (copyTransaction)="copyTransaction($event)"
        />
      }
      </div>
    }

    <!-- Share Window -->
    <div *ngIf="isShare()">
      <ap-history-popup-share
        class="absolute inset-0 z-overlay"
        [header]="'share_title' | appI18n: 'Share'"
        [linkLabel]="'replay_copy_link' | appI18n: 'Copy Link'"
        [getShareUrl]="getShareUrlForCurrentItem"
        (close)="isShare.set(false)"
        (copyLink)="onCopyLinkRequest($event)"
        [item]="this.sharedItem()"
      />
    </div>
  </div>
@if (showCopyNotification()) {
  <div
    class="absolute inset-0 z-overlay popup-overlay flex items-center justify-center fade-out"
  >
    <ap-ui-frame-popup (close)="dismissCopyNotification()">
      <div class="p-4 text-center space-y-4">
        <ap-icon name="copy" class="popup-icon text-yellow-400" />
        <span class="block w-full text-center">{{ copiedTransaction() }}</span>
        <div class="h-px w-full divider-gradient-yellow opacity-80"></div>
        <h4 class="text-zinc-300">
          {{
            "copy_transaction_item"
              | appI18n: "Transaction ID copied successfully."
          }}
        </h4>
      </div>
      <div class="flex justify-center gap-6 p-6">
        <ap-button
          [label]="'Confirm_Btn' | appI18n: 'Confirm'"
          [accentColor]="'yellow'"
          [size]="'large'"
          class="w-[50%]"
          (clicked)="dismissCopyNotification()"
        />
      </div>
    </ap-ui-frame-popup>
  </div>}
</ap-ui-frame-page>

<!-- Replay Viewer Component -->
@if (showReplayViewer()) {
  <history-replay-viewer
    [showWatchAgain]="true"
    [showCopyLink]="true"
    [isReplayPanel]="true"
    (confirmReplayRequest)="onReplayConfirm()"
    (cancelReplay)="onReplayCancel()"
    (copyLinkRequest)="onCopyLinkRequest(replayItem())"
    (close)="onReplayClose()"
  />
}

@if (showReplayConfirm()) {
  <ap-history-popup-replay
    class="absolute inset-0 z-overlay"
    (confirm)="onReplayConfirm()"
    (close)="onReplayCancel()"
  />
}
`, styles: ["/* src/app/pages/history-list/history-list.component.css */\n.history-list-calendar {\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media (min-width: 640px) {\n  .history-list-calendar {\n    left: 5rem;\n    transform: none;\n  }\n}\n/*# sourceMappingURL=history-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryListComponent, { className: "HistoryListComponent", filePath: "src/app/pages/history-list/history-list.component.ts", lineNumber: 57 });
})();

// src/app/pages/info-feature/info-feature.component.ts
function InfoFeatureComponent_For_3_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoFeatureComponent_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoFeatureComponent_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2);
    \u0275\u0275element(1, "img", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.info.getImageUrl(entry_r1.content) + `?v=${ctx_r1.version()}`, \u0275\u0275sanitizeUrl)("alt", entry_r1.content);
  }
}
function InfoFeatureComponent_For_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "ul", 6)(2, "li");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoFeatureComponent_For_3_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-bf-card-feature", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("card", ctx_r1.buyFeatureCard())("price", ctx_r1.wallet.multiplyUserBet(ctx_r1.buyFeatureCard().rate));
  }
}
function InfoFeatureComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InfoFeatureComponent_For_3_Case_0_Template, 3, 2, "section", 2)(1, InfoFeatureComponent_For_3_Case_1_Template, 3, 2, "section", 2)(2, InfoFeatureComponent_For_3_Case_2_Template, 2, 3, "section", 2)(3, InfoFeatureComponent_For_3_Case_3_Template, 4, 2, "section", 2)(4, InfoFeatureComponent_For_3_Case_4_Template, 1, 2, "ap-bf-card-feature", 3);
  }
  if (rf & 2) {
    let tmp_10_0;
    const entry_r1 = ctx.$implicit;
    \u0275\u0275conditional((tmp_10_0 = entry_r1.category) === "title" ? 0 : tmp_10_0 === "subtitle" ? 1 : tmp_10_0 === "image" ? 2 : tmp_10_0 === "content" ? 3 : tmp_10_0 === "buyFeature" ? 4 : -1);
  }
}
var InfoFeatureComponent = class _InfoFeatureComponent {
  info = inject(InfoCtrlService);
  wallet = inject(PlayerWalletService);
  symbol = inject(BaseSymbolTextureService);
  session = inject(ClientSessionService);
  /** info feature的版本是看system info的版本 */
  version = computed(() => this.session.version().sys);
  positionClass(position) {
    switch (position) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "left":
      default:
        return "text-left";
    }
  }
  buyFeatureCard = computed(() => {
    return this.wallet.buyFeatureCards()[0];
  });
  static \u0275fac = function InfoFeatureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoFeatureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoFeatureComponent, selectors: [["info-feature"]], decls: 4, vars: 0, consts: [[1, "page-container"], [1, "page-content"], [3, "ngClass"], [1, "flex", "mx-auto", "pointer-events-none", "scale-80", "mt-6", 3, "card", "price"], [1, "text-yellow-200"], [1, "mx-auto", 3, "src", "alt"], [1, "list-space"]], template: function InfoFeatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, InfoFeatureComponent_For_3_Template, 5, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.info.featureEntries());
    }
  }, dependencies: [CommonModule, NgClass, ApBfCardFeatureComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoFeatureComponent, [{
    type: Component,
    args: [{ selector: "info-feature", imports: [CommonModule, ApBfCardFeatureComponent], template: '<div class="page-container">\n  <div class="page-content">\n    @for (entry of info.featureEntries(); track $index) {\n      @switch (entry.category) {\n        @case ("title") {\n          <section [ngClass]="positionClass(entry.position)">\n            <h3 class="text-yellow-200">{{ entry.content }}</h3>\n          </section>\n        }\n        @case ("subtitle") {\n          <section [ngClass]="positionClass(entry.position)">\n            <h4>{{ entry.content }}</h4>\n          </section>\n        }\n        @case ("image") {\n          <section [ngClass]="positionClass(entry.position)">\n            <img\n              [src]="info.getImageUrl(entry.content) + `?v=${version()}`"\n              [alt]="entry.content"\n              class="mx-auto"\n            />\n          </section>\n        }\n        @case ("content") {\n          <section [ngClass]="positionClass(entry.position)">\n            <ul class="list-space">\n              <li>{{ entry.content }}</li>\n            </ul>\n          </section>\n        }\n        @case ("buyFeature") {\n          <ap-bf-card-feature\n            class="flex mx-auto pointer-events-none scale-80 mt-6"\n            [card]="buyFeatureCard()"\n            [price]="wallet.multiplyUserBet(buyFeatureCard().rate)"\n          />\n        }\n      }\n    }\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoFeatureComponent, { className: "InfoFeatureComponent", filePath: "src/app/pages/info-feature/info-feature.component.ts", lineNumber: 15 });
})();

// src/app/components/ap-info-guide/ap-info-guide.component.ts
var _c02 = ["*", "*"];
function ApInfoGuideComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", ctx_r0.icon());
  }
}
function ApInfoGuideComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function ApInfoGuideComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, ApInfoGuideComponent_Conditional_0_Conditional_2_Template, 1, 1, "ap-icon", 3)(3, ApInfoGuideComponent_Conditional_0_Conditional_3_Template, 2, 0, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 5)(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.icon() ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getItem1());
  }
}
function ApInfoGuideComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", ctx_r0.icon());
  }
}
function ApInfoGuideComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function ApInfoGuideComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getItem2());
  }
}
function ApInfoGuideComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, ApInfoGuideComponent_Conditional_1_Conditional_2_Template, 1, 1, "ap-icon", 6)(3, ApInfoGuideComponent_Conditional_1_Conditional_3_Template, 2, 0, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "h4", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 9)(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ApInfoGuideComponent_Conditional_1_Conditional_10_Template, 2, 1, "li");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.icon() ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.title(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getItem1());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getItem2() ? 10 : -1);
  }
}
var ApInfoGuideComponent = class _ApInfoGuideComponent {
  icon = input(null);
  title = input("Title");
  getItem1 = input("Item 1");
  getItem2 = input("Item 2");
  variant = input("default");
  static \u0275fac = function ApInfoGuideComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApInfoGuideComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApInfoGuideComponent, selectors: [["ap-info-guide"]], inputs: { icon: [1, "icon"], title: [1, "title"], getItem1: [1, "getItem1"], getItem2: [1, "getItem2"], variant: [1, "variant"] }, ngContentSelectors: _c02, decls: 2, vars: 1, consts: [[1, "flex", "items-center", "gap-2", "p-2"], [1, "flex", "items-start", "gap-4", "p-4"], [1, "flex-shrink-0"], [1, "sm:size-10", "size-8", 3, "name"], [1, "sm:size-16", "size-14"], [1, "list-inside", "list-none"], [1, "sm:size-16", "size-14", 3, "name"], [1, "flex-1"], [1, "text-yellow-200", "mb-2", "uppercase"], [1, "list-inside", "space-y-2", "list-none"]], template: function ApInfoGuideComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275conditionalCreate(0, ApInfoGuideComponent_Conditional_0_Template, 7, 2, "div", 0)(1, ApInfoGuideComponent_Conditional_1_Template, 11, 4, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.variant() === "description" ? 0 : 1);
    }
  }, dependencies: [CommonModule, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApInfoGuideComponent, [{
    type: Component,
    args: [{ selector: "ap-info-guide", imports: [CommonModule, ApIconComponent], template: '@if (variant() === "description") {\n  <div class="flex items-center gap-2 p-2">\n    <!-- Left: Icon -->\n    <div class="flex-shrink-0">\n      @if (icon()) {<ap-icon [name]="icon()!" class="sm:size-10 size-8" />}\n      @else {<div class="sm:size-16 size-14"><ng-content></ng-content></div>}\n    </div>\n    <!-- Right: single item -->\n    <ul class="list-inside list-none">\n      <li>{{ getItem1() }}</li>\n    </ul>\n  </div>\n} @else {\n  <div class="flex items-start gap-4 p-4">\n    <!-- Left: Icon -->\n    <div class="flex-shrink-0">\n      @if (icon()) { <ap-icon [name]="icon()!" class="sm:size-16 size-14" />}\n      @else {<div class="sm:size-16 size-14"><ng-content></ng-content></div>}\n    </div>\n\n    <!-- Right: Title and List -->\n    <div class="flex-1">\n      <h4 class="text-yellow-200 mb-2 uppercase">\n        {{ title() }}\n      </h4>\n      <ul class="list-inside space-y-2 list-none">\n        <li>{{ getItem1() }}</li>\n        @if (getItem2()) {\n          <li>{{ getItem2() }}</li>\n        }\n      </ul>\n    </div>\n  </div>\n}\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApInfoGuideComponent, { className: "ApInfoGuideComponent", filePath: "src/app/components/ap-info-guide/ap-info-guide.component.ts", lineNumber: 12 });
})();

// src/app/pages/info-guide/info-guide.component.ts
var _c03 = ["contentScroller"];
function InfoGuideComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-info-guide", 2);
    \u0275\u0275element(1, "ap-icon-spin", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.getSpinTitle())("getItem1", ctx_r0.getSpinItem1())("getItem2", "");
  }
}
function InfoGuideComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-info-guide", 2);
    \u0275\u0275element(1, "ap-icon-spin");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.getSpinTitle())("getItem1", ctx_r0.getSpinItem1())("getItem2", "");
  }
}
function InfoGuideComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-info-guide", 2);
    \u0275\u0275element(1, "ap-icon-hold-turbo-spin");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.getHoldTurboTitleDefault())("getItem1", ctx_r0.getHoldTurboDefaultItem1())("getItem2", "");
  }
}
function InfoGuideComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-info-guide", 2);
    \u0275\u0275element(1, "ap-icon-autoplay-circle");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.getAutoSpinTitle())("getItem1", ctx_r0.getAutoSpinItem1())("getItem2", "");
  }
}
function InfoGuideComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ap-info-guide", 2);
    \u0275\u0275element(1, "ap-icon-turbo-circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ap-info-guide", 2);
    \u0275\u0275element(3, "ap-icon-turbo-circle", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.getTurboTitleDefault())("getItem1", ctx_r0.getTurboDefaultItem1())("getItem2", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.getTurboTitleFast())("getItem1", ctx_r0.getTurboFastItem1())("getItem2", "");
  }
}
function InfoGuideComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getNoteItem2());
  }
}
function InfoGuideComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "time", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.gameVersion(), " ");
  }
}
var InfoGuideComponent = class _InfoGuideComponent {
  contentScroller;
  session = inject(ClientSessionService);
  appI18n = inject(AppI18nService);
  api = inject(AppInterfaceService);
  hideTurbo = input(false);
  hideHoldTurbo = input(true);
  hideAutoplay = input(false);
  hideNoteItem2 = input(false);
  isDragging = signal(false);
  isGhana = computed(() => this.session.isGhanaUI);
  dragStartY = 0;
  dragStartScrollTop = 0;
  /* Info Guide 文字說明，從API取得 */
  /* Spin */
  getSpinTitle = this.appI18n.computedGame(
    "Spin_title",
    //先試讀取game的語系檔
    this.appI18n.instant("Spin_title")
    //如果game的語系檔沒有，再讀取common的語系檔
  );
  getSpinItem1 = this.appI18n.computedGame("Spin_content_01", this.appI18n.instant("Spin_content_01"));
  /* Hold Spin */
  getHoldTurboTitleDefault = this.appI18n.computedGame("Auto_title", this.appI18n.instant("Auto_title"));
  getHoldTurboDefaultItem1 = this.appI18n.computedGame("Auto_content_01", this.appI18n.instant("Auto_content_01"));
  /* Auto Spin */
  getAutoSpinTitle = this.appI18n.computedGame("Auto_title", this.appI18n.instant("Auto_title"));
  getAutoSpinItem1 = this.appI18n.computedGame("Auto_content_01", this.appI18n.instant("Auto_content_01"));
  getAutoSpinItem2 = this.appI18n.computedGame("Auto_content_02", this.appI18n.instant("Auto_content_02"));
  /* Turbo */
  getTurboTitleDefault = this.appI18n.computedGame("Turbo_title", this.appI18n.instant("Turbo_title"));
  getTurboDefaultItem1 = this.appI18n.computedGame("Turbo_content", this.appI18n.instant("Turbo_content"));
  getTurboTitleFast = this.appI18n.computedGame("Turbo_title_01", this.appI18n.instant("Turbo_title_01"));
  getTurboFastItem1 = this.appI18n.computedGame("Turbo_content_01", this.appI18n.instant("Turbo_content_01"));
  /* Add Bet */
  addBetTitleKey = this.isGhana() ? "og_bet_info_stake" : "Bet_title";
  getAddBetTitle = this.appI18n.computedGame(this.addBetTitleKey, this.appI18n.instant(this.addBetTitleKey));
  getAddBetItem1 = this.appI18n.computedGame("Bet_content", this.appI18n.instant("Bet_content"));
  /* Demo Play */
  getDemoPlayTitle = this.appI18n.computedGame("Replay_title", this.appI18n.instant("Replay_title"));
  getDemoPlayItem1 = this.appI18n.computedGame("Replay_content", this.appI18n.instant("Replay_content"));
  /* Menu */
  getMenuTitle = this.appI18n.computedGame("Option_title", this.appI18n.instant("Option_title"));
  getMenuItem1 = this.appI18n.computedGame("Option_content", this.appI18n.instant("Option_content"));
  /* Info */
  getInfoTitle = this.appI18n.computedGame("info", this.appI18n.instant("info"));
  getInfoItem1 = this.appI18n.computedGame("Option_Info_content", this.appI18n.instant("Option_Info_content"));
  /* History */
  getHistoryTitle = this.appI18n.computedGame("history", this.appI18n.instant("history"));
  getHistoryItem1 = this.appI18n.computedGame("Option_History_content", this.appI18n.instant("Option_History_content"));
  /* Sound ON */
  getSoundOnTitle = this.appI18n.computedGame("sound", this.appI18n.instant("sound"));
  getSoundOnItem1 = this.appI18n.computedGame("Option_Sound_content", this.appI18n.instant("Option_Sound_content"));
  /* Music ON */
  getMusicOnTitle = this.appI18n.computedGame("music", this.appI18n.instant("music"));
  getMusicOnItem1 = this.appI18n.computedGame("Option_Music_content", this.appI18n.instant("Option_Music_content"));
  /* Note */
  getNoteTitle = this.appI18n.computedGame("Note_title", this.appI18n.instant("Note_title"));
  getNoteItem1 = this.appI18n.computedGame("Note_content_01", this.appI18n.instant("Note_content_01"));
  getNoteItem2 = this.appI18n.computedGame("Note_content_02", this.appI18n.instant("Note_content_02"));
  gameIframeCtrl = inject(GameIframeCtrlService);
  gameVersion = computed(() => {
    return this.gameIframeCtrl.gameVersion() ?? "";
  });
  ngOnInit() {
  }
  onCellClick(cell) {
  }
  onDragStart(event) {
    const scroller = this.contentScroller?.nativeElement;
    if (!scroller)
      return;
    this.isDragging.set(true);
    this.dragStartY = event.clientY;
    this.dragStartScrollTop = scroller.scrollTop;
  }
  onDragMove(event) {
    const scroller = this.contentScroller?.nativeElement;
    if (!scroller || !this.isDragging())
      return;
    const deltaY = event.clientY - this.dragStartY;
    scroller.scrollTop = this.dragStartScrollTop - deltaY;
  }
  onDragEnd() {
    this.isDragging.set(false);
  }
  static \u0275fac = function InfoGuideComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoGuideComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoGuideComponent, selectors: [["info-guide"]], viewQuery: function InfoGuideComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentScroller = _t.first);
    }
  }, inputs: { hideTurbo: [1, "hideTurbo"], hideHoldTurbo: [1, "hideHoldTurbo"], hideAutoplay: [1, "hideAutoplay"], hideNoteItem2: [1, "hideNoteItem2"] }, decls: 23, vars: 36, consts: [[1, "page-container"], [1, "page-content"], [3, "title", "getItem1", "getItem2"], [3, "icon", "title", "getItem1", "getItem2", "hidden"], [3, "icon", "title", "getItem1", "getItem2"], [1, "flex-1", "mt-8"], [1, "text-yellow-200"], [1, "list-disc", "list-none"], [1, "mt-4", "block", "text-center", "text-zinc-400"], ["variant", "red"], ["variant", "black"]], template: function InfoGuideComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, InfoGuideComponent_Conditional_2_Template, 2, 3, "ap-info-guide", 2)(3, InfoGuideComponent_Conditional_3_Template, 2, 3, "ap-info-guide", 2);
      \u0275\u0275conditionalCreate(4, InfoGuideComponent_Conditional_4_Template, 2, 3, "ap-info-guide", 2);
      \u0275\u0275conditionalCreate(5, InfoGuideComponent_Conditional_5_Template, 2, 3, "ap-info-guide", 2);
      \u0275\u0275conditionalCreate(6, InfoGuideComponent_Conditional_6_Template, 4, 6);
      \u0275\u0275elementStart(7, "ap-info-guide", 2);
      \u0275\u0275element(8, "ap-icon-inc-dec");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "ap-info-guide", 3)(10, "ap-info-guide", 4)(11, "ap-info-guide", 4)(12, "ap-info-guide", 4)(13, "ap-info-guide", 4)(14, "ap-info-guide", 4);
      \u0275\u0275elementStart(15, "div", 5)(16, "h5", 6);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ul", 7)(19, "li");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, InfoGuideComponent_Conditional_21_Template, 2, 1, "li");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, InfoGuideComponent_Conditional_22_Template, 2, 1, "time", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isGhana() ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.hideHoldTurbo() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.hideAutoplay() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.hideTurbo() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.getAddBetTitle())("getItem1", ctx.getAddBetItem1())("getItem2", "");
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", "play-circle")("title", ctx.getDemoPlayTitle())("getItem1", ctx.getDemoPlayItem1())("getItem2", "")("hidden", ctx.isGhana());
      \u0275\u0275advance();
      \u0275\u0275property("icon", "bar-3")("title", ctx.getMenuTitle())("getItem1", ctx.getMenuItem1())("getItem2", "");
      \u0275\u0275advance();
      \u0275\u0275property("icon", "exclamation-circle default")("title", ctx.getInfoTitle())("getItem1", ctx.getInfoItem1())("getItem2", "");
      \u0275\u0275advance();
      \u0275\u0275property("icon", "document-text default")("title", ctx.getHistoryTitle())("getItem1", ctx.getHistoryItem1())("getItem2", "");
      \u0275\u0275advance();
      \u0275\u0275property("icon", "speaker-wave default")("title", ctx.getSoundOnTitle())("getItem1", ctx.getSoundOnItem1())("getItem2", "");
      \u0275\u0275advance();
      \u0275\u0275property("icon", "musical-note default")("title", ctx.getMusicOnTitle())("getItem1", ctx.getMusicOnItem1())("getItem2", "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getNoteTitle());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getNoteItem1());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.hideNoteItem2() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.gameVersion() ? 22 : -1);
    }
  }, dependencies: [
    CommonModule,
    ApInfoGuideComponent,
    ApIconSpinComponent,
    ApIconAutoplayCircleComponent,
    ApIconTurboCircleComponent,
    ApIconIncDecComponent,
    ApIconHoldTurboSpinComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoGuideComponent, [{
    type: Component,
    args: [{ selector: "info-guide", imports: [
      CommonModule,
      ApInfoGuideComponent,
      ApIconSpinComponent,
      ApIconAutoplayCircleComponent,
      ApIconTurboCircleComponent,
      ApIconIncDecComponent,
      ApIconHoldTurboSpinComponent
    ], template: `<div class="page-container">
  <div class="page-content">
    <!-- Spin -->
    @if (isGhana()) {
      <ap-info-guide
        [title]="getSpinTitle()"
        [getItem1]="getSpinItem1()"
        [getItem2]="''"
      >
        <ap-icon-spin variant="red"/>
      </ap-info-guide>
    } @else {
      <ap-info-guide
        [title]="getSpinTitle()"
        [getItem1]="getSpinItem1()"
        [getItem2]="''"
      >
        <ap-icon-spin />
      </ap-info-guide>
    }
    <!-- Hold Turbo Spin -->
      @if (!hideHoldTurbo()) {
     <ap-info-guide
        [title]="getHoldTurboTitleDefault()"
        [getItem1]="getHoldTurboDefaultItem1()"
        [getItem2]="''"
      >
        <ap-icon-hold-turbo-spin />
      </ap-info-guide>}
    <!-- Auto Spin -->
    @if (!hideAutoplay()) {
      <ap-info-guide
        [title]="getAutoSpinTitle()"
        [getItem1]="getAutoSpinItem1()"
        [getItem2]="''"
      >
        <ap-icon-autoplay-circle />
      </ap-info-guide>
    }
    <!-- Turbo Spin -->
    @if (!hideTurbo()) {
      <ap-info-guide
        [title]="getTurboTitleDefault()"
        [getItem1]="getTurboDefaultItem1()"
        [getItem2]="''"
      >
        <ap-icon-turbo-circle />
      </ap-info-guide>
      <ap-info-guide
        [title]="getTurboTitleFast()"
        [getItem1]="getTurboFastItem1()"
        [getItem2]="''"
      >
        <ap-icon-turbo-circle variant="black" />
    </ap-info-guide>
    }
    <!-- Add Bet -->
    <ap-info-guide
      [title]="getAddBetTitle()"
      [getItem1]="getAddBetItem1()"
      [getItem2]="''"
    >
      <ap-icon-inc-dec />
    </ap-info-guide>

    <!-- Demo Play -->
    <ap-info-guide
      [icon]="'play-circle'"
      [title]="getDemoPlayTitle()"
      [getItem1]="getDemoPlayItem1()"
      [getItem2]="''"
      [hidden]="isGhana()"
    />

    <!-- Menu -->
    <ap-info-guide
      [icon]="'bar-3'"
      [title]="getMenuTitle()"
      [getItem1]="getMenuItem1()"
      [getItem2]="''"
    />
    <!-- Info -->
    <ap-info-guide
      [icon]="'exclamation-circle default'"
      [title]="getInfoTitle()"
      [getItem1]="getInfoItem1()"
      [getItem2]="''"
    />
    <!-- History -->
    <ap-info-guide
      [icon]="'document-text default'"
      [title]="getHistoryTitle()"
      [getItem1]="getHistoryItem1()"
      [getItem2]="''"
    />
    <!-- Sound ON -->
    <ap-info-guide
      [icon]="'speaker-wave default'"
      [title]="getSoundOnTitle()"
      [getItem1]="getSoundOnItem1()"
      [getItem2]="''"
    />
    <!-- Music ON -->
    <ap-info-guide
      [icon]="'musical-note default'"
      [title]="getMusicOnTitle()"
      [getItem1]="getMusicOnItem1()"
      [getItem2]="''"
    />

    <div class="flex-1 mt-8">
      <h5 class="text-yellow-200">{{ getNoteTitle() }}</h5>
    </div>
    <ul class="list-disc list-none">
      <li>{{ getNoteItem1() }}</li>
      @if (!hideNoteItem2()) {
        <li>{{ getNoteItem2() }}</li>
      }
    </ul>
    @if (gameVersion()) {
      <time class="mt-4 block text-center text-zinc-400">
        {{ gameVersion() }}
      </time>
    }
  </div>
</div>
` }]
  }], null, { contentScroller: [{
    type: ViewChild,
    args: ["contentScroller"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoGuideComponent, { className: "InfoGuideComponent", filePath: "src/app/pages/info-guide/info-guide.component.ts", lineNumber: 22 });
})();

// src/app/pages/info-pay-table-default/info-pay-table-default.component.ts
function InfoPayTableDefaultComponent_For_3_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position, true));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoPayTableDefaultComponent_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoPayTableDefaultComponent_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.info.getImageUrl(entry_r1.content) + `?v=${ctx_r1.version()}`, \u0275\u0275sanitizeUrl)("alt", entry_r1.content);
  }
}
function InfoPayTableDefaultComponent_For_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "ul", 5)(2, "li");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.positionClass(entry_r1.position));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r1.content);
  }
}
function InfoPayTableDefaultComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InfoPayTableDefaultComponent_For_3_Case_0_Template, 3, 2, "section", 2)(1, InfoPayTableDefaultComponent_For_3_Case_1_Template, 3, 2, "section", 2)(2, InfoPayTableDefaultComponent_For_3_Case_2_Template, 2, 3, "section", 2)(3, InfoPayTableDefaultComponent_For_3_Case_3_Template, 4, 2, "section", 2);
  }
  if (rf & 2) {
    let tmp_10_0;
    const entry_r1 = ctx.$implicit;
    \u0275\u0275conditional((tmp_10_0 = entry_r1.category) === "title" ? 0 : tmp_10_0 === "subtitle" ? 1 : tmp_10_0 === "image" ? 2 : tmp_10_0 === "content" ? 3 : -1);
  }
}
var InfoPayTableDefaultComponent = class _InfoPayTableDefaultComponent {
  info = inject(InfoCtrlService);
  session = inject(ClientSessionService);
  /** info的版本是看system info的版本 */
  version = computed(() => this.session.version().sys);
  positionClass(position, useFlex = false) {
    switch (position) {
      case "center":
        return useFlex ? "justify-center text-center" : "text-center";
      case "right":
        return useFlex ? "justify-end text-right" : "text-right";
      case "left":
      default:
        return useFlex ? "justify-start text-left" : "text-left";
    }
  }
  static \u0275fac = function InfoPayTableDefaultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoPayTableDefaultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoPayTableDefaultComponent, selectors: [["info-pay-table-default"]], decls: 4, vars: 0, consts: [[1, "page-container"], ["id", "symbols-section", 1, "page-content"], [3, "ngClass"], [1, "text-yellow-200"], [1, "mx-auto", 3, "src", "alt"], [1, "list-space"]], template: function InfoPayTableDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, InfoPayTableDefaultComponent_For_3_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.info.paytableEntries());
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoPayTableDefaultComponent, [{
    type: Component,
    args: [{ selector: "info-pay-table-default", imports: [CommonModule], template: '<div class="page-container">\n  <div id="symbols-section" class="page-content">\n    @for (entry of info.paytableEntries(); track $index) {\n      @switch (entry.category) {\n        @case ("title") {\n          <section [ngClass]="positionClass(entry.position, true)">\n            <h3 class="text-yellow-200">{{ entry.content }}</h3>\n          </section>\n        }\n        @case ("subtitle") {\n          <section [ngClass]="positionClass(entry.position)">\n            <h4>{{ entry.content }}</h4>\n          </section>\n        }\n        @case ("image") {\n          <section [ngClass]="positionClass(entry.position)">\n            <img\n              [src]="info.getImageUrl(entry.content) + `?v=${version()}`"\n              [alt]="entry.content"\n              class="mx-auto"\n            />\n          </section>\n        }\n        @case ("content") {\n          <section [ngClass]="positionClass(entry.position)">\n            <ul class="list-space">\n              <li>{{ entry.content }}</li>\n            </ul>\n          </section>\n        }\n      }\n    }\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoPayTableDefaultComponent, { className: "InfoPayTableDefaultComponent", filePath: "src/app/pages/info-pay-table-default/info-pay-table-default.component.ts", lineNumber: 11 });
})();

// src/app/pages/info/info.component.ts
function InfoComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "info-pay-table-default");
  }
}
function InfoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InfoComponent_Conditional_4_Conditional_0_Template, 1, 0, "info-pay-table-default");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.hidePayTable() ? 0 : -1);
  }
}
function InfoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "info-feature");
  }
}
function InfoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "info-guide", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("hideTurbo", ctx_r0.hideTurboGuide())("hideAutoplay", ctx_r0.hideAutoplay())("hideNoteItem2", ctx_r0.hideNoteItem2());
  }
}
var EntryEnum;
(function(EntryEnum2) {
  EntryEnum2[EntryEnum2["title_left"] = 0] = "title_left";
  EntryEnum2[EntryEnum2["title_center"] = 1] = "title_center";
  EntryEnum2[EntryEnum2["title_right"] = 2] = "title_right";
  EntryEnum2[EntryEnum2["subtitle_left"] = 3] = "subtitle_left";
  EntryEnum2[EntryEnum2["subtitle_center"] = 4] = "subtitle_center";
  EntryEnum2[EntryEnum2["subtitle_right"] = 5] = "subtitle_right";
  EntryEnum2[EntryEnum2["image_left"] = 6] = "image_left";
  EntryEnum2[EntryEnum2["image_center"] = 7] = "image_center";
  EntryEnum2[EntryEnum2["image_right"] = 8] = "image_right";
  EntryEnum2[EntryEnum2["content_left"] = 9] = "content_left";
  EntryEnum2[EntryEnum2["content_center"] = 10] = "content_center";
  EntryEnum2[EntryEnum2["content_right"] = 11] = "content_right";
})(EntryEnum || (EntryEnum = {}));
var InfoEntry = class {
  category = "content";
  position = "center";
  content = "Invalid entry.";
  activedTab = signal("Pay Table");
  constructor(str) {
    const match = str.split("@");
    if (match) {
      const prefix = EntryEnum[Number(match[0])];
      const subfix = match[1];
      this.category = prefix.split("_")[0];
      this.position = prefix.split("_")[1];
      this.content = subfix;
    }
  }
};
var InfoComponent = class _InfoComponent {
  http;
  profile;
  login;
  api;
  appI18n = inject(AppI18nService);
  gaCollector = inject(GACollectorService);
  header = computed(() => this.appI18n.instant("info") ?? "Info");
  hidePayTable = input(false);
  tabs = computed(() => {
    const tabs = [];
    if (!this.hidePayTable()) {
      tabs.push({
        id: "Pay Table",
        label: this.appI18n.instant("paytable") ?? "Pay Table",
        icon: "document-text"
      });
    }
    tabs.push({
      id: "Feature",
      label: this.appI18n.instant("feature") ?? "Feature",
      icon: "sparkles"
    }, {
      id: "Guide",
      label: this.appI18n.instant("guide") ?? "Guide",
      icon: "book-open"
    });
    return tabs;
  });
  activedTab = signal("Pay Table");
  isBack = signal(false);
  // Breadcrumbs
  breadcrumbs = computed(() => {
    const tab = this.tabs().find((t) => t.id === this.activedTab());
    return [
      { label: this.header(), url: "/info" },
      { label: tab?.label ?? this.activedTab(), url: `/info/${this.activedTab()}` }
    ];
  });
  hideTurboGuide = input(false);
  hideAutoplay = input(false);
  hideNoteItem2 = input(false);
  close = output();
  isLoadingFinished = false;
  featureEntries = [];
  paytableEntries = [];
  gameId = "10087";
  constructor(http, profile, login, api) {
    this.http = http;
    this.profile = profile;
    this.login = login;
    this.api = api;
    effect(() => {
      const visibleTabs = this.tabs();
      const currentTab = this.activedTab();
      const hasCurrentTab = visibleTabs.some((tab) => tab.id === currentTab);
      if (!hasCurrentTab && visibleTabs.length > 0) {
        this.activedTab.set(visibleTabs[0].id);
      }
    });
  }
  ngOnInit() {
  }
  // State
  selectedTab = signal("Pay Table");
  selectTab(buttonType) {
    this.selectedTab.set(buttonType);
  }
  changeTab(tabId) {
    this.activedTab.set(tabId);
    const gaName = InfoTabGAMap[tabId] ?? `info_tab_${tabId}`;
    this.gaCollector.trackButtonClick({ buttonName: gaName });
  }
  ngAfterViewInit() {
    return __async(this, null, function* () {
      const data = yield this.getInfoData();
      this.featureEntries = data.feature;
      const _loginResult = this.api.loginResult();
      if (_loginResult && _loginResult["rtp"]) {
        this.featureEntries.push(new InfoEntry("9@\u25CF RTP: " + _loginResult["rtp"]));
      }
      this.paytableEntries = data.paytable;
      this.isLoadingFinished = true;
    });
  }
  getInfoData() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const path = `../system/game_word/${this.gameId}/${this.login.language}/game_word.json`;
        this.http.get(path).subscribe({
          next: (data) => {
            const feature = Object.entries(data).filter(([key]) => key.startsWith("info_feature_")).map(([, value]) => value);
            const paytable = Object.entries(data).filter(([key]) => key.startsWith("info_paytable_")).map(([, value]) => value);
            resolve({
              feature: feature.map((value) => new InfoEntry(value)),
              paytable: paytable.map((value) => new InfoEntry(value))
            });
          },
          error: (err) => {
            reject(err);
          }
        });
      });
    });
  }
  static \u0275fac = function InfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(PlayerWalletService), \u0275\u0275directiveInject(ClientSessionService), \u0275\u0275directiveInject(AppInterfaceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoComponent, selectors: [["page-info"]], inputs: { hidePayTable: [1, "hidePayTable"], hideTurboGuide: [1, "hideTurboGuide"], hideAutoplay: [1, "hideAutoplay"], hideNoteItem2: [1, "hideNoteItem2"] }, outputs: { close: "close" }, decls: 7, vars: 6, consts: [[3, "close", "header", "enableBack"], [1, "relative", "z-sticky", "flex", "h-full", "flex-col"], [3, "tabChange", "tabs", "selectedTab", "accentColor"], [1, "min-h-0", "flex-1", "overflow-hidden", "pt-12"], [3, "hideTurbo", "hideAutoplay", "hideNoteItem2"]], template: function InfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ap-ui-frame-page", 0);
      \u0275\u0275listener("close", function InfoComponent_Template_ap_ui_frame_page_close_0_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "ap-tab-menu-text", 2);
      \u0275\u0275listener("tabChange", function InfoComponent_Template_ap_tab_menu_text_tabChange_2_listener($event) {
        return ctx.changeTab($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275conditionalCreate(4, InfoComponent_Conditional_4_Template, 1, 1)(5, InfoComponent_Conditional_5_Template, 1, 0, "info-feature")(6, InfoComponent_Conditional_6_Template, 1, 3, "info-guide", 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("header", ctx.header())("enableBack", ctx.isBack());
      \u0275\u0275advance(2);
      \u0275\u0275property("tabs", ctx.tabs())("selectedTab", ctx.activedTab())("accentColor", "yellow");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activedTab() === "Pay Table" ? 4 : ctx.activedTab() === "Feature" ? 5 : ctx.activedTab() === "Guide" ? 6 : -1);
    }
  }, dependencies: [CommonModule, ApUiFramePageComponent, InfoFeatureComponent, InfoGuideComponent, InfoPayTableDefaultComponent, ApTabMenuTextComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoComponent, [{
    type: Component,
    args: [{ selector: "page-info", imports: [CommonModule, ApUiFramePageComponent, InfoFeatureComponent, InfoGuideComponent, InfoPayTableDefaultComponent, ApTabMenuTextComponent], template: `<ap-ui-frame-page
  [header]="header()"
  [enableBack]="isBack()"
  (close)="close.emit()"
>
  <div class="relative z-sticky flex h-full flex-col">
    <ap-tab-menu-text
      [tabs]="tabs()"
      [selectedTab]="activedTab()"
      [accentColor]="'yellow'"
      (tabChange)="changeTab($event)"
    />
    <div class="min-h-0 flex-1 overflow-hidden pt-12">
      @if (activedTab() === "Pay Table") {
        @if (!hidePayTable()) {
          <info-pay-table-default />
        }
      } @else if (activedTab() === "Feature") {
        <info-feature />
      } @else if (activedTab() === "Guide") {
        <info-guide
          [hideTurbo]="hideTurboGuide()"
          [hideAutoplay]="hideAutoplay()"
          [hideNoteItem2]="hideNoteItem2()"
        />
      }
    </div>
  </div>
</ap-ui-frame-page>
` }]
  }], () => [{ type: HttpClient }, { type: PlayerWalletService }, { type: ClientSessionService }, { type: AppInterfaceService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoComponent, { className: "InfoComponent", filePath: "src/app/pages/info/info.component.ts", lineNumber: 61 });
})();

// src/app/pages/bottom-panel-popup/bottom-panel-popup.component.ts
function BottomPanelPopupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
    \u0275\u0275listener("close", function BottomPanelPopupComponent_Conditional_0_Template_ap_ui_frame_popup_close_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "ap-icon", 4)(5, "div", 5)(6, "h4", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "ap-button", 8);
    \u0275\u0275listener("click", function BottomPanelPopupComponent_Conditional_0_Template_ap_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("header", ctx_r1.displayHeader())("size", "mobile")("enableClose", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r1.displayIconName());
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r1.displayDescription(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275property("accentColor", "yellow")("label", ctx_r1.displayConfirmText());
  }
}
var BottomPanelPopupComponent = class _BottomPanelPopupComponent {
  appI18n = inject(AppI18nService);
  destroyRef = inject(DestroyRef);
  bottomPanel = inject(BottomPanelService);
  header = input();
  description = input();
  confirmText = input();
  isVisible = this.bottomPanel.isMessagePopupVisible;
  mode = signal("insufficient");
  displayHeader = computed(() => this.header() ?? this.appI18n.instant("replay_message_title", "MESSAGE"));
  /** 根據不同模式顯示不同圖示 */
  displayIconName = computed(() => {
    if (this.mode() === "exit") {
      return "arrow-right-start-on-rectangle";
    }
    return "insufficient";
  });
  /** 根據不同模式顯示不同描述 */
  displayDescription = computed(() => {
    if (this.mode() === "exit") {
      return this.description() ?? this.appI18n.instant("confirm_to_leave_the_game", "Confirm to exit?");
    }
    return this.description() ?? this.appI18n.instant("not_enough_bet", "Insufficient balance");
  });
  displayConfirmText = computed(() => this.confirmText() ?? this.appI18n.instant("OK", "OK"));
  close = output();
  confirm = output();
  constructor() {
    const insufficientSub = this.bottomPanel.insufficientBalance$.subscribe(() => {
      this.mode.set("insufficient");
      this.isVisible.set(true);
    });
    const exitSub = this.bottomPanel.exitConfirm$.subscribe(() => {
      this.mode.set("exit");
      this.isVisible.set(true);
    });
    this.destroyRef.onDestroy(() => {
      insufficientSub.unsubscribe();
      exitSub.unsubscribe();
    });
  }
  onCancel() {
    this.isVisible.set(false);
    this.close.emit();
  }
  onConfirm() {
    this.isVisible.set(false);
    if (this.mode() === "exit") {
      this.bottomPanel.exitAndRedirect();
      return;
    }
    this.confirm.emit();
  }
  static \u0275fac = function BottomPanelPopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomPanelPopupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomPanelPopupComponent, selectors: [["bottom-panel-popup"]], inputs: { header: [1, "header"], description: [1, "description"], confirmText: [1, "confirmText"] }, outputs: { close: "close", confirm: "confirm" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay", "fade-out"], [1, "-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "header", "size", "enableClose"], [1, "p-4", "text-center", "space-y-4"], [1, "text-yellow-400", "popup-icon", "mx-auto", 3, "name"], [1, "h-px", "divider-gradient-yellow", "opacity-80"], [1, "text-zinc-300", 3, "innerHTML"], [1, "flex", "justify-center", "p-6"], [1, "w-full", "[&>button]:w-full", 3, "click", "accentColor", "label"]], template: function BottomPanelPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, BottomPanelPopupComponent_Conditional_0_Template, 9, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isVisible() ? 0 : -1);
    }
  }, dependencies: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomPanelPopupComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "bottom-panel-popup", imports: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent], template: `@if (isVisible()) {
  <div class="fixed inset-0 grid place-items-center">
    <div class="absolute inset-0 popup-overlay fade-out"></div>
    <ap-ui-frame-popup
      [header]="displayHeader()"
      [size]="'mobile'"
      [enableClose]="true"
      class="-11/12 md:w-3/4 lg:w-1/2"
      (close)="onCancel()"
    >
      <div class="p-4 text-center space-y-4">
        <ap-icon
          [name]="displayIconName()"
          class="text-yellow-400 popup-icon mx-auto"
        />
        <div class="h-px divider-gradient-yellow opacity-80"></div>
        <h4 class="text-zinc-300" [innerHTML]="displayDescription()"></h4>
      </div>

      <div class="flex justify-center p-6">
        <ap-button
          class="w-full [&>button]:w-full"
          [accentColor]="'yellow'"
          [label]="displayConfirmText()"
          (click)="onConfirm()"
        />
      </div>
    </ap-ui-frame-popup>
  </div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomPanelPopupComponent, { className: "BottomPanelPopupComponent", filePath: "src/app/pages/bottom-panel-popup/bottom-panel-popup.component.ts", lineNumber: 24 });
})();

export {
  HistoryListComponent,
  InfoComponent,
  BottomPanelPopupComponent
};
//# sourceMappingURL=chunk-HAJJI7JE.js.map
