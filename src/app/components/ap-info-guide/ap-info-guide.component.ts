import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApIconComponent } from '../../../ap-components-lib/ap-icon/ap-icon.component';
import { ClientSessionService } from '../../services/client-session/client-session.service';

@Component({
  selector: 'ap-info-guide',
  imports: [CommonModule, ApIconComponent],
  templateUrl: './ap-info-guide.component.html',
  styleUrl: './ap-info-guide.component.css'
})
export class ApInfoGuideComponent {
  icon = input<string | null>(null);
  title = input<string | null>('Title');
  getItem1 = input<string>('Item 1');
  getItem2 = input<string | null>('Item 2');
  variant = input<'default' | 'description'>('default');
}
