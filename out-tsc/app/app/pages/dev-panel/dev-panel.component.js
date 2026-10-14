import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../library/pipe/safe-url.pipe';
import { DemoGameScreenComponent } from '../../components/demo-game-screen/demo-game-screen.component';
import { ApMainBottomPanelComponent } from '../../components/ap-main-bottom-panel/ap-main-bottom-panel.component';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApUiFramePageComponent } from '../../components/ap-ui-frame-page/ap-ui-frame-page.component';
import { ApUiFramePopupComponent } from '../../components/ap-ui-frame-popup/ap-ui-frame-popup.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => ({});
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.subtitle;
function DevPanelComponent_For_6_Conditional_0_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ap-ui-card-dev", 0);
    i0.ɵɵelementContainer(3, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const c_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(v_r1.subtitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngComponentOutlet", c_r2.component)("ngComponentOutletInputs", v_r1.inputs || i0.ɵɵpureFunction0(3, _c0));
} }
function DevPanelComponent_For_6_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, DevPanelComponent_For_6_Conditional_0_For_1_Template, 4, 4, null, null, _forTrack1);
} if (rf & 2) {
    const c_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵrepeater(c_r2.variants);
} }
function DevPanelComponent_For_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ap-ui-card-dev", 0);
    i0.ɵɵelementContainer(1, 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", c_r2.component);
} }
function DevPanelComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, DevPanelComponent_For_6_Conditional_0_Template, 2, 0)(1, DevPanelComponent_For_6_Conditional_1_Template, 2, 1, "ap-ui-card-dev", 0);
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    i0.ɵɵconditional(c_r2.variants && c_r2.variants.length > 0 ? 0 : 1);
} }
export class DevPanelComponent {
    cards = [
        {
            title: 'ap-main-bottom-panel',
            component: ApMainBottomPanelComponent,
        },
        {
            title: 'demo-game-screen',
            component: DemoGameScreenComponent,
        },
        {
            title: 'ap-ui-frame-page',
            component: ApUiFramePageComponent,
        },
        {
            title: 'ap-ui-frame-popup',
            component: ApUiFramePopupComponent,
        },
    ];
    static ɵfac = function DevPanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevPanelComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevPanelComponent, selectors: [["dev-panel"]], decls: 8, vars: 3, consts: [["align", "center"], ["frameborder", "0", 1, "flex", "flex-col", "items-start", "w-full", "h-96", 3, "src"], [3, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "ngComponentOutlet"]], template: function DevPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Game panel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ap-ui-card-dev", 0);
            i0.ɵɵelement(3, "iframe", 1);
            i0.ɵɵpipe(4, "safeUrl");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(5, DevPanelComponent_For_6_Template, 2, 1, null, null, _forTrack0);
            i0.ɵɵelement(7, "ap-ui-toc-dev");
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("src", i0.ɵɵpipeBind1(4, 1, "/launch/demo"), i0.ɵɵsanitizeResourceUrl);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.cards);
        } }, dependencies: [CommonModule, i1.NgComponentOutlet, ApUiCardDevComponent,
            SafeUrlPipe,
            ApUiTocDevComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevPanelComponent, [{
        type: Component,
        args: [{ selector: 'dev-panel', imports: [
                    CommonModule,
                    ApUiCardDevComponent,
                    SafeUrlPipe,
                    ApUiTocDevComponent,
                ], template: "<h1>Game panel</h1>\n<ap-ui-card-dev align=\"center\">\n\n  <iframe\n    class=\"flex flex-col items-start w-full h-96\"\n    [src]=\"'/launch/demo' | safeUrl\"\n    frameborder=\"0\"\n  >\n  </iframe\n></ap-ui-card-dev>\n@for (c of cards; track c.title) { @if (c.variants && c.variants.length > 0) {\n@for (v of c.variants; track v.subtitle) {\n<h2>{{ v.subtitle }}</h2>\n<ap-ui-card-dev align=\"center\">\n  <!-- \u52D5\u614B\u63D2\u5165\u5C0D\u61C9\u7684\u5361\u7247\u5143\u4EF6 -->\n  <ng-container\n    [ngComponentOutlet]=\"c.component\"\n    [ngComponentOutletInputs]=\"v.inputs || {}\"\n  ></ng-container>\n</ap-ui-card-dev>\n\n} } @else {\n<ap-ui-card-dev align=\"center\">\n  <!-- \u52D5\u614B\u63D2\u5165\u5C0D\u61C9\u7684\u5361\u7247\u5143\u4EF6 -->\n  <ng-container [ngComponentOutlet]=\"c.component\"></ng-container>\n</ap-ui-card-dev>\n} }\n\n<ap-ui-toc-dev></ap-ui-toc-dev>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevPanelComponent, { className: "DevPanelComponent", filePath: "src/app/pages/dev-panel/dev-panel.component.ts", lineNumber: 33 }); })();
//# sourceMappingURL=dev-panel.component.js.map