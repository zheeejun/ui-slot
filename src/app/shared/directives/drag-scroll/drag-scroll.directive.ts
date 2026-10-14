import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

/** 
 * 讓元素支援滑鼠與觸控拖曳捲動。按住後拖動即可上下捲動內容，
 * 並在拖動期間停用文字選取與瀏覽器預設觸控手勢，確保 pointermove 正常觸發。
 */
@Directive({
  selector: '[dragScroll]',
  standalone: true,
})
export class DragScrollDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  private isDragging = false;
  private activePointerId: number | null = null;
  private dragStartY = 0;
  private dragStartScrollTop = 0;

  @HostBinding('style.cursor')
  get cursor(): string {
    return this.isDragging ? 'grabbing' : 'grab';
  }

  @HostBinding('style.userSelect')
  get userSelect(): string {
    return this.isDragging ? 'none' : '';
  }

  @HostBinding('style.touchAction')
  readonly touchAction = 'none';

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    this.activePointerId = event.pointerId;
    this.isDragging = true;
    this.dragStartY = event.clientY;
    this.dragStartScrollTop = this.el.nativeElement.scrollTop;
    this.el.nativeElement.setPointerCapture(event.pointerId);
    event.preventDefault();
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.isDragging || event.pointerId !== this.activePointerId) return;

    event.preventDefault();
    const deltaY = event.clientY - this.dragStartY;
    this.el.nativeElement.scrollTop = this.dragStartScrollTop - deltaY;
  }

  @HostListener('pointerup', ['$event'])
  @HostListener('pointercancel', ['$event'])
  @HostListener('lostpointercapture', ['$event'])
  onPointerEnd(event: PointerEvent): void {
    if (this.activePointerId !== null && this.el.nativeElement.hasPointerCapture(this.activePointerId)) {
      this.el.nativeElement.releasePointerCapture(this.activePointerId);
    }

    if (event.pointerId !== this.activePointerId) return;

    this.activePointerId = null;
    this.isDragging = false;
  }

  @HostListener('window:blur')
  onWindowBlur(): void {
    this.activePointerId = null;
    this.isDragging = false;
  }
}
