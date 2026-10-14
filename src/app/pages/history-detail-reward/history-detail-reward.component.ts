import { Component, computed, DestroyRef, inject, input, OnInit, signal, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HistoryListItem } from '../../services/history-ctrl/history-list.interface';
import { ApIconComponent } from "../../../ap-components-lib/ap-icon/ap-icon.component";
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { HistoryCtrlService } from '../../services/history-ctrl/history-ctrl.service';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { MoneyTextPipe } from "../../shared/pipe/money-text.pipe";
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { ApLoadingOverlayComponent } from "../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'history-detail-reward',
  imports: [ApIconComponent, MoneyTextPipe, ApLoadingOverlayComponent],
  templateUrl: './history-detail-reward.component.html',
  styleUrl: './history-detail-reward.component.css',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HistoryDetailRewardComponent implements OnInit {
  protected readonly i18n = inject(AppI18nService);
  protected readonly historyCtrl = inject(HistoryCtrlService);
  protected readonly api = inject(AppInterfaceService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly locale = inject(ClientSessionService).locale;
  readonly isLoading = signal<boolean>(true);
  readonly currency = computed(() => this.api.currencySymbol());
  readonly item = input<HistoryListItem | null>(null);
   ticket = computed<string>(() => this.item()?.transaction || 'N/A');
  // Table Headers
  readonly betTitle = this.i18n.computed('history_bet', 'Bet');
  readonly balanceTitle = this.i18n.computed('history_balance', 'Balance');
  readonly winTitle = this.i18n.computed('history_win', 'Win');
  // bet / balance / win values
  readonly winDown = signal<number | null>(null);
  readonly balanceOld = signal<number | null>(null);
  readonly balanceNew = signal<number | null>(null);
  // CashDrop Detail Labels
  readonly dateLabel = this.i18n.computed('history_date', 'Date');
  readonly statusLabel = this.i18n.computed('history_jackpot_status', 'Status');
  readonly mainPrizeLabel = this.i18n.computed('cashdrop_D2_3', 'Main Prize');
  readonly mysteryPrizeLabel = this.i18n.computed('cashdrop_D2_4', 'Mystery Prize');
  // CashDrop Detail Values
  readonly mainPrize = signal<number | null>(null);
  readonly mysteryPrize = signal<number | null>(null);
  readonly runningDateTime = signal<string>('');
  readonly settledDateTime = signal<string>('');
  // Campaign Detail Labels
  readonly nameLabel = this.i18n.computed('promo_name', 'Name');
  readonly amountLabel = this.i18n.computed('history_withdraw_amount', 'Withdraw Amount');
  readonly expiryDateLabel = this.i18n.computed('promo_expire_date', 'Expiry Date:');
  readonly turnoverRequirementLabel = this.i18n.computed('TurnoverRequirement_Text', 'Turnover Requirement:');
  readonly bonusBalanceLabel = this.i18n.computed('promo_balance', 'Bonus Balance');
  readonly maxWithdrawLabel = this.i18n.computed('MaxWithdraw_Text', 'Max Withdraw:');
  readonly minWithdrawLabel = this.i18n.computed('MinWithdraw_Text', 'Min Withdraw:');
  // Campaign Detail Values
  readonly campaignName = signal<string>('');
  readonly campaignAmount = signal<number | null>(null);
  readonly campaignExpiryDate = signal<string>('');
  readonly campaignTurnoverRequirement = signal<number | null>(null);
  readonly campaignBonusBalance = signal<number | null>(null);
  readonly campaignMaxWithdraw = signal<number | null>(null);
  readonly campaignMinWithdraw = signal<number | null>(null);
  // Display Label
  readonly campaignRewardLabel = this.i18n.computed('history_bonus_withdraw', 'Bonus Withdraw');
  readonly cashDropRewardLabel = this.i18n.computed('cashdrop_D1_1', 'CashDrop Reward');

  readonly displayName = computed<string>(() => {
    const item = this.item();
    if (!item) return '';
    if (item.rewardType === 'CashDrop Reward') return this.cashDropRewardLabel();
    if (item.rewardType === 'Bonus Withdraw') return this.campaignRewardLabel();
    return '';
  });

  readonly isCashDrop = computed(() => this.item()?.rewardType === 'CashDrop Reward');
  readonly isCampaign = computed(() => this.item()?.rewardType === 'Bonus Withdraw');
  copyTransaction = output<string>();
  readonly isWinResult = computed(() => !!this.item()?.isWin);
  readonly isDetailThemeDark = computed(() => this.item()?.detailTheme === 'dark');
  readonly showExpiryDate = signal(false);
  ngOnInit() {
    this.historyCtrl.campaignDetail$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((detail) => {
      this.campaignName.set(detail.name);
      this.campaignAmount.set(detail.amount);
      this.campaignExpiryDate.set(new Date(detail.expiryDate).toLocaleString(this.locale, { hour12: false }));
      this.campaignTurnoverRequirement.set(detail.turnoverRequirement);
      this.campaignBonusBalance.set(detail.bonusBalance);
      this.campaignMaxWithdraw.set(detail.maxWithdraw);
      this.campaignMinWithdraw.set(detail.minWithdraw);
      this.isLoading.set(false);
    });
    this.historyCtrl.cashDropDetail$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((detail) => {
      this.balanceOld.set(detail.beforeBalance);
      this.balanceNew.set(detail.afterBalance);
      this.winDown.set(detail.totalWin);
      this.mainPrize.set(detail.mainPrize);
      this.mysteryPrize.set(detail.mysteryPrize);
      this.runningDateTime.set(new Date(detail.runningTime).toLocaleString(this.locale, { hour12: false }));
      this.settledDateTime.set(new Date(detail.settledTime).toLocaleString(this.locale, { hour12: false }));
      this.isLoading.set(false);
    });
    this.historyCtrl.getHistoryDetail(this.item() || null);
  }



  clickCopyTransaction(item: HistoryListItem, event?: Event) {
    event?.stopPropagation();
    this.copyTransaction.emit(item.transaction);
  }
}
