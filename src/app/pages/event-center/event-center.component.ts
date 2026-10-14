import { Component, output, signal, input, OnInit, inject, computed, ViewChild, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';
import { EventCampaignCardsComponent } from '../event-campaign-cards/event-campaign-cards.component';
import { EventBuyFeatureComponent } from '../event-buy-feature/event-buy-feature.component';
import { EventCashdropComponent } from '../event-cashdrop/event-cashdrop.component';
import { EventPromoCodeComponent } from '../event-promocode/event-promocode.component';
import { CampaignTypeName, PromoCodeExchangeTypeEnum } from '../../services/campaign-ctrl/campaign-ctrl.interface';
import { EventcenterTabName } from './event-center.type';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { ApUiFramePageComponent } from '../../components/ap-ui-frame-page/ap-ui-frame-page.component';
import { EventTrnComponent } from "../event-trn/event-trn.component";
import { TabMenuItem, ApTabMenuIconComponent } from '../../../ap-components-lib/ap-tab-menu-icon/ap-tab-menu-icon.component';
import { LoggerService } from '../../services/logger/logger.service';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { TrnCtrlService } from '../../services/trn-ctrl/trn-ctrl.service';
import { GameIframeCtrlService } from '../../services/game-iframe-ctrl/game-iframe-ctrl.service';
import { createApWebMessage } from '../../../chiikawa/ApWeb/ApWebMessages';
import { CampaignFacadeService } from '../../services/campaign-ctrl/campaign-facade.service';
import { CashDropService } from '../../services/cash-drop/cash-drop.service';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { EventLeaderBoardBannerComponent } from '../event-leader-board-banner/event-leader-board-banner.component';
@Component({
  selector: 'event-center',
  standalone: true,
  imports: [
    ApUiFramePageComponent, EventBuyFeatureComponent, EventCashdropComponent, EventPromoCodeComponent, EventTrnComponent, ApTabMenuIconComponent,
    EventCampaignCardsComponent,ApTabMenuIconComponent,EventLeaderBoardBannerComponent

],
  templateUrl: './event-center.component.html',
  styleUrls: ['./event-center.component.css'],
})
export class EventCenterComponent {
  protected api = inject(AppInterfaceService);
  private appI18n = inject(AppI18nService);
  protected logger = inject(LoggerService);
  protected loginCtrl = inject(ClientSessionService);
  protected eventCenter = inject(EventCenterCtrlService);
  protected trn = inject(TrnCtrlService);
  protected session = inject(ClientSessionService);
  protected campaignCtrl = inject(CampaignFacadeService);
  protected wallet = inject(PlayerWalletService);
  protected cashDrop = inject(CashDropService);
  protected gameIframe = inject(GameIframeCtrlService);

  readonly isVisible = computed(() => this.eventCenter.isVisible());
  readonly CampaignNoteType = signal<CampaignTypeName>('freeBonus');
  readonly activedTab = computed<EventcenterTabName>(() => { return this.eventCenter.path(); });
  readonly showPromoCodeTab = computed(() => {
    return this.campaignCtrl.codeExchangeType() === PromoCodeExchangeTypeEnum.OpenExchange ||
      this.campaignCtrl.codeExchangeType() === PromoCodeExchangeTypeEnum.OpenExchangeAndQR;
  });
  readonly subPath = computed<string>(() => { return this.eventCenter.subPath(); });
  readonly isBack = computed(() => this.subPath() !== '');
  readonly activeTabLabel = computed(() => {
    const tab = this.tabs().find(t => t.id === this.activedTab());
    return tab?.label ?? this.activedTab();
  });
  readonly gameBreadcrumbLabel = this.appI18n.computed(
    this.loginCtrl.gameId ?? '',
    this.loginCtrl.gameId ?? 'Game'
  );
  
  readonly trnLabel = this.appI18n.computed('Tournament_EventCenter_Tab', 'Event Center');
  readonly detailTrn = computed(() => {
    const id = this.subPath();
    if (!id) return null;
    return this.trn.trnList().find(t => t.id === id) ?? null;
  });
  readonly detailName = computed(() => {
    const tab = this.activedTab();
    const id = this.subPath();
    if (!id) return '';
    if (tab === 'tournament') return this.detailTrn()?.name ?? id;
    if (tab === 'campaign') return this.campaignCtrl.campaignGroupList().find(g => g.id === id)?.title ?? id;
    return id;
  });

  readonly buyFeatureTab = computed<TabMenuItem>(() => ({ id: 'buy-feature', label: this.appI18n.instant('BuyFeature_EventCenter_Tab', 'Buy Feature'), icon: 'shopping-cart', hasBadge: false }));
  readonly trnTab = computed<TabMenuItem>(() => ({ id: 'tournament', label: this.appI18n.instant('Tournament_EventCenter_Tab', 'Tournament'), icon: 'trophy', hasBadge: false, disabled: this.trn.trnList().length === 0 }));
  readonly campaignTab = computed<TabMenuItem>(() => ({
    id: 'campaign', label: this.appI18n.instant('Campaign_EventCenter_Tab', 'Campaign'), icon: 'gift',
    hasBadge: this.campaignCtrl.haveNewGroup()
  }));
  readonly cashDropTab = computed<TabMenuItem>(() => ({
    id: 'cash-drop', label: this.appI18n.instant('Cashdrop_EventCenter_Tab', 'Cash Drop'), icon: 'two-coins',
    hasBadge: this.cashDrop.hasNew()
  }));
  readonly promoCodeTab = computed<TabMenuItem>(() => ({ id: 'promo-code', label: this.appI18n.instant('Coupon_EventCenter_Tab', 'Coupon'), icon: 'ticket', hasBadge: false }));
  readonly leaderBoardTab = computed<TabMenuItem>(() => ({ id: 'leader-board', label: this.appI18n.instant('LeaderBoard_EventCenter_Tab', 'Leader Board'), icon: 'ranking', hasBadge: false }));
  readonly rewardSystemTab = computed<TabMenuItem>(() => ({
    id: 'reward-system', label: this.appI18n.instant('RewardSystem_EventCenter_Tab', 'Reward System'), icon: 'crown',
    hasBadge: this.gameIframe.rsNotification()
  }));

  readonly tabs = computed<TabMenuItem[]>(() => {
    const tabs: TabMenuItem[] = [];
    const isOffline = this.loginCtrl.offline;
    const note = this.api.loginResult()?.note;
    // offline 模式顯示全部分頁, 其餘有各自的顯示條件

    // Buy Feature 是否顯示
    if (isOffline || !this.wallet.isBuyFeatureDisabled()) { tabs.push(this.buyFeatureTab()) };
    // Tournament 是否顯示
    if (isOffline || this.trn.showTab()) { tabs.push(this.trnTab()); }
    // Campaign 是否顯示
    if (isOffline || this.campaignCtrl.showTab()) { tabs.push(this.campaignTab()); }
    // Cash Drop 是否顯示
    if (isOffline || this.cashDrop.showTab()) { tabs.push(this.cashDropTab()); }
    // Promo Code 是否顯示
    if (isOffline || this.showPromoCodeTab()) { tabs.push(this.promoCodeTab()); }
    // Leader Board 是否顯示
    if (isOffline || (Number(note?.leader_board ?? 0) > 0)) { tabs.push(this.leaderBoardTab()); }
    // Reward System 是否顯示
    if (isOffline || (note?.rewardsystem ?? false)) { tabs.push(this.rewardSystemTab()); }
    return tabs;
  });

  changeTab(tab: string) {
    // 如果點擊 reward-system tab，開啟獎勵系統並關閉 event center
    if (tab === 'reward-system') {
      this.openRewardSystem();
      return;
    }
    this.eventCenter.open(tab);
  }

  /**
   * 開啟獎勵系統
   * 1. 對 GameIframeCtrlService 送出 WebOpenRS, true 的 Message
   * 2. 關閉 event center UI
   */
  openRewardSystem() {
    // 發送訊息到遊戲 iframe 開啟獎勵系統
    this.gameIframe.send(createApWebMessage('WebOpenRS', { enabled: true }));
    // 慢1~2禎後(防止閃一下)關閉 event center 
  }

  onClickBack() {
    this.eventCenter.back();
  }

  onClickClose() {
    this.eventCenter.close();
  }
}
