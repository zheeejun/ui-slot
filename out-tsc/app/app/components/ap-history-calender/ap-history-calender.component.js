import { Component, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApButtonComponent } from '../../../ap-components-lib/ap-button/ap-button.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({ "text-zinc-600": a0, "bg-yellow-400": a1, "text-zinc-950": a2, "font-bold": a3, "bg-yellow-400/10": a4, "text-yellow-400": a5, "rounded-l-md": a6, "rounded-r-md": a7, border: a8, "border-yellow-400": a9 });
function ApHistoryCalenderComponent_div_5_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function ApHistoryCalenderComponent_div_5_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearFromDate()); });
    i0.ɵɵelementEnd();
} }
function ApHistoryCalenderComponent_div_5_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function ApHistoryCalenderComponent_div_5_button_32_Template_button_click_0_listener() { const day_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateClick(day_r5)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunctionV(2, _c0, [!day_r5.isCurrentMonth, day_r5.isSelected, day_r5.isSelected, day_r5.isSelected, day_r5.isInRange && !day_r5.isSelected, day_r5.isInRange && !day_r5.isSelected, day_r5.isRangeStart, day_r5.isRangeEnd, day_r5.isToday, day_r5.isToday]));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", day_r5.day, " ");
} }
function ApHistoryCalenderComponent_div_5_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function ApHistoryCalenderComponent_div_5_button_39_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearToDate()); });
    i0.ɵɵelementEnd();
} }
function ApHistoryCalenderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "label", 8);
    i0.ɵɵtext(4, "From");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "ap-icon", 9);
    i0.ɵɵelementStart(6, "input", 10);
    i0.ɵɵlistener("input", function ApHistoryCalenderComponent_div_5_Template_input_input_6_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFromInput($event.target.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ApHistoryCalenderComponent_div_5_button_7_Template, 1, 0, "button", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 12)(9, "div", 13)(10, "button", 14);
    i0.ɵɵlistener("click", function ApHistoryCalenderComponent_div_5_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.previousMonth()); });
    i0.ɵɵelement(11, "ap-icon", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 16);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 17);
    i0.ɵɵlistener("click", function ApHistoryCalenderComponent_div_5_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.nextMonth()); });
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
    i0.ɵɵtemplate(32, ApHistoryCalenderComponent_div_5_button_32_Template, 2, 13, "button", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 6)(34, "div", 23)(35, "label", 8);
    i0.ɵɵtext(36, "To ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(37, "ap-icon", 9);
    i0.ɵɵelementStart(38, "input", 24);
    i0.ɵɵlistener("input", function ApHistoryCalenderComponent_div_5_Template_input_input_38_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onToInput($event.target.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(39, ApHistoryCalenderComponent_div_5_button_39_Template, 1, 0, "button", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "ap-button", 26);
    i0.ɵɵlistener("clicked", function ApHistoryCalenderComponent_div_5_Template_ap_button_clicked_40_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirm()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("value", ctx_r1.formattedFromDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fromDate());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.monthName());
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngForOf", ctx_r1.calendarDays());
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("value", ctx_r1.formattedToDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.toDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("label", ctx_r1.getConfirmButtonText())("severity", "primary")("accentColor", "yellow");
} }
export class ApHistoryCalenderComponent {
    allLabel = input('All');
    todayLabel = input('Today');
    dayLabel = input('Last 7 Days');
    customLabel = input('Custom');
    selectedOption = signal('today');
    getConfirmButtonText = input('Confirm');
    currentMonth = signal(new Date());
    fromDate = signal(null);
    toDate = signal(null);
    selectingFrom = signal(true);
    showCustom = signal(false);
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
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            this.toDate.set(tomorrow);
            this.confirm();
        }
        else if (option === 'last7days') {
            const lastWeek = new Date(today);
            lastWeek.setDate(lastWeek.getDate() - 6);
            this.fromDate.set(lastWeek);
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            this.toDate.set(tomorrow);
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
    static ɵfac = function ApHistoryCalenderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApHistoryCalenderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApHistoryCalenderComponent, selectors: [["ap-history-calender"]], inputs: { allLabel: [1, "allLabel"], todayLabel: [1, "todayLabel"], dayLabel: [1, "dayLabel"], customLabel: [1, "customLabel"], getConfirmButtonText: [1, "getConfirmButtonText"] }, outputs: { onConfirm: "onConfirm" }, decls: 6, vars: 16, consts: [[1, "bg-black/90", "border-1", "border-yellow-400/60", "rounded-lg", "p-2", "max-h-[30rem]", "overflow-y-auto", "w-[20rem]"], [1, "flex", "flex-col", "space-y-4"], [3, "click", "size", "label", "variant", "severity", "accentColor"], [3, "click", "size", "severity", "variant", "label", "accentColor"], ["class", "p-1 pt-2 space-y-2", 4, "ngIf"], [1, "p-1", "pt-2", "space-y-2"], [1, "space-y-2"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "bg-zinc-800", "rounded-lg", "border", "border-yellow-400/70"], [1, "text-yellow-400", "text-sm", "font-normal"], ["name", "calendar", 1, "size-4", "text-zinc-400"], ["type", "text", "placeholder", "YYYY-MM-DD", 1, "flex-1", "bg-transparent", "text-white", "text-sm", "font-normal", "outline-none", 3, "input", "value"], ["class", "aspect-square flex items-center justify-center p-1 hover:bg-zinc-700 rounded transition-colors text-zinc-400 hover:text-white cursor-pointer", 3, "click", 4, "ngIf"], [1, "bg-zinc-800", "rounded-lg", "p-3", "border", "border-yellow-400/70"], [1, "flex", "items-center", "justify-between", "pb-1", "text-zinc-300"], [1, "aspect-square", "flex", "items-center", "justify-center", "p-1", "hover:bg-zinc-700", "rounded", "transition-colors", "cursor-pointer", 3, "click"], ["name", "chevron-left", 1, "size-4"], [1, "text-white", "font-medium"], [1, "aspect-square", "flex", "items-center", "justify-center", "p-1", "hover:bg-zinc-700", "rounded", "transition-colors", "text-zinc-300", "cursor-pointer", 3, "click"], ["name", "chevron-right", 1, "size-4"], [1, "grid", "grid-cols-7", "text-center", "text-xs", "text-zinc-400", "gap-1"], [1, "py-1"], [1, "grid", "grid-cols-7", "gap-1"], ["class", "aspect-square flex items-center justify-center rounded-md transition-all duration-200 text-white cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "bg-zinc-800", "border", "border-yellow-400/70", "rounded-lg"], ["type", "text", "placeholder", "YYYY-MM-DD", 1, "flex-1", "text-white", "outline-none", "font-normal", 3, "input", "value"], ["class", "p-1 hover:bg-zinc-700 rounded transition-colors text-zinc-400 hover:text-white", 3, "click", 4, "ngIf"], [1, "w-full", "mt-2", 3, "clicked", "label", "severity", "accentColor"], [1, "aspect-square", "flex", "items-center", "justify-center", "p-1", "hover:bg-zinc-700", "rounded", "transition-colors", "text-zinc-400", "hover:text-white", "cursor-pointer", 3, "click"], [1, "aspect-square", "flex", "items-center", "justify-center", "rounded-md", "transition-all", "duration-200", "text-white", "cursor-pointer", 3, "click", "ngClass"], [1, "p-1", "hover:bg-zinc-700", "rounded", "transition-colors", "text-zinc-400", "hover:text-white", 3, "click"]], template: function ApHistoryCalenderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "ap-button", 2);
            i0.ɵɵlistener("click", function ApHistoryCalenderComponent_Template_ap_button_click_2_listener() { return ctx.selectOption("today"); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "ap-button", 2);
            i0.ɵɵlistener("click", function ApHistoryCalenderComponent_Template_ap_button_click_3_listener() { return ctx.selectOption("last7days"); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ap-button", 3);
            i0.ɵɵlistener("click", function ApHistoryCalenderComponent_Template_ap_button_click_4_listener() { return ctx.selectOption("custom"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(5, ApHistoryCalenderComponent_div_5_Template, 41, 9, "div", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("size", "small")("label", ctx.todayLabel())("variant", "text")("severity", "contrast")("accentColor", "yellow");
            i0.ɵɵadvance();
            i0.ɵɵproperty("size", "small")("label", ctx.dayLabel())("variant", "text")("severity", "contrast")("accentColor", "yellow");
            i0.ɵɵadvance();
            i0.ɵɵproperty("size", "small")("severity", "contrast")("variant", "text")("label", ctx.customLabel())("accentColor", "yellow");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showCustom());
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, ApButtonComponent, ApIconComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApHistoryCalenderComponent, [{
        type: Component,
        args: [{ selector: 'ap-history-calender', imports: [CommonModule, ApButtonComponent, ApIconComponent], template: "<div\n  class=\"bg-black/90 border-1 border-yellow-400/60 rounded-lg p-2 max-h-[30rem] overflow-y-auto w-[20rem]\"\n>\n  <!-- Options: Today, Last 7 days, Custom -->\n  <div class=\"flex flex-col space-y-4\">\n    <!--<ap-button\n      [size]=\"'small'\"\n      [label]=\"allLabel()\"\n      [variant]=\"'text'\"\n      [severity]=\"'contrast'\"\n      [accentColor]=\"'yellow'\"\n      (click)=\"selectOption('all')\"\n    ></ap-button>-->\n    <ap-button\n      [size]=\"'small'\"\n      [label]=\"todayLabel()\"\n      [variant]=\"'text'\"\n      [severity]=\"'contrast'\"\n      [accentColor]=\"'yellow'\"\n      (click)=\"selectOption('today')\"\n    />\n    <ap-button\n      [size]=\"'small'\"\n      [label]=\"dayLabel()\"\n      [variant]=\"'text'\"\n      [severity]=\"'contrast'\"\n      [accentColor]=\"'yellow'\"\n      (click)=\"selectOption('last7days')\"\n    />\n    <ap-button\n      [size]=\"'small'\"\n      [severity]=\"'contrast'\"\n      [variant]=\"'text'\"\n      [label]=\"customLabel()\"\n      [accentColor]=\"'yellow'\"\n      (click)=\"selectOption('custom')\"\n    />\n  </div>\n\n  <!-- Custom Date Range Selector -->\n  <div class=\"p-1 pt-2 space-y-2\" *ngIf=\"showCustom()\">\n    <!-- From Date -->\n    <div class=\"space-y-2\">\n      <div\n        class=\"flex items-center gap-2 px-3 py-2 bg-zinc-800 rounded-lg border border-yellow-400/70\"\n      >\n        <label class=\"text-yellow-400 text-sm font-normal\">From</label>\n        <ap-icon name=\"calendar\" class=\"size-4 text-zinc-400\" />\n        <input\n          type=\"text\"\n          class=\"flex-1 bg-transparent text-white text-sm font-normal outline-none\"\n          [value]=\"formattedFromDate()\"\n          (input)=\"onFromInput($any($event.target).value)\"\n          placeholder=\"YYYY-MM-DD\"\n        />\n        <button\n          *ngIf=\"fromDate()\"\n          class=\"aspect-square flex items-center justify-center p-1 hover:bg-zinc-700 rounded transition-colors text-zinc-400 hover:text-white cursor-pointer\"\n          (click)=\"clearFromDate()\"\n        ></button>\n      </div>\n    </div>\n\n    <!-- Calendar -->\n    <div class=\"bg-zinc-800 rounded-lg p-3 border border-yellow-400/70\">\n      <!-- Month Navigation -->\n      <div class=\"flex items-center justify-between pb-1 text-zinc-300\">\n        <button\n          class=\"aspect-square flex items-center justify-center p-1 hover:bg-zinc-700 rounded transition-colors cursor-pointer\"\n          (click)=\"previousMonth()\"\n        >\n          <ap-icon name=\"chevron-left\" class=\"size-4\" />\n        </button>\n        <span class=\"text-white font-medium\">{{ monthName() }}</span>\n        <button\n          class=\"aspect-square flex items-center justify-center p-1 hover:bg-zinc-700 rounded transition-colors text-zinc-300 cursor-pointer\"\n          (click)=\"nextMonth()\"\n        >\n          <ap-icon name=\"chevron-right\" class=\"size-4\" />\n        </button>\n      </div>\n\n      <!-- Days of Week -->\n      <div class=\"grid grid-cols-7 text-center text-xs text-zinc-400 gap-1\">\n        <div class=\"py-1\">Su</div>\n        <div class=\"py-1\">Mo</div>\n        <div class=\"py-1\">Tu</div>\n        <div class=\"py-1\">We</div>\n        <div class=\"py-1\">Th</div>\n        <div class=\"py-1\">Fr</div>\n        <div class=\"py-1\">Sa</div>\n      </div>\n\n      <!-- Calendar Days -->\n      <div class=\"grid grid-cols-7 gap-1\">\n        <button\n          *ngFor=\"let day of calendarDays()\"\n          class=\"aspect-square flex items-center justify-center rounded-md transition-all duration-200 text-white cursor-pointer\"\n          [ngClass]=\"{\n            'text-zinc-600': !day.isCurrentMonth,\n            'bg-yellow-400': day.isSelected,\n            'text-zinc-950': day.isSelected,\n            'font-bold': day.isSelected,\n            'bg-yellow-400/10': day.isInRange && !day.isSelected,\n            'text-yellow-400': day.isInRange && !day.isSelected,\n            'rounded-l-md': day.isRangeStart,\n            'rounded-r-md': day.isRangeEnd,\n            border: day.isToday,\n            'border-yellow-400': day.isToday\n          }\"\n          (click)=\"onDateClick(day)\"\n        >\n          {{ day.day }}\n        </button>\n      </div>\n    </div>\n\n    <!-- To Date -->\n    <div class=\"space-y-2\">\n      <div\n        class=\"flex items-center gap-2 px-3 py-2 bg-zinc-800 border border-yellow-400/70 rounded-lg\"\n      >\n        <label class=\"text-yellow-400 text-sm font-normal\">To </label>\n        <ap-icon name=\"calendar\" class=\"size-4 text-zinc-400\" />\n        <input\n          type=\"text\"\n          class=\"flex-1 text-white outline-none font-normal\"\n          [value]=\"formattedToDate()\"\n          (input)=\"onToInput($any($event.target).value)\"\n          placeholder=\"YYYY-MM-DD\"\n        />\n        <button\n          *ngIf=\"toDate()\"\n          class=\"p-1 hover:bg-zinc-700 rounded transition-colors text-zinc-400 hover:text-white\"\n          (click)=\"clearToDate()\"\n        ></button>\n      </div>\n    </div>\n\n    <!-- Confirm Button -->\n    <ap-button\n      [label]=\"getConfirmButtonText()\"\n      [severity]=\"'primary'\"\n      [accentColor]=\"'yellow'\"\n      (clicked)=\"confirm()\"\n      class=\"w-full mt-2\"\n    />\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApHistoryCalenderComponent, { className: "ApHistoryCalenderComponent", filePath: "src/app/components/ap-history-calender/ap-history-calender.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=ap-history-calender.component.js.map