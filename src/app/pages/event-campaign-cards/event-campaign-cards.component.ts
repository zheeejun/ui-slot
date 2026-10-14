import { Component, computed, effect, ElementRef, inject, output, signal } from '@angular/core';
import { ApCampaignCardComponent } from '../../components/ap-campaign-card/ap-campaign-card.component';
import { PlayerWalletService } from '../../services/player-wallet/player-wallet.service';
import { CommonModule } from '@angular/common';
import { CampaignFacadeService } from '../../services/campaign-ctrl/campaign-facade.service';
import { defaultCampaignGroups } from './event-campaign-data';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { EventCenterCtrlService } from '../../services/event-center-ctrl/event-center-ctrl.service';
import { EventCampaignContentComponent } from "../event-campaign-content/event-campaign-content.component";
import { EventCampaignCardData } from './event-campaign-cards.interface';
import { StorageCtrlService } from '../../services/storage-ctrl/storage-ctrl.service';
import { CampaignGroup } from '../../services/campaign-ctrl/campaign-ctrl.interface';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'event-campaign-cards',
  imports: [ApCampaignCardComponent, CommonModule, EventCampaignContentComponent, ApIconComponent],
  templateUrl: './event-campaign-cards.component.html',
  styleUrl: './event-campaign-cards.component.css',
})
export class EventCampaignCardsComponent {
  /** Service injections */
  protected wallet = inject(PlayerWalletService);
  protected session = inject(ClientSessionService);
  protected campaignCtrl = inject(CampaignFacadeService);
  protected api = inject(AppInterfaceService);
  protected eventCenter = inject(EventCenterCtrlService);
  protected storage = inject(StorageCtrlService);
  private appI18n = inject(AppI18nService);
  private readonly elRef = inject(ElementRef<HTMLElement>);
  private prevShowContent = false;
  /** 最大記錄的點擊過的活動卡片數量 */
  readonly maxRecordedClickedCards = 20;
  /** Campaign card data and events */
  readonly campaignGroups = computed<CampaignGroup[]>(() => this.campaignCtrl.campaignGroupList());
  readonly isEmpty = computed(() => this.campaignGroups().length === 0);
  /** 字串串接 */
  readonly getNoDataText = this.appI18n.computed('item_ItemCanntBuyDesc', 'Coming Soon...');
  showContent = computed(() => { return this.eventCenter.subPath() !== ''; });
  /* 跳至卡片上方 */ 
  constructor() {
    effect(() => {
      const current = this.showContent();
      if (this.prevShowContent && !current) {
        this.scrollToTop();
      }
      this.prevShowContent = current;
    });
  }

  private scrollToTop(): void {
    let container: HTMLElement | null = this.elRef.nativeElement.parentElement;
    while (container) {
      const overflow = getComputedStyle(container).overflowY;
      if (overflow === 'auto' || overflow === 'scroll') {
        container.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      container = container.parentElement;
    }
  }
  userId = computed(() => this.api.loginResultNote()?.nickname ?? '');
  onClickCard(groupId: string) {
    this.campaignCtrl.recordClickedGroup(groupId);
    this.scrollToTop();
    this.eventCenter.open(`campaign/${groupId}`);
  }

  checkNew(groupId: string): boolean {
    return this.campaignCtrl.checkNewGroup(groupId);
  }
}
