import {
  ActivatedRoute,
  Router
} from "./chunk-YG42UXQC.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QGU3BS3L.js";

// src/app/services/router-ctrl/router-ctrl.service.ts
var RouterCtrlService = class _RouterCtrlService {
  router = inject(Router);
  route = inject(ActivatedRoute);
  /** 相對路徑轉址, 並且帶入目前的 query 參數 */
  navigateRelative(path) {
    this.router.navigate([path], {
      relativeTo: this.route,
      replaceUrl: true,
      queryParams: window.location.search ? Object.fromEntries(new URLSearchParams(window.location.search)) : {}
    });
  }
  constructor() {
  }
  static \u0275fac = function RouterCtrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterCtrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RouterCtrlService, factory: _RouterCtrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterCtrlService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  RouterCtrlService
};
//# sourceMappingURL=chunk-57FVUZ33.js.map
