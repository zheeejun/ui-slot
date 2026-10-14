type DemoMenuActionSet = {
  readonly onInfo: () => void;
  readonly onHistory: () => void;
  readonly onSound: () => void;
  readonly onFairness: () => void;
};

export type DemoMenuItemId = 'info' | 'history' | 'sound' | 'fairness';

export interface DemoMenuItem {
  readonly id: DemoMenuItemId;
  readonly labelKey: string;
  readonly labelFallback: string;
  readonly action: () => void;
}

export const DEMO_MENU_ICON_MAP: Record<DemoMenuItemId, string> = {
  info: 'exclamation-circle',
  history: 'document-text',
  sound: 'speaker-wave',
  fairness: 'scale',
};

export function createDemoMenuItems(
  actions: DemoMenuActionSet,
): readonly DemoMenuItem[] {
  return [
    {
      id: 'info',
      labelKey: 'og_topList_info',
      labelFallback: 'Info',
      action: actions.onInfo,
    },
    {
      id: 'history',
      labelKey: 'og_topList_history',
      labelFallback: 'History',
      action: actions.onHistory,
    },
    {
      id: 'sound',
      labelKey: 'og_topList_sound',
      labelFallback: 'Sound',
      action: actions.onSound,
    },
    {
      id: 'fairness',
      labelKey: 'og_topList_fairness',
      labelFallback: 'Fairness',
      action: actions.onFairness,
    },
  ];
}

export function createDemoGameSetup(language: string) {
  return {
    authToken: null,
    gameId: '10087',
    socketUrl: null,
    assetUrl: 'https://dev.diresoft.net',
    language,
    offline: true,
  };
}
