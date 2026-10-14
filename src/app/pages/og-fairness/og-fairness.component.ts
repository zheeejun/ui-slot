import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, OnInit, output, signal, } from '@angular/core';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApUiTabGroupComponent } from '../../components/ap-ui-tab-group/ap-ui-tab-group.component';
import { TabItem } from '../../components/ap-ui-tab-group/ap-ui-tab-group.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApOgProvablyFairComponent } from '../../components/ap-og-provably-fair/ap-og-provably-fair.component';
import { OgFairnessTabType, OgFairnessView, OgSeedData } from './og-fairness.interface';
import { OgFairnessSeedComponent } from '../og-fairness-seed/og-fairness-seed.component';
import { ApOgFairnessVerifyChickenComponent } from '../../components/ap-og-fairness-verify-chicken/ap-og-fairness-verify-chicken.component';
import { OgWalletService } from '../../services/og-wallet/og-wallet.service';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';



@Component({
  selector: 'og-fairness',
  imports: [CommonModule, ApUiFramePopupComponent, ApUiTabGroupComponent, ApOgProvablyFairComponent, OgFairnessSeedComponent, ApOgFairnessVerifyChickenComponent, AppI18nPipe],
  templateUrl: './og-fairness.component.html',
  styles: [
    `
      :host ::ng-deep ap-ui-frame-popup.provable-actions > div > ap-button:last-of-type {
        left: 0.75rem;
        right: auto;
      }
    `,
  ],
})
export class OgFairnessComponent implements OnInit {
  readonly appI18n = inject(AppI18nService);
  readonly wallet = inject(OgWalletService);
  // inputs
  readonly initialView = input<OgFairnessView>('fairness');
  readonly initialSelectedTab = input<OgFairnessTabType>('seeds');
  readonly initialSeedData = input<OgSeedData | null>(null);
  // outputs
  readonly close = output<void>();
  /** 畫面有分fairness與provable兩種頁面 */
  readonly currentView = signal<OgFairnessView>('fairness');
  /** fairness頁面有 seeds 跟 verify 兩個分頁 */
  readonly selectedTab = signal<OgFairnessTabType>('seeds');
  /** fairness頁面分頁名稱 seeds | verify */
  readonly tabs = computed<TabItem[]>(() => [
    { id: 'seeds', label: this.appI18n.instant('og_fair_seeds', 'Seeds') },
    { id: 'verify', label: this.appI18n.instant('og_fair_verify', 'Verify') },
  ]);
  /** 讀取玩家登入時的 RTP */
  readonly rtp = computed(() => this.wallet.rtp());

  ngOnInit(): void {
    // 初始化頁籤與驗證欄位的值
    this.currentView.set(this.initialView());
    this.selectedTab.set(this.initialSelectedTab());
  }

  selectTab(tabId: string): void {
    this.selectedTab.set(tabId as OgFairnessTabType);
  }

  clickProvable(): void {
    this.currentView.set('provable');
  }
}

export { OgFairnessComponent as OriginalFairnessPopupComponent };
