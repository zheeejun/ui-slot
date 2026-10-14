import { Routes } from '@angular/router';
import { LayoutModeSelectComponent } from './layouts/layout-mode-select/layout-mode-select.component';
import { devRoutes } from './dev.routes';

export const routes: Routes = [
  { path: '', component: LayoutModeSelectComponent },
  { 
    path: 'bridge',
    loadComponent: () => import('./layouts/layout-bridge/layout-bridge.component').then(m => m.LayoutBridgeComponent) 
  },
  { 
    path: 'cover',
    loadComponent: () => import('./layouts/layout-cover/layout-cover.component').then(m => m.LayoutCoverComponent) 
  },
  { 
    path: 'ghana',
    loadComponent: () => import('./layouts/layout-ghana/layout-ghana.component').then(m => m.LayoutGhanaComponent)
  },
  {
    path: 'replay',
    loadComponent: () => import('./layouts/layout-replay/layout-replay.component').then( (m) => m.LayoutReplayComponent),
  },
  {
    path: 'og',
    loadComponent: () => import('./layouts/layout-og/layout-og.component').then(m => m.LayoutOgComponent)
  },
  {
    path: 'bo',
    loadComponent: () => import('./layouts/layout-bo/layout-bo.component').then(m => m.LayoutBoComponent)
  },
  {
    path: 'socket',
    loadComponent: () => import('./layouts/layout-socket/layout-socket.component').then(m => m.LayoutSocketComponent)
  },
  ...devRoutes,
];
