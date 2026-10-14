import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApOgHistoryDetailTopComponent } from '../../components/ap-og-history-detail-top/ap-og-history-detail-top.component';
import { ApOgHistoryDetailChickenComponent } from '../../components/ap-og-history-detail-chicken/ap-og-history-detail-chicken.component';
import { ApLoadingOverlayComponent } from '../../../ap-components-lib/ap-loading-overlay/ap-loading-overlay.component';
import { HistoryListItem } from '../../services/history-ctrl/history-list.interface';
import { IServerHistorySpinDetailSeed, IServerHistorySpinDetailResponse, ServerHistoryItemType } from '../../services/history-ctrl/history-server.interface';
import { ClientSessionService } from '../../services/client-session/client-session.service';
import { calc, dec, MoneyText } from '../../services/player-wallet/player-wallet.function';
import { BoHistoryResultInterface } from './layout-bo.interface';

/** `/web/history/ticket/result` 的回應格式，platform + ticketNo 直接以 HTTP GET 撈取單筆 ticket 結果，不經過 game socket */

@Component({
  selector: 'layout-bo',
  imports: [
    ApOgHistoryDetailTopComponent,
    ApOgHistoryDetailChickenComponent,
    ApLoadingOverlayComponent
],
  templateUrl: './layout-bo.component.html',
  styleUrl: './layout-bo.component.css',
})
export class LayoutBoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private session = inject(ClientSessionService);
  private http = inject(HttpClient);

  // 網址參數
  platform = signal<string | null>(null);
  brand = signal<string | null>(null);
  site = signal<string | null>(null);
  ticket = signal<string | null>(null);
  encoderequired = signal<string | null>(null);

  isLoading = signal<boolean>(true);
  isDetailThemeDark = signal<boolean>(false);

  item = signal<HistoryListItem | null>(null);
  balanceNew = signal<number | null>(null);
  balanceOld = signal<number | null>(null);
  displayBet = signal<number>(0);
  isWin = signal<boolean>(true);
  win = signal<number>(0);
  eventString = signal<string>('{}');
  seed = signal<IServerHistorySpinDetailSeed>({
    server_seed: '',
    server_seed_hash: '',
    client_seed: '',
  });

  constructor() {
    // 測試用的網址
    //const assetUrl = "https://qa-admin.diresoft.net/report/gameresult/detail/";
    const assetUrl = window.location.origin + "/report/gameresult/detail";
    // BO 頁面的 assetUrl 是 report API domain，不是 CDN asset host，不需要重新取得版本資訊
    this.session.setAssetUrl(assetUrl);
  }

  ngOnInit(): void {
    const queryParamMap = this.route.snapshot.queryParamMap;
    this.platform.set(queryParamMap.get('platform'));
    this.brand.set(queryParamMap.get('brand'));
    this.site.set(queryParamMap.get('site'));
    this.ticket.set(queryParamMap.get('ticketNo'));
    this.encoderequired.set(queryParamMap.get('encoderequired'));

    this.fetchHistoryResult();
  }

  private fetchHistoryResult(): void {
    // 測試用的網址
    //const apiUrl = "https://qa.diresoft.net/web/history/ticket/result"
    const apiUrl = window.location.origin + "/web/history/ticket/result"
    const params = new HttpParams()
      .set('platform', this.platform() ?? '')
      .set('ticketNo', this.ticket() ?? '');

    this.isLoading.set(true);
    this.http.get<BoHistoryResultInterface>(apiUrl, { params }).subscribe((data: BoHistoryResultInterface) => {
      // 常數優先處理
      calc.amountRatio = Number(data.AmountRatio) ?? 1;
      Object.freeze(calc);

      dec.decimalPlaces = Number(data.DecimalPlaces) ?? 3;
      dec.disableComma = data.DisableComma === '1' ? true : false;
      Object.freeze(dec);

      MoneyText.currencySymbol = data.CurrencySymbol ?? '';
      Object.freeze(MoneyText);

      this.isLoading.set(false);
      this.setData(data);
    });
  }

  setData(data: BoHistoryResultInterface) {
    const balanceAfter = calc.s2c(Number(data.HistoryDetailData.info.after_balance) ?? 0);
    const balanceBefore = calc.s2c(Number(data.HistoryDetailData.info.before_balance) ?? 0);
    const bet = calc.s2c(Number(data.HistoryTicketData.bet) ?? 0);
    const win = calc.s2c(Number(data.HistoryTicketData.win) ?? 0);
    const isWin = win > 0;
    this.balanceNew.set(balanceAfter);
    this.balanceOld.set(balanceBefore);
    this.displayBet.set(bet);
    this.isWin.set(isWin);
    this.win.set(win);
    const plates = data.HistoryDetailData.result.main_game?.plate as { event?: string }[];
    this.eventString.set(plates[0].event ?? '{}');
    this.seed.set(data.HistoryDetailData.seed);
  }

  clickCopyTransaction(item: HistoryListItem, event?: Event): void {}
}
