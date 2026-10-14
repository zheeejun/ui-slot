import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, output, signal, } from '@angular/core';
import { ApTabMenuTextComponent } from '../../../ap-components-lib/ap-tab-menu-text/ap-tab-menu-text.component';
import { ApUiFramePageComponent } from '../../components/ap-ui-frame-page/ap-ui-frame-page.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { GACollectorService } from '../../services/datacollector/gacollector.service';
import { InfoTabGAMap } from '../../services/datacollector/gacollector.interface';
import { ApInfoGuideOGComponent } from '../../components/ap-info-guide-og/ap-info-guide-og.component';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';
import {featureItems, guideItems,
  type InfoOgFeatureItem,
  type InfoOgGuideItem,
} from './info-og.data';
import { InfoCtrlService } from '../../services/info-ctrl/info-ctrl.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { OgWalletService } from '../../services/og-wallet/og-wallet.service';
type InfoOgTabType = 'Feature' | 'Guide';

type InfoOgTabItem = {
  readonly id: InfoOgTabType;
  readonly label: string;
};

@Component({
  selector: 'info-og',
  imports: [CommonModule, ApUiFramePageComponent, ApTabMenuTextComponent,
    ApInfoGuideOGComponent,
    AppI18nPipe,
  ],
  templateUrl: './info-og.component.html',
  styleUrl: './info-og.component.css',
})
export class InfoOgComponent {
  private appI18n = inject(AppI18nService);
  protected info = inject(InfoCtrlService);
  protected game = inject(GameIframeCtrlService);
  protected session = inject(ClientSessionService);
  protected wallet = inject(OgWalletService);
   /** info feature的版本是看system info的版本 */
  version = computed(() => this.session.version().sys);
  readonly header = computed(() => this.appI18n.instant('info') ?? 'Info');
  readonly activedTab = signal<InfoOgTabType>('Feature');
  readonly hideTurboGuide = input(false);
  readonly hideAutoplay = input(false);
  readonly hideNoteItem2 = input(false);
  readonly close = output<void>();
  readonly currencyImage = computed(() => this.wallet.currencyIconUrl());
  readonly tabs = computed<InfoOgTabItem[]>(() => [
    {
      id: 'Feature',
      label: this.appI18n.instant('feature') ?? 'Feature',
    },
    {
      id: 'Guide',
      label: this.appI18n.instant('guide') ?? 'Guide',
    },
  ]);

  readonly featureItems = computed<InfoOgFeatureItem[]>(() => featureItems);
  readonly guideItems = computed<InfoOgGuideItem[]>(() => guideItems);

  protected getFeatureDescription(item: InfoOgFeatureItem): string {
    return this.appI18n.instantGame(
      item.descriptionKey,
      this.appI18n.instant(item.descriptionKey, item.descriptionFallback),
    );
  }

  changeTab(tabId: string): void {
    this.activedTab.set(tabId as InfoOgTabType);
    const gaName = InfoTabGAMap[tabId] ?? `info_tab_${tabId}`;
  }

  readonly gameVersion = computed(() => {
    return this.game.gameVersion() ?? '';
  });
}
