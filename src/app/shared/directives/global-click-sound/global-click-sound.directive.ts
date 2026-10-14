/**
 * GlobalClickSoundDirective
 *
 * 掛在根容器上（通常是 app-root 或最外層 layout），
 * 自動監聽所有子元素的 click 事件並播放點擊音效。
 *
 * ## 基本用法
 * ```html
 * <div appGlobalClickSound>
 *   <!-- 子元素的 click 都會自動播音 -->
 * </div>
 * ```
 *
 * ## 觸發音效的元素（自動偵測）
 * button、a[href]、[role="button"]、[role="tab"]、.cursor-pointer 等互動元素
 * 會自動觸發音效，不需要額外標記。
 *
 * ## 強制加入音效
 * 不在自動偵測範圍內的元素，加上 `data-click-sound` 屬性：
 * ```html
 * <div data-click-sound (click)="doSomething()">點我</div>
 * ```
 *
 * ## 排除音效
 * 不想播音的元素，加上 `data-no-click-sound` 屬性或 `no-click-sound` class：
 * ```html
 * <button data-no-click-sound (click)="silent()">無聲按鈕</button>
 * <button class="no-click-sound" (click)="silent()">無聲按鈕</button>
 * ```
 *
 * ## pointerdown 元素的處理
 * 使用 `(pointerdown)` 取代 `(click)` 的元素，需同時：
 * 1. 加上 `appPointerDownSound` directive 讓 pointerdown 時播音
 * 2. 加上 `data-no-click-sound` 避免後續 click 事件被全域 directive 重複播音
 * ```html
 * <button appPointerDownSound data-no-click-sound (pointerdown)="spin()">Spin</button>
 * ```
 */

import { DOCUMENT } from '@angular/common';
import { Directive, DestroyRef, ElementRef, Renderer2, inject } from '@angular/core';
import { SoundService } from '../../../services/sound-service/sound-service';

const INTERACTIVE_SELECTORS = [
  'button',
  'a[href]',
  'summary',
  'label[for]',
  'input[type="button"]',
  'input[type="submit"]',
  'input[type="reset"]',
  '[role="button"]',
  '[role="link"]',
  '[role="tab"]',
  '[role="switch"]',
  '[role="checkbox"]',
  '[role="radio"]',
  '[role="menuitem"]',
  '[data-click-sound]',
  '[tabindex]:not([tabindex="-1"])',
  '.cursor-pointer',
].join(', ');

const EXCLUDED_SELECTORS = [
  '[data-no-click-sound]',
  '.no-click-sound',
].join(', ');

const DISABLED_SELECTORS = [
  '[disabled]',
  '[aria-disabled="true"]',
  '.disabled',
  '.is-disabled',
  '.cursor-not-allowed',
  '.pointer-events-none',
].join(', ');

@Directive({
  selector: '[appGlobalClickSound]',
  standalone: true,
})
export class GlobalClickSoundDirective {
  private readonly document = inject(DOCUMENT);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);
  private readonly soundService = inject(SoundService);

  constructor() {
    const removeClickListener = this.renderer.listen(
      this.document,
      'click',
      (event: MouseEvent) => this.handleDocumentClick(event),
    );

    this.destroyRef.onDestroy(removeClickListener);
  }

  private handleDocumentClick(event: MouseEvent): void {
    if (!event.isTrusted || event.defaultPrevented || event.button !== 0) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const rootElement = this.elementRef.nativeElement;
    const interactiveTarget = target.closest(INTERACTIVE_SELECTORS);

    if (!interactiveTarget || !rootElement.contains(interactiveTarget)) {
      return;
    }

    if (interactiveTarget.closest(EXCLUDED_SELECTORS)) {
      return;
    }

    if (this.isDisabled(interactiveTarget)) {
      return;
    }

    this.soundService.playClick();
  }

  private isDisabled(element: Element): boolean {
    const disabledElement = element.closest(DISABLED_SELECTORS);

    if (!disabledElement) {
      return false;
    }

    if (disabledElement instanceof HTMLButtonElement) {
      return disabledElement.disabled;
    }

    if (disabledElement instanceof HTMLInputElement) {
      return disabledElement.disabled;
    }

    const ariaDisabled = disabledElement.getAttribute('aria-disabled');
    if (ariaDisabled === 'true') {
      return true;
    }

    return true;
  }
}
