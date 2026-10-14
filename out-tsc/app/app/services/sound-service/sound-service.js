import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as i0 from "@angular/core";
export class SoundService {
    document;
    throttleMs = 100;
    sounds = {
        click: {
            src: 'assets/sounds/ap_button.wav',
            volume: 1,
        },
    };
    audioMap = new Map();
    isBrowser;
    lastPlayedAt = 0;
    unlocked = false;
    muted = false;
    masterVolume = 1;
    removeUnlockListeners = [];
    constructor(document, platformId) {
        this.document = document;
        this.isBrowser = isPlatformBrowser(platformId);
        if (!this.isBrowser) {
            return;
        }
        this.preloadAll();
        this.bindUnlockListeners();
    }
    playClick() {
        this.play('click');
    }
    play(type) {
        if (!this.isBrowser || !this.unlocked || this.muted) {
            return;
        }
        const now = Date.now();
        if (now - this.lastPlayedAt < this.throttleMs) {
            return;
        }
        const audio = this.audioMap.get(type);
        if (!audio) {
            return;
        }
        this.lastPlayedAt = now;
        audio.currentTime = 0;
        void audio.play().catch(() => {
            this.unlocked = false;
            this.bindUnlockListeners();
        });
    }
    setMuted(muted) {
        this.muted = muted;
    }
    setVolume(volume) {
        this.masterVolume = Math.min(Math.max(volume, 0), 1);
        for (const [type, audio] of this.audioMap.entries()) {
            audio.volume = this.sounds[type].volume * this.masterVolume;
        }
    }
    preloadAll() {
        for (const [type, options] of Object.entries(this.sounds)) {
            const audio = new Audio(options.src);
            audio.preload = 'auto';
            audio.volume = options.volume * this.masterVolume;
            audio.load();
            this.audioMap.set(type, audio);
        }
    }
    bindUnlockListeners() {
        if (this.unlocked || this.removeUnlockListeners.length > 0) {
            return;
        }
        const unlockAudio = () => {
            void this.unlockAudio();
        };
        const listenerOptions = { passive: true };
        const events = ['pointerdown', 'touchstart', 'keydown'];
        for (const eventName of events) {
            this.document.addEventListener(eventName, unlockAudio, listenerOptions);
            this.removeUnlockListeners.push(() => {
                this.document.removeEventListener(eventName, unlockAudio, listenerOptions);
            });
        }
    }
    async unlockAudio() {
        const clickAudio = this.audioMap.get('click');
        if (!clickAudio) {
            return;
        }
        this.clearUnlockListeners();
        try {
            clickAudio.muted = true;
            clickAudio.currentTime = 0;
            await clickAudio.play();
            clickAudio.pause();
            clickAudio.currentTime = 0;
            clickAudio.muted = false;
            this.unlocked = true;
        }
        catch {
            clickAudio.muted = false;
            this.unlocked = false;
            this.bindUnlockListeners();
        }
    }
    clearUnlockListeners() {
        for (const removeListener of this.removeUnlockListeners) {
            removeListener();
        }
        this.removeUnlockListeners = [];
    }
    static ɵfac = function SoundService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SoundService)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(PLATFORM_ID)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SoundService, factory: SoundService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SoundService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }], null); })();
//# sourceMappingURL=sound-service.js.map