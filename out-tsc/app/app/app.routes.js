import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { environment } from '../environments/app-environment';
const devRoutes = [
    {
        path: 'login',
        loadComponent: () => import('./layouts/login-layout/login-layout.component').then((m) => m.LoginLayoutComponent),
    },
    {
        path: 'demo',
        loadComponent: () => import('./layouts/demo-layout/demo-layout.component').then((m) => m.DemoLayoutComponent),
    },
    {
        path: 'lab',
        loadComponent: () => import('./layouts/lab-layout/lab-layout.component').then((m) => m.LabLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./layouts/app-layout/app-layout.component').then((m) => m.AppLayoutComponent),
            },
            {
                path: 'demo',
                loadComponent: () => import('./layouts/demo-layout/demo-layout.component').then((m) => m.DemoLayoutComponent),
            },
        ],
    },
    {
        path: 'dev',
        loadComponent: () => import('./layouts/dev-layout/dev-layout.component').then((m) => m.DevLayoutComponent),
        children: [
            {
                path: 'icons',
                loadComponent: () => import('./pages/dev-icons/dev-icons.component').then((m) => m.DevIconsComponent),
            },
            {
                path: 'trn',
                loadComponent: () => import('./pages/dev-trn/dev-trn.component').then((m) => m.DevTrnComponent),
            },
            {
                path: 'feature',
                loadComponent: () => import('./pages/dev-buy-feature/dev-buy-feature.component').then((m) => m.DevBuyFeatureComponent),
            },
            {
                path: 'popup',
                loadComponent: () => import('./pages/dev-popup/dev-popup.component').then((m) => m.DevPopupComponent),
            },
            {
                path: 'about',
                loadComponent: () => import('./pages/dev-about/dev-about.component').then((m) => m.DevAboutComponent),
            },
            {
                path: 'button',
                loadComponent: () => import('./pages/dev-button/dev-button.component').then((m) => m.DevButtonComponent),
            },
            {
                path: 'message',
                loadComponent: () => import('./pages/dev-message/dev-message.component').then((m) => m.DevMessageComponent),
            },
            {
                path: 'input',
                loadComponent: () => import('./pages/dev-input/dev-input.component').then((m) => m.DevInputComponent),
            },
            {
                path: 'panel',
                loadComponent: () => import('./pages/dev-panel/dev-panel.component').then((m) => m.DevPanelComponent),
            },
            {
                path: 'campaign',
                loadComponent: () => import('./pages/dev-campaign/dev-campaign.component').then((m) => m.DevCampaignComponent),
            },
            {
                path: 'cashdrop',
                loadComponent: () => import('./pages/dev-cashdrop/dev-cashdrop.component').then((m) => m.DevCashDropComponent),
            },
            {
                path: 'promo-code',
                loadComponent: () => import('./pages/dev-promo-code/dev-promo-code.component').then((m) => m.DevPromoCodeComponent),
            },
            {
                path: 'history',
                loadComponent: () => import('./pages/dev-history/dev-history.component').then((m) => m.DevHistoryComponent),
            },
            {
                path: 'component',
                loadComponent: () => import('./pages/dev-component/dev-component.component').then((m) => m.DevComponent),
            },
            {
                path: 'misc',
                loadComponent: () => import('./pages/dev-misc/dev-misc.component').then((m) => m.DevMiscComponent),
            },
            {
                path: 'menu',
                loadComponent: () => import('./pages/dev-menu/dev-menu.component').then((m) => m.DevMenuComponent),
            },
            { path: '', redirectTo: 'about', pathMatch: 'full' },
        ],
    },
];
export const routes = [
    { path: '', component: AppLayoutComponent },
    {
        path: 'replay',
        loadComponent: () => import('./layouts/replay-layout/replay-layout.component').then((m) => m.ReplayLayoutComponent),
    },
    ...(environment.production ? [] : devRoutes),
];
//# sourceMappingURL=app.routes.js.map