import {
  environment
} from "./chunk-USS23RIW.js";
import {
  GameIframeComponent
} from "./chunk-BTFWV2DH.js";
import {
  NavigatorShareService
} from "./chunk-DODGKEVZ.js";
import {
  RouterCtrlService
} from "./chunk-57FVUZ33.js";
import "./chunk-YG42UXQC.js";
import "./chunk-OW6577YR.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  AppInterfaceService
} from "./chunk-TLQLKLDD.js";
import "./chunk-CFCPEQLG.js";
import {
  ClientSessionService
} from "./chunk-54ITVL2G.js";
import "./chunk-FH2ESRL7.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-QGU3BS3L.js";

// src/app/layouts/layout-socket/layout-socket.component.ts
var LayoutSocketComponent = class _LayoutSocketComponent {
  i18n = inject(AppI18nService);
  session = inject(ClientSessionService);
  api = inject(AppInterfaceService);
  routerCtrl = inject(RouterCtrlService);
  navigator = inject(NavigatorShareService);
  constructor() {
    effect(() => {
      const title = this.i18n.enGameName();
      untracked(() => {
        this.navigator.setPageTitle(title);
      });
    });
  }
  ngOnInit() {
    if (environment.production && !this.session.isSocketOnly) {
      this.routerCtrl.navigateRelative("");
      return;
    }
    this.api.setup(this.session.setting);
    this.api.connect();
  }
  static \u0275fac = function LayoutSocketComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutSocketComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutSocketComponent, selectors: [["layout-socket"]], decls: 2, vars: 0, consts: [[1, "absolute"], ["uiMode", "ap-bridge", 1, "absolute", "inset-0"]], template: function LayoutSocketComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ap-loading-overlay", 0)(1, "game-iframe", 1);
    }
  }, dependencies: [ApLoadingOverlayComponent, GameIframeComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutSocketComponent, [{
    type: Component,
    args: [{ selector: "layout-socket", imports: [ApLoadingOverlayComponent, GameIframeComponent], template: '<ap-loading-overlay class="absolute"/>\n<game-iframe class="absolute inset-0" uiMode="ap-bridge"/>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutSocketComponent, { className: "LayoutSocketComponent", filePath: "src/app/layouts/layout-socket/layout-socket.component.ts", lineNumber: 17 });
})();
export {
  LayoutSocketComponent
};
//# sourceMappingURL=chunk-NXNERWOX.js.map
