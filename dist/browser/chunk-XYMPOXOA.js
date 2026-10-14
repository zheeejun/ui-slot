import {
  ApToastComponent
} from "./chunk-U7TK2FIU.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  ApButtonComponent
} from "./chunk-VX4L3GZI.js";
import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  CommonModule,
  DomSanitizer,
  NgClass
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  computed,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-QGU3BS3L.js";

// src/app/icons/ap-icon-autoplay-circle/ap-icon-autoplay-circle.component.ts
var ApIconAutoplayCircleComponent = class _ApIconAutoplayCircleComponent {
  sanitizer = inject(DomSanitizer);
  path = "M11.194.665a8 8 0 1 0 4.194 10.404a.75.75 0 0 0-1.385-.575a6.5 6.5 0 1 1-.526-5.994H11.75a.75.75 0 0 0 0 1.5H16V1.75a.75.75 0 0 0-1.5 0v1.586a8 8 0 0 0-3.306-2.67Zm-.423 6.913a.5.5 0 0 1 0 .844l-4.003 2.54A.5.5 0 0 1 6 10.538V5.461a.5.5 0 0 1 .768-.422z";
  svg = {
    /*default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_autoplay)" filter="url(#filter0_i_autoplay)"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(20 20) scale(2.5)">
      <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g>
      <defs>
        <filter id="filter0_i_autoplay" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_autoplay"/>
        </filter>
        <linearGradient id="paint0_linear_autoplay" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#6A6A6A"/>
          <stop offset="0.4" stop-color="#424242"/>
          <stop offset="0.8" stop-color="#343434"/>
          <stop offset="1" stop-color="#303030"/>
        </linearGradient>
      </defs>
    </svg>`*/
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_autoplay)" filter="url(#filter0_i_autoplay)"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(20 20) scale(2.5)">
  <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g>
  <defs>
    <filter id="filter0_i_autoplay" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_autoplay"/>
    </filter>
    <linearGradient id="paint0_linear_autoplay" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
     <stop stop-color="#4A7F96"/>
<stop offset="0.4" stop-color="#2F5466"/>
<stop offset="0.8" stop-color="#1F3442"/>
<stop offset="1" stop-color="#16242E"/>
    </linearGradient>
  </defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconAutoplayCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconAutoplayCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconAutoplayCircleComponent, selectors: [["ap-icon-autoplay-circle"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconAutoplayCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconAutoplayCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-autoplay-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconAutoplayCircleComponent, { className: "ApIconAutoplayCircleComponent", filePath: "src/app/icons/ap-icon-autoplay-circle/ap-icon-autoplay-circle.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-buy-feature-circle/ap-icon-buy-feature-circle.component.ts
var ApIconBuyFeatureCircleComponent = class _ApIconBuyFeatureCircleComponent {
  variant = input("default");
  sanitizer = inject(DomSanitizer);
  xMarkPath = "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z";
  svg = {
    default: `
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_10116_36577)">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <g filter="url(#filter0_i_10116_36577)">
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_10116_36577)"/>
      </g>
      <circle cx="40" cy="40" r="34" stroke="#E4E4E7" stroke-width="4"/>
      <g filter="url(#filter1_d_10116_36577)">
      <path d="M20.6247 21H22.5V21.5973C25.1107 22.1813 25.486 24.6047 25.6334 25.5307C25.7034 25.9687 25.8454 26.8253 26.0214 27.8747H58.6749C59.9669 27.8747 60.1116 29.082 59.9429 29.75L56.1122 46.6613C55.9442 47.3293 55.2369 47.8747 54.5435 47.8747H25.914C25.2247 47.8747 24.6627 48.4353 24.6627 49.1247C24.6627 49.814 25.2247 50.3747 25.914 50.3747H57.1636C57.4951 50.3747 57.813 50.5064 58.0475 50.7408C58.2819 50.9752 58.4136 51.2931 58.4136 51.6247C58.4136 51.9562 58.2819 52.2741 58.0475 52.5086C57.813 52.743 57.4951 52.8747 57.1636 52.8747H55.5436C56.3255 53.3068 56.9773 53.9406 57.4313 54.7101C57.8853 55.4796 58.1248 56.3566 58.1249 57.25H56.8749C56.8749 59.32 55.1949 61 53.1249 61C51.0549 61 49.3749 59.32 49.3749 57.25H48.1248C48.125 56.3565 48.3646 55.4794 48.8187 54.71C49.2728 53.9405 49.9248 53.3067 50.7069 52.8747H33.0441C33.8261 53.3067 34.4781 53.9405 34.9322 54.71C35.3863 55.4794 35.6259 56.3565 35.6261 57.25H34.3761C34.3576 58.2325 33.9543 59.1685 33.2529 59.8568C32.5515 60.545 31.6081 60.9306 30.6254 60.9306C29.6427 60.9306 28.6993 60.545 27.9979 59.8568C27.2965 59.1685 26.8932 58.2325 26.8747 57.25H25.6247C25.6248 56.3566 25.8643 55.4796 26.3183 54.7101C26.7723 53.9406 27.4241 53.3068 28.2061 52.8747H25.9127C24.9184 52.8738 23.9651 52.4784 23.262 51.7753C22.5589 51.0723 22.1636 50.119 22.1627 49.1247C22.1628 48.6321 22.2599 48.1444 22.4484 47.6894C22.637 47.2344 22.9134 46.821 23.2617 46.4727C23.61 46.1245 24.0236 45.8483 24.4787 45.6599C24.9337 45.4715 25.4215 45.3746 25.914 45.3747H26.3787L24.78 35.4347C24.3347 32.8093 23.3747 27.138 23.1494 25.7273C23.036 25.0147 22.926 24.514 22.5 24.2333V24.7493H20.6247C20.4593 24.7488 20.3008 24.6829 20.1838 24.566C20.0668 24.4491 20.0007 24.2907 20 24.1253V21.6253C20.0004 21.4597 20.0663 21.301 20.1833 21.1838C20.3004 21.0666 20.459 21.0005 20.6247 21ZM53.1249 59.1253C53.6221 59.1248 54.0988 58.9271 54.4504 58.5755C54.8019 58.2239 54.9997 57.7472 55.0002 57.25H51.2502C51.2507 57.7471 51.4484 58.2237 51.7998 58.5752C52.1513 58.9268 52.6278 59.1246 53.1249 59.1253ZM30.6247 59.1253C31.1221 59.125 31.5989 58.9273 31.9506 58.5757C32.3024 58.2241 32.5002 57.7473 32.5007 57.25H28.7494C28.7506 57.747 28.9486 58.2233 29.3 58.5747C29.6515 58.9261 30.1277 59.1241 30.6247 59.1253ZM32.1627 30.996C32.1407 30.8266 32.0587 30.6707 31.9314 30.5566C31.8042 30.4426 31.6402 30.378 31.4694 30.3747H27.5114C27.1674 30.3747 26.928 30.652 26.982 30.9927L27.374 33.5067C27.426 33.8467 27.752 34.1247 28.0967 34.1247H31.8721C31.9516 34.1268 32.0306 34.1116 32.1037 34.0803C32.1768 34.0489 32.2422 34.0021 32.2955 33.9431C32.3488 33.8841 32.3886 33.8142 32.4123 33.7383C32.436 33.6623 32.443 33.5822 32.4327 33.5033L32.1627 30.996ZM32.8354 37.246C32.8134 37.0766 32.7313 36.9207 32.6041 36.8066C32.4768 36.6926 32.3129 36.628 32.1421 36.6247H28.4867C28.1421 36.6247 27.9034 36.902 27.9554 37.2427L28.2507 39.132C28.3034 39.472 28.6287 39.75 28.9734 39.75H32.4781C32.5575 39.7519 32.6364 39.7366 32.7094 39.7052C32.7824 39.6738 32.8477 39.6269 32.901 39.568C32.9542 39.509 32.9941 39.4392 33.0178 39.3634C33.0416 39.2875 33.0488 39.2075 33.0387 39.1287L32.8354 37.246ZM56.7562 33.518L57.3896 30.9813C57.4722 30.6467 57.2576 30.3747 56.9129 30.3747H52.2069C51.8615 30.3747 51.5502 30.654 51.5135 30.996L51.2442 33.504C51.2342 33.5828 51.2413 33.6628 51.2651 33.7385C51.2888 33.8143 51.3286 33.8841 51.3818 33.943C51.4349 34.002 51.5002 34.0488 51.5731 34.0803C51.646 34.1118 51.7248 34.1271 51.8042 34.1253H55.9782C56.3222 34.1253 56.6729 33.8513 56.7562 33.518ZM54.5756 39.75C54.9196 39.75 55.2702 39.4767 55.3529 39.1433L55.8302 37.232C55.9136 36.8973 55.7002 36.6253 55.3556 36.6253H51.5362C51.1915 36.6253 50.8795 36.9047 50.8429 37.2467L50.6402 39.1293C50.6301 39.2081 50.6371 39.2882 50.6608 39.364C50.6845 39.4398 50.7243 39.5096 50.7775 39.5686C50.8307 39.6276 50.896 39.6744 50.9689 39.7059C51.0419 39.7373 51.1208 39.7526 51.2002 39.7507L54.5756 39.75ZM50.5962 45.3753H53.1729C53.5189 45.3753 53.8675 45.102 53.9509 44.7687L54.4282 42.8573C54.5109 42.5227 54.2975 42.2507 53.9522 42.2507H50.9322C50.5875 42.2507 50.2755 42.53 50.2375 42.872L50.0362 44.7547C50.0261 44.8334 50.0331 44.9134 50.0568 44.9892C50.0805 45.065 50.1203 45.1348 50.1735 45.1937C50.2267 45.2527 50.292 45.2994 50.365 45.3308C50.4379 45.3621 50.5168 45.3773 50.5962 45.3753ZM42.9348 44.75C42.9352 44.916 43.0013 45.075 43.1188 45.1923C43.2363 45.3095 43.3955 45.3753 43.5615 45.3753H46.8222C46.9929 45.3718 47.1567 45.3072 47.2838 45.1932C47.4109 45.0791 47.4929 44.9233 47.5148 44.754L47.7175 42.8713C47.7278 42.7926 47.721 42.7125 47.6974 42.6366C47.6738 42.5607 47.6341 42.4909 47.5809 42.4318C47.5278 42.3728 47.4625 42.326 47.3895 42.2946C47.3165 42.2632 47.2376 42.248 47.1582 42.25H43.5615C43.3955 42.25 43.2363 42.3158 43.1188 42.4331C43.0013 42.5503 42.9352 42.7094 42.9348 42.8753V44.75ZM42.9348 39.1253C42.9352 39.2913 43.0013 39.4504 43.1188 39.5676C43.2363 39.6848 43.3955 39.7507 43.5615 39.7507H47.4268C47.7708 39.7507 48.0815 39.4713 48.1202 39.1293L48.3215 37.2467C48.3317 37.1679 48.3248 37.0879 48.3012 37.0121C48.2775 36.9362 48.2378 36.8664 48.1847 36.8074C48.1315 36.7484 48.0663 36.7016 47.9934 36.6701C47.9204 36.6387 47.8416 36.6234 47.7622 36.6253H43.5615C43.3955 36.6253 43.2363 36.6912 43.1188 36.8084C43.0013 36.9256 42.9352 37.0847 42.9348 37.2507V39.1253ZM42.9348 33.5C42.9352 33.666 43.0013 33.825 43.1188 33.9423C43.2363 34.0595 43.3955 34.1253 43.5615 34.1253H48.0295C48.2003 34.122 48.3643 34.0574 48.4915 33.9434C48.6188 33.8293 48.7008 33.6734 48.7228 33.504L48.9922 30.996C49.0023 30.9172 48.9953 30.8372 48.9716 30.7614C48.9479 30.6855 48.9081 30.6157 48.8549 30.5567C48.8017 30.4977 48.7364 30.4509 48.6634 30.4195C48.5905 30.3881 48.5116 30.3728 48.4322 30.3747H43.5608C43.3948 30.3747 43.2356 30.4405 43.1182 30.5577C43.0007 30.675 42.9345 30.834 42.9341 31L42.9348 33.5ZM36.1621 44.754C36.1841 44.9234 36.2662 45.0793 36.3934 45.1934C36.5207 45.3074 36.6846 45.372 36.8554 45.3753H39.8021C39.968 45.3752 40.127 45.3092 40.2443 45.192C40.3617 45.0748 40.4278 44.9159 40.4281 44.75V42.8747C40.4278 42.7088 40.3617 42.5499 40.2443 42.4326C40.127 42.3154 39.968 42.2495 39.8021 42.2493H36.5194C36.1754 42.2493 35.9221 42.5287 35.9594 42.8707L36.1621 44.754ZM35.5581 39.1287C35.5801 39.2981 35.6622 39.454 35.7894 39.568C35.9167 39.6821 36.0806 39.7466 36.2514 39.75H39.8021C39.968 39.7498 40.127 39.6839 40.2443 39.5667C40.3617 39.4495 40.4278 39.2905 40.4281 39.1247V37.2493C40.4278 37.0835 40.3617 36.9245 40.2443 36.8073C40.127 36.6901 39.968 36.6242 39.8021 36.624H35.9154C35.5708 36.624 35.3181 36.9033 35.3561 37.2453L35.5581 39.1287ZM34.9541 33.504C34.9761 33.6734 35.0582 33.8293 35.1854 33.9434C35.3127 34.0574 35.4766 34.122 35.6474 34.1253H39.8021C39.968 34.1252 40.127 34.0592 40.2443 33.942C40.3617 33.8248 40.4278 33.6659 40.4281 33.5V31C40.4278 30.8341 40.3617 30.6752 40.2443 30.558C40.127 30.4408 39.968 30.3748 39.8021 30.3747H35.2441C34.8994 30.3747 34.6468 30.654 34.6834 30.996L34.9541 33.504ZM30.1327 45.3753V45.3707L30.1381 45.3753H33.0821C33.1014 45.3753 33.1181 45.366 33.1374 45.3633C33.1408 45.3407 33.1407 45.318 33.1447 45.294L33.1741 45.3553L33.1494 45.3607C33.4568 45.3253 33.6768 45.0713 33.6414 44.754L33.4401 42.8713C33.4181 42.7019 33.336 42.546 33.2088 42.432C33.0815 42.3179 32.9176 42.2534 32.7467 42.25H29.3627C29.0181 42.25 28.7807 42.5273 28.8327 42.868L29.1281 44.7573C29.1794 45.0973 29.5047 45.3753 29.8494 45.3753H30.1327Z" fill="#E4E4E7"/>
      </g>
      </g>
      <defs>
      <filter id="filter0_i_10116_36577" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10116_36577"/>
      </filter>
      <filter id="filter1_d_10116_36577" x="18" y="20" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10116_36577"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10116_36577" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_10116_36577" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F06C9B"/>
      <stop offset="0.4" stop-color="#D63B73"/>
      <stop offset="0.8" stop-color="#A81E4E"/>
      <stop offset="1" stop-color="#6B0F30"/>
      </linearGradient>
      <clipPath id="clip0_10116_36577">
      <rect width="80" height="80" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `,
    cancel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_buy_feature_cancel)" filter="url(#filter0_i_buy_feature_cancel)"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16 16) scale(2.0)">
      <path fill-rule="evenodd" d="${this.xMarkPath}" clip-rule="evenodd" fill="#D4D4D8"/>
      </g>
      <defs>
        <filter id="filter0_i_buy_feature_cancel" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_buy_feature_cancel"/>
        </filter>
        <linearGradient id="paint0_linear_buy_feature_cancel" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
          <stop stop-color="#D64545"/>
          <stop offset="0.4" stop-color="#A33232"/>
          <stop offset="0.8" stop-color="#6B2222"/>
          <stop offset="1" stop-color="#4A1818"/>
        </linearGradient>
      </defs>
    </svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg[this.variant()]));
  static \u0275fac = function ApIconBuyFeatureCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconBuyFeatureCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconBuyFeatureCircleComponent, selectors: [["ap-icon-buy-feature-circle"]], inputs: { variant: [1, "variant"] }, decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconBuyFeatureCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconBuyFeatureCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-buy-feature-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconBuyFeatureCircleComponent, { className: "ApIconBuyFeatureCircleComponent", filePath: "src/app/icons/ap-icon-buy-feature-circle/ap-icon-buy-feature-circle.component.ts", lineNumber: 12 });
})();

// src/app/icons/ap-icon-campaign-circle/ap-icon-campaign-circle.component.ts
var ApIconCampaignCircleComponent = class _ApIconCampaignCircleComponent {
  sanitizer = inject(DomSanitizer);
  path = "M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z";
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_campaign)" filter="url(#filter0_i_campaign)"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(18 18) scale(1.8)">
  <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/>
  </g>
  <defs>
    <filter id="filter0_i_campaign" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_campaign"/>
    </filter>
    <linearGradient id="paint0_linear_campaign" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E2A77C"/>
      <stop offset="0.4" stop-color="#B16833"/>
      <stop offset="0.8" stop-color="#8B4714"/>
      <stop offset="1" stop-color="#592E0F"/>
    </linearGradient>
  </defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconCampaignCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconCampaignCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconCampaignCircleComponent, selectors: [["ap-icon-campaign-circle"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconCampaignCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconCampaignCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-campaign-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconCampaignCircleComponent, { className: "ApIconCampaignCircleComponent", filePath: "src/app/icons/ap-icon-campaign-circle/ap-icon-campaign-circle.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-decrease-box/ap-icon-decrease-box.component.ts
var ApIconDecreaseBoxComponent = class _ApIconDecreaseBoxComponent {
  sanitizer = inject(DomSanitizer);
  path = "M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z";
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <rect x="2" y="2" width="76" height="76" rx="14" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <rect x="6" y="6" width="68" height="68" rx="10" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(16 16) scale(2.0)">
  <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconDecreaseBoxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconDecreaseBoxComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconDecreaseBoxComponent, selectors: [["ap-icon-decrease-box"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconDecreaseBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconDecreaseBoxComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-decrease-box", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconDecreaseBoxComponent, { className: "ApIconDecreaseBoxComponent", filePath: "src/app/icons/ap-icon-decrease-box/ap-icon-decrease-box.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-increase-box/ap-icon-increase-box.component.ts
var ApIconIncreaseBoxComponent = class _ApIconIncreaseBoxComponent {
  sanitizer = inject(DomSanitizer);
  path = "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z";
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <rect x="2" y="2" width="76" height="76" rx="14" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <rect x="6" y="6" width="68" height="68" rx="10" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(16 16) scale(2.0)">
  <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconIncreaseBoxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconIncreaseBoxComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconIncreaseBoxComponent, selectors: [["ap-icon-increase-box"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconIncreaseBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconIncreaseBoxComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-increase-box", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconIncreaseBoxComponent, { className: "ApIconIncreaseBoxComponent", filePath: "src/app/icons/ap-icon-increase-box/ap-icon-increase-box.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-turbo-circle/ap-icon-turbo-circle.component.ts
var ApIconTurboCircleComponent = class _ApIconTurboCircleComponent {
  variant = input("default");
  sanitizer = inject(DomSanitizer);
  boltPath = "M18.8429 24.5293L11.3429 24.5392L21.8127 1.61631L21.83 14.7072L29.33 14.6973L18.8601 37.6202L18.8429 24.5293Z";
  bolt2Path = "M30.2598 24.7119L35.1875 25.9482L24.5117 39.2686L26.6699 30.668L21.7422 29.4316L32.418 16.1104L30.2598 24.7119ZM15.0078 13.9824L22.5283 12.4443L16.6963 37.5703L14.0127 24.4424L6.49121 25.9805L12.3232 0.854492L15.0078 13.9824Z";
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_turbo)" filter="url(#filter0_i_turbo)"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
  <g transform="translate(14 15) scale(1.3)">
    <path fill-rule="evenodd" d="${this.boltPath}" clip-rule="evenodd" fill="#D4D4D8"/></g><defs>
    <filter id="filter0_i_turbo" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_turbo"/>
    </filter>
    <linearGradient id="paint0_linear_turbo" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A6A6A"/>
      <stop offset="0.4" stop-color="#424242"/>
      <stop offset="0.8" stop-color="#343434"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>`,
    pressed1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_turbo_pressed1)" filter="url(#filter0_i_turbo_pressed1)"/>
  <circle cx="40" cy="40" r="34" stroke="#FDC700" stroke-width="4"/>
  <g transform="translate(14 15) scale(1.3)">
    <path fill-rule="evenodd" d="${this.boltPath}" clip-rule="evenodd" fill="#FDC700"/></g><defs>
    <filter id="filter0_i_turbo_pressed1" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_turbo_pressed1"/>
    </filter>
    <linearGradient id="paint0_linear_turbo_pressed1" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A6A6A"/>
      <stop offset="0.4" stop-color="#424242"/>
      <stop offset="0.8" stop-color="#343434"/>
      <stop offset="1" stop-color="#303030"/>
    </linearGradient>
  </defs>
</svg>`,
    pressed2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="36" fill="url(#paint0_linear_turbo_pressed2)" filter="url(#filter0_i_turbo_pressed2)"/>
  <circle cx="40" cy="40" r="34" stroke="#00E5FF" stroke-width="4"/>
  <g transform="translate(15 15) scale(1.3)">
    <path fill-rule="evenodd" d="${this.bolt2Path}" clip-rule="evenodd" fill="#00E5FF"/></g><defs>
    <filter id="filter0_i_turbo_pressed2" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_turbo_pressed2"/>
    </filter>
    <linearGradient id="paint0_linear_turbo_pressed2" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4F6784"/>
      <stop offset="0.4" stop-color="#37506B"/>
      <stop offset="0.8" stop-color="#2B4158"/>
      <stop offset="1" stop-color="#23374A"/>
    </linearGradient>
  </defs>
</svg>`,
    black: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_10244_83)">
<g clip-path="url(#clip1_10244_83)">
<circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
<g filter="url(#filter0_i_10244_83)">
<circle cx="40" cy="40" r="36" fill="url(#paint0_linear_10244_83)"/>
</g>
<circle cx="40" cy="40" r="34" stroke="#E4E4E7" stroke-width="4"/>
<path d="M51.0137 45.4834L56.9268 46.9668L44.1162 62.9512L46.7061 52.6309L40.793 51.1475L53.6035 35.1611L51.0137 45.4834ZM32.7119 32.6084L41.7363 30.7627L34.7373 60.9131L31.5176 45.1602L22.4912 47.0059L29.4902 16.8545L32.7119 32.6084Z" fill="#F4F4F5"/>
</g>
</g>
<defs>
<filter id="filter0_i_10244_83" x="4" y="0" width="72" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_10244_83"/>
</filter>
<linearGradient id="paint0_linear_10244_83" x1="40" y1="4" x2="40" y2="76" gradientUnits="userSpaceOnUse">
<stop stop-color="#6A6A6A"/>
<stop offset="0.4" stop-color="#424242"/>
<stop offset="0.8" stop-color="#343434"/>
<stop offset="1" stop-color="#303030"/>
</linearGradient>
<clipPath id="clip0_10244_83">
<rect width="80" height="80" fill="white"/>
</clipPath>
<clipPath id="clip1_10244_83">
<rect width="80" height="80" fill="white"/>
</clipPath>
</defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg[this.variant()]));
  static \u0275fac = function ApIconTurboCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconTurboCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconTurboCircleComponent, selectors: [["ap-icon-turbo-circle"]], inputs: { variant: [1, "variant"] }, decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconTurboCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconTurboCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-turbo-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconTurboCircleComponent, { className: "ApIconTurboCircleComponent", filePath: "src/app/icons/ap-icon-turbo-circle/ap-icon-turbo-circle.component.ts", lineNumber: 12 });
})();

// src/app/components/ap-history-popup-replay-end/ap-history-popup-replay-end.component.ts
var _c0 = ["copyLinkToast"];
function ApHistoryPopupReplayEndComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button", 5);
    \u0275\u0275listener("clicked", function ApHistoryPopupReplayEndComponent_Conditional_2_Template_ap_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onWatchAgain());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", ctx_r1.appI18n.instant("replay_again", "WATCH AGAIN"))("icon", "play")("accentColor", "zinc");
  }
}
function ApHistoryPopupReplayEndComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6);
    \u0275\u0275element(2, "ap-toast", 7, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ap-button", 5);
    \u0275\u0275listener("clicked", function ApHistoryPopupReplayEndComponent_Conditional_3_Template_ap_button_clicked_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCopyLink());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("message", ctx_r1.appI18n.instant("replay_link_copied", "Link Copied"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", ctx_r1.appI18n.instant("replay_copy_link", "COPY LINK"))("icon", "link default")("accentColor", "zinc");
  }
}
var ApHistoryPopupReplayEndComponent = class _ApHistoryPopupReplayEndComponent {
  appI18n = inject(AppI18nService);
  showWatchAgain = input(true);
  showCopyLink = input(true);
  showCloseButton = input(true);
  watchAgain = output();
  copyLink = output();
  close = output();
  copyLinkToast = viewChild("copyLinkToast");
  onWatchAgain() {
    this.watchAgain.emit();
  }
  onCopyLink() {
    this.copyLink.emit();
    this.copyLinkToast()?.show();
  }
  onClose() {
    this.close.emit();
  }
  static \u0275fac = function ApHistoryPopupReplayEndComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApHistoryPopupReplayEndComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApHistoryPopupReplayEndComponent, selectors: [["ap-history-popup-replay-end"]], viewQuery: function ApHistoryPopupReplayEndComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.copyLinkToast, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { showWatchAgain: [1, "showWatchAgain"], showCopyLink: [1, "showCopyLink"], showCloseButton: [1, "showCloseButton"] }, outputs: { watchAgain: "watchAgain", copyLink: "copyLink", close: "close" }, decls: 4, vars: 2, consts: [["copyLinkToast", ""], [1, "fixed", "inset-0", "flex", "items-center", "justify-center", "z-overlay", "pointer-events-none"], [1, "flex", "gap-6", "p-2", "pointer-events-auto"], ["variant", "outlined", 3, "label", "icon", "accentColor"], [1, "relative", "inline-flex", "justify-center"], ["variant", "outlined", 3, "clicked", "label", "icon", "accentColor"], [1, "absolute", "bottom-full", "left-1/2", "-translate-x-1/2", "mb-2", "pointer-events-none"], ["accentColor", "zinc", 3, "message"]], template: function ApHistoryPopupReplayEndComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275conditionalCreate(2, ApHistoryPopupReplayEndComponent_Conditional_2_Template, 1, 3, "ap-button", 3);
      \u0275\u0275conditionalCreate(3, ApHistoryPopupReplayEndComponent_Conditional_3_Template, 5, 4, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showWatchAgain() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCopyLink() ? 3 : -1);
    }
  }, dependencies: [CommonModule, ApButtonComponent, ApToastComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApHistoryPopupReplayEndComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "ap-history-popup-replay-end", imports: [CommonModule, ApButtonComponent, ApToastComponent], template: `<div
  class="fixed inset-0 flex items-center justify-center z-overlay pointer-events-none"
>
  <div class="flex gap-6 p-2 pointer-events-auto">
    @if (showWatchAgain()) {
      <ap-button
        [label]="appI18n.instant('replay_again', 'WATCH AGAIN')"
        [icon]="'play'"
        variant="outlined"
        [accentColor]="'zinc'"
        (clicked)="onWatchAgain()"
      />
    }
    @if (showCopyLink()) {
      <div class="relative inline-flex justify-center">
        <div
          class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none"
        >
          <ap-toast
            #copyLinkToast
            [message]="appI18n.instant('replay_link_copied', 'Link Copied')"
            accentColor="zinc"
          />
        </div>
        <ap-button
          [label]="appI18n.instant('replay_copy_link', 'COPY LINK')"
          [icon]="'link default'"
          variant="outlined"
          [accentColor]="'zinc'"
          (clicked)="onCopyLink()"
        />
      </div>
    }
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApHistoryPopupReplayEndComponent, { className: "ApHistoryPopupReplayEndComponent", filePath: "src/app/components/ap-history-popup-replay-end/ap-history-popup-replay-end.component.ts", lineNumber: 14 });
})();

// src/ap-components-lib/ap-icon-badge-circle/ap-icon-badge-circle.component.ts
var ApIconBadgeCircleComponent = class _ApIconBadgeCircleComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9742_36179)">
<circle cx="20" cy="20" r="20" fill="#09090B"/>
<circle cx="20" cy="20" r="16" fill="white"/>
<circle cx="20" cy="20" r="12" fill="#DC2626"/>
</g>
<defs>
<clipPath id="clip0_9742_36179"><rect width="40" height="40" fill="white"/></clipPath>
</defs>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconBadgeCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconBadgeCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconBadgeCircleComponent, selectors: [["ap-icon-badge-circle"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconBadgeCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon-badge-circle.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconBadgeCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-badge-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/ap-components-lib/ap-icon-badge-circle/ap-icon-badge-circle.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon-badge-circle.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconBadgeCircleComponent, { className: "ApIconBadgeCircleComponent", filePath: "src/ap-components-lib/ap-icon-badge-circle/ap-icon-badge-circle.component.ts", lineNumber: 10 });
})();

// src/ap-components-lib/ap-icon-badge/ap-icon-badge.component.ts
var _c02 = ["*"];
function ApIconBadgeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
  }
}
function ApIconBadgeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function ApIconBadgeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled-cover-full", ctx_r0.disabledCoverVariant() === "full")("disabled-cover-half", ctx_r0.disabledCoverVariant() === "half");
  }
}
function ApIconBadgeComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("width", "30%")("height", "30%");
    \u0275\u0275classProp("disabled-cover-full", ctx_r0.disabledCoverVariant() === "full")("disabled-cover-half", ctx_r0.disabledCoverVariant() === "half")("top-0", ctx_r0.badgeTop() === "top-0");
  }
}
function ApIconBadgeComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-badge-circle", 7);
    \u0275\u0275conditionalCreate(1, ApIconBadgeComponent_Conditional_6_Conditional_1_Template, 1, 10, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", "30%")("height", "30%");
    \u0275\u0275classProp("top-0", ctx_r0.badgeTop() === "top-0");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.disabled() ? 1 : -1);
  }
}
function ApIconBadgeComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ApIconBadgeComponent_Conditional_7_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    })("pointerdown", function ApIconBadgeComponent_Conditional_7_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
}
var ApIconBadgeComponent = class _ApIconBadgeComponent {
  hasBadge = input(false);
  badgeTop = input("top-0");
  disabled = input(false);
  disabledCoverVariant = input("full");
  visualEffect = input("none");
  buttonClick = output();
  constructor() {
  }
  ngOnDestroy() {
  }
  static \u0275fac = function ApIconBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconBadgeComponent, selectors: [["ap-icon-badge"]], inputs: { hasBadge: [1, "hasBadge"], badgeTop: [1, "badgeTop"], disabled: [1, "disabled"], disabledCoverVariant: [1, "disabledCoverVariant"], visualEffect: [1, "visualEffect"] }, outputs: { buttonClick: "buttonClick" }, ngContentSelectors: _c02, decls: 8, vars: 7, consts: [[1, "relative", "size-full"], [1, "outline-lighting-effect", "absolute", "inset-0", "pointer-events-none"], [1, "run-outline-lighting-effect", "absolute", "inset-0", "pointer-events-none"], [1, "absolute", "inset-0", "pointer-events-none"], [1, "disabled-cover", "absolute", "inset-0", 3, "disabled-cover-full", "disabled-cover-half"], [1, "absolute", "inset-0"], [1, "disabled-cover", "absolute", "inset-0"], [1, "absolute", "top-0", "right-0", "pointer-events-none"], [1, "disabled-cover", "absolute", "right-0", "pointer-events-none", 3, "disabled-cover-full", "disabled-cover-half", "top-0", "width", "height"], [1, "disabled-cover", "absolute", "right-0", "pointer-events-none"], [1, "absolute", "inset-0", 3, "click", "pointerdown"]], template: function ApIconBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ApIconBadgeComponent_Conditional_1_Template, 1, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, ApIconBadgeComponent_Conditional_2_Template, 1, 0, "div", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, ApIconBadgeComponent_Conditional_5_Template, 1, 4, "div", 4);
      \u0275\u0275conditionalCreate(6, ApIconBadgeComponent_Conditional_6_Template, 2, 7);
      \u0275\u0275conditionalCreate(7, ApIconBadgeComponent_Conditional_7_Template, 1, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("cursor-not-allowed", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visualEffect() === "outline-lighting" && !ctx.disabled() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visualEffect() === "run-outline-lighting" && !ctx.disabled() ? 2 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.disabled() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasBadge() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.disabled() ? 7 : -1);
    }
  }, dependencies: [ApIconBadgeCircleComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1 / 1;\n}\n.outline-lighting-effect[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  border: 2px solid rgba(255, 205, 64, 0.65);\n  box-shadow: 0 0 0 rgba(255, 196, 36, 0), inset 0 0 0 rgba(255, 228, 120, 0);\n  animation: _ngcontent-%COMP%_outline-lighting 1.5s ease-in-out infinite;\n}\n.run-outline-lighting-effect[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  padding: 2px;\n  background:\n    conic-gradient(\n      from 0deg,\n      rgba(120, 76, 0, 0.08) 0deg,\n      rgba(184, 123, 0, 0.16) 80deg,\n      rgba(255, 214, 82, 0.98) 160deg,\n      rgba(255, 241, 176, 1) 185deg,\n      rgba(255, 191, 0, 0.94) 215deg,\n      rgba(160, 102, 0, 0.12) 240deg,\n      rgba(120, 76, 0, 0.08) 360deg);\n  box-shadow: 0 0 8px rgba(255, 191, 0, 0.28), 0 0 16px rgba(255, 166, 0, 0.2);\n  animation: _ngcontent-%COMP%_run-outline-lighting 1.25s linear infinite;\n  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n  -webkit-mask-composite: xor;\n  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n  mask-composite: exclude;\n}\n.disabled-cover[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n}\n.disabled-cover-full[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n.disabled-cover-half[_ngcontent-%COMP%] {\n  border-radius: 20%;\n}\n@keyframes _ngcontent-%COMP%_outline-lighting {\n  0%, 100% {\n    opacity: 0.65;\n    border-color: rgba(232, 168, 24, 0.55);\n    box-shadow:\n      0 0 4px rgba(255, 191, 0, 0.24),\n      0 0 10px rgba(214, 145, 10, 0.18),\n      inset 0 0 6px rgba(255, 215, 64, 0.14);\n    transform: scale(0.98);\n  }\n  50% {\n    opacity: 1;\n    border-color: rgba(255, 223, 92, 0.98);\n    box-shadow:\n      0 0 8px rgba(255, 200, 32, 0.72),\n      0 0 18px rgba(255, 179, 0, 0.58),\n      inset 0 0 10px rgba(255, 226, 98, 0.4);\n    transform: scale(1.03);\n  }\n}\n@keyframes _ngcontent-%COMP%_run-outline-lighting {\n  0% {\n    transform: rotate(0deg) scale(0.99);\n    filter: saturate(1) brightness(0.96);\n  }\n  50% {\n    transform: rotate(180deg) scale(1.01);\n    filter: saturate(1.1) brightness(1.05);\n  }\n  100% {\n    transform: rotate(360deg) scale(0.99);\n    filter: saturate(1) brightness(0.96);\n  }\n}\n/*# sourceMappingURL=ap-icon-badge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconBadgeComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-badge", standalone: true, imports: [ApIconBadgeCircleComponent], template: `<div class="relative size-full" [class.cursor-not-allowed]="disabled()">
  @if (visualEffect() === "outline-lighting" && !disabled()) {
    <div
      class="outline-lighting-effect absolute inset-0 pointer-events-none"
    ></div>
  }
  @if (visualEffect() === "run-outline-lighting" && !disabled()) {
    <div
      class="run-outline-lighting-effect absolute inset-0 pointer-events-none"
    ></div>
  }
  <div class="absolute inset-0 pointer-events-none">
    <ng-content></ng-content>
  </div>
  @if (disabled()) {
    <div
      class="disabled-cover absolute inset-0"
      [class.disabled-cover-full]="disabledCoverVariant() === 'full'"
      [class.disabled-cover-half]="disabledCoverVariant() === 'half'"
    ></div>
  }
  @if (hasBadge()) {
    <ap-icon-badge-circle
      class="absolute top-0 right-0 pointer-events-none"
      [class.top-0]="badgeTop() === 'top-0'"
      [style.width]="'30%'"
      [style.height]="'30%'"
    />
    @if (disabled()) {
      <div
        class="disabled-cover absolute right-0 pointer-events-none"
        [class.disabled-cover-full]="disabledCoverVariant() === 'full'"
        [class.disabled-cover-half]="disabledCoverVariant() === 'half'"
        [class.top-0]="badgeTop() === 'top-0'"
        [style.width]="'30%'"
        [style.height]="'30%'"
      ></div>
    }
  }

  @if (disabled()) {
    <div
      class="absolute inset-0"
      (click)="$event.stopPropagation()"
      (pointerdown)="$event.stopPropagation()"
    ></div>
  }
</div>
`, styles: ["/* src/ap-components-lib/ap-icon-badge/ap-icon-badge.component.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1 / 1;\n}\n.outline-lighting-effect {\n  border-radius: 9999px;\n  border: 2px solid rgba(255, 205, 64, 0.65);\n  box-shadow: 0 0 0 rgba(255, 196, 36, 0), inset 0 0 0 rgba(255, 228, 120, 0);\n  animation: outline-lighting 1.5s ease-in-out infinite;\n}\n.run-outline-lighting-effect {\n  border-radius: 9999px;\n  padding: 2px;\n  background:\n    conic-gradient(\n      from 0deg,\n      rgba(120, 76, 0, 0.08) 0deg,\n      rgba(184, 123, 0, 0.16) 80deg,\n      rgba(255, 214, 82, 0.98) 160deg,\n      rgba(255, 241, 176, 1) 185deg,\n      rgba(255, 191, 0, 0.94) 215deg,\n      rgba(160, 102, 0, 0.12) 240deg,\n      rgba(120, 76, 0, 0.08) 360deg);\n  box-shadow: 0 0 8px rgba(255, 191, 0, 0.28), 0 0 16px rgba(255, 166, 0, 0.2);\n  animation: run-outline-lighting 1.25s linear infinite;\n  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n  -webkit-mask-composite: xor;\n  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n  mask-composite: exclude;\n}\n.disabled-cover {\n  background: rgba(0, 0, 0, 0.6);\n}\n.disabled-cover-full {\n  border-radius: 100%;\n}\n.disabled-cover-half {\n  border-radius: 20%;\n}\n@keyframes outline-lighting {\n  0%, 100% {\n    opacity: 0.65;\n    border-color: rgba(232, 168, 24, 0.55);\n    box-shadow:\n      0 0 4px rgba(255, 191, 0, 0.24),\n      0 0 10px rgba(214, 145, 10, 0.18),\n      inset 0 0 6px rgba(255, 215, 64, 0.14);\n    transform: scale(0.98);\n  }\n  50% {\n    opacity: 1;\n    border-color: rgba(255, 223, 92, 0.98);\n    box-shadow:\n      0 0 8px rgba(255, 200, 32, 0.72),\n      0 0 18px rgba(255, 179, 0, 0.58),\n      inset 0 0 10px rgba(255, 226, 98, 0.4);\n    transform: scale(1.03);\n  }\n}\n@keyframes run-outline-lighting {\n  0% {\n    transform: rotate(0deg) scale(0.99);\n    filter: saturate(1) brightness(0.96);\n  }\n  50% {\n    transform: rotate(180deg) scale(1.01);\n    filter: saturate(1.1) brightness(1.05);\n  }\n  100% {\n    transform: rotate(360deg) scale(0.99);\n    filter: saturate(1) brightness(0.96);\n  }\n}\n/*# sourceMappingURL=ap-icon-badge.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconBadgeComponent, { className: "ApIconBadgeComponent", filePath: "src/ap-components-lib/ap-icon-badge/ap-icon-badge.component.ts", lineNumber: 18 });
})();

// src/app/icons/ap-icon-blue-circle/ap-icon-blue-circle.component.ts
var ApIconBlueCircleComponent = class _ApIconBlueCircleComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#2563EB" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="34" stroke="#e0e0e0" stroke-width="4"/>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconBlueCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconBlueCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconBlueCircleComponent, selectors: [["ap-icon-blue-circle"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconBlueCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconBlueCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-blue-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconBlueCircleComponent, { className: "ApIconBlueCircleComponent", filePath: "src/app/icons/ap-icon-blue-circle/ap-icon-blue-circle.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-green-circle/ap-icon-green-circle.component.ts
var ApIconGreenCircleComponent = class _ApIconGreenCircleComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#059669" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="34" stroke="#e0e0e0" stroke-width="4"/>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconGreenCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconGreenCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconGreenCircleComponent, selectors: [["ap-icon-green-circle"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconGreenCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconGreenCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-green-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconGreenCircleComponent, { className: "ApIconGreenCircleComponent", filePath: "src/app/icons/ap-icon-green-circle/ap-icon-green-circle.component.ts", lineNumber: 10 });
})();

// src/app/icons/ap-icon-dark-circle/ap-icon-dark-circle.component.ts
var ApIconDarkCircleComponent = class _ApIconDarkCircleComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconDarkCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconDarkCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconDarkCircleComponent, selectors: [["ap-icon-dark-circle"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconDarkCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconDarkCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-dark-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconDarkCircleComponent, { className: "ApIconDarkCircleComponent", filePath: "src/app/icons/ap-icon-dark-circle/ap-icon-dark-circle.component.ts", lineNumber: 10 });
})();

// src/app/components/ap-button-auto-spin-times/ap-button-auto-spin-times.component.ts
function ApButtonAutoSpinTimesComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-blue-circle");
  }
}
function ApButtonAutoSpinTimesComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-green-circle");
  }
}
function ApButtonAutoSpinTimesComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon-dark-circle");
  }
}
function ApButtonAutoSpinTimesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 3);
  }
}
function ApButtonAutoSpinTimesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 5);
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentSpins(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.totalSpins(), " ");
  }
}
var ApButtonAutoSpinTimesComponent = class _ApButtonAutoSpinTimesComponent {
  /* 5秒未觸動，播放動態 */
  static PRESS_HINT_DELAY_MS = 5e3;
  pressHintTimeoutId = null;
  currentSpins = input(103);
  totalSpins = input(486);
  disabled = input(false);
  /** 使用pointerdown的click */
  buttonClick = output();
  scale = input(1);
  pressHintEnabled = model(false);
  pressHintType = input("blur");
  pressHintTimerEnabled = input(false);
  mode = input("auto-spin");
  variant = input("default");
  enableLightingEffect = input(true);
  isPressed = signal(false);
  showIdleHalo = signal(false);
  ngOnInit() {
    if (this.pressHintTimerEnabled()) {
      this.restartPressHintTimer();
    }
  }
  ngOnDestroy() {
    this.clearPressHintTimer();
  }
  getScaleStyle() {
    const scale = this.scale() || 1;
    const pressScale = this.isPressed() ? 0.94 : 1;
    const totalScale = scale * pressScale;
    if (totalScale === 1) {
      return null;
    }
    return `scale(${totalScale})`;
  }
  setPressed(isPressed) {
    this.isPressed.set(isPressed && !this.disabled());
  }
  handlePointerDown() {
    this.setPressed(true);
    if (this.pressHintTimerEnabled()) {
      this.restartPressHintTimer();
    }
  }
  pointerDown() {
    this.pressHintEnabled.set(false);
    this.showIdleHalo.set(false);
    if (!this.disabled()) {
      this.buttonClick.emit();
    }
  }
  restartPressHintTimer() {
    this.clearPressHintTimer();
    this.showIdleHalo.set(false);
    this.pressHintTimeoutId = setTimeout(() => {
      if (!this.disabled()) {
        this.showIdleHalo.set(true);
      }
    }, _ApButtonAutoSpinTimesComponent.PRESS_HINT_DELAY_MS);
  }
  clearPressHintTimer() {
    if (this.pressHintTimeoutId !== null) {
      clearTimeout(this.pressHintTimeoutId);
      this.pressHintTimeoutId = null;
    }
  }
  static \u0275fac = function ApButtonAutoSpinTimesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApButtonAutoSpinTimesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApButtonAutoSpinTimesComponent, selectors: [["ap-button-auto-spin-times"]], inputs: { currentSpins: [1, "currentSpins"], totalSpins: [1, "totalSpins"], disabled: [1, "disabled"], scale: [1, "scale"], pressHintEnabled: [1, "pressHintEnabled"], pressHintType: [1, "pressHintType"], pressHintTimerEnabled: [1, "pressHintTimerEnabled"], mode: [1, "mode"], variant: [1, "variant"], enableLightingEffect: [1, "enableLightingEffect"] }, outputs: { buttonClick: "buttonClick", pressHintEnabled: "pressHintEnabledChange" }, decls: 8, vars: 12, consts: [[1, "relative", "w-24", "items-center", "justify-center", 3, "pointerdown", "pointerup", "pointerleave", "pointercancel", "ngClass"], [1, "relative", "z-sticky", "size-full", "color-transition", 3, "pointerdown", "disabled"], [1, "pointer-events-none", "absolute", "inset-0", "z-sticky", "flex", "flex-col", "items-center", "justify-center", "pb-1"], ["name", "infinite default", 1, "size-16", "text-white"], [1, "font-anton", "text-3xl", "leading-none", "text-white"], [1, "my-1", "h-0.5", "w-3/5", "bg-zinc-400"], [1, "font-anton", "text-xl", "leading-none", "text-zinc-300"]], template: function ApButtonAutoSpinTimesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("pointerdown", function ApButtonAutoSpinTimesComponent_Template_div_pointerdown_0_listener() {
        return ctx.handlePointerDown();
      })("pointerup", function ApButtonAutoSpinTimesComponent_Template_div_pointerup_0_listener() {
        return ctx.setPressed(false);
      })("pointerleave", function ApButtonAutoSpinTimesComponent_Template_div_pointerleave_0_listener() {
        return ctx.setPressed(false);
      })("pointercancel", function ApButtonAutoSpinTimesComponent_Template_div_pointercancel_0_listener() {
        return ctx.setPressed(false);
      });
      \u0275\u0275elementStart(1, "ap-icon-badge", 1);
      \u0275\u0275listener("pointerdown", function ApButtonAutoSpinTimesComponent_Template_ap_icon_badge_pointerdown_1_listener() {
        return ctx.pointerDown();
      });
      \u0275\u0275conditionalCreate(2, ApButtonAutoSpinTimesComponent_Case_2_Template, 1, 0, "ap-icon-blue-circle")(3, ApButtonAutoSpinTimesComponent_Case_3_Template, 1, 0, "ap-icon-green-circle")(4, ApButtonAutoSpinTimesComponent_Case_4_Template, 1, 0, "ap-icon-dark-circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2);
      \u0275\u0275conditionalCreate(6, ApButtonAutoSpinTimesComponent_Conditional_6_Template, 1, 0, "ap-icon", 3)(7, ApButtonAutoSpinTimesComponent_Conditional_7_Template, 5, 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275styleProp("transform", ctx.getScaleStyle())("transform-origin", "center");
      \u0275\u0275classProp("outline-lighting-effect-disabled", ctx.disabled() || !ctx.enableLightingEffect())("auto-spin-run-soft-halo", !ctx.disabled() && ctx.enableLightingEffect() && (ctx.pressHintEnabled() || ctx.showIdleHalo()) && ctx.pressHintType() === "blur");
      \u0275\u0275property("ngClass", ctx.disabled() ? "cursor-not-allowed opacity-50" : "cursor-pointer hover-scale");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_6_0 = ctx.mode()) === "double-chance-auto-spin" ? 2 : tmp_6_0 === "free-bonus-auto-spin" ? 3 : 4);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.variant() === "infinity" ? 6 : 7);
    }
  }, dependencies: [CommonModule, NgClass, ApIconComponent, ApIconBadgeComponent, ApIconBlueCircleComponent, ApIconGreenCircleComponent, ApIconDarkCircleComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.auto-spin-run-soft-halo[_ngcontent-%COMP%] {\n  isolation: isolate;\n  border-radius: 9999px;\n  will-change: scale, filter;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  filter: drop-shadow(0 0 0.3rem rgba(251, 191, 36, 0.4));\n  animation: _ngcontent-%COMP%_auto-spin-run-soft-halo-invite 1.4s ease-in-out infinite;\n}\n.auto-spin-run-soft-halo[_ngcontent-%COMP%]::before {\n  aspect-ratio: 1 / 1;\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  border-radius: 9999px;\n  border: 0.14rem solid rgba(253, 224, 71, 0.9);\n  opacity: 0;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_auto-spin-run-soft-halo-ring 1.4s ease-out infinite;\n}\n.auto-spin-run-soft-halo[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -0.25rem;\n  z-index: 0;\n  border-radius: 9999px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(254, 249, 195, 0.55) 0%,\n      rgba(253, 224, 71, 0.48) 32%,\n      rgba(250, 204, 21, 0.4) 52%,\n      rgba(251, 191, 36, 0.22) 70%,\n      rgba(251, 191, 36, 0) 100%);\n  filter: blur(0.3rem);\n  opacity: 0.9;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_auto-spin-run-soft-halo 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_auto-spin-run-soft-halo {\n  0%, 100% {\n    opacity: 0.5;\n    scale: 0.94;\n  }\n  50% {\n    opacity: 1;\n    scale: 1.04;\n  }\n}\n@keyframes _ngcontent-%COMP%_auto-spin-run-soft-halo-invite {\n  0%, 100% {\n    scale: 1;\n    filter: drop-shadow(0 0 0.2rem rgba(251, 191, 36, 0.4));\n  }\n  50% {\n    scale: 1;\n    filter: drop-shadow(0 0 0.4rem rgba(253, 224, 71, 0.85));\n  }\n}\n@keyframes _ngcontent-%COMP%_auto-spin-run-soft-halo-ring {\n  0%, 45% {\n    scale: 1;\n    opacity: 0;\n  }\n  50% {\n    scale: 1;\n    opacity: 0.85;\n  }\n  100% {\n    scale: 1.3;\n    opacity: 0;\n  }\n}\n.auto-spin-run-light[_ngcontent-%COMP%] {\n  isolation: isolate;\n  aspect-ratio: 1 / 1;\n  border-radius: 9999px;\n  overflow: visible;\n  filter: drop-shadow(0 0 0.35rem rgba(250, 204, 21, 0.45));\n  transition: transform 120ms ease-out, filter 200ms ease-out;\n  animation: _ngcontent-%COMP%_auto-spin-run-light-invite 1.4s ease-in-out infinite;\n}\n@media (hover: hover) and (pointer: fine) {\n  .auto-spin-run-light[_ngcontent-%COMP%]:not(.auto-spin-run-light-disabled):hover {\n    filter: drop-shadow(0 0 0.7rem rgba(250, 204, 21, 0.5));\n  }\n}\n.auto-spin-run-light[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -0.14rem;\n  z-index: 0;\n  border-radius: 9999px;\n  background:\n    conic-gradient(\n      from 0deg,\n      rgba(245, 158, 11, 0) 0deg,\n      rgba(245, 158, 11, 0) 90deg,\n      rgba(245, 158, 11, 0.1) 130deg,\n      rgba(250, 204, 21, 0.62) 200deg,\n      rgba(255, 251, 235, 1) 290deg,\n      rgba(253, 224, 71, 0.9) 330deg,\n      rgba(245, 158, 11, 0.4) 354deg,\n      rgba(245, 158, 11, 0) 360deg);\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_auto-spin-run-light 1.5s linear infinite;\n  -webkit-mask:\n    radial-gradient(\n      farthest-side,\n      transparent calc(100% - 0.28rem),\n      #000 calc(100% - 0.17rem));\n  mask:\n    radial-gradient(\n      farthest-side,\n      transparent calc(100% - 0.28rem),\n      #000 calc(100% - 0.17rem));\n}\n.auto-spin-run-light[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  border-radius: 9999px;\n  pointer-events: none;\n}\n.auto-spin-run-light-disabled[_ngcontent-%COMP%] {\n  animation: none;\n  filter: drop-shadow(0 0 0.2rem rgba(250, 204, 21, 0.12));\n}\n.auto-spin-run-light-disabled[_ngcontent-%COMP%]::before {\n  animation-play-state: paused;\n  opacity: 0.35;\n}\n.auto-spin-run-light-disabled[_ngcontent-%COMP%]::after {\n  box-shadow: none;\n}\n.auto-spin-press-hint-finger[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_auto-spin-press-hint 1.4s ease-in-out infinite;\n}\n.auto-spin-press-hint[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(63, 63, 70, 0.96),\n      rgba(24, 24, 27, 0.96));\n  border: 1px solid rgba(250, 204, 21, 0.28);\n  animation: _ngcontent-%COMP%_auto-spin-press-hint 1.4s ease-in-out infinite;\n}\n.auto-spin-press-icon[_ngcontent-%COMP%] {\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_auto-spin-run-light {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_auto-spin-run-light-invite {\n  0%, 100% {\n    transform: scale(1);\n    filter: drop-shadow(0 0 0.35rem rgba(250, 204, 21, 0.45));\n  }\n  50% {\n    transform: scale(1);\n    filter: drop-shadow(0 0 0.65rem rgba(250, 204, 21, 0.85));\n  }\n}\n@keyframes _ngcontent-%COMP%_auto-spin-press-hint {\n  0%, 100% {\n    opacity: 0.9;\n    transform: translateY(0);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(-0.05rem);\n  }\n}\n.outline-lighting-effect[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  border: 2px solid rgba(255, 205, 64, 0.65);\n  animation: _ngcontent-%COMP%_outline-lighting 1.5s ease-in-out infinite;\n}\n.run-outline-lighting-effect[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  padding: 2px;\n  background:\n    conic-gradient(\n      from 0deg,\n      rgba(120, 76, 0, 0.08) 0deg,\n      rgba(184, 123, 0, 0.16) 80deg,\n      rgba(255, 214, 82, 0.98) 160deg,\n      rgba(255, 241, 176, 1) 185deg,\n      rgba(255, 191, 0, 0.94) 215deg,\n      rgba(160, 102, 0, 0.12) 240deg,\n      rgba(120, 76, 0, 0.08) 360deg);\n  box-shadow: 0 0 8px rgba(255, 191, 0, 0.28), 0 0 16px rgba(255, 166, 0, 0.2);\n  animation: _ngcontent-%COMP%_run-outline-lighting 1.25s linear infinite;\n  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n}\n@keyframes _ngcontent-%COMP%_outline-lighting {\n  0%, 100% {\n    opacity: 0.9;\n    border-color: rgba(232, 168, 24, 0.55);\n    box-shadow:\n      0 0 4px rgba(255, 191, 0, 0.24),\n      0 0 10px rgba(214, 145, 10, 0.18),\n      inset 0 0 6px rgba(255, 215, 64, 0.14);\n  }\n  50% {\n    opacity: 1;\n    border-color: rgba(255, 223, 92, 0.98);\n    box-shadow:\n      0 0 8px rgba(255, 200, 32, 0.72),\n      0 0 18px rgba(255, 179, 0, 0.58),\n      inset 0 0 10px rgba(255, 226, 98, 0.4);\n  }\n}\n@keyframes _ngcontent-%COMP%_run-outline-lighting {\n  0% {\n    transform: rotate(0deg) scale(0.99);\n    filter: saturate(1) brightness(0.96);\n  }\n  50% {\n    transform: rotate(180deg) scale(1.01);\n    filter: saturate(1.1) brightness(1.05);\n  }\n  100% {\n    transform: rotate(360deg) scale(0.99);\n    filter: saturate(1) brightness(0.96);\n  }\n}\n/*# sourceMappingURL=ap-button-auto-spin-times.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApButtonAutoSpinTimesComponent, [{
    type: Component,
    args: [{ selector: "ap-button-auto-spin-times", imports: [CommonModule, ApIconComponent, ApIconBadgeComponent, ApIconBlueCircleComponent, ApIconGreenCircleComponent, ApIconDarkCircleComponent], template: `<div
  class="relative w-24 items-center justify-center"
  [class.outline-lighting-effect-disabled]="disabled() || !enableLightingEffect()"
  [ngClass]="
    disabled()
      ? 'cursor-not-allowed opacity-50'
      : 'cursor-pointer hover-scale'
  "
  [class.auto-spin-run-soft-halo]="
    !disabled() &&
    enableLightingEffect() &&
    (pressHintEnabled() || showIdleHalo()) &&
    pressHintType() === 'blur'
  "
  [style.transform]="getScaleStyle()"
  [style.transform-origin]="'center'"
  (pointerdown)="handlePointerDown()"
  (pointerup)="setPressed(false)"
  (pointerleave)="setPressed(false)"
  (pointercancel)="setPressed(false)"
>
  <ap-icon-badge
    class="relative z-sticky size-full color-transition"
    [disabled]="disabled()"
    (pointerdown)="pointerDown()"
  >
    @switch (mode()) {
      @case ("double-chance-auto-spin") {
        <ap-icon-blue-circle />
      }
      @case ("free-bonus-auto-spin") {
        <ap-icon-green-circle />
      }
      @default {
        <ap-icon-dark-circle />
      }
    }
  </ap-icon-badge>

  <div
    class="pointer-events-none absolute inset-0 z-sticky flex flex-col items-center justify-center pb-1"
  >
    @if (variant() === "infinity") {
      <ap-icon name="infinite default" class="size-16 text-white" />
    } @else {
      <div class="font-anton text-3xl leading-none text-white">
        {{ currentSpins() }}
      </div>
      <div class="my-1 h-0.5 w-3/5 bg-zinc-400"></div>
      <div class="font-anton text-xl leading-none text-zinc-300">
        {{ totalSpins() }}
      </div>
    }
  </div>
</div>
`, styles: ['/* src/app/components/ap-button-auto-spin-times/ap-button-auto-spin-times.component.css */\n:host {\n  display: block;\n}\n.auto-spin-run-soft-halo {\n  isolation: isolate;\n  border-radius: 9999px;\n  will-change: scale, filter;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  filter: drop-shadow(0 0 0.3rem rgba(251, 191, 36, 0.4));\n  animation: auto-spin-run-soft-halo-invite 1.4s ease-in-out infinite;\n}\n.auto-spin-run-soft-halo::before {\n  aspect-ratio: 1 / 1;\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  border-radius: 9999px;\n  border: 0.14rem solid rgba(253, 224, 71, 0.9);\n  opacity: 0;\n  pointer-events: none;\n  animation: auto-spin-run-soft-halo-ring 1.4s ease-out infinite;\n}\n.auto-spin-run-soft-halo::after {\n  content: "";\n  position: absolute;\n  inset: -0.25rem;\n  z-index: 0;\n  border-radius: 9999px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(254, 249, 195, 0.55) 0%,\n      rgba(253, 224, 71, 0.48) 32%,\n      rgba(250, 204, 21, 0.4) 52%,\n      rgba(251, 191, 36, 0.22) 70%,\n      rgba(251, 191, 36, 0) 100%);\n  filter: blur(0.3rem);\n  opacity: 0.9;\n  pointer-events: none;\n  animation: auto-spin-run-soft-halo 1.4s ease-in-out infinite;\n}\n@keyframes auto-spin-run-soft-halo {\n  0%, 100% {\n    opacity: 0.5;\n    scale: 0.94;\n  }\n  50% {\n    opacity: 1;\n    scale: 1.04;\n  }\n}\n@keyframes auto-spin-run-soft-halo-invite {\n  0%, 100% {\n    scale: 1;\n    filter: drop-shadow(0 0 0.2rem rgba(251, 191, 36, 0.4));\n  }\n  50% {\n    scale: 1;\n    filter: drop-shadow(0 0 0.4rem rgba(253, 224, 71, 0.85));\n  }\n}\n@keyframes auto-spin-run-soft-halo-ring {\n  0%, 45% {\n    scale: 1;\n    opacity: 0;\n  }\n  50% {\n    scale: 1;\n    opacity: 0.85;\n  }\n  100% {\n    scale: 1.3;\n    opacity: 0;\n  }\n}\n.auto-spin-run-light {\n  isolation: isolate;\n  aspect-ratio: 1 / 1;\n  border-radius: 9999px;\n  overflow: visible;\n  filter: drop-shadow(0 0 0.35rem rgba(250, 204, 21, 0.45));\n  transition: transform 120ms ease-out, filter 200ms ease-out;\n  animation: auto-spin-run-light-invite 1.4s ease-in-out infinite;\n}\n@media (hover: hover) and (pointer: fine) {\n  .auto-spin-run-light:not(.auto-spin-run-light-disabled):hover {\n    filter: drop-shadow(0 0 0.7rem rgba(250, 204, 21, 0.5));\n  }\n}\n.auto-spin-run-light::before {\n  content: "";\n  position: absolute;\n  inset: -0.14rem;\n  z-index: 0;\n  border-radius: 9999px;\n  background:\n    conic-gradient(\n      from 0deg,\n      rgba(245, 158, 11, 0) 0deg,\n      rgba(245, 158, 11, 0) 90deg,\n      rgba(245, 158, 11, 0.1) 130deg,\n      rgba(250, 204, 21, 0.62) 200deg,\n      rgba(255, 251, 235, 1) 290deg,\n      rgba(253, 224, 71, 0.9) 330deg,\n      rgba(245, 158, 11, 0.4) 354deg,\n      rgba(245, 158, 11, 0) 360deg);\n  pointer-events: none;\n  animation: auto-spin-run-light 1.5s linear infinite;\n  -webkit-mask:\n    radial-gradient(\n      farthest-side,\n      transparent calc(100% - 0.28rem),\n      #000 calc(100% - 0.17rem));\n  mask:\n    radial-gradient(\n      farthest-side,\n      transparent calc(100% - 0.28rem),\n      #000 calc(100% - 0.17rem));\n}\n.auto-spin-run-light::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  border-radius: 9999px;\n  pointer-events: none;\n}\n.auto-spin-run-light-disabled {\n  animation: none;\n  filter: drop-shadow(0 0 0.2rem rgba(250, 204, 21, 0.12));\n}\n.auto-spin-run-light-disabled::before {\n  animation-play-state: paused;\n  opacity: 0.35;\n}\n.auto-spin-run-light-disabled::after {\n  box-shadow: none;\n}\n.auto-spin-press-hint-finger {\n  animation: auto-spin-press-hint 1.4s ease-in-out infinite;\n}\n.auto-spin-press-hint {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(63, 63, 70, 0.96),\n      rgba(24, 24, 27, 0.96));\n  border: 1px solid rgba(250, 204, 21, 0.28);\n  animation: auto-spin-press-hint 1.4s ease-in-out infinite;\n}\n.auto-spin-press-icon {\n  display: block;\n}\n@keyframes auto-spin-run-light {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes auto-spin-run-light-invite {\n  0%, 100% {\n    transform: scale(1);\n    filter: drop-shadow(0 0 0.35rem rgba(250, 204, 21, 0.45));\n  }\n  50% {\n    transform: scale(1);\n    filter: drop-shadow(0 0 0.65rem rgba(250, 204, 21, 0.85));\n  }\n}\n@keyframes auto-spin-press-hint {\n  0%, 100% {\n    opacity: 0.9;\n    transform: translateY(0);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(-0.05rem);\n  }\n}\n.outline-lighting-effect {\n  border-radius: 9999px;\n  border: 2px solid rgba(255, 205, 64, 0.65);\n  animation: outline-lighting 1.5s ease-in-out infinite;\n}\n.run-outline-lighting-effect {\n  border-radius: 9999px;\n  padding: 2px;\n  background:\n    conic-gradient(\n      from 0deg,\n      rgba(120, 76, 0, 0.08) 0deg,\n      rgba(184, 123, 0, 0.16) 80deg,\n      rgba(255, 214, 82, 0.98) 160deg,\n      rgba(255, 241, 176, 1) 185deg,\n      rgba(255, 191, 0, 0.94) 215deg,\n      rgba(160, 102, 0, 0.12) 240deg,\n      rgba(120, 76, 0, 0.08) 360deg);\n  box-shadow: 0 0 8px rgba(255, 191, 0, 0.28), 0 0 16px rgba(255, 166, 0, 0.2);\n  animation: run-outline-lighting 1.25s linear infinite;\n  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n}\n@keyframes outline-lighting {\n  0%, 100% {\n    opacity: 0.9;\n    border-color: rgba(232, 168, 24, 0.55);\n    box-shadow:\n      0 0 4px rgba(255, 191, 0, 0.24),\n      0 0 10px rgba(214, 145, 10, 0.18),\n      inset 0 0 6px rgba(255, 215, 64, 0.14);\n  }\n  50% {\n    opacity: 1;\n    border-color: rgba(255, 223, 92, 0.98);\n    box-shadow:\n      0 0 8px rgba(255, 200, 32, 0.72),\n      0 0 18px rgba(255, 179, 0, 0.58),\n      inset 0 0 10px rgba(255, 226, 98, 0.4);\n  }\n}\n@keyframes run-outline-lighting {\n  0% {\n    transform: rotate(0deg) scale(0.99);\n    filter: saturate(1) brightness(0.96);\n  }\n  50% {\n    transform: rotate(180deg) scale(1.01);\n    filter: saturate(1.1) brightness(1.05);\n  }\n  100% {\n    transform: rotate(360deg) scale(0.99);\n    filter: saturate(1) brightness(0.96);\n  }\n}\n/*# sourceMappingURL=ap-button-auto-spin-times.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApButtonAutoSpinTimesComponent, { className: "ApButtonAutoSpinTimesComponent", filePath: "src/app/components/ap-button-auto-spin-times/ap-button-auto-spin-times.component.ts", lineNumber: 14 });
})();

// src/app/icons/ap-icon-yellow-circle/ap-icon-yellow-circle.component.ts
var ApIconYellowCircleComponent = class _ApIconYellowCircleComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <circle cx="40" cy="40" r="38" fill="oklch(27.4% 0.006 286.033)" stroke="#09090B" stroke-width="4"/>
  <circle cx="40" cy="40" r="34" stroke="oklch(90.5% 0.182 98.111)" stroke-width="4"/>
</svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconYellowCircleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconYellowCircleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconYellowCircleComponent, selectors: [["ap-icon-yellow-circle"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconYellowCircleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconYellowCircleComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-yellow-circle", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconYellowCircleComponent, { className: "ApIconYellowCircleComponent", filePath: "src/app/icons/ap-icon-yellow-circle/ap-icon-yellow-circle.component.ts", lineNumber: 10 });
})();

// src/app/components/ap-button-free-spins/ap-button-free-spins.component.ts
var ApButtonFreeSpinsComponent = class _ApButtonFreeSpinsComponent {
  currentSpins = input(103);
  totalSpins = input(486);
  scale = input(1);
  disabled = input(false);
  buttonClick = output();
  pointerDown() {
    if (!this.disabled()) {
      this.buttonClick.emit();
    }
  }
  getScaleStyle() {
    const scale = this.scale();
    if (!scale || scale === 1) {
      return null;
    }
    return `scale(${scale})`;
  }
  static \u0275fac = function ApButtonFreeSpinsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApButtonFreeSpinsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApButtonFreeSpinsComponent, selectors: [["ap-button-free-spins"]], inputs: { currentSpins: [1, "currentSpins"], totalSpins: [1, "totalSpins"], scale: [1, "scale"], disabled: [1, "disabled"] }, outputs: { buttonClick: "buttonClick" }, decls: 9, vars: 8, consts: [[1, "relative", "items-center", "justify-center", "w-24", 3, "ngClass"], [1, "size-full", "color-transition", 3, "pointerdown", "disabled"], [1, "pointer-events-none", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "pb-1"], [1, "font-anton", "text-yellow-200", "leading-none", "text-3xl"], [1, "w-3/5", "h-0.5", "bg-zinc-400", "my-1"], [1, "font-anton", "text-yellow-300", "leading-none", "text-xl"]], template: function ApButtonFreeSpinsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ap-icon-badge", 1);
      \u0275\u0275listener("pointerdown", function ApButtonFreeSpinsComponent_Template_ap_icon_badge_pointerdown_1_listener() {
        return ctx.pointerDown();
      });
      \u0275\u0275element(2, "ap-icon-yellow-circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "div", 4);
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("transform", ctx.getScaleStyle())("transform-origin", "center");
      \u0275\u0275property("ngClass", ctx.disabled() ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover-scale");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.currentSpins() > 0 ? ctx.currentSpins() : 0, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.totalSpins(), " ");
    }
  }, dependencies: [CommonModule, NgClass, ApIconBadgeComponent, ApIconYellowCircleComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApButtonFreeSpinsComponent, [{
    type: Component,
    args: [{ selector: "ap-button-free-spins", imports: [CommonModule, ApIconBadgeComponent, ApIconYellowCircleComponent], template: `<div
  class="relative items-center justify-center w-24"
  [style.transform]="getScaleStyle()"
  [style.transform-origin]="'center'"
  [ngClass]="
    disabled()
      ? 'opacity-50 cursor-not-allowed'
      : 'cursor-pointer hover-scale'
  "
>
  <ap-icon-badge
    class="size-full color-transition"
    [disabled]="disabled()"
    (pointerdown)="pointerDown()"
  >
    <ap-icon-yellow-circle />
  </ap-icon-badge>

  <div
    class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pb-1"
  >
    <!-- Current Spins -->
    <div class="font-anton text-yellow-200 leading-none text-3xl">
      {{ currentSpins() > 0 ? currentSpins() : 0 }}
    </div>

    <!-- Divider line -->
    <div class="w-3/5 h-0.5 bg-zinc-400 my-1"></div>

    <!-- Total Spins (bottom number) -->
    <div class="font-anton text-yellow-300 leading-none text-xl">
      {{ totalSpins() }}
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApButtonFreeSpinsComponent, { className: "ApButtonFreeSpinsComponent", filePath: "src/app/components/ap-button-free-spins/ap-button-free-spins.component.ts", lineNumber: 12 });
})();

// src/app/icons/ap-icon-spin/ap-icon-spin.component.ts
var ApIconSpinComponent = class _ApIconSpinComponent {
  variant = input("default");
  sanitizer = inject(DomSanitizer);
  path = "M38.2691 43.289C44.5995 38.6057 47.9627 31.4116 47.9995 24.1077C48.0164 20.7665 47.3359 17.4021 45.926 14.2448L45 20L39.1831 19.1251C39.6935 20.7191 39.9491 22.3837 39.9402 24.0573C39.915 28.9135 37.6806 33.6979 33.4763 36.8081C27.5061 41.2251 19.4695 40.8557 13.9558 36.3864L19.8676 32.0126L4.53556 29.7196L2.24284 45.052L7.34598 41.2764C15.6268 49.2838 28.6989 50.3692 38.2691 43.289Z M43.4709 17.8505L45.7633 2.51841L40.4032 6.48404C32.1108 -1.30517 19.2041 -2.29779 9.72976 4.71141C0.532902 11.5156 -2.4003 23.6189 2.03043 33.6597L3.5 27.5L8.66983 28.4219C6.86976 22.1995 8.99417 15.2441 14.5064 11.1661C20.3865 6.81589 28.2704 7.10871 33.7748 11.3878L28.1388 15.5577L43.4709 17.8505Z";
  svg = {
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#27272A" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16, 16) scale(1)">
        <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g></svg>`,
    chance: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#2563EB" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#e0e0e0" stroke-width="4"/>
      <g transform="translate(16, 16) scale(1)">
        <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#e0e0e0"/></g></svg>`,
    bonus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#059669" stroke="#09090B" stroke-width="4"/>
      <circle cx="40" cy="40" r="34" stroke="#e0e0e0" stroke-width="4"/>
      <g transform="translate(16, 16) scale(1)">
        <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#e0e0e0"/></g></svg>`,
    red: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#000" stroke-width="4"/>
      <circle cx="40" cy="40" r="38" fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
      <circle cx="40" cy="40" r="34" stroke="#D4D4D8" stroke-width="4"/>
      <g transform="translate(16, 16) scale(1)">
        <path fill-rule="evenodd" d="${this.path}" clip-rule="evenodd" fill="#D4D4D8"/></g></svg>`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg[this.variant()]));
  static \u0275fac = function ApIconSpinComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconSpinComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconSpinComponent, selectors: [["ap-icon-spin"]], inputs: { variant: [1, "variant"] }, decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconSpinComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconSpinComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-spin", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconSpinComponent, { className: "ApIconSpinComponent", filePath: "src/app/icons/ap-icon-spin/ap-icon-spin.component.ts", lineNumber: 12 });
})();

// src/app/icons/ap-icon-hold-turbo-spin/ap-icon-hold-turbo-spin.component.ts
var ApIconHoldTurboSpinComponent = class _ApIconHoldTurboSpinComponent {
  sanitizer = inject(DomSanitizer);
  svg = {
    default: `
<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="url(#paint0_linear_10379_9948)"/>
<circle cx="40" cy="40" r="37" stroke="#D4D4D8" stroke-width="4"/>
<path d="M15.1694 34.9695L8.16917 32.8828L8.58416 31.4907L11.086 32.2364L11.2828 31.5762L8.78098 30.8304L9.19596 29.4383L16.1962 31.5251L15.7813 32.9172L12.6073 31.971L12.4104 32.6313L15.5844 33.5774L15.1694 34.9695ZM17.2295 29.2999C16.9734 29.8245 16.6195 30.149 16.1678 30.2734C15.7148 30.394 15.1887 30.3081 14.5894 30.0156L11.4713 28.4936C10.9093 28.2193 10.5497 27.8744 10.3922 27.4589C10.236 27.0409 10.2872 26.567 10.5457 26.0374C10.8042 25.5078 11.1457 25.1772 11.5701 25.0457C11.9958 24.9117 12.4896 24.9819 13.0515 25.2562L16.1696 26.7781C16.7689 27.0706 17.1597 27.4338 17.342 27.8677C17.5231 28.2978 17.4856 28.7752 17.2295 29.2999ZM16.0265 28.6988C16.1236 28.4999 15.9794 28.3064 15.594 28.1182L12.3901 26.5544C12.0669 26.3966 11.8579 26.4147 11.7633 26.6086C11.6565 26.8274 11.7684 27.0176 12.0991 27.179L15.2993 28.741C15.5032 28.8406 15.662 28.8873 15.7758 28.8813C15.8871 28.874 15.9707 28.8132 16.0265 28.6988ZM18.2808 27.0121L12.263 22.8716L13.0911 21.6681L18.0832 25.1028L18.9348 23.865L19.9606 24.5708L18.2808 27.0121ZM20.2494 24.1594L14.9706 19.1104L16.3591 17.6587C16.7225 17.2788 17.1019 17.0942 17.4975 17.105C17.891 17.1139 18.2908 17.3124 18.6967 17.7007L21.1681 20.0645C21.668 20.5427 21.9698 20.9998 22.0734 21.4358C22.1789 21.8699 22.0223 22.3059 21.6034 22.7438L20.2494 24.1594ZM20.3321 22.2055L20.5071 22.0225C20.6927 21.8286 20.6914 21.6417 20.5035 21.4619L17.7801 18.8571C17.6042 18.6888 17.4682 18.6047 17.3723 18.6049C17.2764 18.6012 17.1595 18.6713 17.0218 18.8152L16.9099 18.9322L20.3321 22.2055ZM25.073 19.5679L21.1154 13.4281L23.5713 11.8451L24.3426 13.0417L23.1216 13.8287L23.7512 14.8055L24.9094 14.0589L25.6717 15.2415L24.5135 15.9881L26.3079 18.7719L25.073 19.5679ZM29.6128 17.0659C29.0766 17.2969 28.5967 17.3122 28.1731 17.1121C27.7509 16.9083 27.4079 16.5002 27.1441 15.8877L25.7716 12.701C25.5243 12.1267 25.4764 11.6307 25.6278 11.2129C25.7819 10.7941 26.1295 10.4682 26.6708 10.235C27.2121 10.0019 27.6865 9.9738 28.0941 10.1507C28.5043 10.3266 28.833 10.7017 29.0804 11.276L30.4528 14.4627C30.7166 15.0752 30.7762 15.6053 30.6317 16.0532C30.4886 16.4974 30.149 16.835 29.6128 17.0659ZM29.0923 15.8259C29.2956 15.7384 29.3124 15.4977 29.1428 15.1038L27.7325 11.8294C27.5903 11.499 27.42 11.3765 27.2218 11.4619C26.9982 11.5582 26.9591 11.7753 27.1047 12.1133L28.5133 15.3839C28.603 15.5923 28.693 15.7313 28.7833 15.8009C28.8724 15.8679 28.9754 15.8763 29.0923 15.8259ZM31.8574 16.0316L30.0897 8.94402L32.2643 8.40167C32.6267 8.31127 32.9213 8.3262 33.1481 8.44645C33.3742 8.56402 33.5553 8.7641 33.6913 9.0467C33.8294 9.32595 33.9483 9.66558 34.0481 10.0656C34.1445 10.4522 34.1719 10.7733 34.1301 11.029C34.091 11.284 33.947 11.4896 33.6979 11.6458C33.9321 11.6359 34.1156 11.7084 34.2484 11.8635C34.3832 12.0153 34.4854 12.2307 34.5551 12.5099L35.224 15.192L33.8266 15.5405L33.1346 12.7658C33.083 12.5591 33.0083 12.4423 32.9103 12.4154C32.8144 12.3852 32.6724 12.3935 32.4845 12.4403L33.291 15.674L31.8574 16.0316ZM32.1862 11.2101L32.5285 11.1247C32.7245 11.0758 32.7693 10.838 32.6628 10.4111C32.5938 10.1346 32.5272 9.95871 32.4628 9.88352C32.3984 9.80832 32.3072 9.78545 32.189 9.81491L31.8588 9.89727L32.1862 11.2101ZM38.8527 14.7338L38.8324 8.83195L37.965 8.83494L37.9601 7.43212L41.1559 7.42112L41.1608 8.82394L40.2933 8.82693L40.3136 14.7287L38.8527 14.7338ZM43.3591 15.0497C42.7573 14.9583 42.3397 14.7227 42.1063 14.343C41.8733 13.9606 41.8067 13.4411 41.9065 12.7846L42.71 7.49544L44.1133 7.70862L43.3185 12.9403C43.3002 13.0607 43.2894 13.178 43.2861 13.2922C43.2831 13.4037 43.3009 13.4988 43.3393 13.5774C43.3777 13.656 43.4517 13.7036 43.5611 13.7202C43.6732 13.7373 43.7591 13.7153 43.8188 13.6544C43.8788 13.5908 43.9228 13.5037 43.9508 13.3932C43.9815 13.2831 44.006 13.1679 44.0243 13.0476L44.8191 7.81584L46.2224 8.02902L45.4189 13.3182C45.3192 13.9747 45.1013 14.451 44.7653 14.747C44.4297 15.0402 43.9609 15.1411 43.3591 15.0497ZM45.7801 15.3564L47.9839 8.3921L50.1207 9.06829C50.4768 9.18098 50.72 9.34791 50.8503 9.56906C50.9814 9.78758 51.031 10.0529 50.999 10.3649C50.9705 10.6751 50.894 11.0267 50.7696 11.4198C50.6494 11.7997 50.5046 12.0876 50.3352 12.2836C50.1684 12.4804 49.9381 12.5802 49.6441 12.5829C49.8488 12.697 49.9672 12.8549 49.9992 13.0566C50.0346 13.2564 50.0089 13.4935 49.9221 13.7679L49.0881 16.4032L47.7151 15.9687L48.5778 13.2424C48.6421 13.0392 48.6395 12.9006 48.5701 12.8264C48.5042 12.7504 48.3789 12.6832 48.1943 12.6247L47.1888 15.8022L45.7801 15.3564ZM48.5841 11.4203L48.9205 11.5268C49.113 11.5877 49.2757 11.4085 49.4084 10.989C49.4944 10.7173 49.5296 10.5326 49.5141 10.4348C49.4987 10.337 49.4329 10.2698 49.3168 10.233L48.9923 10.1304L48.5841 11.4203ZM49.6813 16.5923L53.0496 10.1105L54.8063 11.0234C55.2777 11.2684 55.5603 11.5618 55.6539 11.9036C55.7513 12.2442 55.6629 12.6784 55.3886 13.2063L55.2412 13.4899C55.083 13.7943 54.8995 14.0123 54.6908 14.144C54.4845 14.2769 54.2544 14.3148 54.0003 14.2576C54.2542 14.4831 54.3595 14.7576 54.3161 15.0812C54.2764 15.4035 54.1551 15.7599 53.9522 16.1503C53.7341 16.5701 53.504 16.9168 53.2622 17.1902C53.0203 17.4637 52.7509 17.634 52.4541 17.7011C52.1573 17.7682 51.8186 17.7029 51.438 17.5052L49.6813 16.5923ZM53.0477 13.2106L53.3128 13.3484C53.4331 13.4109 53.5347 13.4045 53.6176 13.329C53.7004 13.2536 53.7757 13.1508 53.8433 13.0207L54.182 12.3688C54.2905 12.1601 54.2526 12.0079 54.0685 11.9122L53.796 11.7706L53.0477 13.2106ZM51.6704 16.176C52.0068 16.3508 52.2579 16.2786 52.4237 15.9594L52.8448 15.1492C52.9405 14.965 52.9875 14.8055 52.9859 14.6706C52.988 14.5345 52.913 14.4269 52.7608 14.3478L52.5214 14.2234L51.5453 16.1016C51.5968 16.1346 51.6385 16.1594 51.6704 16.176ZM54.7259 19.6057C54.2573 19.2575 54.0033 18.85 53.9642 18.3831C53.9289 17.9157 54.11 17.4143 54.5077 16.879L56.577 14.0939C56.95 13.592 57.3551 13.3018 57.7925 13.2235C58.2321 13.1468 58.6885 13.2842 59.1615 13.6357C59.6346 13.9872 59.8968 14.3836 59.948 14.825C60.0015 15.268 59.8417 15.7405 59.4688 16.2424L57.3995 19.0276C57.0018 19.5628 56.573 19.8802 56.113 19.9797C55.6569 20.0786 55.1945 19.9539 54.7259 19.6057ZM55.5379 18.5337C55.7155 18.6658 55.9323 18.5596 56.188 18.2154L58.3143 15.3536C58.5288 15.0649 58.5494 14.8562 58.3762 14.7275C58.1808 14.5822 57.9733 14.6573 57.7538 14.9527L55.6301 17.8112C55.4948 17.9933 55.4196 18.1408 55.4046 18.2538C55.3913 18.3645 55.4357 18.4578 55.5379 18.5337ZM59.4761 24.0497C59.0555 23.5323 58.8805 23.054 58.9514 22.6149C59.024 22.1778 59.3415 21.7307 59.904 21.2733L60.4579 20.823L61.3691 21.9436L60.6606 22.5197C60.5296 22.6261 60.4423 22.7293 60.3986 22.829C60.3588 22.9291 60.379 23.0286 60.4593 23.1273C60.5431 23.2304 60.6307 23.2768 60.7223 23.2666C60.8155 23.2585 60.9309 23.1986 61.0683 23.0869C61.2422 22.9455 61.3731 22.8105 61.4611 22.6819C61.5513 22.5515 61.614 22.4006 61.6494 22.2292C61.6887 22.0582 61.7181 21.84 61.7376 21.5745L61.8069 20.6729C61.8565 20.0014 62.1121 19.478 62.5736 19.1028C63.0567 18.71 63.5156 18.5223 63.9505 18.5396C64.3871 18.559 64.7782 18.7813 65.1238 19.2064C65.5462 19.7259 65.7071 20.2067 65.6065 20.6487C65.5076 21.0928 65.1758 21.5445 64.6112 22.0035L63.6738 20.8507L64.0635 20.5339C64.1408 20.471 64.1826 20.3996 64.1889 20.3196C64.1969 20.2418 64.1703 20.1653 64.1093 20.0901C64.0359 20 63.9561 19.9544 63.8696 19.9533C63.7871 19.9527 63.7061 19.9846 63.6267 20.0492C63.5472 20.1138 63.4788 20.2051 63.4214 20.3231C63.364 20.4411 63.3267 20.6123 63.3094 20.8367L63.213 22.001C63.195 22.2332 63.1607 22.4608 63.1102 22.6837C63.0618 22.9049 62.9723 23.1239 62.8418 23.3405C62.7134 23.5554 62.5172 23.7703 62.2532 23.985C61.7207 24.4179 61.2229 24.6586 60.7596 24.7072C60.3002 24.7562 59.8724 24.5371 59.4761 24.0497ZM60.9407 25.749L67.3076 22.1683L68.2536 23.8504C68.4517 24.2025 68.5299 24.5252 68.4885 24.8183C68.4484 25.1139 68.3087 25.3877 68.0695 25.6397C67.8302 25.8917 67.5105 26.1302 67.1101 26.3554C66.7243 26.5724 66.3668 26.7242 66.0378 26.8109C65.7111 26.8961 65.4152 26.8864 65.1499 26.7816C64.886 26.6793 64.655 26.452 64.457 26.0999L64.1661 25.5826L61.6447 27.0007L60.9407 25.749ZM65.3092 24.9397L65.3499 25.0121C65.4828 25.2484 65.6305 25.3558 65.793 25.3343C65.9555 25.3127 66.1658 25.2294 66.4238 25.0843C66.665 24.9486 66.8358 24.8177 66.9362 24.6914C67.0403 24.5661 67.0382 24.407 66.9297 24.2141L66.8503 24.073L65.3092 24.9397ZM62.9855 29.3933L69.7406 26.6136L70.2776 27.9185L63.5225 30.6983L62.9855 29.3933ZM63.8346 31.4921L70.8553 29.475L71.2702 30.9191L68.0931 32.5314L71.4559 31.5653L71.8455 32.9216L64.8248 34.9386L64.4306 33.5664L67.7392 31.8558L64.2289 32.8643L63.8346 31.4921Z" fill="url(#paint1_linear_10379_9948)"/>
<circle cx="40" cy="40" r="38.75" stroke="#09090B" stroke-width="2.5"/>
<path d="M53.403 52.1428L60 53.7444L45.7077 71L48.597 59.8585L42 58.2569L56.2923 41L53.403 52.1428Z" fill="url(#paint3_linear_10379_9948)"/>
<path d="M35.1522 37.8051L45 35.8362L37.3632 68L33.8491 51.1949L24 53.1638L31.6368 21L35.1522 37.8051Z" fill="url(#paint4_linear_10379_9948)"/>
<defs>
<linearGradient id="paint0_linear_10379_9948" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
<stop stop-color="#424242"/>
<stop offset="0.4" stop-color="#343434"/>
<stop offset="0.8" stop-color="#1E1E1E"/>
<stop offset="1" stop-color="#101010"/>
</linearGradient>
<linearGradient id="paint1_linear_10379_9948" x1="40" y1="18.25" x2="40" y2="59.3333" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDE68A"/>
<stop offset="0.663464" stop-color="#FDC700"/>
<stop offset="0.956737" stop-color="#D09600"/>
</linearGradient>
<linearGradient id="paint2_linear_10379_9948" x1="40" y1="24.2571" x2="40" y2="69" gradientUnits="userSpaceOnUse">
<stop offset="0.25" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint3_linear_10379_9948" x1="51" y1="44.75" x2="51" y2="66" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDE68A"/>
<stop offset="0.663464" stop-color="#FDC700"/>
<stop offset="0.956737" stop-color="#D09600"/>
</linearGradient>
<linearGradient id="paint4_linear_10379_9948" x1="34.5" y1="26.875" x2="34.5" y2="60.1667" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDE68A"/>
<stop offset="0.663464" stop-color="#FDC700"/>
<stop offset="0.956737" stop-color="#D09600"/>
</linearGradient>
</defs>
</svg>


`
  };
  svgHtml = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.svg["default"]));
  static \u0275fac = function ApIconHoldTurboSpinComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApIconHoldTurboSpinComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApIconHoldTurboSpinComponent, selectors: [["ap-icon-hold-turbo-spin"]], decls: 1, vars: 1, consts: [[1, "size-full", "[&>svg]:size-full", 3, "innerHTML"]], template: function ApIconHoldTurboSpinComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.svgHtml(), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApIconHoldTurboSpinComponent, [{
    type: Component,
    args: [{ selector: "ap-icon-hold-turbo-spin", imports: [], template: '<div class="size-full [&>svg]:size-full" [innerHTML]="svgHtml()"></div>', styles: ["/* src/app/icons/ap-icon.root.css */\n:host {\n  display: inline-block;\n  aspect-ratio: 1;\n}\n.inner-svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=ap-icon.root.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApIconHoldTurboSpinComponent, { className: "ApIconHoldTurboSpinComponent", filePath: "src/app/icons/ap-icon-hold-turbo-spin/ap-icon-hold-turbo-spin.component.ts", lineNumber: 9 });
})();

export {
  ApIconAutoplayCircleComponent,
  ApIconBlueCircleComponent,
  ApIconBuyFeatureCircleComponent,
  ApIconCampaignCircleComponent,
  ApIconDarkCircleComponent,
  ApIconDecreaseBoxComponent,
  ApIconGreenCircleComponent,
  ApIconIncreaseBoxComponent,
  ApIconSpinComponent,
  ApIconTurboCircleComponent,
  ApIconYellowCircleComponent,
  ApIconHoldTurboSpinComponent,
  ApHistoryPopupReplayEndComponent,
  ApIconBadgeComponent,
  ApButtonAutoSpinTimesComponent,
  ApButtonFreeSpinsComponent
};
//# sourceMappingURL=chunk-XYMPOXOA.js.map
