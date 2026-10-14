# UI Design Guideline

## 1. 文件目的

本文件依據目前 Angular + Tailwind 專案的既有實作整理，目的是讓團隊後續開發 UI 時，能延續目前專案的視覺與 template 寫法，而不是重新定義一套新的 Design System。

本文件只整理目前程式碼中可觀察到的規則：

- 已有穩定模式：直接列為 guideline。
- 目前不一致：明確標示差異，並提出建議統一方向。
- 待團隊確認：現有專案無法可靠判斷，不臆測。

### 1.1 文件分層

本文件分成三層閱讀：

- Foundation：跨 `ap-components-lib` 與 `src/app` 共用的樣式基礎。
- `ap-components-lib`：共用元件層，重點是元件 API、variant、size、state 與可重用 pattern。
- `src/app` pages / components：場景組裝層，重點是 page frame、popup composition、section layout、card/table 組裝與業務畫面 pattern。

判斷原則：

- 若規則描述的是共用元件本身的能力或 API，歸類到 `ap-components-lib`。
- 若規則描述的是畫面如何組裝共用元件，歸類到 `src/app`。
- 若規則同時影響兩層，先寫在 Foundation，再在各層補充落地方式。

---

## 2. 專案樣式基礎

### 2.1 技術基線

- Tailwind 版本：Tailwind CSS v4，透過 `@import "tailwindcss"` 載入。
- 動畫：使用 `tailwindcss-animated`。
- 自訂樣式入口：`src/styles.css`
- 自訂 utility：`src/app/styles/utilities.css`
- 字體與 root font-size：`src/app/styles/font.css`
- 全域 tag 樣式：`src/app/styles/tags.css`

### 2.2 視覺方向

- 整體介面以深色底為主，常見背景為 `bg-black`、`bg-zinc-900`、`bg-zinc-800`。
- 功能主色以兩組 variant 為主：
  - `quick` / 一般強調：黃金色系
  - `event` / 活動競賽：紫色系
- Popup、Page、Panel 幾乎都使用深色容器搭配亮色文字。
- 標題常見 `uppercase`、`tracking-wide` 或 `tracking-wider`。

### 2.3 字體基線

- 預設 sans：`Inter`
- 特殊展示字體：`Anton`
- `Anton` 主要用於：
  - 活動卡標題
  - Tournament 標題
  - 強調型數字與短標

參考檔案：

- `src/styles.css`
- `src/app/styles/font.css`
- `src/app/styles/utilities.css`
- `src/app/components/ap-trn-card-title/ap-trn-card-title.component.html`
- `src/app/components/ap-campaign-card/ap-campaign-card.component.html`

---


## 3. Do / Don’t

### Do

- 先判斷規則屬於 Foundation、`ap-components-lib` 還是 `src/app`。
- 使用 `ap-ui-frame-page` 作為全頁型容器。
- 使用 `ap-ui-frame-popup` 作為中型彈窗容器。
- 以 `zinc` 深色背景作為基底，`yellow` / `purple` 做 variant accent。
- 標題與強調型短字優先沿用 `font-anton` 既有模式。
- table 維持 header / body / hover / zebra 的分層。
- 新增 template 優先使用 `@if`、`@for`、`@switch`。
- 用 `computed()` 先整理展示資料，再交給 template。
- 盡量沿用 `divider-gradient-yellow`、`popup-overlay`、`campaign-card-frame` 等既有 utility。

### Don’t

- 不要把本文件當成一般 Tailwind 範例，自行發明新 token。
- 不要把 `ap-components-lib` 的元件 API 規則與 `src/app` 的畫面組裝規則混成同一層描述。
- 不要在同類元件中混用太多主題色。
- 不要為單一頁面重做一套 header / popup 外框。
- 不要把 helper text、error text、body text 都做成相同色階。
- 不要在新元件回退成大量 `*ngIf/*ngFor`。
- 不要在 template 內塞過長的 class 字串運算。
- 不要直接新增未定義的品牌色或自訂 spacing 命名。

---

## 4. PR Checklist

- [ ] 這次新增的規則是屬於 Foundation、`ap-components-lib`，還是 `src/app` pages / components？
- [ ] 是否沿用現有 page frame / popup frame，而不是重做外框？
- [ ] 是否使用既有色彩系統：`zinc` 底 + `yellow` / `purple` accent？
- [ ] 是否沒有新增憑空的 design token？
- [ ] Typography 是否符合對應層級：page title / section title / card title / body / helper / error？
- [ ] 同畫面內相同角色的元件，字級與間距是否一致？
- [ ] Table 是否具備 header、body、hover、對齊規則？
- [ ] 表單欄位是否清楚區分 label、value、helper、error？
- [ ] 響應式是否維持 mobile-first，且避免反向縮字模式？
- [ ] 是否優先使用 `@if`、`@for`、`@switch`？
- [ ] `@for` 是否使用穩定的 `track` key？
- [ ] 是否將展示邏輯優先整理在 `computed()` 而不是塞進 template？
- [ ] 是否有標註新規則屬於「目前不一致」或「待團隊確認」？
- [ ] 若涉及 button / form / shared primitive，是否先確認應更新 `ap-components-lib` 還是只在 `src/app` 組裝？

---