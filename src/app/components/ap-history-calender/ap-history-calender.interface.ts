export interface DateRange {
  from: Date | null;
  to: Date | null;
  type: DateRangeOption;
}

export type DateRangeOption = 'today' | 'last7days' | 'custom' | 'all';

export interface CalendarDay {
  date: Date;
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isToday: boolean;
  isDisabled: boolean;
}
