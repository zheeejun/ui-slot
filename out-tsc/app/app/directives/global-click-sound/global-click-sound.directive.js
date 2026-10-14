import { DOCUMENT } from '@angular/common';
import { Directive, DestroyRef, ElementRef, Renderer2, inject } from '@angular/core';
import { SoundService } from '../../services/sound-service/sound-service';
import * as i0 from "@angular/core";
const INTERACTIVE_SELECTORS = [
    'button',
    'a[href]',
    'summary',
    'label[for]',
    'input[type="button"]',
    'input[type="submit"]',
    'input[type="reset"]',
    '[role="button"]',
    '[role="link"]',
    '[role="tab"]',
    '[role="switch"]',
    '[role="checkbox"]',
    '[role="radio"]',
    '[role="menuitem"]',
    '[data-click-sound]',
    '[tabindex]:not([tabindex="-1"])',
    '.cursor-pointer',
].join(', ');
const EXCLUDED_SELECTORS = [
    '[data-no-click-sound]',
    '.no-click-sound',
].join(', ');
const DISABLED_SELECTORS = [
    '[disabled]',
    '[aria-disabled="true"]',
    '.disabled',
    '.is-disabled',
    '.cursor-not-allowed',
    '.pointer-events-none',
].join(', ');
export class GlobalClickSoundDirective {
    document = inject(DOCUMENT);
    elementRef = inject((ElementRef));
    renderer = inject(Renderer2);
    destroyRef = inject(DestroyRef);
    soundService = inject(SoundService);
    constructor() {
        const removeClickListener = this.renderer.listen(this.document, 'click', (event) => this.handleDocumentClick(event));
        this.destroyRef.onDestroy(removeClickListener);
    }
    handleDocumentClick(event) {
        if (!event.isTrusted || event.defaultPrevented || event.button !== 0) {
            return;
        }
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }
        const rootElement = this.elementRef.nativeElement;
        const interactiveTarget = target.closest(INTERACTIVE_SELECTORS);
        if (!interactiveTarget || !rootElement.contains(interactiveTarget)) {
            return;
        }
        if (interactiveTarget.closest(EXCLUDED_SELECTORS)) {
            return;
        }
        if (this.isDisabled(interactiveTarget)) {
            return;
        }
        this.soundService.playClick();
    }
    isDisabled(element) {
        const disabledElement = element.closest(DISABLED_SELECTORS);
        if (!disabledElement) {
            return false;
        }
        if (disabledElement instanceof HTMLButtonElement) {
            return disabledElement.disabled;
        }
        if (disabledElement instanceof HTMLInputElement) {
            return disabledElement.disabled;
        }
        const ariaDisabled = disabledElement.getAttribute('aria-disabled');
        if (ariaDisabled === 'true') {
            return true;
        }
        return true;
    }
    static ɵfac = function GlobalClickSoundDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GlobalClickSoundDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: GlobalClickSoundDirective, selectors: [["", "appGlobalClickSound", ""]] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalClickSoundDirective, [{
        type: Directive,
        args: [{
                selector: '[appGlobalClickSound]',
                standalone: true,
            }]
    }], () => [], null); })();
//# sourceMappingURL=global-click-sound.directive.js.map