import { TrnBaseItem } from "../trn-ctrl/trn-info-msg.interface";
import { CampaignCashDropNoteType, CampaignLegacyFreeBonusNoteType, CampaignLegacyFreeSpinNoteType, CampaignGroupNoteType } from "../campaign-ctrl/campaign-info-msg.interface";
import { PromoCodeExchangeTypeEnum } from "../campaign-ctrl/campaign-ctrl.interface";
import { CampaignGroupItem, CampaignOfferItem } from "../campaign-ctrl/campaign-action.interface";


export interface LoginResultNote {
  error: any;
  uid: string;
  nickname: string;
  auth: string;
  pid: string;
  brand: string;
  site: string;
  status: string;
  playcount: number;
  totalbet: number;
  totalwin: number;
  disable_tournament?: boolean;
  leader_board?: number;
  history_replay?: number;
  tournament: TrnBaseItem[];
  rswin: number;
  rsbfrebate: number;
  currency: string;
  currency_symbol: string;
  balance: number;
  forex: Record<string, any>;
  betlevels: number[];
  bet_level: string[];
  bonus_wallet_max_bet_index?: number;
  amountratio: number;
  /** Default bet index */
  defaultbet: number;
  freeticket: string;
  jackpot: string;
  campaignlist: (CampaignLegacyFreeBonusNoteType | CampaignLegacyFreeSpinNoteType | CampaignCashDropNoteType)[];
  campaign_group_list: CampaignGroupNoteType[];
  campaign_panel: {
      offers: CampaignOfferItem[];
      groups: CampaignGroupItem[];
      snapshotAt: number;
    }
  after_login_cp: any[];
  buyfeature: {
      /** 0: disable, 1: enable */
      enable: number;
      money_maxlimit: number;
  };
  rewardsystem: boolean;
  /** 0: 全關, 1:開放兌換, 2:開放兌換跟QR */
  coupon?: PromoCodeExchangeTypeEnum;
  disable_comma: boolean;//不用千分位逗号分隔符.
  decimalplaces: number;
  conversion_rate: number;
  currency_setting: {
      default_conversion_rate: number;
      default_amount_rate: number;
      currencies: any;
  };
  game_mode: [string, number][];
  game_bf: number;
  game_dc: number;
  game_rtp: string;
  active_client_seed: string;
  active_nonce: number;
  active_server_seed_hash: string;
  next_server_seed_hash: string;
  extrabet:boolean;
}