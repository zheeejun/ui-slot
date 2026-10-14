import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,  withRouterConfig } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideRouter(routes, withRouterConfig({onSameUrlNavigation: 'reload'}),),
    provideAnimationsAsync(),
  ]
};
