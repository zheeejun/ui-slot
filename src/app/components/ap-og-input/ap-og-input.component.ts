import { Component, computed, inject, input, output } from '@angular/core';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { ApSelectComponent } from '../../../ap-components-lib/ap-select/ap-select.component';
import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';
import { ApUiTabGroupComponent } from '../ap-ui-tab-group/ap-ui-tab-group.component';
import { TabItem } from '../ap-ui-tab-group/ap-ui-tab-group.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { INPUT_TYPE_CONFIG, I18nText, OriginalBottomPanelInputType} from './ap-og-input.interface';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ButtonVariant } from '../../../ap-components-lib/ap-button/ap-button.interface';
import { OgWalletService } from '../../services/og-wallet/og-wallet.service';


type ApOgInputNativeType = 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'date' | 'time' | 'alnum';

/** 'alnum' 只允許輸入英文字母與數字 */
const ALNUM_CHARACTER_PATTERN = /^[A-Za-z0-9]$/;

@Component({
  selector: 'ap-og-input',
  standalone: true,
  imports: [ApInputBox, ApSelectComponent, ApUiTabGroupComponent, ApButtonComponent],
  templateUrl: './ap-og-input.component.html',
  styleUrls: ['./ap-og-input.component.css'],
})
export class ApOgInputComponent {
  private readonly appI18n = inject(AppI18nService);
  readonly type = input<OriginalBottomPanelInputType | undefined>(undefined);
  readonly label = input<string | undefined>(undefined);
  readonly labelSecondary = input<string | null>(null);
  readonly inputType = input<ApOgInputNativeType>('number');
  /** 輸入框目前顯示的數值，隨使用者輸入透過 valueChange 雙向更新 */
  readonly value = input('');
  readonly placeholder = input<string | undefined>(undefined);
  /** 輸入框限制只能輸入英文及數字 */
  readonly allowedCharacterPattern = input<RegExp | null>(null);
  readonly min = input<string | number | undefined>(undefined);
  readonly max = input<string | number | undefined>(undefined);
  readonly maxLength = input<number | null>(null);
  readonly step = input<string | number | undefined>(undefined);
  readonly options = input<ApSelectOption[] | undefined>(undefined);
  readonly suffix = input<string | null>(null);
  readonly infinity = input<string | boolean | null>(null);
  readonly disabled = input(false);
  readonly valueDisabled = input(false);
  readonly actionIcon = input<string | null>(null);
  readonly actionLabel = input<string | null>(null);
  /** action 按鈕按下時要送出的固定值，與 value 無關，透過 pressed 輸出 */
  readonly actionValue = input<string | null>(null);
  /** 控制 action 按鈕本身是否可按，與輸入框的 disabled 分開 */
  readonly actionDisabled = input(false);
  readonly valueChange = output<string>();
  readonly pressed = output<string>();
  readonly selectedTab = input<string>('');
  readonly tabChange = output<string>();
  readonly selectedTabChange = output<string>();
  readonly tabItems = input<TabItem[]>([]);
  readonly currencyImage = input<string | boolean>(false);
  readonly actionVariant = computed<ButtonVariant>(() => 'content');
  readonly hasAction = computed(() => !!this.actionIcon() || !!this.actionLabel());

  /** 'alnum' 對原生 input 而言等同 'text'，實際限制由 resolvedAllowedCharacterPattern 處理 */
  readonly resolvedInputType = computed<Exclude<ApOgInputNativeType, 'alnum'>>(() => {
    const type = this.inputType();
    return type === 'alnum' ? 'text' : type;
  });
  readonly resolvedAllowedCharacterPattern = computed(
    () => this.allowedCharacterPattern() ?? (this.inputType() === 'alnum' ? ALNUM_CHARACTER_PATTERN : null),
  );

  /* 字串串接 */
  private translateText(
    text: string | I18nText | null | undefined,
  ): string | null {
    if (!text) return null;
    if (typeof text === 'string') return text;
    if (text.source === 'game') {
      return this.appI18n.gameStr(text.key) ?? text.fallback;
    }
    return this.appI18n.instant(text.key, text.fallback);
  }
  readonly inputLabel = computed(() => {
    const type = this.type();
    return (
      this.label() ?? this.translateText(type ? INPUT_TYPE_CONFIG[type].label : null) ?? ''
    );
  });
  readonly rawInputPlaceholder = computed(() => {
    const type = this.type();
    return (
      this.placeholder() ??
      this.translateText(type ? INPUT_TYPE_CONFIG[type].placeholder : null) ??
      null
    );
  });

  readonly isValueDisabled = computed(() => this.disabled() || this.valueDisabled());
  /** 投注次數的無限邏輯 */
  readonly showInfinity = computed(() => {
    if (!this.infinity()) return false;
    return Number(this.value()) === 0;
  });
  
  readonly inputMin = computed(() => {
    const type = this.type();
    return this.min() ?? (type ? INPUT_TYPE_CONFIG[type].min : null) ?? null;
  });

  readonly inputMax = computed(() => {
    const type = this.type();
    return this.max() ?? (type ? INPUT_TYPE_CONFIG[type].max : null) ?? null;
  });

  readonly selectedStep = computed(() => {
    const type = this.type();
    return this.step() ?? (type ? INPUT_TYPE_CONFIG[type].step : null) ?? null;
  });

  onPressed(): void {
    this.pressed.emit(this.actionValue() ?? this.rawInputPlaceholder() ?? '');
  }

  readonly autoCashOutOptions = computed<ApSelectOption[]>(() => {
    const min = Number(this.inputMin() ?? 1);
    const max = Number(this.inputMax() ?? min);
    const options: ApSelectOption[] = [];
    for (let step = min; step <= max; step++) {
      options.push({ value: step.toString(), label: step.toString() });
    }
    return options;
  });

  readonly selectedOptions = computed<ApSelectOption[] | null>(() => {
    const override = this.options();
    if (override !== undefined) return override;
    const type = this.type();
    const options = (type ? INPUT_TYPE_CONFIG[type].options : null) ?? null;
    if (!options) return null;

    return options.map((option) => ({
      ...option,
      label: option.labelKey
        ? option.labelSource === 'game'
          ? (this.appI18n.gameStr(option.labelKey) ?? option.label)
          : this.appI18n.instant(option.labelKey, option.label)
        : option.label,
    }));
  });

  readonly tabOptions = computed<TabItem[]>(() => {
    if (this.tabItems().length > 0) {
      return this.tabItems();
    }

    const type = this.type();
    const configTabItems = type ? INPUT_TYPE_CONFIG[type].tabItems : null;
    if (configTabItems) {
      return configTabItems.map((item) => ({
        id: item.id,
        label: this.translateText(item.label) ?? '',
        disabled: item.disabled,
      }));
    }

    return (this.selectedOptions() ?? []).map((option) => ({
      id: option.value,
      label: option.label,
    }));
  });
}
