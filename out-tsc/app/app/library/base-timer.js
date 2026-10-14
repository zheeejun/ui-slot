import { timer } from 'rxjs';
import { isDevMode } from '@angular/core';
export class BaseTimer {
    delayResolve;
    rxjsTimer;
    async delay(time) {
        if (isDevMode() && this.delayResolve) {
            throw new Error('Delay already in progress');
        }
        if (time <= 0)
            return;
        return new Promise((resolve) => {
            this.delayResolve = resolve;
            this.rxjsTimer = timer(time * 1000).subscribe(this.onFinished.bind(this));
        });
    }
    onFinished() {
        if (this.delayResolve) {
            this.delayResolve();
            this.delayResolve = null;
        }
    }
    setFinished() {
        if (this.rxjsTimer)
            this.rxjsTimer.unsubscribe();
        this.onFinished();
    }
}
//# sourceMappingURL=base-timer.js.map