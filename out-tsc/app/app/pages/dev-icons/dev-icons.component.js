import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { ApUiTocDevComponent } from '../../components/ap-ui-toc-dev/ap-ui-toc-dev.component';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ApIconListComponent } from '../../../ap-components-lib/ap-icon-list/ap-icon-list.component';
import * as i0 from "@angular/core";
export class DevIconsComponent {
    static ɵfac = function DevIconsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DevIconsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevIconsComponent, selectors: [["dev-icons"]], decls: 33, vars: 0, consts: [[1, "list-outside", "list-disc", "ml-6", "mb-4", "text-zinc-300"], [1, "text-center", "text-white", "space-x-2"], ["name", "speaker-wave pressed", 1, "size-12"], ["name", "star", 1, "size-12"], ["name", "document-text", 1, "h-12", "w-12"]], template: function DevIconsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Icon");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ul", 0)(3, "li");
            i0.ɵɵtext(4, " \u6BCF\u4E00\u500B\u5716\u793A\u7684\u540D\u7A31\u70BA: ");
            i0.ɵɵelementStart(5, "code");
            i0.ɵɵtext(6, "[\u540D\u7A31 \u985E\u5225]");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, "\u3002 \u4F8B\u5982\u4F7F\u7528\u6642\u76F4\u63A5 ");
            i0.ɵɵelementStart(8, "code");
            i0.ɵɵtext(9, "[speaker-wave pressed]");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "li");
            i0.ɵɵtext(11, "\u5982\u679C\u6C92\u6709\u4EE3\u5165\u985E\u5225\u5C31\u662F\u4F7F\u7528 default \u985E\u5225\u3002");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "li");
            i0.ɵɵtext(13, "\u8A18\u5F97\u8981\u6307\u5B9A\u5716\u793A\u5927\u5C0F\u3002");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 1);
            i0.ɵɵelement(15, "ap-icon", 2)(16, "ap-icon", 3)(17, "ap-icon", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "ap-ui-card-dev")(19, "pre")(20, "code");
            i0.ɵɵtext(21, "\n    <ap-icon name=\"speaker-wave pressed\"/>\n    <ap-icon name=\"star\"/>\n    <ap-icon name=\"document-text\" class=\"h-12 w-12\"/>\n  ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(22, "p");
            i0.ɵɵtext(23, "\u8ACB\u6839\u64DA\u5716\u793A\u7528\u9014\u9078\u64C7\u5C0D\u61C9\u7684\u5206\u985E\u6A94\u6848\uFF0C\u4E26\u76F4\u63A5\u8CBC ");
            i0.ɵɵelementStart(24, "code");
            i0.ɵɵtext(25, "<svg>");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " \u683C\u5F0F");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "ap-ui-card-dev")(28, "pre")(29, "code");
            i0.ɵɵtext(30, "\n    'name': {\n      default: `<svg></svg>`,\n      hover: `<svg></svg>`,\n      pressed: `<svg></svg>`,\n      disabled: `<svg></svg>`,\n    }\n  ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(31, "ap-icon-list")(32, "ap-ui-toc-dev");
        } }, dependencies: [CommonModule,
            ApUiCardDevComponent,
            ApUiTocDevComponent,
            ApIconComponent,
            ApIconListComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevIconsComponent, [{
        type: Component,
        args: [{ selector: 'dev-icons', imports: [
                    CommonModule,
                    ApUiCardDevComponent,
                    ApUiTocDevComponent,
                    ApIconComponent,
                    ApIconListComponent,
                ], template: "<h1>Icon</h1>\n<ul class=\"list-outside list-disc ml-6 mb-4 text-zinc-300\">\n  <li>\n    \u6BCF\u4E00\u500B\u5716\u793A\u7684\u540D\u7A31\u70BA: <code>[\u540D\u7A31 \u985E\u5225]</code>\u3002 \u4F8B\u5982\u4F7F\u7528\u6642\u76F4\u63A5\n    <code>[speaker-wave pressed]</code>\n  </li>\n  <li>\u5982\u679C\u6C92\u6709\u4EE3\u5165\u985E\u5225\u5C31\u662F\u4F7F\u7528 default \u985E\u5225\u3002</li>\n  <li>\u8A18\u5F97\u8981\u6307\u5B9A\u5716\u793A\u5927\u5C0F\u3002</li>\n</ul>\n\n<div class=\"text-center text-white space-x-2\">\n  <ap-icon name=\"speaker-wave pressed\" class=\"size-12\"></ap-icon>\n  <ap-icon name=\"star\" class=\"size-12\"></ap-icon>\n  <ap-icon name=\"document-text\" class=\"h-12 w-12\"></ap-icon>\n</div>\n\n<ap-ui-card-dev>\n  <pre><code>\n    &lt;ap-icon name=\"speaker-wave pressed\"/&gt;\n    &lt;ap-icon name=\"star\"/&gt;\n    &lt;ap-icon name=\"document-text\" class=\"h-12 w-12\"/&gt;\n  </code></pre>\n</ap-ui-card-dev>\n\n<p>\u8ACB\u6839\u64DA\u5716\u793A\u7528\u9014\u9078\u64C7\u5C0D\u61C9\u7684\u5206\u985E\u6A94\u6848\uFF0C\u4E26\u76F4\u63A5\u8CBC <code>&lt;svg&gt;</code> \u683C\u5F0F</p>\n\n<ap-ui-card-dev>\n  <pre><code>\n    'name': &#123;\n      default: `&lt;svg&gt;&lt;/svg&gt;`,\n      hover: `&lt;svg&gt;&lt;/svg&gt;`,\n      pressed: `&lt;svg&gt;&lt;/svg&gt;`,\n      disabled: `&lt;svg&gt;&lt;/svg&gt;`,\n    &#125;\n  </code></pre>\n</ap-ui-card-dev>\n\n<ap-icon-list></ap-icon-list>\n\n<ap-ui-toc-dev></ap-ui-toc-dev>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DevIconsComponent, { className: "DevIconsComponent", filePath: "src/app/pages/dev-icons/dev-icons.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=dev-icons.component.js.map