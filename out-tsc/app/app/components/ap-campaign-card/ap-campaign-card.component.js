import { Component, computed, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApTagComponent } from '../../../ap-components-lib/ap-tag/ap-tag.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';
import { defaultCampaignGroups } from '../../pages/event-campaign-cards/event-campaign-data';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ApCampaignCardComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ap-tag", 1);
} if (rf & 2) {
    i0.ɵɵproperty("label", "new")("severity", "danger");
} }
export class ApCampaignCardComponent {
    appI18n = inject(AppI18nService);
    campaignGroup = input(defaultCampaignGroups[0]);
    isDisabled = signal(false);
    isNew = input(false);
    imageAlt = signal('Campaign Banner');
    id = computed(() => this.campaignGroup().id);
    image = computed(() => this.campaignGroup().image);
    title = computed(() => this.campaignGroup().title);
    description = computed(() => this.campaignGroup().description);
    endDateLabel = computed(() => {
        // EndsOn_Text 這字串用不到 {0}
        return this.appI18n.computed('EndsOn_Text', 'Ends On:')().replace('{0}', '');
    });
    /** unix timestamp milliseconds */
    endDate = computed(() => this.campaignGroup().endTime);
    static ɵfac = function ApCampaignCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApCampaignCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApCampaignCardComponent, selectors: [["ap-campaign-card"]], inputs: { campaignGroup: [1, "campaignGroup"], isNew: [1, "isNew"] }, decls: 16, vars: 10, consts: [[1, "relative"], [1, "absolute", "-top-2", "-right-2", "-translate-y-1/8", "z-sticky", 3, "label", "severity"], [1, "rounded-xl", "border-2", "border-transparent", "[background:linear-gradient(#27272A)_padding-box,linear-gradient(180deg,#FFF085,#D09600)_border-box]", "select-none", "cursor-pointer"], [1, "relative", "text-center", "w-60", "bg-zinc-800", "rounded-xl", "overflow-hidden"], [1, "relative", "w-full", "h-20"], [1, "w-full", "h-full", "object-cover", 2, "aspect-ratio", "670 / 223", 3, "src", "alt"], [1, "p-1", "px-2", "space-y-1"], [1, "py-1"], [1, "font-anton", "text-yellow-gradient", "text-3xl", "tracking-wide", "line-clamp-1", "uppercase"], [1, "w-full", "divider-gradient-yellow", "opacity-80", "mx-auto"], [1, "p-1", "text-zinc-300", "text-sm", "text-left", "line-clamp-2", "mb-4"], [1, "text-xs", "text-zinc-400", "italic"]], template: function ApCampaignCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, ApCampaignCardComponent_Conditional_1_Template, 1, 2, "ap-tag", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵelement(5, "img", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6)(7, "div", 7)(8, "div", 8);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(10, "div", 9);
            i0.ɵɵelementStart(11, "div", 10);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 11);
            i0.ɵɵtext(14);
            i0.ɵɵpipe(15, "date");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isNew() ? 1 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("src", ctx.image(), i0.ɵɵsanitizeUrl)("alt", ctx.imageAlt());
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.title(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.description(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.endDateLabel(), " ", i0.ɵɵpipeBind2(15, 7, ctx.endDate(), "yyyy-MM-dd hh:mm"), " ");
        } }, dependencies: [CommonModule, i1.DatePipe, ApTagComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApCampaignCardComponent, [{
        type: Component,
        args: [{ selector: 'ap-campaign-card', standalone: true, imports: [CommonModule, ApTagComponent], template: "<div class=\"relative\">\n  @if (isNew()) {\n    <ap-tag\n      class=\"absolute -top-2 -right-2 -translate-y-1/8 z-sticky\"\n      [label]=\"'new'\"\n      [severity]=\"'danger'\"\n    />\n  }\n  <div\n    class=\"rounded-xl border-2 border-transparent [background:linear-gradient(#27272A)_padding-box,linear-gradient(180deg,#FFF085,#D09600)_border-box] select-none cursor-pointer\"\n  >\n    <div\n      class=\"relative text-center w-60 bg-zinc-800 rounded-xl overflow-hidden\"\n    >\n      <!-- Banner Image -->\n      <div class=\"relative w-full h-20\">\n        <img\n          [src]=\"image()\"\n          [alt]=\"imageAlt()\"\n          class=\"w-full h-full object-cover\"\n          style=\"aspect-ratio: 670 / 223\"\n        />\n      </div>\n\n      <!-- Content -->\n      <div class=\"p-1 px-2 space-y-1\">\n        <!-- Title -->\n        <div class=\"py-1\">\n          <div\n            class=\"font-anton text-yellow-gradient text-3xl tracking-wide line-clamp-1 uppercase\"\n          >\n            {{ title() }}\n          </div>\n        </div>\n        <!-- Divider Line -->\n        <div class=\"w-full divider-gradient-yellow opacity-80 mx-auto\"></div>\n\n        <!-- Description -->\n        <div class=\"p-1 text-zinc-300 text-sm text-left line-clamp-2 mb-4\">\n          {{ description() }}\n        </div>\n\n        <!-- End Date -->\n        <div class=\"text-xs text-zinc-400 italic\">\n          {{ endDateLabel() }} {{ endDate() | date: 'yyyy-MM-dd hh:mm' }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApCampaignCardComponent, { className: "ApCampaignCardComponent", filePath: "src/app/components/ap-campaign-card/ap-campaign-card.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=ap-campaign-card.component.js.map