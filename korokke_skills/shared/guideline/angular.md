## 11. Angular Template Guideline

> 本章屬 Foundation，但對 `src/app` pages / components 的約束更強；`ap-components-lib` 若是 Angular standalone component，也建議延續相同模式。

### 11.1 控制流程

- 建議優先使用新版 Angular control flow：
  - `@if`
  - `@for`
  - `@switch`

Angular template 範例：

```html
@if (activedTab() === "campaign") {
  <event-campaign-cards></event-campaign-cards>
}
```

避免寫法：

- 新增元件時再回頭大量使用 `*ngIf` / `*ngFor`。

目前不一致：

- 專案內仍混用 `@if/@for` 與 `*ngIf/*ngFor`。

建議統一方向：

- 新增 template 以 `@if/@for/@switch` 為優先。

### 11.2 條件樣式

- 簡單雙態：優先 `[ngClass]` 請引用 `[CommonModule]
- 字串組裝 class：僅在 frame width、layout variant 等必要情境使用 `[class]`

### 11.3 Track 規則

- `@for` 應優先使用穩定 key：
  - `track item.id`
  - `track group.id`
  - `track header.label`
- 只有在沒有穩定識別值時才用 `track $index`

### 11.4 資料與模板責任分界

- 樣式 variant 判斷可留在 template。
- 過長文字處理、展示資料轉換、標題計算，優先放在 component TS 的 `computed()`。

參考：

- `activeTabLabel`
- `title`
- `isChineseTitle`
- `tabs`

### 11.5 Component API 用法

- 專案現況偏向 Angular signals API：
  - `input()`
  - `output()`
  - `signal()`
  - `computed()`
- 新增 standalone component 時建議延續此模式。

分層說明：

- `ap-components-lib`：應優先維持乾淨、可重用的 input / output / signal API。
- `src/app`：應用 `computed()` 組裝畫面資料，不把過多展示邏輯塞進 template。

可參考檔案路徑：

- `src/app/components/ap-ui-frame-page/ap-ui-frame-page.component.ts`
- `src/app/components/ap-ui-frame-popup/ap-ui-frame-popup.component.ts`
- `src/app/pages/event-center/event-center.component.ts`
- `src/app/components/ap-campaign-card/ap-campaign-card.component.ts`

---