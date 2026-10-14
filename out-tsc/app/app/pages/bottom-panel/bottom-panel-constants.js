// ============================================================
// 共用型別、常數與尺寸設定（所有 bottom-panel 系列 component 共用）
// ============================================================
/** Turbo 按鈕狀態轉換規則 */
export const TURBO_STATE_TRANSITIONS = {
    default: 'pressed1',
    pressed1: 'pressed2',
    pressed2: 'default',
};
/** 預設尺寸設定（bottom-panel、bottom-panel-rs 使用） */
export const SIZE_CONFIG = {
    desktop: {
        spinIcon: 4.85,
        buttonIcon: 2.85,
        controlIcon: 2,
        listBottomHeight: 1.4,
        buttonGap: 1.6,
        centerGroupGap: 0.4,
        centerSpacerWidth: 4.7,
        menuOffset: 0.2,
        buttonsAreaTranslateY: 0.5,
        statusBarHeight: 1.5,
        statusBarWidth: 20,
        statusBarFontSize: 1,
        statusHintFontSize: 0.8,
        statusBarGap: -0.5,
        bottomBarFontSize: 0.7,
        bottomIconSize: 1,
        bottomHintFontSize: 0.7,
        bottomHintIconSize: 0.7,
    },
    mobile: {
        spinIcon: 6,
        buttonIcon: 3.2,
        controlIcon: 2.5,
        listBottomHeight: 2,
        buttonGap: 1,
        centerGroupGap: 0.5,
        centerSpacerWidth: 6.5,
        menuOffset: 0,
        buttonsAreaTranslateY: 1.5,
        statusBarHeight: 1.5,
        statusBarWidth: 18,
        statusBarFontSize: 1,
        statusHintFontSize: 0.4,
        statusBarGap: 0.2,
        bottomBarFontSize: 0.7,
        bottomIconSize: 0.7,
        bottomHintFontSize: 0.6,
        bottomHintIconSize: 0.6,
    },
};
/** 精簡尺寸設定（bottom-panel-replay、bottom-panel-demo 使用；mobile bottomBarFontSize 較小）*/
export const SIZE_CONFIG_LEAN = {
    ...SIZE_CONFIG,
    mobile: {
        ...SIZE_CONFIG.mobile,
        bottomBarFontSize: 0.6,
    },
};
export const FREE_SPIN_BASE_SIZE_REM = 6;
export const LAYOUT_CONFIG = {
    GAME_RATIO: 9 / 16,
    HOST_WIDTH_RATIO: 1.78,
    PANEL_LANDSCAPE_RATIO: 0.2,
    PANEL_PORTRAIT_RATIO: 0.25,
};
//# sourceMappingURL=bottom-panel-constants.js.map