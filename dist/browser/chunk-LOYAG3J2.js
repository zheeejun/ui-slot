import {
  takeUntilDestroyed
} from "./chunk-COCIR4RJ.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-YG42UXQC.js";
import {
  ApIconComponent
} from "./chunk-YL37OG34.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DestroyRef,
  afterNextRender,
  filter,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-QGU3BS3L.js";

// src/app/layouts/layout-dev/layout-dev.component.ts
var _c0 = ["contentRef"];
var _forTrack0 = ($index, $item) => $item.name;
function LayoutDevComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function LayoutDevComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMobileMenu());
    });
    \u0275\u0275element(1, "ap-icon", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", "Open menu");
  }
}
function LayoutDevComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 6);
    \u0275\u0275text(1, "UI kit");
    \u0275\u0275elementEnd();
  }
}
function LayoutDevComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function LayoutDevComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275element(1, "ap-icon", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", "Close menu");
  }
}
function LayoutDevComponent_For_14_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "ap-icon", 20);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.isSubmenuExpanded(item_r6.name) ? "chevron-up" : "chevron-down");
  }
}
function LayoutDevComponent_For_14_Conditional_1_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 21)(1, "a", 22);
    \u0275\u0275listener("click", function LayoutDevComponent_For_14_Conditional_1_Conditional_3_For_2_Template_a_click_1_listener() {
      const child_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onChildSelected(child_r8.fragment));
    });
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", child_r8.path)("fragment", child_r8.fragment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r8.name);
  }
}
function LayoutDevComponent_For_14_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 18);
    \u0275\u0275repeaterCreate(1, LayoutDevComponent_For_14_Conditional_1_Conditional_3_For_2_Template, 4, 3, "li", 21, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r6.children);
  }
}
function LayoutDevComponent_For_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function LayoutDevComponent_For_14_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSubmenu(item_r6.name));
    });
    \u0275\u0275element(1, "ap-icon", 17);
    \u0275\u0275conditionalCreate(2, LayoutDevComponent_For_14_Conditional_1_Conditional_2_Template, 3, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LayoutDevComponent_For_14_Conditional_1_Conditional_3_Template, 3, 0, "ul", 18);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("flex w-full items-center gap-3 p-2 hover:bg-zinc-800 active:bg-zinc-700 rounded-lg duration-200 transition-colors cursor-pointer " + (ctx_r2.isCollapsed() ? "lg:justify-center" : ""));
    \u0275\u0275attribute("title", ctx_r2.isCollapsed() ? item_r6.name : null);
    \u0275\u0275advance();
    \u0275\u0275property("name", item_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isCollapsed() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSubmenuExpanded(item_r6.name) && !ctx_r2.isCollapsed() ? 3 : -1);
  }
}
function LayoutDevComponent_For_14_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.name);
  }
}
function LayoutDevComponent_For_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275listener("click", function LayoutDevComponent_For_14_Conditional_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275element(1, "ap-icon", 24);
    \u0275\u0275conditionalCreate(2, LayoutDevComponent_For_14_Conditional_2_Conditional_2_Template, 2, 1, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("flex items-center gap-3 p-2 hover:bg-zinc-800 active:bg-zinc-700 rounded-lg duration-200 transition-colors " + (ctx_r2.isCollapsed() ? "lg:justify-center" : ""));
    \u0275\u0275property("routerLink", item_r6.path);
    \u0275\u0275attribute("title", ctx_r2.isCollapsed() ? item_r6.name : null);
    \u0275\u0275advance();
    \u0275\u0275property("name", item_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isCollapsed() ? 2 : -1);
  }
}
function LayoutDevComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275conditionalCreate(1, LayoutDevComponent_For_14_Conditional_1_Template, 4, 6)(2, LayoutDevComponent_For_14_Conditional_2_Template, 3, 6, "a", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r6.children && item_r6.children.length > 0 ? 1 : 2);
  }
}
var LayoutDevComponent = class _LayoutDevComponent {
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  contentRef = viewChild("contentRef");
  isCollapsed = signal(false);
  menuItems = [
    { name: "Icon", path: "icons", icon: "squares-2x2" },
    {
      name: "Button",
      path: "button",
      icon: "cube",
      children: [
        { name: "Button", path: "button", icon: "bar-3", fragment: "ap-button-list" },
        { name: "Auto Spin", path: "button", icon: "bar-3", fragment: "ap-button-auto-spin-times" },
        { name: "Free Spin", path: "button", icon: "bar-3", fragment: "ap-button-free-spins" }
      ]
    },
    {
      name: "Input",
      path: "input",
      icon: "pencil-square",
      children: [
        { name: "Input", path: "input", icon: "bar-3", fragment: "ap-input-list" },
        { name: "Select", path: "input", icon: "bar-3", fragment: "ap-select-list" },
        { name: "Toggle Switch", path: "input", icon: "bar-3", fragment: "ap-toggle-switch-list" },
        { name: "Radio", path: "input", icon: "bar-3", fragment: "ap-radio-list" },
        { name: "Checkbox", path: "input", icon: "bar-3", fragment: "ap-check-box-list" }
      ]
    },
    {
      name: "Menu",
      path: "menu",
      icon: "bar-3",
      children: [
        { name: "Tab Button", path: "menu", icon: "bar-3", fragment: "ap-ui-tab-group" },
        { name: "Tab Text Button", path: "menu", icon: "bar-3", fragment: "ap-tab-menu-text" },
        { name: "Tab Icon Button", path: "menu", icon: "bar-3", fragment: "ap-tab-menu-icon" }
      ]
    },
    {
      name: "Message",
      path: "message",
      icon: "chat-bubble-left-right",
      children: [
        { name: "Message", path: "message", icon: "bar-3", fragment: "ap-message" },
        { name: "Toast", path: "message", icon: "bar-3", fragment: "ap-toast" }
      ]
    },
    {
      name: "Component",
      path: "component",
      icon: "cube",
      children: [
        { name: "Status Mode", path: "component", icon: "bar-3", fragment: "ap-ui-replay-mode" },
        { name: "Calender", path: "component", icon: "bar-3", fragment: "ap-history-calendar" }
      ]
    },
    {
      name: "Misc",
      path: "misc",
      icon: "window",
      children: [
        { name: "Tag", path: "misc", icon: "bar-3", fragment: "ap-tag" },
        { name: "Badge", path: "misc", icon: "bar-3", fragment: "ap-badge" }
      ]
    },
    { name: "Popup", path: "popup", icon: "window" },
    {
      name: "History",
      path: "history",
      icon: "clock",
      children: [
        { name: "History List", path: "history", icon: "bar-3", fragment: "ap-history-list" }
      ]
    },
    {
      name: "Buy Feature",
      path: "feature",
      icon: "shopping-cart",
      children: [
        { name: "Bet Control", path: "feature", icon: "bar-3", fragment: "ap-bf-card-bet-control" },
        { name: "Buy Feature Card", path: "feature", icon: "bar-3", fragment: "ap-bf-card-feature" },
        { name: "Buy Chance Card", path: "feature", icon: "bar-3", fragment: "ap-bf-card-chance" }
      ]
    },
    {
      name: "Campaign",
      path: "campaign",
      icon: "gift",
      children: [
        { name: "Campaign Card", path: "campaign", icon: "bar-3", fragment: "ap-campaign-card" },
        { name: "Campaign List", path: "campaign", icon: "bar-3", fragment: "ap-campaign-list" }
      ]
    },
    {
      name: "Cash Drop",
      path: "cashdrop",
      icon: "two-coins",
      children: [
        { name: "Count Down", path: "cashdrop", icon: "bar-3", fragment: "ap-cashdrop-card-countdown" },
        { name: "Count Down Component", path: "cashdrop", icon: "bar-3", fragment: "ap-cashdrop-card-component-countdown" },
        { name: "List", path: "cashdrop", icon: "bar-3", fragment: "ap-cashdrop-list" }
      ]
    },
    { name: "Promo Code", path: "promo-code", icon: "star" },
    {
      name: "Tournament",
      path: "trn",
      icon: "trophy",
      children: [
        { name: "Card Title", path: "trn", icon: "bar-3", fragment: "ap-trn-card-title" },
        { name: "Card Bonus", path: "trn", icon: "bar-3", fragment: "ap-trn-card-bonus" },
        { name: "Card Match", path: "trn", icon: "bar-3", fragment: "ap-trn-card-match" },
        { name: "Float Button", path: "trn", icon: "bar-3", fragment: "ap-trn-float-button" },
        { name: "Float Countdown", path: "trn", icon: "bar-3", fragment: "ap-trn-float-countdown" },
        { name: "Status Bar", path: "trn", icon: "bar-3", fragment: "ap-trn-status-bar" },
        { name: "Game Hint", path: "trn", icon: "bar-3", fragment: "ap-trn-game-hint" },
        { name: "Game List", path: "trn", icon: "bar-3", fragment: "ap-trn-list-game" },
        { name: "Game Start Confirm", path: "trn", icon: "bar-3", fragment: "ap-trn-game-confirm" },
        { name: "Game Leave Confirm", path: "trn", icon: "bar-3", fragment: "trn-game-event-leave-confirm" },
        { name: "Game Match Finished", path: "trn", icon: "bar-3", fragment: "ap-trn-game-match-finished" },
        { name: "Game Notification Created", path: "trn", icon: "bar-3", fragment: "trn-created-notification" },
        { name: "Game Result", path: "trn", icon: "bar-3", fragment: "ap-trn-game-result" }
      ]
    },
    { name: "Campaign Demo", path: "campaigndemo", icon: "gift" }
  ];
  expandedMenus = signal(/* @__PURE__ */ new Set());
  isMobileMenuOpen = false;
  constructor() {
    afterNextRender(() => {
      this.scrollToFragment(this.router.parseUrl(this.router.url).fragment);
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.scrollToFragment(this.router.parseUrl(this.router.url).fragment);
    });
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  onChildSelected(fragment) {
    this.closeMobileMenu();
    this.scrollToFragment(fragment);
  }
  toggleCollapse() {
    this.isCollapsed.update((value) => !value);
  }
  toggleSubmenu(name) {
    this.expandedMenus.update((current) => {
      const next = new Set(current);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }
  isSubmenuExpanded(name) {
    return this.expandedMenus().has(name);
  }
  scrollToFragment(fragment) {
    if (!fragment) {
      return;
    }
    setTimeout(() => {
      const content = this.contentRef()?.nativeElement;
      const target = document.getElementById(fragment);
      if (!content || !target || !content.contains(target)) {
        return;
      }
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
  static \u0275fac = function LayoutDevComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutDevComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutDevComponent, selectors: [["layout-dev"]], viewQuery: function LayoutDevComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.contentRef, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 15, vars: 11, consts: [["contentRef", ""], [1, "flex", "flex-col", "h-full", "bg-zinc-950", "text-zinc-200"], [1, "fixed", "size-10", "top-6", "left-4", "z-sticky", "lg:hidden", "bg-zinc-800", "hover:bg-zinc-700", "hover:text-orange-400", "text-white", "p-3", "rounded-lg", "shadow-lg", "color-transition", "flex", "items-center", "justify-center", "cursor-pointer"], ["id", "content"], [1, "p-4", "md:p-8", "max-w-5xl", "mx-auto", "pt-20", "md:pt-20", "lg:pt-16"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "font-bold", "text-orange-400"], [1, "hidden", "lg:flex", "size-10", "items-center", "justify-center", "hover:bg-zinc-800", "rounded-lg", "transition-colors", "cursor-pointer", "hover:text-orange-400", 3, "click"], [1, "info-icon", 3, "name"], [1, "lg:hidden", "size-10", "flex", "items-center", "justify-center", "hover:bg-zinc-800", "rounded-lg", "transition-colors", "cursor-pointer", "hover:text-orange-400"], [1, "mt-2"], [1, "fixed", "size-10", "top-6", "left-4", "z-sticky", "lg:hidden", "bg-zinc-800", "hover:bg-zinc-700", "hover:text-orange-400", "text-white", "p-3", "rounded-lg", "shadow-lg", "color-transition", "flex", "items-center", "justify-center", "cursor-pointer", 3, "click"], ["name", "bar-3", 1, "info-icon"], [1, "lg:hidden", "size-10", "flex", "items-center", "justify-center", "hover:bg-zinc-800", "rounded-lg", "transition-colors", "cursor-pointer", "hover:text-orange-400", 3, "click"], ["name", "x-mark", 1, "info-icon"], ["routerLinkActive", "bg-zinc-800 font-bold text-orange-400", 3, "routerLink", "class"], ["type", "button", 3, "click"], [1, "size-4", "shrink-0", 3, "name"], [1, "mt-1", "pl-2", "border-l-2", "border-zinc-400/50", "text-zinc-400", "ml-2"], [1, "flex-1", "text-left"], [1, "size-3", "shrink-0", 3, "name"], [1, "mt-1", "pl-1"], ["routerLinkActive", "font-bold", 1, "flex", "items-center", "px-1.5", "py-1", "text-sm", "hover:bg-zinc-800/60", "hover:text-orange-300", "active:bg-zinc-800", "active:text-orange-400", "focus:text-orange-400", "rounded-md", "color-transition", 3, "click", "routerLink", "fragment"], ["routerLinkActive", "bg-zinc-800 font-bold text-orange-400", 3, "click", "routerLink"], [1, "nav-icon", "shrink-0", 3, "name"]], template: function LayoutDevComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, LayoutDevComponent_Conditional_1_Template, 2, 1, "button", 2);
      \u0275\u0275elementStart(2, "main", 3, 0)(4, "div", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "aside")(7, "div", 5);
      \u0275\u0275conditionalCreate(8, LayoutDevComponent_Conditional_8_Template, 2, 0, "h2", 6);
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275listener("click", function LayoutDevComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleCollapse());
      });
      \u0275\u0275element(10, "ap-icon", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, LayoutDevComponent_Conditional_11_Template, 2, 1, "button", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul");
      \u0275\u0275repeaterCreate(13, LayoutDevComponent_For_14_Template, 3, 1, "li", 10, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isMobileMenuOpen ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275classMap("relative h-full w-full duration-300 overflow-auto " + (ctx.isCollapsed() ? "lg:pl-16" : "lg:pl-52"));
      \u0275\u0275advance(4);
      \u0275\u0275classMap("fixed top-0 h-full bg-zinc-900 border-r-2 border-zinc-700/80 text-zinc-100 p-6 duration-300 z-sticky overflow-auto " + (ctx.isMobileMenuOpen ? "ml-0 w-auto" : "-ml-64 w-auto") + " lg:ml-0 lg:" + (ctx.isCollapsed() ? "w-16 px-2" : "w-64 px-6"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isCollapsed() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("mx-auto", ctx.isCollapsed());
      \u0275\u0275attribute("aria-label", ctx.isCollapsed() ? "Expand menu" : "Collapse menu");
      \u0275\u0275advance();
      \u0275\u0275property("name", ctx.isCollapsed() ? "chevron-right" : "chevron-left");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMobileMenuOpen ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.menuItems);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, CommonModule, ApIconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\naside[_ngcontent-%COMP%] {\n  transition:\n    margin-left 0.3s ease-in-out,\n    width 0.3s ease-in-out,\n    padding 0.3s ease-in-out;\n}\nmain[_ngcontent-%COMP%] {\n  transition: padding-left 0.3s ease-in-out;\n}\nbody.mobile-menu-open[_nghost-%COMP%], body.mobile-menu-open   [_nghost-%COMP%] {\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  aside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=layout-dev.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutDevComponent, [{
    type: Component,
    args: [{ selector: "layout-dev", imports: [RouterModule, CommonModule, ApIconComponent], template: `<div class="flex flex-col h-full bg-zinc-950 text-zinc-200">
  <!-- Mobile Menu Toggle Button (when menu is closed) -->
  @if (!isMobileMenuOpen) {
    <button
      (click)="toggleMobileMenu()"
      class="fixed size-10 top-6 left-4 z-sticky lg:hidden bg-zinc-800 hover:bg-zinc-700 hover:text-orange-400 text-white p-3 rounded-lg shadow-lg color-transition flex items-center justify-center cursor-pointer"
      [attr.aria-label]="'Open menu'"
    >
      <ap-icon name="bar-3" class="info-icon" />
    </button>
  }

  <!-- \u53F3\u5074 Content -->
  <main
    #contentRef
    [class]="
      'relative h-full w-full duration-300 overflow-auto ' +
      (isCollapsed() ? 'lg:pl-16' : 'lg:pl-52')
    "
    id="content"
  >
    <div class="p-4 md:p-8 max-w-5xl mx-auto pt-20 md:pt-20 lg:pt-16">
      <router-outlet></router-outlet>
    </div>
  </main>

  <!-- \u5DE6\u5074 Menu -->
  <aside
    [class]="
      'fixed top-0 h-full bg-zinc-900 border-r-2 border-zinc-700/80 text-zinc-100 p-6 duration-300 z-sticky overflow-auto ' +
      (isMobileMenuOpen ? 'ml-0 w-auto' : '-ml-64 w-auto') +
      ' lg:ml-0 lg:' +
      (isCollapsed() ? 'w-16 px-2' : 'w-64 px-6')
    "
  >
    <div class="flex items-center justify-between mb-4">
      @if (!isCollapsed()) {
        <h2 class="font-bold text-orange-400">UI kit</h2>
      }
      <!-- Desktop collapse toggle button -->
      <button
        (click)="toggleCollapse()"
        class="hidden lg:flex size-10 items-center justify-center hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer hover:text-orange-400"
        [class.mx-auto]="isCollapsed()"
        [attr.aria-label]="isCollapsed() ? 'Expand menu' : 'Collapse menu'"
      >
        <ap-icon
          [name]="isCollapsed() ? 'chevron-right' : 'chevron-left'"
          class="info-icon"
        />
      </button>
      <!-- Close button inside menu (mobile only) -->
      @if (isMobileMenuOpen) {
        <button
          (click)="closeMobileMenu()"
          class="lg:hidden size-10 flex items-center justify-center hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer hover:text-orange-400"
          [attr.aria-label]="'Close menu'"
        >
          <ap-icon name="x-mark" class="info-icon" />
        </button>
      }
    </div>
    <ul>
      @for (item of menuItems; track item.name) {
        <li class="mt-2">
          @if (item.children && item.children.length > 0) {
            <button
              type="button"
              (click)="toggleSubmenu(item.name)"
              [class]="
                'flex w-full items-center gap-3 p-2 hover:bg-zinc-800 active:bg-zinc-700 rounded-lg duration-200 transition-colors cursor-pointer ' +
                (isCollapsed() ? 'lg:justify-center' : '')
              "
              [attr.title]="isCollapsed() ? item.name : null"
            >
              <ap-icon [name]="item.icon" class="size-4 shrink-0" />
              @if (!isCollapsed()) {
                <p class="flex-1 text-left">{{ item.name }}</p>
                <ap-icon
                  [name]="
                    isSubmenuExpanded(item.name) ? 'chevron-up' : 'chevron-down'
                  "
                  class="size-3 shrink-0"
                />
              }
            </button>
            @if (isSubmenuExpanded(item.name) && !isCollapsed()) {
              <ul
                class="mt-1 pl-2 border-l-2 border-zinc-400/50 text-zinc-400 ml-2"
              >
                @for (child of item.children; track child.name) {
                  <li class="mt-1 pl-1">
                    <a
                      [routerLink]="child.path"
                      [fragment]="child.fragment"
                      routerLinkActive="font-bold"
                      (click)="onChildSelected(child.fragment)"
                      class="flex items-center px-1.5 py-1 text-sm hover:bg-zinc-800/60 hover:text-orange-300 active:bg-zinc-800 active:text-orange-400 focus:text-orange-400 rounded-md color-transition"
                    >
                      <p>{{ child.name }}</p>
                    </a>
                  </li>
                }
              </ul>
            }
          } @else {
            <a
              [routerLink]="item.path"
              routerLinkActive="bg-zinc-800 font-bold text-orange-400"
              (click)="closeMobileMenu()"
              [class]="
                'flex items-center gap-3 p-2 hover:bg-zinc-800 active:bg-zinc-700 rounded-lg duration-200 transition-colors ' +
                (isCollapsed() ? 'lg:justify-center' : '')
              "
              [attr.title]="isCollapsed() ? item.name : null"
            >
              <ap-icon [name]="item.icon" class="nav-icon shrink-0" />
              @if (!isCollapsed()) {
                <p>{{ item.name }}</p>
              }
            </a>
          }
        </li>
      }
    </ul>
  </aside>
</div>
`, styles: ["/* src/app/layouts/layout-dev/layout-dev.component.css */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\naside {\n  transition:\n    margin-left 0.3s ease-in-out,\n    width 0.3s ease-in-out,\n    padding 0.3s ease-in-out;\n}\nmain {\n  transition: padding-left 0.3s ease-in-out;\n}\n:host-context(body.mobile-menu-open) {\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  aside a {\n    min-height: 44px;\n    display: flex;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=layout-dev.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutDevComponent, { className: "LayoutDevComponent", filePath: "src/app/layouts/layout-dev/layout-dev.component.ts", lineNumber: 21 });
})();
export {
  LayoutDevComponent
};
//# sourceMappingURL=chunk-LOYAG3J2.js.map
