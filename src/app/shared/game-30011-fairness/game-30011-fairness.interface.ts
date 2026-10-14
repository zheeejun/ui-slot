export type Game30011Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

export interface Game30011FairnessParams {
  serverSeed: string;
  clientSeed: string;
  nonce: number;
  difficulty: Game30011Difficulty;
}

export interface Game30011FairnessResult {
  /** 該難度的總步數 */
  stepCount: number;
  /** 每一步的贏分倍數，index 0 對應第 1 步 */
  stepMultipliers: number[];
  /** 觸發獎金轉盤的步數位置（1-based），依序對應 bonusMultipliers */
  bonusPoints: number[];
  /** 對應 bonusPoints 位置的轉盤獎金倍數 */
  bonusMultipliers: number[];
  /** 該局會觸發死亡的步數位置（1-based） */
  deathPoint: number;
  /** 該局可贏得的最高倍數（死亡位置前一步的倍數） */
  maxMultiplier: number;
}
