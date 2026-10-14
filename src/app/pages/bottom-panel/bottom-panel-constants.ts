// ============================================================
// 共用型別、常數與尺寸設定（所有 bottom-panel 系列 component 共用）
// ============================================================

export type BottomPanelVariant = 'landscape' | 'portrait';
export type TurboState = 'default' | 'pressed1' | 'pressed2';

/** Turbo 按鈕狀態轉換規則 */
export const TURBO_STATE_TRANSITIONS: Readonly<Record<TurboState, TurboState>> = {
  default: 'pressed1',
  pressed1: 'pressed2',
  pressed2: 'default',
};

export interface BottomPanelSizeConfig {
  spinIcon: number;
  buttonIcon: number;
  controlIcon: number;
  listBottomHeight: number;
  centerGroupGap: number;
  centerSpacerWidth: number;
  menuOffset: number;
  statusBarHeight: number;
  statusBarWidth: number;
  statusBarFontSize: number;
  statusBarGap: number;
  bottomBarFontSize: number;
  bottomIconSize: number;
  bottomMenuIconSize: number;
  middleHintFontSize: number;
  middleHintIconSize: number;
  middleListBottomHeight: number;
  buttonsAreaTranslateY: number;
  topStatusBarFontSize: number;
}

/** 預設尺寸設定（bottom-panel、bottom-panel-rs 使用） */
export const SIZE_CONFIG: Record<BottomPanelVariant, BottomPanelSizeConfig> = {
  landscape: {
    spinIcon: 4.85,
    buttonIcon: 2.85,
    controlIcon: 2,
    listBottomHeight: 1.4,
    centerGroupGap: 0.4,
    centerSpacerWidth: 4.7,
    menuOffset: 0.1,
    statusBarHeight: 1.5,
    statusBarWidth: 20,
    statusBarFontSize: 1,
    statusBarGap: -0.5,
    bottomBarFontSize: 0.7,
    bottomIconSize: 1,
    bottomMenuIconSize: 1.2,
    middleHintFontSize: 0.7,
    middleHintIconSize: 0.7,
    middleListBottomHeight: 1.4,
    buttonsAreaTranslateY: 0.5,
    topStatusBarFontSize: 1.2,
  },
  portrait: {
    spinIcon: 5.6,
    buttonIcon: 3.2,
    controlIcon: 2.2,
    listBottomHeight: 2,
    centerGroupGap: 0.5,
    centerSpacerWidth: 6.5,
    menuOffset: 0,
    statusBarHeight: 1.25,
    statusBarWidth: 18,
    statusBarFontSize: 1,
    statusBarGap: 0,
    bottomBarFontSize: 0.7,
    bottomIconSize: 0.7,
    bottomMenuIconSize: 1.8,
    middleHintFontSize: 0.65,
    middleHintIconSize: 0.65,
    middleListBottomHeight: 1.6,
    buttonsAreaTranslateY: 0.8,
    topStatusBarFontSize: 0.9,
  },
};

/** 精簡尺寸設定（bottom-panel-replay、bottom-panel-demo 使用；mobile bottomBarFontSize 較小）*/
export const SIZE_CONFIG_LEAN: Record<BottomPanelVariant, BottomPanelSizeConfig> = {
  ...SIZE_CONFIG,
  portrait: {
    ...SIZE_CONFIG.portrait,
    bottomBarFontSize: 0.6,
  },
};

export const FREE_SPIN_BASE_SIZE_REM = 6;

export const LAYOUT_CONFIG = {
  GAME_RATIO: 9 / 16,
  HOST_WIDTH_RATIO: 1.78,
  PANEL_LANDSCAPE_RATIO: 0.2,
  PANEL_PORTRAIT_RATIO: 0.25,
} as const;
