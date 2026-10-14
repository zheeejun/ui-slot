import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApCashdropCardComponentCountdown } from '../../components/ap-cashdrop-card-component-countdown/ap-cashdrop-card-component-countdown.component';
import { ApBfPopupConfirmChanceComponent } from '../../components/ap-bf-popup-confirm-chance/ap-bf-popup-confirm-chance.component';
import { ApBfPopupConfirmFeatureComponent } from '../../components/ap-bf-popup-confirm-feature/ap-bf-popup-confirm-feature.component';
import { ApBfPopupPlayDemoConfirmComponent } from '../../components/ap-bf-popup-play-demo-confirm/ap-bf-popup-play-demo-confirm.component';
import { ApHistoryPopupReplayComponent } from '../../components/ap-history-popup-replay/ap-history-popup-replay.component';
import { ApHistoryPopupReplayEndComponent } from '../../components/ap-history-popup-replay-end/ap-history-popup-replay-end.component';
import { ApHistoryPopupShareComponent } from '../../components/ap-history-popup-share/ap-history-popup-share.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApBuyFeatureCard } from '../event-buy-feature/event-buy-feature.interface';
import { HistoryListItem } from '../../services/history-ctrl/history-list.interface';

type PopupKey =
  | 'frame-default'
  | 'popup-insufficient'
  | 'popup-reward'
  | 'popup-promo'
  | 'history-replay'
  | 'history-replay-end'
  | 'history-share'
  | 'bf-confirm-feature'
  | 'bf-confirm-chance'
  | 'bf-play-demo';

type PopupDemo = {
  key: PopupKey;
  label: string;
};

@Component({
  selector: 'dev-popup',
  imports: [
    CommonModule,
    ApButtonComponent,
    ApIconComponent,
    ApCashdropCardComponentCountdown,
    ApBfPopupConfirmChanceComponent,
    ApBfPopupConfirmFeatureComponent,
    ApBfPopupPlayDemoConfirmComponent,
    ApHistoryPopupReplayComponent,
    ApHistoryPopupReplayEndComponent,
    ApHistoryPopupShareComponent,
    ApUiFramePopupComponent,
  ],
  templateUrl: './dev-popup.component.html',
  styleUrl: './dev-popup.component.css',
})
export class DevPopupComponent {
  readonly activePopup = signal<PopupKey | null>(null);

  readonly popupDemos: PopupDemo[] = [
    { key: 'frame-default', label: 'Frame Popup' },
    { key: 'popup-insufficient', label: 'Insufficient Popup' },
    { key: 'popup-reward', label: 'Reward Popup' },
    { key: 'popup-promo', label: 'Promo Popup' },
    { key: 'history-replay', label: 'Replay Confirm' },
    { key: 'history-replay-end', label: 'Replay End' },
    { key: 'history-share', label: 'Share Popup' },
    { key: 'bf-confirm-feature', label: 'Buy Feature Confirm' },
    { key: 'bf-confirm-chance', label: 'Buy Chance Confirm' },
    { key: 'bf-play-demo', label: 'Play Demo Confirm' },
  ];

  readonly mockBuyFeatureCard: ApBuyFeatureCard = {
    mode: 'bf',
    currency: 'USD',
    rate: 100,
    order: 1,
    isDemoAvailable: true,
  };

  readonly mockBuyChanceCard: ApBuyFeatureCard = {
    mode: 'dc',
    currency: 'USD',
    rate: 50,
    order: 2,
    isDemoAvailable: true,
  };

  readonly mockHistoryItem: HistoryListItem = {
    date: '2026-06-08',
    time: '2026-06-08 12:30:00',
    type: 'Spin' as any,
    rewardType: 'Normal Game',
    buyFeatureMode: 'bf',
    transaction: 'TXN-DEMO-001',
    currency: 'USD',
    bet: 100,
    win: 250,
    replay: true,
    isWin: true,
  };

  openPopup(key: PopupKey): void {
    this.activePopup.set(key);
  }

  closePopup(): void {
    this.activePopup.set(null);
  }

  async getMockShareUrl(): Promise<string | null> {
    return 'https://example.com/replay/demo-share-link';
  }
}
