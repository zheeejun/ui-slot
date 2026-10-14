import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApCashdropCardCountdownComponent } from '../../components/ap-cashdrop-card-countdown/ap-cashdrop-card-countdown.component';
import { ApCashDropListComponent } from '../../components/ap-cashdrop-list/ap-cashdrop-list.component';
import { ApCashdropCardComponentCountdown } from '../../components/ap-cashdrop-card-component-countdown/ap-cashdrop-card-component-countdown.component';
import { ApCashdropWinComponent } from '../../components/ap-cashdrop-win/ap-cashdrop-win.component';

type CardDef = {
  title: string;
  component: any; // 或 Type<any>
};

@Component({
  selector: 'dev-cashdrop',
  imports: [CommonModule, ApUiCardDevComponent],
  templateUrl: './dev-cashdrop.component.html',
  styleUrl: './dev-cashdrop.component.css',
})
export class DevCashDropComponent {
  cards: CardDef[] = [
    {
      title: 'ap-cashdrop-card-countdown',
      component: ApCashdropCardCountdownComponent,
    },
    {
      title: 'ap-cashdrop-card-component-countdown',
      component: ApCashdropCardComponentCountdown,
    },
    {
      title: 'ap-cashdrop-list',
      component: ApCashDropListComponent,
    },
    {
      title: 'ap-cashdrop-win',
      component: ApCashdropWinComponent,
    },
  ];
}
