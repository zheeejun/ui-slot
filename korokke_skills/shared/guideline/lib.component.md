## 8. Component Guideline

### 8.1 `ap-components-lib`

#### Button

- 角色：共用 action 元件，應承接一般 CTA、返回、關閉、tab action 的一致性。
- 現況：
  - `src/app` 已大量使用 `ap-button`
  - 但仍混用原生 `<button>`
- guideline：
  - 一般操作優先沿用 `ap-button`
  - `severity`、`accentColor` 應與畫面 variant 對齊
  - 若需退回原生 `<button>`，應有明確版面理由

#### Form Components

- 角色：共用表單元件層，應定義 input/select/field 的 label、helper、error、size。
- 現況：
  - `src/app` 多依賴外部元件，例如 `ap-input-box`、`ap-alnum-input`、`ap-select`
  - `src/app` 內只有少量原生 label 可供參考
- guideline：
  - Form 規則應以 `ap-components-lib` 為主來源
  - `src/app` 不應自行長出另一套 input / helper / error 規則

#### Shared Primitive

- 適合歸在 `ap-components-lib` 的共用 primitive：
  - button
  - input / select
  - tab / selection
  - shared popup primitive
  - 共用 state 規則，例如 disabled、selected、hover

### 8.2 `src/app` pages / components

#### App-level Button Usage

- `src/app` 的責任不是重新定義 button 視覺，而是決定在哪些場景使用 `ap-button`，以及何時需要原生 `<button>`。
- 原生 `<button>` 適用情境：
  - 特殊分割式 footer action
  - 高度客製化結構，`ap-button` 不易覆蓋時

建議：

- 一般操作：優先 `ap-button`
- `severity`、`accentColor` 要與畫面 variant 對齊
- close / back icon button 優先沿用 frame component 內建樣式

避免寫法：

- 同一個 popup 內同時混用 `ap-button` 與原生按鈕，且視覺語言不同。

#### Card

- 卡片優先保留：
  - `rounded-xl`
  - 清楚標題區
  - 明確 accent
  - 可閱讀的內文高度
- 內容過長時使用 `line-clamp-*` 或固定高度 + `overflow-y-auto`

#### Table

- table header 與 body 要有明確分層：
  - header：accent 背景 + accent 文字
  - body：zinc row zebra + hover
- row 建議維持：
  - zebra background
  - hover 狀態
  - 數值右對齊

#### Dialog / Popup Composition

- 結構建議：
  - overlay
  - popup frame
  - content
  - actions
- 動畫可沿用：
  - `animate-fade`
  - `animate-fade-up`
  - `animate-duration-200`
  - `animate-duration-300`

#### Form Usage

- 現況多依賴外部元件，例如：
  - `ap-input-box`
  - `ap-alnum-input`
  - `ap-select`
- 在 `src/app` 可觀察到的原生 form 規則：
  - label 使用 `text-sm text-yellow-400`
  - input 區常見 `bg-zinc-800 border border-yellow-400/70 rounded-lg`

責任分界：

- `ap-components-lib`：定義欄位元件本身的 API 與樣式能力。
- `src/app`：只處理欄位排列、欄位群組、場景文案與例外狀態。

待團隊確認：

- 外部表單元件的 size、label、error、helper 是否已有既定 token。

可參考檔案路徑：

- `src/app/components/ap-history-calender/ap-history-calender.component.html`
- `src/app/pages/event-promocode/event-promocode.component.html`
- `src/app/layouts/layout-login/layout-login.component.html`

---