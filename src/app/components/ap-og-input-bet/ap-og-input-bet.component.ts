import { Component, computed, effect, inject, input, model, OnInit, output, signal } from '@angular/core';
import Decimal from 'decimal.js';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { OgBetLevelEntry } from '../../services/og-wallet/og-wallet.interface';
import { OgWalletService } from '../../services/og-wallet/og-wallet.service';

@Component({
  selector: 'ap-og-input-bet',
  standalone: true,
  imports: [ApInputBox, ApButtonComponent],
  templateUrl: './ap-og-input-bet.component.html',
  styleUrls: ['./ap-og-input-bet.component.css'],
})
export class ApOgInputBetComponent implements OnInit {
  // Services
  private readonly appI18n = inject(AppI18nService);
  
  // Inputs
  readonly value = input<number>(0);
  readonly betLevel = input<OgBetLevelEntry[]>([]);
  readonly disabled = input<boolean>(false);
  readonly label = input<string | undefined>(undefined);
  readonly placeholder = input<string | undefined>(undefined);
  readonly currencyImage = input<string | null>(null);

  // signal
  /** 目前的BetString, 因為對於input box而言, 1跟1.0是不同的字串, 為了觸發正確的更新, 必須使用字串 */
  readonly betString = signal<string>('0');
  /** 當Bet數值改變時觸發, 會控制在最小與最大下注金額之間 */
  readonly betChanged = output<number>();

  constructor() {
    effect(() => {
      const value = this.value();
      this.betString.set(this.formatBet(value));
    });
  }

  ngOnInit(): void {

  }

  /** 計算最終的 disabled 狀態 */
  readonly computedDisabled = computed(() => {
    if (this.disabled()) { return true; }

    // 如果betLevel沒有值, 代表還沒拿到登入資訊, 先讓使用者不能輸入
    if (!this.betLevel() || this.betLevel().length === 0) {
      return true;
    }
    return false;
  });

  /** 計算最小下注金額 */
  readonly minBet = computed(() => {
    const levels = this.betLevel();
    if (levels.length === 0) return 0;
    return levels[0].min;
  });

  /** 計算最大下注金額 */
  readonly maxBet = computed(() => {
    const levels = this.betLevel();
    if (levels.length === 0) return 0;
    return levels[levels.length - 1].max;
  });

  /** Bet的間隔 */
  readonly interval = computed(() => {
    // 從bet跟betLevel裡面計算出目前的interval
    const bet = this.bet();
    const level = this.betLevel().find((l) => bet >= l.min && bet <= l.max);
    return level?.interval ?? 0;
  });

  /** 小數點位數 */
  readonly decimalPlaces = computed(() => {
    // 先從interval去計算小數點位數
    const interval = this.interval();
    return interval > 0 ? Math.max(0, -Math.floor(Math.log10(interval))) : 0;
  });

  /** 目前的BetString轉數字bet, */
  readonly bet = computed(() => {
    const betString = this.betString();
    const bet = this.correctBet(parseFloat(betString)) ?? this.minBet();
    return bet;
  });

  readonly inputLabel = computed(
    () => this.label() ?? this.appI18n.instant('og_bet_info_betAmount', 'Bet Amount'),
  );

  readonly rawInputPlaceholder = computed(() => this.placeholder() ?? '0.000');

  readonly halfLabel = computed(() => this.appI18n.instant('og_bet_info_half', '1/2'));
  readonly doubleLabel = computed(() => this.appI18n.instant('og_bet_info_2x', '2x'));
  readonly maxLabel = computed(() => this.appI18n.instant('og_bet_info_max', 'Max'));

  onBlur(value: string) {
    const numericValue = Number(value);
    const correctedValue = this.correctBet(numericValue);
    this.betString.set(this.formatBet(correctedValue || this.minBet()));
    this.betChanged.emit(this.bet());
  }

  onHalfBet(): void {
    const bet = this.bet() / 2;
    const correctedValue = this.correctBet(bet);
    this.betString.set(this.formatBet(correctedValue || this.minBet()));
    this.betChanged.emit(this.bet());
  }

  onDoubleBet(): void {
    const bet = this.bet() * 2;
    const correctedValue = this.correctBet(bet);
    this.betString.set(this.formatBet(correctedValue || this.minBet()));
    this.betChanged.emit(this.bet());
  }

  onMaxBet(): void {
    this.betString.set(this.formatBet(this.maxBet()));
    this.betChanged.emit(this.bet());
  }

  onInputChanged(value: string) {
    this.betString.set(value);
  }

  onIncreased(value: string) {
    this.betString.set(value);
    this.betChanged.emit(this.bet());
  }

  onDecreased(value: string) {
    this.betString.set(value);
    this.betChanged.emit(this.bet());
  }

  /** 找出value所屬的betLevel */
  private findLevel(value: number): OgBetLevelEntry | null {
    return this.betLevel().find((l) => value >= l.min && value <= l.max) ?? null;
  }

  correctBet(value: number): number | null {
    // 如果不是數字或小於等於0, 直接回傳最小下注金額
    if (isNaN(Number(value)) || Number(value) <= 0) {
      return this.minBet();
    }

    // 比minbet小, 直接回傳minBet
    if (value < this.minBet()) {
      return this.minBet();
    }

    // 比maxbet大, 直接回傳maxBet
    if (value > this.maxBet()) {
      return this.maxBet();
    }

    // 找到對應的betLevel, 並將value修正成合法的下注金額
    if (this.betLevel().length === 0) return null;
    const level = this.findLevel(value);
    if (!level) return null;
    // 使用 Decimal 避免浮點數誤差，造成下注金額被多向下修正一個 interval
    return new Decimal(value)
      .div(level.interval)
      .floor()
      .mul(level.interval)
      .toNumber();
  }

  /** 依照value自己所屬betLevel的interval, 格式化成正確的小數位數字串 */
  private formatBet(value: number): string {
    const level = this.findLevel(value) ?? this.betLevel()[0];
    const interval = level?.interval ?? 0;
    const decimalPlaces = interval > 0 ? Math.max(0, -Math.floor(Math.log10(interval))) : 0;
    return value.toFixed(decimalPlaces);
  }
}
