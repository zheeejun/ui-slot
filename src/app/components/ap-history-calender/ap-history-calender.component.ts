import { Component, inject, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import {
  DateRange,
  DateRangeOption,
  CalendarDay,
} from './ap-history-calender.interface';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  selector: 'ap-history-calender',
  imports: [CommonModule, ApButtonComponent, ApIconComponent],
  templateUrl: './ap-history-calender.component.html',
  styleUrl: './ap-history-calender.component.css',
})
export class ApHistoryCalenderComponent {
  private i18n = inject(AppI18nService);
  accentColor = input<'yellow' | 'purple' | 'zinc' | 'slate'>('yellow');
  maxDayRange = input<number | null>(7);

  /** 起始日期往前面限制(與今天的天數差) */
  startDayBeforeRestriction = input<number | null>(null);

  /** 起始日期往後面限制(與今天的天數差) */
  startDayAfterRestriction = input<number | null>(null);

  allLabel = this.i18n.computed('history_all', 'ALL');
  todayLabel = this.i18n.computed('history_today', 'TODAY');
  dayLabel = this.i18n.computed('history_last_seven_days', 'Last 7 days');
  customLabel = this.i18n.computed('history_custom', 'CUSTOM');
  getConfirmButtonText = this.i18n.computed('Confirm_Btn', 'Confirm');

  private accentColorRgb: Record<'yellow' | 'purple' | 'zinc' | 'slate', string> = {
    yellow: '250, 204, 21',
    purple: '192, 132, 252',
    zinc: '161, 161, 170',
    slate: '148, 163, 184',
  };

  /** iOS15 不支援 Tailwind v4 border-color 透明度語法(color-mix)，改用 style 提供 rgba border-color */
  borderColorSoft = computed(
    () => `rgba(${this.accentColorRgb[this.accentColor()]}, 0.6)`
  );
  borderColorMedium = computed(
    () => `rgba(${this.accentColorRgb[this.accentColor()]}, 0.7)`
  );
  borderColorSolid = computed(
    () => `rgb(${this.accentColorRgb[this.accentColor()]})`
  );

  selectedOption = signal<DateRangeOption>('today');

  currentMonth = signal<Date>(new Date());
  fromDate = signal<Date | null>(null);
  toDate = signal<Date | null>(null);
  selectingFrom = signal<boolean>(true);
  showCustom = signal<boolean>(false);

  onConfirm = output<DateRange>();

  monthName = computed(() => {
    const date = this.currentMonth();

    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  });

  calendarDays = computed(() => {
    const month = this.currentMonth();
    const year = month.getFullYear();
    const monthIndex = month.getMonth();

    const firstDayOfMonth = new Date(year, monthIndex, 1);
    const lastDayOfMonth = new Date(year, monthIndex + 1, 0);
    const firstDayWeekday = firstDayOfMonth.getDay();

    const days: CalendarDay[] = [];

    // Previous month days
    const prevMonthLastDay = new Date(year, monthIndex, 0).getDate();

    for (let i = firstDayWeekday - 1; i >= 0; i--) {
      const day = prevMonthLastDay - i;
      const date = new Date(year, monthIndex - 1, day);

      days.push(this.createCalendarDay(date, false));
    }

    // Current month days
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const date = new Date(year, monthIndex, day);

      days.push(this.createCalendarDay(date, true));
    }

    // Next month days
    const remainingDays = 35 - days.length;

    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, monthIndex + 1, day);

      days.push(this.createCalendarDay(date, false));
    }

    return days;
  });

  formattedFromDate = computed(() => {
    const date = this.fromDate();

    return date ? this.formatDate(date) : '';
  });

  formattedToDate = computed(() => {
    const date = this.toDate();

    return date ? this.formatDate(date) : '';
  });

  private createCalendarDay(
    date: Date,
    isCurrentMonth: boolean
  ): CalendarDay {
    const from = this.fromDate();
    const to = this.toDate();
    const maxDays = this.maxDayRange();

    const normalizedDate = new Date(date);

    normalizedDate.setHours(0, 0, 0, 0);

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const beforeRestriction = this.startDayBeforeRestriction();
    const afterRestriction = this.startDayAfterRestriction();

    let minDate: Date | null = null;
    let maxDate: Date | null = null;

    // 往前限制
    if (beforeRestriction !== null) {
      minDate = new Date(today);

      minDate.setDate(today.getDate() - beforeRestriction);
      minDate.setHours(0, 0, 0, 0);
    }

    // 往後限制
    if (afterRestriction !== null) {
      maxDate = new Date(today);

      maxDate.setDate(today.getDate() + afterRestriction);
      maxDate.setHours(0, 0, 0, 0);
    }

    let isSelected = false;
    let isInRange = false;
    let isRangeStart = false;
    let isRangeEnd = false;
    let isDisabled = false;

    if (from) {
      const normalizedFrom = new Date(from);

      normalizedFrom.setHours(0, 0, 0, 0);

      isRangeStart =
        normalizedDate.getTime() === normalizedFrom.getTime();

      isSelected = isRangeStart;

      if (maxDays !== null && !this.selectingFrom()) {
        const diffDays = Math.abs(
          (normalizedDate.getTime() - normalizedFrom.getTime()) / 86400000
        );

        if (diffDays >= maxDays) {
          isDisabled = true;
        }
      }
    }

    if (to) {
      const normalizedTo = new Date(to);

      normalizedTo.setHours(0, 0, 0, 0);

      isRangeEnd =
        normalizedDate.getTime() === normalizedTo.getTime();

      isSelected = isSelected || isRangeEnd;
    }

    if (from && to) {
      const normalizedFrom = new Date(from);
      const normalizedTo = new Date(to);

      normalizedFrom.setHours(0, 0, 0, 0);
      normalizedTo.setHours(0, 0, 0, 0);

      isInRange =
        normalizedDate > normalizedFrom &&
        normalizedDate < normalizedTo;
    }

    // 起始日期往前限制
    if (minDate && normalizedDate < minDate) {
      isDisabled = true;
    }

    // 起始日期往後限制
    if (maxDate && normalizedDate > maxDate) {
      isDisabled = true;
    }

    return {
      date: normalizedDate,
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      isCurrentMonth,
      isSelected,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isToday: normalizedDate.getTime() === today.getTime(),
      isDisabled,
    };
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  private isOutOfRestriction(date: Date): boolean {
    const beforeRestriction = this.startDayBeforeRestriction();
    const afterRestriction = this.startDayAfterRestriction();

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    let minDate: Date | null = null;
    let maxDate: Date | null = null;

    if (beforeRestriction !== null) {
      minDate = new Date(today);

      minDate.setDate(today.getDate() - beforeRestriction);
      minDate.setHours(0, 0, 0, 0);
    }

    if (afterRestriction !== null) {
      maxDate = new Date(today);

      maxDate.setDate(today.getDate() + afterRestriction);
      maxDate.setHours(0, 0, 0, 0);
    }

    if (minDate && date < minDate) {
      return true;
    }

    if (maxDate && date > maxDate) {
      return true;
    }

    return false;
  }

  selectOption(option: DateRangeOption) {
    if (option === 'custom') {
      const next = !this.showCustom();

      this.showCustom.set(next);

      if (next) {
        this.selectedOption.set('custom');

        if (!this.fromDate() || !this.toDate()) {
          this.fromDate.set(null);
          this.toDate.set(null);
          this.selectingFrom.set(true);
        }
      }

      return;
    }

    this.showCustom.set(false);
    this.selectedOption.set(option);

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (option === 'today') {
      this.fromDate.set(new Date(today));
      this.toDate.set(new Date(today));

      this.confirm('today' as DateRangeOption);
    } else if (option === 'last7days') {
      const lastWeek = new Date(today);

      lastWeek.setDate(lastWeek.getDate() - 6);

      this.fromDate.set(lastWeek);
      this.toDate.set(new Date(today));

      this.confirm('last7days' as DateRangeOption);
    } else if (option === 'all') {
      this.fromDate.set(null);
      this.toDate.set(null);
      this.selectingFrom.set(true);

      this.confirm('all');
    } else {
      if (!this.fromDate() || !this.toDate()) {
        this.fromDate.set(null);
        this.toDate.set(null);
        this.selectingFrom.set(true);
      }
    }
  }

  onDateClick(day: CalendarDay) {
    if (!day.isCurrentMonth) return;
    if (day.isDisabled) return;

    const selectedDate = new Date(day.date);

    if (this.selectingFrom()) {
      this.fromDate.set(selectedDate);
      this.toDate.set(null);
      this.selectingFrom.set(false);
    } else {
      const from = this.fromDate();

      if (from && selectedDate < from) {
        this.fromDate.set(selectedDate);
        this.toDate.set(from);
      } else {
        this.toDate.set(selectedDate);
      }

      this.selectingFrom.set(true);
    }
  }

  previousMonth() {
    const current = this.currentMonth();

    const prev = new Date(
      current.getFullYear(),
      current.getMonth() - 1,
      1
    );

    this.currentMonth.set(prev);
  }

  nextMonth() {
    const current = this.currentMonth();

    const next = new Date(
      current.getFullYear(),
      current.getMonth() + 1,
      1
    );

    this.currentMonth.set(next);
  }

  confirm(type: DateRangeOption = 'custom') {
    this.onConfirm.emit({
      from: this.fromDate(),
      to: this.toDate(),
      type: type,
    });
  }

  clearFromDate() {
    this.fromDate.set(null);
    this.selectingFrom.set(true);
  }

  clearToDate() {
    this.toDate.set(null);
  }

  onFromInput(value: string) {
    let parsed = this.parseInputDate(value);

    if (parsed && this.isOutOfRestriction(parsed)) {
      parsed = null;
    }

    this.selectedOption.set('custom');
    this.showCustom.set(true);
    this.fromDate.set(parsed);

    // reset selecting state so next click chooses end
    this.selectingFrom.set(!parsed);

    if (parsed && this.toDate() && parsed > this.toDate()!) {
      this.toDate.set(null);
    }
  }

  onToInput(value: string) {
    let parsed = this.parseInputDate(value);

    if (parsed && this.isOutOfRestriction(parsed)) {
      parsed = null;
    }

    this.selectedOption.set('custom');
    this.showCustom.set(true);

    // Clamp to maxDayRange
    let clamped = parsed;

    const maxDays = this.maxDayRange();

    if (clamped && maxDays !== null) {
      const from = this.fromDate();

      if (from) {
        const diff = Math.abs(
          (clamped.getTime() - from.getTime()) / 86400000
        );

        if (diff >= maxDays) {
          clamped = null;
        }
      }
    }

    this.toDate.set(clamped);

    if (clamped && this.fromDate() && clamped < this.fromDate()!) {
      this.fromDate.set(clamped);
    }
  }

  private parseInputDate(value: string): Date | null {
    if (!value) return null;

    const parts = value.trim().split('-');

    if (parts.length !== 3) return null;

    const [y, m, d] = parts.map(Number);

    if (!y || !m || !d) return null;

    const date = new Date(y, m - 1, d);

    if (
      date.getFullYear() !== y ||
      date.getMonth() !== m - 1 ||
      date.getDate() !== d
    ) {
      return null;
    }

    return date;
  }
}
