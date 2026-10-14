import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, computed, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';
import { ApOgInputComponent } from '../ap-og-input/ap-og-input.component';
import { ApInputBox } from '../../../ap-components-lib/ap-input-box/ap-input-box';
import { calcSpinResult, DIFFICULTY_RATES, SpinResult, WheelResult } from './chickenRoadFormula';
import { OgChickenDifficultyEnum, OgChickenDifficultyType } from '../../pages/og-panel/og-panel.interface';
import { OgSeedData } from '../../pages/og-fairness/og-fairness.interface';
import { ApButtonCustomComponent } from "../../../ap-components-lib/ap-button-custom/ap-button-custom.component";

@Component({
  selector: 'ap-og-fairness-verify-chicken',
  imports: [CommonModule, AppI18nPipe, ApOgInputComponent, ApInputBox, ApButtonCustomComponent],
  templateUrl: './ap-og-fairness-verify-chicken.component.html',
})
export class ApOgFairnessVerifyChickenComponent implements AfterViewInit {
  readonly appI18n = inject(AppI18nService);
  readonly seedPattern = /^[A-Za-z0-9]$/;
  readonly verifyColorCode = input<string>('#DB3737');
  readonly scrollContainer = viewChild<ElementRef<HTMLDivElement>>('scrollContainer');
  readonly initialSeedData = input<OgSeedData | null>(null);
  readonly provableClicked = output<void>();
  readonly maxPointByDifficulty: Record<OgChickenDifficultyType, number> = {
    easy: 28,
    medium: 24,
    hard: 20,
    expert: 16
  };

  readonly invalidInput = computed<boolean>(() => {
    // verifyClientSeed必須長度為1~64, verifyServerSeed必須長度為64, verifyNonce必須為數字
    return (
      this.verifyClientSeed().length < 1 ||
      this.verifyClientSeed().length > 64 ||
      this.verifyServerSeed().length !== 64 ||
      isNaN(Number(this.verifyNonce()))
    );
  });

  readonly wheelResult = signal<WheelResult[] | null>(null);
  readonly deathPoint = signal<number | null>(null);

  readonly maxMultiplier = computed<number>(() => {
    if (this.deathPoint() === null) return 0;
    const difficulty = OgChickenDifficultyEnum[this.verifyDifficulty()];
    // index是從1開始算的, 所以要減1
    const deathIndex = this.deathPoint()! - 1;
    // deathPoint前一格倍率
    return DIFFICULTY_RATES[difficulty][deathIndex - 1] ?? 0;
  });

  /** ex: 1, 3, 5 */
  readonly displayedBonusPoint = computed<string>(() => {
    if (this.invalidInput()) return '--';
    if (!this.wheelResult()) return '--';
    else if (this.wheelResult()!.length === 0) return '--';
    return this.wheelResult()!.map((w) => w.step).join(', ');
  });
  /** ex: 1, 10, 1000 */
  readonly displayedBonusMultiplier = computed<string>(() => {
    if (this.invalidInput()) return '--';
    if (!this.wheelResult()) return '--';
    else if (this.wheelResult()!.length === 0) return '--';
    return this.wheelResult()!.map((w) => w.multiplier).join('x, ') + 'x';
  });
  /** ex: 6 */
  readonly displayedDeadPoint = computed<string>(() => {
    if (this.invalidInput()) return '--';
    if (this.deathPoint() === null) return '--';
    if (this.deathPoint()! > this.maxPointByDifficulty[this.verifyDifficulty()]) return '--';
    return this.deathPoint()!.toString();
  });
  /** ex: 23.24 */
  readonly displayedMaxMultiplier = computed<string>(() => {
    if (this.invalidInput()) return '--';
    if (this.maxMultiplier() === 0) return '--';
    return this.maxMultiplier().toFixed(2) + 'x';
  });

  /** 玩家可自行輸入的驗證欄位 */
  readonly verifyClientSeed = signal<string>('');
  readonly verifyServerSeed = signal<string>('');
  readonly verifyServerSeedHashedText = signal<string>('');
  readonly verifyNonce = signal<string>('');
  readonly verifyDifficulty = signal<OgChickenDifficultyType>('easy');
  /** RTP不會顯示在畫面上, 由程式自動帶入 */
  readonly initialRtp = input<string>('96');
  /** 預期 RTP (float) */
  readonly verifyRtp = signal<string>('');

  ngAfterViewInit(): void {
    // 有初始的Verify資料時，將其設定到signal中，讓使用者可以看到並進行驗證
    const seedData = this.initialSeedData();
    this.verifyClientSeed.set(seedData?.clientSeed ?? '');
    this.verifyServerSeed.set(seedData?.serverSeed ?? '');
    this.verifyServerSeedHashedText.set(seedData?.serverSeedHashed ?? '');
    this.verifyNonce.set(seedData?.nonce ?? '');
    this.verifyDifficulty.set((seedData?.difficulty as OgChickenDifficultyType) ?? 'easy');
    // 使用登入拿到的RTP資訊, 不需要使用者輸入
    this.verifyRtp.set(seedData?.rtp ?? this.initialRtp());

    if (seedData?.serverSeed && seedData.serverSeed.length > 0) {
      this.clickVerify();
    }
  }

  setDiplayedResult(result: SpinResult) {
    
    this.wheelResult.set(result.wheel);
    this.deathPoint.set(result.death);
  }

  changeVerifyClientSeed(value: string): void {
    this.wheelResult.set(null);
    this.deathPoint.set(null);
    this.verifyClientSeed.set(value);
  }

  changeVerifyServerSeed(value: string): void {
    this.wheelResult.set(null);
    this.deathPoint.set(null);
    this.verifyServerSeed.set(value);
  }

  changeVerifyServerSeedHashed(value: string): void {
    this.wheelResult.set(null);
    this.deathPoint.set(null);
    this.verifyServerSeedHashedText.set(value);
  }

  changeVerifyNonce(value: string): void {
    this.wheelResult.set(null);
    this.deathPoint.set(null);
    this.verifyNonce.set(value);
  }

  changeVerifyDifficulty(value: string): void {
    this.wheelResult.set(null);
    this.deathPoint.set(null);
    this.verifyDifficulty.set(value as OgChickenDifficultyType);
  }

  clickVerify(): void {
    const input = {
      rtp: Number(this.verifyRtp()),
      clientSeed: this.verifyClientSeed(),
      serverSeed: this.verifyServerSeed(),
      nonce: Math.floor(Number(this.verifyNonce())),
      difficulty: OgChickenDifficultyEnum[this.verifyDifficulty()],
    }
    const result = calcSpinResult(input);
    this.setDiplayedResult(result);
    this.scrollContainer()?.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clickProvable(): void {
    this.provableClicked.emit();
  }
}
