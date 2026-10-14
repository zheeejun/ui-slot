import { Directive, inject } from '@angular/core';
import { SoundService } from '../../../services/sound-service/sound-service';

/**
 * PointerDownSoundDirective
 *
 * 用於使用 `(pointerdown)` 取代 `(click)` 的元素，
 * 在 pointerdown 時立即播放點擊音效。
 *
 * ## 使用時機
 * 當元素觸發 `(pointerdown)` 後狀態立刻改變（例如 spin 變 disabled、DOM 被移除），
 * 導致後續 `click` 事件無法被全域 `GlobalClickSoundDirective` 捕捉到音效時使用。
 *
 * ## 用法
 * 同時加上 `data-no-click-sound`，避免後續 click 事件被全域 directive 重複播音：
 * ```html
 * <ap-icon-badge
 *   appPointerDownSound
 *   data-no-click-sound
 *   (pointerdown)="clickSpin()"
 * />
 * ```
 *
 * ## 注意
 * 不要在同一元素上同時使用 `appPointerDownSound` 和全域 click 音效（不加 data-no-click-sound），
 * 否則一次點擊會播兩次音效。
 */
@Directive({
  selector: '[appPointerDownSound]',
  standalone: true,
  host: { '(pointerdown)': 'onPointerDown($event)' },
})
export class PointerDownSoundDirective {
  private soundService = inject(SoundService);

  onPointerDown(event: PointerEvent): void {
    if (event.button !== 0 || !event.isTrusted) return;
    this.soundService.playClick();
  }
}
