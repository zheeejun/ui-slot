// crypto-js — cross-platform (Cocos Creator web + native + mini-game)
// npm install crypto-js @types/crypto-js
//
// Usage:
//   import { calcSpinResult } from './chickenRoadFormula';
//   const result = calcSpinResult({ rtp: 96, serverSeed, clientSeed, nonce: 0, difficulty: 0 });
//   // { wheel: [{ step: 3, multiplier: "1" }], death: 24 }

/*
 * ChickenRoad (38011) 公平性驗證公式.
 *
 * 依精算文件 OriginalGames_11_ChickenRoad_FlowChart_v1.0.2 實作:
 * 由 ServerSeed / ClientSeed / Nonce 產生 16 組隨機數, 每 4 組決定一個階段,
 * 每組隨機數為 HMAC-SHA256 輸出的 4 bytes:
 *   cnt 0-3   trigger wheel symbol   哪些轉盤圖示格觸發轉盤
 *   cnt 4-7   every wheel multiplier 已觸發轉盤的倍率
 *   cnt 8-11  dash number            每一格的衝刺格數
 *   cnt 12-15 crash point            撞點判定
 *
 * 格數 (step / death) 一律 1-indexed, 起點為 0.
 * 靜態機率表只跟 difficulty 有關, 若之後精算改表記得同步更新這裡.
 */

import CryptoJS from "crypto-js";

// ==================== 靜態機率表 (精算表, 依 difficulty 分組) ====================

// 各 difficulty 的關卡總數 (Number of level = 28, 24, 20, 16)
const LEVEL_COUNT = [28, 24, 20, 16];

// 各 difficulty 轉盤圖示所在格數 (1-indexed), 只有這些格才有機會觸發轉盤
const WHEEL_SYMBOL_POS: number[][] = [
  [1, 3, 5, 6, 8, 10, 11, 12, 15, 18, 21, 24, 28],
  [1, 3, 5, 7, 10, 13, 16, 19, 22, 24],
  [2, 4, 5, 7, 11, 14, 17, 20],
  [1, 3, 5, 7, 10, 13, 16],
];

// Pass_Probability[difficulty][level-1] = 通過這一格的機率. 用字串保留精度, 計算時轉整數運算.
const PASS_PROBABILITY: string[][] = [
  [
    "0.972245313", "0.980582524", "0.954988517", "0.963636364", "0.941339972",
    "0.936065124", "0.937984496", "0.915837384", "0.920529801", "0.904979003",
    "0.902355805", "0.90114894", "0.908675799", "0.904958678", "0.896778896",
    "0.902356902", "0.902735562", "0.899264107", "0.905472637", "0.90744921",
    "0.906199736", "0.911985019", "0.912820513", "0.910003458", "0.87568306",
    "0.858147714", "0.706125828", "0.519378962",
  ],
  [
    "0.910044802", "0.892561983", "0.871226276", "0.985611511", "0.880389297",
    "0.876404494", "0.860382619", "0.864978903", "0.855595668", "0.849993878",
    "0.841558442", "0.833333333", "0.820771998", "0.81186686", "0.799768519",
    "0.679841373", "0.669656992", "0.60292714", "0.678997254", "0.567381974",
    "0.594691169", "0.38540357", "0.556347829", "0.257067864",
  ],
  [
    "0.757575758", "0.745801898", "0.791855204", "0.744131045", "0.768247773",
    "0.760956175", "0.751507469", "0.736725664", "0.722044728", "0.705749718",
    "0.687066766", "0.666494446", "0.642916459", "0.618427049", "0.583328339",
    "0.545433745", "0.513425602", "0.255672456", "0.295802142", "0.393938608",
  ],
  [
    "0.504488179", "0.597560976", "0.788043459", "0.444683136", "0.631520097",
    "0.651039363", "0.37488265", "0.516535298", "0.645289695", "0.522197724",
    "0.547103052", "0.23076895", "0.528570351", "0.315314992", "0.316666423",
    "0.287081525",
  ],
];

// Wheel_Triggered[difficulty] = [未觸發權重, 觸發權重]
const WHEEL_TRIGGERED: number[][] = [
  [9900, 100],
  [9900, 100],
  [9900, 100],
  [9900, 100],
];

// Wheel_Multiplier_Value / Wheel_Multiplier_Weight = 轉盤倍率值與對應權重
const WHEEL_MULTIPLIER_VALUE: number[][] = [
  [1, 3, 5, 8, 10, 30, 50, 100, 1000, 10000],
  [1, 3, 5, 8, 30, 50, 100, 500, 1000, 10000],
  [1, 3, 5, 8, 50, 100, 500, 1000, 3000, 10000],
  [1, 3, 5, 8, 100, 500, 1000, 3000, 5000, 10000],
];
const WHEEL_MULTIPLIER_WEIGHT: number[][] = [
  [64500, 35000, 354, 100, 20, 10, 8, 5, 2, 1],
  [64500, 35000, 354, 100, 20, 10, 8, 5, 2, 1],
  [64500, 35000, 354, 100, 20, 10, 8, 5, 2, 1],
  [64500, 35000, 354, 100, 20, 10, 8, 5, 2, 1],
];

// Dash_Number_Value / Dash_Number_Weight = 衝刺格數值與對應權重
const DASH_NUMBER_VALUE: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
const DASH_NUMBER_WEIGHT: number[][] = [
  [18, 1, 1],
  [13, 1, 1],
  [8, 1, 1],
  [12, 1, 1],
];

// 支援的 RTP. 機率表共用, RTP 只影響開局的初始判定門檻.
const SUPPORTED_RTP = [96, 99];

// 困難度, 位置對應的倍率
export const DIFFICULTY_RATES: number[][] =  [
    [1.01, 1.03, 1.06, 1.10, 1.15, 1.21, 1.29, 1.39, 1.51, 1.65, 1.81, 1.99, 2.19, 2.42, 2.68, 2.97, 3.29, 3.64, 4.02, 4.43, 4.87, 5.34, 5.85, 6.41, 7.32, 8.53, 12.08, 23.24],
    [1.08, 1.21, 1.37, 1.39, 1.56, 1.78, 2.05, 2.37, 2.77, 3.24, 3.85, 4.62, 5.61, 6.91, 8.64, 12.69, 18.95, 31.43, 46.27, 81.55, 137.13, 355.79, 639.51, 2487.69],
    [1.32, 1.75, 2.21, 2.95, 3.82, 5.02, 6.66, 9.04, 12.52, 17.74, 25.80, 38.71, 60.21, 97.34, 166.87, 305.94, 595.86, 2330.56, 7878.78, 20000.00],
    [1.96, 3.28, 4.14, 9.31, 14.72, 22.61, 60.29, 116.72, 180.88, 346.36, 633.08, 2743.35, 5190.11, 16460.08, 51979.24,181060.90],
];

// ==================== 十進位精確運算 ====================

// Fraction 以 num/den 表示一個精確的有理數, 避免浮點誤差造成判定結果不一致.
interface Fraction {
  num: bigint;
  den: bigint;
}

// parseDecimal 把 "0.972245313" 這種十進位字串轉成精確分數.
function parseDecimal(s: string): Fraction {
  const dot = s.indexOf(".");
  if (dot < 0) return { num: BigInt(s), den: 1n };
  const decimals = s.length - dot - 1;
  return { num: BigInt(s.replace(".", "")), den: 10n ** BigInt(decimals) };
}

// ==================== 4 Seeds to Hexadecimals ====================

// 隨機數階段, 每階段用 4 組 seed (cnt = stage*4 ~ stage*4+3).
const STAGE = {
  WheelTrigger: 0, // trigger wheel symbol
  WheelMultiplier: 1, // every wheel multiplier
  DashNumber: 2, // dash number
  CrashPoint: 3, // crash point
} as const;

type Stage = (typeof STAGE)[keyof typeof STAGE];

// getStageHex 取得某階段的隨機數來源 (16 進位字串).
// 每組 seed = HMAC-SHA256(ServerSeed, "ClientSeed:Nonce:cnt") 的 16 進位輸出 (32 bytes),
// 4 組串接後每 4 bytes 為一個隨機數.
function getStageHex(
  serverSeed: string,
  clientSeed: string,
  nonce: number,
  stage: Stage
): string {
  let hex = "";
  for (let cnt = stage * 4; cnt < stage * 4 + 4; cnt++) {
    hex += CryptoJS.HmacSHA256(`${clientSeed}:${nonce}:${cnt}`, serverSeed).toString(
      CryptoJS.enc.Hex
    );
  }
  return hex;
}

// ==================== Hexadecimals to number X ====================

const TWO_POW_32 = 4294967296n;

// get4ByteRaw 取 hex 第 index 組 4 bytes 的整數值 (0 ~ 2^32-1).
function get4ByteRaw(hex: string, index: number): bigint {
  return BigInt("0x" + hex.substring(index * 8, index * 8 + 8));
}

// hexToWeight 取 hex 第 index 組 4 bytes, 換算成 [0, scale) 的整數權重 X.
// int{[num1/(256^1)+num2/(256^2)+num3/(256^3)+num4/(256^4)] * scale} = X
function hexToWeight(hex: string, index: number, scale: number): number {
  return Number((get4ByteRaw(hex, index) * BigInt(scale)) >> 32n);
}

// isLessThan 精確比較 X < prob (X = hex 第 index 組 4 bytes 換算的 [0,1) 機率).
// raw/2^32 < num/den  <=>  raw*den < num*2^32
function isLessThan(hex: string, index: number, prob: Fraction): boolean {
  return get4ByteRaw(hex, index) * prob.den < prob.num * TWO_POW_32;
}

// getWeightRangeIndex 依累積權重找出 weight 落在哪一個區間.
function getWeightRangeIndex(weights: number[], weight: number): number {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (weight < sum) return i;
  }
  return weights.length - 1;
}

function sumWeights(weights: number[]): number {
  return weights.reduce((a, b) => a + b, 0);
}

// ==================== Number to 結果值 ====================

// getWheelMultipliers 算出每一格的轉盤倍率, 未觸發轉盤的格為 0.
// 只有轉盤圖示格才消耗 WheelTrigger 隨機數 (index 為圖示格序號),
// 只有已觸發的轉盤才消耗 WheelMultiplier 隨機數 (index 為已觸發轉盤序號).
function getWheelMultipliers(
  triggerHex: string,
  multiplierHex: string,
  difficulty: number
): number[] {
  const levelCount = LEVEL_COUNT[difficulty];
  const triggerWeights = WHEEL_TRIGGERED[difficulty];
  const multiplierWeights = WHEEL_MULTIPLIER_WEIGHT[difficulty];
  const multipliers = new Array<number>(levelCount).fill(0);

  let symbolIndex = 0;
  let triggeredIndex = 0;
  for (const pos of WHEEL_SYMBOL_POS[difficulty]) {
    if (pos < 1 || pos > levelCount) continue;

    const triggerWeight = hexToWeight(triggerHex, symbolIndex, sumWeights(triggerWeights));
    symbolIndex++;
    if (getWeightRangeIndex(triggerWeights, triggerWeight) !== 1) continue; // 0=未觸發, 1=觸發

    const multiplierWeight = hexToWeight(
      multiplierHex,
      triggeredIndex,
      sumWeights(multiplierWeights)
    );
    triggeredIndex++;
    multipliers[pos - 1] =
      WHEEL_MULTIPLIER_VALUE[difficulty][
        getWeightRangeIndex(multiplierWeights, multiplierWeight)
      ];
  }
  return multipliers;
}

// getDashNumber 取第 level 格 (1-indexed) 的衝刺格數, 每一格都消耗一個隨機數.
function getDashNumber(dashHex: string, level: number, difficulty: number): number {
  const weights = DASH_NUMBER_WEIGHT[difficulty];
  const weight = hexToWeight(dashHex, level - 1, sumWeights(weights));
  return DASH_NUMBER_VALUE[difficulty][getWeightRangeIndex(weights, weight)];
}

// getPassProbability 取 fromLevel ~ toLevel (1-indexed, 含頭含尾) 各格通過機率的連乘積.
// 衝刺會一次跨過多格, 所以要用連乘積判定. ex. 在第 10 格衝刺 2 格, 連乘積為 p10*p11.
function getPassProbability(difficulty: number, fromLevel: number, toLevel: number): Fraction {
  let prob: Fraction = { num: 1n, den: 1n };
  for (let level = fromLevel; level <= toLevel; level++) {
    const p = parseDecimal(PASS_PROBABILITY[difficulty][level - 1]);
    prob = { num: prob.num * p.num, den: prob.den * p.den };
  }
  return prob;
}

// ==================== 對外介面 ====================

export interface SpinParams {
  rtp: number; // 96 或 99
  serverSeed: string; // 該局已揭露的 ServerSeed
  clientSeed: string; // 該局的 ClientSeed
  nonce: number; // 該局的 Nonce, 0 以上的整數
  difficulty: number; // 難度 0~3, 關卡數分別為 28/24/20/16
}

export interface WheelResult {
  step: number; // 觸發轉盤的格數 (1-indexed, 起點為 0)
  multiplier: string; // 該轉盤的倍率
}

export interface SpinResult {
  wheel: WheelResult[]; // 撞死前收到的轉盤, 依格數由小到大
  death: number; // 撞死的格數 (1-indexed); 走完全部關卡未撞死時為 關卡數 + 1
}

// calcSpinResult 依種子重算整局的轉盤與撞點.
export function calcSpinResult(params: SpinParams): SpinResult {
  const { rtp, serverSeed, clientSeed, nonce, difficulty } = params;
  if (!SUPPORTED_RTP.includes(rtp)) {
    throw new Error(`unsupported rtp: ${rtp} (only ${SUPPORTED_RTP.join(", ")})`);
  }
  if (typeof serverSeed !== "string" || serverSeed.length === 0) {
    throw new Error("serverSeed is required");
  }
  if (typeof clientSeed !== "string" || clientSeed.length === 0) {
    throw new Error("clientSeed is required");
  }
  if (!Number.isInteger(nonce) || nonce < 0) {
    throw new Error(`invalid nonce: ${nonce} (must be an integer >= 0)`);
  }
  if (!Number.isInteger(difficulty) || difficulty < 0 || difficulty >= LEVEL_COUNT.length) {
    throw new Error(`invalid difficulty: ${difficulty} (must be 0 ~ ${LEVEL_COUNT.length - 1})`);
  }

  const levelCount = LEVEL_COUNT[difficulty];
  const multipliers = getWheelMultipliers(
    getStageHex(serverSeed, clientSeed, nonce, STAGE.WheelTrigger),
    getStageHex(serverSeed, clientSeed, nonce, STAGE.WheelMultiplier),
    difficulty
  );
  const dashHex = getStageHex(serverSeed, clientSeed, nonce, STAGE.DashNumber);
  const crashHex = getStageHex(serverSeed, clientSeed, nonce, STAGE.CrashPoint);

  const wheel: WheelResult[] = [];

  // 初始判斷: X < RTP 才進入標準流程, 否則第一格就撞死.
  const rtpProb = parseDecimal(String(rtp));
  if (!isLessThan(crashHex, 0, { num: rtpProb.num, den: rtpProb.den * 100n })) {
    return { wheel, death: 1 };
  }

  // 標準流程: 每前進一步消耗一個隨機數, X < 衝刺涵蓋各格通過機率的連乘積才通過.
  // 通過的每一格 (含衝刺跳過的格) 轉盤都收; 撞死的那一步不收轉盤.
  let current = 0; // 已通過的格數
  let crashIndex = 1; // 撞點判定隨機數序號, 初始判斷已用掉第 0 個
  while (current < levelCount) {
    const target = Math.min(current + getDashNumber(dashHex, current + 1, difficulty), levelCount);
    const passed = isLessThan(
      crashHex,
      crashIndex,
      getPassProbability(difficulty, current + 1, target)
    );
    crashIndex++;

    if (!passed) {
      return { wheel, death: current + 1 }; // 衝刺取消, 撞死在下一格
    }

    for (let level = current + 1; level <= target; level++) {
      if (multipliers[level - 1] > 0) {
        wheel.push({ step: level, multiplier: String(multipliers[level - 1]) });
      }
    }
    current = target;
  }
  const result = { wheel, death: levelCount + 1 };
  return result;
}
