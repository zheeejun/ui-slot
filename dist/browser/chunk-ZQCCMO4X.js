import {
  AppI18nService
} from "./chunk-MTOHY3QQ.js";
import {
  ApIconComponent
} from "./chunk-YL37OG34.js";
import {
  CommonModule
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QGU3BS3L.js";

// src/app/components/ap-ui-device-rotation/ap-ui-device-rotation.component.ts
var ApUiDeviceRotationComponent = class _ApUiDeviceRotationComponent {
  i18n = inject(AppI18nService);
  description = this.i18n.computed("Rotate_device_tip", "Rotate your device to landscape mode for the best gaming experience.");
  ngOnInit() {
  }
  static \u0275fac = function ApUiDeviceRotationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApUiDeviceRotationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApUiDeviceRotationComponent, selectors: [["ap-ui-device-rotation"]], decls: 6, vars: 2, consts: [[1, "absolute", "inset-0", "bg-black", "select-none"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "text-white", "p-4", "sm:p-0"], [1, "max-w-xl", "flex", "flex-col", "items-center"], [1, "size-80", 3, "name"], [1, "text-2xl", "text-center", "tracking-wide", "shadow-md"]], template: function ApUiDeviceRotationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "ap-icon", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("name", "device-rotation");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.description(), " ");
    }
  }, dependencies: [CommonModule, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApUiDeviceRotationComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "ap-ui-device-rotation", imports: [CommonModule, ApIconComponent], template: `<div
  class="absolute inset-0 bg-black select-none"
>
  <!-- Content -->
  <div
    class="flex flex-col items-center justify-center h-full text-white p-4 sm:p-0"
  >
    <div class="max-w-xl flex flex-col items-center">
      <ap-icon [name]="'device-rotation'" class="size-80" />
      <div class="text-2xl text-center tracking-wide shadow-md">
        {{ description() }}
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApUiDeviceRotationComponent, { className: "ApUiDeviceRotationComponent", filePath: "src/app/components/ap-ui-device-rotation/ap-ui-device-rotation.component.ts", lineNumber: 13 });
})();

export {
  ApUiDeviceRotationComponent
};
//# sourceMappingURL=chunk-ZQCCMO4X.js.map
