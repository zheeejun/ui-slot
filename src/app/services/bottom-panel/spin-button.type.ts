export const SPIN_BUTTON_MODES = [
  'default',
  'auto-spin',
  'double-chance',
  'double-chance-auto-spin',
  'free-spin',
  'free-bonus',
  'free-bonus-auto-spin',
  'feature-mode',
] as const;

export type SpinButtonMode = typeof SPIN_BUTTON_MODES[number];

/** 會渲染 ap-button-auto-spin-times 的 spinButtonMode（其外框比 ap-spin-button 小，繞圈特效需要放大） */
const AUTO_SPIN_TIMES_BUTTON_MODES: SpinButtonMode[] = [
  'feature-mode',
  'free-bonus-auto-spin',
  'double-chance-auto-spin',
  'auto-spin',
];

export function isAutoSpinTimesButtonMode(mode: SpinButtonMode): boolean {
  return AUTO_SPIN_TIMES_BUTTON_MODES.includes(mode);
}

export const HOLD_TURBO_ICON_VARIANTS = [
  'ap-icon-spin-hold-turbo',
  'ap-icon-spin-hold-turbo-2',
  'ap-icon-spin-hold-turbo-3',
  'ap-icon-spin-hold-turbo-4',
  'ap-icon-spin-hold-turbo-5',
] as const;

