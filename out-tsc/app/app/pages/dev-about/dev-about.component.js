import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class DevAboutComponent {
    static ɵfac = function DevAboutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevAboutComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevAboutComponent, selectors: [["dev-about"]], decls: 14, vars: 0, template: function DevAboutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "\u958B\u767C\u7528\u7DB2\u7AD9");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3, "\u95DC\u65BC\u672C\u7DB2\u7AD9");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, " \u9019\u662F\u4E00\u500B\u7528\u65BC\u5C55\u793A\u548C\u6E2C\u8A66\u5404\u5F0F\u5716\u793A\u7684\u7DB2\u9801\u5E73\u53F0\uFF0C\u8A2D\u8A08\u4EE5\u7C21\u6F54\u6613\u8B80\u70BA\u4E3B\uFF0C\u9069\u5408\u958B\u767C\u8005\u5728\u958B\u767C\u968E\u6BB5\u9A57\u8B49\u6A23\u5F0F\u8207\u6392\u7248\u3002\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7, "\u4F7F\u7528\u65B9\u5F0F");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, " \u6240\u6709\u6A19\u984C\u8207\u6BB5\u843D\u5167\u5BB9\u5747\u4F7F\u7528\u81EA\u8A02\u5143\u4EF6\u6A19\u7C64\u5448\u73FE\uFF0C\u642D\u914D Tailwind CSS \u9032\u884C\u6A23\u5F0F\u5957\u7528\u3002\u60A8\u53EF\u4EE5\u81EA\u7531\u4FEE\u6539\u6587\u5B57\u6216\u6392\u7248\uFF0C\u5FEB\u901F\u5EFA\u7ACB\u6E2C\u8A66\u9801\u9762\u3002\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "h2");
            i0.ɵɵtext(11, "\u5F8C\u7E8C\u8A08\u756B");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p");
            i0.ɵɵtext(13, " \u6211\u5011\u5C07\u6301\u7E8C\u65B0\u589E\u66F4\u591A UI \u5143\u4EF6\u652F\u63F4\u8207\u4E92\u52D5\u529F\u80FD\uFF0C\u8B93\u9019\u500B\u6E2C\u8A66\u5E73\u53F0\u66F4\u5B8C\u6574\uFF0C\u9069\u7528\u65BC\u5404\u985E\u958B\u767C\u9700\u6C42\u3002\n");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevAboutComponent, [{
        type: Component,
        args: [{ selector: 'dev-about', imports: [], template: "<h1>\u958B\u767C\u7528\u7DB2\u7AD9</h1>\n\n<h2>\u95DC\u65BC\u672C\u7DB2\u7AD9</h2>\n<p>\n  \u9019\u662F\u4E00\u500B\u7528\u65BC\u5C55\u793A\u548C\u6E2C\u8A66\u5404\u5F0F\u5716\u793A\u7684\u7DB2\u9801\u5E73\u53F0\uFF0C\u8A2D\u8A08\u4EE5\u7C21\u6F54\u6613\u8B80\u70BA\u4E3B\uFF0C\u9069\u5408\u958B\u767C\u8005\u5728\u958B\u767C\u968E\u6BB5\u9A57\u8B49\u6A23\u5F0F\u8207\u6392\u7248\u3002\n</p>\n\n<h2>\u4F7F\u7528\u65B9\u5F0F</h2>\n<p>\n  \u6240\u6709\u6A19\u984C\u8207\u6BB5\u843D\u5167\u5BB9\u5747\u4F7F\u7528\u81EA\u8A02\u5143\u4EF6\u6A19\u7C64\u5448\u73FE\uFF0C\u642D\u914D Tailwind CSS \u9032\u884C\u6A23\u5F0F\u5957\u7528\u3002\u60A8\u53EF\u4EE5\u81EA\u7531\u4FEE\u6539\u6587\u5B57\u6216\u6392\u7248\uFF0C\u5FEB\u901F\u5EFA\u7ACB\u6E2C\u8A66\u9801\u9762\u3002\n</p>\n\n<h2>\u5F8C\u7E8C\u8A08\u756B</h2>\n<p>\n  \u6211\u5011\u5C07\u6301\u7E8C\u65B0\u589E\u66F4\u591A UI \u5143\u4EF6\u652F\u63F4\u8207\u4E92\u52D5\u529F\u80FD\uFF0C\u8B93\u9019\u500B\u6E2C\u8A66\u5E73\u53F0\u66F4\u5B8C\u6574\uFF0C\u9069\u7528\u65BC\u5404\u985E\u958B\u767C\u9700\u6C42\u3002\n</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevAboutComponent, { className: "DevAboutComponent", filePath: "src/app/pages/dev-about/dev-about.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=dev-about.component.js.map