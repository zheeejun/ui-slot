import { Component, input, signal, AfterViewInit, OnDestroy, ViewChild, ElementRef, output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';

@Component({
  selector: 'ap-bf-card-bet-control',
  standalone: true,
  imports: [CommonModule, ApIconComponent, MoneyTextPipe],
  templateUrl: './ap-bf-card-bet-control.component.html',
  styleUrl: './ap-bf-card-bet-control.component.css',
})
export class ApBfCardBetControlComponent implements AfterViewInit, OnDestroy {
  @ViewChild('betValueContainer') betValueContainer?: ElementRef<HTMLElement>;
  @ViewChild('betValueText') betValueText?: ElementRef<HTMLElement>;

  bet = input<number>(0);
  isMax = input<boolean>(false);
  isMin = input<boolean>(false);
  isCompactText = signal(false);

  increase = output<void>();
  decrease = output<void>();
  private resizeObserver: ResizeObserver | null = null;
  constructor() { }

  ngAfterViewInit(): void {
    this.resizeObserver = new ResizeObserver(() => this.updateBetTextSize());
    if (this.betValueContainer?.nativeElement) {
      this.resizeObserver.observe(this.betValueContainer.nativeElement);
    }
    if (this.betValueText?.nativeElement) {
      this.resizeObserver.observe(this.betValueText.nativeElement);
    }
    queueMicrotask(() => this.updateBetTextSize());
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  inc() {
    this.increase.emit();
  }

  dec() {
    this.decrease.emit();
  }

  clickDecrease(): void {
    if (this.isMin()) return;
    this.dec();
  }

  clickIncrease(): void {
    if (this.isMax()) return;
    this.inc();
  }

  private updateBetTextSize(): void {
    const container = this.betValueContainer?.nativeElement;
    const text = this.betValueText?.nativeElement;
    if (!container || !text) return;

    this.isCompactText.set(text.scrollWidth > container.clientWidth);
  }
}
