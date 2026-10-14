import { SpinModeType } from '../../../chiikawa/ApWeb/ApWebInterface';

export interface ApBuyFeatureCard {
  mode: SpinModeType;
  currency: string;
  rate: number;
  order: number;
  /** 标记是否有对应的 demo 文件且游戏支持 Replay */
  isDemoAvailable?: boolean;
}
