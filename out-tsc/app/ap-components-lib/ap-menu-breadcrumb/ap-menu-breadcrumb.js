import { Component, input } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = a0 => [a0];
const _forTrack0 = ($index, $item) => $item.url ?? $item.label;
function ApMenuBreadcrumb_Conditional_0_For_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 1);
    i0.ɵɵtext(1, "/");
    i0.ɵɵelementEnd();
} }
function ApMenuBreadcrumb_Conditional_0_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(breadcrumb_r1.label);
} }
function ApMenuBreadcrumb_Conditional_0_For_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ApMenuBreadcrumb_Conditional_0_For_2_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const breadcrumb_r1 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onBreadcrumbClick(breadcrumb_r1)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", breadcrumb_r1.label, " ");
} }
function ApMenuBreadcrumb_Conditional_0_For_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, breadcrumb_r1.url));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", breadcrumb_r1.label, " ");
} }
function ApMenuBreadcrumb_Conditional_0_For_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(breadcrumb_r1.label);
} }
function ApMenuBreadcrumb_Conditional_0_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApMenuBreadcrumb_Conditional_0_For_2_Conditional_0_Template, 2, 0, "span", 1);
    i0.ɵɵconditionalCreate(1, ApMenuBreadcrumb_Conditional_0_For_2_Conditional_1_Template, 2, 1, "span", 2)(2, ApMenuBreadcrumb_Conditional_0_For_2_Conditional_2_Template, 2, 1, "button", 3)(3, ApMenuBreadcrumb_Conditional_0_For_2_Conditional_3_Template, 2, 4, "a", 4)(4, ApMenuBreadcrumb_Conditional_0_For_2_Conditional_4_Template, 2, 1, "span", 5);
} if (rf & 2) {
    const breadcrumb_r1 = ctx.$implicit;
    const ɵ$index_4_r4 = ctx.$index;
    const ɵ$count_4_r5 = ctx.$count;
    i0.ɵɵconditional(!(ɵ$index_4_r4 === 0) ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ɵ$index_4_r4 === ɵ$count_4_r5 - 1 ? 1 : breadcrumb_r1.onClick ? 2 : breadcrumb_r1.url ? 3 : 4);
} }
function ApMenuBreadcrumb_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 0);
    i0.ɵɵrepeaterCreate(1, ApMenuBreadcrumb_Conditional_0_For_2_Template, 5, 2, null, null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.displayBreadcrumbs);
} }
export class ApMenuBreadcrumb {
    router;
    activatedRoute;
    items = input([]);
    hidden = input(false);
    breadcrumbs = [];
    get displayBreadcrumbs() {
        const items = this.items();
        if (items.length > 0)
            return items;
        return [
            { label: 'Home', url: '/dashboard' },
            ...this.breadcrumbs,
        ];
    }
    routeLabels = {
        dashboard: 'Dashboard',
        home: 'Home',
        users: 'Users',
        trn: 'Tournament',
        create: 'Create New Tournament',
        list: 'Tournament List',
        report: 'Tournament Report',
        help: 'Help',
    };
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd), distinctUntilChanged())
            .subscribe(() => {
            this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
        });
        // Initial breadcrumbs
        this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
    }
    onBreadcrumbClick(item) {
        item.onClick?.();
    }
    buildBreadcrumbs(route, url = '', breadcrumbs = []) {
        const children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            const routeURL = child.snapshot.url.map((segment) => segment.path).join('/');
            if (routeURL !== '') {
                url += `/${routeURL}`;
                // Get label from route data or use path segment
                const label = child.snapshot.data['breadcrumb'] || this.getLabel(routeURL);
                breadcrumbs.push({ label, url });
            }
            return this.buildBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
    getLabel(path) {
        // Split path and get label for each segment
        const segments = path.split('/');
        const lastSegment = segments[segments.length - 1];
        return this.routeLabels[lastSegment] || this.capitalize(lastSegment);
    }
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static ɵfac = function ApMenuBreadcrumb_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApMenuBreadcrumb)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApMenuBreadcrumb, selectors: [["ap-menu-breadcrumb"]], inputs: { items: [1, "items"], hidden: [1, "hidden"] }, decls: 1, vars: 1, consts: [[1, "flex", "flex-wrap", "items-center", "gap-2", "text-sm", "text-zinc-400", "py-3", "px-2"], [1, "text-zinc-300", "dark:text-zinc-100"], [1, "text-zinc-500", "font-medium", "dark:text-zinc-300"], ["type", "button", 1, "border-0", "bg-transparent", "p-0", "text-zinc-500", "hover:text-orange-500", "font-medium", "dark:text-zinc-100", "dark:hover:text-orange-400", "transition-colors", "duration-200", "cursor-pointer"], [1, "text-zinc-400", "hover:text-orange-500", "font-medium", "dark:text-zinc-100", "dark:hover:text-orange-400", "transition-colors", "duration-200", 3, "routerLink"], [1, "text-zinc-400", "font-medium", "dark:text-zinc-100"], ["type", "button", 1, "border-0", "bg-transparent", "p-0", "text-zinc-500", "hover:text-orange-500", "font-medium", "dark:text-zinc-100", "dark:hover:text-orange-400", "transition-colors", "duration-200", "cursor-pointer", 3, "click"]], template: function ApMenuBreadcrumb_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ApMenuBreadcrumb_Conditional_0_Template, 3, 0, "nav", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(!ctx.hidden() ? 0 : -1);
        } }, dependencies: [CommonModule, RouterModule, i1.RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApMenuBreadcrumb, [{
        type: Component,
        args: [{ selector: 'ap-menu-breadcrumb', imports: [CommonModule, RouterModule], template: "@if (!hidden()) {\n  <nav class=\"flex flex-wrap items-center gap-2 text-sm text-zinc-400 py-3 px-2\">\n    @for (breadcrumb of displayBreadcrumbs; track breadcrumb.url ?? breadcrumb.label; let isLast = $last) {\n      @if (!$first) {\n        <span class=\"text-zinc-300 dark:text-zinc-100\">/</span>\n      }\n\n      @if (isLast) {\n        <span class=\"text-zinc-500 font-medium dark:text-zinc-300\">{{ breadcrumb.label }}</span>\n      } @else if (breadcrumb.onClick) {\n        <button\n          type=\"button\"\n          class=\"border-0 bg-transparent p-0 text-zinc-500 hover:text-orange-500 font-medium dark:text-zinc-100 dark:hover:text-orange-400 transition-colors duration-200 cursor-pointer\"\n          (click)=\"onBreadcrumbClick(breadcrumb)\"\n        >\n          {{ breadcrumb.label }}\n        </button>\n      } @else if (breadcrumb.url) {\n        <a\n          [routerLink]=\"[breadcrumb.url]\"\n          class=\"text-zinc-400 hover:text-orange-500 font-medium dark:text-zinc-100 dark:hover:text-orange-400 transition-colors duration-200\"\n        >\n          {{ breadcrumb.label }}\n        </a>\n      } @else {\n        <span class=\"text-zinc-400 font-medium dark:text-zinc-100\">{{ breadcrumb.label }}</span>\n      }\n    }\n  </nav>\n}\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], () => [{ type: i1.Router }, { type: i1.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApMenuBreadcrumb, { className: "ApMenuBreadcrumb", filePath: "src/ap-components-lib/ap-menu-breadcrumb/ap-menu-breadcrumb.ts", lineNumber: 24 }); })();
//# sourceMappingURL=ap-menu-breadcrumb.js.map