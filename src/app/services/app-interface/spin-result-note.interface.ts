/**
 * Spin Result Note 介面
 */

import { SpinModeType } from "../../../chiikawa/ApWeb/ApWebInterface";
import { CampaignGroupNoteType, CampaignLegacyNoteType } from "../campaign-ctrl/campaign-info-msg.interface";

export interface ISpinResultNote {
  mode?: SpinModeType;
  error: string | null;
  balance: number;
  campaignlist?: CampaignLegacyNoteType[];
  campaign_group_list?: CampaignGroupNoteType[];
  settled_bonus_wallet?: ISettledBonusWallet;
}

export interface ISettledBonusWallet {
  bonus_wallet_id: number;
  balance: number;
}