import { Component, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../ap-button/ap-button.component';
import { ApIconComponent } from '../ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ApCalenderComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 5);
    i0.ɵɵlistener("click", function ApCalenderComponent_Conditional_2_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectOption("all")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("size", "small")("label", ctx_r1.allLabel())("variant", "text")("severity", "primary")("accentColor", ctx_r1.accentColor());
} }
function ApCalenderComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 5);
    i0.ɵɵlistener("click", function ApCalenderComponent_Conditional_3_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectOption("today")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("size", "small")("label", ctx_r1.todayLabel())("variant", "text")("severity", "primary")("accentColor", ctx_r1.accentColor());
} }
function ApCalenderComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 5);
    i0.ɵɵlistener("click", function ApCalenderComponent_Conditional_4_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectOption("last7days")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("size", "small")("label", ctx_r1.dayLabel())("variant", "text")("severity", "primary")("accentColor", ctx_r1.accentColor());
} }
function ApCalenderComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ap-button", 6);
    i0.ɵɵlistener("click", function ApCalenderComponent_Conditional_5_Template_ap_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectOption("custom")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("size", "small")("severity", "primary")("variant", "text")("label", ctx_r1.customLabel())("accentColor", ctx_r1.accentColor());
} }
function ApCalenderComponent_div_6_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function ApCalenderComponent_div_6_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearFromDate()); });
    i0.ɵɵelementEnd();
} }
function ApCalenderComponent_div_6_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function ApCalenderComponent_div_6_button_32_Template_button_click_0_listener() { const day_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateClick(day_r9)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.calendarDayConfirm(day_r9));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", day_r9.day, " ");
} }
function ApCalenderComponent_div_6_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function ApCalenderComponent_div_6_button_39_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearToDate()); });
    i0.ɵɵelementEnd();
} }
function ApCalenderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "label", 0);
    i0.ɵɵtext(4, "From");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "ap-icon", 10);
    i0.ɵɵelementStart(6, "input", 11);
    i0.ɵɵlistener("input", function ApCalenderComponent_div_6_Template_input_input_6_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFromInput($event.target.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ApCalenderComponent_div_6_button_7_Template, 1, 0, "button", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 13)(9, "div", 14)(10, "button", 15);
    i0.ɵɵlistener("click", function ApCalenderComponent_div_6_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.previousMonth()); });
    i0.ɵɵelement(11, "ap-icon", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 17);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 15);
    i0.ɵɵlistener("click", function ApCalenderComponent_div_6_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.nextMonth()); });
    i0.ɵɵelement(15, "ap-icon", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 19)(17, "div", 20);
    i0.ɵɵtext(18, "Su");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 20);
    i0.ɵɵtext(20, "Mo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 20);
    i0.ɵɵtext(22, "Tu");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 20);
    i0.ɵɵtext(24, "We");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 20);
    i0.ɵɵtext(26, "Th");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 20);
    i0.ɵɵtext(28, "Fr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 20);
    i0.ɵɵtext(30, "Sa");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 21);
    i0.ɵɵtemplate(32, ApCalenderComponent_div_6_button_32_Template, 2, 2, "button", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 8)(34, "div", 9)(35, "label", 0);
    i0.ɵɵtext(36, "To ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(37, "ap-icon", 10);
    i0.ɵɵelementStart(38, "input", 11);
    i0.ɵɵlistener("input", function ApCalenderComponent_div_6_Template_input_input_38_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onToInput($event.target.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(39, ApCalenderComponent_div_6_button_39_Template, 1, 0, "button", 23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "ap-button", 24);
    i0.ɵɵlistener("clicked", function ApCalenderComponent_div_6_Template_ap_button_clicked_40_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirm()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.calendarClasses());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.calendarDayLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r1.formattedFromDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fromDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.calendarClasses());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.monthName());
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngForOf", ctx_r1.calendarDays());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.calendarClasses());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.calendarDayLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r1.formattedToDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.toDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("label", "Confirm")("severity", "primary")("accentColor", ctx_r1.accentColor());
} }
export class ApCalenderComponent {
    allLabel = input('All');
    todayLabel = input('Today');
    dayLabel = input('Last 7 Days');
    customLabel = input('Custom');
    selectedOption = signal('today');
    currentMonth = signal(new Date());
    fromDate = signal(null);
    toDate = signal(null);
    selectingFrom = signal(true);
    showCustom = signal(true);
    // 隱藏按鈕，僅顯示日曆
    showAllLabel = input(false);
    showTodayLabel = input(false);
    showDayLabel = input(false);
    showCustomLabel = input(false);
    severity = input("primary");
    accentColor = input(undefined);
    onConfirm = output();
    monthName = computed(() => {
        const date = this.currentMonth();
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    });
    calendarDays = computed(() => {
        const month = this.currentMonth();
        const year = month.getFullYear();
        const monthIndex = month.getMonth();
        const firstDayOfMonth = new Date(year, monthIndex, 1);
        const lastDayOfMonth = new Date(year, monthIndex + 1, 0);
        const firstDayWeekday = firstDayOfMonth.getDay();
        const days = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);
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
        const remainingDays = 35 - days.length; // 5 rows * 7 days
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
    createCalendarDay(date, isCurrentMonth) {
        const from = this.fromDate();
        const to = this.toDate();
        const normalizedDate = new Date(date);
        normalizedDate.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let isSelected = false;
        let isInRange = false;
        let isRangeStart = false;
        let isRangeEnd = false;
        if (from) {
            const normalizedFrom = new Date(from);
            normalizedFrom.setHours(0, 0, 0, 0);
            isRangeStart = normalizedDate.getTime() === normalizedFrom.getTime();
            isSelected = isRangeStart;
        }
        if (to) {
            const normalizedTo = new Date(to);
            normalizedTo.setHours(0, 0, 0, 0);
            isRangeEnd = normalizedDate.getTime() === normalizedTo.getTime();
            isSelected = isSelected || isRangeEnd;
        }
        if (from && to) {
            const normalizedFrom = new Date(from);
            const normalizedTo = new Date(to);
            normalizedFrom.setHours(0, 0, 0, 0);
            normalizedTo.setHours(0, 0, 0, 0);
            isInRange =
                normalizedDate > normalizedFrom && normalizedDate < normalizedTo;
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
        };
    }
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    selectOption(option) {
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
            this.confirm();
        }
        else if (option === 'last7days') {
            const lastWeek = new Date(today);
            lastWeek.setDate(lastWeek.getDate() - 6);
            this.fromDate.set(lastWeek);
            this.toDate.set(new Date(today));
            this.confirm();
        }
        else if (option === 'all') {
            this.fromDate.set(null);
            this.toDate.set(null);
            this.selectingFrom.set(true);
            this.confirm();
        }
        else {
            if (!this.fromDate() || !this.toDate()) {
                this.fromDate.set(null);
                this.toDate.set(null);
                this.selectingFrom.set(true);
            }
        }
    }
    onDateClick(day) {
        if (!day.isCurrentMonth)
            return;
        const selectedDate = new Date(day.date);
        if (this.selectingFrom()) {
            this.fromDate.set(selectedDate);
            this.toDate.set(null);
            this.selectingFrom.set(false);
        }
        else {
            const from = this.fromDate();
            if (from && selectedDate < from) {
                this.fromDate.set(selectedDate);
                this.toDate.set(from);
            }
            else {
                this.toDate.set(selectedDate);
            }
            this.selectingFrom.set(true);
        }
    }
    previousMonth() {
        const current = this.currentMonth();
        const prev = new Date(current.getFullYear(), current.getMonth() - 1, 1);
        this.currentMonth.set(prev);
    }
    nextMonth() {
        const current = this.currentMonth();
        const next = new Date(current.getFullYear(), current.getMonth() + 1, 1);
        this.currentMonth.set(next);
    }
    confirm() {
        this.onConfirm.emit({
            from: this.fromDate(),
            to: this.toDate(),
        });
    }
    clearFromDate() {
        this.fromDate.set(null);
        this.selectingFrom.set(true);
    }
    clearToDate() {
        this.toDate.set(null);
    }
    onFromInput(value) {
        const parsed = this.parseInputDate(value);
        this.selectedOption.set('custom');
        this.showCustom.set(true);
        this.fromDate.set(parsed);
        // reset selecting state so next click chooses end
        this.selectingFrom.set(!parsed);
        if (parsed && this.toDate() && parsed > this.toDate()) {
            this.toDate.set(null);
        }
    }
    onToInput(value) {
        const parsed = this.parseInputDate(value);
        this.selectedOption.set('custom');
        this.showCustom.set(true);
        this.toDate.set(parsed);
        if (parsed && this.fromDate() && parsed < this.fromDate()) {
            this.fromDate.set(parsed);
        }
    }
    parseInputDate(value) {
        if (!value)
            return null;
        const parts = value.trim().split('-');
        if (parts.length !== 3)
            return null;
        const [y, m, d] = parts.map(Number);
        if (!y || !m || !d)
            return null;
        const date = new Date(y, m - 1, d);
        if (date.getFullYear() !== y ||
            date.getMonth() !== m - 1 ||
            date.getDate() !== d) {
            return null;
        }
        return date;
    }
    calendarOuterBorder = computed(() => {
        const classes = ["bg-zinc-50/90", "dark:bg-black/90", "border", "rounded-lg", "p-2", "max-h-120", "w-[20rem]", "overflow-y-auto"];
        switch (this.severity()) {
            case "primary":
                if (this.accentColor() === "yellow") {
                    classes.push("border-yellow-400/60");
                }
                else if (this.accentColor() === "purple") {
                    classes.push("border-purple-400/60");
                }
                else if (this.accentColor() === "zinc") {
                    classes.push("border-zinc-400/60");
                }
                else {
                    classes.push("border-orange-400/60");
                }
                break;
        }
        return classes;
    });
    calendarClasses = computed(() => {
        const classes = ["rounded-lg", "border"];
        switch (this.severity()) {
            case "primary":
                if (this.accentColor() === "yellow") {
                    classes.push("bg-white dark:bg-zinc-800", "border-yellow-400/70");
                }
                else if (this.accentColor() === "purple") {
                    classes.push("bg-white dark:bg-zinc-800", "border-purple-400/70");
                }
                else if (this.accentColor() === "zinc") {
                    classes.push("bg-white dark:bg-zinc-800", "border-zinc-400/70");
                }
                else {
                    classes.push("bg-white dark:bg-zinc-800", "border-orange-400/70");
                }
                break;
        }
        return classes;
    });
    calendarDayConfirm(day) {
        const classes = [];
        if (!day.isCurrentMonth) {
            classes.push('text-zinc-600');
            return classes;
        }
        switch (this.severity()) {
            case "primary":
                if (this.accentColor() === "yellow") {
                    if (day.isSelected) {
                        classes.push("bg-yellow-400", "text-zinc-950", "font-bold");
                    }
                    else if (day.isInRange) {
                        classes.push("bg-yellow-400/10", "text-yellow-400");
                    }
                    else {
                        classes.push("text-black dark:text-white");
                    }
                    if (day.isToday) {
                        classes.push("border", "border-yellow-400");
                    }
                }
                else if (this.accentColor() === "purple") {
                    if (day.isSelected) {
                        classes.push("bg-purple-400", "text-zinc-950", "font-bold");
                    }
                    else if (day.isInRange) {
                        classes.push("bg-purple-400/10", "text-purple-400");
                    }
                    else {
                        classes.push("text-black dark:text-white");
                    }
                    if (day.isToday) {
                        classes.push("border", "border-purple-400");
                    }
                }
                else if (this.accentColor() === "zinc") {
                    if (day.isSelected) {
                        classes.push("bg-zinc-400", "text-zinc-950", "font-bold");
                    }
                    else if (day.isInRange) {
                        classes.push("bg-zinc-400/10", "text-zinc-400");
                    }
                    else {
                        classes.push("text-black dark:text-white");
                    }
                    if (day.isToday) {
                        classes.push("border", "border-zinc-400");
                    }
                }
                else {
                    if (day.isSelected) {
                        classes.push("bg-orange-500", "text-zinc-950", "font-bold");
                    }
                    else if (day.isInRange) {
                        classes.push("bg-orange-500/10", "text-orange-500");
                    }
                    else {
                        classes.push("text-black dark:text-white");
                    }
                    if (day.isToday) {
                        classes.push("border", "border-orange-500");
                    }
                }
                break;
        }
        if (day.isRangeStart) {
            classes.push('rounded-l-md');
        }
        if (day.isRangeEnd) {
            classes.push('rounded-r-md');
        }
        return classes;
    }
    calendarDayLabel = computed(() => {
        const classes = ["text-sm", "font-normal"];
        switch (this.severity()) {
            case "primary":
                if (this.accentColor() === "yellow") {
                    classes.push("text-yellow-400");
                }
                else if (this.accentColor() === "purple") {
                    classes.push("text-purple-400");
                }
                else if (this.accentColor() === "zinc") {
                    classes.push("text-zinc-400");
                }
                else {
                    classes.push("text-orange-400");
                }
                break;
        }
        return classes;
    });
    static ɵfac = function ApCalenderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApCalenderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApCalenderComponent, selectors: [["ap-calender"]], inputs: { allLabel: [1, "allLabel"], todayLabel: [1, "todayLabel"], dayLabel: [1, "dayLabel"], customLabel: [1, "customLabel"], showAllLabel: [1, "showAllLabel"], showTodayLabel: [1, "showTodayLabel"], showDayLabel: [1, "showDayLabel"], showCustomLabel: [1, "showCustomLabel"], severity: [1, "severity"], accentColor: [1, "accentColor"] }, outputs: { onConfirm: "onConfirm" }, decls: 7, vars: 6, consts: [[3, "ngClass"], [1, "flex", "flex-col", "space-y-4"], [3, "size", "label", "variant", "severity", "accentColor"], [3, "size", "severity", "variant", "label", "accentColor"], ["class", "p-1 pt-2 space-y-2", 4, "ngIf"], [3, "click", "size", "label", "variant", "severity", "accentColor"], [3, "click", "size", "severity", "variant", "label", "accentColor"], [1, "p-1", "pt-2", "space-y-2"], [1, "space-y-2"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", 3, "ngClass"], ["name", "calendar", 1, "size-4", "text-zinc-400"], ["type", "text", "placeholder", "YYYY-MM-DD", 1, "flex-1", "w-full", "bg-transparent", "text-zinc-500", "dark:text-white", "text-sm", "font-normal", "outline-none", 3, "input", "value"], ["class", "aspect-square flex items-center justify-center p-1 rounded transition-colors bg-zinc-200 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-200 cursor-pointer", 3, "click", 4, "ngIf"], [1, "p-3", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "pb-1"], [1, "aspect-square", "flex", "items-center", "justify-center", "p-1", "rounded", "transition-colors", "cursor-pointer", "text-zinc-400", "hover:text-zinc-900", "hover:bg-zinc-100", "dark:text-zinc-300", "dark:hover:text-zinc-300", "dark:hover:bg-zinc-700", 3, "click"], ["name", "chevron-left", 1, "size-4"], [1, "text-black", "dark:text-white", "font-medium"], ["name", "chevron-right", 1, "size-4"], [1, "grid", "grid-cols-7", "text-center", "text-xs", "text-zinc-400", "gap-1"], [1, "py-1"], [1, "grid", "grid-cols-7", "gap-1"], ["class", "aspect-square flex items-center justify-center rounded-md transition-all duration-200 cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "aspect-square flex items-center justify-center p-1 rounded transition-colors cursor-pointer bg-zinc-200 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-200", 3, "click", 4, "ngIf"], [1, "w-full", "mt-2", 3, "clicked", "label", "severity", "accentColor"], [1, "aspect-square", "flex", "items-center", "justify-center", "p-1", "rounded", "transition-colors", "bg-zinc-200", "hover:bg-zinc-700", "dark:bg-zinc-700", "dark:hover:bg-zinc-200", "cursor-pointer", 3, "click"], [1, "aspect-square", "flex", "items-center", "justify-center", "rounded-md", "transition-all", "duration-200", "cursor-pointer", 3, "click", "ngClass"], [1, "aspect-square", "flex", "items-center", "justify-center", "p-1", "rounded", "transition-colors", "cursor-pointer", "bg-zinc-200", "hover:bg-zinc-700", "dark:bg-zinc-700", "dark:hover:bg-zinc-200", 3, "click"]], template: function ApCalenderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵconditionalCreate(2, ApCalenderComponent_Conditional_2_Template, 1, 5, "ap-button", 2);
            i0.ɵɵconditionalCreate(3, ApCalenderComponent_Conditional_3_Template, 1, 5, "ap-button", 2);
            i0.ɵɵconditionalCreate(4, ApCalenderComponent_Conditional_4_Template, 1, 5, "ap-button", 2);
            i0.ɵɵconditionalCreate(5, ApCalenderComponent_Conditional_5_Template, 1, 5, "ap-button", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ApCalenderComponent_div_6_Template, 41, 14, "div", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.calendarOuterBorder());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showAllLabel() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showTodayLabel() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showDayLabel() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showCustomLabel() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showCustom());
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, ApButtonComponent, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApCalenderComponent, [{
        type: Component,
        args: [{ selector: 'ap-calender', imports: [CommonModule, ApButtonComponent, ApIconComponent], template: "<div\n  [ngClass]=\"calendarOuterBorder()\"\n>\n  <!-- Options: Today, Last 7 days, Custom -->\n  <div class=\"flex flex-col space-y-4\">\n    @if (showAllLabel()) {\n      <ap-button\n        [size]=\"'small'\"\n        [label]=\"allLabel()\"\n        [variant]=\"'text'\"\n        [severity]=\"'primary'\"\n        [accentColor]=\"accentColor()\"\n        (click)=\"selectOption('all')\"\n      ></ap-button>\n    }\n\n    @if (showTodayLabel()) {\n      <ap-button\n        [size]=\"'small'\"\n        [label]=\"todayLabel()\"\n        [variant]=\"'text'\"\n        [severity]=\"'primary'\"\n        [accentColor]=\"accentColor()\"\n        (click)=\"selectOption('today')\"\n      ></ap-button>\n    }\n\n    @if (showDayLabel()) {\n      <ap-button\n        [size]=\"'small'\"\n        [label]=\"dayLabel()\"\n        [variant]=\"'text'\"\n        [severity]=\"'primary'\"\n        [accentColor]=\"accentColor()\"\n        (click)=\"selectOption('last7days')\"\n      ></ap-button>\n    }\n\n    @if (showCustomLabel()) {\n      <ap-button\n        [size]=\"'small'\"\n        [severity]=\"'primary'\"\n        [variant]=\"'text'\"\n        [label]=\"customLabel()\"\n        [accentColor]=\"accentColor()\"\n        (click)=\"selectOption('custom')\"\n      ></ap-button>\n    }\n  </div>\n\n  <!-- Custom Date Range Selector -->\n  <div class=\"p-1 pt-2 space-y-2\" *ngIf=\"showCustom()\">\n    <!-- From Date -->\n    <div class=\"space-y-2\">\n      <div\n        class=\"flex items-center gap-2 px-3 py-2 \" [ngClass]=\"calendarClasses()\"\n      >\n        <label [ngClass]=\"calendarDayLabel()\">From</label>\n        <ap-icon name=\"calendar\" class=\"size-4 text-zinc-400\" />\n        <input\n          type=\"text\"\n          class=\"flex-1 w-full bg-transparent text-zinc-500 dark:text-white text-sm font-normal outline-none\"\n          [value]=\"formattedFromDate()\"\n          (input)=\"onFromInput($any($event.target).value)\"\n          placeholder=\"YYYY-MM-DD\"\n        />\n        <button\n          *ngIf=\"fromDate()\"\n          class=\"aspect-square flex items-center justify-center p-1 rounded transition-colors bg-zinc-200 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-200 cursor-pointer\"\n          (click)=\"clearFromDate()\"\n        ></button>\n      </div>\n    </div>\n\n    <!-- Calendar -->\n    <div class=\"p-3\" [ngClass]=\"calendarClasses()\">\n      <!-- Month Navigation -->\n      <div class=\"flex items-center justify-between pb-1 \">\n        <button\n          class=\"aspect-square flex items-center justify-center p-1 rounded transition-colors cursor-pointer text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-300 dark:hover:bg-zinc-700\"\n          (click)=\"previousMonth()\"\n        >\n          <ap-icon name=\"chevron-left\" class=\"size-4\" />\n        </button>\n        <span class=\"text-black dark:text-white font-medium\">{{ monthName() }}</span>\n        <button\n          class=\"aspect-square flex items-center justify-center p-1 rounded transition-colors cursor-pointer text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-300 dark:hover:bg-zinc-700\"\n          (click)=\"nextMonth()\"\n        >\n          <ap-icon name=\"chevron-right\" class=\"size-4\" />\n        </button>\n      </div>\n\n      <!-- Days of Week -->\n      <div class=\"grid grid-cols-7 text-center text-xs text-zinc-400 gap-1\">\n        <div class=\"py-1\">Su</div>\n        <div class=\"py-1\">Mo</div>\n        <div class=\"py-1\">Tu</div>\n        <div class=\"py-1\">We</div>\n        <div class=\"py-1\">Th</div>\n        <div class=\"py-1\">Fr</div>\n        <div class=\"py-1\">Sa</div>\n      </div>\n\n      <!-- Calendar Days -->\n      <div class=\"grid grid-cols-7 gap-1\">\n        <button\n          *ngFor=\"let day of calendarDays()\"\n          class=\"aspect-square flex items-center justify-center rounded-md transition-all duration-200 cursor-pointer\"\n          [ngClass]=\"calendarDayConfirm(day)\"\n          (click)=\"onDateClick(day)\"\n        >\n          {{ day.day }}\n        </button>\n      </div>\n    </div>\n\n    <!-- To Date -->\n    <div class=\"space-y-2\">\n      <div\n        class=\"flex items-center gap-2 px-3 py-2\" [ngClass]=\"calendarClasses()\"\n      >\n        <label [ngClass]=\"calendarDayLabel()\">To </label>\n        <ap-icon name=\"calendar\" class=\"size-4 text-zinc-400\" />\n        <input\n          type=\"text\"\n          class=\"flex-1 w-full bg-transparent text-zinc-500 dark:text-white text-sm font-normal outline-none\"\n          [value]=\"formattedToDate()\"\n          (input)=\"onToInput($any($event.target).value)\"\n          placeholder=\"YYYY-MM-DD\"\n        />\n        <button\n          *ngIf=\"toDate()\"\n          class=\"aspect-square flex items-center justify-center p-1 rounded transition-colors cursor-pointer bg-zinc-200 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-200\"\n          (click)=\"clearToDate()\"\n        ></button>\n      </div>\n    </div>\n\n    <!-- Confirm Button -->\n    <ap-button\n      [label]=\"'Confirm'\"\n      [severity]=\"'primary'\"\n      [accentColor]=\"accentColor()\"\n      (clicked)=\"confirm()\"\n      class=\"w-full mt-2\"\n    ></ap-button>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApCalenderComponent, { className: "ApCalenderComponent", filePath: "src/ap-components-lib/ap-calender/ap-calender.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=ap-calender.component.js.map