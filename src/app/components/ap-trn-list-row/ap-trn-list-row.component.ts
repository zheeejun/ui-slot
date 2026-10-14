import { Component, effect, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApRowListItem, defaultPlayersList } from "./ap-trn-list-row.interface";
import { CompactNumberPipe } from "../../shared/pipe/compact-number.pipe";

@Component({
  selector: "ap-trn-list-row",
  standalone: true,
  imports: [CommonModule, CompactNumberPipe],
  templateUrl: "./ap-trn-list-row.component.html",
  styleUrl: "./ap-trn-list-row.component.css",
})
export class ApTrnListRowComponent {
  items = input<ApRowListItem[]>(defaultPlayersList.slice(0, 5));
  showDividers = input<boolean>(true);
  clickable = input<boolean>(true);
  borderColor = input<string>("border-zinc-500");
  selectable = input<boolean>(false);
  selectedIds = input<(string | number)[]>([]);
  accentColor = input<"yellow" | "purple">("yellow");
  currency = input<string>("$");

  // 追蹤每個項目的排名變化
  rankChanges = new Map<string, 'up' | 'down' | 'none'>();
  private previousRanks = new Map<string, number | null>();

  constructor() {
    // 監聽 items 變化，計算排名變化
    effect(() => {
      const currentItems = this.items();
      const newRankChanges = new Map<string, 'up' | 'down' | 'none'>();

      currentItems.forEach((item) => {
        const previousRank = this.previousRanks.get(item.id);

        if (previousRank !== undefined && previousRank !== null && previousRank !== item.rank && item.rank !== null) {
          // 排名數字變小 = 排名上升（例如從 5 到 3）
          if (item.rank < previousRank) {
            newRankChanges.set(item.id, 'up');
          }
          // 排名數字變大 = 排名下降（例如從 3 到 5）
          else if (item.rank > previousRank) {
            newRankChanges.set(item.id, 'down');
          }
        } else {
          newRankChanges.set(item.id, 'none');
        }

        // 更新記錄的排名
        this.previousRanks.set(item.id, item.rank);
      });

      this.rankChanges = newRankChanges;

      // 清除動畫狀態（1秒後）
      setTimeout(() => {
        this.rankChanges = new Map(
          Array.from(this.rankChanges.entries()).map(([id]) => [id, 'none'])
        );
      }, 1000);
    });
  }

  getRankChange(id: string): 'up' | 'down' | 'none' {
    return this.rankChanges.get(id) || 'none';
  }
}
