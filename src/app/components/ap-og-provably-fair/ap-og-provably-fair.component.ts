import { Component } from '@angular/core';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';
import { ApInfoGuideOGComponent } from '../ap-info-guide-og/ap-info-guide-og.component';
import { ApOgProvablyFairDescComponent } from './ap-og-provably-fair-desc.component';
import { fairnessItems } from './ap-og-provably-fair.data';

@Component({
  selector: 'ap-og-provably-fair',
  imports: [
    ApIconComponent,
    AppI18nPipe,
    ApInfoGuideOGComponent,
    ApOgProvablyFairDescComponent,
  ],
  templateUrl: './ap-og-provably-fair.component.html',
})
export class ApOgProvablyFairComponent {
  readonly fairnessItems = fairnessItems;
}
