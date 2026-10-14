import * as CryptoJS from 'crypto-js';
import Decimal from 'decimal.js';
import {
  Game30011Difficulty,
  Game30011FairnessParams,
  Game30011FairnessResult,
} from './game-30011-fairness.interface';

/**
 * 每個難度的步數 / 每步死亡機率 / 倍數成長率 / 獎金轉盤觸發機率。
 * 目前尚未有正式 RTP 設計文件，數值為結構性佔位，待遊戲數值定案後替換。
 */
const DIFFICULTY_CONFIG: Record<
  Game30011Difficulty,
  {
    stepCount: number;
    deathChancePerStep: number;
    multiplierGrowth: number;
    bonusTriggerChance: number;
  }
> = {
  easy: { stepCount: 20, deathChancePerStep: 0.05, multiplierGrowth: 1.05, bonusTriggerChance: 0.08 },
  medium: { stepCount: 15, deathChancePerStep: 0.1, multiplierGrowth: 1.12, bonusTriggerChance: 0.1 },
  hard: { stepCount: 10, deathChancePerStep: 0.18, multiplierGrowth: 1.28, bonusTriggerChance: 0.12 },
  expert: { stepCount: 5, deathChancePerStep: 0.32, multiplierGrowth: 1.6, bonusTriggerChance: 0.15 },
};

const BONUS_MULTIPLIER_POOL = [3, 5, 10, 20, 50, 100];

function hmacSha256Hex(serverSeed: string, message: string): string {
  return CryptoJS.HmacSHA256(message, serverSeed).toString(CryptoJS.enc.Hex);
}

/** 驗證公開的 Server Seed 是否對應承諾的 SHA-256 hash */
export function hashGame30011ServerSeed(serverSeed: string): string {
  return CryptoJS.SHA256(serverSeed).toString(CryptoJS.enc.Hex);
}

/** 取 hex 字串中一段 8 碼(32 bits)，正規化為 [0, 1) 的浮點數 */
function hexSliceToUnit(hex: string, start: number): number {
  const slice = hex.substring(start, start + 8);
  return parseInt(slice, 16) / 0x100000000;
}

function truncateTo(value: number, digits: number): number {
  return new Decimal(value).toDecimalPlaces(digits, Decimal.ROUND_DOWN).toNumber();
}

/** Angular 版本的 provably-fair 計算，對應 Cocos 版 CrashFairnessFormula.CalAns / TowerFairnessFormula.CalAns 的 HMAC-SHA256 種子推導模式 */
export function calculateGame30011Fairness(
  params: Game30011FairnessParams,
): Game30011FairnessResult {
  const config = DIFFICULTY_CONFIG[params.difficulty];
  const stepMultipliers: number[] = [];
  const bonusPoints: number[] = [];
  const bonusMultipliers: number[] = [];
  let deathPoint = config.stepCount + 1;

  for (let stepIndex = 1; stepIndex <= config.stepCount; stepIndex++) {
    const stepHash = hmacSha256Hex(
      params.serverSeed,
      `${params.clientSeed}:${params.nonce}:${stepIndex}`,
    );
    const deathRoll = hexSliceToUnit(stepHash, 0);
    const bonusTriggerRoll = hexSliceToUnit(stepHash, 8);
    const bonusPickRoll = hexSliceToUnit(stepHash, 16);

    stepMultipliers.push(truncateTo(Math.pow(config.multiplierGrowth, stepIndex), 2));

    if (deathRoll < config.deathChancePerStep && deathPoint > config.stepCount) {
      deathPoint = stepIndex;
    }

    if (bonusTriggerRoll < config.bonusTriggerChance && stepIndex < deathPoint) {
      const poolIndex = Math.floor(bonusPickRoll * BONUS_MULTIPLIER_POOL.length);
      bonusPoints.push(stepIndex);
      bonusMultipliers.push(BONUS_MULTIPLIER_POOL[poolIndex]);
    }
  }

  const safeSteps = deathPoint - 1;
  const maxMultiplier = safeSteps > 0 ? stepMultipliers[safeSteps - 1] : 0;

  return {
    stepCount: config.stepCount,
    stepMultipliers,
    bonusPoints,
    bonusMultipliers,
    deathPoint,
    maxMultiplier,
  };
}
