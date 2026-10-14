import { Component, HostListener, input, output, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  standalone: true,
  selector: 'ap-ui-device-rotation',
  imports: [CommonModule,ApIconComponent],
  templateUrl: './ap-ui-device-rotation.component.html',
  styleUrls: ['./ap-ui-device-rotation.component.css'],
})
export class ApUiDeviceRotationComponent implements OnInit {
  protected i18n = inject(AppI18nService);
  description = this.i18n.computed('Rotate_device_tip', 'Rotate your device to landscape mode for the best gaming experience.');
  ngOnInit() {
  }
}
