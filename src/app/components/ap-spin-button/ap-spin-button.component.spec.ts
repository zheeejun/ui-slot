import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, signal } from '@angular/core';
import {
  ApSpinButtonComponent,
  IDLE_TOOLTIP_MS,
  TURBO_HOLD_THRESHOLD_MS,
  TURBO_SKIP_INTERVAL_MS,
} from './ap-spin-button.component';

@Component({
  selector: 'host-spin-button',
  standalone: true,
  imports: [ApSpinButtonComponent],
  template: `<ap-spin-button
    style="height: 5rem"
    [spinCount]="spinCount()"
    [disabled]="disabled()"
    [enableLightingEffect]="enableLightingEffect()"
    [isSpinning]="isSpinning()"
    [holdTurboEnabled]="holdTurboEnabled()"
    [idleTooltipMs]="idleTooltipMs()"
    [(pressHintEnabled)]="pressHintEnabled"
    (buttonClick)="onButtonClick()"
    (turboSkip)="onTurboSkip()"
  />`,
})
class HostComponent {
  readonly spinCount = signal(0);
  readonly disabled = signal(false);
  readonly enableLightingEffect = signal(true);
  readonly isSpinning = signal(false);
  readonly holdTurboEnabled = signal(true);
  readonly idleTooltipMs = signal(IDLE_TOOLTIP_MS);
  readonly pressHintEnabled = signal(false);
  clickCount = 0;
  turboSkipCount = 0;

  onButtonClick(): void {
    this.clickCount++;
  }

  onTurboSkip(): void {
    this.turboSkipCount++;
  }
}

describe('ApSpinButtonComponent - Hold for Turbo Spin', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;
  let buttonEl: HTMLElement;
  const pressHintDelayMs = 5000;
  const pressHintAnimationMs = 1400;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    buttonEl = fixture.nativeElement.querySelector('.relative.size-full');
  });

  function pointerDown(pointerId = 1): void {
    buttonEl.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerId }));
    fixture.detectChanges();
  }

  function pointerUp(pointerId = 1): void {
    document.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerId }));
    fixture.detectChanges();
  }

  function queryIdleTooltip(): HTMLElement | null {
    return fixture.nativeElement.querySelector('.idle-tooltip');
  }

  function isTurboVisualActive(): boolean {
    return fixture.nativeElement.querySelector('.spin-turbo') !== null;
  }

  function hasIdleHalo(): boolean {
    return buttonEl.classList.contains('auto-spin-run-soft-halo');
  }

  function holdTurboIcon(): HTMLElement | null {
    return fixture.nativeElement.querySelector('ap-icon-spin-hold-turbo');
  }

  function isHoldTurboIconVisible(): boolean {
    const icon = holdTurboIcon();
    return !!icon && !icon.classList.contains('opacity-0');
  }

  it('功能關閉（預設）時，長按不會啟動 Turbo，也不顯示閒置提示，但一般點擊正常', fakeAsync(() => {
    host.holdTurboEnabled.set(false);
    fixture.detectChanges();

    pointerDown();
    expect(host.clickCount).toBe(1);

    tick(TURBO_HOLD_THRESHOLD_MS + TURBO_SKIP_INTERVAL_MS * 2);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(0);
    expect(isTurboVisualActive()).toBeFalse();

    pointerUp();
    tick(IDLE_TOOLTIP_MS * 2);
    fixture.detectChanges();
    expect(queryIdleTooltip()).toBeNull();
  }));

  it('Turbo 功能關閉時，如果進行中會立即停止 Turbo', fakeAsync(() => {
    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS);
    fixture.detectChanges();
    expect(isTurboVisualActive()).toBeTrue();

    host.holdTurboEnabled.set(false);
    fixture.detectChanges();
    tick();
    expect(isTurboVisualActive()).toBeFalse();

    tick(TURBO_SKIP_INTERVAL_MS * 2);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(1);

    pointerUp();
    flush();
  }));

  it('按鈕 icon 會正常渲染且高度不為零', () => {
    const iconEl: HTMLElement = fixture.nativeElement.querySelector('ap-icon-spin');
    const svgEl: SVGElement | null = fixture.nativeElement.querySelector('ap-icon-spin svg');
    const iconRect = iconEl.getBoundingClientRect();
    expect(svgEl).not.toBeNull();
    expect(iconRect.width).toBeGreaterThan(0);
    expect(iconRect.height).toBeGreaterThan(0);
    expect(svgEl!.getBoundingClientRect().height).toBeGreaterThan(0);
  });

  it('點擊按鈕時會 emit buttonClick 事件', () => {
    pointerDown();
    expect(host.clickCount).toBe(1);
    expect(host.turboSkipCount).toBe(0);
  });

  it('按住未達 Turbo 門檻前維持顯示 spin icon，不顯示 Hold Turbo icon', fakeAsync(() => {
    pointerDown();

    expect(fixture.nativeElement.querySelector('ap-icon-spin')).not.toBeNull();
    expect(holdTurboIcon()).toBeNull();
    expect(isHoldTurboIconVisible()).toBeFalse();
    expect(host.turboSkipCount).toBe(0);

    host.spinCount.set(1);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.fast-spin-a, .fast-spin-b')).not.toBeNull();

    tick(TURBO_HOLD_THRESHOLD_MS - 1);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(0);
    expect(fixture.nativeElement.querySelector('ap-icon-spin')).not.toBeNull();
    expect(holdTurboIcon()).toBeNull();

    pointerUp();
    flush();
  }));

  it('關閉 lighting effect 時，未達 Turbo 門檻前維持顯示 spin icon', fakeAsync(() => {
    host.enableLightingEffect.set(false);
    fixture.detectChanges();

    pointerDown();

    expect(fixture.nativeElement.querySelector('ap-icon-spin')).not.toBeNull();
    expect(holdTurboIcon()).toBeNull();
    expect(isHoldTurboIconVisible()).toBeFalse();
    expect(host.turboSkipCount).toBe(0);

    pointerUp();
    flush();
  }));

  it('未達長按門檻前，不會啟動 Turbo，也不會套用 spin-turbo class', fakeAsync(() => {
    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS - 1);
    fixture.detectChanges();

    expect(host.turboSkipCount).toBe(0);
    expect(isTurboVisualActive()).toBeFalse();

    pointerUp();
    flush();
  }));

  it('達到長按門檻後會進入 Turbo，並持續 emit turboSkip', fakeAsync(() => {
    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS);
    fixture.detectChanges();

    expect(host.turboSkipCount).toBe(1);
    expect(isTurboVisualActive()).toBeTrue();

    tick(TURBO_SKIP_INTERVAL_MS);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(2);

    tick(TURBO_SKIP_INTERVAL_MS);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(3);

    pointerUp();
    flush();
  }));

  it('放開按鈕後會停止 Turbo Spin', fakeAsync(() => {
    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(1);

    pointerUp();
    fixture.detectChanges();
    expect(isTurboVisualActive()).toBeFalse();

    tick(TURBO_SKIP_INTERVAL_MS * 2);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(1);

    flush();
  }));

  it('按鈕 disabled 變成 true 時，會停止 Turbo Spin', fakeAsync(() => {
    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(1);

    host.disabled.set(true);
    fixture.detectChanges();
    tick();
    expect(isTurboVisualActive()).toBeFalse();

    tick(TURBO_SKIP_INTERVAL_MS * 2);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(1);

    host.disabled.set(false);
    fixture.detectChanges();
    pointerUp();
    flush();
  }));

  it('disabled 時 pointerdown 不會觸發 buttonClick 或 hold 邏輯', fakeAsync(() => {
    host.disabled.set(true);
    fixture.detectChanges();

    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS);
    fixture.detectChanges();

    expect(host.clickCount).toBe(0);
    expect(host.turboSkipCount).toBe(0);
    flush();
  }));

  it('放開按鈕後，會在閒置時間後顯示 Hold for Turbo Spin 提示', fakeAsync(() => {
    pointerDown();
    pointerUp();
    fixture.detectChanges();
    expect(queryIdleTooltip()).toBeNull();

    tick(IDLE_TOOLTIP_MS - 1);
    fixture.detectChanges();
    expect(queryIdleTooltip()).toBeNull();

    tick(1);
    fixture.detectChanges();
    expect(queryIdleTooltip()).not.toBeNull();

    flush();
  }));

  it('再次互動時會關閉閒置提示', fakeAsync(() => {
    pointerDown();
    pointerUp();
    tick(IDLE_TOOLTIP_MS);
    fixture.detectChanges();
    expect(queryIdleTooltip()).not.toBeNull();
    expect(fixture.nativeElement.querySelector('ap-icon-spin')).toBeNull();
    expect(holdTurboIcon()).not.toBeNull();

    pointerDown();
    fixture.detectChanges();
    expect(queryIdleTooltip()).toBeNull();
    expect(fixture.nativeElement.querySelector('ap-icon-spin')).toBeNull();
    expect(holdTurboIcon()).not.toBeNull();

    pointerUp();
    flush();
  }));

  it('disabled 時不會顯示閒置提示', fakeAsync(() => {
    pointerDown();
    pointerUp();
    host.disabled.set(true);
    fixture.detectChanges();

    tick(IDLE_TOOLTIP_MS * 2);
    fixture.detectChanges();
    expect(queryIdleTooltip()).toBeNull();
    flush();
  }));

  it('isSpinning 為 true 時，不會開始閒置提示計時', fakeAsync(() => {
    host.isSpinning.set(true);
    fixture.detectChanges();

    tick(IDLE_TOOLTIP_MS * 3);
    fixture.detectChanges();
    expect(queryIdleTooltip()).toBeNull();

    flush();
  }));

  it('旋轉結束後，才會重新開始閒置提示倒數', fakeAsync(() => {
    host.isSpinning.set(true);
    fixture.detectChanges();

    pointerDown();
    pointerUp();
    tick(IDLE_TOOLTIP_MS * 2);
    fixture.detectChanges();
    expect(queryIdleTooltip()).toBeNull();

    host.isSpinning.set(false);
    fixture.detectChanges();
    tick(IDLE_TOOLTIP_MS - 1);
    fixture.detectChanges();
    expect(queryIdleTooltip()).toBeNull();

    tick(1);
    fixture.detectChanges();
    expect(queryIdleTooltip()).not.toBeNull();

    flush();
  }));

  it('Turbo 啟動後會顯示 Speeding up! 提示，放開後消失', fakeAsync(() => {
    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS);
    fixture.detectChanges();

    const tooltip = queryIdleTooltip();
    expect(tooltip).not.toBeNull();
    expect(tooltip!.textContent).toContain('Speeding up!');

    tick(TURBO_SKIP_INTERVAL_MS * 3);
    fixture.detectChanges();
    expect(queryIdleTooltip()).not.toBeNull();

    pointerUp();
    fixture.detectChanges();
    expect(queryIdleTooltip()).toBeNull();

    flush();
  }));

  it('Turbo 進行中如果元件被隱藏，下一次 interval 會自動停止', fakeAsync(() => {
    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(1);
    expect(isTurboVisualActive()).toBeTrue();

    const spinButtonEl: HTMLElement = fixture.nativeElement.querySelector('ap-spin-button');
    spinButtonEl.style.display = 'none';

    tick(TURBO_SKIP_INTERVAL_MS);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(1);
    expect(isTurboVisualActive()).toBeFalse();

    spinButtonEl.style.display = '';
    tick(TURBO_SKIP_INTERVAL_MS * 2);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(1);
    expect(isTurboVisualActive()).toBeFalse();

    pointerUp();
    flush();
  }));

  it('元件隱藏時，即使達到長按門檻也不會進入 Turbo', fakeAsync(() => {
    pointerDown();
    const spinButtonEl: HTMLElement = fixture.nativeElement.querySelector('ap-spin-button');
    spinButtonEl.style.display = 'none';

    tick(TURBO_HOLD_THRESHOLD_MS + TURBO_SKIP_INTERVAL_MS);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(0);
    expect(isTurboVisualActive()).toBeFalse();

    spinButtonEl.style.display = '';
    pointerUp();
    flush();
  }));

  it('window blur 時會停止 Turbo', fakeAsync(() => {
    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS);
    fixture.detectChanges();
    expect(isTurboVisualActive()).toBeTrue();

    window.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(isTurboVisualActive()).toBeFalse();

    tick(TURBO_SKIP_INTERVAL_MS * 2);
    fixture.detectChanges();
    expect(host.turboSkipCount).toBe(1);

    flush();
  }));

  it('Turbo 啟動時不顯示一般 spin icon，結束後恢復', fakeAsync(() => {
    expect(fixture.nativeElement.querySelector('ap-icon-spin')).not.toBeNull();

    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ap-icon-spin')).toBeNull();

    pointerUp();
    fixture.detectChanges();
    const iconEl: HTMLElement = fixture.nativeElement.querySelector('ap-icon-spin');
    expect(iconEl).not.toBeNull();
    expect(iconEl.classList.contains('icon-idle-spin')).toBeTrue();

    flush();
  }));

  it('Turbo 結束後，閒置提示會恢復成 Hold to speed up!', fakeAsync(() => {
    pointerDown();
    tick(TURBO_HOLD_THRESHOLD_MS);
    fixture.detectChanges();
    expect(queryIdleTooltip()!.textContent).toContain('Speeding up!');

    pointerUp();
    tick(IDLE_TOOLTIP_MS);
    fixture.detectChanges();
    const tooltip = queryIdleTooltip();
    expect(tooltip).not.toBeNull();
    expect(tooltip!.textContent).toContain('Hold to speed up!');

    flush();
  }));

  it('閒置提示顯示後，如果 isSpinning 變成 true 會立即關閉', fakeAsync(() => {
    pointerDown();
    pointerUp();
    tick(IDLE_TOOLTIP_MS);
    fixture.detectChanges();
    expect(queryIdleTooltip()).not.toBeNull();

    host.isSpinning.set(true);
    fixture.detectChanges();
    tick();
    expect(queryIdleTooltip()).toBeNull();

    flush();
  }));

  it('pressHintEnabled 預設為 false，不會顯示 halo 動畫', () => {
    expect(hasIdleHalo()).toBeFalse();
  });

  it('pressHintEnabled 為 true 時會先顯示一次 halo，動畫結束後停止', fakeAsync(() => {
    host.pressHintEnabled.set(true);
    fixture.detectChanges();
    expect(hasIdleHalo()).toBeTrue();

    tick(pressHintAnimationMs - 1);
    fixture.detectChanges();
    expect(hasIdleHalo()).toBeTrue();

    tick(1);
    fixture.detectChanges();
    expect(hasIdleHalo()).toBeFalse();

    flush();
  }));

  it('pressHintEnabled 為 true 時，閒置超過 5 秒後會再次顯示 halo', fakeAsync(() => {
    host.pressHintEnabled.set(true);
    fixture.detectChanges();

    tick(pressHintAnimationMs);
    fixture.detectChanges();
    expect(hasIdleHalo()).toBeFalse();

    tick(pressHintDelayMs - 1);
    fixture.detectChanges();
    expect(hasIdleHalo()).toBeFalse();

    tick(1);
    fixture.detectChanges();
    expect(hasIdleHalo()).toBeTrue();

    flush();
  }));

  it('結束旋轉後，閒置超過 5 秒會顯示 halo', fakeAsync(() => {
    host.pressHintEnabled.set(true);
    host.isSpinning.set(true);
    fixture.detectChanges();
    expect(hasIdleHalo()).toBeFalse();

    host.isSpinning.set(false);
    fixture.detectChanges();
    expect(hasIdleHalo()).toBeFalse();

    tick(pressHintDelayMs - 1);
    fixture.detectChanges();
    expect(hasIdleHalo()).toBeFalse();

    tick(1);
    fixture.detectChanges();
    expect(hasIdleHalo()).toBeTrue();

    flush();
  }));

  it('disabled 時即使 pressHintEnabled 為 true 也不顯示 halo 動畫', () => {
    host.pressHintEnabled.set(true);
    host.disabled.set(true);
    fixture.detectChanges();

    expect(hasIdleHalo()).toBeFalse();
  });

  it('idle spin icon switches to hold turbo icon after idleTooltipMs', fakeAsync(() => {
    host.idleTooltipMs.set(3000);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('ap-icon-spin')).not.toBeNull();
    expect(holdTurboIcon()).toBeNull();

    tick(2999);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ap-icon-spin')).not.toBeNull();
    expect(holdTurboIcon()).toBeNull();

    tick(1);
    fixture.detectChanges();
    expect(queryIdleTooltip()).not.toBeNull();
    expect(fixture.nativeElement.querySelector('ap-icon-spin')).toBeNull();
    expect(isHoldTurboIconVisible()).toBeTrue();

    flush();
  }));

  it('does not restart hold turbo hint from another pointer', fakeAsync(() => {
    pointerDown(1);
    pointerUp(1);

    tick(IDLE_TOOLTIP_MS - 1);
    pointerUp(2);

    tick(1);
    fixture.detectChanges();
    expect(queryIdleTooltip()).not.toBeNull();
    expect(isHoldTurboIconVisible()).toBeTrue();

    flush();
  }));

});
