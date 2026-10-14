import { Routes } from '@angular/router';
import { DevIconsComponent } from './pages/dev-icons/dev-icons.component';
import { DevTrnComponent } from './pages/dev-trn/dev-trn.component';
import { DevBuyFeatureComponent } from './pages/dev-buy-feature/dev-buy-feature.component';
import { DevPopupComponent } from './pages/dev-popup/dev-popup.component';
import { DevAboutComponent } from './pages/dev-about/dev-about.component';
import { DevButtonComponent } from './pages/dev-button/dev-button.component';
import { DevMessageComponent } from './pages/dev-message/dev-message.component';
import { DevInputComponent } from './pages/dev-input/dev-input.component';
import { DevCampaignComponent } from './pages/dev-campaign/dev-campaign.component';
import { DevCashDropComponent } from './pages/dev-cashdrop/dev-cashdrop.component';
import { DevPromoCodeComponent } from './pages/dev-promo-code/dev-promo-code.component';
import { DevHistoryComponent } from './pages/dev-history/dev-history.component';
import { DevComponent } from './pages/dev-component/dev-component.component';
import { DevMiscComponent } from './pages/dev-misc/dev-misc.component';
import { DevMenuComponent } from './pages/dev-menu/dev-menu.component';
import { DevCampaignDemoComponent } from './pages/dev-campaign-demo/dev-campaign-demo.component';
import { DevOgShowcaseComponent } from './pages/dev-og-showcase/dev-og-showcase.component';
import { Dev10098ShowcaseComponent } from './pages/dev-10098-showcase/dev-10098-showcase.component';
import { Dev38011ShowcaseComponent } from './pages/dev-38011-showcase/dev-38011-showcase.component';

export const devPageRoutes: Routes = [
  { path: 'icons', component: DevIconsComponent },
  { path: 'trn', component: DevTrnComponent },
  { path: 'feature', component: DevBuyFeatureComponent },
  { path: 'popup', component: DevPopupComponent },
  { path: 'about', component: DevAboutComponent },
  { path: 'button', component: DevButtonComponent },
  { path: 'message', component: DevMessageComponent },
  { path: 'input', component: DevInputComponent },
  { path: 'campaign', component: DevCampaignComponent },
  { path: 'campaigndemo', component: DevCampaignDemoComponent },
  { path: 'cashdrop', component: DevCashDropComponent },
  { path: 'promo-code', component: DevPromoCodeComponent },
  { path: 'history', component: DevHistoryComponent },
  { path: 'component', component: DevComponent },
  { path: 'misc', component: DevMiscComponent },
  { path: 'menu', component: DevMenuComponent },
  { path: 'og', component: DevOgShowcaseComponent },
  { path: '10098', component: Dev10098ShowcaseComponent },
  { path: '38011', component: Dev38011ShowcaseComponent },
  { path: '', redirectTo: 'icons', pathMatch: 'full' },
];

export const devRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./layouts/layout-login/layout-login.component').then((m) => m.LayoutLoginComponent),
  },
  {
    path: 'demo',
    loadComponent: () => import('./layouts/layout-demo/layout-demo.component').then((m) => m.LayoutDemoComponent),
  },
  {
    path: 'lab',
    loadComponent: () => import('./layouts/layout-lab/layout-lab.component').then((m) => m.LayoutLabComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./layouts/layout-mode-select/layout-mode-select.component').then((m) => m.LayoutModeSelectComponent),
      },
      {
        path: 'demo',
        loadComponent: () => import('./layouts/layout-demo/layout-demo.component').then((m) => m.LayoutDemoComponent),
      },
      {
        path: 'cover',
        loadComponent: () => import('./layouts/layout-cover/layout-cover.component').then((m) => m.LayoutCoverComponent),
      },
      {
        path: 'bridge',
        loadComponent: () => import('./layouts/layout-bridge/layout-bridge.component').then((m) => m.LayoutBridgeComponent),
      },
      {
        path: 'ghana',
        loadComponent: () => import('./layouts/layout-ghana/layout-ghana.component').then((m) => m.LayoutGhanaComponent),
      },
      {
        path: 'og',
        loadComponent: () => import('./layouts/layout-og/layout-og.component').then((m) => m.LayoutOgComponent),
      },
    ],
  },
  {
    path: 'dev',
    loadComponent: () => import('./layouts/layout-dev/layout-dev.component').then((m) => m.LayoutDevComponent),
    children: devPageRoutes,
  },
];
