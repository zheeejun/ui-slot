import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ICON_MAP_TOKEN } from '../ap-components-lib/ap-icon/ap-icon-map-token';
import { ICON_MAP } from './components/ap-icon-all/ap-icon-all-map';
export const appConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
        provideRouter(routes, withRouterConfig({ onSameUrlNavigation: 'reload' })),
        provideAnimationsAsync(),
        { provide: ICON_MAP_TOKEN, useValue: ICON_MAP },
    ]
};
//# sourceMappingURL=app.config.js.map