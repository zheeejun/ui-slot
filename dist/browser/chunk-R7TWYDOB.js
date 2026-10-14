import {
  ApUiFramePopupComponent
} from "./chunk-N4LJSHXE.js";
import {
  ApButtonComponent
} from "./chunk-3HIHH7J6.js";
import {
  ClientSessionService
} from "./chunk-B2M5HODU.js";
import {
  DomSanitizer,
  NgComponentOutlet
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  __async,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QGU3BS3L.js";

// src/app/icons/ap-icon-sns-whatsapp/ap-icon-sns-whatsapp.component.ts
var ApIconSnsWhatsappComponent = class _ApIconSnsWhatsappComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9956_39762)">
<path d="M20 0C8.95444 0 0 8.95444 0 20C0 23.6339 0.969444 27.0417 2.66333 29.9783L0 40L10.39 37.5439C13.2422 39.1094 16.5167 40 20 40C31.0456 40 40 31.0456 40 20C40 8.95444 31.0456 0 20 0ZM20 36.4178C16.6572 36.4178 13.5483 35.4189 10.9544 33.7028L4.81611 35.2661L6.53778 29.3989C4.675 26.7361 3.58222 23.4956 3.58222 19.9994C3.58222 10.9322 10.9328 3.58167 20 3.58167C29.0672 3.58167 36.4178 10.9322 36.4178 19.9994C36.4178 29.0667 29.0672 36.4172 20 36.4172V36.4178Z" fill="#25D366"/>
<path d="M24.6862 22.64L29.5251 24.9211C29.7473 25.0255 29.8895 25.2511 29.8695 25.4955C29.8173 26.1322 29.5617 27.4083 28.4178 28.5522C25.1889 31.7811 19.3906 28.1278 19.1545 27.9866C17.7284 27.2205 16.3734 26.1955 15.0884 24.9111C13.8039 23.6266 12.7784 22.2711 12.0123 20.845C11.8706 20.6094 8.21728 14.8111 11.4467 11.5816C12.5906 10.4378 13.8667 10.1822 14.5034 10.13C14.7484 10.11 14.9734 10.2522 15.0778 10.4744L17.3595 15.3133C17.4673 15.5422 17.4201 15.8144 17.2412 15.9933L15.5406 17.6939C15.1728 18.0616 15.0651 18.6344 15.3184 19.0889C15.9389 20.2016 16.7734 21.2733 17.7401 22.2594C18.7262 23.2261 19.7978 24.0611 20.9106 24.6811C21.3651 24.9344 21.9373 24.8266 22.3056 24.4589L24.0062 22.7583C24.1851 22.5794 24.4573 22.5316 24.6862 22.64Z" fill="#25D366"/>
</g>
<defs>
<clipPath id="clip0_9956_39762">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconSnsWhatsappComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconSnsWhatsappComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconSnsWhatsappComponent, selectors: [["ap-icon-sns-whatsapp"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconSnsWhatsappComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconSnsWhatsappComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-sns-whatsapp", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconSnsWhatsappComponent, { className: "ApIconSnsWhatsappComponent", filePath: "src/app/icons/ap-icon-sns-whatsapp/ap-icon-sns-whatsapp.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-sns-facebook/ap-icon-sns-facebook.component.ts
var ApIconSnsFacebookComponent = class _ApIconSnsFacebookComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9956_39757)">
<mask id="mask0_9956_39757" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-8" y="-8" width="56" height="56">
<path d="M-8 -8H48V48H-8V-8Z" fill="white"/>
</mask>
<g mask="url(#mask0_9956_39757)">
<path d="M40.0002 19.9999C40.0002 8.95419 31.0459 -0.000129774 20.0002 -0.000129774C8.95456 -0.000129774 0.000244141 8.95419 0.000244141 19.9999C0.000244141 29.3795 6.45744 37.2496 15.1687 39.4109V26.1116H11.0446V19.9999H15.1687V17.3664C15.1687 10.559 18.2494 7.40379 24.9326 7.40379C26.1996 7.40379 28.3859 7.65219 29.2803 7.90067V13.441C28.8082 13.3913 27.9884 13.3664 26.9698 13.3664C23.6903 13.3664 22.4232 14.6087 22.4232 17.8384V19.9999H28.9559L27.8337 26.1116H22.4232V39.8534C32.3261 38.6573 40.0002 30.2253 40.0002 19.9999Z" fill="#0866FF"/>
</g>
<mask id="mask1_9956_39757" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-8" y="-8" width="56" height="56">
<path d="M-8 -8H48V48H-8V-8Z" fill="white"/>
</mask>
<g mask="url(#mask1_9956_39757)">
<path d="M27.8333 26.1118L28.9556 20.0001H22.4229V17.8386C22.4229 14.6088 23.69 13.3667 26.9694 13.3667C27.988 13.3667 28.8079 13.3915 29.28 13.4412V7.90092C28.3856 7.65244 26.1992 7.40396 24.9322 7.40396C18.2491 7.40396 15.1684 10.5592 15.1684 17.3666V20.0001H11.0442V26.1118H15.1684V39.4112C16.7158 39.795 18.3338 40.0001 19.9999 40.0001C20.8202 40.0001 21.6285 39.9496 22.4229 39.8536V26.1118H27.8333Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_9956_39757">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconSnsFacebookComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconSnsFacebookComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconSnsFacebookComponent, selectors: [["ap-icon-sns-facebook"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconSnsFacebookComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconSnsFacebookComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-sns-facebook", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconSnsFacebookComponent, { className: "ApIconSnsFacebookComponent", filePath: "src/app/icons/ap-icon-sns-facebook/ap-icon-sns-facebook.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-sns-line/ap-icon-sns-line.component.ts
var ApIconSnsLineComponent = class _ApIconSnsLineComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9960_39782)">
<path d="M30.9825 0H9.0175C4.03727 0 0 4.03727 0 9.0175V30.9825C0 35.9627 4.03727 40 9.0175 40H30.9825C35.9627 40 40 35.9627 40 30.9825V9.0175C40 4.03727 35.9627 0 30.9825 0Z" fill="#06C755"/>
<path d="M33.3324 18.115C33.3324 12.1475 27.3499 7.29248 19.9962 7.29248C12.6424 7.29248 6.65991 12.1475 6.65991 18.115C6.65991 23.465 11.4099 27.9462 17.8124 28.7925C18.2474 28.8862 18.8387 29.0787 18.9874 29.45C19.1224 29.7875 19.0762 30.3162 19.0312 30.6562C19.0312 30.6562 18.8749 31.5975 18.8412 31.7975C18.7824 32.135 18.5724 33.1162 19.9962 32.5175C21.4199 31.9187 27.6762 27.995 30.4737 24.7737C32.4062 22.655 33.3324 20.5 33.3324 18.115Z" fill="white"/>
<path d="M28.895 21.5612H25.145C25.0787 21.5612 25.0151 21.5349 24.9682 21.488C24.9214 21.4411 24.895 21.3775 24.895 21.3112V15.4925C24.895 15.4262 24.9214 15.3626 24.9682 15.3157C25.0151 15.2688 25.0787 15.2425 25.145 15.2425H28.895C28.9613 15.2425 29.0249 15.2688 29.0718 15.3157C29.1187 15.3626 29.145 15.4262 29.145 15.4925V16.4387C29.145 16.505 29.1187 16.5686 29.0718 16.6155C29.0249 16.6624 28.9613 16.6887 28.895 16.6887H26.3488V17.67H28.895C28.9613 17.67 29.0249 17.6963 29.0718 17.7432C29.1187 17.7901 29.145 17.8537 29.145 17.92V18.875C29.145 18.9413 29.1187 19.0049 29.0718 19.0518C29.0249 19.0987 28.9613 19.125 28.895 19.125H26.3488V20.1075H28.895C28.9613 20.1075 29.0249 20.1338 29.0718 20.1807C29.1187 20.2276 29.145 20.2912 29.145 20.3575V21.3025C29.1462 21.3361 29.1406 21.3695 29.1286 21.4009C29.1165 21.4322 29.0983 21.4608 29.075 21.485C29.0516 21.5091 29.0237 21.5283 28.9928 21.5414C28.9618 21.5545 28.9286 21.5613 28.895 21.5612Z" fill="#06C755"/>
<path d="M15.0363 21.5613C15.1026 21.5613 15.1662 21.5349 15.2131 21.488C15.26 21.4412 15.2863 21.3776 15.2863 21.3113V20.3663C15.2863 20.3 15.26 20.2364 15.2131 20.1895C15.1662 20.1426 15.1026 20.1163 15.0363 20.1163H12.49V15.4913C12.49 15.425 12.4637 15.3614 12.4168 15.3145C12.3699 15.2676 12.3063 15.2413 12.24 15.2413H11.29C11.2237 15.2413 11.1601 15.2676 11.1133 15.3145C11.0664 15.3614 11.04 15.425 11.04 15.4913V21.3075C11.04 21.3738 11.0664 21.4374 11.1133 21.4843C11.1601 21.5312 11.2237 21.5575 11.29 21.5575H15.04L15.0363 21.5613Z" fill="#06C755"/>
<path d="M17.2913 15.2313H16.3463C16.2055 15.2313 16.0913 15.3454 16.0913 15.4863V21.3063C16.0913 21.4471 16.2055 21.5613 16.3463 21.5613H17.2913C17.4321 21.5613 17.5463 21.4471 17.5463 21.3063V15.4863C17.5463 15.3454 17.4321 15.2313 17.2913 15.2313Z" fill="#06C755"/>
<path d="M23.7299 15.2313H22.7849C22.7186 15.2313 22.655 15.2576 22.6082 15.3045C22.5613 15.3514 22.5349 15.415 22.5349 15.4813V18.9388L19.8724 15.3425C19.8664 15.333 19.8592 15.3242 19.8512 15.3163L19.8362 15.3013L19.8224 15.29H19.8149L19.8012 15.28H19.7937L19.7799 15.2725H19.7712H19.7574H19.7487H19.7337H19.7237H19.7087H19.6987H19.6849H18.7212C18.6549 15.2725 18.5913 15.2989 18.5444 15.3457C18.4975 15.3926 18.4712 15.4562 18.4712 15.5225V21.3425C18.4712 21.4088 18.4975 21.4724 18.5444 21.5193C18.5913 21.5662 18.6549 21.5925 18.7212 21.5925H19.6674C19.7337 21.5925 19.7973 21.5662 19.8442 21.5193C19.8911 21.4724 19.9174 21.4088 19.9174 21.3425V17.8513L22.5837 21.4513C22.6012 21.4768 22.6232 21.4988 22.6487 21.5163L22.6637 21.5263H22.6712L22.6837 21.5325H22.6962H22.7049H22.7224C22.7445 21.538 22.7672 21.5409 22.7899 21.5413H23.7299C23.7962 21.5413 23.8598 21.5149 23.9067 21.468C23.9536 21.4212 23.9799 21.3576 23.9799 21.2913V15.4863C23.9806 15.453 23.9746 15.42 23.9624 15.3891C23.9501 15.3581 23.9318 15.33 23.9085 15.3062C23.8852 15.2825 23.8574 15.2636 23.8268 15.2508C23.7961 15.2379 23.7632 15.2313 23.7299 15.2313Z" fill="#06C755"/>
</g>
<defs>
<clipPath id="clip0_9960_39782">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconSnsLineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconSnsLineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconSnsLineComponent, selectors: [["ap-icon-sns-line"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconSnsLineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconSnsLineComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-sns-line", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconSnsLineComponent, { className: "ApIconSnsLineComponent", filePath: "src/app/icons/ap-icon-sns-line/ap-icon-sns-line.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-sns-x/ap-icon-sns-x.component.ts
var ApIconSnsXComponent = class _ApIconSnsXComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9961_39796)">
<circle cx="20" cy="20" r="20" fill="black"/>
<path d="M21.6881 18.1624L30.2504 8H28.2214L20.7868 16.8238L14.8488 8H8L16.9794 21.3432L8 32H10.0291L17.8802 22.6817L24.1512 32H31L21.6876 18.1624H21.6881ZM18.909 21.4608L17.9992 20.1321L10.7602 9.55962H13.8768L19.7187 18.0919L20.6285 19.4206L28.2224 30.5113H25.1058L18.909 21.4613V21.4608Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_9961_39796">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconSnsXComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconSnsXComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconSnsXComponent, selectors: [["ap-icon-sns-x"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconSnsXComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconSnsXComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-sns-x", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconSnsXComponent, { className: "ApIconSnsXComponent", filePath: "src/app/icons/ap-icon-sns-x/ap-icon-sns-x.component.ts", lineNumber: 10 });
})();

// src/app/components/ap-history-popup-share/ap-history-popup-share.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function ApHistoryPopupShareComponent_For_6_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ApHistoryPopupShareComponent_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ApHistoryPopupShareComponent_For_6_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const channel_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngComponentOutlet", channel_r2.comp);
  }
}
function ApHistoryPopupShareComponent_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const channel_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", channel_r2.imageSrc + `?v=${ctx_r2.version()}`, \u0275\u0275sanitizeUrl)("alt", channel_r2.imageAlt);
  }
}
function ApHistoryPopupShareComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ApHistoryPopupShareComponent_For_6_Template_button_click_0_listener() {
      const channel_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(channel_r2.action());
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275conditionalCreate(2, ApHistoryPopupShareComponent_For_6_Conditional_2_Template, 1, 1, "ng-container")(3, ApHistoryPopupShareComponent_For_6_Conditional_3_Template, 1, 2, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const channel_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(channel_r2.comp ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(channel_r2.label);
  }
}
var ApHistoryPopupShareComponent = class _ApHistoryPopupShareComponent {
  header = input("SHARE");
  linkLabel = input("Copy Link");
  item = input(null);
  session = inject(ClientSessionService);
  version = computed(() => this.session.version().app);
  getShareUrl = input();
  close = output();
  copyLink = output();
  shareChannels = computed(() => [
    {
      label: "Whatsapp",
      comp: ApIconSnsWhatsappComponent,
      action: () => this.shareViaUrl((shareUrl) => `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`)
    },
    {
      label: "Facebook",
      comp: ApIconSnsFacebookComponent,
      action: () => this.shareViaUrl((shareUrl) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`)
    },
    {
      label: "Line",
      comp: ApIconSnsLineComponent,
      action: () => this.shareViaUrl((shareUrl) => `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`)
    },
    {
      label: "Telegram",
      imageSrc: "assets/images/telegram_logo.svg",
      imageAlt: "Telegram",
      action: () => this.shareViaUrl((shareUrl) => `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`)
    },
    {
      label: "X",
      comp: ApIconSnsXComponent,
      action: () => this.shareViaUrl((shareUrl) => `https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`)
    }
  ]);
  shareViaUrl(buildUrl) {
    return __async(this, null, function* () {
      const getUrl = this.getShareUrl();
      if (!getUrl)
        return;
      const shareUrl = yield getUrl();
      if (!shareUrl)
        return;
      window.open(buildUrl(shareUrl), "_blank");
    });
  }
  onCopyLink() {
    this.copyLink.emit(this.item());
  }
  onCancel() {
    this.close.emit();
  }
  static \u0275fac = function ApHistoryPopupShareComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApHistoryPopupShareComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApHistoryPopupShareComponent, selectors: [["ap-history-popup-share"]], inputs: { header: [1, "header"], linkLabel: [1, "linkLabel"], item: [1, "item"], getShareUrl: [1, "getShareUrl"] }, outputs: { close: "close", copyLink: "copyLink" }, decls: 11, vars: 6, consts: [[1, "absolute", "relative", "size-full", "grid", "place-items-center", "select-none"], [1, "absolute", "inset-0", "bg-black/60", 3, "click"], [1, "w-11/12", "lg:w-1/2", 3, "close", "header", "size"], [1, "flex", "flex-col", "items-center", "text-white", "py-8", "px-6"], [1, "grid", "grid-cols-3", "gap-x-12", "gap-y-10", "text-center"], [1, "flex", "flex-col", "items-center", "gap-2", "cursor-pointer", "group"], [1, "flex", "flex-col", "items-center", "gap-2", "cursor-pointer", "group", 3, "click"], [3, "variant", "icon", "accentColor"], [1, "text-sm", "group-hover:underline"], [1, "size-12"], [3, "src", "alt"], [4, "ngComponentOutlet"]], template: function ApHistoryPopupShareComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function ApHistoryPopupShareComponent_Template_div_click_1_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
      \u0275\u0275listener("close", function ApHistoryPopupShareComponent_Template_ap_ui_frame_popup_close_2_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275repeaterCreate(5, ApHistoryPopupShareComponent_For_6_Template, 6, 2, "button", 5, _forTrack0);
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function ApHistoryPopupShareComponent_Template_button_click_7_listener() {
        return ctx.onCopyLink();
      });
      \u0275\u0275element(8, "ap-button", 7);
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("header", ctx.header())("size", "mobile");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.shareChannels());
      \u0275\u0275advance(3);
      \u0275\u0275property("variant", "content-rounded")("icon", "copy")("accentColor", "yellow");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.linkLabel());
    }
  }, dependencies: [NgComponentOutlet, ApUiFramePopupComponent, ApButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApHistoryPopupShareComponent, [{
    type: Component,
    args: [{ selector: "ap-history-popup-share", imports: [NgComponentOutlet, ApUiFramePopupComponent, ApButtonComponent], template: `<div class="absolute relative size-full grid place-items-center select-none">
  <div class="absolute inset-0 bg-black/60" (click)="onCancel()"></div>
  <ap-ui-frame-popup
    [header]="header()"
    [size]="'mobile'"
    class="w-11/12 lg:w-1/2"
    (close)="close.emit()"
  >
    <!-- Buttons -->
    <div class="flex flex-col items-center text-white py-8 px-6">
      <div class="grid grid-cols-3 gap-x-12 gap-y-10 text-center">
        @for (channel of shareChannels(); track channel.label) {
          <button
            (click)="channel.action()"
            class="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div class="size-12">
              @if (channel.comp) {
                <ng-container *ngComponentOutlet="channel.comp"></ng-container>
              } @else {
                <img
                  [src]="channel.imageSrc! + \`?v=\${version()}\`"
                  [alt]="channel.imageAlt!"
                />
              }
            </div>
            <span class="text-sm group-hover:underline">{{ channel.label }}</span>
          </button>
        }

        <!-- Copy Link Button -->
        <button class="flex flex-col items-center gap-2 cursor-pointer group" (click)="onCopyLink()">
          <ap-button
            [variant]="'content-rounded'"
            [icon]="'copy'"
            [accentColor]="'yellow'"
          />
          <span class="text-sm group-hover:underline">{{ linkLabel() }}</span>
        </button>
      </div>
    </div>
  </ap-ui-frame-popup>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApHistoryPopupShareComponent, { className: "ApHistoryPopupShareComponent", filePath: "src/app/components/ap-history-popup-share/ap-history-popup-share.component.ts", lineNumber: 26 });
})();

export {
  ApIconSnsFacebookComponent,
  ApIconSnsLineComponent,
  ApIconSnsWhatsappComponent,
  ApIconSnsXComponent,
  ApHistoryPopupShareComponent
};
//# sourceMappingURL=chunk-R7TWYDOB.js.map
