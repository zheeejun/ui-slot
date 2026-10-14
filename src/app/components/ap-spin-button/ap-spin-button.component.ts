import { Component, DestroyRef, ElementRef, HostListener, computed, effect, inject, input, model, output, signal } from '@angular/core';
import { ApIconSpinVariant } from '../../icons/ap-icon-spin/ap-icon-spin.component';
import { ApIconSpinComponent } from "../../icons/ap-icon-spin/ap-icon-spin.component";
import { SoundService } from '../../services/sound-service/sound-service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApIconHoldTurboSpinComponent } from '../../icons/ap-icon-hold-turbo-spin/ap-icon-hold-turbo-spin.component';
export const TURBO_HOLD_THRESHOLD_MS = 500;
export const TURBO_SKIP_INTERVAL_MS = 500;
//reference
//https://advantplay.atlassian.net/wiki/spaces/APCLIENTV2/pages/293208083/Hold+for+Turbo+Spin+Instant+Acceleration+Feature+Overview+and+Implementation+Details
/** 按住達門檻秒數後啟動 Turbo，之後每隔此間隔重複觸發 turboSkip */
export const IDLE_TOOLTIP_MS = 500;
/** 閒置多久後顯示 Hold for Turbo Spin 的提示泡泡 */
@Component({
  selector: 'ap-spin-button',
  standalone: true,
  imports: [ApIconSpinComponent, ApIconHoldTurboSpinComponent],
  templateUrl: './ap-spin-button.component.html',
  styleUrl: './ap-spin-button.component.css',
})
export class ApSpinButtonComponent {
  /* 5秒未觸動，播放暈光提示動態 */
  private static readonly PRESS_HINT_DELAY_MS = 5000;
  private pressHintTimeoutId: ReturnType<typeof setTimeout> | null = null;
  readonly variant = input<ApIconSpinVariant>('default');
  readonly pressHintEnabled = model<boolean>(false);
  readonly pressHintTimerEnabled = input<boolean>(false);
  readonly pressHintType = input('blur');
  readonly disabled = input<boolean>(false);
  readonly fastSpinDisabled = input<boolean>(false);
  readonly enableLightingEffect = input<boolean>(true);
  /** 遊戲是否正在旋轉/忙碌中；忙碌期間不累計閒置提示的倒數 */
  readonly isSpinning = input<boolean>(false);
  /** Hold for Turbo Spin（按住加速）功能開關，預設關閉；關閉時不觸發 Turbo 也不顯示提示 */
  readonly holdTurboEnabled = input<boolean>(false);
  /** 按住啟動 Turbo 的毫秒門檻，可由 Debug Panel 調整 */
  readonly turboHoldThresholdMs = input<number>(TURBO_HOLD_THRESHOLD_MS);
  /** 閒置提示顯示延遲毫秒數，可由 Debug Panel 調整 */
  readonly idleTooltipMs = input<number>(IDLE_TOOLTIP_MS);
  readonly buttonClick = output<void>();
  /** 當按住旋轉按鈕達 Turbo 門檻時觸發，參數表示是否正在持續按住 */
  readonly turboHold = output<boolean>();
  /**
   * 每次要觸發快速旋轉動畫時遞增此值。
   * 元件會在 a/b 兩個 keyframe class 間交替，確保每次都能重新觸發動畫。
   */
  readonly spinCount = input<number>(0);

  private readonly soundService = inject(SoundService);
  private readonly appI18n = inject(AppI18nService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  /** Hold for Turbo Spin 的閒置提示文字 */
  protected readonly idleTooltipLabel = this.appI18n.computed('spin_hold_turbo_tip', 'Hold to speed up!');
  /** Turbo 加速進行中的提示文字 */
  protected readonly turboActiveLabel = this.appI18n.computed('spin_turbo_active_tip', 'Speeding up!');

  protected spinClass = signal<'fast-spin-a' | 'fast-spin-b' | null>(null);
  protected readonly isHolding = signal(false);
  protected readonly isTurboActive = signal(false);
  protected readonly showIdleTooltip = signal(false);
  protected readonly showIdleHalo = signal(false);
  private readonly keepHoldTurboIconWhileHolding = signal(false);
  /** Turbo 進行中持續顯示加速提示；否則依閒置倒數顯示長按提示 */
  protected readonly showTooltip = computed(() => (this.isTurboActive() || this.showIdleTooltip()) && !this.disabled());
  protected readonly showHoldTurboIcon = computed(() =>
    !this.disabled() &&
    this.holdTurboEnabled() &&
    (
      this.isTurboActive() ||
      (this.enableLightingEffect() && (this.showIdleTooltip() || (this.isHolding() && this.keepHoldTurboIconWhileHolding())))
    )
  );
  protected readonly tooltipText = computed(() => this.isTurboActive() ? this.turboActiveLabel() : this.idleTooltipLabel());
  private _toggle = false;
  private _initialized = false;
  private holdTimer: ReturnType<typeof setTimeout> | null = null;
  private turboInterval: ReturnType<typeof setInterval> | null = null;
  private idleTooltipTimer: ReturnType<typeof setTimeout> | null = null;
  private activeHoldPointerId: number | null = null;

  constructor() {
    effect(() => {
      const count = this.spinCount();
      if (!this._initialized) {
        this._initialized = true;
        return;
      }

      if (this.disabled() || this.isTurboActive() || this.showHoldTurboIcon() || this.fastSpinDisabled()) return;

      if (count > 0) {
        this._toggle = !this._toggle;
        this.spinClass.set(this._toggle ? 'fast-spin-a' : 'fast-spin-b');
      }
    });

    // 功能關閉或按鈕失效（例如轉場動畫、進入 Free Game 導致 disabled）時中斷 Turbo Spin，並停止閒置提示
    // 旋轉中（isSpinning）只暫停閒置提示的倒數，等回到閒置狀態再重新計時
    effect(() => {
      if (this.disabled() || !this.holdTurboEnabled()) {
        this.activeHoldPointerId = null;
        this.stopHold();
        this.cancelIdleTooltip();
      } else if (this.isSpinning()) {
        this.cancelIdleTooltip();
      } else {
        this.scheduleIdleTooltip();
      }
    });

    // pressHintTimerEnabled 開啟時，閒置達門檻秒數才點亮暈光；關閉或按鈕失效時中斷倒數
    effect(() => {
      if (this.disabled() || !this.pressHintTimerEnabled()) {
        this.clearPressHintTimer();
        this.showIdleHalo.set(false);
        return;
      }
      this.restartPressHintTimer();
    });

    this.destroyRef.onDestroy(() => {
      this.stopHold();
      this.cancelIdleTooltip();
      this.clearPressHintTimer();
    });

    // 當 Turbo 狀態改變時，觸發 turboHold 事件，通知外部是否正在持續按住
    effect(() => {
      this.turboHold.emit(this.isTurboActive());
    });
  }

  pointerDown(event: PointerEvent): void {
    if (this.disabled()) return;
    const startedFromHoldTurboIcon = this.showHoldTurboIcon();
    this.pressHintEnabled.set(false);
    this.showIdleHalo.set(false);
    this.cancelIdleTooltip();
    this.buttonClick.emit();
    if (this.pressHintTimerEnabled()) {
      this.restartPressHintTimer();
    }
    if (this.holdTurboEnabled()) {
      this.capturePointer(event);
      this.activeHoldPointerId = event.pointerId;
      this.startHold(startedFromHoldTurboIcon);
    }
  }

  @HostListener('document:pointerup', ['$event'])
  @HostListener('document:pointercancel', ['$event'])
  protected onPointerReleasedAnywhere(event: PointerEvent): void {
    if (this.activeHoldPointerId !== event.pointerId) {
      return;
    }

    this.activeHoldPointerId = null;
    this.stopHold();
    this.scheduleIdleTooltip();
  }

  /** 視窗失焦（切換分頁、彈出視窗）時中斷 Turbo，避免放開按鈕的事件遺失後持續加速 */
  @HostListener('window:blur')
  protected onWindowBlur(): void {
    this.activeHoldPointerId = null;
    this.stopHold();
  }

  /**
   * 捕捉 pointer，確保在 iframe 上或按鈕範圍外放開時，pointerup 仍會送回本元件的 document。
   * 沒有 capture 時，在遊戲 iframe 上放開按鈕會收不到 pointerup，導致 Turbo 永遠不停止。
   */
  private capturePointer(event: PointerEvent): void {
    try {
      (event.currentTarget as HTMLElement | null)?.setPointerCapture(event.pointerId);
    } catch {
      // 不支援或無效的 pointerId（例如測試環境的合成事件），忽略即可
    }
  }

  /** 按鈕是否實際顯示在畫面上（祖先被 [hidden]/display:none 隱藏或已脫離 DOM 時為 false） */
  private isHostVisible(): boolean {
    const el = this.elementRef.nativeElement as HTMLElement;
    return el.isConnected && el.getClientRects().length > 0;
  }

  private startHold(keepHoldTurboIconWhileHolding = false): void {
    this.stopHold();
    this.isHolding.set(true);
    this.keepHoldTurboIconWhileHolding.set(keepHoldTurboIconWhileHolding);
    const holdThresholdMs = Math.max(0, this.turboHoldThresholdMs() || 0);
    this.holdTimer = setTimeout(() => this.activateTurbo(), holdThresholdMs);
  }

  private activateTurbo(): void {
    // 按住期間按鈕被隱藏（例如轉場、進入 Free Game）就不啟動 Turbo
    if (!this.isHostVisible()) {
      this.stopHold();
      return;
    }

    this.isTurboActive.set(true);
    this.soundService.playClick();
  }

  private stopHold(): void {
    if (this.holdTimer !== null) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
    }
    if (this.turboInterval !== null) {
      clearInterval(this.turboInterval);
      this.turboInterval = null;
    }
    this.isHolding.set(false);
    this.isTurboActive.set(false);
    this.keepHoldTurboIconWhileHolding.set(false);
  }

  private scheduleIdleTooltip(): void {
    this.cancelIdleTooltip();
    if (!this.holdTurboEnabled() || this.disabled() || this.isSpinning() || this.isHolding()) return;
    const idleTooltipMs = Math.max(0, this.idleTooltipMs() || 0);
    this.idleTooltipTimer = setTimeout(() => this.showIdleTooltip.set(true), idleTooltipMs);
  }

  private cancelIdleTooltip(): void {
    if (this.idleTooltipTimer !== null) {
      clearTimeout(this.idleTooltipTimer);
      this.idleTooltipTimer = null;
    }
    this.showIdleTooltip.set(false);
  }

  private restartPressHintTimer(): void {
    this.clearPressHintTimer();
    this.showIdleHalo.set(false);
    this.pressHintTimeoutId = setTimeout(() => {
      if (!this.disabled()) {
        this.showIdleHalo.set(true);
      }
    }, ApSpinButtonComponent.PRESS_HINT_DELAY_MS);
  }

  private clearPressHintTimer(): void {
    if (this.pressHintTimeoutId !== null) {
      clearTimeout(this.pressHintTimeoutId);
      this.pressHintTimeoutId = null;
    }
  }
}
