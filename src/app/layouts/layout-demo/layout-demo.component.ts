import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, signal, input, ViewEncapsulation } from '@angular/core';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { MoneyTextPipe } from '../../shared/pipe/money-text.pipe';
import { ClickOutsideDirective } from '../../shared/directives/click-out-side/click-out-side.directive';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import {
  createDemoGameSetup, createDemoMenuItems, DEMO_MENU_ICON_MAP, DemoMenuItem, DemoMenuItemId,
} from './layout-demo.config';
import { InfoOgComponent } from '../../pages/info-og/info-og.component';
import { HistoryListOGComponent } from "../../pages/history-list-og/history-list-og.component";
import { ApMessageComponent } from '../../../ap-components-lib/ap-message/ap-message.component';
import { ApToggleSwitchComponent } from '../../../ap-components-lib/ap-toggle-switch/ap-toggle-switch.component';
import { SoundService } from '../../services/sound-service/sound-service';
import { OgPanelComponent } from "../../pages/og-panel/og-panel.component";

type LayoutDemoMessage = {
  id: number;
  text: string;
};

/**
 * LayoutDemoComponent 是一個用於展示遊戲的佈局組件
 * 基本是展示主要UI, 內容也是以離線模式為主
 */
@Component({
  selector: 'layout-demo',
  imports: [CommonModule, ApIconComponent, MoneyTextPipe, ClickOutsideDirective,
    InfoOgComponent, HistoryListOGComponent, ApMessageComponent,
    ApToggleSwitchComponent, OgPanelComponent],
  templateUrl: './layout-demo.component.html',
  styleUrl: './layout-demo.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LayoutDemoComponent implements OnInit, OnDestroy {
  private nextMessageId = 0;
  private readonly document = inject(DOCUMENT);
  private readonly appI18n = inject(AppI18nService);
  private readonly soundService = inject(SoundService);
  api = inject(AppInterfaceService);
  session = inject(ClientSessionService);
  displayCurrency = signal<string>('DEMO');
  displayBalance = signal<number>(0);
  isSoundOn = signal<boolean>(true);
  showFairness = signal<boolean>(false);
  readonly showHistory = signal<boolean>(false);
  readonly showInfo = signal<boolean>(false);
  readonly showMenu = signal<boolean>(false);
  readonly autoMessages = signal<LayoutDemoMessage[]>([]);
  readonly iconMap = computed<Record<DemoMenuItemId, string>>(
    () => ({
      ...DEMO_MENU_ICON_MAP,
      sound: this.isSoundOn() ? 'speaker-wave' : 'speaker-wave pressed',
    }),
  );
  readonly currencyImage = input('assets/images/currency/img_coin_DEMO.svg')
  readonly gameImage = input('assets/images/img_30011.jpg')
  readonly menuItems = computed<readonly DemoMenuItem[]>(() =>
    createDemoMenuItems({
      onInfo: () => this.onMenuInfo(),
      onHistory: () => this.onMenuHistory(),
      onSound: () => this.onMenuSound(),
      onFairness: () => this.onMenuFairness(),
    }).map((item) => ({
      ...item,
      labelFallback: this.appI18n.instant(item.labelKey, item.labelFallback),
    })),
  );

  private readonly narrowMQ = this.document.defaultView!.matchMedia('(max-aspect-ratio: 4/3)');
  private readonly isNarrowViewport = signal(this.narrowMQ.matches);
  private readonly onNarrowChange = (e: MediaQueryListEvent) => this.isNarrowViewport.set(e.matches);
  readonly showMobileLayout = computed(() => this.session.isMobile() || this.isNarrowViewport());

  constructor() { }
  dismissShowFairness(): void {
    this.showFairness.set(false);
  }

  toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.showMenu.update((v) => !v);
  }

  closeMenu(): void {
    this.showMenu.set(false);
  }

  onMenuInfo(): void {
    this.showMenu.set(false);
    this.showInfo.set(true);
  }

  onMenuHistory(): void {
    this.showMenu.set(false);
    this.showHistory.set(true);
  }

  onMenuSound(): void {
    this.onMenuSoundChange(!this.isSoundOn());
  }

  onMenuSoundChange(value: boolean): void {
    this.isSoundOn.set(value);
    this.soundService.setMuted(!value);
  }

  onMenuFairness(): void {
    this.closeMenu();
    this.showFairness.set(true);
  }

  closeHistory(): void {
    this.showHistory.set(false);
  }

  closeInfo(): void {
    this.showInfo.set(false);
  }

  onAutoRunningChange(value: boolean): void {
    const text = value
      ? (this.appI18n.instant('og_autobet_autoStartTip') ?? 'Autobet started')
      : (this.appI18n.instant('og_autobet_autoEndTip') ?? 'Autobet finished');
    const message: LayoutDemoMessage = {
      id: this.nextMessageId++,
      text,
    };
    this.autoMessages.update((messages) => [message, ...messages]);
  }

  dismissAutoMessage(id: number): void {
    this.autoMessages.update((messages) =>
      messages.filter((message) => message.id !== id),
    );
  }

  ngOnInit(): void {
    this.document.body.classList.add('layout-demo-active');
    this.api.setup(createDemoGameSetup(this.session.language));
    this.narrowMQ.addEventListener('change', this.onNarrowChange);
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('layout-demo-active');
    this.narrowMQ.removeEventListener('change', this.onNarrowChange);
  }
}
