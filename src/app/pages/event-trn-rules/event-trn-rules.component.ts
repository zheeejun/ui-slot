import { Component, output, input, computed, inject, signal } from '@angular/core';
import { ApTrnGameListComponent} from '../../components/ap-trn-game-list/ap-trn-game-list.component';
import { RuleItem, RuleItemGroup, RuleSection } from './event-trn-rules.interface';
import { defaultQuickSections,defaultEventSections,} from './event-trn-rules.data';
import { TrnData } from '../../services/trn-ctrl/trn-ctrl.interface';
import { AppInterfaceService } from '../../services/app-interface/app-interface.service';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
@Component({
  selector: 'event-trn-rules',
  imports: [ApTrnGameListComponent],
  templateUrl: './event-trn-rules.component.html',
})
export class EventTrnRulesComponent {
  private appI18n = inject(AppI18nService);
  protected api = inject(AppInterfaceService);
  readonly getQuickTimeLabel = this.appI18n.computed(
    'RegularEvent_Tag',
    'Regular Event',
  );
  readonly getDaysLabel = this.appI18n.computed('DAYS', 'DAYS');
  readonly getHoursLabel = this.appI18n.computed('HRS', 'HRS');
  readonly getMinutesLabel = this.appI18n.computed('MINS', 'MINS');
  readonly getSecondsLabel = this.appI18n.computed('SECS', 'SECS');
  readonly getCountdownStartTitle = this.appI18n.computed(
    'StartIn_Tip',
    'Start in',
  );
  readonly getCountdownEndTitle = this.appI18n.computed('EndIn_Tip', 'End in');
  goBack = output<void>();
  close = output<void>();
  //* 積分
  bonusPoint=signal<number>(500)||null;
  variant = computed<'quick' | 'event'>(() => {
    return this.currentTrn()?.type || 'event';
  });
  currentTrn = input<TrnData | null>(null);
  quickSections = input<RuleSection[]>(defaultQuickSections);
  eventSections = input<RuleSection[]>(defaultEventSections);

  //* 字串轉換
  currentSections = computed(() =>
    (this.variant() === 'quick' ? this.quickSections() : this.eventSections()).map((section) => ({
      ...section,
      title: section.titleKey ? this.appI18n.instant(section.titleKey, section.title) : section.title,
      items: section.items.map((item) =>
        this.isRuleGroup(item)
          ? { ...item, text: item.textKey ? this.appI18n.instant(item.textKey, item.text) : item.text }
          : { ...item, text: item.key ? this.appI18n.instant(item.key, item.text) : item.text }
      ),
    })),
  );

  titleColor = computed(() =>
    this.variant() === 'quick' ? 'text-yellow-200' : 'text-purple-200',
  );

  // Event handlers
  handleBack(): void {
    this.goBack.emit();
  }

  handleClose(): void {
    this.close.emit();
  }

  // Get countdown time from data based on variant
  getCountdownTime(): string {
    return '';
  }

  isRuleGroup(item: RuleItem): item is RuleItemGroup {
    return 'items' in item;
  }
}
