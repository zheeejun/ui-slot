import type { TrnData } from '../../services/trn-ctrl/trn-ctrl.interface';

/* Game Title */
export interface TrnGameTitleVariantDemo {
    title: string;
    subtitle: string;
    accentColor: 'yellow' | 'purple';
    size: 'default' | 'small';
}

export interface TrnGameTitleCategory {
    title: string;
    variants: TrnGameTitleVariantDemo[];
}

/* Card Bonus */
export interface TrnCardBonusVariantDemo {
    subtitle: string;
    accentColor: 'yellow' | 'purple';
    currency: string;
    amount: number;
}

export interface TrnCardBonusCategory {
    title: string;
    variants: TrnCardBonusVariantDemo[];
}

/* Card Match */
export interface TrnCardMatchVariantDemo {
    subtitle: string;
    accentColor: 'yellow' | 'purple';
    currentCount: number;
    totalCount: number;
}

export interface TrnCardMatchCategory {
    title: string;
    variants: TrnCardMatchVariantDemo[];
}

/* Float Button */
export interface TrnFloatButtonVariantDemo {
    subtitle: string;
    accentColor: 'yellow' | 'purple';
    rank: number;
    isPlaying: boolean;
}

export interface TrnFloatButtonCategory {
    title: string;
    variants: TrnFloatButtonVariantDemo[];
}

/* Float Countdown */
export interface TrnFloatCountdownVariantDemo {
    subtitle: string;
    accentColor: 'yellow' | 'purple';
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface TrnFloatCountdownCategory {
    title: string;
    variants: TrnFloatCountdownVariantDemo[];
}

/* Status Bar */
export interface TrnStatusBarVariantDemo {
    subtitle: string;
    accentColor: 'yellow' | 'purple';
}

export interface TrnStatusBarCategory {
    title: string;
    variants: TrnStatusBarVariantDemo[];
}

/* Game Hint */
export interface TrnGameHintVariantDemo {
    subtitle: string;
    accentColor: 'yellow' | 'purple';
    rank: number;
}

export interface TrnGameHintCategory {
    title: string;
    variants: TrnGameHintVariantDemo[];
}

/* Game List */
export interface TrnGameListVariantDemo {
    subtitle: string;
    trnData: TrnData;
}

export interface TrnGameListCategory {
    title: string;
    variants: TrnGameListVariantDemo[];
}

/* Game Start Confirm */
export interface TrnGameStartConfirmVariantDemo {
    subtitle: string;
    accentColor: 'yellow' | 'purple';
}

export interface TrnGameStartConfirmCategory {
    title: string;
    variants: TrnGameStartConfirmVariantDemo[];
}

/* Game Leave Confirm */
export interface TrnGameLeaveConfirmVariantDemo {
    subtitle: string;
    accentColor: 'yellow' | 'purple';
}

export interface TrnGameLeaveConfirmCategory {
    title: string;
    variants: TrnGameLeaveConfirmVariantDemo[];
}

/* Match Finished */
export interface TrnGameMatchFinishedVariantDemo {
    subtitle: string;
    accentColor: 'yellow' | 'purple';
}

export interface TrnGameMatchFinishedCategory {
    title: string;
    variants: TrnGameMatchFinishedVariantDemo[];
}

/* Created Notification */
export interface TrnGameCreatedNotificationVariantDemo {
    subtitle: string;
    accentColor: 'yellow';
}

export interface TrnGameCreatedNotificationCategory {
    title: string;
    variants: TrnGameCreatedNotificationVariantDemo[];
}

/* Game Result */
export interface TrnGameResultVariantDemo {
    subtitle: string;
    accentColor: 'yellow' | 'purple';
}

export interface TrnGameResultCategory {
    title: string;
    variants: TrnGameResultVariantDemo[];
}
