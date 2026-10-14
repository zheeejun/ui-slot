import {Directive,ElementRef,HostListener,inject, output} from '@angular/core';
/** 
 * 偵測點擊事件是否發生在元素外面，若是則觸發 clickOutside 事件。
 * 主要用於點擊元素外的區域來關閉 menu 。
 * 使用方法
 *   <div
 *     clickOutside
 *     (clickOutside)="closeMenu()"
 *   ></div>
 * 
 * 請注意如果你的「打開 menu 的按鈕」也會觸發 document click，記得加：
 * <button (click)="openMenu($event)" />
 * 
 * openMenu(event: MouseEvent) {
 *   event.stopPropagation();
 *   // 打開 menu 的邏輯
 * }
 */

@Directive({
  selector: '[clickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  clickOutside = output<PointerEvent>();
  @HostListener('document:pointerdown', ['$event'])
  onDocumentPointerDown(event: PointerEvent) {
    const target = event.target as Node | null;

    if (!target) return;

    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
