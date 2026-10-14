/**
 * AP Logo Name Component
 * 點擊5次會顯示版本資訊，版本資訊從 /launch/version.json 取得
 * version.json 格式為 { version: string; time: string; branch: string; sha: string }
 */

import {
  Component, input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApUiVersionComponent } from '../ap-ui-version/ap-ui-version.component';
@Component({
  selector: 'ap-ui-logo-name',
  imports: [CommonModule, ApUiVersionComponent],
  templateUrl: './ap-ui-logo-name.component.html',
  styleUrl: './ap-ui-logo-name.component.css',
})
export class ApUiLogoNameComponent {
  logoName = input<string>('AdvantPlay');
}
