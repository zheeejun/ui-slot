import { Component, computed, DestroyRef, HostBinding, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'ap-ui-version',
  imports: [CommonModule],
  templateUrl: './ap-ui-version.component.html',
  styleUrl: './ap-ui-version.component.css',
})
export class ApUiVersionComponent {
  private destroyRef = inject(DestroyRef);
  private session = inject(ClientSessionService);
  readonly version = computed(() => this.session.version().app);
  readonly showVersion = signal(false);

  @HostBinding('class.pointer-events-none')
  get disablePointerEvents(): boolean {
    return this.showVersion();
  }

  private clickCount = 0;
  private clickTimer$: Subscription | null = null;
  onClick(): void {
    this.clickCount++;
    this.clickTimer$?.unsubscribe();

    if (this.clickCount >= 5) {
      this.clickCount = 0;
      this.showVersion.set(true);
      return;
    }

    // 超過 1.5 秒沒達到5下則重置
    this.clickTimer$ = timer(1500)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.clickCount = 0; });
  }
}
