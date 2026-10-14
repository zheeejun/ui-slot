import { Component, output, signal, computed, inject, input, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ApUiFramePageComponent } from '../../components/ap-ui-frame-page/ap-ui-frame-page.component';
import { SelectedTabType } from './info.interface';
import { TabMenuItem, } from '../../../ap-components-lib/ap-tab-menu-icon/ap-tab-menu-icon.component';
import { InfoFeatureComponent } from '../info-feature/info-feature.component';
import { InfoGuideComponent } from '../info-guide/info-guide.component';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { InfoPayTableDefaultComponent } from "../info-pay-table-default/info-pay-table-default.component";
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { GACollectorService } from '../../services/datacollector/gacollector.service';
import { InfoTabGAMap } from '../../services/datacollector/gacollector.interface';
import { ApTabMenuTextComponent } from '../../../ap-components-lib/ap-tab-menu-text/ap-tab-menu-text.component';
import { ApWebCustomPlatformKey } from '../../../chiikawa/ApWeb/ApWebInterface';
type CategoryType = 'title' | 'subtitle' | 'image' | 'content';
type PositionType = 'left' | 'center' | 'right';

enum EntryEnum {
  title_left = 0,
  title_center = 1,
  title_right = 2,
  subtitle_left = 3,
  subtitle_center = 4,
  subtitle_right = 5,
  image_left = 6,
  image_center = 7,
  image_right = 8,
  content_left = 9,
  content_center = 10,
  content_right = 11,
}

class InfoEntry {
  readonly category: CategoryType = 'content';
  readonly position: PositionType = 'center';
  readonly content: string = 'Invalid entry.';
  readonly activedTab = signal<SelectedTabType>('Pay Table');
  constructor(str: string) {
    // ex: 1@DOUBLE CHANCE"
    const match = str.split('@');
    if (match) {
      const prefix: string = EntryEnum[Number(match[0])]; // '1 -> title_center'
      const subfix: string = match[1]; // 'DOUBLE CHANCE'
      this.category = prefix.split('_')[0] as CategoryType; // 'title'
      this.position = prefix.split('_')[1] as PositionType; // 'center'
      this.content = subfix;
    }
  }
}


@Component({
  selector: 'page-info',
  imports: [CommonModule, ApUiFramePageComponent, InfoFeatureComponent, InfoGuideComponent, InfoPayTableDefaultComponent, ApTabMenuTextComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  private appI18n = inject(AppI18nService);
  private gaCollector = inject(GACollectorService);
  readonly header = computed(() => this.appI18n.instant('info') ?? 'Info');
  readonly hidePayTable = input(false);
  readonly tabs = computed<TabMenuItem[]>(() => {
    const tabs: TabMenuItem[] = [];

    if (!this.hidePayTable()) {
      tabs.push({
        id: 'Pay Table',
        label: this.appI18n.instant('paytable') ?? 'Pay Table',
        icon: 'document-text',
      });
    }

    tabs.push(
      {
        id: 'Feature',
        label: this.appI18n.instant('feature') ?? 'Feature',
        icon: 'sparkles',
      },
      {
        id: 'Guide',
        label: this.appI18n.instant('guide') ?? 'Guide',
        icon: 'book-open',
      },
    );

    return tabs;
  });
  readonly activedTab = signal<SelectedTabType>('Pay Table');
  readonly isBack = signal<boolean>(false);

  // Breadcrumbs
  readonly breadcrumbs = computed(() => {
    const tab = this.tabs().find(t => t.id === this.activedTab());
    return [
      { label: this.header(), url: '/info' },
      { label: tab?.label ?? this.activedTab(), url: `/info/${this.activedTab()}` },
    ];
  });
  readonly hideTurboGuide = input(false);
  readonly hideAutoplay = input(false);
  readonly hideNoteItem2 = input(false);

  close = output<void>();
  protected isLoadingFinished: boolean = false;
  protected featureEntries: InfoEntry[] = [];
  protected paytableEntries: InfoEntry[] = [];
  protected gameId = '10087';
  constructor(
    protected http: HttpClient,
    protected profile: PlayerWalletService,
    protected login: ClientSessionService, protected api: AppInterfaceService,
  ) {
    effect(() => {
      const visibleTabs = this.tabs();
      const currentTab = this.activedTab();
      const hasCurrentTab = visibleTabs.some(tab => tab.id === currentTab);

      if (!hasCurrentTab && visibleTabs.length > 0) {
        this.activedTab.set(visibleTabs[0].id as SelectedTabType);
      }
    });
  }
  ngOnInit(): void {

  }
  // State
  selectedTab = signal<SelectedTabType>('Pay Table');
  selectTab(buttonType: string): void {
    this.selectedTab.set(buttonType as SelectedTabType);
  }
  changeTab(tabId: string): void {
    this.activedTab.set(tabId as SelectedTabType);
    const gaName = InfoTabGAMap[tabId] ?? `info_tab_${tabId}`;
    this.gaCollector.trackButtonClick({ buttonName: gaName });
  }

  async ngAfterViewInit() {
    const data = await this.getInfoData();
    this.featureEntries = data.feature;
    const _loginResult = this.api.loginResult();
    if (_loginResult && (_loginResult as any)['rtp']) {
      this.featureEntries.push(new InfoEntry('9@● RTP: ' + (_loginResult as any)['rtp']));
    }
    this.paytableEntries = data.paytable;
    this.isLoadingFinished = true;
  }

  protected async getInfoData(): Promise<{
    feature: InfoEntry[];
    paytable: InfoEntry[];
  }> {
    return new Promise<{ feature: InfoEntry[]; paytable: InfoEntry[] }>(
      (resolve, reject) => {
        const path = `../system/game_word/${this.gameId
          }/${this.login.language}/game_word.json`;
        this.http.get(path).subscribe({
          next: (data) => {
            const feature = Object.entries(data)
              .filter(([key]) => key.startsWith('info_feature_'))
              .map(([, value]) => value);
            const paytable = Object.entries(data)
              .filter(([key]) => key.startsWith('info_paytable_'))
              .map(([, value]) => value);
            resolve({
              feature: feature.map((value) => new InfoEntry(value)),
              paytable: paytable.map((value) => new InfoEntry(value)),
            });
          },
          error: (err) => {
            reject(err);
          },
        });
      },
    );
  }
}