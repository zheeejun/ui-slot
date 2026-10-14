import { Component, computed, inject, input, output, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { ApToastComponent } from '../../../ap-components-lib/ap-toast/ap-toast.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';
import { ApOgInputComponent } from '../ap-og-input/ap-og-input.component';
import { safeParse } from '../../shared/Protobuf/proto-base';
import { OgChickenDifficultyEnum, OgChickenDifficultyType, OgChickenGameEvent } from '../../pages/og-panel/og-panel.interface';
import { calc } from '../../services/player-wallet/player-wallet.function';
import { LoggerService } from '../../services/logger/logger.service';
import { IServerHistorySpinDetailSeed } from '../../services/history-ctrl/history-server.interface';
import { ApIconChickenComponent } from "../../icons/ap-icon-chicken/ap-icon-chicken.component";
import { OgSeedData } from '../../pages/og-fairness/og-fairness.interface';
import { BaseSymbolTextureService } from '../../services/base-symbol-texture/base-symbol-texture.service';

/**
 * 每個遊戲的歷史紀錄詳細資訊頁面，包含遊戲結果、種子、驗證等資訊各自獨立
 */
@Component({
  selector: 'ap-og-history-detail-chicken',
  imports: [CommonModule,ApIconComponent,ApButtonComponent,ApInputBox,ApToastComponent,AppI18nPipe,ApOgInputComponent,ApIconChickenComponent],
  templateUrl: './ap-og-history-detail-chicken.component.html',
})
export class ApOgHistoryDetailChickenComponent {
  private readonly symbol = inject(BaseSymbolTextureService);
  protected readonly appI18n = inject(AppI18nService);
  protected readonly logger = inject(LoggerService);
  readonly isDetailThemeDark = input<boolean>(false);
  /** 這一把是否為贏 */
  readonly isWin = input<boolean>(true);
  /** 每一把的遊戲結果event, 每個遊戲格式不同, 統一用字串傳入 */
  readonly eventString = input<string>('{}');
  /** 每一把的遊戲結果seed */
  readonly seed = input<IServerHistorySpinDetailSeed>({
    server_seed: '',
    server_seed_hash: '',
    client_seed: '',
  });

  /** 是否啟用 Provable Link 按鈕，預設 true */
  readonly enableProvableLink = input<boolean>(true);

  /** 每一把的遊戲結果event, 解析成物件 */
  readonly eventObj = computed<OgChickenGameEvent>(() => { 
    const obj = safeParse(this.eventString(), {}) as OgChickenGameEvent;
    this.logger.ogLog('event:', obj);
    return obj;
  });

  /** 獲取歷史紀錄結果圖片連結，會先嘗試從遊戲字串表取得對應圖片名稱，沒有的話回傳 null */
  historyDetailImage = computed<string | null>(() => {
    const gameImageName = this.appI18n.gameStr(this.isWin() ? 'history_result_0' : 'history_result_1');
    return this.symbol.getHistoryTextureUrl(gameImageName);
  });
  
  readonly copyClicked = output<string>();
  // 公平性驗證讀取歷史紀錄與驗證資料
  readonly seedClicked = output<void>();
  readonly verifyClicked = output<OgSeedData>();
  readonly provableClicked = output<void>();
  readonly getGameTitle = computed(
    () => this.appI18n.gameStr('game_title') ?? 'Chicken',
  );
  readonly copyToastMessage = this.appI18n.computed('og_fair_copy', 'Copied');
  readonly serverSeedToast = viewChild<ApToastComponent>('serverSeedToast');
  readonly serverSeedHashToast = viewChild<ApToastComponent>('serverSeedHashToast');
  readonly clientSeedToast = viewChild<ApToastComponent>('clientSeedToast');
  readonly nonceToast = viewChild<ApToastComponent>('nonceToast');


  readonly difficultyOptionLabel = computed(() => {
    // eventObj 裡面的 risk 對應到 OgChickenDifficultyType 的文字
    const risk = this.eventObj()?.risk;
    if (risk === undefined) return '--';
    return this.appI18n.gameStr(`bet_info_level_0${risk+1}`) ?? OgChickenDifficultyEnum[risk];
  });

  /** eventObj 裡面的 risk 對應到 Game30011Difficulty 的字串值，供 verify 計算使用 */
  readonly verifyDifficulty = computed<string>(() => {
    const risk = this.eventObj()?.risk;
    return risk !== undefined ? OgChickenDifficultyEnum[risk] : 'easy';
  });

  readonly stepNumber = computed<number>(() => {
    // 如果 eventObj 裡面有 cashout，則 stepNumber = cashout；如果有 dead，則 stepNumber = dead；否則 stepNumber = steps.length
    const eventObj = this.eventObj();
    if (eventObj.cashout !== undefined) {
      return eventObj.cashout;
    } else if (eventObj.dead !== undefined) {
      return eventObj.dead;
    } else {
      return eventObj.steps?.length ?? 0;
    }
  });
  readonly stepNumberText = computed<string>(() => {
    const stepNumber = this.stepNumber();
    return stepNumber > 0 ? stepNumber.toString() : '--';
  });

  readonly winMultiplierText = computed<string>(() => {
    // steps裡面最後一個winRate
    const steps = this.eventObj()?.steps;
    if (steps && steps.length > 0) {
      const lastStep = steps[steps.length - 1];
      const stepRate = Number(lastStep.step_rate.split('_')[0]);
      return stepRate > 0 ? stepRate.toString() + 'x' : '--';
    }
    return '--';
  });

  readonly bonusWheelPairs = computed<{rate: string, score: number, position: number}[]>(() => {
    const steps = this.eventObj()?.steps;
    const ret: {rate: string, score: number, position: number}[] = [];
    if (steps && steps.length > 0) {
      /** step.wheel有資料就推入bonusWheel的array */
      for (const step of steps) {
        if (step.wheels) {
          for (const wheel of step.wheels) {
            const [multiplier, score, position] = wheel.split('_');
            ret.push({ rate: multiplier, score: calc.s2c(Number(score)), position: Number(position) });
          }
        }
      }
    }
    return ret;
  });

  /** bonusWheel的rate列表 ex, 1, 2, 4 */
  readonly bonusRateText = computed<string>(() => {
    const bonusWheelPairs = this.bonusWheelPairs();
    if (bonusWheelPairs.length > 0) {
      const rates = bonusWheelPairs.map(pair => pair.rate);
      return rates.join('x, ') + 'x';
    }
    return '--';
  });

  /** bonusWheel的score列表 ex, 100, 200, 400 */
  readonly bonusScoreText = computed<string>(() => {
    const bonusWheelPairs = this.bonusWheelPairs();
    if (bonusWheelPairs.length > 0) {
      const scores = bonusWheelPairs.map(pair => pair.score);
      return scores.join(', ');
    }
    return '--';
  });

  readonly bonusWheelPositionText = computed<string>(() => {
    const bonusWheelPairs = this.bonusWheelPairs();
    if (bonusWheelPairs.length > 0) {
      const positions = bonusWheelPairs.map(pair => pair.position);
      return positions.join(', ');
    }
    return '--';
  });

  /** 死掉的格數 */
  readonly deathPoint = computed(() => {
    // 如果 eventObj 裡面有 dead，則 deathPoint = dead；否則 deathPoint 是 null
    const eventObj = this.eventObj();
    if (eventObj.dead !== undefined) {
      return eventObj.dead;
    } else {
      return null;
    }
  });

  /** 死掉的格數 */
  readonly deathPointText = computed(() => {
    const deathPoint = this.deathPoint();
    return deathPoint !== null ? deathPoint.toString() : '--';
  });

  /** 本局能獲得的最大倍率, 通常是死亡前一格的倍率 */
  readonly maxMultiplierText = computed(() => {
    const eventObj = this.eventObj();
    if (eventObj.max !== undefined) {
      return eventObj.max + 'x';
    }
    return '--';
  });

  readonly gameServerSeedText = computed(
    () => this.seed()?.server_seed || '',
  );

  validServerSeed = computed(
    () => this.seed()?.server_seed.length > 0,
  );

  readonly gameServerSeedHashedText = computed(
    () => this.seed()?.server_seed_hash || '',
  );

  readonly gameClientSeedText = computed(
    () => this.seed()?.client_seed || '',
  );

  readonly gameNonceText = computed(
    () => {
      const eventObj = this.eventObj();
      return eventObj?.nonce !== undefined ? eventObj.nonce.toString() : '';
    },
  );

  async clickServerSeedCopy(event?: Event): Promise<void> {
    this.copyClicked.emit(this.seed()?.server_seed || '');
    event?.stopPropagation();
    try {
      await navigator.clipboard.writeText(this.seed()?.server_seed || '');
    } catch {
      // Keep the success feedback visible even if clipboard access is blocked.
    }
    this.serverSeedToast()?.show();
  }

  async clickServerSeedHashCopy(event?: Event): Promise<void> {
    this.copyClicked.emit(this.seed()?.server_seed_hash || '');
    event?.stopPropagation();
    try {
      await navigator.clipboard.writeText(this.seed()?.server_seed_hash || '');
    } catch {
      // Keep the success feedback visible even if clipboard access is blocked.
    }
    this.serverSeedHashToast()?.show();
  }

  async clickClientSeedCopy(event?: Event): Promise<void> {
    this.copyClicked.emit(this.seed()?.client_seed || '');
    event?.stopPropagation();
    try {
      await navigator.clipboard.writeText(this.seed()?.client_seed || '');
    } catch {
      // Keep the success feedback visible even if clipboard access is blocked.
    }
    this.clientSeedToast()?.show();
  }

  async clickNonceCopy(event?: Event): Promise<void> {
    const eventObj = this.eventObj();
    this.copyClicked.emit(eventObj?.nonce !== undefined ? eventObj.nonce.toString() : '');
    event?.stopPropagation();
    try {
      await navigator.clipboard.writeText(eventObj?.nonce !== undefined ? eventObj.nonce.toString() : '');
    } catch {
      // Keep the success feedback visible even if clipboard access is blocked.
    }
    this.nonceToast()?.show();
  }

  clickSeed(): void {
    this.seedClicked.emit();
  }

  clickVerify(): void {
      this.verifyClicked.emit({
      serverSeed: this.gameServerSeedText(),
      serverSeedHashed: this.gameServerSeedHashedText(),
      clientSeed: this.gameClientSeedText(),
      nonce: this.gameNonceText(),
      difficulty: this.verifyDifficulty(),
      rtp: this.eventObj()?.rtp?.toString() ?? '0',
    });
  }

  clickProvable(): void {
    this.provableClicked.emit();
  }
}
