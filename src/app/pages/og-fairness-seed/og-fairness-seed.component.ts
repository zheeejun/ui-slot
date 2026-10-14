import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, output, signal } from '@angular/core';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { OgWalletService } from '../../services/og-wallet/og-wallet.service';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';
import { ApOgInputComponent } from '../../components/ap-og-input/ap-og-input.component';
import { ApToastComponent } from '../../../ap-components-lib/ap-toast/ap-toast.component';
@Component({
  selector: 'og-fairness-seed',
  imports: [CommonModule, AppI18nPipe, ApOgInputComponent, ApToastComponent],
  templateUrl: './og-fairness-seed.component.html',
})
export class OgFairnessSeedComponent {
  readonly appI18n = inject(AppI18nService);
  readonly wallet = inject(OgWalletService);
  readonly isLoading = signal<boolean>(false);

  /** 複製成功的提示訊息 */
  readonly copyToastMessage = this.appI18n.computed('og_fair_copy', 'Copied');
  readonly toastPosition = signal<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  /** 允許的種子字元模式 (僅允許英文字母和數字) */
  readonly seedPattern = this.wallet.seedAllowedCharacterPattern;

  // 目前Seed相關資料
  readonly activeServerSeedHash = computed(() => this.wallet.activeServerSeedHash());
  readonly activeClientSeed = computed(() => this.wallet.activeClientSeed());
  readonly activeNonce = computed(() => Math.floor(this.wallet.activeNonce()).toString());
  readonly nextServerSeedHash = computed(() => this.wallet.displayedNextServerSeedHash());
  readonly nextClientSeed = signal<string>(this.wallet.displayedNextClientSeed());

  readonly invaildClientSeed = computed<boolean>(() => {
    // nextClientSeed必須長度為1~64
    return this.nextClientSeed().length < 1 || this.nextClientSeed().length > 64;
  });

  clickChangeClientSeed(): void {
    this.wallet.changeClientSeed(this.nextClientSeed());
    this.nextClientSeed.set(this.wallet.displayedNextClientSeed());
    this.isLoading.set(true);
    // 訂閱種子更換事件, 當更換完成後取消訂閱
    const sub = this.wallet.seedChanged$.subscribe(() => {
      this.isLoading.set(false);
      sub.unsubscribe();
    });
  }

  async copyTransaction(transaction: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(transaction);
    } catch {
      // Keep the feedback toast usable even if clipboard access is blocked.
    }
  }

  positionToastAtButton(event: MouseEvent): void {
    const button = (event.target as HTMLElement).closest('button');
    if (!button) return;

    const buttonRect = button.getBoundingClientRect();
    this.toastPosition.set({
      left: buttonRect.left + buttonRect.width / 2,
      top: buttonRect.top,
    });
  }
}
