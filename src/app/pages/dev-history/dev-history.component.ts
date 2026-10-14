import { Component } from '@angular/core';
import { ApUiCardDevComponent } from '../../components/ap-ui-card-dev/ap-ui-card-dev.component';
import { CommonModule } from '@angular/common';
import { ApHistoryListComponent } from '../../components/ap-history-list/ap-history-list.component';
import { ApHistoryReplayTopBarComponent } from '../../components/ap-history-replay-top-bar/ap-history-replay-top-bar.component';
import { ApHistoryCalenderComponent } from '../../components/ap-history-calender/ap-history-calender.component';

type CardDef = {
  title: string;
  component: any; // 或 Type<any>
};

@Component({
  selector: 'dev-history',
  imports: [CommonModule, ApUiCardDevComponent],
  templateUrl: './dev-history.component.html',
  styleUrl: './dev-history.component.css',
})
export class DevHistoryComponent {
  cards: CardDef[] = [
    {
      title: 'ap-history-list',
      component: ApHistoryListComponent,
    },
  ];
}
