import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalClickSoundDirective } from './directives/global-click-sound/global-click-sound.directive';
import * as i0 from "@angular/core";
import * as i1 from "./directives/global-click-sound/global-click-sound.directive";
import * as i2 from "@angular/router";
export class AppComponent {
    title = 'Angular App with Routing';
    constructor() {
    }
    static ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], features: [i0.ɵɵHostDirectivesFeature([i1.GlobalClickSoundDirective])], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, dependencies: [RouterModule, i2.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [RouterModule], hostDirectives: [GlobalClickSoundDirective], template: "<router-outlet></router-outlet>\n", styles: [":host {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=app.component.js.map