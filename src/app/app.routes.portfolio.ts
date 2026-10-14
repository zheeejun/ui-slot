import { Routes } from '@angular/router';
import { devPageRoutes } from './dev.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'dev/menu', pathMatch: 'full' },
  {
    path: 'dev',
    loadComponent: () => import('./layouts/layout-dev/layout-dev.component').then((m) => m.LayoutDevComponent),
    children: devPageRoutes,
  },
  { path: '**', redirectTo: 'dev/menu' },
];
