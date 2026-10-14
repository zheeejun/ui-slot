import { Component, computed, inject, input, output, signal } from '@angular/core';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApToggleSwitchComponent } from "../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component";
import { HistoryListOGComponent } from '../history-list-og/history-list-og.component';
import { InfoOgComponent } from '../info-og/info-og.component';
import { OgFairnessComponent } from '../og-fairness/og-fairness.component';
import { SoundService } from '../../services/sound-service/sound-service';
import { OgWalletService } from '../../services/og-wallet/og-wallet.service';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';

type DemoMenuActionSet = {
  readonly onInfo: () => void;
  readonly onHistory: () => void;
  readonly onSound: () => void;
  readonly onFairness: () => void;
};

type DemoMenuItemId = 'info' | 'history' | 'sound' | 'fairness';

interface DemoMenuItem {
  readonly id: DemoMenuItemId;
  readonly labelKey: string;
  readonly labelFallback: string;
  readonly action: () => void;
}

const DEMO_MENU_ICON_MAP: Record<DemoMenuItemId, string> = {
  info: 'exclamation-circle',
  history: 'document-text',
  sound: 'speaker-wave',
  fairness: 'scale',
};

function createDemoMenuItems(
  actions: DemoMenuActionSet,
): readonly DemoMenuItem[] {
  return [
    {
      id: 'info',
      labelKey: 'og_topList_info',
      labelFallback: 'Info',
      action: actions.onInfo,
    },
    {
      id: 'history',
      labelKey: 'og_topList_history',
      labelFallback: 'History',
      action: actions.onHistory,
    },
    {
      id: 'sound',
      labelKey: 'og_topList_sound',
      labelFallback: 'Sound',
      action: actions.onSound,
    },
    {
      id: 'fairness',
      labelKey: 'og_topList_fairness',
      labelFallback: 'Fairness',
      action: actions.onFairness,
    },
  ];
}

@Component({
  selector: 'og-header',
  imports: [ApIconComponent, MoneyTextPipe, ApToggleSwitchComponent, HistoryListOGComponent, InfoOgComponent, OgFairnessComponent],
  templateUrl: './og-header.component.html',
  styleUrl: './og-header.component.css'
})
export class OgHeaderComponent {
  private readonly appI18n = inject(AppI18nService);
  // private readonly destroyRef = inject(DestroyRef);
  private readonly soundService = inject(SoundService);
  private readonly wallet = inject(OgWalletService);
  private readonly game = inject(GameIframeCtrlService);
  readonly isFairnessDisabled = input<boolean>(false);
  readonly isHistoryDisabled=input<boolean>(false);
  readonly currencyImage = computed<string | boolean>(() => this.wallet.currencyIconUrl() ?? 'assets/images/currency/img_coin_DEMO.svg');
  readonly displayBalance = computed(() => this.wallet.displayBalance());
  readonly isSoundOn = signal<boolean>(true);
  readonly showMenu = signal<boolean>(false);
  readonly showHistory = signal<boolean>(false);
  readonly showInfo = signal<boolean>(false);
  readonly showFairness = signal<boolean>(false);
  readonly clickInfo = output<void>();
  readonly clickHistory = output<void>();
  readonly clickFairness = output<void>();
  readonly checkedChange = output<boolean>();
  readonly iconMap = computed<Record<DemoMenuItemId, string>>(
    () => ({
      ...DEMO_MENU_ICON_MAP,
      sound: this.isSoundOn() ? 'speaker-wave' : 'speaker-wave pressed',
    }),
  );
  // 遊戲若啟用，停用公平性驗證按鈕，避免玩家在遊戲中途切換公平性驗證
  readonly disabledMap = computed<Record<DemoMenuItemId, boolean>>(() => ({
    info: false,
    history:  this.isHistoryDisabled(),
    sound: false,
    fairness: this.isFairnessDisabled(),
  }));
  readonly menuItems = computed<readonly DemoMenuItem[]>(() =>
    createDemoMenuItems({
      onInfo: () => this.onClickInfo(),
      onHistory: () => this.onClickHistory(),
      onSound: () => this.onClickSound(),
      onFairness: () => this.onClickFairness(),
    }).map((item) => ({
      ...item,
      labelFallback: this.appI18n.instant(item.labelKey, item.labelFallback),
    })),
  );

  onClickMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.showMenu.set(true);
  }

  onClickInfo(): void {
    this.showMenu.set(false);
    this.showInfo.set(true);
    this.clickInfo.emit();
  }

  onClickHistory(): void {
    if (this.isHistoryDisabled()) {
      return;
    }
    this.showMenu.set(false);
    this.showHistory.set(true);
    this.clickHistory.emit();
  }
  // 當遊戲狀態改變時, 會觸發此事件, 讓選公平性驗證按鈕可以隨著遊戲狀態改變而啟用或停用
  onClickFairness(): void {
    if (this.isFairnessDisabled()) {
      return;
    }
    this.showMenu.set(false);
    this.showFairness.set(true);
    this.clickFairness.emit();
  }

  onClickSound(): void {
    this.onMenuSoundChange(!this.isSoundOn());
  }

  onMenuSoundChange(value: boolean): void {
    this.game.send(createApWebMessage('SetMusic', { enabled: value }));
    this.game.send(createApWebMessage('SetSound', { enabled: value }));
    this.isSoundOn.set(value);
    this.soundService.setMuted(!value);
  }

  onClickMenuOutside(): void {
    this.showMenu.set(false);
  }

  closeHistory(): void {
    this.showHistory.set(false);
  }

  closeInfo(): void {
    this.showInfo.set(false);
  }

  closeFairness(): void {
    this.showFairness.set(false);
  }
}
