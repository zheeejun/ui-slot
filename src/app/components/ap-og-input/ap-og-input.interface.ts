import { ApSelectOption } from '../../../ap-components-lib/ap-select/ap-select.interface';

export interface I18nText {
  key: string;
  fallback: string;
  source?: 'common' | 'game';
}

export interface InputOption extends ApSelectOption {
  labelKey?: string;
  labelSource?: 'common' | 'game';
}

export type OriginalBottomPanelInputType =
  | 'modeTab'
  | 'difficulty'
  | 'totalProfit'
  | 'autoCashOut'
  | 'numberOfBets'
  | 'onWin'
  | 'onLoss'
  | 'stopProfit'
  | 'stopLoss'
  | 'game'
  | 'serverSeed'
  | 'nonce'

export interface InputTypeConfigTabItem {
  id: string;
  label: I18nText;
  disabled?: boolean;
}

export interface InputTypeConfig {
  label: I18nText;
  placeholder?: string | I18nText;
  min?: number;
  max?: number;
  step?: number;
  options?: InputOption[];
  tabItems?: InputTypeConfigTabItem[];
  disabled?: boolean;
  currencyImage?: boolean;
}

export const INPUT_TYPE_CONFIG: Record<
  OriginalBottomPanelInputType,
  InputTypeConfig
> = {
  modeTab: {
    label: { key: 'bottom_panel_mode', fallback: 'Mode' },
    options: [
      { value: 'manual', label: 'Manual', labelKey: 'og_bet_info_manualBet' },
      { value: 'auto', label: 'Auto', labelKey: 'og_bet_info_autoBet' },
    ],
  },
  stopLoss: {
    label: { key: 'og_autobet_stopLoss', fallback: 'Stop on Loss' },
    placeholder: '0.1',
    min: 0,
    step: 0.1,
  },
  stopProfit: {
    label: { key: 'og_autobet_takeProfit', fallback: 'Stop on Profit' },
    placeholder: '0.1',
    min: 0,
    step: 0.1,
  },
  onWin: {
    label: { key: 'og_autobet_youwin', fallback: 'On Win' },
    placeholder: '0',
    min: -99,
    step: 1,
    max: 9999999999,
    tabItems: [
      { id: 'reset', label: { key: 'og_autobet_reset', fallback: 'Reset' } },
      {
        id: 'increase by',
        label: { key: 'og_autobet_add', fallback: 'Increase by:' },
      },
    ],
  },
  onLoss: {
    label: { key: 'og_autobet_youlose', fallback: 'On Loss' },
    placeholder: '0',
    min: -99,
    step: 1,
    max: 9999999999,
    tabItems: [
      { id: 'reset', label: { key: 'og_autobet_reset', fallback: 'Reset' } },
      {
        id: 'increase by',
        label: { key: 'og_autobet_add', fallback: 'Increase by:' },
      },
    ],
  },
  numberOfBets: {
    label: { key: 'og_autobet_betCounts', fallback: 'Number of Bets' },
    placeholder: '0',
    min: 0,
    max: 999999999,
    step: 1,
  },
  difficulty: {
    label: { key: 'bet_info_level', fallback: 'Difficulty', source: 'game' },
    options: [
      {
        value: 'easy',
        label: 'Easy',
        labelKey: 'bet_info_level_01',
        labelSource: 'game',
      },
      {
        value: 'medium',
        label: 'Medium',
        labelKey: 'bet_info_level_02',
        labelSource: 'game',
      },
      {
        value: 'hard',
        label: 'Hard',
        labelKey: 'bet_info_level_03',
        labelSource: 'game',
      },
      {
        value: 'expert',
        label: 'Expert',
        labelKey: 'bet_info_level_04',
        labelSource: 'game',
      },
    ],
  },
  totalProfit: {
    label: { key: 'og_guide_6', fallback: 'Total Profit' },
    min: 0,
  },
  autoCashOut: {
    label: {
      key: 'og_guide_8',
      fallback: 'Auto Cash Out',
    },
    placeholder: '1',
    min: 1,
    step: 1,
  },

  game: {
    label: { key: 'og_fair_gameList', fallback: 'Game' },
    placeholder: { key: 'game_title', fallback: 'Chicken' },
    disabled: true,
    currencyImage: false,
  },

  serverSeed: {
    label: { key: 'og_fair_serverSeed', fallback: 'Server Seed' },
    placeholder: {
      key: 'og_fair_serverSeed',
      fallback: 'Server Seed',
    },
    disabled: true,
    currencyImage: false,
  },

    nonce: {
    label: { key: 'og_fair_nonce', fallback: 'Nonce' },
    placeholder: '0',
    min: 0,
    step: 1,
    currencyImage: false,
  },
};

export const ORIGINAL_BOTTOM_PANEL_INPUT_TYPES = new Set(
  Object.keys(INPUT_TYPE_CONFIG) as OriginalBottomPanelInputType[],
);
