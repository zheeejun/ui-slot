import {
  SoundService
} from "./chunk-FCZ4RVMP.js";
import {
  Directive,
  inject,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-QGU3BS3L.js";

// src/app/shared/directives/pointer-down-sound/pointer-down-sound.directive.ts
var PointerDownSoundDirective = class _PointerDownSoundDirective {
  soundService = inject(SoundService);
  onPointerDown(event) {
    if (event.button !== 0 || !event.isTrusted)
      return;
    this.soundService.playClick();
  }
  static \u0275fac = function PointerDownSoundDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PointerDownSoundDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PointerDownSoundDirective, selectors: [["", "appPointerDownSound", ""]], hostBindings: function PointerDownSoundDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("pointerdown", function PointerDownSoundDirective_pointerdown_HostBindingHandler($event) {
        return ctx.onPointerDown($event);
      });
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointerDownSoundDirective, [{
    type: Directive,
    args: [{
      selector: "[appPointerDownSound]",
      standalone: true,
      host: { "(pointerdown)": "onPointerDown($event)" }
    }]
  }], null, null);
})();

export {
  PointerDownSoundDirective
};
//# sourceMappingURL=chunk-JHJKX6RD.js.map
