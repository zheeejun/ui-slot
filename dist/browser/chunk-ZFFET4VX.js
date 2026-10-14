import {
  RouterCtrlService
} from "./chunk-57FVUZ33.js";
import {
  SoundService
} from "./chunk-FCZ4RVMP.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-YG42UXQC.js";
import {
  AppI18nService
} from "./chunk-MTOHY3QQ.js";
import {
  ClientSessionService,
  environment
} from "./chunk-B2M5HODU.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  Renderer2,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective
} from "./chunk-QGU3BS3L.js";

// src/app/shared/directives/global-click-sound/global-click-sound.directive.ts
var INTERACTIVE_SELECTORS = [
  "button",
  "a[href]",
  "summary",
  "label[for]",
  'input[type="button"]',
  'input[type="submit"]',
  'input[type="reset"]',
  '[role="button"]',
  '[role="link"]',
  '[role="tab"]',
  '[role="switch"]',
  '[role="checkbox"]',
  '[role="radio"]',
  '[role="menuitem"]',
  "[data-click-sound]",
  '[tabindex]:not([tabindex="-1"])',
  ".cursor-pointer"
].join(", ");
var EXCLUDED_SELECTORS = [
  "[data-no-click-sound]",
  ".no-click-sound"
].join(", ");
var DISABLED_SELECTORS = [
  "[disabled]",
  '[aria-disabled="true"]',
  ".disabled",
  ".is-disabled",
  ".cursor-not-allowed",
  ".pointer-events-none"
].join(", ");
var GlobalClickSoundDirective = class _GlobalClickSoundDirective {
  document = inject(DOCUMENT);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  destroyRef = inject(DestroyRef);
  soundService = inject(SoundService);
  constructor() {
    const removeClickListener = this.renderer.listen(this.document, "click", (event) => this.handleDocumentClick(event));
    this.destroyRef.onDestroy(removeClickListener);
  }
  handleDocumentClick(event) {
    if (!event.isTrusted || event.defaultPrevented || event.button !== 0) {
      return;
    }
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    const rootElement = this.elementRef.nativeElement;
    const interactiveTarget = target.closest(INTERACTIVE_SELECTORS);
    if (!interactiveTarget || !rootElement.contains(interactiveTarget)) {
      return;
    }
    if (interactiveTarget.closest(EXCLUDED_SELECTORS)) {
      return;
    }
    if (this.isDisabled(interactiveTarget)) {
      return;
    }
    this.soundService.playClick();
  }
  isDisabled(element) {
    const disabledElement = element.closest(DISABLED_SELECTORS);
    if (!disabledElement) {
      return false;
    }
    if (disabledElement instanceof HTMLButtonElement) {
      return disabledElement.disabled;
    }
    if (disabledElement instanceof HTMLInputElement) {
      return disabledElement.disabled;
    }
    const ariaDisabled = disabledElement.getAttribute("aria-disabled");
    if (ariaDisabled === "true") {
      return true;
    }
    return true;
  }
  static \u0275fac = function GlobalClickSoundDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalClickSoundDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _GlobalClickSoundDirective, selectors: [["", "appGlobalClickSound", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalClickSoundDirective, [{
    type: Directive,
    args: [{
      selector: "[appGlobalClickSound]",
      standalone: true
    }]
  }], () => [], null);
})();

// src/app/layouts/layout-mode-select/layout-mode-select.component.ts
var LayoutModeSelectComponent = class _LayoutModeSelectComponent {
  session = inject(ClientSessionService);
  i18n = inject(AppI18nService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  routerCtrl = inject(RouterCtrlService);
  constructor() {
    effect(() => {
      const gameId = this.session.gameId ?? "";
      const gameName = this.i18n.instant(gameId);
      if (gameName && gameName !== gameId) {
        document.title = gameName;
      }
    });
  }
  ngOnInit() {
    if (environment.production) {
      this.selectMode();
    } else {
      if (this.session.needLogin) {
        this.router.navigate(["login"], { queryParamsHandling: "preserve" });
      } else {
        this.selectMode();
      }
    }
  }
  selectMode() {
    if (this.session.isGhanaUI) {
      this.runGhanaMode();
      return;
    }
    if (this.session.isOgUI) {
      this.runOgMode();
      return;
    }
    if (this.session.isSocketOnly) {
      this.runSocketMode();
      return;
    }
    if (this.session.isUseHtmlUI) {
      if (this.session.uimode === "in-game")
        this.runBridgeMode();
      else
        this.runCoverMode();
      return;
    }
    if (this.session.uimode === "html")
      this.runCoverMode();
    else
      this.runBridgeMode();
    return;
  }
  /** 迦納是UI覆蓋遊戲模式, 目前由Web連接Socket, Cocos遊戲端來發起登入 */
  runGhanaMode() {
    this.routerCtrl.navigateRelative("ghana");
  }
  /** 橋接模式使用Cocos遊戲端UI, 目前由Web連接Socket, Cocos遊戲端來發起登入  */
  runBridgeMode() {
    this.routerCtrl.navigateRelative("bridge");
  }
  /** UI覆蓋遊戲模式, 目前由Web連接Socket, Cocos遊戲端來發起登入 */
  runCoverMode() {
    this.routerCtrl.navigateRelative("cover");
  }
  /** OG模式, 目前由Web連接Socket, Cocos遊戲端來發起登入 */
  runOgMode() {
    this.routerCtrl.navigateRelative("og");
  }
  runSocketMode() {
    this.routerCtrl.navigateRelative("socket");
  }
  static \u0275fac = function LayoutModeSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutModeSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutModeSelectComponent, selectors: [["layout-mode-select"]], features: [\u0275\u0275HostDirectivesFeature([GlobalClickSoundDirective])], decls: 0, vars: 0, template: function LayoutModeSelectComponent_Template(rf, ctx) {
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n/*# sourceMappingURL=layout-mode-select.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModeSelectComponent, [{
    type: Component,
    args: [{ selector: "layout-mode-select", imports: [CommonModule], hostDirectives: [GlobalClickSoundDirective], template: "", styles: ["/* src/app/layouts/layout-mode-select/layout-mode-select.component.css */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n/*# sourceMappingURL=layout-mode-select.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutModeSelectComponent, { className: "LayoutModeSelectComponent", filePath: "src/app/layouts/layout-mode-select/layout-mode-select.component.ts", lineNumber: 22 });
})();

export {
  LayoutModeSelectComponent
};
//# sourceMappingURL=chunk-ZFFET4VX.js.map
