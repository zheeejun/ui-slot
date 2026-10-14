import { Component } from '@angular/core';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { AppI18nPipe } from '../../shared/pipe/app-i18n.pipe';

@Component({
  selector: 'ap-og-provably-fair-desc',
  imports: [ApIconComponent, AppI18nPipe],
  templateUrl: './ap-og-provably-fair-desc.component.html',
})
export class ApOgProvablyFairDescComponent {}
