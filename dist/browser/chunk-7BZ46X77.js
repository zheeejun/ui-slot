import {
  ApBfCardBetControlComponent,
  ApBfCardChanceComponent,
  ApBfPopupConfirmChanceComponent,
  ApBfPopupConfirmFeatureComponent,
  ApBfPopupPlayDemoConfirmComponent,
  ApCampaignCardComponent,
  ApCampaignListComponent,
  ApCashDropListComponent,
  ApCashdropCardCountdownComponent,
  ApIconBadgeFirstComponent,
  ApIconBadgeSecondComponent,
  ApIconBadgeThirdComponent,
  ApIconGiftCouponComponent,
  ApPromoCodeQrCodeComponent,
  ApTabMenuIconComponent,
  ApTrnCardBonusComponent,
  ApTrnCardMatchComponent,
  ApTrnCardTitleComponent,
  ApTrnFloatButtonComponent,
  ApTrnFloatCountdownComponent,
  ApTrnGameHintComponent,
  ApTrnGameListComponent,
  ApTrnGameMatchFinished,
  ApTrnGameResultComponent,
  ApTrnListRowComponent,
  ApTrnStatusBarComponent,
  TrnCreatedNotificationComponent,
  TrnGameConfirmComponent,
  TrnGameEventLeaveConfirmComponent,
  defaultPlayersList,
  trnDefaultDataList
} from "./chunk-IT3VPYOU.js";
import {
  CampaignFacadeService,
  CashDropService,
  EventCenterCtrlService,
  PromoCodeExchangeTypeEnum,
  formatCampaignList
} from "./chunk-OXRM73HY.js";
import {
  TrnCtrlService
} from "./chunk-T55X5QHE.js";
import {
  ApUiTabGroupComponent
} from "./chunk-47SOIXJB.js";
import {
  ApInputBox
} from "./chunk-H6P7MZH6.js";
import {
  GACollectorService,
  LeaderBoardService
} from "./chunk-2ESHPC34.js";
import {
  HistoryReplayService,
  HistoryReplayViewerComponent
} from "./chunk-PVVJIEXS.js";
import {
  NavigatorShareService
} from "./chunk-QV3OQAJE.js";
import {
  ApBfCardFeatureComponent,
  ApHistoryPopupReplayComponent
} from "./chunk-7JE6XNVC.js";
import {
  ApUiFramePageComponent,
  TO_GA_ID
} from "./chunk-N3TTLE6J.js";
import {
  takeUntilDestroyed
} from "./chunk-COCIR4RJ.js";
import {
  AppI18nPipe
} from "./chunk-OW2FH27N.js";
import {
  ApUiFramePopupComponent
} from "./chunk-N4LJSHXE.js";
import {
  BaseSymbolTextureService
} from "./chunk-4OJJGH2R.js";
import {
  MoneyTextPipe
} from "./chunk-6XO7DG7K.js";
import {
  BottomPanelService
} from "./chunk-NVHIFZTE.js";
import {
  FindModeIndex,
  PlayerWalletService,
  isHistoryReplaySupported
} from "./chunk-HNY47POZ.js";
import {
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-NMZ7HZYU.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-MTOHY3QQ.js";
import {
  ApWebReplaySessionKey
} from "./chunk-TBKOLJZS.js";
import {
  ApToggleSwitchComponent
} from "./chunk-MKS37EB3.js";
import {
  ApButtonComponent
} from "./chunk-3HIHH7J6.js";
import {
  ApIconComponent
} from "./chunk-YL37OG34.js";
import {
  AppInterfaceService,
  eLeaderUserType,
  genLeadboardCacheKey
} from "./chunk-Q3NF4QZ2.js";
import {
  LoggerService,
  MoneyText,
  dec
} from "./chunk-TIGXKRQH.js";
import {
  ClientSessionService,
  StorageCtrlService,
  environment,
  useInGameUIlist
} from "./chunk-B2M5HODU.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  Subject,
  ViewChild,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  delay,
  effect,
  firstValueFrom,
  inject,
  input,
  interval,
  map,
  merge,
  output,
  setClassMetadata,
  signal,
  take,
  takeUntil,
  timer,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-QGU3BS3L.js";

// src/app/pages/event-campaign-content/event-campaign-content.component.ts
var _c0 = ["campaignListSection"];
var _forTrack0 = ($index, $item) => $item.id;
function EventCampaignContentComponent_Conditional_1_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3);
  }
}
function EventCampaignContentComponent_Conditional_1_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-campaign-list", 17);
    \u0275\u0275listener("claim", function EventCampaignContentComponent_Conditional_1_For_18_Template_ap_campaign_list_claim_0_listener() {
      const base_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClaim(base_r5));
    })("play", function EventCampaignContentComponent_Conditional_1_For_18_Template_ap_campaign_list_play_0_listener() {
      const base_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPlay(base_r5));
    })("join", function EventCampaignContentComponent_Conditional_1_For_18_Template_ap_campaign_list_join_0_listener() {
      const base_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onJoin(base_r5));
    })("titleClicked", function EventCampaignContentComponent_Conditional_1_For_18_Template_ap_campaign_list_titleClicked_0_listener() {
      const base_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.debugCampaignClick(base_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const base_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("campaignData", base_r5)("currency", ctx_r1.currencySymbol());
  }
}
function EventCampaignContentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5)(2, "div", 6);
    \u0275\u0275element(3, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8)(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ap-button", 10);
    \u0275\u0275listener("click", function EventCampaignContentComponent_Conditional_1_Template_ap_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollToCampaignList());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 11);
    \u0275\u0275elementStart(9, "div", 12)(10, "label", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 14);
    \u0275\u0275repeaterCreate(13, EventCampaignContentComponent_Conditional_1_For_14_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 15, 0);
    \u0275\u0275repeaterCreate(17, EventCampaignContentComponent_Conditional_1_For_18_Template, 1, 2, "ap-campaign-list", 16, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.groupImage(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("font-anton", !ctx_r1.isChineseGroupTitle());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.groupTitle(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("accentColor", "orange-dark")("size", "small")("label", ctx_r1.jumpToRewardLabel())("icon", "arrow-down");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.groupDescription(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.baseCampaigns()[0].items);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.baseCampaigns());
  }
}
function EventCampaignContentComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 18);
    \u0275\u0275listener("click", function EventCampaignContentComponent_Conditional_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeConfirmPopup());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ap-ui-frame-popup", 19);
    \u0275\u0275listener("close", function EventCampaignContentComponent_Conditional_2_Template_ap_ui_frame_popup_close_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeConfirmPopup());
    });
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21)(5, "div", 22)(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 25)(11, "span", 26);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 27);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 25)(16, "span", 26);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 27);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "moneyText");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 25)(22, "span", 26);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 27);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "moneyText");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 25)(28, "span", 26);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 27);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "moneyText");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 25)(34, "span", 26);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 27);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "moneyText");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 25)(40, "span", 26);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 27);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 28)(45, "ap-button", 29);
    \u0275\u0275listener("clicked", function EventCampaignContentComponent_Conditional_2_Template_ap_button_clicked_45_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPlayNow());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_11_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("header", ctx_r1.popupHeader())("size", "list-content")("enableClose", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.tipCampaignTitleLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tipCampaignNameLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tipExpiryDateLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedEndDateTime());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tipTurnoverRequirementLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 19, ((tmp_9_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_9_0.turnoverRequirement) || 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tipRemainingTurnoverLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 21, ((tmp_11_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_11_0.remainingTurnover) || 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tipMaxWithdrawLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 23, ((tmp_13_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_13_0.maxWithdraw) || 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tipMinWithdrawLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 25, ((tmp_15_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_15_0.minWithdraw) || 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tipCampaignIdLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_17_0 = ctx_r1.selectedCampaign()) == null ? null : tmp_17_0.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("accentColor", "yellow")("label", ctx_r1.playNowLabel());
  }
}
function EventCampaignContentComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 18);
    \u0275\u0275listener("click", function EventCampaignContentComponent_Conditional_3_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeConfirmPopup());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ap-ui-frame-popup", 30)(3, "div", 31);
    \u0275\u0275element(4, "ap-icon", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33);
    \u0275\u0275text(6, " Demo Free Spins & Free Bonus ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 28);
    \u0275\u0275element(8, "ap-button", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("header", ctx_r1.popupHeader())("size", "list-content")("enableClose", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("accentColor", "yellow")("label", "JOIN");
  }
}
function EventCampaignContentComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 4);
  }
}
var EventCampaignContentComponent = class _EventCampaignContentComponent {
  appI18n = inject(AppI18nService);
  api = inject(AppInterfaceService);
  session = inject(ClientSessionService);
  campaign = inject(CampaignFacadeService);
  eventCenter = inject(EventCenterCtrlService);
  locale = inject(ClientSessionService).locale;
  elRef = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  chineseCharPattern = new RegExp("\\p{Script=Han}", "u");
  popupHeader = this.appI18n.computed("promo_inprogress_title", "Campaign In Progress");
  playNowLabel = this.appI18n.computed("Campaign_Play_Btn", "Play Now");
  tipCampaignTitleLabel = this.appI18n.computed("Campaign_EventCenter_Tab", "Campaign:");
  tipCampaignNameLabel = computed(() => {
    const campaign = this.selectedCampaign();
    return campaign ? `${campaign.title}` : "";
  });
  tipExpiryDateLabel = this.appI18n.computed("ExpiryDate_Text", "Expiry Date:");
  tipTurnoverRequirementLabel = this.appI18n.computed("TurnoverRequirement_Text", "Turnover Requirement:");
  tipRemainingTurnoverLabel = this.appI18n.computed("RemainingRequirement_Text", "Remaining Requirement:");
  tipMaxWithdrawLabel = this.appI18n.computed("MaxWithdraw_Text", "Max Withdraw:");
  tipMinWithdrawLabel = this.appI18n.computed("MinWithdraw_Text", "Min Withdraw:");
  tipCampaignIdLabel = this.appI18n.computed("CampaignID_Text", "Campaign ID:");
  campaignGroup = computed(() => {
    const currentId = this.eventCenter.subPath();
    const group = this.campaign.campaignGroupList().find((g) => g.id === currentId);
    return group || null;
  });
  groupImage = computed(() => this.campaignGroup().image);
  groupTitle = computed(() => this.campaignGroup().title);
  isChineseGroupTitle = computed(() => this.chineseCharPattern.test(this.groupTitle()));
  groupDescription = computed(() => this.campaignGroup().description);
  campaignListSection;
  //* Button labels */
  jumpToRewardLabel = this.appI18n.computed("JumpToReward_Btn", "Jump to Reward");
  isLoading = signal(false);
  ngOnInit() {
  }
  //* Campaign status labels */
  endsOnLabel = this.appI18n.computed("EndsOn_Text", "Ends On:");
  currencySymbol = computed(() => this.api.currencySymbol() || "");
  selectedCampaign = signal(null);
  selectedEndDateTime = computed(() => {
    const campaign = this.selectedCampaign();
    return campaign ? new Date(campaign.endTime).toLocaleString(this.locale, { hour12: false }) : "";
  });
  showConfirmPopup = computed(() => this.selectedCampaign() !== null);
  showJoinPopup = signal(false);
  scrollToCampaignList() {
    const target = this.campaignListSection?.nativeElement;
    if (!target)
      return;
    let scrollContainer = target.parentElement;
    while (scrollContainer) {
      const overflow = getComputedStyle(scrollContainer).overflowY;
      if (overflow === "auto" || overflow === "scroll")
        break;
      scrollContainer = scrollContainer.parentElement;
    }
    if (scrollContainer) {
      const offset = target.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top;
      scrollContainer.scrollBy({ top: offset, behavior: "smooth" });
    }
  }
  baseCampaigns = computed(() => {
    const group = this.campaignGroup();
    if (!group)
      return [];
    const campaignList = [];
    for (const campaignId of group.campaignIdList) {
      const campaign = this.campaign.campaignList().find((c) => c.id === campaignId);
      if (campaign) {
        campaignList.push(campaign);
      }
    }
    const campaigns = [];
    for (const campaign of campaignList) {
      if (campaign.status === "completed") {
        continue;
      }
      if (campaign.status === "failed") {
        continue;
      }
      const variant = campaign.status;
      const turnoverRequirement = campaign.withdrawal ? campaign.withdrawal.turnoverThreshold : 0;
      const remainingTurnover = campaign.withdrawal ? campaign.withdrawal.turnoverRemaining : 0;
      const maxWithdraw = campaign.withdrawal ? campaign.withdrawal.limit : 0;
      const minWithdraw = campaign.withdrawal ? campaign.withdrawal.balanceThreshold : 0;
      campaigns.push({
        baseType: campaign.type,
        id: campaign.id || "",
        variant,
        image: "",
        imageAlt: "",
        title: campaign.name,
        description: "",
        items: [],
        condition: campaign.condition,
        progressStatus: campaign.progressStatus,
        progressCurrent: campaign.progressCurrent || 0,
        progressTotal: campaign.progressTotal || 0,
        balance: campaign.balance,
        isFullyClaimed: campaign.isFullyClaimed,
        endTime: campaign.endTime,
        beginTime: campaign.beginTime,
        lastBetTime: campaign.lastBetTime,
        turnoverRequirement,
        remainingTurnover,
        maxWithdraw,
        minWithdraw,
        displayType: campaign.displayType
      });
    }
    campaigns.sort((a, b) => a.endTime - b.endTime);
    campaigns.sort((a, b) => {
      if (a.variant === "inProgress" && b.variant !== "inProgress") {
        return -1;
      } else if (a.variant !== "inProgress" && b.variant === "inProgress") {
        return 1;
      }
      return 0;
    });
    return campaigns;
  });
  /* 跳至內容上方 */
  scrollToTop() {
    let container = this.elRef.nativeElement.parentElement;
    while (container) {
      const overflow = getComputedStyle(container).overflowY;
      if (overflow === "auto" || overflow === "scroll") {
        container.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      container = container.parentElement;
    }
  }
  onClaim(campaign) {
    if (campaign.variant !== "inProgress") {
      return;
    }
    if (campaign.progressStatus === "claimable") {
      const campaignInList = this.campaign.campaignList().find((c) => c.id === campaign.id);
      const progressStatus = campaignInList?.progressStatus || "";
      this.isLoading.set(true);
      merge(this.campaign.offerClaimSuccess$.pipe(map(() => null)), this.campaign.offerClaimFail$).pipe(take(1), delay(200), takeUntilDestroyed(this.destroyRef)).subscribe((fail) => {
        this.isLoading.set(false);
        if (fail) {
          if (!environment.production) {
            alert(`[${fail.errorCode}] ${fail.errorMessage}`);
          }
          return;
        }
        this.closeConfirmPopup();
        this.selectedCampaign.set(campaign);
      });
      this.campaign.sendOfferClaim(campaignInList?.offerId || "");
      return;
    } else {
      this.scrollToTop();
      this.selectedCampaign.set(campaign);
      return;
    }
  }
  onPlay(campaign) {
    if (campaign.variant !== "inProgress") {
      return;
    }
    this.scrollToTop();
    this.selectedCampaign.set(campaign);
  }
  onJoin(campaign) {
    this.isLoading.set(true);
    const sub = this.campaign.joinedSuccess$.pipe(delay(200), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.isLoading.set(false);
      sub.unsubscribe();
    });
    this.campaign.sendEnrollmentCreate(campaign.id);
  }
  closeConfirmPopup() {
    this.selectedCampaign.set(null);
  }
  onPlayNow() {
    const campaign = this.selectedCampaign();
    if (!campaign) {
      return;
    }
    this.closeConfirmPopup();
    this.eventCenter.close();
    this.campaign.setCurrentId(campaign.id);
  }
  debugCampaignClick(campaign) {
    if (!environment.production) {
      const campaignInList = this.campaign.campaignList().find((c) => c.id === campaign.id);
      console.log("Campaign in list:", campaignInList);
    }
  }
  static \u0275fac = function EventCampaignContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventCampaignContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCampaignContentComponent, selectors: [["event-campaign-content"]], viewQuery: function EventCampaignContentComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.campaignListSection = _t.first);
    }
  }, decls: 5, vars: 4, consts: [["campaignListSection", ""], [1, "relative", "page-container"], [1, "flex", "justify-center", "pb-4"], [1, "absolute", "inset-0", "z-overlay", "grid", "place-items-center"], [1, "fixed", "inset-0", "bg-black/50", "z-overlay"], [1, "sticky", "w-full", "max-w-2xl", "rounded-xl", "flex", "flex-col", "overflow-hidden", "campaign-card-frame", "space-y-2"], [1, "relative", "w-full", "overflow-hidden", 2, "aspect-ratio", "670 / 223"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "flex-col", "gap-2", "items-center", "justify-center"], [1, "text-center", "text-yellow-gradient", "text-4xl", "font-medium", "tracking-wide", "uppercase"], [3, "click", "accentColor", "size", "label", "icon"], [1, "w-[80%]", "divider-gradient-yellow", "mx-auto", "mt-2"], [1, "w-full", "px-6"], [1, "whitespace-pre-line", "text-zinc-300"], [1, "list-disc", "list", "list-inside", "space-y-2", "text-left"], [1, "flex-1", "w-full", "p-4", "fade-down"], [3, "campaignData", "currency"], [3, "claim", "play", "join", "titleClicked", "campaignData", "currency"], [1, "absolute", "inset-0", "popup-overlay", "fade-out", 3, "click"], [1, "relative", "w-11/12", "fade-out", 3, "close", "header", "size", "enableClose"], [1, "p-4", "text-zinc-300"], [1, "space-y-2"], [1, "grid", "grid-cols-6", "text-yellow-300"], [1, "col-span-2"], [1, "col-span-4", "text-right", "break-words", "font-medium"], [1, "grid", "grid-cols-[2fr_3fr]", "gap-4"], [1, "min-w-0"], [1, "min-w-0", "text-right", "break-words"], [1, "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "[&>button]:w-full", 3, "clicked", "accentColor", "label"], [1, "relative", "w-11/12", "fade-out", 3, "header", "size", "enableClose"], [1, "h-36", "w-full", "flex", "justify-center", "items-center"], ["name", "gift", 1, "size-28", "text-yellow-400"], [1, "h-16", "w-full", "text-xl", "flex", "justify-center", "items-center"], [1, "w-full", "[&>button]:w-full", 3, "accentColor", "label"]], template: function EventCampaignContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, EventCampaignContentComponent_Conditional_1_Template, 19, 9, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(2, EventCampaignContentComponent_Conditional_2_Template, 46, 27, "div", 3);
      \u0275\u0275conditionalCreate(3, EventCampaignContentComponent_Conditional_3_Template, 9, 5, "div", 3);
      \u0275\u0275conditionalCreate(4, EventCampaignContentComponent_Conditional_4_Template, 1, 0, "ap-loading-overlay", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.campaignGroup() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showConfirmPopup() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showJoinPopup() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 4 : -1);
    }
  }, dependencies: [CommonModule, ApCampaignListComponent, ApButtonComponent, ApUiFramePopupComponent, MoneyTextPipe, ApIconComponent, ApLoadingOverlayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventCampaignContentComponent, [{
    type: Component,
    args: [{ selector: "event-campaign-content", standalone: true, imports: [CommonModule, ApCampaignListComponent, ApButtonComponent, ApUiFramePopupComponent, MoneyTextPipe, ApIconComponent, ApLoadingOverlayComponent], template: `<div class="relative page-container">
  @if (campaignGroup()) {
    <!-- Content Container -->
    <div class="flex justify-center pb-4">
      <div
        class="sticky w-full max-w-2xl rounded-xl flex flex-col overflow-hidden campaign-card-frame space-y-2"
      >
        <!-- Banner Image -->
        <div
          class="relative w-full overflow-hidden"
          style="aspect-ratio: 670 / 223"
        >
          <img [src]="groupImage()" class="h-full w-full object-cover" />
        </div>
        <div class="flex flex-col gap-2 items-center justify-center">
          <div
            class="text-center text-yellow-gradient text-4xl font-medium tracking-wide uppercase"
            [class.font-anton]="!isChineseGroupTitle()"
          >
            {{ groupTitle() }}
          </div>
          <ap-button
            [accentColor]="'orange-dark'"
            [size]="'small'"
            [label]="jumpToRewardLabel()"
            [icon]="'arrow-down'"
            (click)="scrollToCampaignList()"
          />
          <div class="w-[80%] divider-gradient-yellow mx-auto mt-2"></div>
          <div class="w-full px-6">
            <label class="whitespace-pre-line text-zinc-300">
              {{ groupDescription() }}
            </label>
            <ul class="list-disc list list-inside space-y-2 text-left">
              @for (item of baseCampaigns()[0].items; track $index) {
                <li>{{ item }}</li>
              }
            </ul>
          </div>
          <div class="flex-1 w-full p-4 fade-down" #campaignListSection>
            @for (base of baseCampaigns(); track base.id) {
                <ap-campaign-list
                  [campaignData]="base"
                  [currency]="currencySymbol()"
                  (claim)="onClaim(base)"
                  (play)="onPlay(base)"
                  (join)="onJoin(base)"
                  (titleClicked)="debugCampaignClick(base)"
                />
            }
          </div>
        </div>
      </div>
    </div>
  }
</div>

@if (showConfirmPopup()) {
  <div class="absolute inset-0 z-overlay grid place-items-center">
    <div
      class="absolute inset-0 popup-overlay fade-out"
      (click)="closeConfirmPopup()"
    ></div>
    <ap-ui-frame-popup
      [header]="popupHeader()"
      [size]="'list-content'"
      [enableClose]="true"
      class="relative w-11/12 fade-out"
      (close)="closeConfirmPopup()"
    >
      <div class="p-4 text-zinc-300">
        <div class="space-y-2">
          <div class="grid grid-cols-6 text-yellow-300">
            <span class="col-span-2">{{ tipCampaignTitleLabel() }}</span>
            <span class="col-span-4 text-right break-words font-medium">{{
              tipCampaignNameLabel()
            }}</span>
          </div>
          <div class="grid grid-cols-[2fr_3fr] gap-4">
            <span class="min-w-0">{{ tipExpiryDateLabel() }}</span>
            <span class="min-w-0 text-right break-words">{{
              selectedEndDateTime()
            }}</span>
          </div>
          <div class="grid grid-cols-[2fr_3fr] gap-4">
            <span class="min-w-0">{{ tipTurnoverRequirementLabel() }}</span>
            <span class="min-w-0 text-right break-words">{{
              selectedCampaign()?.turnoverRequirement || 0 | moneyText
            }}</span>
          </div>
          <div class="grid grid-cols-[2fr_3fr] gap-4">
            <span class="min-w-0">{{ tipRemainingTurnoverLabel() }}</span>
            <span class="min-w-0 text-right break-words">{{
              selectedCampaign()?.remainingTurnover || 0 | moneyText
            }}</span>
          </div>
          <div class="grid grid-cols-[2fr_3fr] gap-4">
            <span class="min-w-0">{{ tipMaxWithdrawLabel() }}</span>
            <span class="min-w-0 text-right break-words">{{
              selectedCampaign()?.maxWithdraw || 0 | moneyText
            }}</span>
          </div>
          <div class="grid grid-cols-[2fr_3fr] gap-4">
            <span class="min-w-0">{{ tipMinWithdrawLabel() }}</span>
            <span class="min-w-0 text-right break-words">{{
              selectedCampaign()?.minWithdraw || 0 | moneyText
            }}</span>
          </div>
          <div class="grid grid-cols-[2fr_3fr] gap-4">
            <span class="min-w-0">{{ tipCampaignIdLabel() }}</span>
            <span class="min-w-0 text-right break-words">{{
              selectedCampaign()?.id
            }}</span>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center p-4">
        <ap-button
          class="w-full [&>button]:w-full"
          [accentColor]="'yellow'"
          [label]="playNowLabel()"
          (clicked)="onPlayNow()"
        />
      </div>
    </ap-ui-frame-popup>
  </div>
}

<!-- Join Campaign Popup -->
@if (showJoinPopup()) {
  <div class="absolute inset-0 z-overlay grid place-items-center">
    <div
      class="absolute inset-0 popup-overlay fade-out"
      (click)="closeConfirmPopup()"
    ></div>
    <ap-ui-frame-popup
      [header]="popupHeader()"
      [size]="'list-content'"
      [enableClose]="true"
      class="relative w-11/12 fade-out"
    >
      <div class="h-36 w-full flex justify-center items-center">
        <ap-icon name="gift" class="size-28 text-yellow-400"></ap-icon>
      </div>
      <div class="h-16 w-full text-xl flex justify-center items-center">
        Demo Free Spins & Free Bonus
      </div>
      <div class="flex items-center justify-center p-4">
        <ap-button
          class="w-full [&>button]:w-full"
          [accentColor]="'yellow'"
          [label]="'JOIN'"
        />
      </div>
    </ap-ui-frame-popup>
  </div>
}

@if (isLoading()) {
  <ap-loading-overlay class="fixed inset-0 bg-black/50 z-overlay" />
}` }]
  }], null, { campaignListSection: [{
    type: ViewChild,
    args: ["campaignListSection"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCampaignContentComponent, { className: "EventCampaignContentComponent", filePath: "src/app/pages/event-campaign-content/event-campaign-content.component.ts", lineNumber: 27 });
})();

// src/app/pages/event-campaign-cards/event-campaign-cards.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function EventCampaignCardsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-campaign-content");
  }
}
function EventCampaignCardsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "ap-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getNoDataText());
  }
}
function EventCampaignCardsComponent_Conditional_2_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-campaign-card", 8);
    \u0275\u0275listener("click", function EventCampaignCardsComponent_Conditional_2_For_3_Conditional_0_Template_ap_campaign_card_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const group_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onClickCard(group_r3.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isNew", ctx_r0.checkNew(group_r3.id))("campaignGroup", group_r3);
  }
}
function EventCampaignCardsComponent_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventCampaignCardsComponent_Conditional_2_For_3_Conditional_0_Template, 1, 2, "ap-campaign-card", 7);
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    \u0275\u0275conditional(group_r3.visible ? 0 : -1);
  }
}
function EventCampaignCardsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 6);
    \u0275\u0275repeaterCreate(2, EventCampaignCardsComponent_Conditional_2_For_3_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.campaignGroups());
  }
}
var EventCampaignCardsComponent = class _EventCampaignCardsComponent {
  /** Service injections */
  wallet = inject(PlayerWalletService);
  session = inject(ClientSessionService);
  campaignCtrl = inject(CampaignFacadeService);
  api = inject(AppInterfaceService);
  eventCenter = inject(EventCenterCtrlService);
  storage = inject(StorageCtrlService);
  appI18n = inject(AppI18nService);
  elRef = inject(ElementRef);
  prevShowContent = false;
  /** 最大記錄的點擊過的活動卡片數量 */
  maxRecordedClickedCards = 20;
  /** Campaign card data and events */
  campaignGroups = computed(() => this.campaignCtrl.campaignGroupList());
  isEmpty = computed(() => this.campaignGroups().length === 0);
  /** 字串串接 */
  getNoDataText = this.appI18n.computed("item_ItemCanntBuyDesc", "Coming Soon...");
  showContent = computed(() => {
    return this.eventCenter.subPath() !== "";
  });
  /* 跳至卡片上方 */
  constructor() {
    effect(() => {
      const current = this.showContent();
      if (this.prevShowContent && !current) {
        this.scrollToTop();
      }
      this.prevShowContent = current;
    });
  }
  scrollToTop() {
    let container = this.elRef.nativeElement.parentElement;
    while (container) {
      const overflow = getComputedStyle(container).overflowY;
      if (overflow === "auto" || overflow === "scroll") {
        container.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      container = container.parentElement;
    }
  }
  userId = computed(() => this.api.loginResultNote()?.nickname ?? "");
  onClickCard(groupId) {
    this.campaignCtrl.recordClickedGroup(groupId);
    this.scrollToTop();
    this.eventCenter.open(`campaign/${groupId}`);
  }
  checkNew(groupId) {
    return this.campaignCtrl.checkNewGroup(groupId);
  }
  static \u0275fac = function EventCampaignCardsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventCampaignCardsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCampaignCardsComponent, selectors: [["event-campaign-cards"]], decls: 3, vars: 1, consts: [[1, "relative", "page-container", "flex", "flex-col", "justify-center", "fade-down"], [1, "page-container", "fade-down"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "pointer-events-none"], [1, "flex", "flex-col", "items-center"], ["name", "gift default", 1, "image-icon"], [1, "italic", "text-zinc-500"], [1, "flex", "flex-wrap", "justify-center", "p-6", "gap-8", "sm:space-y-8"], [1, "hover-scale", 3, "isNew", "campaignGroup"], [1, "hover-scale", 3, "click", "isNew", "campaignGroup"]], template: function EventCampaignCardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, EventCampaignCardsComponent_Conditional_0_Template, 1, 0, "event-campaign-content")(1, EventCampaignCardsComponent_Conditional_1_Template, 6, 1, "div", 0)(2, EventCampaignCardsComponent_Conditional_2_Template, 4, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showContent() ? 0 : ctx.campaignGroups().length === 0 ? 1 : 2);
    }
  }, dependencies: [ApCampaignCardComponent, CommonModule, EventCampaignContentComponent, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventCampaignCardsComponent, [{
    type: Component,
    args: [{ selector: "event-campaign-cards", imports: [ApCampaignCardComponent, CommonModule, EventCampaignContentComponent, ApIconComponent], template: '@if (showContent()) {\n  <event-campaign-content />\n} @else if (campaignGroups().length === 0) {\n  <div class="relative page-container flex flex-col justify-center fade-down">\n    <div\n      class="flex flex-col items-center justify-center h-full pointer-events-none"\n    >\n      <div class="flex flex-col items-center">\n        <ap-icon name="gift default" class="image-icon" />\n      </div>\n      <h2 class="italic text-zinc-500">{{ getNoDataText() }}</h2>\n    </div>\n  </div>\n} @else {\n  <div class="page-container fade-down">\n    <div class="flex flex-wrap justify-center p-6 gap-8 sm:space-y-8">\n      @for (group of campaignGroups(); track group.id) {\n        @if (group.visible) {\n          <ap-campaign-card\n            class="hover-scale"\n            [isNew]="checkNew(group.id)"\n            [campaignGroup]="group"\n            (click)="onClickCard(group.id)"\n          />\n        }\n      }\n    </div>\n  </div>\n}\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCampaignCardsComponent, { className: "EventCampaignCardsComponent", filePath: "src/app/pages/event-campaign-cards/event-campaign-cards.component.ts", lineNumber: 23 });
})();

// src/app/pages/event-buy-feature/event-buy-feature.component.ts
function EventBuyFeatureComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 5);
    \u0275\u0275element(2, "ap-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getEmptyText());
  }
}
function EventBuyFeatureComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay");
  }
}
function EventBuyFeatureComponent_Conditional_2_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "ap-bf-card-chance", 14);
    \u0275\u0275listener("activate", function EventBuyFeatureComponent_Conditional_2_Conditional_5_For_1_Template_ap_bf_card_chance_activate_1_listener() {
      const card_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.startBuyChance(card_r4));
    })("deactivate", function EventBuyFeatureComponent_Conditional_2_Conditional_5_For_1_Template_ap_bf_card_chance_deactivate_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.stopByChance());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("card", card_r4)("currency", card_r4.currency)("price", ctx_r0.wallet.multiplyUserBet(card_r4.rate))("disabled", ctx_r0.wallet.multiplyUserBet(card_r4.rate) > ctx_r0.wallet.balance() || ctx_r0.isCampaignActive())("activated", ctx_r0.wallet.spinMode() === card_r4.mode);
  }
}
function EventBuyFeatureComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EventBuyFeatureComponent_Conditional_2_Conditional_5_For_1_Template, 2, 5, "div", 12, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.buyChanceCards());
  }
}
function EventBuyFeatureComponent_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "ap-bf-card-feature", 15);
    \u0275\u0275listener("buttonClick", function EventBuyFeatureComponent_Conditional_2_For_7_Template_ap_bf_card_feature_buttonClick_1_listener() {
      const card_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openBuyFeatureConfirm(card_r6));
    })("playDemo", function EventBuyFeatureComponent_Conditional_2_For_7_Template_ap_bf_card_feature_playDemo_1_listener() {
      const card_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPlayDemoConfirm(card_r6));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("card", card_r6)("price", ctx_r0.wallet.multiplyUserBet(card_r6.rate))("disabled", ctx_r0.wallet.multiplyUserBet(card_r6.rate) > ctx_r0.wallet.balance() || ctx_r0.wallet.isDoubleChance() || ctx_r0.isCampaignActive());
  }
}
function EventBuyFeatureComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "ap-icon", 16);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.hintLabel(), " ");
  }
}
function EventBuyFeatureComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "ap-bf-card-bet-control", 10);
    \u0275\u0275listener("increase", function EventBuyFeatureComponent_Conditional_2_Template_ap_bf_card_bet_control_increase_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.wallet.increaseBet());
    })("decrease", function EventBuyFeatureComponent_Conditional_2_Template_ap_bf_card_bet_control_decrease_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.wallet.decreaseBet());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275conditionalCreate(4, EventBuyFeatureComponent_Conditional_2_Conditional_4_Template, 1, 0, "ap-loading-overlay")(5, EventBuyFeatureComponent_Conditional_2_Conditional_5_Template, 2, 0);
    \u0275\u0275repeaterCreate(6, EventBuyFeatureComponent_Conditional_2_For_7_Template, 2, 3, "div", 12, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, EventBuyFeatureComponent_Conditional_2_Conditional_8_Template, 4, 1, "div", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("bet", ctx_r0.wallet.displayBet())("isMax", ctx_r0.wallet.isBetMax())("isMin", ctx_r0.wallet.isBetMin());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showLoadingOverlay() ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.buyFeatureCards());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showTrnHint() ? 8 : -1);
  }
}
function EventBuyFeatureComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-bf-popup-confirm-feature", 18);
    \u0275\u0275listener("close", function EventBuyFeatureComponent_Conditional_3_Template_ap_bf_popup_confirm_feature_close_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBuyFeatureConfirm());
    })("confirm", function EventBuyFeatureComponent_Conditional_3_Template_ap_bf_popup_confirm_feature_confirm_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startBuyFeature());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("card", ctx_r0.confirmCard())("header", ctx_r0.getConfirmHeaderText())("description", ctx_r0.getFeatureConfirmDescription())("confirmText", ctx_r0.getConfirmButtonText())("cancelText", ctx_r0.getCancelButtonText())("currency", ((tmp_6_0 = ctx_r0.confirmCard()) == null ? null : tmp_6_0.currency) ?? "$")("price", ctx_r0.wallet.multiplyUserBet((tmp_7_0 = ctx_r0.confirmCard()) == null ? null : tmp_7_0.rate));
  }
}
function EventBuyFeatureComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-bf-popup-confirm-chance", 18);
    \u0275\u0275listener("close", function EventBuyFeatureComponent_Conditional_4_Template_ap_bf_popup_confirm_chance_close_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBuyChanceConfirm());
    })("confirm", function EventBuyFeatureComponent_Conditional_4_Template_ap_bf_popup_confirm_chance_confirm_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAll.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("card", ctx_r0.confirmCard())("header", ctx_r0.getConfirmHeaderText())("description", ctx_r0.getChanceConfirmDescription())("confirmText", ctx_r0.getConfirmButtonText())("cancelText", ctx_r0.getCancelButtonText())("currency", ((tmp_6_0 = ctx_r0.confirmCard()) == null ? null : tmp_6_0.currency) ?? "$")("price", ctx_r0.wallet.multiplyUserBet((tmp_7_0 = ctx_r0.confirmCard()) == null ? null : tmp_7_0.rate));
  }
}
function EventBuyFeatureComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-bf-popup-play-demo-confirm", 19);
    \u0275\u0275listener("confirm", function EventBuyFeatureComponent_Conditional_5_Template_ap_bf_popup_play_demo_confirm_confirm_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDemoReplayConfirmRequest());
    })("close", function EventBuyFeatureComponent_Conditional_5_Template_ap_bf_popup_play_demo_confirm_close_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDemoReplayCancel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("header", ctx_r0.replayPopupLabel())("description", ctx_r0.replayPopupHint())("cancelText", ctx_r0.getCancelButtonText())("confirmText", ctx_r0.getConfirmButtonText());
  }
}
function EventBuyFeatureComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "history-replay-viewer", 20);
    \u0275\u0275listener("close", function EventBuyFeatureComponent_Conditional_6_Template_history_replay_viewer_close_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDemoReplayClose());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("showWatchAgain", true)("showCopyLink", false);
  }
}
var EventBuyFeatureComponent = class _EventBuyFeatureComponent {
  wallet = inject(PlayerWalletService);
  eventCenter = inject(EventCenterCtrlService);
  api = inject(AppInterfaceService);
  symbol = inject(BaseSymbolTextureService);
  session = inject(ClientSessionService);
  appI18n = inject(AppI18nService);
  trn = inject(TrnCtrlService);
  bottom = inject(BottomPanelService);
  replay = inject(HistoryReplayService);
  gaCollector = inject(GACollectorService);
  /** Feature 內文價格說明 */
  getFeatureConfirmDescription = computed(() => {
    const raw = this.appI18n.instant("buy_feature_check_message", "Click Confirm to complete your purchase.");
    const price = dec.comma(this.wallet.multiplyUserBet(this.confirmCard()?.rate));
    const currency = this.confirmCard()?.currency ?? "$";
    return raw.replace("{0}", currency).replace("{1}", price).replace(/\n/g, "<br>");
  });
  /** Double Chance 內文價格說明 */
  getChanceConfirmDescription = computed(() => {
    const raw = this.appI18n.instant("double_chance_check_message", "Click Confirm to complete your purchase.");
    const price = dec.comma(this.wallet.multiplyUserBet(this.confirmCard()?.rate));
    const currency = this.confirmCard()?.currency ?? "$";
    return raw.replace("{0}", currency).replace("{1}", price).replace(/\n/g, "<br>");
  });
  /** 沒有 Feature 或 Double Chance 的情況下，顯示的空頁面 */
  isEmpty = computed(() => {
    return this.wallet.buyFeatureCards().length === 0 && this.wallet.buyChanceCards().length === 0;
  });
  getEmptyText = this.appI18n.computed("buyfeature_no_items_text", "No Buy Feature or Double Chance available.");
  /** Play Demo 確認內文說明 */
  getGameName = this.appI18n.computed(this.session.gameId ?? "", this.session.gameId ?? "");
  getConfirmHeaderText = this.appI18n.computed("message", "Message");
  getConfirmButtonText = this.appI18n.computed("replay_confirm", "Confirm");
  getCancelButtonText = this.appI18n.computed("replay_cancel", "Cancel");
  showBuyFeatureConfirm = signal(false);
  showBuyChanceConfirm = signal(false);
  showPlayDemoConfirm = signal(false);
  showLoadingOverlay = signal(false);
  buyFeatureCards = computed(() => {
    return this.wallet.buyFeatureCards();
  });
  buyChanceCards = computed(() => {
    return this.wallet.buyChanceCards();
  });
  confirmCard = signal(null);
  closeAll = output();
  playDemoDisabled = signal(true);
  showTrnHint = computed(() => {
    return this.trn.betDataTrn() !== null;
  });
  hintLabel = this.appI18n.computed("BuyFeature_TournamentTip", "Costs Increased.");
  historyReplayService = inject(HistoryReplayService);
  isCampaignActive = computed(() => this.wallet.campaignSetting() !== null);
  // Replay viewer 相關
  isPlayDemo = signal(false);
  selectedDemoIndex = signal(0);
  replayPopupLabel = this.appI18n.computed("replay_message_title", "MESSAGE");
  replayPopupHint = this.appI18n.computed("replay_demo_ticket_info", "Feature Preview. For display purposes only. This will not impact your balance or  gameplay.");
  demoGameName = signal("");
  showReplayViewer = computed(() => this.historyReplayService.showReplayViewer());
  constructor() {
  }
  ngOnInit() {
    this.showBuyFeatureConfirm.set(false);
    this.showLoadingOverlay.set(false);
    this.playDemoDisabled.set(true);
  }
  ngAfterViewInit() {
    this.showLoadingOverlay.set(false);
  }
  openBuyFeatureConfirm(card) {
    this.confirmCard.set(card);
    this.showBuyFeatureConfirm.set(true);
  }
  openPlayDemoConfirm(card) {
    const index = FindModeIndex(card.mode ?? "bf");
    this.selectedDemoIndex.set(index);
    this.isPlayDemo.set(true);
    this.gaCollector.trackButtonClick({ buttonName: TO_GA_ID.PlayWithBuyFeatureDemo });
  }
  closeBuyFeatureConfirm() {
    this.showBuyFeatureConfirm.set(false);
    this.confirmCard.set(null);
  }
  closePlayDemoConfirm() {
    this.showPlayDemoConfirm.set(false);
  }
  startBuyFeature() {
    this.wallet.updateSpinMode(this.confirmCard()?.mode ?? "bf");
    this.bottom.spin();
    this.showBuyFeatureConfirm.set(false);
    this.confirmCard.set(null);
    this.closeAll.emit();
  }
  openBuyChanceConfirm(card) {
    this.confirmCard.set(card);
    this.showBuyChanceConfirm.set(true);
    this.startBuyChance(card);
  }
  closeBuyChanceConfirm() {
    this.showBuyChanceConfirm.set(false);
    this.confirmCard.set(null);
    this.stopByChance();
  }
  startBuyChance(card) {
    this.wallet.updateSpinMode(card.mode ?? "dc");
    this.eventCenter.close();
  }
  stopByChance() {
    this.wallet.updateSpinMode(null);
  }
  onChangeBet(betData) {
    this.wallet.updateBet(betData.bet ?? this.wallet.bet());
  }
  /**
   * 開啟 Play Demo 確認對話框
   */
  startPlayDemoInIframe() {
    this.isPlayDemo.set(true);
  }
  /**
   * 處理 Replay 確認請求 - 生成並載入 Demo URL
   */
  onDemoReplayConfirmRequest() {
    this.isPlayDemo.set(false);
    const note = this.api.loginResult()?.note;
    const pid = note?.pid ?? "";
    const brand = note?.brand ?? "";
    const site = note?.site ?? "";
    const gameId = this.session.gameId ?? "";
    const gameName = this.appI18n.instant(gameId, gameId);
    this.demoGameName.set(gameName);
    let demoUrl = this.GetBuyFeatureDemoAddress(this.selectedDemoIndex(), gameId, pid, brand, site);
    this.historyReplayService.openReplayViewer(demoUrl, this.session.isUseInGameUI);
  }
  /**
   * 取消 Replay
   */
  onDemoReplayCancel() {
    this.isPlayDemo.set(false);
  }
  /**
   * 關閉 Replay
   */
  onDemoReplayClose() {
    this.isPlayDemo.set(false);
    this.historyReplayService.closeReplayViewer();
    this.closeAll.emit();
  }
  //* 根據遊戲ID和語言獲取對應的圖片URL，並檢查URL是否有效
  getGameImage() {
    const gameId = this.session.gameId ?? "10087";
    const language = this.session.language ?? "en";
    const imageLanguage = language === "cn" ? "cn" : "en";
    const baseUrl = this.session.assetUrl.replace(/\/+$/, "");
    return this.appI18n.instant("game_image") || `${baseUrl}/icon/${gameId}/112x112/icon_${gameId}_112x112_bkg_${imageLanguage}.jpg`;
  }
  /**
   * 检查指定索引的 Play Demo 是否可用
   * 需同时满足：1. 游戏支持 Replay 2. 文件存在
   * @param index Buy Feature 索引
   * @returns true 表示可用，false 表示不可用
   */
  checkPlayDemoAvailable() {
    const gameId = this.session.gameId ?? "";
    if (!isHistoryReplaySupported(gameId)) {
      return false;
    }
    return true;
  }
  BUY_FEATURE_DEMO_KEY = "buyfeaturedemo";
  /**
   * 產生 Buy Feature Demo 地址
   * 對應 GetBuyFeatureDemoAddress
   * @param buyFeatureIndex Buy Feature 索引
   * @param gameId 遊戲 ID
   * @param pid 平台 ID
   * @param brand 品牌
   * @param site 站點
   * @returns 完整的 Buy Feature Demo URL
   */
  GetBuyFeatureDemoAddress(buyFeatureIndex, gameId, pid, brand, site) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("gameId", gameId);
    urlParams.set("platform", pid);
    urlParams.set("brand", brand);
    urlParams.set("site", site);
    urlParams.set(this.BUY_FEATURE_DEMO_KEY, buyFeatureIndex.toString());
    const queryString = urlParams.toString();
    let gamePath;
    if (this.session.remoteHost) {
      gamePath = this.session.remoteHost;
    } else {
      gamePath = `/${gameId}/index.html`;
    }
    const finalUrl = `${gamePath}?${queryString}`;
    return finalUrl;
  }
  static \u0275fac = function EventBuyFeatureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventBuyFeatureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventBuyFeatureComponent, selectors: [["event-buy-feature"]], outputs: { closeAll: "closeAll" }, decls: 7, vars: 5, consts: [[1, "page-container", "fade-down"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "pointer-events-none"], [1, "fixed", "inset-0", 3, "card", "header", "description", "confirmText", "cancelText", "currency", "price"], [1, "fixed", "inset-0", 3, "header", "description", "cancelText", "confirmText"], [1, "absolute", "inset-0", 3, "showWatchAgain", "showCopyLink"], [1, "flex", "flex-col", "items-center"], ["name", "shopping-cart", 1, "image-icon"], [1, "italic", "text-zinc-500"], [1, "sticky", "z-sticky", "top-0", "shrink-0", "pb-2"], [1, "flex", "items-center", "justify-center"], [3, "increase", "decrease", "bet", "isMax", "isMin"], [1, "relative", "flex", "w-full", "flex-col", "items-start", "gap-12", "overflow-auto", "px-4", "pb-4", "pt-10", "sm:pt-16", "sm:mt-0", "sm:flex-row", "sm:flex-wrap", "sm:justify-center", "sm:gap-x-12", "sm:gap-y-20", "gap-y-28", "sm:px-6", "sm:space-y-12"], [1, "flex", "justify-center", "w-full", "sm:w-auto", "sm:scale-100", "scale-95"], [1, "absolute", "bottom-0", "left-0", "right-0", "bg-zinc-950/90", "px-3", "py-2", "flex", "items-center", "justify-center", "gap-1"], [3, "activate", "deactivate", "card", "currency", "price", "disabled", "activated"], [3, "buttonClick", "playDemo", "card", "price", "disabled"], ["name", "exclamation-circle", 1, "size-5", "text-red-500"], [1, "text-red-500", "font-bold", "text-sm"], [1, "fixed", "inset-0", 3, "close", "confirm", "card", "header", "description", "confirmText", "cancelText", "currency", "price"], [1, "fixed", "inset-0", 3, "confirm", "close", "header", "description", "cancelText", "confirmText"], [1, "absolute", "inset-0", 3, "close", "showWatchAgain", "showCopyLink"]], template: function EventBuyFeatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, EventBuyFeatureComponent_Conditional_1_Template, 5, 1, "div", 1)(2, EventBuyFeatureComponent_Conditional_2_Template, 9, 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, EventBuyFeatureComponent_Conditional_3_Template, 1, 7, "ap-bf-popup-confirm-feature", 2);
      \u0275\u0275conditionalCreate(4, EventBuyFeatureComponent_Conditional_4_Template, 1, 7, "ap-bf-popup-confirm-chance", 2);
      \u0275\u0275conditionalCreate(5, EventBuyFeatureComponent_Conditional_5_Template, 1, 4, "ap-bf-popup-play-demo-confirm", 3);
      \u0275\u0275conditionalCreate(6, EventBuyFeatureComponent_Conditional_6_Template, 1, 2, "history-replay-viewer", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEmpty() ? 1 : 2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showBuyFeatureConfirm() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showBuyChanceConfirm() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isPlayDemo() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showReplayViewer() ? 6 : -1);
    }
  }, dependencies: [CommonModule, ApBfCardBetControlComponent, ApBfPopupConfirmFeatureComponent, ApBfPopupConfirmChanceComponent, ApLoadingOverlayComponent, ApIconComponent, HistoryReplayViewerComponent, ApBfPopupPlayDemoConfirmComponent, ApBfCardChanceComponent, ApBfCardFeatureComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventBuyFeatureComponent, [{
    type: Component,
    args: [{ selector: "event-buy-feature", imports: [CommonModule, ApBfCardBetControlComponent, ApBfPopupConfirmFeatureComponent, ApBfPopupConfirmChanceComponent, ApLoadingOverlayComponent, ApIconComponent, HistoryReplayViewerComponent, ApBfPopupPlayDemoConfirmComponent, ApBfCardChanceComponent, ApBfCardFeatureComponent], template: `<div class="page-container fade-down">
  @if (isEmpty()) {
     <div
      class="flex flex-col items-center justify-center h-full pointer-events-none"
    >
      <div class="flex flex-col items-center">
        <ap-icon name="shopping-cart" class="image-icon" />
      </div>

      <h2 class="italic text-zinc-500 ">{{ getEmptyText() }}</h2>
    </div>
  }
  @else {
    <div class="sticky z-sticky top-0 shrink-0 pb-2">
      <!-- Bet Amount -->
      <div class="flex items-center justify-center">
        <ap-bf-card-bet-control
          [bet]="wallet.displayBet()"
          [isMax]="wallet.isBetMax()"
          [isMin]="wallet.isBetMin()"
          (increase)="wallet.increaseBet()"
          (decrease)="wallet.decreaseBet()"
        />
      </div>
    </div>
    <div
      class="relative flex w-full flex-col items-start gap-12 overflow-auto px-4 pb-4 pt-10 sm:pt-16 sm:mt-0 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-20 gap-y-28  sm:px-6 sm:space-y-12">
      @if (showLoadingOverlay()) {
        <ap-loading-overlay />
      }
      @else {
        <!-- Buy Chance Cards -->
        @for (card of buyChanceCards(); track $index) {
          <div class="flex justify-center w-full sm:w-auto sm:scale-100 scale-95">
            <ap-bf-card-chance
              (activate)="startBuyChance(card)"
              (deactivate)="stopByChance()"
              [card]="card"
              [currency]="card.currency"
              [price]="wallet.multiplyUserBet(card.rate)"
              [disabled]="
                wallet.multiplyUserBet(card.rate) > wallet.balance() ||
                isCampaignActive()
              "
              [activated]="this.wallet.spinMode() === card.mode"
            />
          </div>
        }
      }
      <!-- Buy Feature Cards -->
      @for (card of buyFeatureCards(); track $index) {
        <div class="flex justify-center w-full sm:w-auto sm:scale-100 scale-95">
          <ap-bf-card-feature
            (buttonClick)="openBuyFeatureConfirm(card)"
            [card]="card"
            [price]="wallet.multiplyUserBet(card.rate)"
            (playDemo)="openPlayDemoConfirm(card)"
            [disabled]="
              wallet.multiplyUserBet(card.rate) > wallet.balance() ||
              wallet.isDoubleChance() ||
              isCampaignActive()
            "
          />
        </div>
      }
    </div>

    <!-- Buy Feature Hint -->
    @if (showTrnHint()) {
      <div
        class="absolute bottom-0 left-0 right-0 bg-zinc-950/90 px-3 py-2 flex items-center justify-center gap-1"
      >
        <ap-icon name="exclamation-circle" class="size-5 text-red-500" />
        <span class="text-red-500 font-bold text-sm"> {{ hintLabel() }} </span>
      </div>
    }
  }

</div>

@if (showBuyFeatureConfirm()) {
  <ap-bf-popup-confirm-feature
    [card]="confirmCard()"
    [header]="getConfirmHeaderText()"
    [description]="getFeatureConfirmDescription()"
    [confirmText]="getConfirmButtonText()"
    [cancelText]="getCancelButtonText()"
    class="fixed inset-0"
    (close)="closeBuyFeatureConfirm()"
    (confirm)="startBuyFeature()"
    [currency]="confirmCard()?.currency ?? '$'"
    [price]="wallet.multiplyUserBet(confirmCard()?.rate)"
  />
}

@if (showBuyChanceConfirm()) {
  <ap-bf-popup-confirm-chance
    [card]="confirmCard()"
    [header]="getConfirmHeaderText()"
    [description]="getChanceConfirmDescription()"
    [confirmText]="getConfirmButtonText()"
    [cancelText]="getCancelButtonText()"
    class="fixed inset-0"
    (close)="closeBuyChanceConfirm()"
    (confirm)="closeAll.emit()"
    [currency]="confirmCard()?.currency ?? '$'"
    [price]="wallet.multiplyUserBet(confirmCard()?.rate)"
  />
}

<!-- Play Demo Confirm -->
@if (isPlayDemo()) {
  <ap-bf-popup-play-demo-confirm
    class="fixed inset-0"
    [header]="replayPopupLabel()"
    [description]="replayPopupHint()"
    [cancelText]="getCancelButtonText()"
    [confirmText]="getConfirmButtonText()"
    (confirm)="onDemoReplayConfirmRequest()"
    (close)="onDemoReplayCancel()"
  />
}

<!-- Replay Viewer -->
@if (showReplayViewer()) {
  <history-replay-viewer
    class="absolute inset-0"
    [showWatchAgain]="true"
    [showCopyLink]="false"
    (close)="onDemoReplayClose()"
  />
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventBuyFeatureComponent, { className: "EventBuyFeatureComponent", filePath: "src/app/pages/event-buy-feature/event-buy-feature.component.ts", lineNumber: 37 });
})();

// src/app/pages/event-cashdrop/event-cashdrop.component.ts
var _forTrack03 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.index;
function EventCashdropComponent_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-cashdrop-list", 12);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275property("variant", "list")("leftValue", \u0275\u0275pipeBind1(1, 4, p_r1.prize))("rightValue", `${p_r1.left}`)("bgShade", $index_r2 % 2 === 0 ? "800" : "900");
  }
}
function EventCashdropComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 9);
    \u0275\u0275element(2, "ap-cashdrop-list", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275repeaterCreate(4, EventCashdropComponent_Conditional_4_For_5_Template, 2, 6, "ap-cashdrop-list", 12, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("variant", "header")("leftLabel", ctx_r2.prizeHeaderLeftLabel())("rightLabel", ctx_r2.prizeHeaderRightLabel());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.prizes());
  }
}
function EventCashdropComponent_Conditional_5_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-cashdrop-list", 18);
    \u0275\u0275pipe(1, "moneyText");
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("leftValue", p_r5.isYou ? ctx_r2.isYouLabel() : p_r5.player)("rightValue", \u0275\u0275pipeBind1(1, 3, p_r5.prize))("bgShade", $index_r6 % 2 === 0 ? "800" : "900");
  }
}
function EventCashdropComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 13)(2, "div", 14)(3, "ap-button", 15);
    \u0275\u0275listener("click", function EventCashdropComponent_Conditional_5_Template_ap_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPrevTable());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ap-button", 15);
    \u0275\u0275listener("click", function EventCashdropComponent_Conditional_5_Template_ap_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setNextTable());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "ap-cashdrop-list", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275repeaterCreate(9, EventCashdropComponent_Conditional_5_For_10_Template, 2, 5, "ap-cashdrop-list", 18, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", "chevron-left")("size", "small")("accentColor", "yellow");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedTableTitle(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", "chevron-right")("size", "small")("accentColor", "yellow");
    \u0275\u0275advance();
    \u0275\u0275property("variant", "header")("leftLabel", ctx_r2.winnerHeaderLeftLabel())("rightLabel", ctx_r2.winnerHeaderRightLabel());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.selectedTableContent());
  }
}
function EventCashdropComponent_Conditional_6_For_3_Conditional_0_Template(rf, ctx) {
}
function EventCashdropComponent_Conditional_6_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rule_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rule_r7);
  }
}
function EventCashdropComponent_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventCashdropComponent_Conditional_6_For_3_Conditional_0_Template, 0, 0)(1, EventCashdropComponent_Conditional_6_For_3_Conditional_1_Template, 2, 1, "p", 20);
  }
  if (rf & 2) {
    const rule_r7 = ctx.$implicit;
    \u0275\u0275conditional(rule_r7 === "" ? 0 : 1);
  }
}
function EventCashdropComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 19);
    \u0275\u0275repeaterCreate(2, EventCashdropComponent_Conditional_6_For_3_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.rulesContent());
  }
}
function EventCashdropComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-cashdrop-card-countdown", 21);
    \u0275\u0275listener("click", function EventCashdropComponent_For_10_Template_ap_cashdrop_card_countdown_click_0_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCashDrop(item_r9));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("title", item_r9.name)("endTime", item_r9.endTime)("beginTime", item_r9.beginTime)("selected", item_r9.id === ctx_r2.selectedCashDropId());
  }
}
var EventCashdropComponent = class _EventCashdropComponent {
  destroy$ = new Subject();
  // Services
  appI18n = inject(AppI18nService);
  wallet = inject(PlayerWalletService);
  api = inject(AppInterfaceService);
  cashDrop = inject(CashDropService);
  storage = inject(StorageCtrlService);
  selectedCashDrop = signal(this.cashDrop.focusCashDrop());
  selectedCashDropId = computed(() => this.selectedCashDrop()?.id || "");
  // Selected Tab & Table
  selectedTab = signal("PRIZES");
  selectedTable = signal("LatestWinner");
  dailyRewardItem = computed(() => {
    const items = this.cashDrop.cashDropsByEndTime();
    return items.length > 0 ? items[0] : null;
  });
  // Tab labels
  prizesTabLabel = this.appI18n.computed("cashdrop_tab1", "PRIZES");
  winnersTabLabel = this.appI18n.computed("cashdrop_tab2", "WINNERS");
  rulesTabLabel = this.appI18n.computed("cashdrop_tab3", "RULES");
  tabs = computed(() => [
    { id: "PRIZES", label: this.prizesTabLabel() },
    { id: "WINNERS", label: this.winnersTabLabel() },
    { id: "RULES", label: this.rulesTabLabel() }
  ]);
  // Prizes
  prizeHeaderLeftLabel = this.appI18n.computed("cashdrop_P1", "Prize");
  prizeHeaderRightLabel = this.appI18n.computed("cashdrop_P2", "Prize Left");
  // Winners
  latestWinnerTitle = this.appI18n.computed("cashdrop_W3", "Latest Winners");
  biggestWinnerTitle = this.appI18n.computed("cashdrop_W4", "Biggest Winners");
  youWinTitle = this.appI18n.computed("cashdrop_W6", "You Win");
  mostWinnerTitle = this.appI18n.computed("cashdrop_W5", "Most Winners");
  selectedTableTitle = computed(() => {
    switch (this.selectedTable()) {
      case "BiggestWinner":
        return this.biggestWinnerTitle();
      case "YouWin":
        return this.youWinTitle();
      case "MostWinner":
        return this.mostWinnerTitle();
      default:
        return this.latestWinnerTitle();
    }
  });
  winnerHeaderLeftLabel = this.appI18n.computed("cashdrop_W1", "Player ID");
  winnerHeaderRightLabel = this.appI18n.computed("cashdrop_W2", "Prize");
  // Popup
  popupTitle = this.appI18n.computed("cashdrop_D1_5", "Stand a chance to win Daily Cash Drops!");
  popupButton = this.appI18n.computed("cashdrop_btn2", "OK");
  popupListItems = computed(() => [
    this.appI18n.instant("cashdrop_D4_8") || "Expiry Date:",
    this.appI18n.instant("cashdrop_D4_1") || "Number of prizes:",
    this.appI18n.instant("cashdrop_D4_2") || "Max prize:",
    this.appI18n.instant("cashdrop_D4_3") || "Min Bet:"
  ]);
  // Cache 頁面資料
  prizes = signal([]);
  latestWinners = signal([]);
  biggestWinners = signal([]);
  mostWinners = signal([]);
  youWins = signal([]);
  ruleData = signal(null);
  // Rules 內容
  rulesContent = computed(() => {
    const rule = this.ruleData();
    if (!rule)
      return [];
    const str = (key, fallback) => this.appI18n.instant(key, fallback);
    const result = [];
    if (Number(rule.all_day) > 0) {
      result.push(str("cashdrop_R1_1", "1. {0} Cash Drop event period from {2} to {3}").replace("{0}", rule.name).replace("{2}", rule.begin_time).replace("{3}", rule.end_time));
    } else {
      result.push(str("cashdrop_R1_2", "1. {0} Cash Drop event period from {4} to {5}, and daily period from {6} to {7}").replace("{0}", rule.name).replace("{4}", rule.begin_time).replace("{5}", rule.end_time).replace("{6}", rule.begin_range).replace("{7}", rule.end_range));
    }
    result.push(str("cashdrop_R2", "2. Minimum bet requirement to join in the event is {8}{1}").replace("{8}", "").replace("{1}", MoneyText.format(rule.min_bet_amount, { addSpace: false })));
    result.push(str("cashdrop_R3", "3. Total amount of this event is {8}{9}, which will be randomly given to {10} lucky players.").replace("{8}", "").replace("{9}", MoneyText.format(rule.total_prizes_amount, { addSpace: false })).replace("{10}", rule.total_prizes_count.toLocaleString()));
    const gameNames = rule.game_code_list.map((code) => this.appI18n.instant(code)).join(", ");
    result.push(str("cashdrop_R4", "4. During the event period, players have the chance to win more than one prizes with a random cash prize."));
    result.push(str("cashdrop_R5", "5. Qualified Games for this event: ") + gameNames);
    result.push(str("cashdrop_R6", "6. When you win a prize, the settlement will be completed within one hour at the latest, details available in game history."));
    result.push(str("cashdrop_R7", "Noted 1: When players win any Cash Drop prize, they can also click on the lucky items to get additional prize rewards."));
    result.push(str("cashdrop_R8", "Noted 2: Please make sure the internet is stable when participating in the event. If you disconnect when playing the mini-game, you will be directly settled with Cash Drop prize and the additional rewards obtained from the mini-game."));
    result.push(str("cashdrop_R9", "Noted 3: As mentioned note 2; incase you disconnected from the server during mysterious prize feature."));
    result.push(str("cashdrop_R10", "Situation 1: If you disconnect after clicking on the FALLING REWARDS and win 3 mysterious prizes, you will get the main prize and 3 mysterious prizes for settlement."));
    result.push(str("cashdrop_R11", "Situation 2: If you disconnect before you are able to click on any FALLING REWARDS, you will only get the main prize reward for settlement."));
    return result;
  });
  isYouLabel = this.appI18n.computed("cashdrop_W7", "You");
  userId = computed(() => this.api.loginResultNote()?.nickname ?? "");
  /** 載入 cash drop id 對應的頁面資料 */
  ngOnInit() {
    this.cashDrop.prizeList$.pipe(takeUntil(this.destroy$)).subscribe((v) => this.prizes.set(v));
    this.cashDrop.latestWinners$.pipe(takeUntil(this.destroy$)).subscribe((v) => this.latestWinners.set(v));
    this.cashDrop.biggestWinners$.pipe(takeUntil(this.destroy$)).subscribe((v) => this.biggestWinners.set(v));
    this.cashDrop.mostWinners$.pipe(takeUntil(this.destroy$)).subscribe((v) => this.mostWinners.set(v));
    this.cashDrop.youWins$.pipe(takeUntil(this.destroy$)).subscribe((v) => this.youWins.set(v));
    this.cashDrop.ruleData$.pipe(takeUntil(this.destroy$)).subscribe((v) => this.ruleData.set(v));
    this.cashDrop.requestPageData(this.selectedCashDropId());
    const userId = this.userId();
    const allKeys = this.cashDrop.cashDrops().map((cd) => `${userId}_${cd.id}`);
    let clicked = this.storage.cashDropClicked ?? [];
    let changed = false;
    for (const key of allKeys) {
      if (!clicked.includes(key)) {
        clicked = [...clicked, key];
        changed = true;
      }
    }
    if (changed) {
      this.storage.cashDropClicked = clicked.length > 20 ? clicked.slice(-20) : clicked;
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  selectCashDrop(cashDrop) {
    this.selectedCashDrop.set(cashDrop);
    this.cashDrop.requestPageData(cashDrop.id);
  }
  // 選擇 Tab
  selectTab(buttonType) {
    this.selectedTab.set(buttonType);
  }
  nextTable = {
    LatestWinner: "BiggestWinner",
    BiggestWinner: "MostWinner",
    MostWinner: "YouWin",
    YouWin: "LatestWinner"
  };
  // 切換到下一個 Table
  setNextTable() {
    this.selectedTable.set(this.nextTable[this.selectedTable()]);
  }
  prevTable = {
    LatestWinner: "YouWin",
    BiggestWinner: "LatestWinner",
    MostWinner: "BiggestWinner",
    YouWin: "MostWinner"
  };
  // 切換到上一個 Table
  setPrevTable() {
    this.selectedTable.set(this.prevTable[this.selectedTable()]);
  }
  selectedTableContent = computed(() => {
    const tableMap = {
      LatestWinner: this.latestWinners(),
      BiggestWinner: this.biggestWinners(),
      MostWinner: this.mostWinners(),
      YouWin: this.youWins()
    };
    return tableMap[this.selectedTable()];
  });
  static \u0275fac = function EventCashdropComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventCashdropComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCashdropComponent, selectors: [["event-cashdrop"]], decls: 11, vars: 3, consts: [[1, "page-container"], [1, "sticky", "z-sticky", "top-0", "shrink-0", "pb-2"], [3, "tabChange", "tabs", "selectedTab"], [1, "flex-1", "flex", "justify-center", "overflow-auto"], [1, "w-full", "max-w-2xl", "fade-down"], [1, "page-content"], [1, "relative", "h-36", "w-full", "p-4", "overflow-x-auto", "overflow-y-hidden", 2, "border-top", "0.02rem solid oklch(37% 0.013 285.805)"], [1, "overflow-scrollbar", "relative", "flex", "w-max", "min-w-full", "items-center", "justify-start", "gap-4"], [1, "shrink-0", "cursor-pointer", "hover-scale", 3, "title", "endTime", "beginTime", "selected"], [1, "sticky", "top-0", "bg-zinc-900", "py-2", "px-4"], [1, "cursor-pointer", "select-none", 3, "variant", "leftLabel", "rightLabel"], [1, "px-4", "pb-4"], [3, "variant", "leftValue", "rightValue", "bgShade"], [1, "sticky", "z-sticky", "top-0", "py-2", "px-4", "bg-zinc-900"], [1, "flex", "justify-center", "items-center", "space-x-2", "p-2"], ["variant", "text", 3, "click", "icon", "size", "accentColor"], [1, "flex-1", "text-center", "text-yellow-400", "uppercase"], [3, "variant", "leftLabel", "rightLabel"], ["variant", "list", 1, "animate-fade-down", 3, "leftValue", "rightValue", "bgShade"], [1, "space-y-2"], [1, "text-zinc-300"], [1, "shrink-0", "cursor-pointer", "hover-scale", 3, "click", "title", "endTime", "beginTime", "selected"]], template: function EventCashdropComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ap-ui-tab-group", 2);
      \u0275\u0275listener("tabChange", function EventCashdropComponent_Template_ap_ui_tab_group_tabChange_2_listener($event) {
        return ctx.selectTab($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275conditionalCreate(4, EventCashdropComponent_Conditional_4_Template, 6, 3, "div", 4)(5, EventCashdropComponent_Conditional_5_Template, 11, 10, "div", 4)(6, EventCashdropComponent_Conditional_6_Template, 4, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
      \u0275\u0275repeaterCreate(9, EventCashdropComponent_For_10_Template, 1, 4, "ap-cashdrop-card-countdown", 8, _forTrack03);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("tabs", ctx.tabs())("selectedTab", ctx.selectedTab());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedTab() === "PRIZES" ? 4 : ctx.selectedTab() === "WINNERS" ? 5 : ctx.selectedTab() === "RULES" ? 6 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.cashDrop.cashDropsByEndTime());
    }
  }, dependencies: [CommonModule, ApCashDropListComponent, ApCashdropCardCountdownComponent, ApButtonComponent, ApUiTabGroupComponent, MoneyTextPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventCashdropComponent, [{
    type: Component,
    args: [{ selector: "event-cashdrop", imports: [CommonModule, ApCashDropListComponent, ApCashdropCardCountdownComponent, ApButtonComponent, ApUiTabGroupComponent, MoneyTextPipe], template: `<div class="page-container">
  <!-- Section 1: Tab Buttons -->
  <div class="sticky z-sticky top-0 shrink-0 pb-2">
    <ap-ui-tab-group
      [tabs]="tabs()"
      [selectedTab]="selectedTab()"
      (tabChange)="selectTab($event)"
    />
  </div>

  <!-- Section 2: Content Area (Scrollable) -->
  <div class="flex-1 flex justify-center overflow-auto">
    @if (selectedTab() === "PRIZES") {
      <div class="w-full max-w-2xl fade-down">
        <!-- Prizes Tab Content -->
        <div class="sticky top-0 bg-zinc-900 py-2 px-4">
          <ap-cashdrop-list
            [variant]="'header'"
            [leftLabel]="prizeHeaderLeftLabel()"
            [rightLabel]="prizeHeaderRightLabel()"
            class="cursor-pointer select-none"
          />
        </div>

        <div class="px-4 pb-4">
          <!-- Prize List -->
          @for (p of prizes(); track p.index) {
            <ap-cashdrop-list
              [variant]="'list'"
              [leftValue]="p.prize | moneyText"
              [rightValue]="\`\${p.left}\`"
              [bgShade]="$index % 2 === 0 ? '800' : '900'"
            />
          }
        </div>
      </div>
    } @else if (selectedTab() === "WINNERS") {
      <div class="w-full max-w-2xl fade-down">
        <!-- Winners Tab Content -->
        <div class="sticky z-sticky top-0 py-2 px-4 bg-zinc-900">
          <div class="flex justify-center items-center space-x-2 p-2">
            <ap-button
              variant="text"
              [icon]="'chevron-left'"
              [size]="'small'"
              [accentColor]="'yellow'"
              (click)="setPrevTable()"
            />
            <h4 class="flex-1 text-center text-yellow-400 uppercase">
              {{ selectedTableTitle() }}
            </h4>
            <ap-button
              variant="text"
              [icon]="'chevron-right'"
              [size]="'small'"
              [accentColor]="'yellow'"
              (click)="setNextTable()"
            />
          </div>
          <ap-cashdrop-list
            [variant]="'header'"
            [leftLabel]="winnerHeaderLeftLabel()"
            [rightLabel]="winnerHeaderRightLabel()"
          />
        </div>

        <div class="px-4 pb-4">
          <!-- Prize List -->
          @for (p of selectedTableContent(); track p.index) {
            <ap-cashdrop-list
              variant="list"
              [leftValue]="p.isYou ? isYouLabel() : p.player"
              [rightValue]="p.prize | moneyText"
              [bgShade]="$index % 2 === 0 ? '800' : '900'"
              class="animate-fade-down"
            />
          }
        </div>
      </div>
    } @else if (selectedTab() === "RULES") {
      <div class="page-content">
        <!-- Rules Tab Content -->
        <div class="space-y-2">
          @for (rule of rulesContent(); track $index) {
            @if (rule === "") {
            } @else {
              <p class="text-zinc-300">{{ rule }}</p>
            }
          }
        </div>
      </div>
    }
  </div>

  <!-- Section 3: Event Cards (Sticky Bottom) -->
  <div
    class="relative h-36 w-full p-4 overflow-x-auto overflow-y-hidden"
    style="border-top: 0.02rem solid oklch(37% 0.013 285.805)"
  >
    <div
      class="overflow-scrollbar relative flex w-max min-w-full items-center justify-start gap-4"
    >
      @for (item of cashDrop.cashDropsByEndTime(); track item.id) {
        <ap-cashdrop-card-countdown
          class="shrink-0 cursor-pointer hover-scale"
          [title]="item.name"
          [endTime]="item.endTime"
          [beginTime]="item.beginTime"
          [selected]="item.id === selectedCashDropId()"
          (click)="selectCashDrop(item)"
        />
      }
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCashdropComponent, { className: "EventCashdropComponent", filePath: "src/app/pages/event-cashdrop/event-cashdrop.component.ts", lineNumber: 27 });
})();

// src/app/pages/event-promocode/event-promocode.component.ts
function EventPromoCodeComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("* ", ctx_r0.passHint());
  }
}
function EventPromoCodeComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("* ", ctx_r0.errorHint());
  }
}
function EventPromoCodeComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
    \u0275\u0275elementStart(1, "div", 15)(2, "div")(3, "h2", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275element(8, "ap-promo-code-code", 19)(9, "ap-icon", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.ctaTitle(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.ctaSubTitle(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("size", "20")("backgroundColor", "bg-[radial-gradient(circle,_#71471E_0%,_#000002_70%,_#000000_100%)]");
  }
}
function EventPromoCodeComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "ap-ui-frame-popup", 22);
    \u0275\u0275listener("close", function EventPromoCodeComponent_Conditional_15_Template_ap_ui_frame_popup_close_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClosePopUp());
    });
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275element(4, "ap-icon-gift-coupon", 24)(5, "div", 25);
    \u0275\u0275elementStart(6, "h4", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27)(9, "ap-button", 28);
    \u0275\u0275listener("click", function EventPromoCodeComponent_Conditional_15_Template_ap_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClosePopUp());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("header", ctx_r0.popUpHeader())("size", "mobile");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.popUpDescription());
    \u0275\u0275advance(2);
    \u0275\u0275property("accentColor", "yellow")("label", ctx_r0.popUpConfirmText());
  }
}
function EventPromoCodeComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "ap-loading-overlay");
    \u0275\u0275elementEnd();
  }
}
var EventPromoCodeComponent = class _EventPromoCodeComponent {
  appI18n = inject(AppI18nService);
  api = inject(AppInterfaceService);
  session = inject(ClientSessionService);
  campaign = inject(CampaignFacadeService);
  constructor() {
    this.api.promoCodeResult$.subscribe((msg) => this.onPromoCodeResultMsg(msg));
  }
  promoCode = signal("");
  showPopup = signal(false);
  loading = signal(false);
  passHint = signal("");
  errorHint = signal("");
  ctaSubTitle = signal("");
  allowedCharacterPattern = /[0-9a-zA-Z_]/g;
  // 僅允許 0~9, a~z, A~Z , _
  popUpDescription = signal("You have received Free Bonus from campaign");
  popUpConfirmText = signal("OK");
  popUpHeader = signal("Congratulations!");
  couponTitle = this.appI18n.computed("coupon", "PROMO CODE");
  placeholder = this.appI18n.computed("coupon_1", "Please input redeem code");
  claimLabel = this.appI18n.computed("coupon_2", "Claim");
  ctaTitle = this.appI18n.computed("coupon_3", "Get rewarded and stay ahead!");
  passString = this.appI18n.computed("coupon_popup_1", "Promo code redeemed successfully.");
  hintString = this.appI18n.computed("code_input_tip", "Enter the code to get the reward.");
  couponInfo1 = this.appI18n.computed("coupon_info_1", "Enter the code to get the reward.");
  couponInfo2 = this.appI18n.computed("coupon_info_2", "Cannot be combined with other offers.");
  couponInfo3 = this.appI18n.computed("coupon_info_3", "May not be valid on all items");
  couponInfo4 = this.appI18n.computed("coupon_info_4", "Terms and conditions apply.");
  inputHint = signal(this.hintString());
  errorRecord = computed(() => ({
    "0005000": this.appI18n.instant("coupon_popup_2") ?? "Invalid promo code. Please check the code and try again.",
    "0006001": this.appI18n.instant("coupon_popup_2") ?? "Invalid promo code. Please check the code and try again.",
    "0006002": this.appI18n.instant("coupon_popup_3") ?? "All rewards for this event have been redeemed. Stay tuned for the next one.",
    "0006003": this.appI18n.instant("coupon_popup_4") ?? " This game doesn't support bonus redemption. Please try our recommended games.",
    "0006004": this.appI18n.instant("coupon_popup_5") ?? "All promo codes for today have been claimed. Try again tomorrow.",
    "0006005": this.appI18n.instant("coupon_popup_0006005") ?? "All promo codes for today have been claimed. Try again tomorrow."
  }));
  showQR = computed(() => this.campaign.codeExchangeType() === PromoCodeExchangeTypeEnum.OpenExchangeAndQR);
  popUpQueue = [];
  isPromoCodeValid = computed(() => {
    return this.promoCode().length >= 1 && this.promoCode().length <= 20;
  });
  isValid = computed(() => {
    return this.passHint().length > 0;
  });
  hasError = computed(() => {
    return this.errorHint().length > 0;
  });
  onPromoCodeChange(value) {
    this.promoCode.set(value);
    this.inputHint.set(this.hintString());
    this.passHint.set("");
    this.errorHint.set("");
  }
  onClaimClick() {
    return __async(this, null, function* () {
      this.loading.set(true);
      yield firstValueFrom(timer(250));
      this.api.sendPromoCode(this.promoCode());
    });
  }
  onPromoCodeResultMsg(msg) {
    const campaigns = formatCampaignList(msg.campaignlist);
    const result = {
      errorCode: msg.error_code,
      promoCode: msg.coupon_code,
      list: [...campaigns.freeBonus, ...campaigns.freeSpins]
    };
    if (result.errorCode?.length > 0 && result.errorCode !== "0") {
      this.loading.set(false);
      this.inputHint.set("");
      this.passHint.set("");
      this.errorHint.set(this.errorRecord()[result.errorCode] ?? `Unknown error: ${result.errorCode}`);
      return;
    }
    this.loading.set(false);
    this.inputHint.set("");
    this.passHint.set(this.passString());
    this.errorHint.set("");
    this.popUpQueue = result.list.slice(0);
    this.campaign.updateCampaignList(msg.campaignlist);
    this.campaign.updateCampaignGroupList(msg.campaign_group_list);
    this.openPopUp(this.popUpQueue.pop());
  }
  onClosePopUp() {
    this.showPopup.set(false);
    this.openPopUp(this.popUpQueue.pop());
  }
  openPopUp(campaign) {
    if (!campaign)
      return;
    this.showPopup.set(true);
    if (campaign.condition) {
      const defaultDescription = "Special Event: {0} is now live! Complete the conditions and grab your reward!";
      let description = this.appI18n.instant("promo_fs_21") ?? defaultDescription;
      description = description.replace("{0}", campaign.name);
      this.popUpDescription.set(description);
    } else if (campaign.type === "freeSpins") {
      const defaultDescription = "You have just received '{0}' free spins, with a value of {1}!";
      let description = this.appI18n.instant("promo_fs_13") ?? defaultDescription;
      description = description.replace("{0}", campaign.spinCount.toString());
      description = description.replace("{1}", campaign.totalAmount.toFixed(3));
      this.popUpDescription.set(description);
    } else if (campaign.type === "freeBonus") {
      const defaultDescription = "You've received {1} Free Bonus from {0} campaign!";
      let description = this.appI18n.instant("promo_popup1") ?? defaultDescription;
      description = description.replace("{0}", campaign.name);
      description = description.replace("{1}", campaign.totalAmount.toFixed(3));
      this.popUpDescription.set(description);
    }
  }
  static \u0275fac = function EventPromoCodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventPromoCodeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventPromoCodeComponent, selectors: [["event-promocode"]], decls: 17, vars: 15, consts: [[1, "page-container", "fade-down"], [1, "flex", "justify-center"], [1, "campaign-card-frame", "w-full", "max-w-2xl", "rounded-xl", "flex", "flex-col", "overflow-hidden"], [1, "shrink-0", "p-4"], [1, "card-icon"], [1, "max-w-md", "align-center", "mx-auto", "w-full", "px-4", "sm:p-0"], [1, "w-full", 3, "onInput", "type", "placeholder", "accentColor", "maxLength", "allowedCharacterPattern", "success", "error"], [1, "min-h-10", "max-w-md", "align-center", "mx-auto", "w-full", "px-4", "sm:p-0"], [1, "text-green-400"], [1, "text-red-400"], [1, "flex", "justify-center", "mx-auto", "sm:mt-4", "mb-8", "w-full", "sm:p-0", "p-4"], [1, "w-1/4", "[&>button]:w-full", 3, "clicked", "accentColor", "label", "disabled"], [1, "absolute", "inset-0", "grid", "place-items-center"], [1, "absolute", "inset-0", "bg-black/30"], [1, "sm:w-[70%]", "w-[90%]", "divider-gradient-yellow", "mx-auto"], [1, "flex", "items-center", "justify-center", "gap-4", "text-center", "px-4", "pt-5", "pb-5", "sm:px-6", "sm:pt-6", "sm:pb-6"], [1, "text-gradient-gold", "font-bold", 2, "white-space", "pre-line"], [1, "text-lg", "font-medium", "text-yellow-200", "tracking-wide"], [1, "flex", "items-center", "justify-center", "relative"], [3, "size", "backgroundColor"], ["name", "finger-point", 1, "size-7", "relative", "-left-1", "top-8"], [1, "absolute", "inset-0", "popup-overlay"], [3, "close", "header", "size"], [1, "p-4", "text-center", "space-y-4"], [1, "text-yellow-400", "popup-icon", "mx-auto"], [1, "h-px", "divider-gradient-yellow", "opacity-80"], [1, "text-zinc-300"], [1, "flex", "justify-center", "p-6"], [1, "w-full", "[&>button]:w-full", 3, "click", "accentColor", "label"]], template: function EventPromoCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 3);
      \u0275\u0275element(5, "ap-icon-gift-coupon", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "ap-input-box", 6);
      \u0275\u0275listener("onInput", function EventPromoCodeComponent_Template_ap_input_box_onInput_7_listener($event) {
        return ctx.onPromoCodeChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "h6");
      \u0275\u0275conditionalCreate(10, EventPromoCodeComponent_Conditional_10_Template, 2, 1, "div", 8);
      \u0275\u0275conditionalCreate(11, EventPromoCodeComponent_Conditional_11_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "ap-button", 11);
      \u0275\u0275listener("clicked", function EventPromoCodeComponent_Template_ap_button_clicked_13_listener() {
        return ctx.onClaimClick();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, EventPromoCodeComponent_Conditional_14_Template, 10, 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, EventPromoCodeComponent_Conditional_15_Template, 10, 5, "div", 12);
      \u0275\u0275conditionalCreate(16, EventPromoCodeComponent_Conditional_16_Template, 2, 0, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("type", "text")("placeholder", ctx.placeholder())("accentColor", "yellow")("maxLength", 20)("allowedCharacterPattern", ctx.allowedCharacterPattern)("success", ctx.isValid())("error", ctx.hasError());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.passHint().length > 0 ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorHint().length > 0 ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("accentColor", ctx.isPromoCodeValid() ? "yellow" : "zinc")("label", ctx.claimLabel())("disabled", !ctx.isPromoCodeValid());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showQR() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPopup() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 16 : -1);
    }
  }, dependencies: [CommonModule, ApButtonComponent, ApInputBox, ApIconComponent, ApPromoCodeQrCodeComponent, ApLoadingOverlayComponent, ApUiFramePopupComponent, ApIconGiftCouponComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventPromoCodeComponent, [{
    type: Component,
    args: [{ selector: "event-promocode", imports: [CommonModule, ApButtonComponent, ApInputBox, ApIconComponent, ApPromoCodeQrCodeComponent, ApLoadingOverlayComponent, ApUiFramePopupComponent, ApIconGiftCouponComponent], template: `<div class="page-container fade-down">
  <div class="flex justify-center">
    <div
      class="campaign-card-frame w-full max-w-2xl rounded-xl flex flex-col overflow-hidden"
    >
      <div class="flex justify-center">
        <div class="shrink-0 p-4">
          <ap-icon-gift-coupon class="card-icon" />
        </div>
      </div>

      <!-- Input Field -->
      <div class="max-w-md align-center mx-auto w-full px-4 sm:p-0">
        <ap-input-box
          [type]="'text'"
          [placeholder]="placeholder()"
          [accentColor]="'yellow'"
          [maxLength]="20"
          [allowedCharacterPattern]="allowedCharacterPattern"
          [success]="isValid()"
          [error]="hasError()"
          (onInput)="onPromoCodeChange($event)"
          class="w-full"
        />
      </div>

      <!-- Input Hint -->
      <div class="min-h-10 max-w-md align-center mx-auto w-full px-4 sm:p-0">
        <h6>
          <!--@if (inputHint().length > 0) {
            <div class="text-zinc-500">* {{ inputHint() }}</div>
        }-->
          @if (passHint().length > 0) {
            <div class="text-green-400">* {{ passHint() }}</div>
          }
          @if (errorHint().length > 0) {
            <div class="text-red-400">* {{ errorHint() }}</div>
          }
        </h6>
      </div>

      <!-- Claim Button -->
      <div class="flex justify-center mx-auto sm:mt-4 mb-8 w-full sm:p-0 p-4">
        <ap-button
          class="w-1/4 [&>button]:w-full"
          (clicked)="onClaimClick()"
          [accentColor]="isPromoCodeValid() ? 'yellow' : 'zinc'"
          [label]="claimLabel()"
          [disabled]="!isPromoCodeValid()"
        />
      </div>

      <!-- Terms and Conditions -->
      <!-- <div class="text-sm max-w-md font-base text-zinc-400 mx-auto mt-2">
        <div class="relative">{{ "- " + couponInfo1() }}</div>
        <div class="relative">{{ "- " + couponInfo2() }}</div>
        <div class="relative">{{ "- " + couponInfo3() }}</div>
        <div class="relative">{{ "- " + couponInfo4() }}</div>
      </div> -->
      @if (showQR()) {
        <!-- Divider -->
        <div class="sm:w-[70%] w-[90%] divider-gradient-yellow mx-auto"></div>

        <!-- Subscribe Section -->
        <div
          class="flex items-center justify-center gap-4 text-center px-4 pt-5 pb-5 sm:px-6 sm:pt-6 sm:pb-6"
        >
          <div>
            <h2
              class="text-gradient-gold font-bold"
              style="white-space: pre-line"
            >
              {{ ctaTitle() }}
            </h2>
            <span class="text-lg font-medium text-yellow-200 tracking-wide">
              {{ ctaSubTitle() }}
            </span>
          </div>
          <div class="flex items-center justify-center relative">
            <ap-promo-code-code
              [size]="'20'"
              [backgroundColor]="
                'bg-[radial-gradient(circle,_#71471E_0%,_#000002_70%,_#000000_100%)]'
              "
            />
            <ap-icon
              name="finger-point"
              class="size-7 relative -left-1 top-8"
            />
          </div>
        </div>
      }
    </div>
  </div>

  <!-- Message Popup -->
  @if (showPopup()) {
    <div class="absolute inset-0 grid place-items-center">
      <div class="absolute inset-0 popup-overlay"></div>
      <ap-ui-frame-popup
        [header]="popUpHeader()"
        [size]="'mobile'"
        (close)="onClosePopUp()"
      >
        <div class="p-4 text-center space-y-4">
          <ap-icon-gift-coupon class="text-yellow-400 popup-icon mx-auto" />
          <div class="h-px divider-gradient-yellow opacity-80"></div>
          <h4 class="text-zinc-300">{{ popUpDescription() }}</h4>
        </div>
        <div class="flex justify-center p-6">
          <ap-button
            class="w-full [&>button]:w-full"
            [accentColor]="'yellow'"
            [label]="popUpConfirmText()"
            (click)="onClosePopUp()"
          />
        </div>
      </ap-ui-frame-popup>
    </div>
  }
  @if (loading()) {
    <div class="absolute inset-0 bg-black/30">
      <ap-loading-overlay />
    </div>
  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventPromoCodeComponent, { className: "EventPromoCodeComponent", filePath: "src/app/pages/event-promocode/event-promocode.component.ts", lineNumber: 28 });
})();

// src/app/pages/event-trn-list/event-trn-list.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function EventTrnListComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-game-list", 8);
    \u0275\u0275listener("click", function EventTrnListComponent_For_7_Template_ap_trn_game_list_click_0_listener() {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clicked.emit(data_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("getQuickTimeLabel", ctx_r2.getQuickTimeLabel())("trnData", data_r2);
  }
}
function EventTrnListComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-game-list", 9);
    \u0275\u0275listener("click", function EventTrnListComponent_For_9_Template_ap_trn_game_list_click_0_listener() {
      const data_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clicked.emit(data_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("getPrizePoolLabel", ctx_r2.getPrizePoolLabel())("getScoreLabel", ctx_r2.getScoreLabel())("getPointLabel", ctx_r2.getPointLabel())("getJoinButtonLabel", ctx_r2.getJoinButtonLabel())("getRejoinButtonLabel", ctx_r2.getRejoinButtonLabel())("getFinishedButtonLabel", ctx_r2.getFinishedButtonLabel())("hasParticipated", ctx_r2.hasJoinedEvent(data_r5))("trnData", data_r5);
  }
}
var EventTrnListComponent = class _EventTrnListComponent {
  trn;
  appI18n = inject(AppI18nService);
  api = inject(AppInterfaceService);
  // Quick賽事的字串
  getQuickTimeLabel = this.appI18n.computed("RegularEvent_Tag", "Regular Event");
  // Event賽事的字串
  getDaysLabel = this.appI18n.computed("DAYS", "DAYS");
  getHoursLabel = this.appI18n.computed("HRS", "HRS");
  getMinutesLabel = this.appI18n.computed("MINS", "MINS");
  getSecondsLabel = this.appI18n.computed("SECS", "SECS");
  getCountdownStartTitle = this.appI18n.computed("StartIn_Tip", "Start in");
  getCountdownEndTitle = this.appI18n.computed("EndIn_Tip", "End in");
  getPointLabel = this.appI18n.computed("Pts", "Pts");
  getScoreLabel = this.appI18n.computed("Your_Score", "Your Score");
  getPrizePoolLabel = this.appI18n.computed("Prize_Pool", "Prize Pool");
  getRejoinButtonLabel = this.appI18n.computed("Rejoin_Btn", "Rejoin");
  getJoinButtonLabel = this.appI18n.computed("Join_Btn", "Join");
  getFinishedButtonLabel = this.appI18n.computed("Finished_Tag", "Finished");
  constructor(trn) {
    this.trn = trn;
  }
  bonusPoint = signal(500) || null;
  clicked = output();
  // Access events directly from imported data
  get evenData() {
    const ret = [];
    const event = this.trn.trnList().filter((data) => data.type === "event");
    const running = event.filter((data) => data.status === "running");
    ret.push(...running);
    const announced = event.filter((data) => data.status === "announced");
    ret.push(...announced);
    const other = event.filter((data) => data.status !== "running" && data.status !== "announced");
    ret.push(...other);
    return ret;
  }
  // 拿取 quick 賽事資料
  get quickData() {
    const ret = this.trn.trnList().filter((data) => data.type === "quick");
    return ret;
  }
  hasJoinedEvent(data) {
    return data.raceData?.rank !== null || !!data.raceData?.playersList?.some((player) => player.highlighted);
  }
  static \u0275fac = function EventTrnListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventTrnListComponent)(\u0275\u0275directiveInject(TrnCtrlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventTrnListComponent, selectors: [["event-trn-list"]], outputs: { clicked: "clicked" }, decls: 10, vars: 0, consts: [[1, "relative", "bg-zinc-900", "min-h-full", "pb-10"], [1, "flex", "flex-wrap", "justify-center"], [1, "max-w-3xl", "w-full"], [1, "max-w-3xl", "flex", "flex-col", "flex-wrap", "items-left", "animate-fade-down", "animate-duration-500"], [1, "w-full", "px-4", "animate-fade-down", "animate-duration-500"], [1, "grid", "grid-cols-1", "gap-8", "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "pt-2"], [1, "hover:scale-102", "duration-300", 3, "getQuickTimeLabel", "trnData"], [1, "hover:scale-102", "duration-300", 3, "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "getPrizePoolLabel", "getScoreLabel", "getPointLabel", "getJoinButtonLabel", "getRejoinButtonLabel", "getFinishedButtonLabel", "hasParticipated", "trnData"], [1, "hover:scale-102", "duration-300", 3, "click", "getQuickTimeLabel", "trnData"], [1, "hover:scale-102", "duration-300", 3, "click", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "getPrizePoolLabel", "getScoreLabel", "getPointLabel", "getJoinButtonLabel", "getRejoinButtonLabel", "getFinishedButtonLabel", "hasParticipated", "trnData"]], template: function EventTrnListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275repeaterCreate(6, EventTrnListComponent_For_7_Template, 1, 2, "ap-trn-game-list", 6, _forTrack04);
      \u0275\u0275repeaterCreate(8, EventTrnListComponent_For_9_Template, 1, 14, "ap-trn-game-list", 7, _forTrack04);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.quickData);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.evenData);
    }
  }, dependencies: [CommonModule, ApTrnGameListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=event-trn-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventTrnListComponent, [{
    type: Component,
    args: [{ selector: "event-trn-list", imports: [CommonModule, ApTrnGameListComponent], template: '<div class="relative bg-zinc-900 min-h-full pb-10">\n  <!-- Content Section -->\n  <div class="flex flex-wrap justify-center">\n    <div class="max-w-3xl w-full">\n      <!--Event Info-->\n      <div\n        class="max-w-3xl flex flex-col flex-wrap items-left animate-fade-down animate-duration-500"\n      >\n        <div class="w-full px-4 animate-fade-down animate-duration-500">\n          <div class="grid grid-cols-1 gap-8 max-w-7xl mx-auto px-4 sm:px-6 pt-2">\n            <!-- Quick Races: Using data from event-data.data.ts -->\n            @for (data of quickData; track data.id) {\n              <ap-trn-game-list\n                class="hover:scale-102 duration-300"\n                [getQuickTimeLabel]="getQuickTimeLabel()"\n                [trnData]="data"\n                (click)="clicked.emit(data)"\n              />\n            }\n            <!-- Events: Using data from event-data.data.ts -->\n            @for (data of evenData; track data.id) {\n              <ap-trn-game-list\n                class="hover:scale-102 duration-300"\n                [getDaysLabel]="getDaysLabel()"\n                [getHoursLabel]="getHoursLabel()"\n                [getMinutesLabel]="getMinutesLabel()"\n                [getSecondsLabel]="getSecondsLabel()"\n                [getCountdownStartTitle]="getCountdownStartTitle()"\n                [getCountdownEndTitle]="getCountdownEndTitle()"\n                [getPrizePoolLabel]="getPrizePoolLabel()"\n                [getScoreLabel]="getScoreLabel()"\n                [getPointLabel]="getPointLabel()"\n                [getJoinButtonLabel]="getJoinButtonLabel()"\n                [getRejoinButtonLabel]="getRejoinButtonLabel()"\n                [getFinishedButtonLabel]="getFinishedButtonLabel()"\n                [hasParticipated]="hasJoinedEvent(data)"\n                [trnData]="data"\n                (click)="clicked.emit(data)"\n              />\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/pages/event-trn-list/event-trn-list.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=event-trn-list.component.css.map */\n"] }]
  }], () => [{ type: TrnCtrlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventTrnListComponent, { className: "EventTrnListComponent", filePath: "src/app/pages/event-trn-list/event-trn-list.component.ts", lineNumber: 15 });
})();

// src/ap-components-lib/ap-ui-pagination/ap-pagination.component.ts
function ApUiPaginationComponent_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, " ... ");
    \u0275\u0275elementEnd();
  }
}
function ApUiPaginationComponent_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ApUiPaginationComponent_For_5_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const page_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageClick(page_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg sm:border-2 border-1 transition-all duration-200 text-lg sm:text-md font-semibold cursor-pointer " + (ctx_r2.isActivePage(page_r2) ? ctx_r2.pageButtonClasses().active : ctx_r2.pageButtonClasses().inactive));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r2, " ");
  }
}
function ApUiPaginationComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApUiPaginationComponent_For_5_Conditional_0_Template, 2, 0, "div", 5)(1, ApUiPaginationComponent_For_5_Conditional_1_Template, 2, 3, "button", 6);
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    \u0275\u0275conditional(page_r2 === "..." ? 0 : 1);
  }
}
var ApUiPaginationComponent = class _ApUiPaginationComponent {
  variant = input("quick");
  // 不能更動這個，避免已使用的頁面產生錯誤
  color = input(void 0);
  config = input.required();
  pageChanged = output();
  activeColor = computed(() => {
    const color = this.color();
    if (color !== void 0)
      return color;
    if (this.variant() === "event")
      return "purple";
    return "yellow";
  });
  pageButtonClasses = computed(() => {
    const color = this.activeColor();
    switch (color) {
      case "purple":
        return {
          active: "border-purple-300 bg-purple-400 text-zinc-900 hover:border-purple-200 hover:bg-purple-300 active:border-purple-400 active:bg-purple-500",
          inactive: "border-zinc-500 dark:border-zinc-600 text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-500 hover:text-zinc-400 dark:hover:text-zinc-100 hover:bg-purple-300/10 active:bg-purple-500/15"
        };
      case "zinc":
        return {
          active: "border-zinc-300 bg-zinc-400 text-zinc-900 hover:border-zinc-200 hover:bg-zinc-300 active:border-zinc-400 active:bg-zinc-500",
          inactive: "border-zinc-200 dark:border-zinc-600 text-zinc-400 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-100 hover:bg-zinc-300/10 active:bg-zinc-500/15"
        };
      case "orange":
        return {
          active: "border-orange-300 bg-orange-400 text-zinc-900 hover:border-orange-200 hover:bg-orange-300 active:border-orange-400 active:bg-orange-500",
          inactive: "border-zinc-200 dark:border-zinc-600 text-zinc-400 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-100 hover:bg-orange-500/10 active:bg-orange-500/15"
        };
      case "yellow":
      default:
        return {
          active: "border-yellow-300 bg-yellow-400 text-zinc-900 hover:border-yellow-200 hover:bg-yellow-300 active:border-yellow-400 active:bg-yellow-500",
          inactive: "border-zinc-200 dark:border-zinc-600 text-zinc-400 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-100 hover:bg-yellow-300/10 active:bg-yellow-500/15"
        };
    }
  });
  get visiblePages() {
    const { currentPage, totalPages, showPages = 1 } = this.config();
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      const startPage = Math.max(2, currentPage - showPages);
      const endPage = Math.min(totalPages - 1, currentPage + showPages);
      if (startPage > 2) {
        pages.push("...");
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    return pages;
  }
  onPageClick(page) {
    if (typeof page === "number" && page !== this.config().currentPage) {
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
    return typeof page === "number" && page === this.config().currentPage;
  }
  static \u0275fac = function ApUiPaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApUiPaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApUiPaginationComponent, selectors: [["ap-ui-pagination"]], inputs: { variant: [1, "variant"], color: [1, "color"], config: [1, "config"] }, outputs: { pageChanged: "pageChanged" }, decls: 8, vars: 6, consts: [[1, "flex", "items-center", "justify-center", "gap-2", "sm:gap-1", "py-4"], [3, "click", "disabled"], ["name", "chevron-left default", 1, "size-4", "sm:size-5"], [1, "flex", "items-center", "gap-2", "sm:gap-2", "mx-1", "sm:mx-2"], ["name", "chevron-right default", 1, "size-4", "sm:size-5"], [1, "flex", "items-center", "justify-center", "w-6", "h-8", "sm:w-10", "sm:h-10", "text-zinc-400", "text-sm"], [3, "class"], [3, "click"]], template: function ApUiPaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function ApUiPaginationComponent_Template_button_click_1_listener() {
        return ctx.onPreviousClick();
      });
      \u0275\u0275element(2, "ap-icon", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275repeaterCreate(4, ApUiPaginationComponent_For_5_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 1);
      \u0275\u0275listener("click", function ApUiPaginationComponent_Template_button_click_6_listener() {
        return ctx.onNextClick();
      });
      \u0275\u0275element(7, "ap-icon", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap("flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border-1 sm:border-2 transition-all duration-200 " + (ctx.isPreviousDisabled() ? "border-zinc-200 dark:border-zinc-600 text-zinc-400 dark:text-zinc-500 cursor-not-allowed" : "border-zinc-200 dark:border-zinc-600 text-zinc-500 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-0 dark:hover:bg-zinc-800 active:bg-zinc-100 dark:active:bg-zinc-700"));
      \u0275\u0275property("disabled", ctx.isPreviousDisabled());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.visiblePages);
      \u0275\u0275advance(2);
      \u0275\u0275classMap("flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border-1 sm:border-2 transition-all duration-200 cursor-pointer " + (ctx.isNextDisabled() ? "border-zinc-200 dark:border-zinc-600 text-zinc-400 dark:text-zinc-500 cursor-not-allowed" : "border-zinc-200 dark:border-zinc-600 text-zinc-500 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-0 dark:hover:bg-zinc-800 active:bg-zinc-100 dark:active:bg-zinc-700"));
      \u0275\u0275property("disabled", ctx.isNextDisabled());
    }
  }, dependencies: [CommonModule, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApUiPaginationComponent, [{
    type: Component,
    args: [{ selector: "ap-ui-pagination", imports: [CommonModule, ApIconComponent], template: `<div class="flex items-center justify-center gap-2 sm:gap-1 py-4">
  <!-- Previous Button -->
  <button
    (click)="onPreviousClick()"
    [disabled]="isPreviousDisabled()"
    [class]="
      'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border-1 sm:border-2 transition-all duration-200 ' +
      (isPreviousDisabled()
        ? 'border-zinc-200 dark:border-zinc-600 text-zinc-400 dark:text-zinc-500 cursor-not-allowed'
        : 'border-zinc-200 dark:border-zinc-600 text-zinc-500 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-0 dark:hover:bg-zinc-800 active:bg-zinc-100 dark:active:bg-zinc-700')
    "
  >
    <ap-icon name="chevron-left default" class="size-4 sm:size-5"></ap-icon>
  </button>

  <!-- Page Numbers -->
  <div class="flex items-center gap-2 sm:gap-2 mx-1 sm:mx-2">
    @for (page of visiblePages; track $index) { @if (page === '...') {
    <div
      class="flex items-center justify-center w-6 h-8 sm:w-10 sm:h-10 text-zinc-400 text-sm"
    >
      ...
    </div>
    } @else {
    <button
      (click)="onPageClick(page)"
      [class]="
        'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg sm:border-2 border-1 transition-all duration-200 text-lg sm:text-md font-semibold cursor-pointer ' +
        (isActivePage(page)
          ? pageButtonClasses().active
          : pageButtonClasses().inactive)
      "
    >
      {{ page }}
    </button>
    } }
  </div>

  <!-- Next Button -->
  <button
    (click)="onNextClick()"
    [disabled]="isNextDisabled()"
    [class]="
      'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border-1 sm:border-2 transition-all duration-200 cursor-pointer ' +
      (isNextDisabled()
        ? 'border-zinc-200 dark:border-zinc-600 text-zinc-400 dark:text-zinc-500 cursor-not-allowed'
        : 'border-zinc-200 dark:border-zinc-600 text-zinc-500 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-0 dark:hover:bg-zinc-800 active:bg-zinc-100 dark:active:bg-zinc-700')
    "
  >
    <ap-icon name="chevron-right default" class="size-4 sm:size-5"></ap-icon>
  </button>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApUiPaginationComponent, { className: "ApUiPaginationComponent", filePath: "src/ap-components-lib/ap-ui-pagination/ap-pagination.component.ts", lineNumber: 16 });
})();

// src/app/pages/event-trn-history/event-trn-history.component.ts
function EventTrnHistoryComponent_For_24_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl)("alt", item_r1.game + " banner");
  }
}
function EventTrnHistoryComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 17)(3, "div", 18);
    \u0275\u0275conditionalCreate(4, EventTrnHistoryComponent_For_24_Conditional_4_Template, 1, 2, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 23)(12, "div");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 22);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 24);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(" relative animate-fade-down animate-duration-300 hover:bg-zinc-600/50 " + ($index_r2 % 2 === 0 ? " bg-zinc-900" : " bg-zinc-800"));
    \u0275\u0275attribute("data-original-index", (ctx_r2.currentPage() - 1) * ctx_r2.itemsPerPage() + $index_r2 + 1);
    \u0275\u0275advance();
    \u0275\u0275classMap("py-2 px-2 wrap-break-word overflow-hidden align-top " + ctx_r2.getGameListClass(item_r1.variant));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r1.image ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.shortenGameName(item_r1.game, 12), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.game, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 14, item_r1.time, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 17, item_r1.time, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" No.", item_r1.rank, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r1.currency, "", item_r1.prizeAmount, " ");
  }
}
function EventTrnHistoryComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
}
function EventTrnHistoryComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 16);
  }
}
var EventTrnHistoryComponent = class _EventTrnHistoryComponent {
  //** 服務注入 */
  appI18n = inject(AppI18nService);
  api = inject(AppInterfaceService);
  trn = inject(TrnCtrlService);
  getGameLabel = this.appI18n.computed("EventName_History", "Event");
  getStatusLabel = this.appI18n.computed("history_jackpot_status", "Status");
  getTimeLabel = this.appI18n.computed("Time_History", "Time");
  getRankLabel = this.appI18n.computed("RankNo_History", "Rank");
  getPrizeLabel = this.appI18n.computed("Prize_History", "Prize");
  historyItems = signal([]);
  itemsPerPage = signal(10);
  currentPage = signal(1);
  totalPages = signal(1);
  limit = computed(() => this.itemsPerPage());
  offset = computed(() => (this.currentPage() - 1) * this.itemsPerPage());
  sortDirection = signal("desc");
  sortType = signal("time");
  isLoading = signal(true);
  destroy$ = new Subject();
  ngOnInit() {
    this.trn.playerHistory$.pipe(delay(500), takeUntil(this.destroy$)).subscribe(this.onPlayerHistory.bind(this));
    this.trn.sendPlayerHistory(this.limit(), this.offset());
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onPlayerHistory(history) {
    this.isLoading.set(false);
    this.currentPage.set(history.page);
    this.itemsPerPage.set(history.pageSize);
    this.totalPages.set(history.totalPages);
    const items = history.list.map((item) => {
      return {
        game: item.name,
        id: item.id,
        status: item.status,
        time: item.time,
        rank: item.rank,
        currency: this.trn.currencySymbol(),
        variant: item.type,
        prizeAmount: item.prize,
        image: item.images
      };
    });
    this.historyItems.set(items);
  }
  onTimeSortClick() {
    if (this.sortType() === "time") {
      const currentDirection = this.sortDirection();
      this.sortDirection.set(currentDirection === "asc" ? "desc" : "asc");
    } else {
      this.sortType.set("time");
      this.sortDirection.set("desc");
    }
    this.currentPage.set(1);
  }
  onRankSortClick() {
    if (this.sortType() === "rank") {
      const currentDirection = this.sortDirection();
      this.sortDirection.set(currentDirection === "asc" ? "desc" : "asc");
    } else {
      this.sortType.set("rank");
      this.sortDirection.set("asc");
    }
    this.currentPage.set(1);
  }
  onPrizeSortClick() {
    if (this.sortType() === "prize") {
      const currentDirection = this.sortDirection();
      this.sortDirection.set(currentDirection === "asc" ? "desc" : "asc");
    } else {
      this.sortType.set("prize");
      this.sortDirection.set("desc");
    }
    this.currentPage.set(1);
  }
  paginationConfig = computed(() => {
    return {
      currentPage: this.currentPage(),
      totalPages: this.totalPages(),
      showPages: 1
    };
  });
  getGameBannerClass(variant, hasImage = false) {
    if (hasImage) {
      const borderColor = variant === "quick" ? "border-yellow-300/50" : "border-purple-400/50";
      return `border-1 ${borderColor} bg-contain bg-center bg-no-repeat`;
    }
    return variant === "quick" ? "border-2 border-yellow-300" : "border-2 border-purple-400";
  }
  getGameBannerStyle(image) {
    return image ? { "background-image": `url(${image})` } : {};
  }
  getGameListClass(variant) {
    if (!variant) {
      return "";
    }
    return variant === "quick" ? "border-l-2 border-yellow-300" : "border-l-2 border-purple-400";
  }
  // 縮短游戲名稱，超過長度則加上省略號
  shortenGameName(gameName = "", maxLength = 15) {
    return gameName.length > maxLength ? gameName.substring(0, maxLength) + "..." : gameName;
  }
  getTimeSortIcon() {
    return this.sortDirection() === "asc" ? "bars-arrow-up default" : "bars-arrow-down default";
  }
  getRankSortIcon() {
    return this.sortDirection() === "asc" ? "bars-arrow-up default" : "bars-arrow-down default";
  }
  getPrizeSortIcon() {
    return this.sortDirection() === "asc" ? "bars-arrow-up default" : "bars-arrow-down default";
  }
  sortedItems = computed(() => {
    const items = [...this.historyItems()];
    const direction = this.sortDirection();
    const sortType = this.sortType();
    return items.sort((a, b) => {
      if (sortType === "time") {
        if (direction === "asc") {
          return (a.time || 0) - (b.time || 0);
        } else {
          return (b.time || 0) - (a.time || 0);
        }
      } else if (sortType === "rank") {
        const rankA = a.rank || 0;
        const rankB = b.rank || 0;
        if (direction === "asc") {
          return rankA - rankB;
        } else {
          return rankB - rankA;
        }
      } else if (sortType === "prize") {
        const prizeA = a.prizeAmount || 0;
        const prizeB = b.prizeAmount || 0;
        if (direction === "asc") {
          return prizeA - prizeB;
        } else {
          return prizeB - prizeA;
        }
      }
      return 0;
    });
  });
  paginationChanged(page) {
    this.currentPage.set(page);
    this.isLoading.set(true);
    this.trn.sendPlayerHistory(this.limit(), this.offset());
  }
  static \u0275fac = function EventTrnHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventTrnHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventTrnHistoryComponent, selectors: [["event-trn-history"]], decls: 29, vars: 12, consts: [[1, "relative", "flex", "flex-col", "h-full", "pt-2", "overflow-hidden"], [1, "relative", "flex-1", "min-h-0", "overflow-hidden"], [1, "relative", "size-full", "bg-zinc-900", "gap-1", "px-1", "md:px-20", "overflow-y-auto"], [1, "relative", "w-full", "table-fixed", "border-separate", "border-spacing-0", "text-zinc-200"], [1, "sticky", "top-0", "z-sticky"], [1, "text-md", "border-b", "border-zinc-600", "text-zinc-300"], [1, "sticky", "top-0", "z-sticky", "w-[25%]", "bg-zinc-800", "text-center"], [1, "sticky", "top-0", "z-sticky", "w-[15%]", "bg-zinc-800", "text-center"], [1, "sticky", "top-0", "z-sticky", "w-[25%]", "bg-zinc-800", "py-1", "px-1", "text-center"], [1, "w-full", "min-h-8", "flex", "items-center", "gap-1", "hover:text-zinc-100", "cursor-pointer", "transition-colors", "justify-center", 3, "click"], [1, "size-5", 3, "name"], [1, "sticky", "top-0", "z-sticky", "w-[15%]", "bg-zinc-800", "py-1", "px-1", "text-center"], [3, "class"], [1, "absolute", "inset-0", "bg-black/50"], [1, "relative", "shrink-0", "py-2"], [3, "pageChanged", "variant", "config"], [1, "absolute", "inset-0"], [1, "flex", "flex-wrap", "relative", "items-center", "sm:gap-2"], [1, "w-14", "h-8", "rounded", "shrink-0", "overflow-hidden"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "sm:hidden", "mt-1", "sm:mt-0", "sm:flex-1", "sm:min-w-0", "font-medium", "sm:text-sm", "text-xs"], [1, "hidden", "sm:inline", "sm:text-sm", "text-xs"], [1, "py-2", "px-1", "text-center", "font-medium", "text-sm"], [1, "py-2", "px-1", "text-center", "font-medium", "text-xs"], [1, "py-2", "px-1", "pr-4", "text-center", "font-medium", "text-sm"]], template: function EventTrnHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "table", 3)(4, "thead", 4)(5, "tr", 5)(6, "th", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "th", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th", 8)(11, "button", 9);
      \u0275\u0275listener("click", function EventTrnHistoryComponent_Template_button_click_11_listener() {
        return ctx.onTimeSortClick();
      });
      \u0275\u0275element(12, "ap-icon", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "th", 11)(15, "button", 9);
      \u0275\u0275listener("click", function EventTrnHistoryComponent_Template_button_click_15_listener() {
        return ctx.onRankSortClick();
      });
      \u0275\u0275element(16, "ap-icon", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "th", 8)(19, "button", 9);
      \u0275\u0275listener("click", function EventTrnHistoryComponent_Template_button_click_19_listener() {
        return ctx.onPrizeSortClick();
      });
      \u0275\u0275element(20, "ap-icon", 10);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "tbody");
      \u0275\u0275repeaterCreate(23, EventTrnHistoryComponent_For_24_Template, 22, 20, "tr", 12, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(25, EventTrnHistoryComponent_Conditional_25_Template, 1, 0, "div", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 14)(27, "ap-ui-pagination", 15);
      \u0275\u0275listener("pageChanged", function EventTrnHistoryComponent_Template_ap_ui_pagination_pageChanged_27_listener($event) {
        return ctx.paginationChanged($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(28, EventTrnHistoryComponent_Conditional_28_Template, 1, 0, "ap-loading-overlay", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.getGameLabel(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.getStatusLabel(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("name", ctx.getTimeSortIcon());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.getTimeLabel(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("name", ctx.getRankSortIcon());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.getRankLabel(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("name", ctx.getPrizeSortIcon());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.getPrizeLabel(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.sortedItems());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 25 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("variant", "quick")("config", ctx.paginationConfig());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 28 : -1);
    }
  }, dependencies: [CommonModule, DatePipe, ApUiPaginationComponent, ApIconComponent, ApLoadingOverlayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventTrnHistoryComponent, [{
    type: Component,
    args: [{ selector: "event-trn-history", imports: [CommonModule, ApUiPaginationComponent, ApIconComponent, ApLoadingOverlayComponent], template: `<div class="relative flex flex-col h-full pt-2 overflow-hidden">
  <div class="relative flex-1 min-h-0 overflow-hidden">
    <div
      class="relative size-full bg-zinc-900 gap-1 px-1 md:px-20 overflow-y-auto"
    >
      <table
        class="relative w-full table-fixed border-separate border-spacing-0 text-zinc-200"
      >
        <!--Title-->
        <thead class="sticky top-0 z-sticky">
          <tr class="text-md border-b border-zinc-600 text-zinc-300">
            <th class="sticky top-0 z-sticky w-[25%] bg-zinc-800 text-center">
              {{ getGameLabel() }}
            </th>
            <th class="sticky top-0 z-sticky w-[15%] bg-zinc-800 text-center">
              {{ getStatusLabel() }}
            </th>
            <!--Time-->
            <th
              class="sticky top-0 z-sticky w-[25%] bg-zinc-800 py-1 px-1 text-center"
            >
              <button
                (click)="onTimeSortClick()"
                class="w-full min-h-8 flex items-center gap-1 hover:text-zinc-100 cursor-pointer transition-colors justify-center"
              >
                <ap-icon [name]="getTimeSortIcon()" class="size-5" />{{
                  getTimeLabel()
                }}
              </button>
            </th>
            <!--Rank-->
            <th
              class="sticky top-0 z-sticky w-[15%] bg-zinc-800 py-1 px-1 text-center"
            >
              <button
                (click)="onRankSortClick()"
                class="w-full min-h-8 flex items-center gap-1 hover:text-zinc-100 cursor-pointer transition-colors justify-center"
              >
                <ap-icon [name]="getRankSortIcon()" class="size-5" />{{
                  getRankLabel()
                }}
              </button>
            </th>
            <!--Prize-->
            <th
              class="sticky top-0 z-sticky w-[25%] bg-zinc-800 py-1 px-1 text-center"
            >
              <button
                (click)="onPrizeSortClick()"
                class="w-full min-h-8 flex items-center gap-1 hover:text-zinc-100 cursor-pointer transition-colors justify-center"
              >
                <ap-icon [name]="getPrizeSortIcon()" class="size-5" />{{
                  getPrizeLabel()
                }}
              </button>
            </th>
          </tr>
        </thead>
        <!-- Content -->
        <tbody>
          @for (item of sortedItems(); track $index) {
            <tr
              [class]="
                ' relative animate-fade-down animate-duration-300 hover:bg-zinc-600/50 ' +
                ($index % 2 === 0 ? ' bg-zinc-900' : ' bg-zinc-800')
              "
              [attr.data-original-index]="
                (currentPage() - 1) * itemsPerPage() + $index + 1
              "
            >
              <td
                [class]="
                  'py-2 px-2 wrap-break-word overflow-hidden align-top ' +
                  getGameListClass(item.variant)
                "
              >
                <div class="flex flex-wrap relative items-center sm:gap-2">
                  <div class="w-14 h-8 rounded shrink-0 overflow-hidden">
                    @if (item.image) {
                      <img
                        [src]="item.image"
                        [alt]="item.game + ' banner'"
                        class="w-full h-full object-cover"
                        loading="lazy"
                      />
                    }
                  </div>
                  <div
                    class="sm:hidden mt-1 sm:mt-0 sm:flex-1 sm:min-w-0 font-medium sm:text-sm text-xs"
                  >
                    {{ shortenGameName(item.game, 12) }}
                  </div>
                  <div class="hidden sm:inline sm:text-sm text-xs">
                    {{ item.game }}
                  </div>
                </div>
              </td>
              <td class="py-2 px-1 text-center font-medium text-sm">
                {{ item.status }}
              </td>
              <td class="py-2 px-1 text-center font-medium text-xs">
                <div>{{ item.time | date: "yyyy-MM-dd" }}</div>
                <div>{{ item.time | date: "HH:mm" }}</div>
              </td>
              <td class="py-2 px-1 text-center font-medium text-sm">
                No.{{ item.rank }}
              </td>
              <td class="py-2 px-1 pr-4 text-center font-medium text-sm">
                {{ item.currency }}{{ item.prizeAmount }}
              </td>
            </tr>
          }
        </tbody>
        @if (isLoading()) {
          <div class="absolute inset-0 bg-black/50"></div>
        }
      </table>
    </div>
  </div>

  <div class="relative shrink-0 py-2">
    <ap-ui-pagination
      [variant]="'quick'"
      [config]="paginationConfig()"
      (pageChanged)="paginationChanged($event)"
    />
  </div>
  @if (isLoading()) {
    <ap-loading-overlay class="absolute inset-0" />
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventTrnHistoryComponent, { className: "EventTrnHistoryComponent", filePath: "src/app/pages/event-trn-history/event-trn-history.component.ts", lineNumber: 18 });
})();

// src/app/components/ap-trn-info-table/ap-trn-info-table.component.ts
var _c02 = () => ({ addSymbol: false });
var _c1 = (a0, a1) => ({ "border-yellow-300/30": a0, "border-purple-300/20": a1 });
var _c2 = (a0, a1, a2, a3) => ({ "border-yellow-300/30": a0, "border-purple-300/20": a1, "bg-yellow-300/20": a2, "bg-purple-500/15": a3 });
var _c3 = (a0, a1) => ({ "text-yellow-400": a0, "text-purple-200": a1 });
var _c4 = (a0, a1) => ({ "hover:bg-yellow-300/5": a0, "hover:bg-purple-500/5": a1 });
var _c5 = (a0, a1) => ({ "text-yellow-200": a0, "text-purple-300": a1 });
var _forTrack05 = ($index, $item) => $item.level;
function ApTrnInfoTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.description());
  }
}
function ApTrnInfoTableComponent_Conditional_2_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "moneyText");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const betRange_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("~", \u0275\u0275pipeBind2(2, 1, betRange_r2.end || 0, \u0275\u0275pureFunction0(4, _c02)));
  }
}
function ApTrnInfoTableComponent_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 8)(1, "td", 9)(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 11)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "moneyText");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ApTrnInfoTableComponent_Conditional_2_For_7_Conditional_8_Template, 3, 5, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const betRange_r2 = ctx.$implicit;
    const \u0275$index_19_r3 = ctx.$index;
    \u0275\u0275classProp("bg-zinc-900", !(\u0275$index_19_r3 % 2 === 0))("bg-zinc-800", \u0275$index_19_r3 % 2 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(betRange_r2.level);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, betRange_r2.start || 0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(betRange_r2.end ? 8 : -1);
  }
}
function ApTrnInfoTableComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "table", 5)(5, "tbody", 6);
    \u0275\u0275repeaterCreate(6, ApTrnInfoTableComponent_Conditional_2_For_7_Template, 9, 9, "tr", 7, _forTrack05);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.title(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.betRanges());
  }
}
function ApTrnInfoTableComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 12)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "table", 5)(5, "tbody", 6)(6, "tr", 14)(7, "td", 15)(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tr", 14)(13, "td", 15)(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 16);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tr", 17)(19, "td", 15)(20, "span", 10);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c1, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(19, _c2, ctx_r0.variant() === "quick", ctx_r0.variant() === "event", ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(24, _c3, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.title(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(27, _c4, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.condition1());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(30, _c5, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.playersPerMatch() ?? "N/A", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(33, _c4, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.condition3());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(36, _c5, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.matchDuration(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(39, _c4, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.condition4());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(42, _c5, ctx_r0.variant() === "quick", ctx_r0.variant() === "event"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" x", ctx_r0.prizeBoost(), " ");
  }
}
var ApTrnInfoTableComponent = class _ApTrnInfoTableComponent {
  // 'quick' 顯示快速賽事資訊表格，'event' 顯示活動賽事資訊表格
  variant = input("quick");
  // 'betRange' 顯示投注範圍表格
  type = input("match");
  description = input("");
  title = input("");
  condition1 = input("");
  condition2 = input("");
  condition3 = input("");
  condition4 = input("");
  betRanges = input([]);
  minEntryBalance = input(null);
  playersPerMatch = input(null);
  matchDuration = input("--");
  prizeBoost = input(1);
  static \u0275fac = function ApTrnInfoTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnInfoTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnInfoTableComponent, selectors: [["ap-trn-info-table"]], hostAttrs: [1, "block", "w-full", "max-w-lg"], inputs: { variant: [1, "variant"], type: [1, "type"], description: [1, "description"], title: [1, "title"], condition1: [1, "condition1"], condition2: [1, "condition2"], condition3: [1, "condition3"], condition4: [1, "condition4"], betRanges: [1, "betRanges"], minEntryBalance: [1, "minEntryBalance"], playersPerMatch: [1, "playersPerMatch"], matchDuration: [1, "matchDuration"], prizeBoost: [1, "prizeBoost"] }, decls: 4, vars: 2, consts: [[1, "w-full", "max-w-lg", "space-y-2", "text-left", "text-zinc-300", "leading-relaxed"], [1, "w-full", "max-w-lg", "border-2", "border-yellow-300/30", "rounded-xl", "sm:rounded-2xl", "overflow-hidden"], [1, "w-full", "max-w-lg", "border-2", "rounded-xl", "sm:rounded-2xl", "overflow-hidden", 3, "ngClass"], [1, "bg-yellow-300/20", "px-4", "py-2", "border-b", "border-yellow-300/20"], [1, "text-center", "text-yellow-400", "font-semibold", "text-xl", "sm:text-lg"], [1, "w-full"], [1, "divide-y", "divide-zinc-700/50"], [1, "text-zinc-300", "font-medium", "transition-all", "duration-200", "hover:bg-yellow-300/5", 3, "bg-zinc-900", "bg-zinc-800"], [1, "text-zinc-300", "font-medium", "transition-all", "duration-200", "hover:bg-yellow-300/5"], [1, "px-3", "sm:px-4", "py-2", "sm:py-4", "text-left"], [1, "text-md", "sm:text-base"], [1, "px-3", "sm:px-4", "py-3", "sm:py-4", "text-yellow-200", "text-right", "text-md", "sm:text-base", "font-medium", "tracking-wide"], [1, "px-4", "py-2", "border-b", 3, "ngClass"], [1, "text-center", "font-semibold", "text-xl", "sm:text-lg", 3, "ngClass"], [1, "transition-all", "duration-200", "bg-zinc-900", 3, "ngClass"], [1, "px-3", "sm:px-4", "py-2", "sm:py-4", "text-zinc-300", "text-left"], [1, "px-3", "sm:px-4", "py-3", "sm:py-4", "text-right", "text-md", "sm:text-base", "font-medium", "tracking-wide", 3, "ngClass"], [1, "transition-all", "duration-200", "bg-zinc-800", 3, "ngClass"]], template: function ApTrnInfoTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ApTrnInfoTableComponent_Conditional_1_Template, 2, 1, "div");
      \u0275\u0275conditionalCreate(2, ApTrnInfoTableComponent_Conditional_2_Template, 8, 1, "div", 1)(3, ApTrnInfoTableComponent_Conditional_3_Template, 24, 45, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.description() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.type() === "betRange" ? 2 : 3);
    }
  }, dependencies: [CommonModule, NgClass, MoneyTextPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnInfoTableComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-info-table", standalone: true, imports: [CommonModule, MoneyTextPipe], host: {
      class: "block w-full max-w-lg"
    }, template: `<div class="w-full max-w-lg space-y-2 text-left text-zinc-300 leading-relaxed">
  @if (description()) {
    <div>{{ description() }}</div>
  }
  @if (type() === "betRange") {
    <div
      class="w-full max-w-lg border-2 border-yellow-300/30 rounded-xl sm:rounded-2xl overflow-hidden"
    >
      <div class="bg-yellow-300/20 px-4 py-2 border-b border-yellow-300/20">
        <div
          class="text-center text-yellow-400 font-semibold text-xl sm:text-lg"
        >
          {{ title() }}
        </div>
      </div>
      <table class="w-full">
        <tbody class="divide-y divide-zinc-700/50">
          @for (
            betRange of betRanges();
            track betRange.level;
            let isEven = $even
          ) {
            <tr
              [class.bg-zinc-900]="!isEven"
              [class.bg-zinc-800]="isEven"
              class="text-zinc-300 font-medium transition-all duration-200 hover:bg-yellow-300/5"
            >
              <td class="px-3 sm:px-4 py-2 sm:py-4 text-left">
                <span class="text-md sm:text-base">{{ betRange.level }}</span>
              </td>
              <td
                class="px-3 sm:px-4 py-3 sm:py-4 text-yellow-200 text-right text-md sm:text-base font-medium tracking-wide"
              >
                <span>{{ (betRange.start || 0) | moneyText }}</span>
                @if (betRange.end) {
                  <span>~{{ (betRange.end || 0) | moneyText: { addSymbol: false } }}</span>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  } @else {
    <div
      class="w-full max-w-lg border-2 rounded-xl sm:rounded-2xl overflow-hidden"
      [ngClass]="{
        'border-yellow-300/30': variant() === 'quick',
        'border-purple-300/20': variant() === 'event',
      }"
    >
      <div
        class="px-4 py-2 border-b"
        [ngClass]="{
          'border-yellow-300/30': variant() === 'quick',
          'border-purple-300/20': variant() === 'event',
          'bg-yellow-300/20': variant() === 'quick',
          'bg-purple-500/15': variant() === 'event',
        }"
      >
        <div
          class="text-center font-semibold text-xl sm:text-lg"
          [ngClass]="{
            'text-yellow-400': variant() === 'quick',
            'text-purple-200': variant() === 'event',
          }"
        >
          {{ title() }}
        </div>
      </div>
      <table class="w-full">
        <tbody class="divide-y divide-zinc-700/50">
          <tr
            class="transition-all duration-200 bg-zinc-900"
            [ngClass]="{
              'hover:bg-yellow-300/5': variant() === 'quick',
              'hover:bg-purple-500/5': variant() === 'event',
            }"
          >
            <td class="px-3 sm:px-4 py-2 sm:py-4 text-zinc-300 text-left">
              <span class="text-md sm:text-base">{{ condition1() }}</span>
            </td>
            <td
              class="px-3 sm:px-4 py-3 sm:py-4 text-right text-md sm:text-base font-medium tracking-wide"
              [ngClass]="{
                'text-yellow-200': variant() === 'quick',
                'text-purple-300': variant() === 'event',
              }"
            >
              {{ playersPerMatch() ?? "N/A" }}
            </td>
          </tr>

          <tr
            class="transition-all duration-200 bg-zinc-900"
            [ngClass]="{
              'hover:bg-yellow-300/5': variant() === 'quick',
              'hover:bg-purple-500/5': variant() === 'event',
            }"
          >
            <td class="px-3 sm:px-4 py-2 sm:py-4 text-zinc-300 text-left">
              <span class="text-md sm:text-base">{{ condition3() }}</span>
            </td>
            <td
              class="px-3 sm:px-4 py-3 sm:py-4 text-right text-md sm:text-base font-medium tracking-wide"
              [ngClass]="{
                'text-yellow-200': variant() === 'quick',
                'text-purple-300': variant() === 'event',
              }"
            >
              {{ matchDuration() }}
            </td>
          </tr>

          <tr
            class="transition-all duration-200 bg-zinc-800"
            [ngClass]="{
              'hover:bg-yellow-300/5': variant() === 'quick',
              'hover:bg-purple-500/5': variant() === 'event',
            }"
          >
            <td class="px-3 sm:px-4 py-2 sm:py-4 text-zinc-300 text-left">
              <span class="text-md sm:text-base">{{ condition4() }}</span>
            </td>
            <td
              class="px-3 sm:px-4 py-3 sm:py-4 text-right text-md sm:text-base font-medium tracking-wide"
              [ngClass]="{
                'text-yellow-200': variant() === 'quick',
                'text-purple-300': variant() === 'event',
              }"
            >
              x{{ prizeBoost() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnInfoTableComponent, { className: "ApTrnInfoTableComponent", filePath: "src/app/components/ap-trn-info-table/ap-trn-info-table.component.ts", lineNumber: 22 });
})();

// src/app/pages/event-trn-info/event-trn-info.component.ts
function EventTrnInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "ap-trn-game-list", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "ap-button", 3);
    \u0275\u0275listener("click", function EventTrnInfoComponent_Conditional_0_Template_ap_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTutorial.emit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "ap-trn-info-table", 4)(5, "ap-trn-info-table", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("trnData", ctx_r1.currentTrn())("getQuickTimeLabel", ctx_r1.getQuickTimeLabel());
    \u0275\u0275advance(2);
    \u0275\u0275property("accentColor", "yellow")("label", ctx_r1.getHowToPlayBtnText());
    \u0275\u0275advance();
    \u0275\u0275property("description", ctx_r1.firstDescription())("type", "betRange")("title", ctx_r1.betRangeTitle())("betRanges", ctx_r1.betRanges());
    \u0275\u0275advance();
    \u0275\u0275property("variant", "quick")("description", ctx_r1.secondDescription())("title", ctx_r1.matchRangeTitle())("condition1", ctx_r1.getCondition1())("condition2", ctx_r1.getCondition2())("condition3", ctx_r1.getCondition3())("condition4", ctx_r1.getCondition4())("minEntryBalance", ctx_r1.minEntryBalance())("playersPerMatch", ctx_r1.playersPerMatch())("matchDuration", ctx_r1.formatDuration(ctx_r1.matchDuration()))("prizeBoost", ctx_r1.prizeBoost());
  }
}
function EventTrnInfoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "ap-trn-game-list", 6);
    \u0275\u0275elementStart(2, "div", 2)(3, "ap-button", 3);
    \u0275\u0275listener("click", function EventTrnInfoComponent_Conditional_1_Template_ap_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOpenTutorial());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "ap-trn-info-table", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("trnData", ctx_r1.currentTrn())("getDaysLabel", ctx_r1.getDaysLabel())("getHoursLabel", ctx_r1.getHoursLabel())("getMinutesLabel", ctx_r1.getMinutesLabel())("getSecondsLabel", ctx_r1.getSecondsLabel())("getCountdownStartTitle", ctx_r1.getCountdownStartTitle())("getCountdownEndTitle", ctx_r1.getCountdownEndTitle())("hasParticipated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("accentColor", "purple")("label", ctx_r1.getHowToPlayBtnText());
    \u0275\u0275advance();
    \u0275\u0275property("variant", "event")("description", ctx_r1.secondDescription())("title", ctx_r1.matchRangeTitle())("condition1", ctx_r1.getCondition1())("condition2", ctx_r1.getCondition2())("condition3", ctx_r1.getCondition3())("condition4", ctx_r1.getCondition4())("minEntryBalance", ctx_r1.minEntryBalance())("playersPerMatch", ctx_r1.playersPerMatch())("matchDuration", ctx_r1.formatDuration(ctx_r1.matchDuration()))("prizeBoost", ctx_r1.prizeBoost());
  }
}
var EventTrnInfoComponent = class _EventTrnInfoComponent {
  appI18n = inject(AppI18nService);
  getQuickTimeLabel = this.appI18n.computed("RegularEvent_Tag", "Regular Event");
  getHowToPlayBtnText = this.appI18n.computed("HowToPlay_Btn", "How to Play");
  betRangeTitle = this.appI18n.computed("Bet_Ranges_Title", "Bet Ranges by Level");
  firstDescription = this.appI18n.computed("Content1_TournamentInfo", "\u318DQuick matches are grouped by bet size \u318DHigher bets, bigger prize pools. \u318DOnly those who place bets will be included in the rankings and receive prizes.");
  secondDescription = this.appI18n.computed("Content2_TournamentInfo", "\u318DQuick Match settings are shown in the table below.");
  matchRangeTitle = this.appI18n.computed("Match_Configuration_Title", "Match Configuration");
  getCondition1 = this.appI18n.computed("Condition1", "Players per Match");
  getCondition2 = this.appI18n.computed("Condition2", "Prize Ranking");
  getCondition3 = this.appI18n.computed("Condition3", "Match Duration");
  getCondition4 = this.appI18n.computed("Condition4", "Prize Boost");
  getDaysLabel = this.appI18n.computed("DAYS", "DAYS");
  getHoursLabel = this.appI18n.computed("HRS", "HRS");
  getMinutesLabel = this.appI18n.computed("MINS", "MINS");
  getSecondsLabel = this.appI18n.computed("SECS", "SECS");
  getCountdownStartTitle = this.appI18n.computed("StartIn_Tip", "Start in");
  getCountdownEndTitle = this.appI18n.computed("EndIn_Tip", "End in");
  trn = inject(TrnCtrlService);
  api = inject(AppInterfaceService);
  /** 目前要顯示的Trn */
  currentTrn = input(null);
  openTutorial = output();
  // Event List
  eventDescription1 = signal("Long term event settings are shown in the table below.");
  // Default match configuration
  minEntryBalance = computed(() => this.currentTrn()?.tiers[0]?.minStakeAmount || null);
  playersPerMatch = computed(() => this.currentTrn()?.maxPlayers || null);
  /** 給Quick秒數 */
  matchDuration = computed(() => this.currentTrn()?.matchDuration || null);
  /** 給Event秒數, 從開始時間到結束時間 */
  eventDuration = computed(() => {
    const trn = this.currentTrn();
    if (trn?.type === "event" && trn.startTime && trn.endTime) {
      return Math.floor((trn.endTime - trn.startTime) / 1e3);
    }
    return null;
  });
  /** ex: 1.2 */
  prizeBoost = computed(() => this.currentTrn()?.betMultiplier || 1);
  betRanges = signal([]);
  //* 積分
  bonusPoint = signal(500) || null;
  ngOnInit() {
    const ranges = [];
    this.currentTrn()?.tiers.forEach((tier) => {
      ranges.push({
        level: tier.name,
        start: tier.minStakeAmount || 0,
        end: tier.maxStakeAmount
      });
    });
    this.betRanges.set(ranges);
  }
  onOpenTutorial() {
    this.openTutorial.emit();
  }
  /** 將秒數轉成 [d Days] h hours m mins [s secs], 有days就不顯示secs */
  formatDuration(seconds) {
    if (seconds === null) {
      return "--";
    }
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = seconds % 60;
    const dDisplay = d > 0 ? d + (d === 1 ? " Day " : " Days ") : "";
    const hDisplay = h > 0 ? h + (h === 1 ? " Hour " : " Hours ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? " Min " : " Mins ") : "";
    const sDisplay = s > 0 ? s + (s === 1 ? " Sec" : " Secs") : "";
    return dDisplay + hDisplay + mDisplay + (d > 0 ? "" : sDisplay) || "--";
  }
  static \u0275fac = function EventTrnInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventTrnInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventTrnInfoComponent, selectors: [["event-trn-info"]], inputs: { currentTrn: [1, "currentTrn"] }, outputs: { openTutorial: "openTutorial" }, decls: 2, vars: 2, consts: [[1, "px-4", "sm:px-6", "pt-4", "sm:pt-6"], [3, "trnData", "getQuickTimeLabel"], [1, "flex", "flex-col", "items-center", "p-8", "gap-8"], [3, "click", "accentColor", "label"], [1, "whitespace-pre-line", 3, "description", "type", "title", "betRanges"], [3, "variant", "description", "title", "condition1", "condition2", "condition3", "condition4", "minEntryBalance", "playersPerMatch", "matchDuration", "prizeBoost"], [3, "trnData", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "hasParticipated"]], template: function EventTrnInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, EventTrnInfoComponent_Conditional_0_Template, 6, 19, "div", 0);
      \u0275\u0275conditionalCreate(1, EventTrnInfoComponent_Conditional_1_Template, 5, 21, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275conditional(((tmp_0_0 = ctx.currentTrn()) == null ? null : tmp_0_0.type) === "quick" ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_1_0 = ctx.currentTrn()) == null ? null : tmp_1_0.type) === "event" ? 1 : -1);
    }
  }, dependencies: [ApButtonComponent, CommonModule, ApTrnInfoTableComponent, ApTrnGameListComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventTrnInfoComponent, [{
    type: Component,
    args: [{ selector: "event-trn-info", imports: [ApButtonComponent, CommonModule, ApTrnInfoTableComponent, ApTrnGameListComponent], template: `<!--Quick-->
@if (currentTrn()?.type === "quick") {
  <div class="px-4 sm:px-6 pt-4 sm:pt-6">
    <ap-trn-game-list
      [trnData]="currentTrn()"
      [getQuickTimeLabel]="getQuickTimeLabel()"
    />
    <div class="flex flex-col items-center p-8 gap-8">
      <ap-button
        [accentColor]="'yellow'"
        [label]="getHowToPlayBtnText()"
        (click)="openTutorial.emit()"
      />
      <ap-trn-info-table
        [description]="firstDescription()"
        [type]="'betRange'"
        [title]="betRangeTitle()"
        [betRanges]="betRanges()"
        class="whitespace-pre-line"
      />

      <ap-trn-info-table
        [variant]="'quick'"
        [description]="secondDescription()"
        [title]="matchRangeTitle()"
        [condition1]="getCondition1()"
        [condition2]="getCondition2()"
        [condition3]="getCondition3()"
        [condition4]="getCondition4()"
        [minEntryBalance]="minEntryBalance()"
        [playersPerMatch]="playersPerMatch()"
        [matchDuration]="formatDuration(matchDuration())"
        [prizeBoost]="prizeBoost()"
      />
    </div>
  </div>
}

<!--Event-->
@if (currentTrn()?.type === "event") {
  <!-- \u80CC\u666F\u8868\u683C -->
  <!--div class="relative w-full bg-zinc-800 flex flex-col min-h-screen rounded-t-2xl shadow-xl mt-8 select-none"-->
  <div class="px-4 sm:px-6 pt-4 sm:pt-6">
    <ap-trn-game-list
      [trnData]="currentTrn()"
      [getDaysLabel]="getDaysLabel()"
      [getHoursLabel]="getHoursLabel()"
      [getMinutesLabel]="getMinutesLabel()"
      [getSecondsLabel]="getSecondsLabel()"
      [getCountdownStartTitle]="getCountdownStartTitle()"
      [getCountdownEndTitle]="getCountdownEndTitle()"
      [hasParticipated]="true"
    />
    <div class="flex flex-col items-center p-8 gap-8">
      <ap-button
        [accentColor]="'purple'"
        [label]="getHowToPlayBtnText()"
        (click)="onOpenTutorial()"
      />
      <ap-trn-info-table
        [variant]="'event'"
        [description]="secondDescription()"
        [title]="matchRangeTitle()"
        [condition1]="getCondition1()"
        [condition2]="getCondition2()"
        [condition3]="getCondition3()"
        [condition4]="getCondition4()"
        [minEntryBalance]="minEntryBalance()"
        [playersPerMatch]="playersPerMatch()"
        [matchDuration]="formatDuration(matchDuration())"
        [prizeBoost]="prizeBoost()"
      />
    </div>
  </div>
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventTrnInfoComponent, { className: "EventTrnInfoComponent", filePath: "src/app/pages/event-trn-info/event-trn-info.component.ts", lineNumber: 19 });
})();

// src/app/pages/event-trn-rules/event-trn-rules.data.ts
var defaultQuickSections = [
  {
    titleKey: "Quick_Rules_Title1",
    title: "Tournament Entry Rules",
    items: [
      { key: "Quick_Rules_Content1", text: "Players must register before the tournament starts" },
      { key: "Quick_Rules_Content2", text: "Minimum bet requirements apply for each level" },
      { key: "Quick_Rules_Content3", text: "Only verified accounts can participate" },
      { key: "Quick_Rules_Content4", text: "One entry per player per tournament" }
    ]
  },
  {
    titleKey: "Quick_Rules_Title2",
    title: "Gameplay Rules",
    items: [
      { key: "Quick_Rules_Content5", text: "Follow standard game rules and regulations" },
      { key: "Quick_Rules_Content6", text: "No third-party software or bots allowed" },
      { key: "Quick_Rules_Content7", text: "Disconnections may result in automatic play" },
      { key: "Quick_Rules_Content8", text: "Fair play policies strictly enforced" }
    ]
  },
  {
    titleKey: "Quick_Rules_Title3",
    title: "Prize Distribution",
    items: [
      { key: "Quick_Rules_Content9", text: "Prizes awarded automatically upon completion" },
      { key: "Quick_Rules_Content10", text: "Winners announced immediately after tournament" },
      { key: "Quick_Rules_Content11", text: "Cash prizes credited to player accounts" },
      { key: "Quick_Rules_Content12", text: "Bonus tickets have expiration dates" }
    ]
  }
];
var defaultEventSections = [
  {
    titleKey: "Event_Rules_Title1",
    title: "Event Tournament Rules",
    items: [
      { key: "Event_Rules_Content1", text: "Special registration requirements for events" },
      { key: "Event_Rules_Content2", text: "Higher entry fees for premium tournaments" },
      { key: "Event_Rules_Content3", text: "Extended tournament duration" },
      { key: "Event_Rules_Content4", text: "Exclusive rewards and prizes" }
    ]
  },
  {
    titleKey: "Event_Rules_Title2",
    title: "Competition Guidelines",
    items: [
      { key: "Event_Rules_Content5", text: "Professional conduct required" },
      { key: "Event_Rules_Content6", text: "Advanced game mechanics apply" },
      { key: "Event_Rules_Content7", text: "Real-time leaderboard tracking" },
      { key: "Event_Rules_Content8", text: "Elimination rounds may apply" }
    ]
  },
  {
    titleKey: "Event_Rules_Title3",
    title: "Rewards Structure",
    items: [
      { key: "Event_Rules_Content9", text: "Tiered prize distribution system" },
      { key: "Event_Rules_Content10", text: "Special event bonuses available" },
      { key: "Event_Rules_Content11", text: "VIP rewards for top performers" },
      { key: "Event_Rules_Content12", text: "Seasonal tournament privileges" }
    ]
  }
];

// src/app/pages/event-trn-rules/event-trn-rules.component.ts
var _forTrack06 = ($index, $item) => $item.title;
function EventTrnRulesComponent_For_4_For_5_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(child_r1);
  }
}
function EventTrnRulesComponent_For_4_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "ul", 6);
    \u0275\u0275repeaterCreate(3, EventTrnRulesComponent_For_4_For_5_Conditional_0_For_4_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.text, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r2.items);
  }
}
function EventTrnRulesComponent_For_4_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.text);
  }
}
function EventTrnRulesComponent_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventTrnRulesComponent_For_4_For_5_Conditional_0_Template, 5, 1, "li", 5)(1, EventTrnRulesComponent_For_4_For_5_Conditional_1_Template, 2, 1, "li", 5);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.isRuleGroup(item_r2) ? 0 : 1);
  }
}
function EventTrnRulesComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 4);
    \u0275\u0275repeaterCreate(4, EventTrnRulesComponent_For_4_For_5_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("text-left font-medium " + ctx_r2.titleColor());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(section_r4.items);
  }
}
var EventTrnRulesComponent = class _EventTrnRulesComponent {
  appI18n = inject(AppI18nService);
  api = inject(AppInterfaceService);
  getQuickTimeLabel = this.appI18n.computed("RegularEvent_Tag", "Regular Event");
  getDaysLabel = this.appI18n.computed("DAYS", "DAYS");
  getHoursLabel = this.appI18n.computed("HRS", "HRS");
  getMinutesLabel = this.appI18n.computed("MINS", "MINS");
  getSecondsLabel = this.appI18n.computed("SECS", "SECS");
  getCountdownStartTitle = this.appI18n.computed("StartIn_Tip", "Start in");
  getCountdownEndTitle = this.appI18n.computed("EndIn_Tip", "End in");
  goBack = output();
  close = output();
  //* 積分
  bonusPoint = signal(500) || null;
  variant = computed(() => {
    return this.currentTrn()?.type || "event";
  });
  currentTrn = input(null);
  quickSections = input(defaultQuickSections);
  eventSections = input(defaultEventSections);
  //* 字串轉換
  currentSections = computed(() => (this.variant() === "quick" ? this.quickSections() : this.eventSections()).map((section) => __spreadProps(__spreadValues({}, section), {
    title: section.titleKey ? this.appI18n.instant(section.titleKey, section.title) : section.title,
    items: section.items.map((item) => this.isRuleGroup(item) ? __spreadProps(__spreadValues({}, item), { text: item.textKey ? this.appI18n.instant(item.textKey, item.text) : item.text }) : __spreadProps(__spreadValues({}, item), { text: item.key ? this.appI18n.instant(item.key, item.text) : item.text }))
  })));
  titleColor = computed(() => this.variant() === "quick" ? "text-yellow-200" : "text-purple-200");
  // Event handlers
  handleBack() {
    this.goBack.emit();
  }
  handleClose() {
    this.close.emit();
  }
  // Get countdown time from data based on variant
  getCountdownTime() {
    return "";
  }
  isRuleGroup(item) {
    return "items" in item;
  }
  static \u0275fac = function EventTrnRulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventTrnRulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventTrnRulesComponent, selectors: [["event-trn-rules"]], inputs: { currentTrn: [1, "currentTrn"], quickSections: [1, "quickSections"], eventSections: [1, "eventSections"] }, outputs: { goBack: "goBack", close: "close" }, decls: 5, vars: 9, consts: [[1, "px-4", "sm:px-6", "pt-4", "sm:pt-6"], [3, "trnData", "getQuickTimeLabel", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "hasParticipated"], [1, "space-y-8", "mt-2", "sm:mt-4", "pb-10"], [1, "flex", "flex-col", "gap-3", "items-left", "px-4", "sm:px-6"], [1, "w-full", "max-w-2xl", "font-normal", "list-disc", "list-inside", "text-zinc-300", "leading-relaxed", "space-y-2", "-mt-4", "text-left"], [1, "text-sm", "sm:text-base"], [1, "mt-2", "list-disc", "list-inside", "space-y-1", "pl-4", "text-zinc-400"]], template: function EventTrnRulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "ap-trn-game-list", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275repeaterCreate(3, EventTrnRulesComponent_For_4_Template, 6, 3, "div", 3, _forTrack06);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("trnData", ctx.currentTrn())("getQuickTimeLabel", ctx.getQuickTimeLabel())("getDaysLabel", ctx.getDaysLabel())("getHoursLabel", ctx.getHoursLabel())("getMinutesLabel", ctx.getMinutesLabel())("getSecondsLabel", ctx.getSecondsLabel())("getCountdownStartTitle", ctx.getCountdownStartTitle())("getCountdownEndTitle", ctx.getCountdownEndTitle())("hasParticipated", true);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.currentSections());
    }
  }, dependencies: [ApTrnGameListComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventTrnRulesComponent, [{
    type: Component,
    args: [{ selector: "event-trn-rules", imports: [ApTrnGameListComponent], template: `<div class="px-4 sm:px-6 pt-4 sm:pt-6">
  <!-- Tournament List -->
  <ap-trn-game-list
    [trnData]="currentTrn()"
    [getQuickTimeLabel]="getQuickTimeLabel()"
    [getDaysLabel]="getDaysLabel()"
    [getHoursLabel]="getHoursLabel()"
    [getMinutesLabel]="getMinutesLabel()"
    [getSecondsLabel]="getSecondsLabel()"
    [getCountdownStartTitle]="getCountdownStartTitle()"
    [getCountdownEndTitle]="getCountdownEndTitle()"
    [hasParticipated]="true"
  />
  <!-- Rules Sections -->
  <div class="space-y-8 mt-2 sm:mt-4 pb-10">
    @for (section of currentSections(); track section.title) {
      <div class="flex flex-col gap-3 items-left px-4 sm:px-6">
        <h2 [class]="'text-left font-medium ' + titleColor()">
          {{ section.title }}
        </h2>
        <ul
          class="w-full max-w-2xl font-normal list-disc list-inside text-zinc-300 leading-relaxed space-y-2 -mt-4 text-left"
        >
          @for (item of section.items; track item) {
            @if (isRuleGroup(item)) {
              <li class="text-sm sm:text-base">
                {{ item.text }}
                <ul class="mt-2 list-disc list-inside space-y-1 pl-4 text-zinc-400">
                  @for (child of item.items; track child) {
                    <li>{{ child }}</li>
                  }
                </ul>
              </li>
            } @else {
              <li class="text-sm sm:text-base">{{ item.text }}</li>
            }
          }
        </ul>
      </div>
    }
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventTrnRulesComponent, { className: "EventTrnRulesComponent", filePath: "src/app/pages/event-trn-rules/event-trn-rules.component.ts", lineNumber: 13 });
})();

// src/app/pages/event-trn-ranking/event-trn-ranking.component.ts
var _forTrack07 = ($index, $item) => $item.label;
function EventTrnRankingComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r1 = ctx.$implicit;
    \u0275\u0275classMap(header_r1.width + " px-4 py-2 " + header_r1.align);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", header_r1.label, " ");
  }
}
function EventTrnRankingComponent_For_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " You ");
  }
}
function EventTrnRankingComponent_For_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const data_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", data_r2.name, " ");
  }
}
function EventTrnRankingComponent_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const data_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", ctx_r2.trn.currencySymbol(), "", \u0275\u0275pipeBind1(1, 2, data_r2.win), " ");
  }
}
function EventTrnRankingComponent_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function EventTrnRankingComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 10)(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275conditionalCreate(4, EventTrnRankingComponent_For_13_Conditional_4_Template, 1, 0)(5, EventTrnRankingComponent_For_13_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 16);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 16);
    \u0275\u0275conditionalCreate(10, EventTrnRankingComponent_For_13_Conditional_10_Template, 2, 4)(11, EventTrnRankingComponent_For_13_Conditional_11_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const \u0275$index_25_r4 = ctx.$index;
    \u0275\u0275property("ngClass", data_r2.highlighted ? "bg-purple-900/60 border-2 border-purple-400" : \u0275$index_25_r4 % 2 === 0 ? "bg-zinc-800" : "bg-zinc-900");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.highlighted ? "text-zinc-300" : "text-purple-50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.rank === null || data_r2.rank === void 0 ? "-" : data_r2.rank, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", data_r2.highlighted ? "text-purple-200" : "text-zinc-300");
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r2.highlighted ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.highlighted ? "text-purple-200" : "text-zinc-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 9, data_r2.score, "1.0-0"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.highlighted ? "text-purple-200" : "text-zinc-300");
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r2.win ? 10 : 11);
  }
}
function EventTrnRankingComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function EventTrnRankingComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 13);
  }
}
var EventTrnRankingComponent = class _EventTrnRankingComponent {
  appI18n = inject(AppI18nService);
  getRefreshButtonText = this.appI18n.computed("Refresh_Btn", "Refresh");
  getDaysLabel = this.appI18n.computed("DAYS", "DAYS");
  getHoursLabel = this.appI18n.computed("HRS", "HRS");
  getMinutesLabel = this.appI18n.computed("MINS", "MINS");
  getSecondsLabel = this.appI18n.computed("SECS", "SECS");
  getCountdownStartTitle = this.appI18n.computed("StartIn_Tip", "Start in");
  getCountdownEndTitle = this.appI18n.computed("EndIn_Tip", "End in");
  api = inject(AppInterfaceService);
  trn = inject(TrnCtrlService);
  currentTrn = input(null);
  isLoading = signal(true);
  goBack = output();
  getNOLabel = this.appI18n.computed("RankNo_RankList", "No.");
  playerNameLabel = this.appI18n.computed("PlayerName__RankList", "Player Name");
  scoreLabel = this.appI18n.computed("Score__RankList", "Score");
  prizeLabel = this.appI18n.computed("Prize__RankList", "Prize");
  tableHeaders = signal([
    { label: this.getNOLabel(), width: "w-[15%]", align: "text-left" },
    { label: this.playerNameLabel(), width: "w-[15%]", align: "text-left" },
    { label: this.scoreLabel(), width: "w-[40%]", align: "text-right" },
    { label: this.prizeLabel(), width: "w-[40%]", align: "text-right" }
  ]);
  //* 積分
  bonusPoint = signal(500) || null;
  //** 每頁顯示幾筆資料 */
  itemsPerPage = signal(10);
  currentPage = signal(1);
  totalPages = signal(1);
  currentPageData = signal(defaultPlayersList);
  destroy$ = new Subject();
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit() {
    this.trn.eventLeaderboard$.pipe(delay(500), takeUntil(this.destroy$)).subscribe(this.onLeadboardUpdate.bind(this));
    this.sendLeaderboardRequest();
  }
  paginationConfig = computed(() => ({
    currentPage: this.currentPage(),
    totalPages: this.totalPages(),
    showPages: 1
  }));
  onPageChanged(page) {
    this.isLoading.set(true);
    this.currentPage.set(page);
    this.sendLeaderboardRequest();
  }
  handleBack() {
    this.goBack.emit();
  }
  clickRefresh() {
    this.sendLeaderboardRequest();
  }
  onLeadboardUpdate(data) {
    this.currentPageData.set(data.list);
    this.totalPages.set(data.totalPages);
    this.isLoading.set(false);
  }
  sendLeaderboardRequest() {
    this.trn.sendEvnetLeaderboard(this.currentTrn()?.id || "", this.currentPage(), this.itemsPerPage());
  }
  // Get countdown time from event data
  getCountdownTime() {
    return "";
  }
  static \u0275fac = function EventTrnRankingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventTrnRankingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventTrnRankingComponent, selectors: [["event-trn-ranking"]], inputs: { currentTrn: [1, "currentTrn"] }, outputs: { goBack: "goBack" }, decls: 17, vars: 15, consts: [[1, "relative", "px-4", "sm:px-6", "pt-4", "sm:pt-6"], [3, "trnData", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "hasParticipated"], [1, "relative"], [1, "relative", "flex", "justify-end", "mt-6", "gap-4", "items-center"], ["icon", "arrow-path", 3, "click", "label", "size", "accentColor"], [1, "relative", "w-full", "mx-auto", "border-2", "border-purple-300/20", "rounded-xl", "overflow-x-auto", "mt-2", "shadow-xl", "mb-4"], [1, "w-full", "min-w-150"], [1, "bg-purple-500/15", "rounded-t-xl", "backdrop-blur-sm", "text-purple-200", "text-md", "tracking-wide"], [3, "class"], [1, "divide-y", "divide-zinc-700/50"], [1, "transition-all", "duration-200", "hover:bg-purple-500/5", "text-md", "sm:text-base", 3, "ngClass"], [1, "absolute", "inset-0", "popup-overlay"], [3, "pageChanged", "variant", "config"], [1, "absolute", "inset-0"], [1, "px-4", "py-3", 3, "ngClass"], [1, "px-4", "py-3", "text-left", 3, "ngClass"], [1, "px-4", "py-3", "text-right", "font-medium", 3, "ngClass"]], template: function EventTrnRankingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "ap-trn-game-list", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "ap-button", 4);
      \u0275\u0275listener("click", function EventTrnRankingComponent_Template_ap_button_click_4_listener() {
        return ctx.clickRefresh();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5)(6, "table", 6)(7, "thead", 7)(8, "tr");
      \u0275\u0275repeaterCreate(9, EventTrnRankingComponent_For_10_Template, 2, 3, "th", 8, _forTrack07);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "tbody", 9);
      \u0275\u0275repeaterCreate(12, EventTrnRankingComponent_For_13_Template, 12, 12, "tr", 10, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, EventTrnRankingComponent_Conditional_14_Template, 1, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "ap-ui-pagination", 12);
      \u0275\u0275listener("pageChanged", function EventTrnRankingComponent_Template_ap_ui_pagination_pageChanged_15_listener($event) {
        return ctx.onPageChanged($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, EventTrnRankingComponent_Conditional_16_Template, 1, 0, "ap-loading-overlay", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("trnData", ctx.currentTrn())("getDaysLabel", ctx.getDaysLabel())("getHoursLabel", ctx.getHoursLabel())("getMinutesLabel", ctx.getMinutesLabel())("getSecondsLabel", ctx.getSecondsLabel())("getCountdownStartTitle", ctx.getCountdownStartTitle())("getCountdownEndTitle", ctx.getCountdownEndTitle())("hasParticipated", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("label", ctx.getRefreshButtonText())("size", "small")("accentColor", "purple");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.tableHeaders());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.currentPageData());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("variant", "event")("config", ctx.paginationConfig());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 16 : -1);
    }
  }, dependencies: [ApTrnGameListComponent, ApUiPaginationComponent, ApButtonComponent, CommonModule, NgClass, DecimalPipe, ApLoadingOverlayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventTrnRankingComponent, [{
    type: Component,
    args: [{ selector: "event-trn-ranking", imports: [ApTrnGameListComponent, ApUiPaginationComponent, ApButtonComponent, CommonModule, ApLoadingOverlayComponent], template: `<div class="relative px-4 sm:px-6 pt-4 sm:pt-6">
  <!-- Tournament List -->
  <ap-trn-game-list
    [trnData]="currentTrn()"
    [getDaysLabel]="getDaysLabel()"
    [getHoursLabel]="getHoursLabel()"
    [getMinutesLabel]="getMinutesLabel()"
    [getSecondsLabel]="getSecondsLabel()"
    [getCountdownStartTitle]="getCountdownStartTitle()"
    [getCountdownEndTitle]="getCountdownEndTitle()"
    [hasParticipated]="true"
  />
  <div class="relative">
    <!-- Refresh Button -->
    <div class="relative flex justify-end mt-6 gap-4 items-center">
      <ap-button
        [label]="getRefreshButtonText()"
        [size]="'small'"
        icon="arrow-path"
        [accentColor]="'purple'"
        (click)="clickRefresh()"
      />
    </div>

    <!-- Ranking Table -->
    <div
      class="relative w-full mx-auto border-2 border-purple-300/20 rounded-xl overflow-x-auto mt-2 shadow-xl mb-4"
    >
      <table class="w-full min-w-150">
        <!-- Table Header -->
        <thead
          class="bg-purple-500/15 rounded-t-xl backdrop-blur-sm text-purple-200 text-md tracking-wide"
        >
          <tr>
            @for (header of tableHeaders(); track header.label) {
              <th [class]="header.width + ' px-4 py-2 ' + header.align">
                {{ header.label }}
              </th>
            }
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody class="divide-y divide-zinc-700/50">
          @for (data of currentPageData(); track $index; let isEven = $even) {
            <tr
              class="transition-all duration-200 hover:bg-purple-500/5 text-md sm:text-base"
              [ngClass]="
                data.highlighted
                  ? 'bg-purple-900/60 border-2 border-purple-400'
                  : isEven
                    ? 'bg-zinc-800'
                    : 'bg-zinc-900'
              "
            >
              <!-- Rank Column -->
              <td
                class="px-4 py-3"
                [ngClass]="
                  data.highlighted ? 'text-zinc-300' : 'text-purple-50'
                "
              >
                {{
                  data.rank === null || data.rank === undefined
                    ? "-"
                    : data.rank
                }}
              </td>

              <!-- Username Column -->
              <td
                class="px-4 py-3 text-left"
                [ngClass]="
                  data.highlighted ? 'text-purple-200' : 'text-zinc-300'
                "
              >
                @if (data.highlighted) {
                  You
                } @else {
                  {{ data.name }}
                }
              </td>

              <!-- Score Column -->
              <td
                class="px-4 py-3 text-right font-medium"
                [ngClass]="
                  data.highlighted ? 'text-purple-200' : 'text-zinc-300'
                "
              >
                <!-- \u986F\u793A\u6574\u6578 -->
                {{ data.score | number:'1.0-0' }}
              </td>

              <!-- Prize Column -->
              <td
                class="px-4 py-3 text-right font-medium"
                [ngClass]="
                  data.highlighted ? 'text-purple-200' : 'text-zinc-300'
                "
              >
                @if (data.win) {
                  {{ trn.currencySymbol() }}{{ data.win | number }}
                }
                @else {
                  -
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
      @if (isLoading()) {
        <div class="absolute inset-0 popup-overlay"></div>
      }
    </div>

    <!-- Pagination -->
    <ap-ui-pagination
      [variant]="'event'"
      [config]="paginationConfig()"
      (pageChanged)="onPageChanged($event)"
    />
    @if (isLoading()) {
      <ap-loading-overlay class="absolute inset-0" />
    }
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventTrnRankingComponent, { className: "EventTrnRankingComponent", filePath: "src/app/pages/event-trn-ranking/event-trn-ranking.component.ts", lineNumber: 20 });
})();

// src/app/pages/event-trn-prize/event-trn-prize.data.ts
var defaultLevelTitles = ["Level 1", "Level 2", "Level 3"];
var defaultQuickSections2 = [
  {
    items: [
      {
        key: "Quick_Prizes_Content1",
        text: "Special registration requirements for events."
      },
      {
        key: "Quick_Prizes_Content2",
        text: "Higher entry fees for premium tournaments."
      },
      {
        key: "Quick_Prizes_Content3",
        text: "Extended tournament duration."
      },
      {
        key: "Quick_Prizes_Content4",
        text: "Exclusive rewards and prizes."
      }
    ]
  }
];
var defaultEventSections2 = [
  {
    items: [
      {
        key: "Event_Prizes_Content1",
        text: "Special registration requirements for events"
      },
      {
        key: "Event_Prizes_Content2",
        text: "Higher entry fees for premium tournaments"
      },
      {
        key: "Event_Prizes_Content3",
        text: "Extended tournament duration"
      },
      {
        key: "Event_Prizes_Content4",
        text: "Exclusive rewards and prizes"
      }
    ]
  }
];
var prizeDataByLevel = [
  [
    { number: "1", winner: 1, prize: 3e5, tickets: 0.3 },
    { number: "2", winner: 1, prize: 3e4, tickets: 0.2 },
    { number: "3", winner: 1, prize: 1e4, tickets: 0.1 },
    { number: "4-5", winner: 2, prize: 8e3, tickets: 0.05 },
    { number: "6-10", winner: 5, prize: 7e3, tickets: 0.03 },
    { number: "11-20", winner: 10, prize: 6e3, tickets: 0.01 },
    { number: "21-50", winner: 12, prize: 5e3, tickets: 0.03 },
    { number: "51-100", winner: 15, prize: 300, tickets: 0.01 }
  ],
  [
    { number: "1", winner: 1, prize: 5e5, tickets: 0.5 },
    { number: "2", winner: 1, prize: 5e4, tickets: 0.15 },
    { number: "3", winner: 1, prize: 2e4, tickets: 0.15 },
    { number: "4-5", winner: 2, prize: 15e3, tickets: 0.02 },
    { number: "6-10", winner: 4, prize: 12e3, tickets: 0.04 },
    { number: "11-20", winner: 8, prize: 1e4, tickets: 0.02 },
    { number: "21-50", winner: 10, prize: 8e3, tickets: 0.04 },
    { number: "51-100", winner: 12, prize: 500, tickets: 0.02 }
  ],
  [
    { number: "1", winner: 1, prize: 1e6, tickets: 0.7 },
    { number: "2", winner: 1, prize: 1e5, tickets: 0.1 },
    { number: "3", winner: 1, prize: 5e4, tickets: 0.1 },
    { number: "4-5", winner: 1, prize: 3e4, tickets: 0.03 },
    { number: "6-10", winner: 2, prize: 25e3, tickets: 0.06 },
    { number: "11-20", winner: 4, prize: 2e4, tickets: 0.03 },
    { number: "21-50", winner: 5, prize: 15e3, tickets: 0.06 },
    { number: "51-100", winner: 8, prize: 1e3, tickets: 0.03 }
  ]
];

// src/app/pages/event-trn-prize/event-trn-prize.component.ts
var _forTrack08 = ($index, $item) => $item.number;
var _forTrack12 = ($index, $item) => $item.items;
var _forTrack2 = ($index, $item) => $item.key ?? $item.text;
function EventTrnPrizeComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function EventTrnPrizeComponent_Conditional_0_For_5_Template_button_click_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectLevel($index_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const title_r4 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const \u0275$index_10_r5 = ctx.$index;
    const \u0275$count_10_r6 = ctx.$count;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("rounded-tl-xl", \u0275$index_10_r5 === 0)("rounded-tr-xl", \u0275$index_10_r5 === \u0275$count_10_r6 - 1)("bg-yellow-400", ctx_r2.selectedLevel() === $index_r2)("text-black", ctx_r2.selectedLevel() === $index_r2)("text-zinc-400", ctx_r2.selectedLevel() !== $index_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", title_r4, " ");
  }
}
function EventTrnPrizeComponent_Conditional_0_For_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 23);
    \u0275\u0275element(3, "ap-icon", 24);
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prize_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("name", "wallet default");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, prize_r7.tickets * 100, "1.0-1"), "% ");
  }
}
function EventTrnPrizeComponent_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 19)(6, "div", 20)(7, "span", 21);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "moneyText");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, EventTrnPrizeComponent_Conditional_0_For_18_Conditional_10_Template, 7, 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prize_r7 = ctx.$implicit;
    const \u0275$index_33_r8 = ctx.$index;
    \u0275\u0275classProp("bg-zinc-800", \u0275$index_33_r8 % 2 === 0)("bg-zinc-900", !(\u0275$index_33_r8 % 2 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", prize_r7.number, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", prize_r7.winner, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, prize_r7.prize), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(prize_r7.tickets > 0 ? 10 : -1);
  }
}
function EventTrnPrizeComponent_Conditional_0_For_22_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r9.text);
  }
}
function EventTrnPrizeComponent_Conditional_0_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EventTrnPrizeComponent_Conditional_0_For_22_For_1_Template, 2, 1, "li", 26, _forTrack2);
  }
  if (rf & 2) {
    const section_r10 = ctx.$implicit;
    \u0275\u0275repeater(section_r10.items);
  }
}
function EventTrnPrizeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "ap-trn-game-list", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275repeaterCreate(4, EventTrnPrizeComponent_Conditional_0_For_5_Template, 2, 11, "button", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "table", 6)(8, "thead", 7)(9, "tr")(10, "th", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 11);
    \u0275\u0275repeaterCreate(17, EventTrnPrizeComponent_Conditional_0_For_18_Template, 11, 10, "tr", 12, _forTrack08);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 13)(20, "ul", 14);
    \u0275\u0275repeaterCreate(21, EventTrnPrizeComponent_Conditional_0_For_22_Template, 2, 0, null, null, _forTrack12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("trnData", ctx_r2.currentTrn())("getQuickTimeLabel", ctx_r2.getQuickTimeLabel());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.levelTitles());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTableTitle1(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTableTitle2(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTableTitle3(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getCurrentPrizes());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.currentSections());
  }
}
function EventTrnPrizeComponent_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function EventTrnPrizeComponent_Conditional_1_For_5_Template_button_click_0_listener() {
      const $index_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectLevel($index_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const title_r13 = ctx.$implicit;
    const $index_r12 = ctx.$index;
    const \u0275$index_80_r14 = ctx.$index;
    const \u0275$count_80_r15 = ctx.$count;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("rounded-tl-xl", \u0275$index_80_r14 === 0)("rounded-tr-xl", \u0275$index_80_r14 === \u0275$count_80_r15 - 1)("bg-purple-300", ctx_r2.selectedLevel() === $index_r12)("text-black", ctx_r2.selectedLevel() === $index_r12)("text-zinc-400", ctx_r2.selectedLevel() !== $index_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", title_r13, " ");
  }
}
function EventTrnPrizeComponent_Conditional_1_For_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 23);
    \u0275\u0275element(3, "ap-icon", 41);
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prize_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("name", "wallet default");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, prize_r16.tickets * 100, "1.0-1"), "% ");
  }
}
function EventTrnPrizeComponent_Conditional_1_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 36)(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 19)(6, "div", 20)(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "moneyText");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, EventTrnPrizeComponent_Conditional_1_For_18_Conditional_10_Template, 7, 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prize_r16 = ctx.$implicit;
    const \u0275$index_103_r17 = ctx.$index;
    \u0275\u0275classProp("bg-zinc-800", \u0275$index_103_r17 % 2 === 0)("bg-zinc-900", !(\u0275$index_103_r17 % 2 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", prize_r16.number, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", prize_r16.winner, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, prize_r16.prize), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(prize_r16.tickets > 0 ? 10 : -1);
  }
}
function EventTrnPrizeComponent_Conditional_1_For_22_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r18.text);
  }
}
function EventTrnPrizeComponent_Conditional_1_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EventTrnPrizeComponent_Conditional_1_For_22_For_1_Template, 2, 1, "li", 26, _forTrack2);
  }
  if (rf & 2) {
    const section_r19 = ctx.$implicit;
    \u0275\u0275repeater(section_r19.items);
  }
}
function EventTrnPrizeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "ap-trn-game-list", 27);
    \u0275\u0275elementStart(2, "div", 28)(3, "div", 29);
    \u0275\u0275repeaterCreate(4, EventTrnPrizeComponent_Conditional_1_For_5_Template, 2, 11, "button", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31)(7, "table", 32)(8, "thead", 33)(9, "tr")(10, "th", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 11);
    \u0275\u0275repeaterCreate(17, EventTrnPrizeComponent_Conditional_1_For_18_Template, 11, 10, "tr", 34, _forTrack08);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 13)(20, "ul", 14);
    \u0275\u0275repeaterCreate(21, EventTrnPrizeComponent_Conditional_1_For_22_Template, 2, 0, null, null, _forTrack12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("trnData", ctx_r2.currentTrn())("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("hasParticipated", true);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.levelTitles());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTableTitle1(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTableTitle2(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTableTitle3(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getCurrentPrizes());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.currentSections());
  }
}
var EventTrnPrizeComponent = class _EventTrnPrizeComponent {
  api = inject(AppInterfaceService);
  i18n = inject(AppI18nService);
  getQuickTimeLabel = this.i18n.computed("RegularEvent_Tag", "Regular Event");
  getTableTitle1 = this.i18n.computed("Rank_PrizeList", "Rank");
  getTableTitle2 = this.i18n.computed("Winners_PrizeList", "Winners");
  getTableTitle3 = this.i18n.computed("Pirze_PrizeList", "Prize");
  getDaysLabel = this.i18n.computed("DAYS", "DAYS");
  getHoursLabel = this.i18n.computed("HRS", "HRS");
  getMinutesLabel = this.i18n.computed("MINS", "MINS");
  getSecondsLabel = this.i18n.computed("SECS", "SECS");
  getCountdownStartTitle = this.i18n.computed("StartIn_Tip", "Start in");
  getCountdownEndTitle = this.i18n.computed("EndIn_Tip", "End in");
  //* 積分
  bonusPoint = signal(500) || null;
  trn = inject(TrnCtrlService);
  /** 上一頁 */
  goBack = output();
  /** 關閉 */
  close = output();
  // Component configuration
  variant = computed(() => {
    return this.currentTrn()?.type || "event";
  });
  currentTrn = input(null);
  /** Level Tag Name */
  levelTitles = signal(defaultLevelTitles);
  quickSections = signal(defaultQuickSections2);
  eventSections = signal(defaultEventSections2);
  currentSections = computed(() => (this.variant() === "quick" ? this.quickSections() : this.eventSections()).map((section) => __spreadProps(__spreadValues({}, section), {
    items: section.items.map((item) => __spreadProps(__spreadValues({}, item), {
      text: item.key ? this.i18n.instant(item.key, item.text) : item.text
    }))
  })));
  // Level selection
  selectedLevel = signal(0);
  // Prize data for each level
  prizeData = signal(prizeDataByLevel);
  ngOnInit() {
    if (!this.currentTrn())
      return;
    const prizes = [];
    const titles = [];
    this.currentTrn()?.tiers.forEach((tier) => {
      titles.push(tier.name);
      const rows = this.formatPrizeRow(tier.fixedPrizes, tier.poolDistribution);
      prizes.push(rows);
    });
    this.prizeData.set(prizes);
    this.levelTitles.set(titles);
  }
  formatPrizeRow(fix, pool) {
    const rows = [];
    fix.forEach((fp, index) => {
      const poolRatio = pool[index]?.ratio || 0;
      if (fp.rank) {
        rows.push({
          number: fp.rank.toString(),
          winner: 1,
          prize: fp.amount,
          tickets: poolRatio
          // 這裡的tickets數量需要根據實際情況來填充
        });
      } else if (fp.rankFrom && fp.rankTo) {
        rows.push({
          number: `${fp.rankFrom}-${fp.rankTo}`,
          winner: fp.rankTo - fp.rankFrom + 1,
          prize: fp.amount,
          tickets: poolRatio
          // 這裡的tickets數量需要根據實際情況來填充
        });
      }
    });
    return rows;
  }
  // Methods
  getCurrentPrizes = computed(() => {
    const level = this.selectedLevel();
    return this.prizeData()[level] || [];
  });
  selectLevel(level) {
    this.selectedLevel.set(level);
  }
  handleBack() {
    this.goBack.emit();
  }
  handleClose() {
    this.close.emit();
  }
  // Get countdown time from data based on variant
  getCountdownTime() {
    return "";
  }
  static \u0275fac = function EventTrnPrizeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventTrnPrizeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventTrnPrizeComponent, selectors: [["event-trn-prize"]], inputs: { currentTrn: [1, "currentTrn"] }, outputs: { goBack: "goBack", close: "close" }, decls: 2, vars: 2, consts: [[1, "px-4", "sm:px-6", "pt-4", "sm:pt-6", "pb-10"], [3, "trnData", "getQuickTimeLabel"], [1, "w-full", "mx-auto", "flex", "justify-start", "mt-6"], [1, "flex", "bg-zinc-800", "rounded-t-lg", "duration-300"], [1, "px-6", "py-1", "text-md", "font-semibold", "transition-colors", "hover:bg-yellow-200/60", "hover:text-black/80", "cursor-pointer", 3, "rounded-tl-xl", "rounded-tr-xl", "bg-yellow-400", "text-black", "text-zinc-400"], [1, "w-full", "mx-auto", "border-2", "border-yellow-300/20", "rounded-b-lg", "rounded-tr-xl", "overflow-hidden", "shadow-lg"], [1, "w-full"], [1, "bg-yellow-300/15", "rounded-tr-xl", "backdrop-blur-sm", "text-yellow-400"], [1, "w-[30%]", "px-4", "py-2", "text-left"], [1, "w-[20%]", "px-4", "py-2", "text-center"], [1, "w-[50%]", "px-4", "py-2", "text-right"], [1, "divide-y", "divide-zinc-700/50"], [1, "transition-all", "duration-200", "hover:bg-yellow-300/5", 3, "bg-zinc-800", "bg-zinc-900"], [1, "flex", "flex-col", "text-center", "gap-3", "sm:gap-4", "items-center", "px-4", "sm:px-6", "mt-6"], [1, "w-full", "list-disc", "list-inside", "text-zinc-300", "leading-relaxed", "mt-2", "space-y-2", "text-left"], [1, "px-6", "py-1", "text-md", "font-semibold", "transition-colors", "hover:bg-yellow-200/60", "hover:text-black/80", "cursor-pointer", 3, "click"], [1, "transition-all", "duration-200", "hover:bg-yellow-300/5"], [1, "px-4", "py-3", "text-yellow-50", "font-medium"], [1, "px-4", "py-3", "text-center", "text-yellow-50", "font-medium"], [1, "px-4", "py-3", "text-right"], [1, "flex", "items-center", "justify-end", "gap-2"], [1, "text-yellow-200", "font-medium"], [1, "text-yellow-300"], [1, "flex", "items-center", "gap-1"], [1, "size-5", "mb-1", "justify-center", "flex", "items-center", "text-yellow-400", 3, "name"], [1, "text-yellow-300", "font-medium"], [1, "text-sm", "sm:text-base"], [3, "trnData", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "getCountdownStartTitle", "getCountdownEndTitle", "hasParticipated"], [1, "w-full", "mx-auto", "flex", "justify-start", "mt-6", "font-semibold"], [1, "flex", "bg-purple-500/20", "rounded-t-lg"], [1, "px-6", "py-1", "text-md", "transition-colors", "hover:bg-purple-200/80", "hover:text-black/80", "cursor-pointer", 3, "rounded-tl-xl", "rounded-tr-xl", "bg-purple-300", "text-black", "text-zinc-400"], [1, "w-full", "mx-auto", "border-2", "border-purple-300/20", "rounded-b-lg", "rounded-tr-xl", "overflow-hidden", "shadow-lg", "pointer-events-none"], [1, "w-full", "text-zinc-300"], [1, "bg-purple-500/15", "rounded-tr-xl", "backdrop-blur-sm", "text-purple-200"], [1, "transition-all", "duration-200", "hover:bg-purple-400/5", 3, "bg-zinc-800", "bg-zinc-900"], [1, "px-6", "py-1", "text-md", "transition-colors", "hover:bg-purple-200/80", "hover:text-black/80", "cursor-pointer", 3, "click"], [1, "transition-all", "duration-200", "hover:bg-purple-400/5"], [1, "px-4", "py-3"], [1, "px-4", "py-3", "text-center"], [1, "text-purple-200", "font-semibold"], [1, "text-purple-300"], [1, "size-5", "mb-1", "justify-center", "flex", "items-center", "text-purple-400", 3, "name"], [1, "text-purple-300", "font-semibold"]], template: function EventTrnPrizeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, EventTrnPrizeComponent_Conditional_0_Template, 23, 5, "div", 0);
      \u0275\u0275conditionalCreate(1, EventTrnPrizeComponent_Conditional_1_Template, 23, 11, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.variant() === "quick" ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.variant() === "event" ? 1 : -1);
    }
  }, dependencies: [ApTrnGameListComponent, ApIconComponent, CommonModule, DecimalPipe, MoneyTextPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventTrnPrizeComponent, [{
    type: Component,
    args: [{ selector: "event-trn-prize", imports: [ApTrnGameListComponent, ApIconComponent, CommonModule, MoneyTextPipe], template: `<!--Quick-->
@if (variant() === "quick") {
  <div class="px-4 sm:px-6 pt-4 sm:pt-6 pb-10">
    <!--List-->
    <ap-trn-game-list
      [trnData]="currentTrn()"
      [getQuickTimeLabel]="getQuickTimeLabel()"
    />
    <!-- Level Selection Tabs -->
    <div class="w-full mx-auto flex justify-start mt-6">
      <div class="flex bg-zinc-800 rounded-t-lg duration-300">
        @for (
          title of levelTitles();
          track title;
          let first = $first;
          let last = $last
        ) {
          <!-- first: rounded-tl-xl , last: rounded-tr-xl -->
          <button
            class="px-6 py-1 text-md font-semibold transition-colors hover:bg-yellow-200/60 hover:text-black/80 cursor-pointer"
            [class.rounded-tl-xl]="first"
            [class.rounded-tr-xl]="last"
            [class.bg-yellow-400]="selectedLevel() === $index"
            [class.text-black]="selectedLevel() === $index"
            [class.text-zinc-400]="selectedLevel() !== $index"
            (click)="selectLevel($index)"
          >
            {{ title }}
          </button>
        }
      </div>
    </div>

    <!-- Prize Table -->
    <div
      class="w-full mx-auto border-2 border-yellow-300/20 rounded-b-lg rounded-tr-xl overflow-hidden shadow-lg"
    >
      <table class="w-full">
        <thead
          class="bg-yellow-300/15 rounded-tr-xl backdrop-blur-sm text-yellow-400"
        >
          <tr>
            <th class="w-[30%] px-4 py-2 text-left">
              {{ getTableTitle1() }}
            </th>
            <th class="w-[20%] px-4 py-2 text-center">
              {{ getTableTitle2() }}
            </th>
            <th class="w-[50%] px-4 py-2 text-right">
              {{ getTableTitle3() }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-zinc-700/50">
          @for (
            prize of getCurrentPrizes();
            track prize.number;
            let isEven = $even
          ) {
            <tr
              class="transition-all duration-200 hover:bg-yellow-300/5"
              [class.bg-zinc-800]="isEven"
              [class.bg-zinc-900]="!isEven"
            >
              <td class="px-4 py-3 text-yellow-50 font-medium">
                {{ prize.number }}
              </td>
              <td class="px-4 py-3 text-center text-yellow-50 font-medium">
                {{ prize.winner }}
              </td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end gap-2">
                  <span class="text-yellow-200 font-medium">
                    {{ prize.prize | moneyText }}
                  </span>
                  @if (prize.tickets > 0) {
                    <span class="text-yellow-300">+</span>
                    <div class="flex items-center gap-1">
                      <ap-icon
                        [name]="'wallet default'"
                        class="size-5 mb-1 justify-center flex items-center text-yellow-400"
                      ></ap-icon>
                      <!-- ex: 30.1% or 20% -->
                      <span class="text-yellow-300 font-medium">
                        {{ prize.tickets * 100 | number: "1.0-1" }}%
                      </span>
                    </div>
                  }
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <div
      class="flex flex-col text-center gap-3 sm:gap-4 items-center px-4 sm:px-6 mt-6"
    >
      <ul
        class="w-full list-disc list-inside text-zinc-300 leading-relaxed mt-2 space-y-2 text-left"
      >
        @for (section of currentSections(); track section.items) {
          @for (item of section.items; track item.key ?? item.text) {
            <li class="text-sm sm:text-base">{{ item.text }}</li>
          }
        }
      </ul>
    </div>
  </div>
}

<!--Event-->
@if (variant() === "event") {
  <div class="px-4 sm:px-6 pt-4 sm:pt-6 pb-10">
    <!--List-->
    <ap-trn-game-list
      [trnData]="currentTrn()"
      [getDaysLabel]="getDaysLabel()"
      [getHoursLabel]="getHoursLabel()"
      [getMinutesLabel]="getMinutesLabel()"
      [getSecondsLabel]="getSecondsLabel()"
      [getCountdownStartTitle]="getCountdownStartTitle()"
      [getCountdownEndTitle]="getCountdownEndTitle()"
      [hasParticipated]="true"
    />
    <!-- Level Selection Tabs -->
    <div class="w-full mx-auto flex justify-start mt-6 font-semibold">
      <div class="flex bg-purple-500/20 rounded-t-lg">
        @for (
          title of levelTitles();
          track title;
          let first = $first;
          let last = $last
        ) {
          <!-- first: rounded-tl-xl , last: rounded-tr-xl -->
          <button
            class="px-6 py-1 text-md transition-colors hover:bg-purple-200/80 hover:text-black/80 cursor-pointer"
            [class.rounded-tl-xl]="first"
            [class.rounded-tr-xl]="last"
            [class.bg-purple-300]="selectedLevel() === $index"
            [class.text-black]="selectedLevel() === $index"
            [class.text-zinc-400]="selectedLevel() !== $index"
            (click)="selectLevel($index)"
          >
            {{ title }}
          </button>
        }
      </div>
    </div>

    <!-- Prize Table -->
    <div
      class="w-full mx-auto border-2 border-purple-300/20 rounded-b-lg rounded-tr-xl overflow-hidden shadow-lg pointer-events-none"
    >
      <table class="w-full text-zinc-300">
        <thead
          class="bg-purple-500/15 rounded-tr-xl backdrop-blur-sm text-purple-200"
        >
          <tr>
            <th class="w-[30%] px-4 py-2 text-left">
              {{ getTableTitle1() }}
            </th>
            <th class="w-[20%] px-4 py-2 text-center">
              {{ getTableTitle2() }}
            </th>
            <th class="w-[50%] px-4 py-2 text-right">
              {{ getTableTitle3() }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-zinc-700/50">
          @for (
            prize of getCurrentPrizes();
            track prize.number;
            let isEven = $even
          ) {
            <tr
              class="transition-all duration-200 hover:bg-purple-400/5"
              [class.bg-zinc-800]="isEven"
              [class.bg-zinc-900]="!isEven"
            >
              <td class="px-4 py-3">
                {{ prize.number }}
              </td>
              <td class="px-4 py-3 text-center">
                {{ prize.winner }}
              </td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end gap-2">
                  <span class="text-purple-200 font-semibold">
                    {{ prize.prize | moneyText }}
                  </span>
                  @if (prize.tickets > 0) {
                    <span class="text-purple-300">+</span>
                    <div class="flex items-center gap-1">
                      <ap-icon
                        [name]="'wallet default'"
                        class="size-5 mb-1 justify-center flex items-center text-purple-400"
                      ></ap-icon>
                      <span class="text-purple-300 font-semibold">
                        {{ prize.tickets * 100 | number: "1.0-1" }}%
                      </span>
                    </div>
                  }
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <div
      class="flex flex-col text-center gap-3 sm:gap-4 items-center px-4 sm:px-6 mt-6"
    >
      <ul
        class="w-full list-disc list-inside text-zinc-300 leading-relaxed mt-2 space-y-2 text-left"
      >
        @for (section of currentSections(); track section.items) {
          @for (item of section.items; track item.key ?? item.text) {
            <li class="text-sm sm:text-base">{{ item.text }}</li>
          }
        }
      </ul>
    </div>
  </div>
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventTrnPrizeComponent, { className: "EventTrnPrizeComponent", filePath: "src/app/pages/event-trn-prize/event-trn-prize.component.ts", lineNumber: 18 });
})();

// src/app/pages/event-trn-tutorial/event-trn-tutorial.data.ts
var quickPages = [
  {
    image: "",
    description: 'Click "Find Match" to join a quick Match'
  },
  {
    image: "",
    description: "Win bets earn points \u2014 higher scores mean bigger prizes"
  },
  {
    image: "",
    description: "Bets x1.2 in match, extra goes to prize pool"
  },
  {
    image: "",
    description: "You can toggle off extra bets anytime (no points counted)"
  }
];
var eventPages = [
  {
    image: "",
    description: "Join special tournament events"
  },
  {
    image: "",
    description: "Compete for bigger prizes"
  },
  {
    image: "",
    description: "Track your ranking in real-time"
  },
  {
    image: "",
    description: "Win exclusive event rewards"
  }
];

// src/app/pages/event-trn-tutorial/event-trn-tutorial.component.ts
function EventTrnTutorialComponent_Conditional_0_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_0_For_9_Template_button_click_0_listener() {
      const $index_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage($index_r4));
    });
    \u0275\u0275element(1, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", "Go to slide " + ($index_r4 + 1));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-yellow-400", ctx_r1.currentPage() === $index_r4)("bg-zinc-600", ctx_r1.currentPage() !== $index_r4);
  }
}
function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 15);
    \u0275\u0275listener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_15_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("size", "large")("label", ctx_r1.getPrevLabel())("accentColor", "zinc");
  }
}
function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_16_Template(rf, ctx) {
}
function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 15);
    \u0275\u0275listener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_17_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("size", "large")("label", ctx_r1.getNextLabel())("accentColor", "yellow");
  }
}
function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 15);
    \u0275\u0275listener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_18_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("size", "large")("label", ctx_r1.getConfirmText())("accentColor", "yellow");
  }
}
function EventTrnTutorialComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275listener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
    \u0275\u0275listener("close", function EventTrnTutorialComponent_Conditional_0_Conditional_0_Template_ap_ui_frame_popup_close_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275repeaterCreate(8, EventTrnTutorialComponent_Conditional_0_Conditional_0_For_9_Template, 2, 5, "button", 8, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275conditionalCreate(15, EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_15_Template, 1, 3, "ap-button", 12)(16, EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_16_Template, 0, 0);
    \u0275\u0275conditionalCreate(17, EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_17_Template, 1, 3, "ap-button", 12)(18, EventTrnTutorialComponent_Conditional_0_Conditional_0_Conditional_18_Template, 1, 3, "ap-button", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("accentColor", "yellow")("size", "mobile")("header", ctx_r1.header());
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.currentPageData().image, \u0275\u0275sanitizeUrl)("alt", "Tutorial page " + (ctx_r1.currentPage() + 1));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pages());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentPageData().description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.currentPage() + 1, " / ", ctx_r1.totalPages(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFirstPage() ? 15 : 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isLastPage() ? 17 : 18);
  }
}
function EventTrnTutorialComponent_Conditional_0_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_1_For_9_Template_button_click_0_listener() {
      const $index_r10 = \u0275\u0275restoreView(_r9).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage($index_r10));
    });
    \u0275\u0275element(1, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r10 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", "Go to slide " + ($index_r10 + 1));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-purple-400", ctx_r1.currentPage() === $index_r10)("bg-zinc-600", ctx_r1.currentPage() !== $index_r10);
  }
}
function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 15);
    \u0275\u0275listener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_15_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("size", "large")("label", ctx_r1.getPrevLabel())("accentColor", "zinc");
  }
}
function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_16_Template(rf, ctx) {
}
function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 15);
    \u0275\u0275listener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_17_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("size", "large")("label", ctx_r1.getNextLabel())("accentColor", "purple");
  }
}
function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 15);
    \u0275\u0275listener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_18_Template_ap_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("size", "large")("label", ctx_r1.getConfirmText())("accentColor", "purple");
  }
}
function EventTrnTutorialComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275listener("click", function EventTrnTutorialComponent_Conditional_0_Conditional_1_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
    \u0275\u0275listener("close", function EventTrnTutorialComponent_Conditional_0_Conditional_1_Template_ap_ui_frame_popup_close_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275repeaterCreate(8, EventTrnTutorialComponent_Conditional_0_Conditional_1_For_9_Template, 2, 5, "button", 8, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275conditionalCreate(15, EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_15_Template, 1, 3, "ap-button", 12)(16, EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_16_Template, 0, 0);
    \u0275\u0275conditionalCreate(17, EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_17_Template, 1, 3, "ap-button", 12)(18, EventTrnTutorialComponent_Conditional_0_Conditional_1_Conditional_18_Template, 1, 3, "ap-button", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("accentColor", "purple")("size", "mobile")("header", ctx_r1.header());
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.currentPageData().image, \u0275\u0275sanitizeUrl)("alt", "Tutorial page " + (ctx_r1.currentPage() + 1));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pages());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentPageData().description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.currentPage() + 1, " / ", ctx_r1.totalPages(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFirstPage() ? 15 : 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isLastPage() ? 17 : 18);
  }
}
function EventTrnTutorialComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventTrnTutorialComponent_Conditional_0_Conditional_0_Template, 19, 10, "div", 0);
    \u0275\u0275conditionalCreate(1, EventTrnTutorialComponent_Conditional_0_Conditional_1_Template, 19, 10, "div", 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.variant() === "quick" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.variant() === "event" ? 1 : -1);
  }
}
var EventTrnTutorialComponent = class _EventTrnTutorialComponent {
  logger;
  //* 服務注入 */
  appI18n = inject(AppI18nService);
  api = inject(AppInterfaceService);
  //* 本地化文本 */
  header = this.appI18n.computed("Tutorial_Title", "Tutorial");
  getNextLabel = this.appI18n.computed("Next_Btn", "Next");
  getPrevLabel = this.appI18n.computed("Previous_Btn", "Previous");
  getConfirmText = this.appI18n.computed("OK_Btn", "Got It");
  getQuickTutorialContent1 = this.appI18n.computed("Quick_Tutorial_Content1", 'Click "Find Match" to join a Quick Match.');
  getQuickTutorialContent2 = this.appI18n.computed("Quick_Tutorial_Content2", "Win bets earn points\u2014 higher scores mean bigger prizes.");
  getQuickTutorialContent3 = this.appI18n.computed("Quick_Tutorial_Content3", "UBets x1.2 in match, extra goes to prize pool.");
  getQuickTutorialContent4 = this.appI18n.computed("Quick_Tutorial_Content4", "You can toggle off extra bets anytime (no points counted).");
  getEventTutorialContent1 = this.appI18n.computed("Event_Tutorial_Content1", "Join special tournament events.");
  getEventTutorialContent2 = this.appI18n.computed("Event_Tutorial_Content2", "Compete for exclusive prizes.");
  getEventTutorialContent3 = this.appI18n.computed("Event_Tutorial_Content3", "Track your ranking in real-time.");
  getEventTutorialContent4 = this.appI18n.computed("Event_Tutorial_Content4", "Win exclusive event rewards.");
  constructor(logger) {
    this.logger = logger;
  }
  //* 輸出事件 */
  close = output();
  back = output();
  //* 組件輸入 */
  variant = input("quick");
  isVisible = input(true);
  confirmText = input("Confirm");
  confirm = output();
  //* 內部狀態 */
  currentPage = signal(0);
  quickPages = quickPages;
  eventPages = eventPages;
  quickPagesLocalized = computed(() => {
    const pages = [...this.quickPages];
    if (pages[0]) {
      pages[0] = __spreadProps(__spreadValues({}, pages[0]), {
        image: "assets/images/tutorial/quick/tutorial-1.png",
        description: this.getQuickTutorialContent1()
      });
    }
    if (pages[1]) {
      pages[1] = __spreadProps(__spreadValues({}, pages[1]), {
        image: "assets/images/tutorial/quick/tutorial-2.png",
        description: this.getQuickTutorialContent2()
      });
    }
    if (pages[2]) {
      pages[2] = __spreadProps(__spreadValues({}, pages[2]), {
        image: "assets/images/tutorial/quick/tutorial-3.png",
        description: this.getQuickTutorialContent3()
      });
    }
    if (pages[3]) {
      pages[3] = __spreadProps(__spreadValues({}, pages[3]), {
        image: "assets/images/tutorial/quick/tutorial-4.png",
        description: this.getQuickTutorialContent4()
      });
    }
    return pages;
  });
  eventPagesLocalized = computed(() => {
    const pages = [...this.eventPages];
    if (pages[0]) {
      pages[0] = __spreadProps(__spreadValues({}, pages[0]), {
        image: "assets/images/tutorial/event/tutorial-1.png",
        description: this.getEventTutorialContent1()
      });
    }
    if (pages[1]) {
      pages[1] = __spreadProps(__spreadValues({}, pages[1]), {
        image: "assets/images/tutorial/event/tutorial-2.png",
        description: this.getEventTutorialContent2()
      });
    }
    if (pages[2]) {
      pages[2] = __spreadProps(__spreadValues({}, pages[2]), {
        image: "assets/images/tutorial/event/tutorial-3.png",
        description: this.getEventTutorialContent3()
      });
    }
    if (pages[3]) {
      pages[3] = __spreadProps(__spreadValues({}, pages[3]), {
        image: "assets/images/tutorial/event/tutorial-4.png",
        description: this.getEventTutorialContent4()
      });
    }
    return pages;
  });
  pages = computed(() => this.variant() === "quick" ? this.quickPagesLocalized() : this.eventPagesLocalized());
  totalPages = computed(() => this.pages().length);
  currentPageData = computed(() => this.pages()[this.currentPage()]);
  isFirstPage = computed(() => this.currentPage() === 0);
  isLastPage = computed(() => this.currentPage() === this.totalPages() - 1);
  onConfirm() {
    this.confirm.emit();
    this.close.emit();
  }
  onCancel() {
    this.currentPage.set(0);
    this.close.emit();
  }
  //* 分頁控制方法 */
  nextPage() {
    if (!this.isLastPage()) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }
  prevPage() {
    if (!this.isFirstPage()) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }
  goToPage(index) {
    if (index >= 0 && index < this.totalPages()) {
      this.currentPage.set(index);
    }
  }
  onKey(e) {
    if (e.key === "Escape")
      this.onCancel();
    if (e.key === "Enter")
      this.onConfirm();
    if (e.key === "ArrowLeft")
      this.prevPage();
    if (e.key === "ArrowRight")
      this.nextPage();
  }
  handleClose() {
    this.onCancel();
  }
  handleBack() {
    this.back.emit();
  }
  static \u0275fac = function EventTrnTutorialComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventTrnTutorialComponent)(\u0275\u0275directiveInject(LoggerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventTrnTutorialComponent, selectors: [["event-trn-tutorial"]], hostBindings: function EventTrnTutorialComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function EventTrnTutorialComponent_keydown_HostBindingHandler($event) {
        return ctx.onKey($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { variant: [1, "variant"], isVisible: [1, "isVisible"], confirmText: [1, "confirmText"] }, outputs: { close: "close", back: "back", confirm: "confirm" }, decls: 1, vars: 1, consts: [[1, "relative", "size-full", "flex", "items-center", "justify-center"], [1, "absolute", "inset-0", "bg-black/60", 3, "click"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "accentColor", "size", "header"], [1, "bg-zinc-800", "px-4", "py-8", "text-center", "mx-8", "select-none"], [1, "relative", "w-full"], [1, "relative", "overflow-hidden", "rounded-lg", "h-64", "flex", "items-center", "justify-center"], [1, "max-h-full", "scale-105", "object-contain", "transition-all", "duration-300", 3, "src", "alt"], [1, "flex", "justify-center", "gap-2", "mt-4"], ["type", "button", 1, "transition-all", "duration-200", "hover:scale-110", "cursor-pointer"], [1, "mt-4", "text-xl", "font-medium", "text-zinc-200", "h-16", "sm:h-20"], [1, "mt-2", "text-sm", "text-zinc-400"], [1, "px-8", "pb-8", "flex", "justify-between", "gap-8"], [1, "w-full", 3, "size", "label", "accentColor"], ["type", "button", 1, "transition-all", "duration-200", "hover:scale-110", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "justify-center", "rounded-full", "size-2"], [1, "w-full", 3, "click", "size", "label", "accentColor"]], template: function EventTrnTutorialComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, EventTrnTutorialComponent_Conditional_0_Template, 2, 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isVisible() ? 0 : -1);
    }
  }, dependencies: [ApUiFramePopupComponent, ApButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventTrnTutorialComponent, [{
    type: Component,
    args: [{ selector: "event-trn-tutorial", imports: [ApUiFramePopupComponent, ApButtonComponent, ApUiFramePopupComponent], template: `@if (isVisible()) {
  @if (variant() === "quick") {
    <div class="relative size-full flex items-center justify-center">
      <div class="absolute inset-0 bg-black/60" (click)="onCancel()"></div>
      <ap-ui-frame-popup
        [accentColor]="'yellow'"
        [size]="'mobile'"
        [header]="header()"
        class="w-11/12 md:w-3/4 lg:w-1/2"
        (close)="close.emit()"
      >
        <!-- Content -->
        <div class="bg-zinc-800 px-4 py-8 text-center mx-8 select-none">
          <div class="relative w-full">
            <!-- Carousel wrapper -->
            <div
              class="relative overflow-hidden rounded-lg h-64 flex items-center justify-center"
            >
              <!-- Current Page Image -->
              <img
                [src]="currentPageData().image"
                class="max-h-full scale-105 object-contain transition-all duration-300"
                [alt]="'Tutorial page ' + (currentPage() + 1)"
              />
            </div>

            <!-- Page Indicators -->
            <div class="flex justify-center gap-2 mt-4">
              @for (page of pages(); track $index) {
                <button
                  type="button"
                  (click)="goToPage($index)"
                  class="transition-all duration-200 hover:scale-110 cursor-pointer"
                  [attr.aria-label]="'Go to slide ' + ($index + 1)"
                >
                  <span
                    class="flex items-center justify-center rounded-full size-2"
                    [class.bg-yellow-400]="currentPage() === $index"
                    [class.bg-zinc-600]="currentPage() !== $index"
                  ></span>
                </button>
              }
            </div>

            <!-- Description -->
            <div class="mt-4 text-xl font-medium text-zinc-200 h-16 sm:h-20">
              {{ currentPageData().description }}
            </div>

            <!-- Page Counter -->
            <div class="mt-2 text-sm text-zinc-400">
              {{ currentPage() + 1 }} / {{ totalPages() }}
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-8 pb-8 flex justify-between gap-8">
          @if (!isFirstPage()) {
            <ap-button
              class="w-full"
              [size]="'large'"
              [label]="getPrevLabel()"
              (click)="prevPage()"
              [accentColor]="'zinc'"
            />
          } @else {}
          @if (!isLastPage()) {
            <ap-button
              class="w-full"
              [size]="'large'"
              [label]="getNextLabel()"
              (click)="nextPage()"
              [accentColor]="'yellow'"
            />
          } @else {
            <ap-button
              class="w-full"
              [size]="'large'"
              [label]="getConfirmText()"
              (click)="onConfirm()"
              [accentColor]="'yellow'"
            />
          }
        </div>
      </ap-ui-frame-popup>
    </div>
  }
  @if (variant() === "event") {
    <div class="relative size-full flex items-center justify-center">
      <div class="absolute inset-0 bg-black/60" (click)="onCancel()"></div>
      <ap-ui-frame-popup
        [accentColor]="'purple'"
        [size]="'mobile'"
        [header]="header()"
        class="w-11/12 md:w-3/4 lg:w-1/2"
        (close)="close.emit()"
      >
        <!-- Content -->
        <div class="bg-zinc-800 px-4 py-8 text-center mx-8 select-none">
          <div class="relative w-full">
            <!-- Carousel wrapper -->
            <div
              class="relative overflow-hidden rounded-lg h-64 flex items-center justify-center"
            >
              <!-- Current Page Image -->
              <img
                [src]="currentPageData().image"
                class="max-h-full scale-105 object-contain transition-all duration-300"
                [alt]="'Tutorial page ' + (currentPage() + 1)"
              />
            </div>

            <!-- Page Indicators -->
            <div class="flex justify-center gap-2 mt-4">
              @for (page of pages(); track $index) {
                <button
                  type="button"
                  (click)="goToPage($index)"
                  class="transition-all duration-200 hover:scale-110 cursor-pointer"
                  [attr.aria-label]="'Go to slide ' + ($index + 1)"
                >
                  <span
                    class="flex items-center justify-center rounded-full size-2"
                    [class.bg-purple-400]="currentPage() === $index"
                    [class.bg-zinc-600]="currentPage() !== $index"
                  >
                  </span>
                </button>
              }
            </div>

            <!-- Description -->
            <div class="mt-4 text-xl font-medium text-zinc-200 h-16 sm:h-20">
              {{ currentPageData().description }}
            </div>

            <!-- Page Counter -->
            <div class="mt-2 text-sm text-zinc-400">
              {{ currentPage() + 1 }} / {{ totalPages() }}
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-8 pb-8 flex justify-between gap-8">
          @if (!isFirstPage()) {
            <ap-button
              class="w-full"
              [size]="'large'"
              [label]="getPrevLabel()"
              (click)="prevPage()"
              [accentColor]="'zinc'"
            />
          } @else {}
          @if (!isLastPage()) {
            <ap-button
              class="w-full"
              [size]="'large'"
              [label]="getNextLabel()"
              (click)="nextPage()"
              [accentColor]="'purple'"
            />
          } @else {
            <ap-button
              class="w-full"
              [size]="'large'"
              [label]="getConfirmText()"
              (click)="nextPage()"
              [accentColor]="'purple'"
            />
          }
        </div>
      </ap-ui-frame-popup>
    </div>
  }
}
` }]
  }], () => [{ type: LoggerService }], { onKey: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventTrnTutorialComponent, { className: "EventTrnTutorialComponent", filePath: "src/app/pages/event-trn-tutorial/event-trn-tutorial.component.ts", lineNumber: 15 });
})();

// src/app/pages/event-trn/event-trn.component.ts
var _c03 = ["detailContainer"];
var _forTrack09 = ($index, $item) => $item.name;
function EventTrnComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "event-trn-list", 9);
    \u0275\u0275listener("clicked", function EventTrnComponent_Conditional_9_Template_event_trn_list_clicked_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDetailInfo($event));
    });
    \u0275\u0275elementEnd();
  }
}
function EventTrnComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-trn-history");
  }
}
function EventTrnComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "event-trn-info", 18);
    \u0275\u0275listener("openTutorial", function EventTrnComponent_Conditional_11_Conditional_3_Template_event_trn_info_openTutorial_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTrnTutorial.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("currentTrn", ctx_r1.detailTrn());
  }
}
function EventTrnComponent_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-trn-ranking", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("currentTrn", ctx_r1.detailTrn());
  }
}
function EventTrnComponent_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-trn-prize", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("currentTrn", ctx_r1.detailTrn());
  }
}
function EventTrnComponent_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-trn-rules", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("currentTrn", ctx_r1.detailTrn());
  }
}
function EventTrnComponent_Conditional_11_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-yellow-400", ctx_r1.themeType() === "quick")("bg-purple-400", ctx_r1.themeType() === "event");
  }
}
function EventTrnComponent_Conditional_11_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function EventTrnComponent_Conditional_11_For_11_Template_div_click_0_listener() {
      const tab_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.bottomTab.set(tab_r5.name);
      return \u0275\u0275resetView(ctx_r1.resetDetailScroll());
    });
    \u0275\u0275element(1, "ap-icon", 20);
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventTrnComponent_Conditional_11_For_11_Conditional_4_Template, 1, 4, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("text-yellow-400", ctx_r1.bottomTab() === tab_r5.name && ctx_r1.themeType() === "quick")("text-purple-400", ctx_r1.bottomTab() === tab_r5.name && ctx_r1.themeType() === "event")("text-zinc-400", ctx_r1.bottomTab() !== tab_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("name", tab_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tab_r5.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bottomTab() === tab_r5.name ? 4 : -1);
  }
}
function EventTrnComponent_Conditional_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "event-trn-tutorial", 24);
    \u0275\u0275listener("close", function EventTrnComponent_Conditional_11_Conditional_12_Template_event_trn_tutorial_close_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTrnTutorial.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("variant", ctx_r1.themeType());
  }
}
function EventTrnComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10, 0)(2, "div", 11);
    \u0275\u0275conditionalCreate(3, EventTrnComponent_Conditional_11_Conditional_3_Template, 1, 1, "event-trn-info", 12)(4, EventTrnComponent_Conditional_11_Conditional_4_Template, 1, 1, "event-trn-ranking", 12)(5, EventTrnComponent_Conditional_11_Conditional_5_Template, 1, 1, "event-trn-prize", 12)(6, EventTrnComponent_Conditional_11_Conditional_6_Template, 1, 1, "event-trn-rules", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "div", 14)(9, "div", 15);
    \u0275\u0275repeaterCreate(10, EventTrnComponent_Conditional_11_For_11_Template, 5, 9, "div", 16, _forTrack09);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(12, EventTrnComponent_Conditional_11_Conditional_12_Template, 1, 1, "event-trn-tutorial", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.bottomTab() === "info" ? 3 : ctx_r1.bottomTab() === "ranking" ? 4 : ctx_r1.bottomTab() === "prize" ? 5 : ctx_r1.bottomTab() === "rule" ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("border-color", ctx_r1.themeType() === "quick" ? "rgb(253 224 71 / 0.2)" : ctx_r1.themeType() === "event" ? "rgb(216 180 254 / 0.2)" : null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.bottomTabs());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showTrnTutorial() ? 12 : -1);
  }
}
var EventTrnComponent = class _EventTrnComponent {
  //** 服務注入 */
  appI18n = inject(AppI18nService);
  trn = inject(TrnCtrlService);
  session = inject(ClientSessionService);
  api = inject(AppInterfaceService);
  eventCenter = inject(EventCenterCtrlService);
  getBackLabel = this.appI18n.computed("BackToGame_Link", "Back to Game");
  /** 要顯示的賽事ID */
  path = input("");
  /** Top Tab Event 跟 History 切換 */
  topTab = signal("event");
  /** Top Tab 列表 */
  eventTabLabel = this.appI18n.computed("Event_Tab", "Event");
  historyTabLabel = this.appI18n.computed("History_Tab", "History");
  topTabs = [
    { id: "event", label: this.eventTabLabel() },
    { id: "history", label: this.historyTabLabel() }
  ];
  /** Bottom Tab Info, Ranking, Prizes, Rules 切換 */
  bottomTab = signal("info");
  /** Bottom Tab 列表 */
  bottomTabs = computed(() => this.detailTrn()?.type === "quick" ? this.quickBottomTabs : this.eventBottomTabs);
  /** 是否顯示詳細資訊 */
  showDetail = computed(() => this.detailTrn() !== null);
  /** 詳細資訊的賽事資料 */
  detailTrn = computed(() => {
    const trnId = this.path();
    if (!trnId)
      return null;
    return this.trn.trnList().find((t) => t.id === trnId) || null;
  });
  /** 主題，決定要顯示quick還是event的相關資訊 */
  themeType = computed(() => {
    const type = this.detailTrn()?.type;
    if (type === "quick")
      return "quick";
    return "event";
  });
  /** 是否顯示 TRN 教學 */
  showTrnTutorial = signal(false);
  /** 是否顯示 Event 教學 */
  showEventTutorial = signal(false);
  /** 是否顯示畫面 */
  onClose = output();
  /** 詳細資訊容器的引用 */
  detailContainer;
  infoTabLabel = this.appI18n.computed("Info_EventDetailTab", "Info");
  prizeTabLabel = this.appI18n.computed("Prizes_EventDetailTab", "Prize");
  ruleTabLabel = this.appI18n.computed("Rules_EventDetailTab", "Rules");
  rankingTabLabel = this.appI18n.computed("Ranking_EventDetailTab", "Ranking");
  quickBottomTabs = [
    { name: "info", icon: "setting", label: this.infoTabLabel() },
    { name: "prize", icon: "prizes", label: this.prizeTabLabel() },
    { name: "rule", icon: "view-columns", label: this.ruleTabLabel() }
  ];
  eventBottomTabs = [
    { name: "info", icon: "setting", label: this.infoTabLabel() },
    { name: "ranking", icon: "ranking", label: this.rankingTabLabel() },
    { name: "prize", icon: "prizes", label: this.prizeTabLabel() },
    { name: "rule", icon: "view-columns", label: this.ruleTabLabel() }
  ];
  constructor() {
    effect(() => {
      this.path();
      this.bottomTab.set("info");
    });
  }
  ngOnInit() {
    this.trn.updateTrnListIfNeeded();
  }
  resetDetailScroll() {
    if (this.detailContainer) {
      this.detailContainer.nativeElement.scrollTop = 0;
    }
  }
  showDetailInfo(trn) {
    this.eventCenter.open(`tournament/${trn?.id}`);
    this.resetDetailScroll();
  }
  static \u0275fac = function EventTrnComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventTrnComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventTrnComponent, selectors: [["event-trn"]], viewQuery: function EventTrnComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.detailContainer = _t.first);
    }
  }, inputs: { path: [1, "path"] }, outputs: { onClose: "onClose" }, decls: 12, vars: 9, consts: [["detailContainer", ""], [1, "relative", "bg-zinc-900", "justify-center", "h-full"], [1, "relative", "w-full", "h-30", "md:h-24", "pt-6", "bg-zinc-900"], [3, "tabChange", "tabs", "selectedTab"], [1, "relative", "md:absolute", "md:top-8", "flex", "gap-2", "ml-3", "mt-2", "items-center", "cursor-pointer", 3, "click"], [3, "accentColor", "size", "icon", "variant"], [1, "relative", "text-lg", "font-semibold"], [1, "relative", "w-full", "h-[calc(100%-7.5rem)]", "md:h-[calc(100%-6rem)]"], [1, "relative", "size-full", "overflow-auto"], [3, "clicked"], [1, "absolute", "inset-0", "bg-zinc-900", "overflow-auto"], [1, "relative", "max-w-2xl", "min-h-full", "mx-auto"], [3, "currentTrn"], [1, "sticky", "bottom-0", "left-0", "right-0"], [1, "flex", "justify-center", "bg-zinc-900", "border-t-2"], [1, "flex", "justify-center", "items-center", "space-x-6", "sm:space-x-12", "max-w-xs", "sm:max-w-none"], [1, "flex", "flex-col", "items-center", "cursor-pointer", "relative", "px-1", "sm:px-2", "py-1", "transition-all", "duration-200", "hover:scale-105", 3, "text-yellow-400", "text-purple-400", "text-zinc-400"], [1, "fixed", "inset-0", 3, "variant"], [3, "openTutorial", "currentTrn"], [1, "flex", "flex-col", "items-center", "cursor-pointer", "relative", "px-1", "sm:px-2", "py-1", "transition-all", "duration-200", "hover:scale-105", 3, "click"], [1, "size-6", "sm:size-8", "mb-1", 3, "name"], [1, "font-semibold", "text-md", "sm:text-md"], [1, "h-[0.1rem]", "w-full", "absolute", "bottom-0", "left-0", "rounded-t", 3, "bg-yellow-400", "bg-purple-400"], [1, "h-[0.1rem]", "w-full", "absolute", "bottom-0", "left-0", "rounded-t"], [1, "fixed", "inset-0", 3, "close", "variant"]], template: function EventTrnComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "ap-ui-tab-group", 3);
      \u0275\u0275listener("tabChange", function EventTrnComponent_Template_ap_ui_tab_group_tabChange_2_listener($event) {
        return ctx.topTab.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 4);
      \u0275\u0275listener("click", function EventTrnComponent_Template_div_click_3_listener() {
        return ctx.onClose.emit();
      });
      \u0275\u0275element(4, "ap-button", 5);
      \u0275\u0275elementStart(5, "div", 6);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8);
      \u0275\u0275conditionalCreate(9, EventTrnComponent_Conditional_9_Template, 1, 0, "event-trn-list")(10, EventTrnComponent_Conditional_10_Template, 1, 0, "event-trn-history");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, EventTrnComponent_Conditional_11_Template, 13, 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("tabs", ctx.topTabs)("selectedTab", ctx.topTab());
      \u0275\u0275advance(2);
      \u0275\u0275property("accentColor", "white")("size", "small")("icon", "chevron-left")("variant", "content-rounded");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getBackLabel());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.topTab() === "event" ? 9 : ctx.topTab() === "history" ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showDetail() ? 11 : -1);
    }
  }, dependencies: [EventTrnListComponent, EventTrnHistoryComponent, EventTrnInfoComponent, ApUiTabGroupComponent, ApIconComponent, EventTrnRulesComponent, EventTrnRankingComponent, EventTrnPrizeComponent, ApButtonComponent, EventTrnTutorialComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=event-trn.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventTrnComponent, [{
    type: Component,
    args: [{ selector: "event-trn", imports: [EventTrnListComponent, EventTrnHistoryComponent, EventTrnInfoComponent, ApUiTabGroupComponent, ApIconComponent, EventTrnRulesComponent, EventTrnRankingComponent, EventTrnPrizeComponent, ApButtonComponent, EventTrnTutorialComponent], template: `<div class="relative bg-zinc-900 justify-center h-full">
  <!-- Tab Section -->
  <div class="relative w-full h-30 md:h-24 pt-6 bg-zinc-900">
    <ap-ui-tab-group
      [tabs]="topTabs"
      [selectedTab]="topTab()"
      (tabChange)="topTab.set($event)"
    />
    <!--Back to Game-->
    <div
      class="relative md:absolute md:top-8 flex gap-2 ml-3 mt-2 items-center cursor-pointer"
      (click)="onClose.emit()"
    >
      <ap-button
        [accentColor]="'white'"
        [size]="'small'"
        [icon]="'chevron-left'"
        [variant]="'content-rounded'"
      />

      <div class="relative text-lg font-semibold">{{ getBackLabel() }}</div>
    </div>
  </div>
  <!-- Content and Back to Game Section -->
  <div class="relative w-full h-[calc(100%-7.5rem)] md:h-[calc(100%-6rem)]">
    <!-- Content Section -->
    <div class="relative size-full overflow-auto">
      @if (topTab() === "event") {
        <event-trn-list (clicked)="showDetailInfo($event)" />
      } @else if (topTab() === "history") {
        <event-trn-history />
      }
    </div>
  </div>
  <!-- Detail Overlay -->
  @if (showDetail()) {
    <div #detailContainer class="absolute inset-0 bg-zinc-900 overflow-auto">
      <div class="relative max-w-2xl min-h-full mx-auto">
        @if (bottomTab() === "info") {
          <event-trn-info
            [currentTrn]="detailTrn()"
            (openTutorial)="showTrnTutorial.set(true)"
          />
        } @else if (bottomTab() === "ranking") {
          <event-trn-ranking [currentTrn]="detailTrn()" />
        } @else if (bottomTab() === "prize") {
          <event-trn-prize [currentTrn]="detailTrn()" />
        } @else if (bottomTab() === "rule") {
          <event-trn-rules [currentTrn]="detailTrn()" />
        }
      </div>
      <!-- Bottom Tab Navigation -->
      <div class="sticky bottom-0 left-0 right-0">
        <div
          class="flex justify-center bg-zinc-900 border-t-2"
          [style.border-color]="
            themeType() === 'quick'
              ? 'rgb(253 224 71 / 0.2)'
              : themeType() === 'event'
                ? 'rgb(216 180 254 / 0.2)'
                : null
          "
        >
          <div
            class="flex justify-center items-center space-x-6 sm:space-x-12 max-w-xs sm:max-w-none"
          >
            @for (tab of bottomTabs(); track tab.name) {
              <div
                class="flex flex-col items-center cursor-pointer relative px-1 sm:px-2 py-1 transition-all duration-200 hover:scale-105"
                [class.text-yellow-400]="
                  bottomTab() === tab.name && themeType() === 'quick'
                "
                [class.text-purple-400]="
                  bottomTab() === tab.name && themeType() === 'event'
                "
                [class.text-zinc-400]="bottomTab() !== tab.name"
                (click)="bottomTab.set(tab.name); resetDetailScroll()"
              >
                <ap-icon
                  [name]="tab.icon"
                  class="size-6 sm:size-8 mb-1"
                ></ap-icon>
                <div class="font-semibold text-md sm:text-md">
                  {{ tab.label }}
                </div>
                @if (bottomTab() === tab.name) {
                  <div
                    class="h-[0.1rem] w-full absolute bottom-0 left-0 rounded-t"
                    [class.bg-yellow-400]="themeType() === 'quick'"
                    [class.bg-purple-400]="themeType() === 'event'"
                  ></div>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>

    @if (showTrnTutorial()) {
      <event-trn-tutorial
        [variant]="themeType()"
        class="fixed inset-0"
        (close)="showTrnTutorial.set(false)"
      />
    }
  }
</div>
`, styles: ["/* src/app/pages/event-trn/event-trn.component.css */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=event-trn.component.css.map */\n"] }]
  }], () => [], { detailContainer: [{
    type: ViewChild,
    args: ["detailContainer", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventTrnComponent, { className: "EventTrnComponent", filePath: "src/app/pages/event-trn/event-trn.component.ts", lineNumber: 28 });
})();

// src/app/pages/event-leader-board-banner/event-leader-board-banner.data.ts
var offlineleaderBoardItems = signal([
  {
    rank: "1",
    game: "Squid Game 2: Mukunghwa",
    gameId: "10076",
    time: 1714521600,
    multiplier: 2e4,
    multiplierFromServer: 2e8,
    currencyCode: "JPY",
    currencySymbol: "\xA5",
    prize: 4e3,
    prizeForSort: 4e3,
    spin: 1500,
    ticketNo: "TKT-DEMO-0001",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "2",
    game: "Squid Game 2: Mukunghwa",
    gameId: "10076",
    time: 1714521600,
    multiplier: 1e4,
    multiplierFromServer: 1e8,
    currencyCode: "JPY",
    currencySymbol: "\xA5",
    prize: 2e3,
    prizeForSort: 2e3,
    spin: 1300,
    ticketNo: "TKT-DEMO-0002",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "3",
    game: "Dragon's Lair Game",
    gameId: "10077",
    time: 1714521600,
    multiplier: 400,
    multiplierFromServer: 4e6,
    currencyCode: "USD",
    currencySymbol: "$",
    prize: 1300,
    prizeForSort: 1300,
    spin: 1e3,
    ticketNo: "TKT-DEMO-0003",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "4",
    game: "Golden Spin Game",
    gameId: "10078",
    time: 1714521600,
    multiplier: 302,
    multiplierFromServer: 302e4,
    currencyCode: "MYR",
    currencySymbol: "RM",
    prize: 1200,
    prizeForSort: 1200,
    spin: 8e3,
    ticketNo: "TKT-DEMO-0004",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "5",
    game: "Mystic Quest Game",
    gameId: "10079",
    time: 1714521600,
    multiplier: 295,
    multiplierFromServer: 295e4,
    currencyCode: "AUD",
    currencySymbol: "A$",
    prize: 450,
    prizeForSort: 450,
    spin: 7e3,
    ticketNo: "TKT-DEMO-0005",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "6",
    game: "Dragon's Lair Game",
    gameId: "10077",
    time: 1714521600,
    multiplier: 285,
    multiplierFromServer: 285e4,
    currencyCode: "QAR",
    currencySymbol: "QR",
    prize: 300,
    prizeForSort: 300,
    spin: 6500,
    ticketNo: "TKT-DEMO-0006",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "7",
    game: "Golden Spin Game",
    gameId: "10078",
    time: 1714521600,
    multiplier: 240,
    multiplierFromServer: 24e5,
    currencyCode: "USD",
    currencySymbol: "$",
    prize: 120,
    prizeForSort: 120,
    spin: 5e3,
    ticketNo: "TKT-DEMO-0007",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "8",
    game: "Mystic Quest Game",
    gameId: "10079",
    time: 1714521600,
    multiplier: 225,
    multiplierFromServer: 225e4,
    currencyCode: "MYR",
    currencySymbol: "RM",
    prize: 110,
    prizeForSort: 110,
    spin: 4e3,
    ticketNo: "TKT-DEMO-0008",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "9",
    game: "Dragon's Lair Game",
    gameId: "10077",
    time: 1714521600,
    multiplier: 205,
    multiplierFromServer: 205e4,
    currencyCode: "USD",
    currencySymbol: "$",
    prize: 300,
    prizeForSort: 300,
    spin: 3e3,
    ticketNo: "TKT-DEMO-0009",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "10",
    game: "Golden Spin Game",
    gameId: "10078",
    time: 1714521600,
    multiplier: 240,
    multiplierFromServer: 24e5,
    currencyCode: "MYR",
    currencySymbol: "RM",
    prize: 20,
    prizeForSort: 20,
    spin: 2500,
    ticketNo: "TKT-DEMO-0010",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "11",
    game: "Golden Spin Game",
    gameId: "10079",
    time: 1714521600,
    multiplier: 220,
    multiplierFromServer: 22e5,
    currencyCode: "MYR",
    currencySymbol: "RM",
    prize: 21,
    prizeForSort: 21,
    spin: 2600,
    ticketNo: "TKT-DEMO-0011",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "12",
    game: "Mystic Quest Game",
    gameId: "10080",
    time: 1714521600,
    multiplier: 210,
    multiplierFromServer: 21e5,
    currencyCode: "USD",
    currencySymbol: "$",
    prize: 19,
    prizeForSort: 19,
    spin: 2e3,
    ticketNo: "TKT-DEMO-0012",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "13",
    game: "Dragon's Lair Game",
    gameId: "10077",
    time: 1714521600,
    multiplier: 205,
    multiplierFromServer: 205e4,
    currencyCode: "USD",
    currencySymbol: "$",
    prize: 18,
    prizeForSort: 18,
    spin: 1500,
    ticketNo: "TKT-DEMO-0013",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  },
  {
    rank: "14",
    game: "Mystic Quest Game",
    gameId: "10080",
    time: 1714521600,
    multiplier: 200,
    multiplierFromServer: 2e6,
    currencyCode: "USD",
    currencySymbol: "$",
    prize: 17,
    prizeForSort: 17,
    spin: 1e3,
    ticketNo: "TKT-DEMO-0014",
    platformCode: "demo",
    image: "assets/images/tournament/event-race/banner_default.png"
  }
]);

// src/app/pages/event-leader-board-banner/event-leader-board-banner.component.ts
var _c04 = ["listContainer"];
var _c12 = (a0) => ({ customCurrencySymbol: a0, nonBreakingSpace: true });
var _c22 = (a0) => ({ customCurrencySymbol: a0, nonBreakingSpace: true, addSpace: false });
var _c32 = (a0) => ({ customCurrencySymbol: a0, addSpace: false });
function EventLeaderBoardBannerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 41);
    \u0275\u0275element(2, "ap-icon", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 43);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "appI18n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "NoData_Text", "No ranking available yet."), " ");
  }
}
function EventLeaderBoardBannerComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function EventLeaderBoardBannerComponent_Conditional_54_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "h6", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "appI18n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "Spin_Info", "Spin means the total number of spins played during the event. The more you spin, the higher your chances of winning!"), " ");
  }
}
function EventLeaderBoardBannerComponent_For_68_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-badge-first", 50);
  }
}
function EventLeaderBoardBannerComponent_For_68_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-badge-second", 50);
  }
}
function EventLeaderBoardBannerComponent_For_68_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-badge-third", 50);
  }
}
function EventLeaderBoardBannerComponent_For_68_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", item_r6.sortedIndex, " ");
  }
}
function EventLeaderBoardBannerComponent_For_68_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "moneyText");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r7 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ref_r7.prize, \u0275\u0275pureFunction1(4, _c12, ref_r7.currencySymbol)));
  }
}
function EventLeaderBoardBannerComponent_For_68_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "moneyText");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r4.isPrizeLong(item_r6.prize) ? "text-sm" : "text-base");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, item_r6.prize, \u0275\u0275pureFunction1(5, _c22, item_r6.currencySymbol)));
  }
}
function EventLeaderBoardBannerComponent_For_68_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "moneyText");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r4.isPrizeLong(item_r6.prize) ? "text-xs" : "text-sm");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, item_r6.prize, \u0275\u0275pureFunction1(5, _c32, item_r6.currencySymbol)), " ");
  }
}
function EventLeaderBoardBannerComponent_For_68_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function EventLeaderBoardBannerComponent_For_68_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onReplayClick(item_r6));
    });
    \u0275\u0275element(1, "ap-icon", 70);
    \u0275\u0275elementEnd();
  }
}
function EventLeaderBoardBannerComponent_For_68_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 71);
    \u0275\u0275listener("mouseenter", function EventLeaderBoardBannerComponent_For_68_Conditional_29_Template_tr_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r9);
      const $index_r4 = \u0275\u0275nextContext().$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.setHoveredItemIndex($index_r4));
    })("mouseleave", function EventLeaderBoardBannerComponent_For_68_Conditional_29_Template_tr_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.setHoveredItemIndex(null));
    });
    \u0275\u0275elementStart(1, "td", 72)(2, "button", 73);
    \u0275\u0275listener("click", function EventLeaderBoardBannerComponent_For_68_Conditional_29_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onReplayClick(item_r6));
    });
    \u0275\u0275element(3, "ap-icon", 74);
    \u0275\u0275elementStart(4, "h5", 75);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const $index_r4 = \u0275\u0275nextContext().$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-zinc-800", $index_r4 % 2 === 0)("bg-zinc-900", $index_r4 % 2 !== 0)("leaderboard-item-hovered", ctx_r4.hoveredItemIndex() === $index_r4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r4.replayCtaLabel(), " ");
  }
}
function EventLeaderBoardBannerComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 46);
    \u0275\u0275listener("mouseenter", function EventLeaderBoardBannerComponent_For_68_Template_tr_mouseenter_0_listener() {
      const $index_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.setHoveredItemIndex($index_r4));
    })("mouseleave", function EventLeaderBoardBannerComponent_For_68_Template_tr_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.setHoveredItemIndex(null));
    });
    \u0275\u0275elementStart(1, "td", 47)(2, "div", 48)(3, "div", 49);
    \u0275\u0275conditionalCreate(4, EventLeaderBoardBannerComponent_For_68_Conditional_4_Template, 1, 0, "ap-icon-badge-first", 50)(5, EventLeaderBoardBannerComponent_For_68_Conditional_5_Template, 1, 0, "ap-icon-badge-second", 50)(6, EventLeaderBoardBannerComponent_For_68_Conditional_6_Template, 1, 0, "ap-icon-badge-third", 50)(7, EventLeaderBoardBannerComponent_For_68_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 51)(9, "div", 52)(10, "div", 53);
    \u0275\u0275element(11, "img", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 55)(13, "div", 56);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "time", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "td", 58);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 59)(21, "div", 60);
    \u0275\u0275conditionalCreate(22, EventLeaderBoardBannerComponent_For_68_Conditional_22_Template, 3, 6, "span", 61);
    \u0275\u0275conditionalCreate(23, EventLeaderBoardBannerComponent_For_68_Conditional_23_Template, 4, 7, "div", 62)(24, EventLeaderBoardBannerComponent_For_68_Conditional_24_Template, 3, 7, "div", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 64);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 65);
    \u0275\u0275conditionalCreate(28, EventLeaderBoardBannerComponent_For_68_Conditional_28_Template, 2, 0, "button", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, EventLeaderBoardBannerComponent_For_68_Conditional_29_Template, 6, 7, "tr", 67);
  }
  if (rf & 2) {
    let tmp_21_0;
    let tmp_24_0;
    let tmp_25_0;
    const item_r6 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(" relative fade-down " + ($index_r4 % 2 === 0 ? " bg-zinc-800" : " bg-zinc-900"));
    \u0275\u0275classProp("leaderboard-item-hovered", ctx_r4.hoveredItemIndex() === $index_r4);
    \u0275\u0275advance();
    \u0275\u0275attribute("rowspan", ctx_r4.canReplay(item_r6) && ctx_r4.isNarrow() ? 2 : 1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r6.sortedIndex === 1 ? 4 : item_r6.sortedIndex === 2 ? 5 : item_r6.sortedIndex === 3 ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("rowspan", ctx_r4.canReplay(item_r6) && ctx_r4.isNarrow() ? 2 : 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r6.image, \u0275\u0275sanitizeUrl)("alt", item_r6.game + " banner");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r6.game, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.getDateString(item_r6.time), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 17, item_r6.multiplier), "x ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_21_0 = ctx_r4.referencePrizeItem()) ? 22 : -1, tmp_21_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.isMobile() ? 23 : 24);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r6.spin, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r4.isOffline() || (((tmp_24_0 = ctx_r4.api.loginResult()) == null ? null : tmp_24_0.note == null ? null : tmp_24_0.note.leader_board) ?? 0) >= 2) && ctx_r4.checkGameReplaySupported(item_r6.gameId) ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r4.isOffline() || (((tmp_25_0 = ctx_r4.api.loginResult()) == null ? null : tmp_25_0.note == null ? null : tmp_25_0.note.leader_board) ?? 0) >= 2) && ctx_r4.checkGameReplaySupported(item_r6.gameId) ? 29 : -1);
  }
}
function EventLeaderBoardBannerComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-history-popup-replay", 76);
    \u0275\u0275listener("confirm", function EventLeaderBoardBannerComponent_Conditional_71_Template_ap_history_popup_replay_confirm_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onReplayConfirm());
    })("close", function EventLeaderBoardBannerComponent_Conditional_71_Template_ap_history_popup_replay_close_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onReplayCancel());
    });
    \u0275\u0275elementEnd();
  }
}
function EventLeaderBoardBannerComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "history-replay-viewer", 77);
    \u0275\u0275listener("copyLinkRequest", function EventLeaderBoardBannerComponent_Conditional_72_Template_history_replay_viewer_copyLinkRequest_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onCopyLinkRequest());
    })("close", function EventLeaderBoardBannerComponent_Conditional_72_Template_history_replay_viewer_close_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onReplayClose());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("isReplayPanel", true);
  }
}
var compareLeaderBoardItems = (a, b, sortType, sortDirection) => {
  const primaryCompare = (left, right) => sortDirection === "asc" ? left - right : right - left;
  const desc = (left, right) => right - left;
  const asc = (left, right) => left - right;
  let result = 0;
  if (sortType === "multiplier") {
    result = primaryCompare(a.multiplier, b.multiplier);
    if (result !== 0)
      return result;
    result = desc(a.prizeForSort, b.prizeForSort);
    if (result !== 0)
      return result;
    result = asc(a.spin, b.spin);
    if (result !== 0)
      return result;
    return desc(a.time, b.time);
  }
  if (sortType === "prize") {
    result = primaryCompare(a.prizeForSort, b.prizeForSort);
    if (result !== 0)
      return result;
    result = desc(a.multiplier, b.multiplier);
    if (result !== 0)
      return result;
    result = asc(a.spin, b.spin);
    if (result !== 0)
      return result;
    return desc(a.time, b.time);
  }
  result = primaryCompare(a.spin, b.spin);
  if (result !== 0)
    return result;
  result = desc(a.prizeForSort, b.prizeForSort);
  if (result !== 0)
    return result;
  result = desc(a.multiplier, b.multiplier);
  if (result !== 0)
    return result;
  return desc(a.time, b.time);
};
var EventLeaderBoardBannerComponent = class _EventLeaderBoardBannerComponent {
  user;
  leaderBoard;
  playerToggleTranslateYRem = "0.25rem";
  playerToggleCheckedTranslateXRem = "1.75rem";
  // ✅ 使用 inject() 在類別屬性中注入服務
  appI18n = inject(AppI18nService);
  logger = inject(LoggerService);
  replay = inject(HistoryReplayService);
  locale = inject(ClientSessionService).locale;
  session = inject(ClientSessionService);
  nav = inject(NavigatorShareService);
  api = inject(AppInterfaceService);
  replayViewerComponent;
  listContainer;
  spinInfoLabel = input("Spin means the total number of spins played during the event. The more you spin, the higher your chances of winning!");
  showInfoModal = signal(false);
  showReplayConfirm = signal(false);
  showReplayViewer = computed(() => this.replay.showReplayViewer());
  replayItem = signal(null);
  replayGameName = signal("");
  hoveredItemIndex = signal(null);
  accountID = computed(() => this.api.loginResult()?.note.uid || "");
  isMobile = computed(() => this.session.isMobile());
  isNarrow = computed(() => this.session.isNarrow());
  isOffline = computed(() => this.session.offline);
  // 使用 LeaderBoardService 的 currentItems Signal
  leaderBoardItems = computed(() => this.session.offline ? offlineleaderBoardItems() : this.leaderBoard.currentItems());
  // ✅ 使用 computed 創建響應式 tabNameMap
  tabNameMap = computed(() => ({
    "CURRENT GAMES": this.appI18n.instant("CurrentGames_LeaderBoard_Tab", "CURRENT GAMES"),
    "ALL GAMES": this.appI18n.instant("AllGames_LeaderBoard_Tab", "ALL GAMES")
  }));
  replayCtaLabel = computed(() => this.appI18n.instant("LeaderBoard_Replay_ButtonText", "Experience the win!"));
  // ✅ tabs 也改為 computed
  tabs = computed(() => [
    { id: "CURRENT GAMES", label: this.tabNameMap()["CURRENT GAMES"] },
    { id: "ALL GAMES", label: this.tabNameMap()["ALL GAMES"] }
  ]);
  // 標記是否已初始化
  hasInitialized = false;
  constructor(user, leaderBoard) {
    this.user = user;
    this.leaderBoard = leaderBoard;
    effect(() => {
      this.isAllPlayers();
      this.selectedTab();
      if (this.hasInitialized) {
        this.currentPage.set(1);
        this.sendLeaderBoardRequest();
      }
    });
    effect(() => {
      const totalPages = Math.max(1, Math.ceil(this.sortedLeaderBoardItems().length / this.itemsPerPage()));
      const page = this.currentPage();
      if (page < 1) {
        this.currentPage.set(1);
      } else if (page > totalPages) {
        this.currentPage.set(totalPages);
      }
    });
  }
  ngOnInit() {
    this.sendLeaderBoardRequest();
    this.hasInitialized = true;
  }
  getPlayerToggleTransform() {
    const translateX = this.isAllPlayers() ? this.playerToggleCheckedTranslateXRem : "0rem";
    return `translate(${translateX}, ${this.playerToggleTranslateYRem})`;
  }
  // 判斷 multiplier 是否過長以決定字體大小
  isMultiplierLong(multiplier) {
    if (multiplier === null || multiplier === void 0 || isNaN(multiplier)) {
      return false;
    }
    return Math.abs(Math.floor(multiplier)).toString().length > 6;
  }
  // 判斷 prize 是否過長以決定字體大小
  isPrizeLong(prize) {
    if (prize === null || prize === void 0 || isNaN(prize)) {
      return false;
    }
    return Math.abs(Math.floor(prize)).toString().length > 6;
  }
  prizeForRef(item) {
    return MoneyText.format(item.prize, { customCurrencySymbol: item.currencySymbol, nonBreakingSpace: true });
  }
  prizeForMobile(item) {
    return MoneyText.format(item.prize, { customCurrencySymbol: item.currencySymbol, nonBreakingSpace: true });
  }
  prizeDefault(item) {
    return MoneyText.format(item.prize, { customCurrencySymbol: item.currencySymbol });
  }
  selectedTab = signal("CURRENT GAMES");
  selectedView = signal("personal");
  selectedInfoTab = signal("multiplier");
  isAllPlayers = signal(true);
  sortDirection = signal("desc");
  sortType = signal("multiplier");
  currentPage = signal(1);
  itemsPerPage = signal(10);
  /**
   * 共用方法: 根據當前狀態發送排行榜請求
   */
  sendLeaderBoardRequest() {
    const userType = this.isAllPlayers() ? eLeaderUserType.AllUser : eLeaderUserType.SingleUser;
    const gameCode = this.selectedTab() === "CURRENT GAMES" ? this.session.gameId || "" : "";
    const language = this.session.language;
    const tag = genLeadboardCacheKey(userType, gameCode);
    this.leaderBoard.sendLeaderBoardList(tag, userType, gameCode, language);
  }
  /** 根據 second timestamp 取得日期字串 (不含時間) */
  getDateString(timestamp) {
    const date = new Date(timestamp * 1e3);
    return date.toLocaleDateString(this.locale);
  }
  onPageChanged(page) {
    this.currentPage.set(page);
    setTimeout(() => {
      this.listContainer?.nativeElement.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
  }
  resetToFirstPage() {
    this.currentPage.set(1);
    setTimeout(() => {
      this.listContainer?.nativeElement.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
  }
  onToggleClick() {
    const newState = !this.isAllPlayers();
    this.isAllPlayers.set(newState);
  }
  selectTab(buttonType) {
    this.selectedTab.set(buttonType);
  }
  onTabChange(tabId) {
    this.selectedInfoTab.set(tabId);
  }
  onMultiplierSortClick() {
    if (this.sortType() === "multiplier") {
      this.sortDirection.set(this.sortDirection() === "asc" ? "desc" : "asc");
    } else {
      this.sortType.set("multiplier");
      this.sortDirection.set("desc");
    }
    this.resetToFirstPage();
  }
  onPrizeSortClick() {
    if (this.sortType() === "prize") {
      this.sortDirection.set(this.sortDirection() === "asc" ? "desc" : "asc");
    } else {
      this.sortType.set("prize");
      this.sortDirection.set("desc");
    }
    this.resetToFirstPage();
  }
  onSpinSortClick() {
    if (this.sortType() === "spin") {
      this.sortDirection.set(this.sortDirection() === "asc" ? "desc" : "asc");
    } else {
      this.sortType.set("spin");
      this.sortDirection.set("asc");
    }
    this.resetToFirstPage();
  }
  getMultiplierSortIcon() {
    if (this.sortType() !== "multiplier")
      return "bar-3";
    return this.sortDirection() === "asc" ? "bars-arrow-up default" : "bars-arrow-down default";
  }
  getPrizeSortIcon() {
    if (this.sortType() !== "prize")
      return "bar-3";
    return this.sortDirection() === "asc" ? "bars-arrow-up default" : "bars-arrow-down default";
  }
  getSpinSortIcon() {
    if (this.sortType() !== "spin")
      return "bar-3";
    return this.sortDirection() === "asc" ? "bars-arrow-up default" : "bars-arrow-down default";
  }
  sortedLeaderBoardItems = computed(() => {
    const items = [...this.leaderBoardItems()];
    const direction = this.sortDirection();
    const sortType = this.sortType();
    const ret = items.sort((a, b) => compareLeaderBoardItems(a, b, sortType, direction));
    ret.forEach((item, index) => {
      if (sortType === "multiplier" || sortType === "prize") {
        item.sortedIndex = direction === "desc" ? index + 1 : ret.length - index;
      } else {
        item.sortedIndex = direction === "asc" ? index + 1 : ret.length - index;
      }
    });
    return ret;
  });
  paginationConfig = computed(() => {
    const totalItems = this.sortedLeaderBoardItems().length;
    const totalPages = Math.max(1, Math.ceil(totalItems / this.itemsPerPage()));
    return {
      currentPage: this.currentPage(),
      totalPages,
      showPages: 1
    };
  });
  paginatedItems = computed(() => {
    const allItems = this.sortedLeaderBoardItems();
    const totalPages = Math.max(1, Math.ceil(allItems.length / this.itemsPerPage()));
    const page = Math.min(this.currentPage(), totalPages);
    const perPage = this.itemsPerPage();
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return allItems.slice(startIndex, endIndex);
  });
  /** Item with the largest prize value; its text anchors the prize column width so all rows fit */
  referencePrizeItem = computed(() => {
    const items = this.sortedLeaderBoardItems();
    if (items.length === 0)
      return null;
    return items.reduce((max, item) => item.prize > max.prize ? item : max, items[0]);
  });
  /**
   * 检查指定的游戏 ID 是否支援 Replay
   * @param gameId 游戏 ID
   * @returns true 表示支援 Replay，false 表示不支援
   */
  checkGameReplaySupported(gameId) {
    return isHistoryReplaySupported(gameId);
  }
  canReplay(item) {
    return (this.isOffline() || (this.api.loginResult()?.note?.leader_board ?? 0) >= 2) && this.checkGameReplaySupported(item.gameId);
  }
  openInfoModal(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.showInfoModal.set(!this.showInfoModal());
  }
  closeshowInfoModal() {
    this.showInfoModal.set(false);
  }
  /**
   * 處理 Replay 確認請求
   */
  onReplayConfirm() {
    const item = this.replayItem();
    if (!item) {
      this.logger.error("Replay item is null");
      return;
    }
    this.showReplayConfirm.set(false);
    const platformName = item.platformCode || "default";
    let ticketNo = item.ticketNo;
    let gameId = item.gameId;
    const userType = this.isAllPlayers() ? eLeaderUserType.AllUser : eLeaderUserType.SingleUser;
    if (!ticketNo) {
      this.logger.error("Ticket number not found in item:", item);
      return;
    }
    try {
      const targetaccountID = userType === eLeaderUserType.AllUser ? "" : this.accountID();
      const subscription = this.replay.ticket$.subscribe((response) => {
        subscription.unsubscribe();
        this.logger.leaderboardLog("Received ShortURL from subscription:", response);
        if (response.HistoryDetailData) {
          const gameName = this.appI18n.instant(gameId, gameId);
          this.replayGameName.set(gameName);
          const isOldGame = useInGameUIlist.includes(gameId || "");
          let replayUrl;
          if (this.session.remoteHost) {
            const replayResult = sessionStorage.getItem(ApWebReplaySessionKey) ?? "";
            this.replay.setPendingPostSessionData({ [ApWebReplaySessionKey]: replayResult });
            replayUrl = `${this.session.remoteHost}?replayurl=0`;
          } else {
            replayUrl = `/${gameId}/index.html?replayurl=0`;
          }
          this.replay.openReplayViewer(replayUrl, isOldGame);
        }
      });
      const isCopyLink = userType === eLeaderUserType.AllUser ? false : true;
      const gameidforserver = userType === eLeaderUserType.AllUser ? "" : gameId;
      const mulforserver = userType === eLeaderUserType.AllUser ? null : item.multiplierFromServer || 0;
      this.replay.getTicketDetail(ticketNo, userType, gameidforserver, mulforserver);
    } catch (error) {
      this.logger.error("Failed to generate replay URL:", error);
    }
  }
  /**
   * 處理複製 Replay 連結請求
   */
  onCopyLinkRequest() {
    return __async(this, null, function* () {
      this.logger.leaderboardLog("Copy link request received");
      const item = this.replayItem();
      if (!item) {
        this.logger.error("No replay item selected");
        return;
      }
      try {
        const ticketNo = item.ticketNo || "";
        const subscription = this.replay.shortUrl$.subscribe((response) => {
          subscription.unsubscribe();
          this.logger.leaderboardLog("Received ShortURL from subscription for copy:", response);
          if (response.url) {
            this.nav.copyToClipboard(response.url).then(() => {
              this.logger.leaderboardLog("Replay URL copied to clipboard:", response.url);
              this.replayViewerComponent?.showCopyLinkToast();
            }).catch((err) => {
              this.logger.error("Failed to copy replay link:", err);
            });
          }
        });
        const usertype = this.isAllPlayers() ? eLeaderUserType.AllUser : eLeaderUserType.SingleUser;
        const gameid = this.replayItem()?.gameId || "";
        const multiplierFromServer = this.replayItem()?.multiplierFromServer || 0;
        this.replay.getShortUrl(ticketNo, usertype, gameid, multiplierFromServer);
      } catch (error) {
        this.logger.error("Failed to copy link:", error);
      }
    });
  }
  /**
   * 點擊 Replay 按鈕
   * @param item 排行榜項目
   */
  onReplayClick(item) {
    this.replayItem.set(item);
    this.showReplayConfirm.set(true);
  }
  setHoveredItemIndex(index) {
    this.hoveredItemIndex.set(index);
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
    this.showReplayConfirm.set(false);
    this.replayItem.set(null);
    this.replay.closeReplayViewer();
  }
  static \u0275fac = function EventLeaderBoardBannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventLeaderBoardBannerComponent)(\u0275\u0275directiveInject(PlayerWalletService), \u0275\u0275directiveInject(LeaderBoardService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventLeaderBoardBannerComponent, selectors: [["event-leader-board-banner"]], viewQuery: function EventLeaderBoardBannerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(HistoryReplayViewerComponent, 5);
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.replayViewerComponent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listContainer = _t.first);
    }
  }, inputs: { spinInfoLabel: [1, "spinInfoLabel"] }, decls: 73, vars: 54, consts: [["listContainer", ""], [1, "page-container", 3, "click"], [1, "sticky", "z-sticky"], [3, "tabChange", "tabs", "selectedTab"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-center", "gap-8", "sm:gap-12", "w-full", "sm:mt-4"], [1, "flex", "justify-center", "w-full", "sm:w-auto", "p-2"], [1, "flex", "items-center", "gap-3", "cursor-pointer", 3, "click"], [1, "hover:text-yellow-300", "color-transition"], [1, "relative", "h-7", "w-14", "rounded-full", "color-transition", "flex-shrink-0", "bg-yellow-500", "hover:bg-yellow-400"], [1, "absolute", "left-1", "h-5", "w-5", "rounded-full", "border", "border-amber-500", "bg-white", "shadow", "color-transition"], [1, "color-transition", "cursor-pointer"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "text-zinc-500", "pointer-events-none", "sm:mb-14", "mb-10", "fade-down"], [1, "relative", "bg-zinc-900", "gap-1", "pl-1", "pr-3", "sm:px-20", "mt-6", "flex-1", "min-h-0"], [1, "leaderboard-table-shell"], [1, "leaderboard-table", "text-zinc-100"], [1, "leaderboard-col-rank"], [1, "leaderboard-col-game"], [1, "leaderboard-col-multiplier"], [1, "leaderboard-col-prize"], [1, "leaderboard-col-spin"], [1, "leaderboard-col-replay"], [1, "z-dropdown", "bg-zinc-900", "h-10"], [1, "text-yellow-300", "h-10", "uppercase", "bg-yellow-300/10"], [1, "text-center", "min-w-[1rem]", "whitespace-nowrap", "px-2"], [1, "text-left", "px-2"], [1, "w-full", "min-h-8", "flex", "items-center", "gap-1", "hover:text-yellow-100", "cursor-pointer", "transition-colors", "justify-center", 3, "click"], [1, "flex", "items-center", "gap-1", "break-keep", "uppercase"], [1, "size-4", 3, "name"], [1, "w-full", "min-h-8", "flex", "items-center", "justify-center", 3, "click"], [1, "flex", "items-center"], [1, "flex", "hover:text-yellow-100", "cursor-pointer", "color-transition", "items-center", "uppercase"], [1, "size-4", "ml-1", 3, "name"], [1, "relative", "inline-flex", "items-center"], [1, "size-4", "text-zinc-400", "hover:text-white", "cursor-pointer", "color-transition", "mr-1", 3, "click", "name"], [1, "absolute", "right-0", "top-full", "z-popover", "w-40", "mr-2", "sm:mr-0", "mt-2", "rounded-lg", "bg-zinc-900", "p-2", "shadow-md", "fade-out", "border-info"], [1, "hidden", "sm:table-cell", "min-w-[3.5rem]"], [1, "leaderboard-scroll-body"], [1, "relative", "shrink-0", "py-2"], [3, "pageChanged", "variant", "config"], [1, "absolute", "inset-0", "z-overlay"], [3, "isReplayPanel"], [1, "flex", "flex-col", "items-center"], ["name", "ranking default", 1, "image-icon"], [1, "italic"], [1, "absolute", "right-0", "top-full", "z-popover", "w-40", "mr-2", "sm:mr-0", "mt-2", "rounded-lg", "bg-zinc-900", "p-2", "shadow-md", "fade-out", "border-info", 3, "click"], [1, "text-left", "text-zinc-300"], [1, "leaderboard-item-row", 3, "mouseenter", "mouseleave"], [1, "text-center", "text-white", "align-center"], [1, "flex", "flex-col", "items-center", "justify-center", "py-1"], [1, "flex", "items-center", "justify-center"], [1, "sm:size-9", "size-8"], [1, "py-2", "text-left", "align-top"], [1, "flex", "flex-col", "sm:flex-row", "relative", "items-center", "sm:items-center", "gap-2"], [1, "w-24", "h-16", "sm:w-22", "sm:h-16", "border-banner", "rounded", "shrink-0", "overflow-hidden"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "flex", "flex-col", "items-center", "sm:items-start"], [1, "text-yellow-200", "line-clamp-2", "hidden", "sm:block"], [1, "sm:text-left", "text-center", "text-zinc-400"], [1, "px-1", "sm:px-2", "text-center", "break-all", "align-center"], [1, "px-1", "sm:px-2", "text-center", "align-middle"], [1, "relative", "justify-center", "items-center"], ["aria-hidden", "true", 1, "invisible", "break-all", "select-none", "pointer-events-none", "hidden"], [1, "relative", "w-full", "text-center", "flex", "flex-col", "items-center", "justify-center", 3, "ngClass"], [1, "relative", "w-full", "text-center", "items-center", "justify-center", 3, "ngClass"], [1, "text-center", "break-all", "align-middle"], [1, "hidden", "sm:table-cell", "text-center", "min-w-[3.5rem]", "pr-2"], [1, "inline-flex", "items-start", "cursor-pointer", "text-yellow-500", "hover:text-yellow-400"], [1, "sm:hidden", "leaderboard-item-row", 3, "bg-zinc-800", "bg-zinc-900", "leaderboard-item-hovered"], [1, "break-all"], [1, "inline-flex", "items-start", "cursor-pointer", "text-yellow-500", "hover:text-yellow-400", 3, "click"], ["name", "play-circle", 1, "size-8"], [1, "sm:hidden", "leaderboard-item-row", 3, "mouseenter", "mouseleave"], ["colspan", "3", 1, "pb-2", "text-center"], [1, "inline-flex", "items-start", "gap-1", "border-underline-yellow", "pb-1", "text-yellow-500", "cursor-pointer", 3, "click"], ["name", "play-circle", 1, "size-4"], [1, "italic", "leading-none"], [1, "absolute", "inset-0", "z-overlay", 3, "confirm", "close"], [3, "copyLinkRequest", "close", "isReplayPanel"]], template: function EventLeaderBoardBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function EventLeaderBoardBannerComponent_Template_div_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeshowInfoModal());
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "ap-ui-tab-group", 3);
      \u0275\u0275listener("tabChange", function EventLeaderBoardBannerComponent_Template_ap_ui_tab_group_tabChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectTab($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "button", 6);
      \u0275\u0275listener("click", function EventLeaderBoardBannerComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onToggleClick());
      });
      \u0275\u0275elementStart(6, "h4", 7);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275element(10, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h4", 10);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "appI18n");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(14, EventLeaderBoardBannerComponent_Conditional_14_Template, 6, 4, "div", 11);
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "table", 14)(18, "colgroup");
      \u0275\u0275element(19, "col", 15)(20, "col", 16)(21, "col", 17)(22, "col", 18)(23, "col", 19)(24, "col", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "thead", 21)(26, "tr", 22)(27, "th", 23);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 24);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th")(34, "button", 25);
      \u0275\u0275listener("click", function EventLeaderBoardBannerComponent_Template_button_click_34_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMultiplierSortClick());
      });
      \u0275\u0275elementStart(35, "div", 26);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "ap-icon", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "th")(40, "button", 25);
      \u0275\u0275listener("click", function EventLeaderBoardBannerComponent_Template_button_click_40_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPrizeSortClick());
      });
      \u0275\u0275elementStart(41, "div", 26);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "ap-icon", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "th")(46, "button", 28);
      \u0275\u0275listener("click", function EventLeaderBoardBannerComponent_Template_button_click_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSpinSortClick());
      });
      \u0275\u0275elementStart(47, "div", 29)(48, "div", 30);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "appI18n");
      \u0275\u0275element(51, "ap-icon", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 32)(53, "ap-icon", 33);
      \u0275\u0275listener("click", function EventLeaderBoardBannerComponent_Template_ap_icon_click_53_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openInfoModal($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(54, EventLeaderBoardBannerComponent_Conditional_54_Template, 4, 4, "div", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(55, "th", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 36, 0)(58, "table", 14)(59, "colgroup");
      \u0275\u0275element(60, "col", 15)(61, "col", 16)(62, "col", 17)(63, "col", 18)(64, "col", 19)(65, "col", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "tbody");
      \u0275\u0275repeaterCreate(67, EventLeaderBoardBannerComponent_For_68_Template, 30, 19, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(69, "div", 37)(70, "ap-ui-pagination", 38);
      \u0275\u0275listener("pageChanged", function EventLeaderBoardBannerComponent_Template_ap_ui_pagination_pageChanged_70_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChanged($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(71, EventLeaderBoardBannerComponent_Conditional_71_Template, 1, 0, "ap-history-popup-replay", 39);
      \u0275\u0275conditionalCreate(72, EventLeaderBoardBannerComponent_Conditional_72_Template, 1, 1, "history-replay-viewer", 40);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("tabs", ctx.tabs())("selectedTab", ctx.selectedTab());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("text-yellow-400", !ctx.isAllPlayers())("text-zinc-500", ctx.isAllPlayers());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 33, "Personal_Toggle", "PERSONAL"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("transform", ctx.getPlayerToggleTransform());
      \u0275\u0275advance();
      \u0275\u0275classProp("text-yellow-400", ctx.isAllPlayers())("text-zinc-500", !ctx.isAllPlayers());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 36, "AllPlayers_Toggle", "ALL PLAYERS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.leaderBoardItems().length === 0 ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", ctx.leaderBoardItems().length === 0);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 39, "Ranking_ColumnText", "#"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 42, "GameName_ColumnText", "GAME"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 45, "Multiplier_ColumnText", "MULT."), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.getMultiplierSortIcon());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(43, 48, "Prize_ColumnText", "PRIZE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.getPrizeSortIcon());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(50, 51, "Spin_ColumnText", "SPIN"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.getSpinSortIcon());
      \u0275\u0275advance(2);
      \u0275\u0275property("name", "exclamation-circle");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showInfoModal() ? 54 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.paginatedItems());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("hidden", ctx.leaderBoardItems().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("variant", "quick")("config", ctx.paginationConfig());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showReplayConfirm() ? 71 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showReplayViewer() ? 72 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    DecimalPipe,
    ApUiTabGroupComponent,
    ApIconComponent,
    ApUiPaginationComponent,
    AppI18nPipe,
    HistoryReplayViewerComponent,
    ApHistoryPopupReplayComponent,
    MoneyTextPipe,
    ApIconBadgeFirstComponent,
    ApIconBadgeSecondComponent,
    ApIconBadgeThirdComponent
  ], styles: ["\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(253, 224, 71, 0.1), rgba(253, 224, 71, 0.1)) #18181b;\n  border-bottom: 1px solid #52525b;\n}\n.leaderboard-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #52525b;\n}\n.leaderboard-item-row[_ngcontent-%COMP%] {\n  transition: background-color 200ms;\n}\n.leaderboard-item-row[_ngcontent-%COMP%]:hover, \n.leaderboard-item-hovered[_ngcontent-%COMP%] {\n  background-color: rgb(82 82 91 / 0.5);\n}\n.leaderboard-table-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  overflow: hidden;\n}\n.leaderboard-scroll-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-gutter: stable;\n}\n.leaderboard-table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.leaderboard-col-rank[_ngcontent-%COMP%] {\n  width: 10%;\n}\n.leaderboard-col-game[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.leaderboard-col-multiplier[_ngcontent-%COMP%] {\n  width: 21%;\n}\n.leaderboard-col-prize[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.leaderboard-col-spin[_ngcontent-%COMP%] {\n  width: calc(25% - 3.5rem);\n}\n.leaderboard-col-replay[_ngcontent-%COMP%] {\n  width: 3.5rem;\n}\n@media (max-width: 639px) {\n  .leaderboard-col-replay[_ngcontent-%COMP%] {\n    width: 0;\n  }\n  .leaderboard-col-spin[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=event-leader-board-banner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventLeaderBoardBannerComponent, [{
    type: Component,
    args: [{ selector: "event-leader-board-banner", imports: [
      CommonModule,
      ApUiTabGroupComponent,
      ApIconComponent,
      ApUiPaginationComponent,
      AppI18nPipe,
      HistoryReplayViewerComponent,
      ApHistoryPopupReplayComponent,
      MoneyTextPipe,
      ApIconBadgeFirstComponent,
      ApIconBadgeSecondComponent,
      ApIconBadgeThirdComponent
    ], template: `<div class="page-container" (click)="closeshowInfoModal()">
  <div class="sticky z-sticky">
    <ap-ui-tab-group
      [tabs]="tabs()"
      [selectedTab]="selectedTab()"
      (tabChange)="selectTab($event)"
    />
  </div>
  <div
    class="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 w-full sm:mt-4"
  >
    <!-- Personal/all players toggle -->
    <div class="flex justify-center w-full sm:w-auto p-2">
      <button
        (click)="onToggleClick()"
        class="flex items-center gap-3 cursor-pointer"
      >
        <h4
          class="hover:text-yellow-300 color-transition"
          [class.text-yellow-400]="!isAllPlayers()"
          [class.text-zinc-500]="isAllPlayers()"
        >
          {{ "Personal_Toggle" | appI18n: "PERSONAL" }}
        </h4>
        <div
          class="relative h-7 w-14 rounded-full color-transition flex-shrink-0 bg-yellow-500 hover:bg-yellow-400"
        >
          <div
            class="absolute left-1 h-5 w-5 rounded-full border border-amber-500 bg-white shadow color-transition"
            [style.transform]="getPlayerToggleTransform()"
          ></div>
        </div>
        <h4
          class="color-transition cursor-pointer"
          [class.text-yellow-400]="isAllPlayers()"
          [class.text-zinc-500]="!isAllPlayers()"
        >
          {{ "AllPlayers_Toggle" | appI18n: "ALL PLAYERS" }}
        </h4>
      </button>
    </div>
  </div>

  @if (leaderBoardItems().length === 0) {
    <div
      class="flex flex-col items-center justify-center h-full text-zinc-500 pointer-events-none sm:mb-14 mb-10 fade-down"
    >
      <div class="flex flex-col items-center">
        <ap-icon name="ranking default" class="image-icon" />
      </div>

      <h2 class="italic">
        {{ "NoData_Text" | appI18n: "No ranking available yet." }}
      </h2>
    </div>
  }
  <div
    [class.hidden]="leaderBoardItems().length === 0"
    class="relative bg-zinc-900 gap-1 pl-1 pr-3 sm:px-20 mt-6 flex-1 min-h-0"
  >
    <div class="leaderboard-table-shell">
      <table class="leaderboard-table text-zinc-100">
        <colgroup>
          <col class="leaderboard-col-rank" />
          <col class="leaderboard-col-game" />
          <col class="leaderboard-col-multiplier" />
          <col class="leaderboard-col-prize" />
          <col class="leaderboard-col-spin" />
          <col class="leaderboard-col-replay" />
        </colgroup>
        <thead class="z-dropdown bg-zinc-900 h-10">
          <tr class="text-yellow-300 h-10 uppercase bg-yellow-300/10">
            <th class="text-center min-w-[1rem] whitespace-nowrap px-2">
              {{ "Ranking_ColumnText" | appI18n: "#" }}
            </th>
            <th class="text-left px-2">
              {{ "GameName_ColumnText" | appI18n: "GAME" }}
            </th>
            <th>
              <button
                (click)="onMultiplierSortClick()"
                class="w-full min-h-8 flex items-center gap-1 hover:text-yellow-100 cursor-pointer transition-colors justify-center"
              >
                <div class="flex items-center gap-1 break-keep uppercase">
                  {{ "Multiplier_ColumnText" | appI18n: "MULT." }}
                </div>

                <ap-icon [name]="getMultiplierSortIcon()" class="size-4" />
              </button>
            </th>
            <th>
              <button
                (click)="onPrizeSortClick()"
                class="w-full min-h-8 flex items-center gap-1 hover:text-yellow-100 cursor-pointer transition-colors justify-center"
              >
                <div class="flex items-center gap-1 break-keep uppercase">
                  {{ "Prize_ColumnText" | appI18n: "PRIZE" }}
                </div>
                <ap-icon [name]="getPrizeSortIcon()" class="size-4" />
              </button>
            </th>
            <th>
              <button
                (click)="onSpinSortClick()"
                class="w-full min-h-8 flex items-center justify-center"
              >
                <div class="flex items-center">
                  <div
                    class="flex hover:text-yellow-100 cursor-pointer color-transition items-center uppercase"
                  >
                    {{ "Spin_ColumnText" | appI18n: "SPIN" }}
                    <ap-icon [name]="getSpinSortIcon()" class="size-4 ml-1" />
                  </div>
                  <div class="relative inline-flex items-center">
                    <ap-icon
                      [name]="'exclamation-circle'"
                      class="size-4 text-zinc-400 hover:text-white cursor-pointer color-transition mr-1"
                      (click)="openInfoModal($event)"
                    />
                    @if (showInfoModal()) {
                      <div
                        class="absolute right-0 top-full z-popover w-40 mr-2 sm:mr-0 mt-2 rounded-lg bg-zinc-900 p-2 shadow-md fade-out border-info"
                        (click)="$event.stopPropagation()"
                      >
                        <h6 class="text-left text-zinc-300">
                          {{
                            "Spin_Info"
                              | appI18n
                                : "Spin means the total number of spins played during the event. The more you spin, the higher your chances of winning!"
                          }}
                        </h6>
                      </div>
                    }
                  </div>
                </div>
              </button>
            </th>
            <th class="hidden sm:table-cell min-w-[3.5rem]">
              <!--{{ "Replay_ColumnText" | appI18n: "REPLAY" }}-->
            </th>
          </tr>
        </thead>
      </table>

      <div #listContainer class="leaderboard-scroll-body">
        <table class="leaderboard-table text-zinc-100">
          <colgroup>
            <col class="leaderboard-col-rank" />
            <col class="leaderboard-col-game" />
            <col class="leaderboard-col-multiplier" />
            <col class="leaderboard-col-prize" />
            <col class="leaderboard-col-spin" />
            <col class="leaderboard-col-replay" />
          </colgroup>
          <tbody>
            @for (item of paginatedItems(); track $index) {
              <tr
                class="leaderboard-item-row"
                (mouseenter)="setHoveredItemIndex($index)"
                (mouseleave)="setHoveredItemIndex(null)"
                [class]="
                  ' relative fade-down ' +
                  ($index % 2 === 0 ? ' bg-zinc-800' : ' bg-zinc-900')
                "
                [class.leaderboard-item-hovered]="hoveredItemIndex() === $index"
              >
                <td
                  class="text-center text-white align-center"
                  [attr.rowspan]="
                    canReplay(item) && isNarrow() ? 2 : 1
                  "
                >
                  <div class="flex flex-col items-center justify-center py-1">
                    <div class="flex items-center justify-center">
                      @if (item.sortedIndex === 1) {
                        <ap-icon-badge-first class="sm:size-9 size-8" />
                      } @else if (item.sortedIndex === 2) {
                        <ap-icon-badge-second class="sm:size-9 size-8" />
                      } @else if (item.sortedIndex === 3) {
                        <ap-icon-badge-third class="sm:size-9 size-8" />
                      } @else {
                        {{ item.sortedIndex }}
                      }
                    </div>
                  </div>
                </td>
                <td
                  class="py-2 text-left align-top"
                  [attr.rowspan]="
                    canReplay(item) && isNarrow() ? 2 : 1
                  "
                >
                  <div
                    class="flex flex-col sm:flex-row relative items-center sm:items-center gap-2"
                  >
                    <div
                      class="w-24 h-16 sm:w-22 sm:h-16 border-banner rounded shrink-0 overflow-hidden"
                    >
                      <img
                        [src]="item.image"
                        [alt]="item.game + ' banner'"
                        class="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div class="flex flex-col items-center sm:items-start">
                      <div class="text-yellow-200 line-clamp-2 hidden sm:block">
                        {{ item.game }}
                      </div>
                      <time class="sm:text-left text-center text-zinc-400">
                        {{ getDateString(item.time) }}
                      </time>
                    </div>
                  </div>
                </td>

                <td class="px-1 sm:px-2 text-center break-all align-center">
                  {{ item.multiplier | number }}x
                </td>
                <td class="px-1 sm:px-2 text-center align-middle">
                  <!-- Width anchor: invisible span sized to rank-1 prize text keeps all rows the same width -->
                  <div class="relative justify-center items-center">
                    @if (referencePrizeItem(); as ref) {
                      <span
                        class="invisible break-all select-none pointer-events-none hidden"
                        aria-hidden="true"
                        >{{
                          ref.prize
                            | moneyText
                              : {
                                  customCurrencySymbol: ref.currencySymbol,
                                  nonBreakingSpace: true,
                                }
                        }}</span
                      >
                    }
                    @if (isMobile()) {
                      <div
                        class="relative w-full text-center flex flex-col items-center justify-center"
                        [ngClass]="
                          isPrizeLong(item.prize) ? 'text-sm' : 'text-base'
                        "
                      >
                        <span class="break-all">{{
                          item.prize
                            | moneyText
                              : {
                                customCurrencySymbol: item.currencySymbol,
                                nonBreakingSpace: true, addSpace: false
                              }
                        }}</span>
                      </div>
                    } @else {
                      <div
                        class="relative w-full text-center items-center justify-center"
                        [ngClass]="
                          isPrizeLong(item.prize) ? 'text-xs' : 'text-sm'
                        "
                      >
                        {{
                          item.prize
                            | moneyText
                              : {
                                  customCurrencySymbol: item.currencySymbol,
                                  addSpace: false,
                                }
                        }}
                      </div>
                    }
                  </div>
                </td>
                <td class="text-center break-all align-middle">
                  {{ item.spin }}
                </td>
                <td
                  class="hidden sm:table-cell text-center min-w-[3.5rem] pr-2"
                >
                  @if (
                    (isOffline() ||
                      (api.loginResult()?.note?.leader_board ?? 0) >= 2) &&
                    checkGameReplaySupported(item.gameId)
                  ) {
                    <button
                      class="inline-flex items-start cursor-pointer text-yellow-500 hover:text-yellow-400"
                      (click)="onReplayClick(item)"
                    >
                      <ap-icon name="play-circle" class="size-8" />
                    </button>
                  }
                </td>
              </tr>
              @if (
                (isOffline() ||
                  (api.loginResult()?.note?.leader_board ?? 0) >= 2) &&
                checkGameReplaySupported(item.gameId)
              ) {
                <tr
                  class="sm:hidden leaderboard-item-row"
                  (mouseenter)="setHoveredItemIndex($index)"
                  (mouseleave)="setHoveredItemIndex(null)"
                  [class.bg-zinc-800]="$index % 2 === 0"
                  [class.bg-zinc-900]="$index % 2 !== 0"
                  [class.leaderboard-item-hovered]="
                    hoveredItemIndex() === $index
                  "
                >
                  <td colspan="3" class="pb-2 text-center">
                    <button
                      class="inline-flex items-start gap-1 border-underline-yellow pb-1 text-yellow-500 cursor-pointer"
                      (click)="onReplayClick(item)"
                    >
                      <ap-icon name="play-circle" class="size-4" />
                      <h5 class="italic leading-none">
                        {{ replayCtaLabel() }}
                      </h5>
                    </button>
                  </td>
                </tr>
              }
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div
    [class.hidden]="leaderBoardItems().length === 0"
    class="relative shrink-0 py-2"
  >
    <ap-ui-pagination
      [variant]="'quick'"
      [config]="paginationConfig()"
      (pageChanged)="onPageChanged($event)"
    />
  </div>

  @if (showReplayConfirm()) {
    <ap-history-popup-replay
      class="absolute inset-0 z-overlay"
      (confirm)="onReplayConfirm()"
      (close)="onReplayCancel()"
    />
  }

  <!-- Replay Viewer Component -->
  @if (showReplayViewer()) {
    <history-replay-viewer
      [isReplayPanel]="true"
      (copyLinkRequest)="onCopyLinkRequest()"
      (close)="onReplayClose()"
    />
  }
</div>
`, styles: ["/* src/app/pages/event-leader-board-banner/event-leader-board-banner.component.css */\nthead th {\n  background: linear-gradient(rgba(253, 224, 71, 0.1), rgba(253, 224, 71, 0.1)) #18181b;\n  border-bottom: 1px solid #52525b;\n}\n.leaderboard-table tbody td {\n  border-bottom: 1px solid #52525b;\n}\n.leaderboard-item-row {\n  transition: background-color 200ms;\n}\n.leaderboard-item-row:hover,\n.leaderboard-item-hovered {\n  background-color: rgb(82 82 91 / 0.5);\n}\n.leaderboard-table-shell {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  overflow: hidden;\n}\n.leaderboard-scroll-body {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-gutter: stable;\n}\n.leaderboard-table {\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.leaderboard-col-rank {\n  width: 10%;\n}\n.leaderboard-col-game {\n  width: 30%;\n}\n.leaderboard-col-multiplier {\n  width: 21%;\n}\n.leaderboard-col-prize {\n  width: 20%;\n}\n.leaderboard-col-spin {\n  width: calc(25% - 3.5rem);\n}\n.leaderboard-col-replay {\n  width: 3.5rem;\n}\n@media (max-width: 639px) {\n  .leaderboard-col-replay {\n    width: 0;\n  }\n  .leaderboard-col-spin {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=event-leader-board-banner.component.css.map */\n"] }]
  }], () => [{ type: PlayerWalletService }, { type: LeaderBoardService }], { replayViewerComponent: [{
    type: ViewChild,
    args: [HistoryReplayViewerComponent]
  }], listContainer: [{
    type: ViewChild,
    args: ["listContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventLeaderBoardBannerComponent, { className: "EventLeaderBoardBannerComponent", filePath: "src/app/pages/event-leader-board-banner/event-leader-board-banner.component.ts", lineNumber: 103 });
})();

// src/app/pages/event-center/event-center.component.ts
function EventCenterComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "event-buy-feature", 4);
    \u0275\u0275listener("closeAll", function EventCenterComponent_Conditional_3_Template_event_buy_feature_closeAll_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClickClose());
    });
    \u0275\u0275elementEnd();
  }
}
function EventCenterComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-campaign-cards");
  }
}
function EventCenterComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-cashdrop");
  }
}
function EventCenterComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "event-trn", 5);
    \u0275\u0275listener("onClose", function EventCenterComponent_Conditional_6_Template_event_trn_onClose_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClickClose());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("path", ctx_r1.subPath());
  }
}
function EventCenterComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-promocode");
  }
}
function EventCenterComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-leader-board-banner");
  }
}
function EventCenterComponent_Conditional_9_Template(rf, ctx) {
}
var EventCenterComponent = class _EventCenterComponent {
  api = inject(AppInterfaceService);
  appI18n = inject(AppI18nService);
  logger = inject(LoggerService);
  loginCtrl = inject(ClientSessionService);
  eventCenter = inject(EventCenterCtrlService);
  trn = inject(TrnCtrlService);
  session = inject(ClientSessionService);
  campaignCtrl = inject(CampaignFacadeService);
  wallet = inject(PlayerWalletService);
  cashDrop = inject(CashDropService);
  gameIframe = inject(GameIframeCtrlService);
  isVisible = computed(() => this.eventCenter.isVisible());
  CampaignNoteType = signal("freeBonus");
  activedTab = computed(() => {
    return this.eventCenter.path();
  });
  showPromoCodeTab = computed(() => {
    return this.campaignCtrl.codeExchangeType() === PromoCodeExchangeTypeEnum.OpenExchange || this.campaignCtrl.codeExchangeType() === PromoCodeExchangeTypeEnum.OpenExchangeAndQR;
  });
  subPath = computed(() => {
    return this.eventCenter.subPath();
  });
  isBack = computed(() => this.subPath() !== "");
  activeTabLabel = computed(() => {
    const tab = this.tabs().find((t) => t.id === this.activedTab());
    return tab?.label ?? this.activedTab();
  });
  gameBreadcrumbLabel = this.appI18n.computed(this.loginCtrl.gameId ?? "", this.loginCtrl.gameId ?? "Game");
  trnLabel = this.appI18n.computed("Tournament_EventCenter_Tab", "Event Center");
  detailTrn = computed(() => {
    const id = this.subPath();
    if (!id)
      return null;
    return this.trn.trnList().find((t) => t.id === id) ?? null;
  });
  detailName = computed(() => {
    const tab = this.activedTab();
    const id = this.subPath();
    if (!id)
      return "";
    if (tab === "tournament")
      return this.detailTrn()?.name ?? id;
    if (tab === "campaign")
      return this.campaignCtrl.campaignGroupList().find((g) => g.id === id)?.title ?? id;
    return id;
  });
  buyFeatureTab = computed(() => ({ id: "buy-feature", label: this.appI18n.instant("BuyFeature_EventCenter_Tab", "Buy Feature"), icon: "shopping-cart", hasBadge: false }));
  trnTab = computed(() => ({ id: "tournament", label: this.appI18n.instant("Tournament_EventCenter_Tab", "Tournament"), icon: "trophy", hasBadge: false, disabled: this.trn.trnList().length === 0 }));
  campaignTab = computed(() => ({
    id: "campaign",
    label: this.appI18n.instant("Campaign_EventCenter_Tab", "Campaign"),
    icon: "gift",
    hasBadge: this.campaignCtrl.haveNewGroup()
  }));
  cashDropTab = computed(() => ({
    id: "cash-drop",
    label: this.appI18n.instant("Cashdrop_EventCenter_Tab", "Cash Drop"),
    icon: "two-coins",
    hasBadge: this.cashDrop.hasNew()
  }));
  promoCodeTab = computed(() => ({ id: "promo-code", label: this.appI18n.instant("Coupon_EventCenter_Tab", "Coupon"), icon: "ticket", hasBadge: false }));
  leaderBoardTab = computed(() => ({ id: "leader-board", label: this.appI18n.instant("LeaderBoard_EventCenter_Tab", "Leader Board"), icon: "ranking", hasBadge: false }));
  rewardSystemTab = computed(() => ({
    id: "reward-system",
    label: this.appI18n.instant("RewardSystem_EventCenter_Tab", "Reward System"),
    icon: "crown",
    hasBadge: this.gameIframe.rsNotification()
  }));
  tabs = computed(() => {
    const tabs = [];
    const isOffline = this.loginCtrl.offline;
    const note = this.api.loginResult()?.note;
    if (isOffline || !this.wallet.isBuyFeatureDisabled()) {
      tabs.push(this.buyFeatureTab());
    }
    ;
    if (isOffline || this.trn.showTab()) {
      tabs.push(this.trnTab());
    }
    if (isOffline || this.campaignCtrl.showTab()) {
      tabs.push(this.campaignTab());
    }
    if (isOffline || this.cashDrop.showTab()) {
      tabs.push(this.cashDropTab());
    }
    if (isOffline || this.showPromoCodeTab()) {
      tabs.push(this.promoCodeTab());
    }
    if (isOffline || Number(note?.leader_board ?? 0) > 0) {
      tabs.push(this.leaderBoardTab());
    }
    if (isOffline || (note?.rewardsystem ?? false)) {
      tabs.push(this.rewardSystemTab());
    }
    return tabs;
  });
  changeTab(tab) {
    if (tab === "reward-system") {
      this.openRewardSystem();
      return;
    }
    this.eventCenter.open(tab);
  }
  /**
   * 開啟獎勵系統
   * 1. 對 GameIframeCtrlService 送出 WebOpenRS, true 的 Message
   * 2. 關閉 event center UI
   */
  openRewardSystem() {
    this.gameIframe.send(createApWebMessage("WebOpenRS", { enabled: true }));
  }
  onClickBack() {
    this.eventCenter.back();
  }
  onClickClose() {
    this.eventCenter.close();
  }
  static \u0275fac = function EventCenterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventCenterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCenterComponent, selectors: [["event-center"]], decls: 10, vars: 7, consts: [[1, "fixed", "inset-0", 3, "close", "back", "header", "enableBack"], [3, "tabChange", "tabs", "justify", "selectedTab", "accentColor"], [1, "relative", "h-[calc(100%-3.5rem)]", "overflow-y-auto"], [3, "path"], [3, "closeAll"], [3, "onClose", "path"]], template: function EventCenterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ap-ui-frame-page", 0);
      \u0275\u0275listener("close", function EventCenterComponent_Template_ap_ui_frame_page_close_0_listener() {
        return ctx.onClickClose();
      })("back", function EventCenterComponent_Template_ap_ui_frame_page_back_0_listener() {
        return ctx.onClickBack();
      });
      \u0275\u0275elementStart(1, "ap-tab-menu-icon", 1);
      \u0275\u0275listener("tabChange", function EventCenterComponent_Template_ap_tab_menu_icon_tabChange_1_listener($event) {
        return ctx.changeTab($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275conditionalCreate(3, EventCenterComponent_Conditional_3_Template, 1, 0, "event-buy-feature")(4, EventCenterComponent_Conditional_4_Template, 1, 0, "event-campaign-cards")(5, EventCenterComponent_Conditional_5_Template, 1, 0, "event-cashdrop")(6, EventCenterComponent_Conditional_6_Template, 1, 1, "event-trn", 3)(7, EventCenterComponent_Conditional_7_Template, 1, 0, "event-promocode")(8, EventCenterComponent_Conditional_8_Template, 1, 0, "event-leader-board-banner")(9, EventCenterComponent_Conditional_9_Template, 0, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("header", ctx.activeTabLabel())("enableBack", ctx.isBack());
      \u0275\u0275advance();
      \u0275\u0275property("tabs", ctx.tabs())("justify", "center")("selectedTab", ctx.activedTab())("accentColor", "yellow");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activedTab() === "buy-feature" ? 3 : ctx.activedTab() === "campaign" ? 4 : ctx.activedTab() === "cash-drop" ? 5 : ctx.activedTab() === "tournament" ? 6 : ctx.activedTab() === "promo-code" ? 7 : ctx.activedTab() === "leader-board" ? 8 : ctx.activedTab() === "reward-system" ? 9 : -1);
    }
  }, dependencies: [
    ApUiFramePageComponent,
    EventBuyFeatureComponent,
    EventCashdropComponent,
    EventPromoCodeComponent,
    EventTrnComponent,
    ApTabMenuIconComponent,
    EventCampaignCardsComponent,
    EventLeaderBoardBannerComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.scrollbar-hide[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.scrollbar-hide[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tab-container[_ngcontent-%COMP%] {\n  scroll-snap-type: x proximity;\n  -webkit-overflow-scrolling: touch;\n}\n.tab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n}\n.grabbing[_ngcontent-%COMP%] {\n  cursor: grabbing !important;\n}\n/*# sourceMappingURL=event-center.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventCenterComponent, [{
    type: Component,
    args: [{ selector: "event-center", standalone: true, imports: [
      ApUiFramePageComponent,
      EventBuyFeatureComponent,
      EventCashdropComponent,
      EventPromoCodeComponent,
      EventTrnComponent,
      ApTabMenuIconComponent,
      EventCampaignCardsComponent,
      ApTabMenuIconComponent,
      EventLeaderBoardBannerComponent
    ], template: `<ap-ui-frame-page
  class="fixed inset-0"
  [header]="activeTabLabel()"
  (close)="onClickClose()"
  [enableBack]="isBack()"
  (back)="onClickBack()"
>
  <ap-tab-menu-icon
    [tabs]="tabs()"
    [justify]="'center'"
    [selectedTab]="activedTab()"
    [accentColor]="'yellow'"
    (tabChange)="changeTab($event)"
  />

  <div class="relative h-[calc(100%-3.5rem)] overflow-y-auto">
    @if (activedTab() === "buy-feature") {
      <event-buy-feature (closeAll)="onClickClose()" />
    } @else if (activedTab() === "campaign") {
      <event-campaign-cards/>
    } @else if (activedTab() === "cash-drop") {
      <event-cashdrop />
    } @else if (activedTab() === "tournament") {
      <event-trn [path]="subPath()" (onClose)="onClickClose()" />
    } @else if (activedTab() === "promo-code") {
      <event-promocode />
    } @else if (activedTab() === "leader-board") {
      <event-leader-board-banner />
    } @else if (activedTab() === "reward-system") {}
  </div>
</ap-ui-frame-page>
`, styles: ["/* src/app/pages/event-center/event-center.component.css */\n:host {\n  display: block;\n}\n.scrollbar-hide {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.scrollbar-hide::-webkit-scrollbar {\n  display: none;\n}\n.tab-container {\n  scroll-snap-type: x proximity;\n  -webkit-overflow-scrolling: touch;\n}\n.tab-container > div {\n  scroll-snap-align: start;\n}\n.grabbing {\n  cursor: grabbing !important;\n}\n/*# sourceMappingURL=event-center.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCenterComponent, { className: "EventCenterComponent", filePath: "src/app/pages/event-center/event-center.component.ts", lineNumber: 36 });
})();

// src/app/components/ap-trn-game-starting/ap-trn-game-starting.component.ts
var _c05 = (a0) => ({ "scale-250 opacity-0 duration-500": a0 });
var _c13 = (a0) => ({ "animate-fade animate-once animate-duration-200": a0 });
var _c23 = (a0, a1, a2) => ({ "animate-jump-in animate-ease-in-out animate-once duration-500 scale-120": a0, "text-yellow-300 font-anton": a1, "text-purple-400 font-anton": a2 });
var ApTrnGameStartingComponent = class _ApTrnGameStartingComponent {
  accentColor = input("yellow");
  message = input("Game Starting");
  duration = input(1500);
  setAnimation = input("default");
  animation = signal("default");
  close = output();
  constructor() {
    effect(() => __async(this, null, function* () {
      if (this.setAnimation() === "in") {
        this.animation.set("in");
        yield firstValueFrom(timer(this.duration()));
        this.animation.set("out");
        yield firstValueFrom(timer(500));
        this.close.emit();
      } else if (this.setAnimation() === "out") {
        yield firstValueFrom(timer(500));
        this.animation.set("out");
      }
    }));
  }
  static \u0275fac = function ApTrnGameStartingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnGameStartingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnGameStartingComponent, selectors: [["ap-trn-game-starting"]], inputs: { accentColor: [1, "accentColor"], message: [1, "message"], duration: [1, "duration"], setAnimation: [1, "setAnimation"] }, outputs: { close: "close" }, decls: 4, vars: 12, consts: [[1, "relative", "flex", "w-full", "h-16", "items-center", "justify-center", "select-none", "font-anton", "transition-all", 3, "ngClass"], [1, "absolute", "w-full", "h-full", "bg-linear-to-r", "from-zinc-900/30", "via-zinc-900/95", "to-zinc-900/30", "transition-opacity", 3, "ngClass"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-center", "text-4xl", "tracking-[.05em]", "uppercase", "transition-all", "drop-shadow-lg", 3, "ngClass"]], template: function ApTrnGameStartingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c05, ctx.animation() === "out"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c13, ctx.animation() === "in"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c23, ctx.animation() === "in", ctx.accentColor() === "yellow", ctx.accentColor() === "purple"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.message(), " ");
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnGameStartingComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-game-starting", imports: [CommonModule], template: `<div
  class="relative flex w-full h-16 items-center justify-center select-none font-anton transition-all"
  [ngClass]="{ 'scale-250 opacity-0 duration-500': animation() === 'out' }"
>
  <!-- Background bar -->
  <div
    class="absolute w-full h-full bg-linear-to-r from-zinc-900/30 via-zinc-900/95 to-zinc-900/30 transition-opacity"
    [ngClass]="{
      'animate-fade animate-once animate-duration-200': animation() === 'in',
    }"
  ></div>

  <!-- Text -->
  <div
    class="absolute inset-0 flex items-center justify-center text-center text-4xl tracking-[.05em] uppercase transition-all drop-shadow-lg"
    [ngClass]="{
      'animate-jump-in animate-ease-in-out animate-once duration-500 scale-120':
        animation() === 'in',
      'text-yellow-300 font-anton': accentColor() === 'yellow',
      'text-purple-400 font-anton': accentColor() === 'purple',
    }"
  >
    {{ message() }}
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnGameStartingComponent, { className: "ApTrnGameStartingComponent", filePath: "src/app/components/ap-trn-game-starting/ap-trn-game-starting.component.ts", lineNumber: 12 });
})();

// src/app/components/ap-trn-event-selection/ap-trn-event-selection.component.ts
var _forTrack010 = ($index, $item) => $item.id;
function ApTrnEventSelectionComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-game-list", 9);
    \u0275\u0275listener("click", function ApTrnEventSelectionComponent_For_9_Template_ap_trn_game_list_click_0_listener() {
      const trn_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEventClick(trn_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trn_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("hasParticipated", true)("trnData", trn_r2);
  }
}
var ApTrnEventSelectionComponent = class _ApTrnEventSelectionComponent {
  getDaysLabel = input("DAYS");
  getHoursLabel = input("HRS");
  getMinutesLabel = input("MINS");
  getSecondsLabel = input("SECS");
  getCountdownStartTitle = input("Start in");
  getCountdownEndTitle = input("End in");
  //* 賽事資料
  trnData = input(trnDefaultDataList[0]);
  getBonus = computed(() => {
    return this.trnData()?.raceData?.playersList.find((player) => player.highlighted)?.win || null;
  });
  trnList = input(trnDefaultDataList);
  selectedEvent = output();
  onClose = output();
  header = input("Event Selection");
  constructor() {
  }
  onEventClick(trn) {
    this.selectedEvent.emit(trn);
  }
  clickClose() {
    this.onClose.emit();
  }
  static \u0275fac = function ApTrnEventSelectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnEventSelectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnEventSelectionComponent, selectors: [["ap-trn-event-selection"]], inputs: { getDaysLabel: [1, "getDaysLabel"], getHoursLabel: [1, "getHoursLabel"], getMinutesLabel: [1, "getMinutesLabel"], getSecondsLabel: [1, "getSecondsLabel"], getCountdownStartTitle: [1, "getCountdownStartTitle"], getCountdownEndTitle: [1, "getCountdownEndTitle"], trnData: [1, "trnData"], trnList: [1, "trnList"], header: [1, "header"] }, outputs: { selectedEvent: "selectedEvent", onClose: "onClose" }, decls: 11, vars: 5, consts: [[1, "relative", "size-full", "flex", "items-center", "justify-center", "p-2"], [1, "absolute", "inset-0", "bg-black/60"], [1, "w-full", "sm:w-200", "border-[0.2rem]", "border-purple-300", "bg-zinc-900", "rounded-xl", "text-zinc-300", "duration-300", "select-none", "h-[78vh]", "flex", "flex-col"], [1, "relative", "w-full", "font-semibold", "h-16", "text-3xl", "md:text-4xl", "pt-3", "pb-2", "flex-shrink-0"], [1, "bg-zinc-800", "relative", "rounded-b-xl", "flex-1", "overflow-y-auto"], [1, "px-4", "py-4", "select-none", "flex", "flex-col", "text-left"], [1, "relative", "w-full", "flex", "flex-col", "gap-4"], [3, "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "hasParticipated", "trnData"], [1, "absolute", "right-3", "top-4", "hidden", 3, "click", "icon", "size", "variant", "accentColor"], [3, "click", "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "hasParticipated", "trnData"]], template: function ApTrnEventSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275repeaterCreate(8, ApTrnEventSelectionComponent_For_9_Template, 1, 8, "ap-trn-game-list", 7, _forTrack010);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "ap-button", 8);
      \u0275\u0275listener("click", function ApTrnEventSelectionComponent_Template_ap_button_click_10_listener() {
        return ctx.clickClose();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.header(), " ");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.trnList());
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", "x-mark")("size", "medium")("variant", "content-rounded")("accentColor", "purple");
    }
  }, dependencies: [CommonModule, ApTrnGameListComponent, ApButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnEventSelectionComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-event-selection", imports: [CommonModule, ApTrnGameListComponent, ApButtonComponent], template: `<div class="relative size-full flex items-center justify-center p-2">
  <div class="absolute inset-0 bg-black/60"></div>
  <div
    class="w-full sm:w-200 border-[0.2rem] border-purple-300 bg-zinc-900 rounded-xl text-zinc-300 duration-300 select-none h-[78vh] flex flex-col"
  >
    <div
      class="relative w-full font-semibold h-16 text-3xl md:text-4xl pt-3 pb-2 flex-shrink-0"
    >
      {{ header() }}
    </div>
    <div class="bg-zinc-800 relative rounded-b-xl flex-1 overflow-y-auto">
      <div class="px-4 py-4 select-none flex flex-col text-left">
        <div class="relative w-full flex flex-col gap-4">
          @for (trn of trnList(); track trn.id) {
            <ap-trn-game-list
              [getCountdownStartTitle]="getCountdownStartTitle()"
              [getCountdownEndTitle]="getCountdownEndTitle()"
              [getDaysLabel]="getDaysLabel()"
              [getHoursLabel]="getHoursLabel()"
              [getMinutesLabel]="getMinutesLabel()"
              [getSecondsLabel]="getSecondsLabel()"
              [hasParticipated]="true"
              [trnData]="trn"
              (click)="onEventClick(trn)"
            />
          }
        </div>
      </div>
    </div>
    <ap-button
      class="absolute right-3 top-4 hidden"
      [icon]="'x-mark'"
      [size]="'medium'"
      [variant]="'content-rounded'"
      [accentColor]="'purple'"
      (click)="clickClose()"
    />
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnEventSelectionComponent, { className: "ApTrnEventSelectionComponent", filePath: "src/app/components/ap-trn-event-selection/ap-trn-event-selection.component.ts", lineNumber: 13 });
})();

// src/app/pages/trn-idle/trn-idle.component.ts
var _c06 = ["quickContent"];
var _c14 = ["eventContent"];
var _c24 = (a0, a1) => ({ "border-yellow-300": a0, "border-purple-300": a1 });
var _c33 = (a0, a1, a2) => ({ "text-yellow-300 border-yellow-300": a0, "text-zinc-500 border-zinc-600": a1, "hover:bg-zinc-800 cursor-pointer": a2 });
var _c42 = (a0, a1, a2) => ({ "text-purple-300 border-purple-300": a0, "text-zinc-500 border-zinc-600": a1, "hover:bg-zinc-800 cursor-pointer": a2 });
var _forTrack011 = ($index, $item) => $item.id;
function TrnIdleComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getQuickTabText());
  }
}
function TrnIdleComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-trn-card-title", 23);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r2.getQuickTabText());
  }
}
function TrnIdleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function TrnIdleComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClickTab("quick"));
    });
    \u0275\u0275conditionalCreate(1, TrnIdleComponent_Conditional_1_Conditional_1_Template, 2, 1, "span")(2, TrnIdleComponent_Conditional_1_Conditional_2_Template, 1, 1, "ap-trn-card-title", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("w-22", ctx_r2.showTabEvent())("w-44", !ctx_r2.showTabEvent())("px-4", !ctx_r2.showTabEvent());
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c33, ctx_r2.currentTab() === "quick", ctx_r2.currentTab() !== "quick", ctx_r2.showTabEvent()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showTabEvent() ? 1 : 2);
  }
}
function TrnIdleComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getEventTabText());
  }
}
function TrnIdleComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-trn-card-title", 24);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r2.getEventTabText());
  }
}
function TrnIdleComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function TrnIdleComponent_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onClickTab("event");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275conditionalCreate(1, TrnIdleComponent_Conditional_2_Conditional_1_Template, 2, 1, "span")(2, TrnIdleComponent_Conditional_2_Conditional_2_Template, 1, 1, "ap-trn-card-title", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("w-22", ctx_r2.showTabQuick())("w-44", !ctx_r2.showTabQuick())("px-4", !ctx_r2.showTabQuick());
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c42, ctx_r2.currentTab() === "event", ctx_r2.currentTab() !== "event", ctx_r2.showTabQuick()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showTabQuick() ? 1 : 2);
  }
}
function TrnIdleComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4, " Required: ");
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.insufficientBalance());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.requiredBalanceString());
  }
}
function TrnIdleComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " Please use Cash Wallet to join the event. ");
    \u0275\u0275elementEnd();
  }
}
function TrnIdleComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "ap-icon", 26);
    \u0275\u0275elementStart(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r2.trn.currencySymbol(), "", \u0275\u0275pipeBind2(4, 2, ctx_r2.selectedEventUserPoint(), "1.0-3"), " ");
  }
}
function TrnIdleComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4, " Required: ");
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.insufficientBalance());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.requiredBalanceString());
  }
}
function TrnIdleComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " Please use Cash Wallet to join the event. ");
    \u0275\u0275elementEnd();
  }
}
function TrnIdleComponent_Conditional_32_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-game-list", 35);
    \u0275\u0275listener("click", function TrnIdleComponent_Conditional_32_For_7_Template_ap_trn_game_list_click_0_listener() {
      const trn_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEventClick(trn_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trn_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("hasParticipated", ctx_r2.hasJoinedEvent(trn_r7))("trnData", trn_r7);
  }
}
function TrnIdleComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function TrnIdleComponent_Conditional_32_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "div", 31)(5, "div", 32);
    \u0275\u0275repeaterCreate(6, TrnIdleComponent_Conditional_32_For_7_Template, 1, 8, "ap-trn-game-list", 33, _forTrack011);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ap-button", 34);
    \u0275\u0275listener("click", function TrnIdleComponent_Conditional_32_Template_ap_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showEventSelection.set(false);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c24, ctx_r2.currentTab() === "quick", ctx_r2.currentTab() === "event"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.header(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.trnList());
  }
}
var TrnIdleComponent = class _TrnIdleComponent {
  dontShowStorageKey = "ap_storage_trn_game_confirm_dont_show";
  appI18n = inject(AppI18nService);
  trn = inject(TrnCtrlService);
  wallet = inject(PlayerWalletService);
  game = inject(GameIframeCtrlService);
  eventCenter = inject(EventCenterCtrlService);
  getQuickTabText = this.appI18n.computed("QuickRace_Tab", "QUICK");
  getEventTabText = this.appI18n.computed("EventRace_Tab", "EVENT");
  getEventDetailsButtonText = this.appI18n.computed("GameResult_DetailLink", "Event details");
  betMultiplierTitle = this.appI18n.computed("BetBoost", "BET");
  getJoinButtonText = this.appI18n.computed("Join_Btn", "Join Event");
  getRejoinButtonText = this.appI18n.computed("Rejoin_Btn", "REJOIN");
  getMatchButtonText = this.appI18n.computed("Match_Btn", "Find Match");
  insufficientBalance = this.appI18n.computed("not_enough_bet", "Insufficient Balance");
  /** 是否顯示快速競賽分頁 */
  showTabQuick = computed(() => this.trn.trnQuick() !== null);
  /** 是否顯示長期競賽分頁 */
  showTabEvent = computed(() => (this.trn.trnEventRunningList()?.length || 0) > 0);
  /** 起始的分頁 */
  selectedTab = input("quick");
  /** 是否已經開啟主畫面 */
  windowOpened = input(false);
  /** 目前選擇的分頁 */
  currentTab = signal("quick");
  /** 目前選擇的長期競賽 */
  selectedEvent = signal(null);
  /** 長期競賽的總獎金 */
  selectedEventTotalPrize = signal(null);
  /** 長期競賽玩家自己的分數/獎金 */
  selectedEventUserPoint = signal(null);
  /** 是否正在跟Server拿取總獎金 */
  isTotalPrizeLoading = signal(false);
  /** 長期競賽的投注倍數 */
  betMultiplierEvent = computed(() => this.selectedEvent()?.betMultiplier || null);
  /** 快速競賽的總獎金 */
  prizeAmountQuick = computed(() => this.trn.currentTier()?.totalPrize || null);
  /** 快速競賽的投注倍數 */
  betMultiplierQuick = computed(() => this.currentQuick()?.betMultiplier || null);
  /** 長期競賽是否已經加入過 */
  isSelectedEventJoined = computed(() => this.selectedEventUserPoint() !== null);
  /* Tab 切換後內容高度與寬度 */
  quickContent = viewChild("quickContent");
  eventContent = viewChild("eventContent");
  contentHeight = signal(void 0);
  /** Event 選擇視窗面板開關 */
  showEventSelection = signal(false);
  getDaysLabel = input("DAYS");
  getHoursLabel = input("HRS");
  getMinutesLabel = input("MINS");
  getSecondsLabel = input("SECS");
  getCountdownStartTitle = input("Start in");
  getCountdownEndTitle = input("End in");
  trnList = computed(() => this.trn.trnEventRunningList() || []);
  selectEvent = output({ alias: "selectedEvent" });
  header = input("Event Selection");
  /** 長期競賽按鈕文字 */
  joinEventButtonText = computed(() => this.isSelectedEventJoined() ? this.getRejoinButtonText() : this.getJoinButtonText());
  /** 按鈕載入中狀態 */
  isButtonLoading = computed(() => this.trn.status() !== "idle");
  /** 是否允許加入競賽 */
  isJoinDisabled = signal(false);
  /** 關閉長期競賽加入按鈕 */
  isJoinEventDisabled = computed(() => {
    return this.isJoinDisabled() || !this.selectedEvent() || this.isInsufficientBalance() || this.isPlayerUseCampaign();
  });
  /** 關閉快速競賽加入按鈕 */
  isJoinQuickDisabled = computed(() => {
    return this.isJoinDisabled() || !this.currentQuick() || this.isInsufficientBalance() || this.isPlayerUseCampaign();
  });
  /** 使用者點選分頁 */
  clickTab = output();
  /** 如果wallet.campaignSetting有設定表示使用者正在使用campaign */
  isPlayerUseCampaign = computed(() => {
    const setting = this.wallet.campaignSetting();
    return setting ? true : false;
  });
  destroy$ = new Subject();
  destroyed = false;
  openConfirm = output();
  currentQuick = computed(() => this.trn.trnQuick());
  /** 快速競賽餘額不足 */
  isInsufficientBalance = computed(() => {
    const min = this.trn.currentTier()?.minPlayerBalance || 0;
    return this.wallet.balance() < min;
  });
  /** 快速競賽所需餘額 */
  requiredBalanceString = computed(() => `${this.trn.currencySymbol()}${this.trn.currentTier()?.minPlayerBalance || 0}`);
  constructor() {
    effect(() => {
      const event = this.selectedEvent();
      if (event) {
        this.selectedEventTotalPrize.set(null);
        this.selectedEventUserPoint.set(null);
        this.isTotalPrizeLoading.set(true);
        this.trn.sendEventRanking(event.id);
      }
    });
    effect(() => {
      if (!this.windowOpened())
        this.showEventSelection.set(false);
    });
  }
  ngAfterViewInit() {
    this.updateContentHeight();
    if (this.trn.trnEventRunningList()?.length === 1) {
      this.selectedEvent.set(this.trn.trnEventRunningList()[0]);
    }
  }
  ngOnInit() {
    this.currentTab.set(this.selectedTab());
    try {
      const saved = JSON.parse(localStorage.getItem("ap_storage_trn_idle_state") ?? "null");
      if (saved?.selectedEventId) {
        const event = this.trn.trnEventRunningList()?.find((e) => e.id === saved.selectedEventId);
        if (event)
          this.selectedEvent.set(event);
      }
    } catch {
      localStorage.removeItem("ap_storage_trn_idle_state");
    }
    this.game.startSpinning$.pipe(takeUntil(this.destroy$)).subscribe(() => this.isJoinDisabled.set(true));
    this.game.readyForSpin$.pipe(takeUntil(this.destroy$)).subscribe(() => this.isJoinDisabled.set(false));
    this.trn.eventRanking$.pipe(takeUntil(this.destroy$)).subscribe(this.onEventRanking.bind(this));
  }
  ngOnDestroy() {
    this.destroyed = true;
    localStorage.setItem("ap_storage_trn_idle_state", JSON.stringify({
      selectedEventId: this.selectedEvent()?.id ?? null
    }));
    this.destroy$.next();
    this.destroy$.complete();
  }
  /** 快速競賽
  onFindMatch(): void {
    this.trn.sendJoinQuick();
  }*/
  onJoinQuick() {
    const quick = this.currentQuick();
    if (!quick)
      return;
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1e3;
    const last = this.getDontShowAgainByEvent(quick.id);
    if (!last || now - last > oneWeek) {
      this.openConfirm.emit({ variant: "quick", event: quick });
      return;
    }
    this.trn.sendJoinQuick();
  }
  /** 長期競賽 */
  onJoinEvent() {
    const event = this.selectedEvent();
    if (!event)
      return;
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1e3;
    const last = this.getDontShowAgainByEvent(event.id);
    if (!last || now - last > oneWeek) {
      this.openConfirm.emit({ variant: "event", event });
      return;
    }
    this.trn.openEventRace(event.id);
  }
  getDontShowAgainByEvent(eventId) {
    const raw = localStorage.getItem(this.dontShowStorageKey);
    if (!raw)
      return null;
    try {
      const parsed = JSON.parse(raw);
      return typeof parsed?.[eventId] === "number" ? parsed[eventId] : null;
    } catch {
      return null;
    }
  }
  onEventRanking(data) {
    this.selectedEventTotalPrize.set(data.currentPool);
    this.selectedEventUserPoint.set(data.playersList.find((p) => p.highlighted)?.win ?? null);
    this.isTotalPrizeLoading.set(false);
    this.updateContentHeight();
  }
  onClickEventDetails() {
    if (!this.selectedEvent())
      return;
    this.eventCenter.open(`tournament/${this.selectedEvent().id}`);
  }
  onClickQuickDetails() {
    if (!this.currentQuick())
      return;
    this.eventCenter.open(`tournament/${this.currentQuick().id}`);
  }
  onClickTab(tab) {
    this.currentTab.set(tab);
    this.clickTab.emit(tab);
    this.updateContentHeight();
    if ((this.trn.trnEventRunningList()?.length || 0) > 1)
      this.showEventSelection.set(tab === "event");
  }
  // 內容高度更新，包含初始載入和切換分頁
  updateContentHeight() {
    Promise.resolve().then(() => {
      requestAnimationFrame(() => {
        if (this.destroyed)
          return;
        let newHeight;
        if (this.currentTab() === "quick") {
          newHeight = this.quickContent()?.nativeElement.scrollHeight;
        } else {
          newHeight = this.eventContent()?.nativeElement.scrollHeight;
        }
        this.contentHeight.set(newHeight);
      });
    });
  }
  hasJoinedEvent(trn) {
    return trn.raceData?.rank !== null || !!trn.raceData?.playersList?.some((player) => player.highlighted);
  }
  onEventClick(trn) {
    this.selectedEvent.set(trn);
    this.selectEvent.emit(trn);
    this.onJoinEvent();
  }
  clickClose() {
    this.showEventSelection.set(false);
  }
  static \u0275fac = function TrnIdleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrnIdleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrnIdleComponent, selectors: [["trn-idle"]], viewQuery: function TrnIdleComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.quickContent, _c06, 5);
      \u0275\u0275viewQuerySignal(ctx.eventContent, _c14, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { selectedTab: [1, "selectedTab"], windowOpened: [1, "windowOpened"], getDaysLabel: [1, "getDaysLabel"], getHoursLabel: [1, "getHoursLabel"], getMinutesLabel: [1, "getMinutesLabel"], getSecondsLabel: [1, "getSecondsLabel"], getCountdownStartTitle: [1, "getCountdownStartTitle"], getCountdownEndTitle: [1, "getCountdownEndTitle"], header: [1, "header"] }, outputs: { selectEvent: "selectedEvent", clickTab: "clickTab", openConfirm: "openConfirm" }, decls: 33, vars: 39, consts: [["quickContent", ""], ["eventContent", ""], [1, "flex", "relative"], [1, "h-10", "font-anton", "font-bold", "text-2xl", "bg-black/80", "tracking-wide", "border-2", "border-b-0", "rounded-t-xl", "duration-200", 3, "ngClass", "w-22", "w-44", "px-4"], [1, "relative", "bg-black/80", "border-2", "rounded-b-lg", "cursor-pointer", "transition-all", "duration-400", "ease-in-out", "max-w-full", "w-44", 3, "ngClass"], [1, "relative", "inset-0"], [1, "absolute", "w-full", "pt-1", "pb-2", "flex", "flex-col", "items-center", "gap-1", "transition-opacity", "duration-300", 3, "click"], ["name", "trophy", 1, "size-14", "mt-2", "text-yellow-300", "cursor-pointer"], [1, "flex", "items-center", "text-zinc-300", "font-semibold", "tracking-wide", "-mb-3"], ["type", "button", 1, "appearance-none", "bg-transparent", "border-0", "p-0", "m-0", "cursor-pointer"], [1, "border-b", "border-zinc-300", "flex", "items-center", "gap-1"], ["name", "exclamation-circle default", 1, "size-4"], [1, "text-xs"], ["variant", "quick", 1, "mt-4", "cursor-pointer", 3, "currency", "amount", "multiplierTitle", "multiplier"], ["size", "small", "icon", "search", "accentColor", "yellow", 1, "w-[85%]", "mt-2", "mb-2", 3, "click", "clicked", "disabled", "loading", "label"], [1, "text-left", "text-sm", "font-semibold", "text-red-500", "animate-fade-down", "animate-duration-200"], [1, "relative", "w-full", "min-h-60", "pt-1", "pb-2", "flex", "flex-col", "items-center", "gap-1", "transition-opacity", "duration-300", 3, "click"], ["name", "gift", 1, "size-14", "mt-2", "text-purple-300", "cursor-pointer"], [1, "w-36", "flex", "items-center", "space-x-1", "bg-purple-950/50", "border-2", "border-purple-300", "rounded-md", "px-2", "py-1", "mt-4", "-mb-2"], ["variant", "event", 1, "mt-4", "cursor-pointer", 3, "isLoading", "currency", "amount", "multiplierTitle", "multiplier"], ["size", "small", "icon", "search", "accentColor", "purple", 1, "w-[85%]", "mt-2", "mb-2", 3, "clicked", "disabled", "loading", "label"], [1, "absolute", "top-12", "left-3", "w-screen", "sm:w-2xl", "text-zinc-300", "duration-300", "select-none", "h-[78vh]", "flex", "flex-col", "border-2", "rounded-lg", "z-overlay", 3, "ngClass"], [1, "h-10", "font-anton", "font-bold", "text-2xl", "bg-black/80", "tracking-wide", "border-2", "border-b-0", "rounded-t-xl", "duration-200", 3, "click", "ngClass"], ["variant", "quick", "size", "small", 3, "title"], ["variant", "event", "size", "small", 3, "title"], [1, "text-zinc-200"], ["name", "prizes", 1, "text-purple-300", "size-5"], [1, "font-semibold", "font-anton", "text-xl", "tracking-wider", "text-purple-100"], [1, "absolute", "top-12", "left-3", "w-screen", "sm:w-2xl", "text-zinc-300", "duration-300", "select-none", "h-[78vh]", "flex", "flex-col", "border-2", "rounded-lg", "z-overlay", 3, "click", "ngClass"], [1, "relative", "bg-zinc-900/70", "w-full", "text-center", "font-semibold", "h-16", "text-3xl", "sm:text-4xl", "pt-3", "pb-2", "shrink-0", "rounded-t-lg"], [1, "bg-zinc-800/70", "relative", "rounded-b-xl", "flex-1", "overflow-y-auto"], [1, "px-4", "py-4", "text-center", "select-none", "flex", "flex-col", "justify-center", "items-center"], [1, "relative", "w-full", "flex", "flex-col", "gap-4"], [3, "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "hasParticipated", "trnData"], ["variant", "content-rounded", "accentColor", "zinc", "icon", "x-mark", 1, "absolute", "top-2", "right-2", "opacity-50", "text-zinc-400", "hover:text-zinc-100", "cursor-pointer", "transition-colors", "duration-200", 3, "click"], [3, "click", "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "hasParticipated", "trnData"]], template: function TrnIdleComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275conditionalCreate(1, TrnIdleComponent_Conditional_1_Template, 3, 12, "button", 3);
      \u0275\u0275conditionalCreate(2, TrnIdleComponent_Conditional_2_Template, 3, 12, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6, 0);
      \u0275\u0275listener("click", function TrnIdleComponent_Template_div_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClickQuickDetails());
      });
      \u0275\u0275element(7, "ap-icon", 7);
      \u0275\u0275elementStart(8, "div", 8)(9, "button", 9)(10, "div", 10);
      \u0275\u0275element(11, "ap-icon", 11);
      \u0275\u0275elementStart(12, "span", 12);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(14, "ap-trn-card-bonus", 13);
      \u0275\u0275elementStart(15, "ap-button", 14);
      \u0275\u0275listener("click", function TrnIdleComponent_Template_ap_button_click_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event.stopPropagation());
      })("clicked", function TrnIdleComponent_Template_ap_button_clicked_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onJoinQuick());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, TrnIdleComponent_Conditional_16_Template, 7, 2, "div", 15);
      \u0275\u0275conditionalCreate(17, TrnIdleComponent_Conditional_17_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 16, 1);
      \u0275\u0275listener("click", function TrnIdleComponent_Template_div_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClickEventDetails());
      });
      \u0275\u0275element(20, "ap-icon", 17);
      \u0275\u0275elementStart(21, "div", 8)(22, "button", 9)(23, "div", 10);
      \u0275\u0275element(24, "ap-icon", 11);
      \u0275\u0275elementStart(25, "span", 12);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(27, TrnIdleComponent_Conditional_27_Template, 5, 5, "div", 18);
      \u0275\u0275element(28, "ap-trn-card-bonus", 19);
      \u0275\u0275elementStart(29, "ap-button", 20);
      \u0275\u0275listener("clicked", function TrnIdleComponent_Template_ap_button_clicked_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.onJoinEvent();
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, TrnIdleComponent_Conditional_30_Template, 7, 2, "div", 15);
      \u0275\u0275conditionalCreate(31, TrnIdleComponent_Conditional_31_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(32, TrnIdleComponent_Conditional_32_Template, 9, 5, "div", 21);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showTabQuick() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showTabEvent() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.contentHeight(), "px");
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(36, _c24, ctx.currentTab() === "quick", ctx.currentTab() === "event"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", ctx.currentTab() !== "quick")("invisible", ctx.currentTab() !== "quick");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.getEventDetailsButtonText(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("currency", ctx.trn.currencySymbol())("amount", ctx.prizeAmountQuick())("multiplierTitle", ctx.betMultiplierTitle())("multiplier", ctx.betMultiplierQuick());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isJoinQuickDisabled())("loading", ctx.isButtonLoading())("label", ctx.getMatchButtonText());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInsufficientBalance() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isPlayerUseCampaign() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("opacity-0", ctx.currentTab() !== "event")("invisible", ctx.currentTab() !== "event");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.getEventDetailsButtonText(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedEventUserPoint() !== null ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("isLoading", ctx.isTotalPrizeLoading())("currency", ctx.trn.currencySymbol())("amount", ctx.selectedEventTotalPrize())("multiplierTitle", ctx.betMultiplierTitle())("multiplier", ctx.betMultiplierEvent());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isJoinEventDisabled())("loading", ctx.isButtonLoading())("label", ctx.joinEventButtonText());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInsufficientBalance() ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isPlayerUseCampaign() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showEventSelection() ? 32 : -1);
    }
  }, dependencies: [CommonModule, NgClass, DecimalPipe, ApTrnCardTitleComponent, ApIconComponent, ApTrnCardBonusComponent, ApButtonComponent, ApTrnGameListComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrnIdleComponent, [{
    type: Component,
    args: [{ selector: "trn-idle", imports: [CommonModule, ApTrnCardTitleComponent, ApIconComponent, ApTrnCardBonusComponent, ApButtonComponent, ApTrnGameListComponent], template: `<!-- Tab Buttons -->
<div class="flex relative">
  <!-- Quick -->
  @if (showTabQuick()) {
    <button
      (click)="onClickTab('quick')"
      class="h-10 font-anton font-bold text-2xl bg-black/80 tracking-wide border-2 border-b-0 rounded-t-xl duration-200"
      [ngClass]="{
        'text-yellow-300 border-yellow-300': currentTab() === 'quick',
        'text-zinc-500 border-zinc-600': currentTab() !== 'quick',
        'hover:bg-zinc-800 cursor-pointer': showTabEvent()
      }"
      [class.w-22]="showTabEvent()"
      [class.w-44]="!showTabEvent()"
      [class.px-4]="!showTabEvent()"
    >
      @if (showTabEvent()) {
        <span>{{ getQuickTabText() }}</span>
      } @else {
        <ap-trn-card-title variant="quick" [title]="getQuickTabText()" size="small" />
      }
    </button>
  }

  <!-- Event -->
  @if (showTabEvent()) {
    <button
      (click)="onClickTab('event');  $event.stopPropagation()"
      class="h-10 font-anton font-bold text-2xl bg-black/80 tracking-wide border-2 border-b-0 rounded-t-xl duration-200"
      [ngClass]="{
        'text-purple-300 border-purple-300': currentTab() === 'event',
        'text-zinc-500 border-zinc-600': currentTab() !== 'event',
        'hover:bg-zinc-800 cursor-pointer': showTabQuick()
      }"
      [class.w-22]="showTabQuick()"
      [class.w-44]="!showTabQuick()"
      [class.px-4]="!showTabQuick()"
    >
      @if (showTabQuick()) {
        <span>{{ getEventTabText() }}</span>
      } @else {
        <ap-trn-card-title variant="event" [title]="getEventTabText()" size="small" />
      }
    </button>
  }
</div>

<div
  class="relative bg-black/80 border-2 rounded-b-lg cursor-pointer transition-all duration-400 ease-in-out max-w-full w-44"
  [ngClass]="{
    'border-yellow-300': currentTab() === 'quick',
    'border-purple-300': currentTab() === 'event'
  }"
  [style.height.px]="contentHeight()"
>
  <div class="relative inset-0">

    <!-- QUICK -->
    <div
      #quickContent
      class="absolute w-full pt-1 pb-2 flex flex-col items-center gap-1 transition-opacity duration-300"
      [class.opacity-0]="currentTab() !== 'quick'"
      [class.invisible]="currentTab() !== 'quick'"
      (click)="onClickQuickDetails()"
    >
      <!-- Quick Icon -->
      <ap-icon
        name="trophy"
        class="size-14 mt-2 text-yellow-300 cursor-pointer"
      />

      <!-- Details -->
      <div class="flex items-center text-zinc-300 font-semibold tracking-wide -mb-3">
        <button
          type="button"
          class="appearance-none bg-transparent border-0 p-0 m-0 cursor-pointer"
        >
          <div class="border-b border-zinc-300 flex items-center gap-1">
            <ap-icon name="exclamation-circle default" class="size-4" />
            <span class="text-xs">
              {{ getEventDetailsButtonText() }}
            </span>
          </div>
        </button>
      </div>

      <!-- Bonus -->
      <ap-trn-card-bonus
        class="mt-4 cursor-pointer"
        [currency]="trn.currencySymbol()"
        [amount]="prizeAmountQuick()"
        variant="quick"
        [multiplierTitle]="betMultiplierTitle()"
        [multiplier]="betMultiplierQuick()"
      />

      <!-- Match -->
      <ap-button
        class="w-[85%] mt-2 mb-2"
        size="small"
        icon="search"
        accentColor="yellow"
        [disabled]="isJoinQuickDisabled()"
        [loading]="isButtonLoading()"
        [label]="getMatchButtonText()"
        (click)="$event.stopPropagation()"
        (clicked)="onJoinQuick()"
      />

      <!-- Insufficient -->
      @if (isInsufficientBalance()) {
        <div class="text-left text-sm font-semibold text-red-500 animate-fade-down animate-duration-200">
          <div>{{ insufficientBalance() }}</div>
          <div>
            Required:
            <span class="text-zinc-200">{{ requiredBalanceString() }}</span>
          </div>
        </div>
      }
      @if (isPlayerUseCampaign()) {
        <div class="text-left text-sm font-semibold text-red-500 animate-fade-down animate-duration-200">
          Please use Cash Wallet to join the event.
        </div>
       }
    </div>

    <!-- EVENT -->
    <div
      #eventContent
      class="relative w-full min-h-60 pt-1 pb-2 flex flex-col items-center gap-1 transition-opacity duration-300" 
      [class.opacity-0]="currentTab() !== 'event'"
      [class.invisible]="currentTab() !== 'event'"
      (click)="onClickEventDetails()"
    >
      <!-- Icon -->
      <ap-icon
        name="gift"
        class="size-14 mt-2 text-purple-300 cursor-pointer"
      />

      <!-- Details -->
      <div class="flex items-center text-zinc-300 font-semibold tracking-wide -mb-3">
        <button
          type="button"
          class="appearance-none bg-transparent border-0 p-0 m-0 cursor-pointer"
        >
          <div class="border-b border-zinc-300 flex items-center gap-1">
            <ap-icon name="exclamation-circle default" class="size-4" />
            <span class="text-xs">
              {{ getEventDetailsButtonText() }}
            </span>
          </div>
        </button>
      </div>

      <!-- User Point -->
      @if (selectedEventUserPoint() !== null) {
        <div
          class="w-36 flex items-center space-x-1 bg-purple-950/50 border-2 border-purple-300 rounded-md px-2 py-1 mt-4 -mb-2"
        >
          <ap-icon name="prizes" class="text-purple-300 size-5" />
          <div class="font-semibold font-anton text-xl tracking-wider text-purple-100">
            {{ trn.currencySymbol() }}{{ selectedEventUserPoint()! | number: '1.0-3' }}
          </div>
        </div>
      }

      <!-- Bonus -->
      <ap-trn-card-bonus
        class="mt-4 cursor-pointer"
        [isLoading]="isTotalPrizeLoading()"
        [currency]="trn.currencySymbol()"
        [amount]="selectedEventTotalPrize()"
        variant="event"
        [multiplierTitle]="betMultiplierTitle()"
        [multiplier]="betMultiplierEvent()"
      />

      <!-- Join -->
      <ap-button
        class="w-[85%] mt-2 mb-2"
        size="small"
        icon="search"
        accentColor="purple"
        [disabled]="isJoinEventDisabled()"
        [loading]="isButtonLoading()"
        [label]="joinEventButtonText()"
        (clicked)="onJoinEvent(); $event.stopPropagation()"
      />

      <!-- Insufficient -->
      @if (isInsufficientBalance()) {
        <div class="text-left text-sm font-semibold text-red-500 animate-fade-down animate-duration-200">
          <div>{{ insufficientBalance() }}</div>
          <div>
            Required:
            <span class="text-zinc-200">{{ requiredBalanceString() }}</span>
          </div>
        </div>
      }
      @if (isPlayerUseCampaign()) {
        <div class="text-left text-sm font-semibold text-red-500 animate-fade-down animate-duration-200">
          Please use Cash Wallet to join the event.
        </div>
      }
    </div>

  </div>
</div>

@if (showEventSelection() ) {
  <div class="absolute top-12 left-3 w-screen sm:w-2xl text-zinc-300 duration-300 select-none h-[78vh] flex flex-col border-2 rounded-lg z-overlay" 
    (click)="$event.stopPropagation()"
    [ngClass]="{
      'border-yellow-300': currentTab() === 'quick',
      'border-purple-300': currentTab() === 'event'
    }"
  >
    <div class="relative bg-zinc-900/70 w-full text-center font-semibold h-16 text-3xl sm:text-4xl pt-3 pb-2 shrink-0 rounded-t-lg">
      {{ header() }}
    </div>
    <div class="bg-zinc-800/70 relative rounded-b-xl flex-1 overflow-y-auto ">
      <div class="px-4 py-4 text-center select-none flex flex-col justify-center items-center">
        <div class="relative w-full flex flex-col gap-4">
          @for (trn of trnList(); track trn.id) {
            <ap-trn-game-list
              [getCountdownStartTitle]="getCountdownStartTitle()"
              [getCountdownEndTitle]="getCountdownEndTitle()"
              [getDaysLabel]="getDaysLabel()"
              [getHoursLabel]="getHoursLabel()"
              [getMinutesLabel]="getMinutesLabel()"
              [getSecondsLabel]="getSecondsLabel()"
              [hasParticipated]="hasJoinedEvent(trn)"
              [trnData]="trn"
              (click)="onEventClick(trn);"
            />
          }
        </div>
      </div>
    </div>
    <ap-button
      class="absolute top-2 right-2 opacity-50 text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors duration-200"
      variant="content-rounded"
      accentColor="zinc"
      icon="x-mark"
      (click)="showEventSelection.set(false); $event.stopPropagation()"
    />
    
  </div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrnIdleComponent, { className: "TrnIdleComponent", filePath: "src/app/pages/trn-idle/trn-idle.component.ts", lineNumber: 22 });
})();

// src/app/components/ap-trn-tab/ap-trn-tab.component.ts
var _c07 = ["*"];
var _c15 = (a0, a1) => ({ "border-yellow-300": a0, "border-purple-300": a1 });
var _c25 = (a0, a1, a2, a3) => ({ "text-yellow-300 border-yellow-300": a0, "text-zinc-500 border-zinc-600": a1, "hover:bg-zinc-800 cursor-pointer": a2, "cursor-not-allowed": a3 });
var _c34 = (a0, a1, a2, a3) => ({ "text-purple-300 border-purple-300": a0, "text-zinc-500 border-zinc-600": a1, "hover:bg-zinc-800 cursor-pointer": a2, "cursor-not-allowed": a3 });
function ApTrnTabComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getQuickTabText());
  }
}
function ApTrnTabComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-trn-card-title", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r2.getQuickTabText());
  }
}
function ApTrnTabComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ApTrnTabComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabClick("quick"));
    });
    \u0275\u0275conditionalCreate(1, ApTrnTabComponent_Conditional_1_Conditional_1_Template, 2, 1, "span")(2, ApTrnTabComponent_Conditional_1_Conditional_2_Template, 1, 1, "ap-trn-card-title", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("w-22", ctx_r2.showTabEvent())("w-44", !ctx_r2.showTabEvent())("px-4", !ctx_r2.showTabEvent());
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(9, _c25, ctx_r2.currentTab() === "quick", ctx_r2.currentTab() !== "quick", !ctx_r2.isTabQuickDisabled() && ctx_r2.showTabEvent(), ctx_r2.isTabQuickDisabled()))("disabled", ctx_r2.isTabQuickDisabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showTabEvent() ? 1 : 2);
  }
}
function ApTrnTabComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getEventTabText());
  }
}
function ApTrnTabComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-trn-card-title", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r2.getEventTabText());
  }
}
function ApTrnTabComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ApTrnTabComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabClick("event"));
    });
    \u0275\u0275conditionalCreate(1, ApTrnTabComponent_Conditional_2_Conditional_1_Template, 2, 1, "span")(2, ApTrnTabComponent_Conditional_2_Conditional_2_Template, 1, 1, "ap-trn-card-title", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("w-22", ctx_r2.showTabQuick())("w-44", !ctx_r2.showTabQuick())("px-4", !ctx_r2.showTabQuick());
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(9, _c34, ctx_r2.currentTab() === "event", ctx_r2.currentTab() !== "event", !ctx_r2.isTabEventDisabled() && ctx_r2.showTabQuick(), ctx_r2.isTabEventDisabled()))("disabled", ctx_r2.isTabEventDisabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showTabQuick() ? 1 : 2);
  }
}
var ApTrnTabComponent = class _ApTrnTabComponent {
  /** 分頁文字 */
  getQuickTabText = input("QUICK");
  getEventTabText = input("EVENT");
  /** 預設選擇的分頁 */
  selected = input("quick");
  /** 選擇的分頁 */
  currentTab = signal("quick");
  /** 顯示快速賽事分頁 */
  showTabQuick = input(true);
  /** 顯示活動賽事分頁 */
  showTabEvent = input(true);
  /** 禁用快速賽事分頁 */
  isTabQuickDisabled = input(false);
  /** 禁用活動賽事分頁 */
  isTabEventDisabled = input(false);
  /** 點擊分頁事件 */
  clickTab = output();
  /** 點擊內容區背景事件 */
  clickBackground = output();
  ngOnInit() {
    this.currentTab.set(this.selected());
  }
  onTabClick(tab) {
    this.currentTab.set(tab);
    this.clickTab.emit(tab);
  }
  onBackgroundClick(event, contentEl) {
    const target = event.target;
    const currentTarget = event.currentTarget;
    if (!target || !currentTarget)
      return;
    if (target === currentTarget || target === contentEl) {
      this.clickBackground.emit();
    }
  }
  static \u0275fac = function ApTrnTabComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApTrnTabComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApTrnTabComponent, selectors: [["ap-trn-tab"]], inputs: { getQuickTabText: [1, "getQuickTabText"], getEventTabText: [1, "getEventTabText"], selected: [1, "selected"], showTabQuick: [1, "showTabQuick"], showTabEvent: [1, "showTabEvent"], isTabQuickDisabled: [1, "isTabQuickDisabled"], isTabEventDisabled: [1, "isTabEventDisabled"] }, outputs: { clickTab: "clickTab", clickBackground: "clickBackground" }, ngContentSelectors: _c07, decls: 7, vars: 6, consts: [["contentEl", ""], [1, "top-0", "left-0", "flex", "relative"], [1, "h-10", "font-anton", "font-bold", "text-2xl", "bg-black/80", "tracking-wide", "border-2", "border-b-0", "rounded-t-xl", "duration-200", 3, "ngClass", "w-22", "w-44", "px-4", "disabled"], [1, "relative", "w-44", "min-h-auto", "bg-black/80", "border-2", "rounded-b-lg", "cursor-pointer", 3, "click", "ngClass"], [1, "duration-200", "pt-1", "pb-2", "flex", "flex-col", "items-center", "gap-1"], [1, "h-10", "font-anton", "font-bold", "text-2xl", "bg-black/80", "tracking-wide", "border-2", "border-b-0", "rounded-t-xl", "duration-200", 3, "click", "ngClass", "disabled"], ["variant", "quick", "size", "small", 3, "title"], ["variant", "event", "size", "small", 3, "title"]], template: function ApTrnTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, ApTrnTabComponent_Conditional_1_Template, 3, 14, "button", 2);
      \u0275\u0275conditionalCreate(2, ApTrnTabComponent_Conditional_2_Template, 3, 14, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275listener("click", function ApTrnTabComponent_Template_div_click_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        const contentEl_r5 = \u0275\u0275reference(5);
        return \u0275\u0275resetView(ctx.onBackgroundClick($event, contentEl_r5));
      });
      \u0275\u0275elementStart(4, "div", 4, 0);
      \u0275\u0275projection(6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showTabQuick() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showTabEvent() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c15, ctx.currentTab() === "quick", ctx.currentTab() === "event"));
    }
  }, dependencies: [CommonModule, NgClass, ApTrnCardTitleComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApTrnTabComponent, [{
    type: Component,
    args: [{ selector: "ap-trn-tab", imports: [CommonModule, ApTrnCardTitleComponent], template: `<!-- Tab Buttons -->
<div class="top-0 left-0 flex relative">
  <!--Quick-->
  @if (showTabQuick()) {
    <button
      (click)="onTabClick('quick')"
      class="h-10 font-anton font-bold text-2xl bg-black/80 tracking-wide border-2 border-b-0 rounded-t-xl duration-200"
      [ngClass]="{
        'text-yellow-300 border-yellow-300': currentTab() === 'quick',
        'text-zinc-500 border-zinc-600': currentTab() !== 'quick',
        'hover:bg-zinc-800 cursor-pointer': !isTabQuickDisabled() && showTabEvent(),
        'cursor-not-allowed': isTabQuickDisabled()
      }"
      [class.w-22]="showTabEvent()"
      [class.w-44]="!showTabEvent()"
      [class.px-4]="!showTabEvent()"
      [disabled]="isTabQuickDisabled()"
    >
      @if (showTabEvent()) {
        <span>{{ getQuickTabText() }}</span>
      } @else {
        <ap-trn-card-title variant="quick" [title]="getQuickTabText()" size="small" />
      }
    </button>
  }
  <!--Event-->
  @if (showTabEvent()) {
    <button
      (click)="onTabClick('event')"
      class="h-10 font-anton font-bold text-2xl bg-black/80 tracking-wide border-2 border-b-0 rounded-t-xl duration-200"
      [ngClass]="{
        'text-purple-300 border-purple-300': currentTab() === 'event',
        'text-zinc-500 border-zinc-600': currentTab() !== 'event',
        'hover:bg-zinc-800 cursor-pointer': !isTabEventDisabled() && showTabQuick(),
        'cursor-not-allowed': isTabEventDisabled()
      }"
      [class.w-22]="showTabQuick()"
      [class.w-44]="!showTabQuick()"
      [class.px-4]="!showTabQuick()"
      [disabled]="isTabEventDisabled()"
    >
      @if (showTabQuick()) {
        <span>{{ getEventTabText() }}</span>
      } @else {
        <ap-trn-card-title variant="event" [title]="getEventTabText()" size="small" />
      }
    </button>
  }
</div>
<!-- Main Window -->
<div
  class="relative w-44 min-h-auto bg-black/80 border-2 rounded-b-lg cursor-pointer"
  (click)="onBackgroundClick($event, contentEl)"
  [ngClass]="{
    'border-yellow-300': currentTab() === 'quick',
    'border-purple-300': currentTab() === 'event'
  }"
>
  <!-- Content -->
  <div
    #contentEl
    class="duration-200 pt-1 pb-2 flex flex-col items-center gap-1 "
  >
    <ng-content></ng-content>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApTrnTabComponent, { className: "ApTrnTabComponent", filePath: "src/app/components/ap-trn-tab/ap-trn-tab.component.ts", lineNumber: 12 });
})();

// src/app/pages/trn-matching/trn-matching.component.ts
function TrnMatchingComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getMatchingButtonText());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r0.matchingTime(), ")");
  }
}
function TrnMatchingComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "CANCELING");
    \u0275\u0275elementEnd();
  }
}
var TrnMatchingComponent = class _TrnMatchingComponent {
  trn;
  api;
  appI18n = inject(AppI18nService);
  getQuickTabText = this.appI18n.computed("QuickRace_Tab", "QUICK");
  getEventDetailsButtonText = this.appI18n.computed("GameResult_DetailLink", "Event details");
  getMatchingButtonText = this.appI18n.computed("Matching_Btn", "Matching...");
  matchingTime = signal(0);
  startTime = signal(null);
  roomStatus = signal("matching");
  destroy$ = new Subject();
  isButtonDisabled = computed(() => this.roomStatus() === "canceling");
  constructor(trn, api) {
    this.trn = trn;
    this.api = api;
  }
  ngOnInit() {
    this.trn.roomCancelling$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomCancelling.bind(this));
    this.startTime.set(this.trn.matchingStartTime() || null);
    interval(1e3).pipe(takeUntil(this.destroy$)).subscribe(() => {
      const start = this.startTime();
      if (start === null)
        return;
      this.matchingTime.set(Math.floor((Date.now() - start) / 1e3));
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onClickCancel() {
    this.trn.sendCancelJoinQuick();
  }
  onClickDetail() {
  }
  onRoomCancelling() {
    this.roomStatus.set("canceling");
  }
  static \u0275fac = function TrnMatchingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrnMatchingComponent)(\u0275\u0275directiveInject(TrnCtrlService), \u0275\u0275directiveInject(AppInterfaceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrnMatchingComponent, selectors: [["trn-matching"]], decls: 13, vars: 9, consts: [["selected", "quick", 3, "getQuickTabText", "showTabEvent"], ["name", "trophy", 1, "size-14", "mt-2", "text-yellow-300"], [1, "flex", "items-center", "text-zinc-300", "font-semibold", "tracking-wide", "-mb-2"], [1, "border-b", "border-zinc-300", "flex", "items-center", "gap-1", "cursor-pointer", 3, "click"], ["name", "exclamation-circle default", 1, "size-5"], ["variant", "quick", 1, "mt-4", 3, "currentCount", "totalCount"], [1, "flex", "w-full", "pl-10", "text-xs", "text-zinc-300"], [1, "animate-pulse"], [1, "in-match"], ["label", "Cancel", "accentColor", "zinc", 1, "w-[85%]", "mt-2", "mb-2", 3, "clicked", "size", "disabled"], [1, ""]], template: function TrnMatchingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ap-trn-tab", 0);
      \u0275\u0275element(1, "ap-icon", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275listener("click", function TrnMatchingComponent_Template_div_click_3_listener() {
        return ctx.onClickDetail();
      });
      \u0275\u0275element(4, "ap-icon", 4);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(7, "ap-trn-card-match", 5);
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275conditionalCreate(9, TrnMatchingComponent_Conditional_9_Template, 4, 2);
      \u0275\u0275conditionalCreate(10, TrnMatchingComponent_Conditional_10_Template, 2, 0, "span", 7);
      \u0275\u0275element(11, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ap-button", 9);
      \u0275\u0275listener("clicked", function TrnMatchingComponent_Template_ap_button_clicked_12_listener() {
        return ctx.onClickCancel();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275property("getQuickTabText", ctx.getQuickTabText())("showTabEvent", false);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.getEventDetailsButtonText());
      \u0275\u0275advance();
      \u0275\u0275property("currentCount", ctx.trn.roomCurrentPlayers())("totalCount", ((tmp_4_0 = ctx.trn.trnQuick()) == null ? null : tmp_4_0.maxPlayers) || 30);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.roomStatus() === "matching" ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.roomStatus() === "canceling" ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", "small")("disabled", ctx.isButtonDisabled());
    }
  }, dependencies: [ApTrnTabComponent, ApIconComponent, ApTrnCardMatchComponent, ApButtonComponent], styles: ['\n\n.in-match[_ngcontent-%COMP%]::after {\n  content: ".";\n  animation: _ngcontent-%COMP%_dots 1.5s steps(3, end) infinite;\n}\n@keyframes _ngcontent-%COMP%_dots {\n  0% {\n    content: ".";\n  }\n  33% {\n    content: "..";\n  }\n  66% {\n    content: "...";\n  }\n  100% {\n    content: ".";\n  }\n}\n/*# sourceMappingURL=trn-matching.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrnMatchingComponent, [{
    type: Component,
    args: [{ selector: "trn-matching", imports: [ApTrnTabComponent, ApIconComponent, ApTrnCardMatchComponent, ApButtonComponent], template: `<ap-trn-tab selected="quick" [getQuickTabText]="getQuickTabText()" [showTabEvent]="false">
 <ap-icon name="trophy" class="size-14 mt-2 text-yellow-300" />

  <!-- Details-->
  <div
    class="flex items-center text-zinc-300 font-semibold tracking-wide -mb-2"
  >
    <div
      class="border-b border-zinc-300 flex items-center gap-1 cursor-pointer"
      (click)="onClickDetail()"
    >
      <ap-icon name="exclamation-circle default" class="size-5" />
      <span>{{ getEventDetailsButtonText() }}</span>
    </div>
  </div>

  <!-- Matching -->
  <ap-trn-card-match
    class="mt-4"
    variant="quick"
    [currentCount]="trn.roomCurrentPlayers()"
    [totalCount]="trn.trnQuick()?.maxPlayers || 30"
  />

  <div class="flex w-full pl-10 text-xs text-zinc-300">
    @if (roomStatus() === "matching") {
      <span class="">{{ getMatchingButtonText() }}</span >
      <span>({{ matchingTime() }})</span >
    }
    @if (roomStatus() === "canceling") {
      <span class="animate-pulse">CANCELING</span>
    }
    <span class="in-match"></span>
  </div>

  <!-- Match\u6309\u9215 -->
  <ap-button
    class="w-[85%] mt-2 mb-2"
    [size]="'small'"
    [disabled]="isButtonDisabled()"
    label="Cancel"
    accentColor="zinc"
    (clicked)="onClickCancel()"
  >
  </ap-button>
</ap-trn-tab>
`, styles: ['/* src/app/pages/trn-matching/trn-matching.component.css */\n.in-match::after {\n  content: ".";\n  animation: dots 1.5s steps(3, end) infinite;\n}\n@keyframes dots {\n  0% {\n    content: ".";\n  }\n  33% {\n    content: "..";\n  }\n  66% {\n    content: "...";\n  }\n  100% {\n    content: ".";\n  }\n}\n/*# sourceMappingURL=trn-matching.component.css.map */\n'] }]
  }], () => [{ type: TrnCtrlService }, { type: AppInterfaceService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrnMatchingComponent, { className: "TrnMatchingComponent", filePath: "src/app/pages/trn-matching/trn-matching.component.ts", lineNumber: 17 });
})();

// src/app/pages/trn-playing-quick/trn-playing-quick.component.ts
var _c08 = (a0) => ({ "max-h-64": a0 });
function TrnPlayingQuickComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "ap-button", 10);
    \u0275\u0275listener("click", function TrnPlayingQuickComponent_Conditional_7_Template_ap_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAllPlayerList.set(!ctx_r1.showAllPlayerList()));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", "x-mark")("icon", ctx_r1.showAllPlayerList() ? "arrow-up" : "arrow-down");
  }
}
function TrnPlayingQuickComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "ap-loading-overlay", 11);
    \u0275\u0275elementEnd();
  }
}
function TrnPlayingQuickComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-game-hint", 12);
    \u0275\u0275listener("close", function TrnPlayingQuickComponent_Conditional_11_Template_ap_trn_game_hint_close_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showHint.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r1.getBetTitle())("message", ctx_r1.getQuickMessage())("multiplier", ctx_r1.trn.currentBetMultiplier());
  }
}
var TrnPlayingQuickComponent = class _TrnPlayingQuickComponent {
  appI18n = inject(AppI18nService);
  trn = inject(TrnCtrlService);
  wallet = inject(PlayerWalletService);
  game = inject(GameIframeCtrlService);
  api = inject(AppInterfaceService);
  getQuickTabText = this.appI18n.computed("QuickRace_Tab", "QUICK");
  betMultiplierTitle = this.appI18n.computed("BetBoost", "BET");
  getBetTitle = this.appI18n.computed("BetBoost", "BET");
  getQuickMessage = computed(() => {
    const isEnabled = this.trn.currentBetMultiplier() > 1;
    const key = isEnabled ? "BetToggleOn_Tip" : "BetToggleOff_Tip";
    const fallback = isEnabled ? "Enable Tournament Bet" : "Disable Tournament Bet";
    return this.appI18n.instant(key, fallback);
  });
  /** 是否使用 BetData */
  isBetData = computed(() => {
    return this.wallet.trnData() !== null;
  });
  /** Room 結束時間 (Unix timestamp 豪秒) */
  endTime = signal(null);
  /** 玩家列表載入中 */
  isPlayersListLoading = signal(false);
  /** 玩家列表 */
  playerListAll = signal([]);
  /** 顯示完整玩家列表 */
  showAllPlayerList = signal(false);
  /** 顯示切換Enable Bet提示 */
  showHint = signal(false);
  /** 總獎金 */
  totalPrize = signal(null);
  /** 下注倍率 */
  multiplier = signal(1);
  isBetDataToggleEnabled = computed(() => this.game.status() === "Idle");
  destroy$ = new Subject();
  constructor() {
  }
  ngOnInit() {
    this.trn.roomUpdated$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomUpdate.bind(this));
    this.endTime.set(this.trn.roomEndTime() || null);
    this.playerListAll.set(this.trn.roomPlayerList());
    this.totalPrize.set(this.trn.roomPrize() || null);
    this.multiplier.set(this.trn.betDataMultiplier());
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /** 遊戲中片段顯示的玩家列表 */
  playerListPart = computed(() => {
    const highlightIndex = this.playerListAll().findIndex((item) => item.highlighted);
    if (highlightIndex === -1 || highlightIndex < 4) {
      return this.playerListAll().slice(0, 5);
    } else {
      const start = Math.max(0, highlightIndex - 4);
      const end = Math.min(this.playerListAll().length, highlightIndex + 1);
      return this.playerListAll().slice(start, end);
    }
  });
  onRoomUpdate(state) {
    this.playerListAll.set(state.playersList);
    this.totalPrize.set(state.currentPool || null);
  }
  onToggleBetData(enable) {
    this.showHint.set(enable);
    this.trn.enableBetData(enable);
  }
  static \u0275fac = function TrnPlayingQuickComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrnPlayingQuickComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrnPlayingQuickComponent, selectors: [["trn-playing-quick"]], decls: 12, vars: 19, consts: [["selected", "quick", 3, "getQuickTabText", "showTabEvent"], [1, "flex", "justify-center"], ["variant", "quick", 3, "targetTime"], ["variant", "quick", 3, "currency", "amount", "isAnimated", "multiplierTitle", "multiplier"], [1, "relative", "w-full", "max-w-xs"], [1, "overflow-y-auto", "scrollbar-thin", 3, "ngClass"], ["variant", "quick", 1, "min-h-16", 3, "currency", "items", "showDividers"], [1, "absolute", "inset-0", "bg-black/50"], ["accentColor", "yellow", 3, "checkedChange", "disabled", "checked"], ["variant", "quick", 1, "absolute", 3, "title", "message", "multiplier"], ["variant", "outlined-rounded", "accentColor", "yellow", 1, "-translate-y-1/3", "opacity-70", "hover:opacity-100", "transition-opacity", 3, "click", "icon"], [1, "size-full"], ["variant", "quick", 1, "absolute", 3, "close", "title", "message", "multiplier"]], template: function TrnPlayingQuickComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ap-trn-tab", 0)(1, "div", 1);
      \u0275\u0275element(2, "ap-trn-float-countdown", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "ap-trn-card-bonus", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "ap-trn-list-row", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, TrnPlayingQuickComponent_Conditional_7_Template, 2, 2, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, TrnPlayingQuickComponent_Conditional_8_Template, 2, 0, "div", 7);
      \u0275\u0275elementStart(9, "div")(10, "ap-toggle-switch", 8);
      \u0275\u0275listener("checkedChange", function TrnPlayingQuickComponent_Template_ap_toggle_switch_checkedChange_10_listener($event) {
        return ctx.onToggleBetData($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, TrnPlayingQuickComponent_Conditional_11_Template, 1, 3, "ap-trn-game-hint", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("getQuickTabText", ctx.getQuickTabText())("showTabEvent", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("targetTime", ctx.endTime());
      \u0275\u0275advance();
      \u0275\u0275property("currency", ctx.trn.currencySymbol())("amount", ctx.totalPrize())("isAnimated", true)("multiplierTitle", ctx.betMultiplierTitle())("multiplier", ctx.multiplier());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c08, ctx.showAllPlayerList()));
      \u0275\u0275advance();
      \u0275\u0275property("currency", ctx.trn.currencySymbol())("items", ctx.showAllPlayerList() ? ctx.playerListAll() : ctx.playerListPart())("showDividers", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.playerListAll().length > 5 ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isPlayersListLoading() ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.isBetDataToggleEnabled())("checked", ctx.isBetData());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showHint() ? 11 : -1);
    }
  }, dependencies: [ApTrnFloatCountdownComponent, ApTrnCardBonusComponent, ApTrnListRowComponent, CommonModule, NgClass, ApButtonComponent, ApLoadingOverlayComponent, ApToggleSwitchComponent, ApTrnGameHintComponent, ApTrnTabComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrnPlayingQuickComponent, [{
    type: Component,
    args: [{ selector: "trn-playing-quick", imports: [ApTrnFloatCountdownComponent, ApTrnCardBonusComponent, ApTrnListRowComponent, CommonModule, ApButtonComponent, ApLoadingOverlayComponent, ApToggleSwitchComponent, ApTrnGameHintComponent, ApTrnTabComponent], template: `<ap-trn-tab
  selected="quick"
  [getQuickTabText]="getQuickTabText()"
  [showTabEvent]="false"
  >

  <div class="flex justify-center">
    <!-- Room \u6642\u9593\u5012\u6578 -->
    <ap-trn-float-countdown [targetTime]="endTime()" variant="quick" />
  </div>

  <!-- \u734E\u9805 -->
  <ap-trn-card-bonus
    [currency]="trn.currencySymbol()"
    [amount]="totalPrize()"
    [isAnimated]="true"
    variant="quick"
    [multiplierTitle]="betMultiplierTitle()"
    [multiplier]="multiplier()"
  />

  <!-- \u73A9\u5BB6\u5217\u8868 -->
  <div class="relative w-full max-w-xs">
    <div
      class="overflow-y-auto scrollbar-thin"
      [ngClass]="{ 'max-h-64': showAllPlayerList() }"
    >
      <ap-trn-list-row
        [currency]="trn.currencySymbol()"
        class="min-h-16"
        [items]="showAllPlayerList() ? playerListAll() : playerListPart()"
        [showDividers]="false"
        variant="quick"
      />
    </div>

    <!-- Toggle List Button -->
    @if (playerListAll().length > 5) {
      <div class="flex justify-center">
        <ap-button
          class="-translate-y-1/3 opacity-70 hover:opacity-100 transition-opacity"
          variant="outlined-rounded"
          [icon]="'x-mark'"
          [icon]="showAllPlayerList() ? 'arrow-up' : 'arrow-down'"
          accentColor="yellow"
          (click)="showAllPlayerList.set(!showAllPlayerList())"
        />
      </div>
    }
  </div>

  @if (isPlayersListLoading()) {
    <div class="absolute inset-0 bg-black/50">
      <ap-loading-overlay class="size-full" />
    </div>
  }

  <div>
    <!-- \u5207\u63DBBetData\u958B\u95DC -->
    <ap-toggle-switch
      accentColor="yellow"
      [disabled]="!isBetDataToggleEnabled()"
      [checked]="isBetData()"
      (checkedChange)="onToggleBetData($event)"
    />

    <!-- Popup notification -->
    @if (showHint()) {
      <ap-trn-game-hint
        class="absolute"
        [title]="getBetTitle()"
        [message]="getQuickMessage()"
        [multiplier]="trn.currentBetMultiplier()"
        variant="quick"
        (close)="showHint.set(false)"
      />
    }
  </div>
</ap-trn-tab>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrnPlayingQuickComponent, { className: "TrnPlayingQuickComponent", filePath: "src/app/pages/trn-playing-quick/trn-playing-quick.component.ts", lineNumber: 27 });
})();

// src/app/pages/trn-playing-event/trn-playing-event.component.ts
var _c09 = (a0) => ({ "max-h-64": a0 });
function TrnPlayingEventComponent_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "ap-button", 19);
    \u0275\u0275listener("click", function TrnPlayingEventComponent_Conditional_3_Conditional_12_Template_ap_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAllPlayerList.set(!ctx_r1.showAllPlayerList()));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", "x-mark")("icon", ctx_r1.showAllPlayerList() ? "arrow-up" : "arrow-down");
  }
}
function TrnPlayingEventComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "ap-loading-overlay", 20);
    \u0275\u0275elementEnd();
  }
}
function TrnPlayingEventComponent_Conditional_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-game-hint", 21);
    \u0275\u0275listener("close", function TrnPlayingEventComponent_Conditional_3_Conditional_16_Template_ap_trn_game_hint_close_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showHint.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r1.getBetTitle())("message", ctx_r1.getEventMessage())("multiplier", ctx_r1.trn.currentBetMultiplier());
  }
}
function TrnPlayingEventComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "ap-trn-float-countdown", 10);
    \u0275\u0275listener("onComplete", function TrnPlayingEventComponent_Conditional_3_Template_ap_trn_float_countdown_onComplete_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMatchTimeout());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "ap-trn-card-bonus", 11);
    \u0275\u0275elementStart(9, "div", 12)(10, "div", 13);
    \u0275\u0275element(11, "ap-trn-list-row", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, TrnPlayingEventComponent_Conditional_3_Conditional_12_Template, 2, 2, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, TrnPlayingEventComponent_Conditional_3_Conditional_13_Template, 2, 0, "div", 15);
    \u0275\u0275elementStart(14, "div")(15, "ap-toggle-switch", 16);
    \u0275\u0275listener("checkedChange", function TrnPlayingEventComponent_Conditional_3_Template_ap_toggle_switch_checkedChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleBetData($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, TrnPlayingEventComponent_Conditional_3_Conditional_16_Template, 1, 3, "ap-trn-game-hint", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ap-button", 18);
    \u0275\u0275listener("clicked", function TrnPlayingEventComponent_Conditional_3_Template_ap_button_clicked_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClickExit());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = ctx_r1.trnData()) == null ? null : tmp_1_0.name) ?? ctx_r1.getEventTabText(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("targetTime", ctx_r1.endTime());
    \u0275\u0275advance();
    \u0275\u0275property("currency", ctx_r1.trn.currencySymbol())("amount", ctx_r1.prize())("isAnimated", true)("multiplierTitle", ctx_r1.betMultiplierTitle())("multiplier", ctx_r1.multiplier());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c09, ctx_r1.showAllPlayerList()));
    \u0275\u0275advance();
    \u0275\u0275property("currency", ctx_r1.trn.currencySymbol())("items", ctx_r1.showAllPlayerList() ? ctx_r1.playerListAll() : ctx_r1.playerListPart())("showDividers", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.playerListAll().length > 5 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isPlayersListLoading() ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.isBetDataToggleEnabled())("checked", ctx_r1.isBetDataEnabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showHint() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isExitDisabled())("label", ctx_r1.getExitButton())("accentColor", "zinc")("size", "small");
  }
}
function TrnPlayingEventComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "ap-button", 19);
    \u0275\u0275listener("click", function TrnPlayingEventComponent_Conditional_4_Conditional_7_Template_ap_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAllPlayerList.set(!ctx_r1.showAllPlayerList()));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", "x-mark")("icon", ctx_r1.showAllPlayerList() ? "arrow-up" : "arrow-down");
  }
}
function TrnPlayingEventComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "ap-loading-overlay", 20);
    \u0275\u0275elementEnd();
  }
}
function TrnPlayingEventComponent_Conditional_4_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-game-hint", 21);
    \u0275\u0275listener("close", function TrnPlayingEventComponent_Conditional_4_Conditional_11_Template_ap_trn_game_hint_close_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showHint.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r1.getBetTitle())("message", ctx_r1.getEventMessage())("multiplier", ctx_r1.trn.currentBetMultiplier());
  }
}
function TrnPlayingEventComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-tab", 3)(1, "div", 9)(2, "ap-trn-float-countdown", 10);
    \u0275\u0275listener("onComplete", function TrnPlayingEventComponent_Conditional_4_Template_ap_trn_float_countdown_onComplete_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMatchTimeout());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "ap-trn-card-bonus", 11);
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 13);
    \u0275\u0275element(6, "ap-trn-list-row", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TrnPlayingEventComponent_Conditional_4_Conditional_7_Template, 2, 2, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, TrnPlayingEventComponent_Conditional_4_Conditional_8_Template, 2, 0, "div", 15);
    \u0275\u0275elementStart(9, "div")(10, "ap-toggle-switch", 16);
    \u0275\u0275listener("checkedChange", function TrnPlayingEventComponent_Conditional_4_Template_ap_toggle_switch_checkedChange_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleBetData($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, TrnPlayingEventComponent_Conditional_4_Conditional_11_Template, 1, 3, "ap-trn-game-hint", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ap-button", 18);
    \u0275\u0275listener("clicked", function TrnPlayingEventComponent_Conditional_4_Template_ap_button_clicked_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClickExit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("getEventTabText", ctx_r1.getEventTabText())("showTabQuick", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("targetTime", ctx_r1.endTime());
    \u0275\u0275advance();
    \u0275\u0275property("currency", ctx_r1.trn.currencySymbol())("amount", ctx_r1.prize())("isAnimated", true)("multiplierTitle", ctx_r1.betMultiplierTitle())("multiplier", ctx_r1.multiplier());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c09, ctx_r1.showAllPlayerList()));
    \u0275\u0275advance();
    \u0275\u0275property("currency", ctx_r1.trn.currencySymbol())("items", ctx_r1.showAllPlayerList() ? ctx_r1.playerListAll() : ctx_r1.playerListPart())("showDividers", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.playerListAll().length > 5 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isPlayersListLoading() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.isBetDataToggleEnabled())("checked", ctx_r1.isBetDataEnabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showHint() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isExitDisabled())("label", ctx_r1.getExitButton())("accentColor", "zinc")("size", "small");
  }
}
var TrnPlayingEventComponent = class _TrnPlayingEventComponent {
  appI18n = inject(AppI18nService);
  trn = inject(TrnCtrlService);
  wallet = inject(PlayerWalletService);
  game = inject(GameIframeCtrlService);
  api = inject(AppInterfaceService);
  getEventTabText = this.appI18n.computed("EventRace_Tab", "EVENT");
  getBetTitle = this.appI18n.computed("BetBoost", "BET");
  betMultiplierTitle = this.appI18n.computed("BetBoost", "BET");
  getExitButton = this.appI18n.computed("Exit_Btn", "EXIT");
  getEventMessage = computed(() => {
    const isEnabled = this.trn.currentBetMultiplier() > 1;
    const key = isEnabled ? "BetToggleOn_Tip" : "BetToggleOff_Tip";
    const fallback = isEnabled ? "Enable Tournament Bet" : "Disable Tournament Bet";
    return this.appI18n.instant(key, fallback);
  });
  storage = inject(StorageCtrlService);
  /** 目前的長期競賽資料 */
  trnData = computed(() => this.trn.betDataTrn());
  /** 是否使用 BetData */
  isBetDataEnabled = computed(() => {
    return this.wallet.trnData() !== null;
  });
  /** 結束時間 (Unix timestamp 豪秒) */
  endTime = signal(null);
  /** 玩家列表載入中 */
  isPlayersListLoading = signal(false);
  /** 玩家列表 */
  playerListAll = signal([]);
  /** 顯示完整玩家列表 */
  showAllPlayerList = signal(false);
  /** 顯示切換Enable Bet提示 */
  showHint = signal(false);
  /** 確認版面用-切換新舊版面 */
  useNewLayout = signal(true);
  /** 總獎金 */
  prize = signal(null);
  /** 下注倍率 */
  multiplier = signal(1);
  /** 是否允許離開競賽 */
  isExitDisabled = computed(() => this.game.status() !== "Idle");
  /** Toggle能不能作用 */
  isBetDataToggleEnabled = computed(() => this.game.status() === "Idle");
  /** 存到 Storage 的長期競賽狀態 */
  storageEventRunning = computed(() => {
    return { id: this.trn.betDataTrnId(), betDataEnabled: this.isBetDataEnabled() };
  });
  destroy$ = new Subject();
  updateInterval;
  /** 退出競賽事件 */
  exitLeave = output();
  /** 競賽時間到事件 */
  matchTimeout = output();
  constructor() {
    effect(() => {
      if (this.trnData()?.status !== "running") {
        this.trn.closeEventRace();
      }
    });
  }
  ngOnInit() {
    this.trn.eventRaceUpdated$.pipe(takeUntil(this.destroy$)).subscribe(this.onStatusUpdate.bind(this));
    this.game.readyForSpin$.pipe(takeUntil(this.destroy$)).subscribe(this.sendRankingRequest.bind(this));
    this.playerListAll.set(this.trn.eventPlayerList());
    this.endTime.set(this.trn.eventEndedTime());
    this.prize.set(this.trn.eventPrize());
    this.multiplier.set(this.trn.betDataMultiplier());
    this.updateInterval = interval(1e4).subscribe(this.sendRankingRequest.bind(this));
    this.storage.trnEventRunning = this.storageEventRunning();
  }
  ngOnDestroy() {
    this.updateInterval?.unsubscribe();
    this.storage.trnEventRunning = null;
    this.destroy$.next();
    this.destroy$.complete();
  }
  onClickExit() {
    this.exitLeave.emit();
  }
  onMatchTimeout() {
    this.matchTimeout.emit();
  }
  /** 遊戲中片段顯示的玩家列表 */
  playerListPart = computed(() => {
    const highlightIndex = this.playerListAll().findIndex((item) => item.highlighted);
    if (highlightIndex === -1 || highlightIndex < 4) {
      return this.playerListAll().slice(0, 5);
    } else {
      const start = Math.max(0, highlightIndex - 4);
      const end = Math.min(this.playerListAll().length, highlightIndex + 1);
      return this.playerListAll().slice(start, end);
    }
  });
  sendRankingRequest() {
    this.trn.sendEventRanking(this.trn.betDataTrn()?.id || "");
  }
  onToggleBetData(enable) {
    this.showHint.set(true);
    this.trn.enableBetData(enable);
    if (!enable) {
      this.storage.trnEventRunning = null;
    }
  }
  onStatusUpdate(status) {
    this.playerListAll.set(status.playersList);
    this.prize.set(status.currentPool || null);
  }
  static \u0275fac = function TrnPlayingEventComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrnPlayingEventComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrnPlayingEventComponent, selectors: [["trn-playing-event"]], outputs: { exitLeave: "exitLeave", matchTimeout: "matchTimeout" }, decls: 5, vars: 2, consts: [[1, "relative"], [1, "absolute", "-top-1", "-right-1", "z-10", "size-5", "flex", "items-center", "justify-center", "rounded-full", "bg-zinc-700/80", "hover:bg-zinc-600", "text-zinc-300", "hover:text-white", "transition-colors", 3, "click", "title"], ["name", "arrows-right-left", 1, "size-3"], ["selected", "event", 3, "getEventTabText", "showTabQuick"], [1, "top-0", "left-0", "flex", "relative"], [1, "px-2", "py-[3px]", "bg-black/80", "border-2", "border-b-0", "rounded-t-xl", "w-44", "text-center", "font-anton", "text-2xl", "tracking-[0.5px]"], [1, "tracking-wideduration-200", "border-purple-300", "text-purple-gradient"], [1, "relative", "w-44", "min-h-auto", "bg-black/80", "border-2", "rounded-b-lg", "cursor-pointer", "border-purple-300"], [1, "duration-200", "pt-1", "pb-2", "flex", "flex-col", "items-center", "gap-1"], [1, "flex", "justify-center"], ["variant", "event", 3, "onComplete", "targetTime"], ["variant", "event", 3, "currency", "amount", "isAnimated", "multiplierTitle", "multiplier"], [1, "relative", "w-full", "max-w-xs"], [1, "overflow-y-auto", "scrollbar-thin", 3, "ngClass"], ["variant", "event", 1, "min-h-16", 3, "currency", "items", "showDividers"], [1, "absolute", "inset-0", "bg-black/50"], ["accentColor", "purple", 3, "checkedChange", "disabled", "checked"], ["variant", "event", 1, "absolute", 3, "title", "message", "multiplier"], [1, "w-[85%]", "mt-2", "opacity-65", 3, "clicked", "disabled", "label", "accentColor", "size"], ["variant", "outlined-rounded", "accentColor", "purple", 1, "-translate-y-1/3", "opacity-70", "hover:opacity-100", "transition-opacity", 3, "click", "icon"], [1, "size-full"], ["variant", "event", 1, "absolute", 3, "close", "title", "message", "multiplier"]], template: function TrnPlayingEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function TrnPlayingEventComponent_Template_button_click_1_listener() {
        return ctx.useNewLayout.set(!ctx.useNewLayout());
      });
      \u0275\u0275element(2, "ap-icon", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(3, TrnPlayingEventComponent_Conditional_3_Template, 18, 22)(4, TrnPlayingEventComponent_Conditional_4_Template, 13, 23, "ap-trn-tab", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.useNewLayout() ? "\u78BA\u8A8D\u7248\u9762\u7528 - \u5207\u63DB\u5230\u539F\u672C\u6A23\u5F0F" : "\u78BA\u8A8D\u7248\u9762\u7528 - \u5207\u63DB\u5230\u4EE5\u6D3B\u52D5\u540D\u7A31\u986F\u793A");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.useNewLayout() ? 3 : 4);
    }
  }, dependencies: [ApTrnFloatCountdownComponent, ApTrnCardBonusComponent, CommonModule, NgClass, ApTrnListRowComponent, ApButtonComponent, ApLoadingOverlayComponent, ApTrnTabComponent, ApToggleSwitchComponent, ApTrnGameHintComponent, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrnPlayingEventComponent, [{
    type: Component,
    args: [{ selector: "trn-playing-event", imports: [ApTrnFloatCountdownComponent, ApTrnCardBonusComponent, CommonModule, ApTrnListRowComponent, ApButtonComponent, ApLoadingOverlayComponent, ApTrnTabComponent, ApToggleSwitchComponent, ApTrnGameHintComponent, ApIconComponent], template: `<div class="relative">
  <!-- \u78BA\u8A8D\u7248\u9762\u7528 - \u7248\u9762\u5207\u63DB\u6309\u9215 -->
  <button
    class="absolute -top-1 -right-1 z-10 size-5 flex items-center justify-center rounded-full bg-zinc-700/80 hover:bg-zinc-600 text-zinc-300 hover:text-white transition-colors"
    (click)="useNewLayout.set(!useNewLayout())"
    [title]="useNewLayout() ? '\u78BA\u8A8D\u7248\u9762\u7528 - \u5207\u63DB\u5230\u539F\u672C\u6A23\u5F0F' : '\u78BA\u8A8D\u7248\u9762\u7528 - \u5207\u63DB\u5230\u4EE5\u6D3B\u52D5\u540D\u7A31\u986F\u793A'"
  >
    <ap-icon name="arrows-right-left" class="size-3" />
  </button>
</div>

@if (useNewLayout()){
  <!-- New - \u7528\u6D3B\u52D5\u540D\u7A31\u986F\u793A-->
<div class="top-0 left-0 flex relative">
  <div class="px-2 py-[3px] bg-black/80 border-2 border-b-0 rounded-t-xl w-44 text-center font-anton text-2xl tracking-[0.5px]">
    <div class="tracking-wideduration-200 border-purple-300 text-purple-gradient">
    {{ trnData()?.name ?? getEventTabText() }}
  </div>
  </div>
</div> 

<div class="relative w-44 min-h-auto bg-black/80 border-2 rounded-b-lg cursor-pointer border-purple-300">
  <div class="duration-200 pt-1 pb-2 flex flex-col items-center gap-1">
  <div class="flex justify-center">
    <!-- Room \u6642\u9593\u5012\u6578 -->
    <ap-trn-float-countdown
      [targetTime]="endTime()"
      variant="event"
      (onComplete)="onMatchTimeout()"
    />
  </div>

  <!-- \u734E\u9805 -->
  <ap-trn-card-bonus
    [currency]="trn.currencySymbol()"
    [amount]="prize()"
    [isAnimated]="true"
    variant="event"
    [multiplierTitle]="betMultiplierTitle()"
    [multiplier]="multiplier()"
  />

  <!-- \u73A9\u5BB6\u5217\u8868 -->
  <div class="relative w-full max-w-xs">
    <div
      class="overflow-y-auto scrollbar-thin"
      [ngClass]="{ 'max-h-64': showAllPlayerList() }"
    >
      <ap-trn-list-row
        class="min-h-16"
        [currency]="trn.currencySymbol()"
        [items]="showAllPlayerList() ? playerListAll() : playerListPart()"
        [showDividers]="false"
        variant="event"
      />
    </div>

    <!-- Toggle List Button -->
    @if (playerListAll().length > 5) {
      <div class="flex justify-center">
        <ap-button
          class="-translate-y-1/3 opacity-70 hover:opacity-100 transition-opacity"
          variant="outlined-rounded"
          [icon]="'x-mark'"
          [icon]="showAllPlayerList() ? 'arrow-up' : 'arrow-down'"
          accentColor="purple"
          (click)="showAllPlayerList.set(!showAllPlayerList())"
        />
      </div>
    }
  </div>
    @if (isPlayersListLoading()) {
      <div class="absolute inset-0 bg-black/50">
        <ap-loading-overlay class="size-full" />
      </div>  
    }
  <div>
    <!-- \u5207\u63DBBetData\u958B\u95DC -->
    <ap-toggle-switch
      accentColor="purple"
      [disabled]="!isBetDataToggleEnabled()"
      [checked]="isBetDataEnabled()"
      (checkedChange)="onToggleBetData($event);"
    />

    <!-- Popup notification -->
    @if (showHint()) {
      <ap-trn-game-hint
        class="absolute"
        [title]="getBetTitle()"
        [message]="getEventMessage()"
        [multiplier]="trn.currentBetMultiplier()"
        variant="event"
        (close)="showHint.set(false)"
      />
    }
  </div>

  <!-- Exit Button - only show for event tab after game starting -->
  <ap-button
    class="w-[85%] mt-2 opacity-65"
    [disabled]="isExitDisabled()"
    [label]="getExitButton()"
    [accentColor]="'zinc'"
    [size]="'small'"
    (clicked)="onClickExit()"
  />
  </div>
  </div>
} @else {
  <!-- Old - \u7528 ap-trn-tab \u63A7\u5236\u986F\u793A\u540D\u7A31-->
  <ap-trn-tab
  selected="event"
  [getEventTabText]="getEventTabText()"
  [showTabQuick]="false"
>
  <div class="flex justify-center">
    <!-- Room \u6642\u9593\u5012\u6578 -->
    <ap-trn-float-countdown
      [targetTime]="endTime()"
      variant="event"
      (onComplete)="onMatchTimeout()"
    />
  </div>

  <!-- \u734E\u9805 -->
  <ap-trn-card-bonus
    [currency]="trn.currencySymbol()"
    [amount]="prize()"
    [isAnimated]="true"
    variant="event"
    [multiplierTitle]="betMultiplierTitle()"
    [multiplier]="multiplier()"
  />

  <!-- \u73A9\u5BB6\u5217\u8868 -->
  <div class="relative w-full max-w-xs">
    <div
      class="overflow-y-auto scrollbar-thin"
      [ngClass]="{ 'max-h-64': showAllPlayerList() }"
    >
      <ap-trn-list-row
        class="min-h-16"
        [currency]="trn.currencySymbol()"
        [items]="showAllPlayerList() ? playerListAll() : playerListPart()"
        [showDividers]="false"
        variant="event"
      />
    </div>

    <!-- Toggle List Button -->
    @if (playerListAll().length > 5) {
      <div class="flex justify-center">
        <ap-button
          class="-translate-y-1/3 opacity-70 hover:opacity-100 transition-opacity"
          variant="outlined-rounded"
          [icon]="'x-mark'"
          [icon]="showAllPlayerList() ? 'arrow-up' : 'arrow-down'"
          accentColor="purple"
          (click)="showAllPlayerList.set(!showAllPlayerList())"
        />
      </div>
    }
  </div>
    @if (isPlayersListLoading()) {
      <div class="absolute inset-0 bg-black/50">
        <ap-loading-overlay class="size-full" />
      </div>  
    }
  <div>
    <!-- \u5207\u63DBBetData\u958B\u95DC -->
    <ap-toggle-switch
      accentColor="purple"
      [disabled]="!isBetDataToggleEnabled()"
      [checked]="isBetDataEnabled()"
      (checkedChange)="onToggleBetData($event);"
    />

    <!-- Popup notification -->
    @if (showHint()) {
      <ap-trn-game-hint
        class="absolute"
        [title]="getBetTitle()"
        [message]="getEventMessage()"
        [multiplier]="trn.currentBetMultiplier()"
        variant="event"
        (close)="showHint.set(false)"
      />
    }
  </div>

  <!-- Exit Button - only show for event tab after game starting -->
  <ap-button
    class="w-[85%] mt-2 opacity-65"
    [disabled]="isExitDisabled()"
    [label]="getExitButton()"
    [accentColor]="'zinc'"
    [size]="'small'"
    (clicked)="onClickExit()"
  />
  </ap-trn-tab>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrnPlayingEventComponent, { className: "TrnPlayingEventComponent", filePath: "src/app/pages/trn-playing-event/trn-playing-event.component.ts", lineNumber: 28 });
})();

// src/app/pages/trn-all/trn-all.component.ts
var _c010 = (a0) => ({ "-ml-56": a0 });
var _c16 = (a0) => ({ "-ml-28": a0 });
var _c26 = () => [];
function TrnAllComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "trn-idle", 13);
    \u0275\u0275listener("clickTab", function TrnAllComponent_Conditional_0_Conditional_1_Template_trn_idle_clickTab_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClickTab($event));
    })("clickOpenList", function TrnAllComponent_Conditional_0_Conditional_1_Template_trn_idle_clickOpenList_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOpenEventPopup());
    })("openConfirm", function TrnAllComponent_Conditional_0_Conditional_1_Template_trn_idle_openConfirm_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.confirmVariant.set($event.variant);
      ctx_r2.selectedEventTrn.set($event.event);
      return \u0275\u0275resetView(ctx_r2.showConfirmPopup.set(true));
    })("onClose", function TrnAllComponent_Conditional_0_Conditional_1_Template_trn_idle_onClose_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showEventPopup.set(false));
    })("selectedEvent", function TrnAllComponent_Conditional_0_Conditional_1_Template_trn_idle_selectedEvent_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEventPopupSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("windowOpened", ctx_r2.showWindow())("selectedTab", ctx_r2.themeType())("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("header", ctx_r2.getPopupHeader());
  }
}
function TrnAllComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "trn-matching");
  }
}
function TrnAllComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "trn-playing-quick");
  }
}
function TrnAllComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "trn-playing-event", 14);
    \u0275\u0275listener("exitLeave", function TrnAllComponent_Conditional_0_Conditional_4_Template_trn_playing_event_exitLeave_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showExitPopup.set(true));
    })("matchTimeout", function TrnAllComponent_Conditional_0_Conditional_4_Template_trn_playing_event_matchTimeout_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEventMatchTimeout());
    });
    \u0275\u0275elementEnd();
  }
}
function TrnAllComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "ap-icon", 15);
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.progressLabel());
  }
}
function TrnAllComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, TrnAllComponent_Conditional_0_Conditional_1_Template, 1, 9, "trn-idle", 9);
    \u0275\u0275conditionalCreate(2, TrnAllComponent_Conditional_0_Conditional_2_Template, 1, 0, "trn-matching");
    \u0275\u0275conditionalCreate(3, TrnAllComponent_Conditional_0_Conditional_3_Template, 1, 0, "trn-playing-quick");
    \u0275\u0275conditionalCreate(4, TrnAllComponent_Conditional_0_Conditional_4_Template, 1, 0, "trn-playing-event");
    \u0275\u0275conditionalCreate(5, TrnAllComponent_Conditional_0_Conditional_5_Template, 4, 1, "div", 10);
    \u0275\u0275elementStart(6, "ap-button", 11);
    \u0275\u0275listener("click", function TrnAllComponent_Conditional_0_Template_ap_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showWindow.set(false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ap-trn-float-button", 12);
    \u0275\u0275listener("click", function TrnAllComponent_Conditional_0_Template_ap_trn_float_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showWindow.set(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c010, !ctx_r2.showWindow()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage() === "idle" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage() === "matching" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage() === "playing-quick" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentPage() === "playing-event" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showWaitingResult() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("accentColor", ctx_r2.themeType() === "quick" ? "yellow" : "purple")("icon", "chevron-left default")("variant", "content-rounded");
    \u0275\u0275advance();
    \u0275\u0275property("rank", ctx_r2.userRank())("ngClass", \u0275\u0275pureFunction1(15, _c16, ctx_r2.showWindow()))("isPlaying", ctx_r2.isPlaying())("accentColor", ctx_r2.themeType() === "quick" ? "yellow" : "purple");
  }
}
function TrnAllComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-event-selection", 17);
    \u0275\u0275listener("onClose", function TrnAllComponent_Conditional_1_Template_ap_trn_event_selection_onClose_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showEventPopup.set(false));
    })("selectedEvent", function TrnAllComponent_Conditional_1_Template_ap_trn_event_selection_selectedEvent_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEventPopupSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("getCountdownStartTitle", ctx_r2.getCountdownStartTitle())("getCountdownEndTitle", ctx_r2.getCountdownEndTitle())("getDaysLabel", ctx_r2.getDaysLabel())("getHoursLabel", ctx_r2.getHoursLabel())("getMinutesLabel", ctx_r2.getMinutesLabel())("getSecondsLabel", ctx_r2.getSecondsLabel())("header", ctx_r2.getPopupHeader())("trnList", ctx_r2.trn.trnEventRunningList() || \u0275\u0275pureFunction0(8, _c26));
  }
}
function TrnAllComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-game-starting", 18);
    \u0275\u0275listener("close", function TrnAllComponent_Conditional_2_Template_ap_trn_game_starting_close_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showGameStarting.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("message", ctx_r2.getGameStarting())("accentColor", ctx_r2.themeType() === "quick" ? "yellow" : "purple");
  }
}
function TrnAllComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "trn-game-confirm", 19);
    \u0275\u0275listener("close", function TrnAllComponent_Conditional_4_Template_trn_game_confirm_close_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showConfirmPopup.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("accentColor", ctx_r2.themeType() === "quick" ? "yellow" : "purple")("header", ctx_r2.getConfirmHeader())("selectedEvent", ctx_r2.confirmVariant() === "event" ? ctx_r2.selectedEventTrn() : ctx_r2.trn.trnQuick());
  }
}
function TrnAllComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-game-match-finished", 20);
    \u0275\u0275listener("onClose", function TrnAllComponent_Conditional_5_Template_ap_trn_game_match_finished_onClose_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCloseMatchFinished());
    })("onConfirm", function TrnAllComponent_Conditional_5_Template_ap_trn_game_match_finished_onConfirm_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCloseMatchFinished());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("accentColor", ctx_r2.themeType() === "quick" ? "yellow" : "purple")("header", ctx_r2.getHeaderFinished())("getQuickTitle", ctx_r2.getQuickTitle())("getEventTitle", ctx_r2.getEventTitle())("getConfirmButtonText", ctx_r2.getConfirmButtonText());
  }
}
function TrnAllComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-trn-game-result", 21);
    \u0275\u0275listener("clickClose", function TrnAllComponent_Conditional_6_Template_ap_trn_game_result_clickClose_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showGameResult.set(false));
    })("clickConfirm", function TrnAllComponent_Conditional_6_Template_ap_trn_game_result_clickConfirm_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClickResultConfirm(ctx_r2.resultNotificationId()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("getEventTitle", ctx_r2.getEventTitle())("getQuickTitle", ctx_r2.getQuickTitle())("header", ctx_r2.getPopupResultHeader())("getPrizeLabel", ctx_r2.getPrizeLabel())("getButtonLabel", ctx_r2.getButtonLabel())("getEventDetailsButtonText", ctx_r2.getEventDetailsButtonText())("currency", ctx_r2.trn.currencySymbol())("accentColor", ctx_r2.resultTheme())("playList", ctx_r2.resultListPart())("rank", ctx_r2.resultRank())("prize", ctx_r2.resultPrize() || 0);
  }
}
function TrnAllComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "trn-game-event-leave-confirm", 22);
    \u0275\u0275listener("close", function TrnAllComponent_Conditional_7_Template_trn_game_event_leave_confirm_close_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showExitPopup.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("selectedEvent", ctx_r2.trn.betDataTrn());
  }
}
var TrnAllComponent = class _TrnAllComponent {
  appI18n = inject(AppI18nService);
  wallet = inject(PlayerWalletService);
  trn = inject(TrnCtrlService);
  api = inject(AppInterfaceService);
  getGameStarting = this.appI18n.computed("GameStart_Banner", "Game Start!");
  getStatusModeBar = this.appI18n.computed("BetOn_Header", "Quick Race Mode");
  getConfirmHeader = this.appI18n.computed("JoinMessage_Title", "Message");
  getPopupHeader = this.appI18n.computed("Tournament_EventCenter_Tab", "Event Selection");
  getCountdownStartTitle = this.appI18n.computed("StartIn_Tip", "Start in");
  getCountdownEndTitle = this.appI18n.computed("EndIn_Tip", "End in");
  getDaysLabel = this.appI18n.computed("DAYS", "DAYS");
  getHoursLabel = this.appI18n.computed("HRS", "HRS");
  getMinutesLabel = this.appI18n.computed("MINS", "MINS");
  getSecondsLabel = this.appI18n.computed("SECS", "SECS");
  getPopupResultHeader = this.appI18n.computed("GameResult_Title", "Game Result");
  getEventDetailsButtonText = this.appI18n.computed("GameResult_DetailLink", "Event details");
  getPrizeLabel = this.appI18n.computed("Prizes_EventDetailTab", "Prize");
  getButtonLabel = this.appI18n.computed("OK_Btn", "Confirm");
  getQuickTitle = this.appI18n.computed("QuickRace_Tab", "QUICK");
  getEventTitle = this.appI18n.computed("EventRace_Tab", "EVENT");
  getConfirmButtonText = this.appI18n.computed("OK_Btn", "Confirm");
  getHeaderFinished = this.appI18n.computed("Finished_Tag", "Match Finished");
  progressLabel = this.appI18n.computed("MatchFinished_Progress", "Calculating results...");
  /** 顯示主畫面 */
  showWindow = signal(false);
  destroy$ = new Subject();
  /** 主畫面主題 */
  themeType = signal("quick");
  /** 顯示主畫面 */
  showMainPanel = computed(() => {
    return this.trn.showMainPanel();
  });
  /** 目前選擇的長期競賽 */
  selectedEventTrn = signal(null);
  /** 顯示賽事選擇視窗 */
  showEventPopup = signal(false);
  /** 追蹤 trn-idle 內部的 showEventSelection 狀態 */
  showEventSelection = signal(false);
  /** 顯示完整玩家列表 */
  showAllPlayerList = signal(false);
  /** 顯示遊戲開始動畫 */
  showGameStarting = signal(false);
  /** 顯示彈出確認視窗 */
  showConfirmPopup = signal(false);
  /** Quick 或 Event 競賽確認視窗的類型 */
  confirmVariant = signal("event");
  /** 顯示配對結束畫面 */
  showMatchFinished = signal(false);
  /** 顯示退出競賽視窗 */
  showExitPopup = signal(false);
  /** Event 是否因時間到結束 */
  isEventTimeoutEnded = signal(false);
  /** 顯示等待結果中 */
  showWaitingResult = signal(false);
  /** 顯示上方狀態列 */
  showStatusBar = computed(() => {
    return this.wallet.trnSetting() ? true : this.debugShowStatusBar();
  });
  /** 顯示啟動提示訊息 */
  showHint = signal(false);
  /** 顯示遊戲結果 */
  showGameResult = signal(false);
  /** 結果主題 */
  resultTheme = signal("quick");
  /** 結果倍率 */
  resultMultiplier = signal(1);
  /** 獎金結果 */
  resultPrize = signal(0);
  /** 遊戲結果完整列表 */
  resultListAll = signal(defaultPlayersList.slice(0, 20));
  /** 遊戲結果使用者排名 */
  resultRank = signal(null);
  /** 遊戲結果通知ID */
  resultNotificationId = signal("");
  /** 目前頁面 */
  currentPage = signal("idle");
  /** 目前使用者的排名 */
  userRank = computed(() => {
    return this.themeType() === "quick" ? this.trn.roomRank() : null;
  });
  /** 是否啟用 BetData */
  isBetDataEnabled = computed(() => {
    return this.wallet.trnData() !== null;
  });
  /** 是否正在遊玩 */
  isPlaying = computed(() => {
    return this.trn.status() === "playing-quick" || this.trn.status() === "playing-event";
  });
  /** 測試用: 顯示上方狀態列 */
  debugShowStatusBar = signal(false);
  /** 控制用的signal*/
  signalList = [
    { key: "game-starting", signal: this.showGameStarting },
    { key: "confirm-popup", signal: this.showConfirmPopup },
    { key: "event-popup", signal: this.showEventPopup },
    { key: "match-finished", signal: this.showMatchFinished },
    { key: "status-bar", signal: this.debugShowStatusBar },
    { key: "game-result", signal: this.showGameResult },
    { key: "waiting-result", signal: this.showWaitingResult }
  ];
  // injected services
  storage = inject(StorageCtrlService);
  constructor() {
    effect(() => {
      if (this.currentPage() === "matching")
        this.themeType.set("quick");
      else if (this.currentPage() === "playing-quick")
        this.themeType.set("quick");
      else if (this.currentPage() === "playing-event")
        this.themeType.set("event");
    });
  }
  ngOnInit() {
    this.trn.roomMatching$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomMatching.bind(this));
    this.trn.roomReady$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomReady.bind(this));
    this.trn.roomEnding$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomEnding.bind(this));
    this.trn.roomCancelled$.pipe(takeUntil(this.destroy$)).subscribe(this.onRoomCancelled.bind(this));
    this.trn.eventRaceReady$.pipe(takeUntil(this.destroy$)).subscribe(this.onEventReady.bind(this));
    this.trn.eventRaceEnded$.pipe(takeUntil(this.destroy$)).subscribe(this.onEventEnded.bind(this));
    this.trn.prizeNotification$.pipe(takeUntil(this.destroy$)).subscribe(this.onPrizeNotification.bind(this));
    this.trn.error$.pipe(takeUntil(this.destroy$)).subscribe(this.onError.bind(this));
    this.trn.debugPage$.pipe(takeUntil(this.destroy$)).subscribe(this.onDebugPage.bind(this));
    this.trn.debugSignal$.pipe(takeUntil(this.destroy$)).subscribe(this.onDebugSignal.bind(this));
    if (this.trn.status() === "matching-quick") {
      this.showWindow.set(true);
      this.trn.enableBetListLimit(true);
      this.currentPage.set("matching");
    }
    if (this.trn.status() === "playing-quick") {
      this.showWindow.set(true);
      this.trn.enableBetData(true);
      this.currentPage.set("playing-quick");
    }
    if (this.trn.status() === "playing-event") {
      this.showWindow.set(true);
      this.trn.openEventRace(this.storage.trnEventRunning?.id || "");
      this.trn.enableBetData(this.storage.trnEventRunning?.betDataEnabled || false);
      this.selectedEventTrn.set(this.trn.betDataTrn());
      this.currentPage.set("playing-event");
    }
    if (this.trn.trnQuick() === null) {
      this.themeType.set("event");
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngAfterViewInit() {
    this.trn.sendPrizeRequest();
  }
  /** 遊戲結果玩家列表 */
  resultListPart = computed(() => {
    const highlightIndex = this.resultListAll().findIndex((item) => item.highlighted);
    if (highlightIndex === -1 || highlightIndex < 4) {
      return this.resultListAll().slice(0, 5);
    } else {
      const topList = this.resultListAll().slice(0, 4);
      const highlightItem = this.resultListAll()[highlightIndex];
      return topList.concat([highlightItem]);
    }
  });
  onDebugSignal(key) {
    const signalItem = this.signalList.find((item) => item.key === key);
    if (signalItem) {
      signalItem.signal.set(!signalItem.signal());
    }
  }
  onDebugPage(page) {
    this.currentPage.set(page);
  }
  onClickResultConfirm(notificationId) {
    return __async(this, null, function* () {
      this.trn.sendPrizeAck(notificationId);
      this.showGameResult.set(false);
      yield firstValueFrom(timer(100));
      this.trn.sendPrizeRequest();
    });
  }
  onEventPopupSelected(data) {
    this.selectedEventTrn.set(data);
    this.showEventPopup.set(false);
  }
  /** 房間開始配對 */
  onRoomMatching(data) {
    this.currentPage.set("matching");
  }
  /** 房間遊戲開始 */
  onRoomReady(data) {
    this.currentPage.set("playing-quick");
    this.showGameStarting.set(true);
  }
  /** 房間遊戲結束 */
  onRoomEnding(data) {
    this.showMatchFinished.set(true);
    this.currentPage.set("idle");
  }
  onRoomCancelled() {
    this.currentPage.set("idle");
  }
  /** 長期活動進入賽事介面 */
  onEventReady(data) {
    this.showGameStarting.set(true);
    this.currentPage.set("playing-event");
  }
  /** 長期活動跳出競賽介面 */
  onEventEnded() {
    if (this.isEventTimeoutEnded()) {
      this.showMatchFinished.set(true);
      this.isEventTimeoutEnded.set(false);
    }
    this.showEventPopup.set(false);
    this.currentPage.set("idle");
  }
  /** 長期活動時間到結束 */
  onEventMatchTimeout() {
    this.isEventTimeoutEnded.set(true);
    this.trn.closeEventRace();
  }
  onClickTab(tab) {
    this.themeType.set(tab);
  }
  onCloseMatchFinished() {
    this.showMatchFinished.set(false);
  }
  onOpenEventPopup() {
    this.showEventPopup.set(true);
  }
  /** 退出競賽 */
  onExitEvent() {
    this.trn.closeEventRace();
    if (this.selectedEventTrn()?.status === "running")
      return;
    const firstEvent = this.trn.trnEventRunningList()?.[0] || null;
    this.selectedEventTrn.set(firstEvent);
  }
  onPrizeNotification(data) {
    this.showGameResult.set(true);
    this.showMatchFinished.set(false);
    this.resultNotificationId.set(data.notificationId);
    this.resultListAll.set(data.playersList);
    this.resultTheme.set(data.type || "quick");
    this.resultPrize.set(data.prize);
    this.resultRank.set(data.rank);
  }
  onError(error) {
    alert(`${JSON.stringify(error)}`);
    this.currentPage.set("idle");
  }
  static \u0275fac = function TrnAllComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrnAllComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrnAllComponent, selectors: [["trn-all"]], decls: 9, vars: 11, consts: [[1, "fixed", "inset-0", 3, "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "header", "trnList"], ["setAnimation", "in", 1, "fixed", "w-full", "bottom-1/2", 3, "message", "accentColor"], [1, "fixed", "top-0", "left-0", "right-0", "duration-200", 3, "text", "multiplier", "accentColor", "ngClass"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "accentColor", "header", "selectedEvent"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "accentColor", "header", "getQuickTitle", "getEventTitle", "getConfirmButtonText"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "getEventTitle", "getQuickTitle", "header", "getPrizeLabel", "getButtonLabel", "getEventDetailsButtonText", "currency", "accentColor", "playList", "rank", "prize"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "selectedEvent"], [1, "fixed", "bottom-10", "left-10", 3, "openWindow"], [1, "absolute", "top-10", "left-4", "duration-300", "scale-85", "sm:scale-100", "origin-top-left", 3, "ngClass"], [3, "windowOpened", "selectedTab", "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "header"], [1, "w-full", "inline-flex", "items-center", "gap-1.5", "rounded-md", "bg-emerald-800/80", "px-2", "py-1", "font-bold", "text-emerald-100", "transition-all", "duration-200", "mt-1"], [1, "absolute", "-right-5", "top-26", "-translate-y-1/2", "flex", "items-center", "justify-center", "size-10", 3, "click", "accentColor", "icon", "variant"], [1, "absolute", "top-16", "left-4", "duration-300", 3, "click", "rank", "ngClass", "isPlaying", "accentColor"], [3, "clickTab", "clickOpenList", "openConfirm", "onClose", "selectedEvent", "windowOpened", "selectedTab", "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "header"], [3, "exitLeave", "matchTimeout"], ["name", "loading", 1, "size-4"], [1, "text-xs", "shadow-sm", "tracking-wide"], [1, "fixed", "inset-0", 3, "onClose", "selectedEvent", "getCountdownStartTitle", "getCountdownEndTitle", "getDaysLabel", "getHoursLabel", "getMinutesLabel", "getSecondsLabel", "header", "trnList"], ["setAnimation", "in", 1, "fixed", "w-full", "bottom-1/2", 3, "close", "message", "accentColor"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "close", "accentColor", "header", "selectedEvent"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "onClose", "onConfirm", "accentColor", "header", "getQuickTitle", "getEventTitle", "getConfirmButtonText"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "clickClose", "clickConfirm", "getEventTitle", "getQuickTitle", "header", "getPrizeLabel", "getButtonLabel", "getEventDetailsButtonText", "currency", "accentColor", "playList", "rank", "prize"], [1, "fixed", "inset-0", "animate-fade", "animate-duration-300", 3, "close", "selectedEvent"]], template: function TrnAllComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TrnAllComponent_Conditional_0_Template, 8, 17);
      \u0275\u0275conditionalCreate(1, TrnAllComponent_Conditional_1_Template, 1, 9, "ap-trn-event-selection", 0);
      \u0275\u0275conditionalCreate(2, TrnAllComponent_Conditional_2_Template, 1, 2, "ap-trn-game-starting", 1);
      \u0275\u0275element(3, "ap-trn-status-bar", 2);
      \u0275\u0275conditionalCreate(4, TrnAllComponent_Conditional_4_Template, 1, 3, "trn-game-confirm", 3);
      \u0275\u0275conditionalCreate(5, TrnAllComponent_Conditional_5_Template, 1, 5, "ap-trn-game-match-finished", 4);
      \u0275\u0275conditionalCreate(6, TrnAllComponent_Conditional_6_Template, 1, 11, "ap-trn-game-result", 5);
      \u0275\u0275conditionalCreate(7, TrnAllComponent_Conditional_7_Template, 1, 1, "trn-game-event-leave-confirm", 6);
      \u0275\u0275elementStart(8, "trn-created-notification", 7);
      \u0275\u0275listener("openWindow", function TrnAllComponent_Template_trn_created_notification_openWindow_8_listener() {
        return ctx.showWindow.set(true);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showMainPanel() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showEventPopup() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showGameStarting() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("text", ctx.getStatusModeBar())("multiplier", ctx.trn.betDataMultiplier())("accentColor", ctx.themeType() === "quick" ? "yellow" : "purple")("ngClass", ctx.showStatusBar() ? "mt-0" : "-mt-10");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showConfirmPopup() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showMatchFinished() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showGameResult() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showExitPopup() ? 7 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ApButtonComponent, ApTrnFloatButtonComponent, ApTrnGameStartingComponent, TrnGameConfirmComponent, ApTrnStatusBarComponent, ApTrnGameResultComponent, ApTrnEventSelectionComponent, ApTrnGameMatchFinished, TrnIdleComponent, TrnMatchingComponent, TrnPlayingQuickComponent, TrnPlayingEventComponent, TrnCreatedNotificationComponent, TrnGameEventLeaveConfirmComponent, ApIconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=trn-all.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrnAllComponent, [{
    type: Component,
    args: [{ selector: "trn-all", imports: [CommonModule, ApButtonComponent, ApTrnFloatButtonComponent, ApButtonComponent, ApTrnGameStartingComponent, TrnGameConfirmComponent, ApTrnStatusBarComponent, ApTrnGameResultComponent, ApTrnEventSelectionComponent, ApTrnGameMatchFinished, TrnIdleComponent, TrnMatchingComponent, TrnPlayingQuickComponent, TrnPlayingEventComponent, TrnCreatedNotificationComponent, TrnGameEventLeaveConfirmComponent, ApIconComponent], template: `@if (showMainPanel()) {
  <div
    class="absolute top-10 left-4 duration-300 scale-85 sm:scale-100 origin-top-left"
    [ngClass]="{ '-ml-56': !showWindow() }"
  >
    @if (currentPage() === "idle") {
      <trn-idle
        [windowOpened]="showWindow()"
        [selectedTab]="themeType()"
        (clickTab)="onClickTab($event)"
        (clickOpenList)="onOpenEventPopup()"
        (openConfirm)="confirmVariant.set($event.variant); selectedEventTrn.set($event.event); showConfirmPopup.set(true)"
        [getCountdownStartTitle]="getCountdownStartTitle()"
        [getCountdownEndTitle]="getCountdownEndTitle()"
        [getDaysLabel]="getDaysLabel()"
        [getHoursLabel]="getHoursLabel()"
        [getMinutesLabel]="getMinutesLabel()"
        [getSecondsLabel]="getSecondsLabel()"
        [header]="getPopupHeader()"
        (onClose)="showEventPopup.set(false)"
        (selectedEvent)="onEventPopupSelected($event)"
      />
    }

    @if (currentPage() === "matching") {
      <trn-matching />
    }

    @if (currentPage() === "playing-quick") {
      <trn-playing-quick />
    }

    @if (currentPage() === "playing-event") {
      <trn-playing-event
        (exitLeave)="showExitPopup.set(true)"
        (matchTimeout)="onEventMatchTimeout()"
      />
    }

    <!-- \u914D\u5C0D\u4E2D\u72C0\u614B\u5217 -->
    @if (showWaitingResult()) {
      <div
        class="w-full inline-flex items-center gap-1.5 rounded-md bg-emerald-800/80 px-2 py-1 font-bold text-emerald-100 transition-all duration-200 mt-1"
      >
        <ap-icon name="loading" class="size-4" />
        <div class="text-xs shadow-sm tracking-wide">{{ progressLabel() }}</div>
      </div>
    }

    <!-- \u53F3\u5074\u5713\u5F62\u5207\u63DB/\u6536\u5408\u9215 -->
      <ap-button
      class="absolute -right-5 top-26 -translate-y-1/2 flex items-center justify-center size-10"
      [accentColor]="themeType() === 'quick' ? 'yellow' : 'purple'"
      [icon]="'chevron-left default'"
      [variant]="'content-rounded'"
      (click)="showWindow.set(false)"
    />  
  </div>

  <!-- \u7E2E\u5C0F\u6642\u5019\u7684\u6309\u9215 -->
  <ap-trn-float-button
    class="absolute top-16 left-4 duration-300"
    [rank]="userRank()"
    [ngClass]="{ '-ml-28': showWindow() }"
    [isPlaying]="isPlaying()"
    [accentColor]="themeType()=== 'quick' ? 'yellow' : 'purple'"
    (click)="showWindow.set(true)"
  />
}
<!-- Event \u9078\u64C7\u8996\u7A97 -->
@if (showEventPopup()) {
  <ap-trn-event-selection
    [getCountdownStartTitle]="getCountdownStartTitle()"
    [getCountdownEndTitle]="getCountdownEndTitle()"
    [getDaysLabel]="getDaysLabel()"
    [getHoursLabel]="getHoursLabel()"
    [getMinutesLabel]="getMinutesLabel()"
    [getSecondsLabel]="getSecondsLabel()"
    class="fixed inset-0"
    [header]="getPopupHeader()"
    [trnList]="trn.trnEventRunningList() || []"
    (onClose)="showEventPopup.set(false)"
    (selectedEvent)="onEventPopupSelected($event)"
  />
}

<!-- Game Starting Overlay -->
@if (showGameStarting()) {
  <ap-trn-game-starting
    [message]="getGameStarting()"
    class="fixed w-full bottom-1/2"
    [accentColor]="themeType()=== 'quick' ? 'yellow' : 'purple'"
    setAnimation="in"
    (close)="showGameStarting.set(false)"
  />
}

<!-- Status Tournament Bar -->
<ap-trn-status-bar
  class="fixed top-0 left-0 right-0 duration-200"
  [text]="getStatusModeBar()"
  [multiplier]="trn.betDataMultiplier()"
  [accentColor]="themeType()=== 'quick' ? 'yellow' : 'purple'"
  [ngClass]="showStatusBar() ? 'mt-0' : '-mt-10'"
/>

<!-- Confirmation Popup -->
@if (showConfirmPopup()) {
  <trn-game-confirm
    [accentColor]="themeType()=== 'quick' ? 'yellow' : 'purple'"
    [header]="getConfirmHeader()"
    [selectedEvent]="confirmVariant() === 'event' ? selectedEventTrn() : trn.trnQuick()"
    class="fixed inset-0 animate-fade animate-duration-300"
    (close)="showConfirmPopup.set(false)"
  />
}

<!-- Match Finished -->
@if (showMatchFinished()) {
  <ap-trn-game-match-finished
    class="fixed inset-0 animate-fade animate-duration-300"
    [accentColor]="themeType()=== 'quick' ? 'yellow' : 'purple'"
    [header]="getHeaderFinished()"
    [getQuickTitle]="getQuickTitle()"
    [getEventTitle]="getEventTitle()"
    [getConfirmButtonText]="getConfirmButtonText()"
    (onClose)="onCloseMatchFinished()"
    (onConfirm)="onCloseMatchFinished()"
  />
}

<!-- Game Result Popup -->
@if (showGameResult()) {
  <ap-trn-game-result
    class="fixed inset-0 animate-fade animate-duration-300"
    [getEventTitle]="getEventTitle()"
    [getQuickTitle]="getQuickTitle()"
    [header]="getPopupResultHeader()"
    [getPrizeLabel]="getPrizeLabel()"
    [getButtonLabel]="getButtonLabel()"
    [getEventDetailsButtonText]="getEventDetailsButtonText()"
    [currency]="trn.currencySymbol()"
    [accentColor]="resultTheme()"
    [playList]="resultListPart()"
    [rank]="resultRank()"
    [prize]="resultPrize() || 0"
    (clickClose)="showGameResult.set(false)"
    (clickConfirm)="onClickResultConfirm(resultNotificationId())"
  />
}

<!-- Game Leave Popup -->
@if (showExitPopup()) {
  <trn-game-event-leave-confirm
    class="fixed inset-0 animate-fade animate-duration-300"
    [selectedEvent]="trn.betDataTrn()"
    (close)="showExitPopup.set(false)"
  />
}

<trn-created-notification
  class="fixed bottom-10 left-10"
  (openWindow)="showWindow.set(true)"
/>
`, styles: ["/* src/app/pages/trn-all/trn-all.component.css */\n:host {\n  display: block;\n  -webkit-user-select: none;\n  user-select: none;\n}\n/*# sourceMappingURL=trn-all.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrnAllComponent, { className: "TrnAllComponent", filePath: "src/app/pages/trn-all/trn-all.component.ts", lineNumber: 35 });
})();

// src/app/pages/campaign-popup/campaign-popup.component.ts
function CampaignPopupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2)(3, "div", 3);
    \u0275\u0275element(4, "ap-icon", 4)(5, "div", 5);
    \u0275\u0275elementStart(6, "h4", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "ap-button", 8);
    \u0275\u0275listener("clicked", function CampaignPopupComponent_Conditional_0_Template_ap_button_clicked_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("header", ctx_r1.messageHeader())("size", "mobile")("enableClose", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", "gift default");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.messageContent(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("accentColor", "yellow")("label", ctx_r1.buttonText());
  }
}
var CampaignPopupComponent = class _CampaignPopupComponent {
  campaign = inject(CampaignFacadeService);
  eventCenter = inject(EventCenterCtrlService);
  panel = inject(BottomPanelService);
  i18n = inject(AppI18nService);
  session = inject(ClientSessionService);
  destroyRef = inject(DestroyRef);
  locale = this.session.locale;
  // 儲存的訊息
  /** Queue of messages */
  withdrawSuccessMessages = signal([]);
  /** Queue of messages */
  withdrawFailedMessages = signal([]);
  waitToJoinMessage = signal(null);
  underConditionMessage = signal(null);
  receivedCampaignMessage = signal(null);
  onGoingCampaignMessage = signal(null);
  /** 是否還有待處理的訊息 */
  hasMessage = computed(() => {
    return !!(this.withdrawSuccessMessages().length > 0 || this.withdrawFailedMessages().length > 0 || this.waitToJoinMessage() || this.underConditionMessage() || this.receivedCampaignMessage() || this.onGoingCampaignMessage());
  });
  /** 儲存最後一個訊息的 groupId, 每次處理都會更新 */
  lastGroupId = signal(null);
  /** 顯示開關 */
  showMessage = signal(false);
  messageHeader = signal("");
  messageContent = signal("");
  buttonText = signal("OK");
  constructor() {
    this.campaign.underCondition$.pipe(takeUntilDestroyed()).subscribe((message) => this.underConditionMessage.set(message));
    this.campaign.receivedCampaign$.pipe(takeUntilDestroyed()).subscribe((message) => this.receivedCampaignMessage.set(message));
    this.campaign.onGoingCampaign$.pipe(takeUntilDestroyed()).subscribe((message) => this.onGoingCampaignMessage.set(message));
    this.campaign.waitToJoin$.pipe(takeUntilDestroyed()).subscribe((message) => this.waitToJoinMessage.set(message));
    this.campaign.withdrawSuccess$.pipe(takeUntilDestroyed()).subscribe((message) => this.withdrawSuccessMessages.update((list) => [...list, message]));
    this.campaign.withdrawFailed$.pipe(takeUntilDestroyed()).subscribe((message) => this.withdrawFailedMessages.update((list) => [...list, message]));
    effect(() => {
      this.campaign.setPopupMessageVisible(this.showMessage());
    });
    effect(() => {
      if (this.panel.isBusy()) {
        this.showMessage.set(false);
        this.lastGroupId.set(null);
      }
    });
    effect(() => {
      if (this.hasMessage() && !this.panel.isBusy()) {
        untracked(() => {
          if (!this.showMessage()) {
            this.processMessage();
          }
        });
      }
    });
    this.destroyRef.onDestroy(() => {
      this.campaign.setPopupMessageVisible(false);
      this.campaign.setPopupActivated(false);
    });
  }
  ngAfterViewInit() {
    this.campaign.setPopupActivated(true);
  }
  onClick() {
    if (this.hasMessage()) {
      this.processMessage();
      return;
    }
    this.showMessage.set(false);
    this.openCampaignPage(this.lastGroupId());
    this.lastGroupId.set(null);
  }
  openCampaignPage(groupId) {
    if (!groupId)
      return;
    this.eventCenter.open(`campaign/${groupId}`);
  }
  /** 依優先順序取出下一則訊息並顯示 */
  processMessage() {
    const popup = this.takeNextPopup();
    if (!popup)
      return;
    this.messageHeader.set(popup.header);
    this.messageContent.set(popup.content);
    this.buttonText.set(popup.buttonText);
    if (popup.groupId !== void 0) {
      this.lastGroupId.set(popup.groupId);
    }
    if (!this.showMessage()) {
      this.panel.stopAutoSpin();
      this.showMessage.set(true);
    }
  }
  /** 取出優先順序最高的訊息, 清空對應的 message signals 並轉成 popup 內容 */
  takeNextPopup() {
    const [withdrawSuccess, ...restSuccess] = this.withdrawSuccessMessages();
    if (withdrawSuccess) {
      this.withdrawSuccessMessages.set(restSuccess);
      return this.buildWithdrawSuccess(withdrawSuccess);
    }
    const [withdrawFailed, ...restFailed] = this.withdrawFailedMessages();
    if (withdrawFailed) {
      this.withdrawFailedMessages.set(restFailed);
      return this.buildWithdrawFailed(withdrawFailed);
    }
    const underCondition = this.underConditionMessage();
    if (underCondition) {
      this.underConditionMessage.set(null);
      return this.buildUnderCondition(underCondition);
    }
    const received = this.receivedCampaignMessage();
    if (received) {
      this.receivedCampaignMessage.set(null);
      return this.buildReceived(received);
    }
    const onGoing = this.onGoingCampaignMessage();
    if (onGoing) {
      this.onGoingCampaignMessage.set(null);
      return this.buildOnGoing(onGoing);
    }
    const waitToJoin = this.waitToJoinMessage();
    if (waitToJoin) {
      this.waitToJoinMessage.set(null);
      return this.buildWaitToJoin(waitToJoin);
    }
    return null;
  }
  buildWithdrawSuccess(message) {
    const content = this.i18n.instant("promo_popup3");
    const campaign = message.campaignList[0];
    let popupContent = content.replace("{0}", campaign?.name ?? "");
    popupContent = popupContent.replace("{1}", campaign ? dec.comma(campaign.balance) : "N/A");
    popupContent = popupContent.replace("{2}", campaign?.withdrawal?.limit ? dec.comma(campaign.withdrawal.limit) : "N/A");
    return {
      header: this.i18n.instant("promo_title"),
      // 活动
      content: popupContent,
      buttonText: this.i18n.instant("Confirm_Btn")
    };
  }
  buildWithdrawFailed(message) {
    const content = this.i18n.instant("promo_fs_19");
    return {
      header: this.i18n.instant("promo_title"),
      // 活动
      content: content.replace("{0}", this.combineNames(message.campaignList)),
      buttonText: this.i18n.instant("Confirm_Btn")
    };
  }
  buildWaitToJoin(message) {
    return {
      header: this.i18n.instant("promo_manual_title"),
      // 新活动上线啦！
      content: this.i18n.instant("promo_manual_body"),
      // 全新活动正在进行中，赶快去看看吧！
      buttonText: this.i18n.instant("promo_manual_button"),
      // 立即前往
      groupId: message.campaignList[0]?.groupId || null
    };
  }
  buildUnderCondition(message) {
    const singleContent = this.i18n.instant("promo_fs_21");
    const multiContent = this.i18n.instant("promo_multi_21");
    return {
      header: this.i18n.instant("promo_inprogress_title"),
      // 活动进行中
      content: message.campaignList.length > 1 ? multiContent : singleContent.replace("{0}", message.campaignList[0]?.name || ""),
      buttonText: this.i18n.instant("promo_inprogress_button")
      // 继续游戏
    };
  }
  buildReceived(message) {
    let popupContent = "";
    if (message.campaignList.length === 1) {
      if (message.campaignList[0]?.type === "freeSpins") {
        const singleContent = this.i18n.instant("promo_fs_13");
        const campaign = message.campaignList[0];
        popupContent = singleContent.replace("{0}", campaign.spinCount?.toString() ?? "0");
        popupContent = popupContent.replace("{1}", dec.comma(campaign.totalAmount));
      } else {
        const singleContent = this.i18n.instant("promo_popup1");
        const campaign = message.campaignList[0];
        popupContent = singleContent.replace("{0}", campaign.name);
        popupContent = popupContent.replace("{1}", dec.comma(campaign.totalAmount));
      }
    } else {
      const multiContent = this.i18n.instant("promo_popup_multi1");
      popupContent = multiContent.replace("{0}", `
${this.combineNames(message.campaignList)}`);
    }
    return {
      header: this.i18n.instant("promo_inprogress_title"),
      // 活动进行中
      content: popupContent,
      buttonText: this.i18n.instant("Confirm_Btn"),
      groupId: message.campaignList[0]?.groupId || null
    };
  }
  buildOnGoing(message) {
    let popupContent = "";
    if (message.campaignList.length === 1) {
      if (message.campaignList[0]?.type === "freeSpins") {
        const singleContent = this.i18n.instant("promo_fs_17");
        const campaign = message.campaignList[0];
        popupContent = singleContent.replace("{0}", campaign.name);
        popupContent = popupContent.replace("{1}", this.formatEndTime(campaign.endTime));
      } else {
        const singleContent = this.i18n.instant("promo_popup4");
        const campaign = message.campaignList[0];
        popupContent = singleContent.replace("{0}", campaign.name);
        popupContent = popupContent.replace("{1}", this.formatEndTime(campaign.endTime));
        popupContent = popupContent.replace("{2}", campaign.withdrawal?.turnoverThreshold ? dec.comma(campaign.withdrawal.turnoverThreshold) : "N/A");
      }
    } else {
      const multiContent = this.i18n.instant("promo_popup_multi4");
      popupContent = multiContent.replace("{0}", `${this.combineNames(message.campaignList)}
`);
    }
    return {
      header: this.i18n.instant("promo_inprogress_title"),
      // 活动进行中
      content: popupContent,
      buttonText: this.i18n.instant("Confirm_Btn"),
      groupId: message.campaignList[0]?.groupId || null
    };
  }
  formatEndTime(endTime) {
    return new Date(endTime).toLocaleString(this.locale, { hour12: false });
  }
  combineNames(campaigns) {
    const willEndOn = this.i18n.instant("promo_multi_content4");
    return campaigns.map((c, index) => `${index + 1}. ${willEndOn.replace("{0}", c.name).replace("{1}", this.formatEndTime(c.endTime))}`).join("\n");
  }
  static \u0275fac = function CampaignPopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignPopupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CampaignPopupComponent, selectors: [["campaign-popup"]], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay", "fade-out"], [3, "header", "size", "enableClose"], [1, "p-4", "text-center", "space-y-2"], [1, "popup-icon", "text-yellow-400", 3, "name"], [1, "h-px", "divider-gradient-yellow", "opacity-80", "w-[90%]", "mx-auto"], [1, "max-h-[40vh]", "min-h-24", "overflow-y-auto", "whitespace-pre-wrap", "break-all", "text-zinc-300"], [1, "flex", "justify-center", "pb-4"], [1, "w-1/2", "[&>button]:w-full", 3, "clicked", "accentColor", "label"]], template: function CampaignPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CampaignPopupComponent_Conditional_0_Template, 10, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.showMessage() ? 0 : -1);
    }
  }, dependencies: [ApUiFramePopupComponent, ApIconComponent, ApButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampaignPopupComponent, [{
    type: Component,
    args: [{ selector: "campaign-popup", imports: [ApUiFramePopupComponent, ApIconComponent, ApButtonComponent], template: `@if (showMessage()) {
  <div class="fixed inset-0 grid place-items-center">
    <div
      class="absolute inset-0 popup-overlay fade-out"
    ></div>
    <ap-ui-frame-popup
      [header]="messageHeader()"
      [size]="'mobile'"
      [enableClose]="false"
    >
      <div class="p-4 text-center space-y-2">
        <ap-icon [name]="'gift default'" class="popup-icon text-yellow-400" />
        <div
          class="h-px divider-gradient-yellow opacity-80 w-[90%] mx-auto"
        ></div>
        <h4
          class="max-h-[40vh] min-h-24 overflow-y-auto whitespace-pre-wrap break-all text-zinc-300"
        >
          {{ messageContent() }}
        </h4>
      </div>

      <div class="flex justify-center pb-4">
        <ap-button
          class="w-1/2 [&>button]:w-full"
          [accentColor]="'yellow'"
          [label]="buttonText()"
          (clicked)="onClick()"
        />
      </div>
    </ap-ui-frame-popup>
  </div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CampaignPopupComponent, { className: "CampaignPopupComponent", filePath: "src/app/pages/campaign-popup/campaign-popup.component.ts", lineNumber: 31 });
})();

export {
  EventCenterComponent,
  TrnAllComponent,
  CampaignPopupComponent
};
//# sourceMappingURL=chunk-7BZ46X77.js.map
