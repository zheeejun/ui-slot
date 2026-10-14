import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApInputListComponent } from '../../../ap-components-lib/ap-input-list/ap-input-list.component';
import { ApToggleSwitchListComponent } from '../../../ap-components-lib/ap-toggle-switch-list/ap-toggle-switch-list.component';
import { ApSelectListComponent } from '../../../ap-components-lib/ap-select-list/ap-select-list.component';
import { ApRadioListComponent } from '../../../ap-components-lib/ap-radio-list/ap-radio-list.component';
import { ApCheckBoxListComponent } from '../../../ap-components-lib/ap-check-box-list/ap-check-box-list.component';
import { ApInputSliderComponent } from '../../../ap-components-lib/ap-input-slider/ap-input-slider.component';

type VariantDef = {
  subtitle?: string; // 副標題
  inputs?: Record<string, any>; // 用於傳遞 input 參數
};

type CardDef = {
  title: string;
  component: any; // 或 Type<any>
  variants?: VariantDef[]; // 多個變體
};

@Component({
  selector: 'dev-input',
  imports: [CommonModule, ApUiCardDevComponent],
  templateUrl: './dev-input.component.html',
  styleUrl: './dev-input.component.css',
})
export class DevInputComponent {
  cards: CardDef[] = [
    {
      title: 'ap-input-list',
      component: ApInputListComponent,
    },
     {
      title: 'ap-input-slider',
      component: ApInputSliderComponent,
    },
    {
      title: 'ap-select-list',
      component: ApSelectListComponent,
    },
    {
      title: 'ap-toggle-switch-list',
      component: ApToggleSwitchListComponent,
    },
    {
      title: 'ap-radio-list',
      component: ApRadioListComponent,
    },
    {
      title: 'ap-check-box-list',
      component: ApCheckBoxListComponent,
    },
  ];
}
