import { AfterViewInit, Directive, DestroyRef, ElementRef, HostBinding, Signal, computed, inject, signal, input, effect, untracked } from '@angular/core';
import { BottomPanelSizeConfig,BottomPanelVariant,FREE_SPIN_BASE_SIZE_REM,LAYOUT_CONFIG,SIZE_CONFIG,TurboState,TURBO_STATE_TRANSITIONS,
} from './bottom-panel-constants';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { IGameCustomData, IGameCutomRuleType,RULE_GA_ES } from '../../../chiikawa/Tool/util/IGameCustomData';

/**
 * 所有 bottom-panel 系列 component 的抽象基底類別。
 * 封裝共用的版面計算、尺寸縮放、ResizeObserver 生命週期與 @HostBinding。
 * 子類別只需實作各自的業務邏輯（按鈕行為、狀態、選單等）。
 */
@Directive()
export abstract class BottomPanelBase implements AfterViewInit {
  protected readonly appI18n = inject(AppI18nService);
  protected readonly elRef = inject(ElementRef<HTMLElement>);
  protected readonly session = inject(ClientSessionService);
  protected readonly destroyRef = inject(DestroyRef);
  protected readonly version = computed(() => this.session.version().app);

  /** 尺寸設定，子類別可覆寫（e.g. SIZE_CONFIG_LEAN for replay / demo） */
  protected sizeConfig: Record<BottomPanelVariant, BottomPanelSizeConfig> = SIZE_CONFIG;

  // ── Layout signals ──────────────────────────────────────────
  readonly scale = signal(1);
  readonly hostWidth = signal(0);
  readonly hostHeight = signal(0);
  readonly hostBottom = signal(0);
  readonly hostLeft = signal(0);

  readonly viewportWidth = signal(window.innerWidth);
  /** 目前的佈局模式（portrait 或 landscape） */
  readonly layoutMode = signal<BottomPanelVariant>(
    this.session.isMobile() ? 'portrait' : 'landscape'
  );
  readonly turboState = signal<TurboState>('default');

  /** 目前裝置是行動裝置 */
  isMobile = computed(() => this.session.isMobile());


  private resizeObserver: ResizeObserver | null = null;
  private windowResizeHandler: (() => void) | null = null;
  /** 手機強制使用 portrait 佈局 */
  protected readonly forcedPortrait = computed(() => this.session.isMobile());

  // ── @HostBinding ────────────────────────────────────────────
  @HostBinding('style.width.px') get cssWidth() { return this.hostWidth(); }
  @HostBinding('style.height.px') get cssHeight() { return this.hostHeight(); }
  @HostBinding('style.bottom.px') get cssBottom() { return this.hostBottom(); }
  @HostBinding('style.left.px') get cssLeft() { return this.hostLeft(); }

  // ── Computed helpers ─────────────────────────────────────────
  /** LayoutMode是Landscape */
  protected readonly isLandscape = computed(() => this.layoutMode() === 'landscape');
  /** LayoutMode是Portrait */
  protected readonly isPortrait = computed(() => this.layoutMode() === 'portrait');
  /** Cooldown動畫相關，讓 template 在兩個 keyframe class 間交替，確保連續自動旋轉時每次都能重新觸發動畫 */
  readonly spinCooldownTick = signal(0);
  readonly isTurboHidden = signal<boolean>(false);
  readonly isCampaignHidden = signal<boolean>(false);
  readonly autoSpinOptions = signal<number[]>([10, 50, 100, 300, Infinity]);
  private readonly leftButtonsHidden = computed(() => [this.isCampaignHidden(), false] as const);
  private readonly rightButtonsHidden = computed(() => [false, this.isTurboHidden()] as const);

  private buttonPositionClass(
    landscapeClass: string,
    portraitClass: string,
    hiddenStates: Signal<readonly boolean[]>,
    index: number,
  ) {
    return computed(() => {
      if (this.isLandscape()) return landscapeClass;
      const isAlone = !hiddenStates()[index] && hiddenStates().filter(hidden => !hidden).length === 1;
      return isAlone ? portraitClass.replace(/top-\d+\/\d+/, 'top-1/2') : portraitClass;
    });
  }
  readonly campaignButtonPositionClass = this.buttonPositionClass('top-1/2 left-1/10', 'left-1/6 top-3/10', this.leftButtonsHidden, 0);
  readonly featureButtonPositionClass = this.buttonPositionClass('top-1/2 left-1/4', 'left-1/6 top-7/10', this.leftButtonsHidden, 1);
  readonly autoplayButtonPositionClass = this.buttonPositionClass('top-1/2 right-1/4', 'right-1/6 top-3/10', this.rightButtonsHidden, 0);
  readonly turboButtonPositionClass = this.buttonPositionClass('top-1/2 right-1/10', 'right-1/6 top-7/10', this.rightButtonsHidden, 1);
  private readonly config = computed(() => this.sizeConfig[this.layoutMode()]);

  // ── Sizing computeds (rem 字串) ──────────────────────────────
  readonly spinIconSize = computed(() => `${this.config().spinIcon * this.scale()}rem`);
  readonly buttonIconSize = computed(() => `${this.config().buttonIcon * this.scale()}rem`);
  readonly controlIconSize = computed(() => `${this.config().controlIcon * this.scale()}rem`);
  readonly listBottomHeight = computed(() => `${this.config().listBottomHeight * this.scale()}rem`);
  readonly centerGroupGap = computed(() => `${this.config().centerGroupGap * this.scale()}rem`);
  readonly centerSpacerWidth = computed(() => `${this.config().centerSpacerWidth * this.scale()}rem`);
  readonly centerGroupWidth = computed(() => `${parseFloat(this.centerSpacerWidth()) * 2.25}rem`);
  readonly menuOffset = computed(() => `${this.config().menuOffset * this.scale()}rem`);
  readonly statusBarGap = computed(() => `${this.config().statusBarGap * this.scale()}rem`);
  readonly statusBarHeight = computed(() => `${this.config().statusBarHeight * this.scale()}rem`);
  readonly statusBarWidth = computed(() => `${this.config().statusBarWidth * this.scale()}rem`);
  readonly statusBarFontSize = computed(() => `${this.config().statusBarFontSize * this.scale()}rem`);
  readonly bottomBarFontSize = computed(() => `${this.config().bottomBarFontSize * this.scale()}rem`);
  readonly middleHintFontSize = computed(() => `${this.config().middleHintFontSize * this.scale()}rem`);
  readonly middleHintIconSize = computed(() => `${this.config().middleHintIconSize * this.scale()}rem`);
  readonly middleListBottomHeight = computed(() => `${this.config().middleListBottomHeight * this.scale()}rem`);
  readonly bottomIconSize = computed(() => `${this.config().bottomIconSize * this.scale()}rem`);
  readonly bottomMenuIconSize = computed(() => `${this.config().bottomMenuIconSize * this.scale()}rem`);
  readonly freeSpinScale = computed(() => (this.config().spinIcon * this.scale()) / FREE_SPIN_BASE_SIZE_REM);
  readonly buttonsAreaTranslateY = computed(() => `translateY(${this.config().buttonsAreaTranslateY * this.scale()}rem)`);
  readonly topStatusBarFontSize = computed(() => {
    if (this.layoutMode() === 'landscape') {
      return `${this.config().topStatusBarFontSize}rem`;
    }
    return `${this.config().topStatusBarFontSize * this.scale()}rem`;
  });

  // 處理custom data相關
  public readonly customData = input<IGameCustomData | null>(null);
  constructor() {
    // 處理custom option
    effect(() => {
      const customRule = this.customData()?.customRule || null
      untracked(() => {
        if (customRule === RULE_GA_ES ) {
          this.autoSpinOptions.set([10, 25, 50, 75, 100]);
          this.isTurboHidden.set(true);
          this.isCampaignHidden.set(true);
        }
      });
    });
  }

  // ── Utilities ────────────────────────────────────────────────

  /** 更新 turboState 並回傳對應速度 0 / 1 / 2 */
  protected updateTurboState(): 0 | 1 | 2 {
    this.turboState.update(current => TURBO_STATE_TRANSITIONS[current]);
    const s = this.turboState();
    return s === 'default' ? 0 : s === 'pressed1' ? 1 : 2;
  }

  // Labels
  /** feature mode提示訊息 */
  readonly featureStartTipLabel = computed<string| null>(() => this.appI18n.gameStr('game_state_0'));
  /** feature mode提示訊息是否啟用 */
  readonly featureStartTipEnabled = computed(() => this.featureStartTipLabel() !== null);

  // ── Lifecycle ────────────────────────────────────────────────

  ngAfterViewInit(): void {
    this.initResizeObserver();
    this.destroyRef.onDestroy(() => this.cleanup());
    this.windowResizeHandler = () => this.viewportWidth.set(window.innerWidth);
    window.addEventListener('resize', this.windowResizeHandler);
  }


  private initResizeObserver(): void {
    const parent = this.elRef.nativeElement.parentElement;
    if (!parent) return;
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.resizeByParent(entry.contentRect);
      }
    });
    this.resizeObserver.observe(parent);
  }

  private resizeByParent(parent: DOMRectReadOnly): void {
    const ratio = parent.width / parent.height;
    if (ratio > LAYOUT_CONFIG.GAME_RATIO) {
      this.applyHorizontalLayout(parent, LAYOUT_CONFIG.PANEL_LANDSCAPE_RATIO);
    } else {
      this.applyVerticalLayout(parent, LAYOUT_CONFIG.PANEL_PORTRAIT_RATIO);
    }
  }

  protected applyHorizontalLayout(parent: DOMRectReadOnly, heightRatio: number): void {
    const gameHeight = parent.height;
    const gameWidth = gameHeight * LAYOUT_CONFIG.GAME_RATIO;
    const targetHostWidth = gameWidth * LAYOUT_CONFIG.HOST_WIDTH_RATIO;
    let hostWidth: number;

    if (this.forcedPortrait()) {
      // 強制在 landscape 時使用 portrait 佈局
      this.hostWidth.set(parent.width);
      this.hostHeight.set(gameHeight * LAYOUT_CONFIG.PANEL_PORTRAIT_RATIO);
      this.layoutMode.set('portrait');
      this.hostLeft.set(0);
      this.hostBottom.set(0);

      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      this.scale.set((this.hostHeight() / rootFontSize / 18) * 1.6);
      return;
    }

    // 正常 landscape 佈局邏輯
    if (targetHostWidth < parent.width) {
      hostWidth = targetHostWidth;
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      this.scale.set((hostWidth / rootFontSize / 59) * 1.4);
    } else {
      hostWidth = parent.width;
      this.applyViewportScale(hostWidth, targetHostWidth);
    }

    this.hostHeight.set(gameHeight * heightRatio);
    this.hostWidth.set(hostWidth);
    this.layoutMode.set('landscape');
    this.hostLeft.set((parent.width - hostWidth) / 2);
    this.hostBottom.set(0);
  }

  /**
   * 視窗寬度不足時的縮放計算（override point）。
   */
  protected applyViewportScale(hostWidth: number, targetWidth: number): void {
    const ratio = hostWidth / targetWidth;
    this.scale.set(Math.max(1.34 * Math.pow(ratio, 0.85), 1));
  }

  protected applyVerticalLayout(parent: DOMRectReadOnly, heightRatio: number): void {
    const gameWidth = parent.width;
    const gameHeight = gameWidth / LAYOUT_CONFIG.GAME_RATIO;

    this.hostWidth.set(gameWidth);
    this.hostHeight.set(gameHeight * heightRatio);
    this.hostLeft.set(0);
    this.hostBottom.set((parent.height - gameHeight) / 2);
    this.layoutMode.set('portrait');

    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    this.scale.set((this.hostHeight() / rootFontSize / 18) * 1.6);
  }

  private cleanup(): void {
    this.resizeObserver?.disconnect();
    if (this.windowResizeHandler) {
      window.removeEventListener('resize', this.windowResizeHandler);
    }
  }
}
