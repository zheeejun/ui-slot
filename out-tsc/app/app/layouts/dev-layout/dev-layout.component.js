import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
function DevLayoutComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function DevLayoutComponent_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleMobileMenu()); });
    i0.ɵɵelement(1, "ap-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("aria-label", "Open menu");
} }
function DevLayoutComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1, "UI kit");
    i0.ɵɵelementEnd();
} }
function DevLayoutComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function DevLayoutComponent_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMobileMenu()); });
    i0.ɵɵelement(1, "ap-icon", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("aria-label", "Close menu");
} }
function DevLayoutComponent_li_12_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5.name);
} }
function DevLayoutComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 14)(1, "a", 15);
    i0.ɵɵlistener("click", function DevLayoutComponent_li_12_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMobileMenu()); });
    i0.ɵɵelement(2, "ap-icon", 16);
    i0.ɵɵconditionalCreate(3, DevLayoutComponent_li_12_Conditional_3_Template, 2, 1, "span");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap("flex items-center gap-3 p-2 hover:bg-zinc-800 active:bg-zinc-700 rounded-lg duration-200 transition-colors " + (ctx_r1.isCollapsed() ? "lg:justify-center" : ""));
    i0.ɵɵproperty("routerLink", item_r5.path);
    i0.ɵɵattribute("title", ctx_r1.isCollapsed() ? item_r5.name : null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", item_r5.icon);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.isCollapsed() ? 3 : -1);
} }
/**
 * DevLayoutComponent 是一個用於開發者模式的資料庫
 * 提供了一些開發者工具和資訊頁面, 像是圖示、按鈕、組件等
 * 這些頁面可以幫助開發者更好地理解和使用
 */
export class DevLayoutComponent {
    isCollapsed = signal(false);
    menuItems = [
        { name: 'About', path: 'about', icon: 'exclamation-circle' },
        { name: 'Input', path: 'input', icon: 'pencil-square' },
        { name: 'Icon', path: 'icons', icon: 'squares-2x2' },
        { name: 'Button', path: 'button', icon: 'cube' },
        { name: 'Panel', path: 'panel', icon: 'rectangle-stack' },
        { name: 'Menu', path: 'menu', icon: 'bar-3' },
        { name: 'Message', path: 'message', icon: 'chat-bubble-left-right' },
        { name: 'Component', path: 'component', icon: 'cube' },
        { name: 'Misc', path: 'misc', icon: 'window' },
        { name: 'Popup', path: 'popup', icon: 'window' },
        { name: 'History', path: 'history', icon: 'clock' },
        { name: 'Buy Feature', path: 'feature', icon: 'ticket default' },
        { name: 'Campaign', path: 'campaign', icon: 'gift' },
        { name: 'Cash Drop', path: 'cashdrop', icon: 'two-coins' },
        { name: 'Promo Code', path: 'promo-code', icon: 'star' },
        { name: 'Tournament', path: 'trn', icon: 'trophy' },
    ];
    // Mobile menu state
    isMobileMenuOpen = false;
    constructor() { }
    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
    closeMobileMenu() {
        this.isMobileMenuOpen = false;
    }
    toggleCollapse() {
        this.isCollapsed.update((value) => !value);
    }
    static ɵfac = function DevLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevLayoutComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevLayoutComponent, selectors: [["dev-layout"]], decls: 13, vars: 12, consts: [[1, "flex", "flex-col", "h-full", "bg-zinc-950", "text-zinc-200"], [1, "fixed", "size-10", "top-6", "left-4", "z-50", "lg:hidden", "bg-zinc-800", "hover:bg-zinc-700", "hover:text-orange-400", "text-white", "p-3", "rounded-lg", "shadow-lg", "transition-colors", "duration-300", "flex", "items-center", "justify-center", "cursor-pointer"], ["id", "content"], [1, "p-4", "md:p-8", "max-w-5xl", "mx-auto", "pt-20", "md:pt-20", "lg:pt-16"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "font-bold", "text-orange-400", "text-xl"], [1, "hidden", "lg:flex", "size-10", "items-center", "justify-center", "hover:bg-zinc-800", "rounded-lg", "transition-colors", "cursor-pointer", "hover:text-orange-400", 3, "click"], [1, "w-5", "h-5", 3, "name"], [1, "lg:hidden", "size-10", "flex", "items-center", "justify-center", "hover:bg-zinc-800", "rounded-lg", "transition-colors", "cursor-pointer", "hover:text-orange-400"], ["class", "mt-2", 4, "ngFor", "ngForOf"], [1, "fixed", "size-10", "top-6", "left-4", "z-50", "lg:hidden", "bg-zinc-800", "hover:bg-zinc-700", "hover:text-orange-400", "text-white", "p-3", "rounded-lg", "shadow-lg", "transition-colors", "duration-300", "flex", "items-center", "justify-center", "cursor-pointer", 3, "click"], ["name", "bar-3", 1, "w-5", "h-5"], [1, "lg:hidden", "size-10", "flex", "items-center", "justify-center", "hover:bg-zinc-800", "rounded-lg", "transition-colors", "cursor-pointer", "hover:text-orange-400", 3, "click"], ["name", "x-mark", 1, "w-5", "h-5"], [1, "mt-2"], ["routerLinkActive", "bg-zinc-800 font-bold text-orange-400", 3, "click", "routerLink"], [1, "w-5", "h-5", "shrink-0", 3, "name"]], template: function DevLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, DevLayoutComponent_Conditional_1_Template, 2, 1, "button", 1);
            i0.ɵɵelementStart(2, "main", 2)(3, "div", 3);
            i0.ɵɵelement(4, "router-outlet");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "aside")(6, "div", 4);
            i0.ɵɵconditionalCreate(7, DevLayoutComponent_Conditional_7_Template, 2, 0, "div", 5);
            i0.ɵɵelementStart(8, "button", 6);
            i0.ɵɵlistener("click", function DevLayoutComponent_Template_button_click_8_listener() { return ctx.toggleCollapse(); });
            i0.ɵɵelement(9, "ap-icon", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(10, DevLayoutComponent_Conditional_10_Template, 2, 1, "button", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "ul");
            i0.ɵɵtemplate(12, DevLayoutComponent_li_12_Template, 4, 6, "li", 9);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.isMobileMenuOpen ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassMap("relative h-full w-full duration-300 overflow-auto " + (ctx.isCollapsed() ? "lg:pl-16" : "lg:pl-52"));
            i0.ɵɵadvance(3);
            i0.ɵɵclassMap("fixed top-0 h-full bg-zinc-900 border-r-2 border-zinc-700/80 text-zinc-100 p-6 duration-300 z-sticky overflow-auto " + (ctx.isMobileMenuOpen ? "ml-0 w-auto" : "-ml-64 w-auto") + " lg:ml-0 lg:" + (ctx.isCollapsed() ? "w-16 px-2" : "w-64 px-6"));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.isCollapsed() ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("mx-auto", ctx.isCollapsed());
            i0.ɵɵattribute("aria-label", ctx.isCollapsed() ? "Expand menu" : "Collapse menu");
            i0.ɵɵadvance();
            i0.ɵɵproperty("name", ctx.isCollapsed() ? "chevron-right" : "chevron-left");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isMobileMenuOpen ? 10 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.menuItems);
        } }, dependencies: [RouterModule, i1.RouterOutlet, i1.RouterLink, i1.RouterLinkActive, CommonModule, i2.NgForOf, ApIconComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n\n\naside[_ngcontent-%COMP%] {\n  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out, padding 0.3s ease-in-out;\n}\n\n\n\nmain[_ngcontent-%COMP%] {\n  transition: padding-left 0.3s ease-in-out;\n}\n\n\n\nbody.mobile-menu-open[_nghost-%COMP%], body.mobile-menu-open   [_nghost-%COMP%] {\n  overflow: hidden;\n}\n\n\n\n@media (max-width: 1024px) {\n  aside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevLayoutComponent, [{
        type: Component,
        args: [{ selector: 'dev-layout', imports: [RouterModule, CommonModule, ApIconComponent], template: "<div class=\"flex flex-col h-full bg-zinc-950 text-zinc-200\">\n  <!-- Mobile Menu Toggle Button (when menu is closed) -->\n  @if (!isMobileMenuOpen) {\n  <button\n    (click)=\"toggleMobileMenu()\"\n    class=\"fixed size-10 top-6 left-4 z-50 lg:hidden bg-zinc-800 hover:bg-zinc-700 hover:text-orange-400 text-white p-3 rounded-lg shadow-lg transition-colors duration-300 flex items-center justify-center cursor-pointer\"\n    [attr.aria-label]=\"'Open menu'\"\n  >\n    <ap-icon name=\"bar-3\" class=\"w-5 h-5\"></ap-icon>\n  </button>\n  }\n\n  <!-- \u53F3\u5074 Content -->\n  <main\n    [class]=\"\n      'relative h-full w-full duration-300 overflow-auto ' +\n      (isCollapsed() ? 'lg:pl-16' : 'lg:pl-52')\n    \"\n    id=\"content\"\n  >\n    <div class=\"p-4 md:p-8 max-w-5xl mx-auto pt-20 md:pt-20 lg:pt-16\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n\n  <!-- \u5DE6\u5074 Menu -->\n  <aside\n    [class]=\"\n      'fixed top-0 h-full bg-zinc-900 border-r-2 border-zinc-700/80 text-zinc-100 p-6 duration-300 z-sticky overflow-auto ' +\n      (isMobileMenuOpen ? 'ml-0 w-auto' : '-ml-64 w-auto') +\n      ' lg:ml-0 lg:' +\n      (isCollapsed() ? 'w-16 px-2' : 'w-64 px-6')\n    \"\n  >\n    <div class=\"flex items-center justify-between mb-4\">\n      @if (!isCollapsed()) {\n      <div class=\"font-bold text-orange-400 text-xl\">UI kit</div>\n      }\n      <!-- Desktop collapse toggle button -->\n      <button\n        (click)=\"toggleCollapse()\"\n        class=\"hidden lg:flex size-10 items-center justify-center hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer hover:text-orange-400\"\n        [class.mx-auto]=\"isCollapsed()\"\n        [attr.aria-label]=\"isCollapsed() ? 'Expand menu' : 'Collapse menu'\"\n      >\n        <ap-icon\n          [name]=\"isCollapsed() ? 'chevron-right' : 'chevron-left'\"\n          class=\"w-5 h-5\"\n        ></ap-icon>\n      </button>\n      <!-- Close button inside menu (mobile only) -->\n      @if (isMobileMenuOpen) {\n      <button\n        (click)=\"closeMobileMenu()\"\n        class=\"lg:hidden size-10 flex items-center justify-center hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer hover:text-orange-400\"\n        [attr.aria-label]=\"'Close menu'\"\n      >\n        <ap-icon name=\"x-mark\" class=\"w-5 h-5\"></ap-icon>\n      </button>\n      }\n    </div>\n    <ul>\n      <li *ngFor=\"let item of menuItems\" class=\"mt-2\">\n        <a\n          [routerLink]=\"item.path\"\n          routerLinkActive=\"bg-zinc-800 font-bold text-orange-400\"\n          (click)=\"closeMobileMenu()\"\n          [class]=\"\n            'flex items-center gap-3 p-2 hover:bg-zinc-800 active:bg-zinc-700 rounded-lg duration-200 transition-colors ' +\n            (isCollapsed() ? 'lg:justify-center' : '')\n          \"\n          [attr.title]=\"isCollapsed() ? item.name : null\"\n        >\n          <ap-icon [name]=\"item.icon\" class=\"w-5 h-5 shrink-0\"></ap-icon>\n          @if (!isCollapsed()) {\n          <span>{{ item.name }}</span>\n          }\n        </a>\n      </li>\n    </ul>\n  </aside>\n</div>\n", styles: [":host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n/* Smooth transitions for menu */\naside {\n  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out, padding 0.3s ease-in-out;\n}\n\n/* Smooth transition for main content */\nmain {\n  transition: padding-left 0.3s ease-in-out;\n}\n\n/* Prevent body scroll when mobile menu is open */\n:host-context(body.mobile-menu-open) {\n  overflow: hidden;\n}\n\n/* Touch-friendly menu items on mobile */\n@media (max-width: 1024px) {\n  aside a {\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevLayoutComponent, { className: "DevLayoutComponent", filePath: "src/app/layouts/dev-layout/dev-layout.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=dev-layout.component.js.map