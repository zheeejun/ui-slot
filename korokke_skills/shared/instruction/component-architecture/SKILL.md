---
name: component-architecture
description: ui_korokke Angular app component 階層架構規則。用於新增、修改或 review layout component、page component、一般 component、ap-components-lib 共用 component，確認 component 引用方向、service inject 範圍、溝通方式、template 新語法與 Tailwind/style 職責邊界。
metadata:
  short-description: Component architecture
---

# Goal
建立與維護 ui_korokke 專案 component 的階層邊界，避免純畫面 component 耦合應用 service、跨 component 直接讀內部資料，或讓子 component 自行決定父層位置。

# Component layers
## Layout component
位置: `src/app/layout`

定義:
- 與 router 相關的 component。
- router path 會對應特定 layout。

可引用:
- layout component
- page component
- 一般 component
- `ap-components-lib` 共用 component

可 inject service:
- base service
- core service
- application service

## Page component
位置: `src/app/pages`

定義:
- 與應用層 service 相關的 component。
- page prefix 通常會對應特定 application service，例如 `trn-*` 由 `trn-ctrl` 控制，`bottom-panel-*` 由 `bottom-panel` 控制。

可引用:
- page component
- 一般 component
- `ap-components-lib` 共用 component

可 inject service:
- base service
- core service
- application service

## 一般 component
位置: `src/app/components`

定義:
- 純畫面的 component。
- 會被各種 layout/page/component 使用。
- 應保持靜態與可重用。
- 不能 inject core service 或 application service。

可引用:
- 一般 component
- `ap-components-lib` 共用 component

可 inject service:
- base service only

## 共用 component
位置: `src/ap-components-lib`

定義:
- 與其他專案共用的純畫面 component。
- 會被各種 component 使用。
- 應保持靜態、可移植、無專案應用狀態。
- 不能 inject 任何 service。

可引用:
- `ap-components-lib` 內的共用 component

可 inject service:
- none

# Component references
- 可引用方向主要限制 Angular component imports。
- layout 可以引用 layout、page、一般 component、共用 component。
- page 可以引用 page、一般 component、共用 component。
- 一般 component 只能引用一般 component 與共用 component。
- 共用 component 只能引用共用 component。
- type、interface、常數與純函式可以依需求跨 layer import，但不能帶入 service singleton、UI side effect 或違反 component layer 的 runtime coupling。
- component 引用 component 時，位置資訊要由父層明確定義，例如 `relative`、`absolute`、`top-0`。
- 子 component 不要在 `:host` 自帶 `top`、`bottom` 或其他父層定位責任。

# Component communication
- 使用 Angular signal function API 傳遞資料與事件：`input()`、`model()`、`output()`；不要新增 decorator-based API，例如 `@Input`、`@Output`。
- 使用 `viewChild()` / `viewChildren()` 取得 view query；不要新增 `@ViewChild` / `@ViewChildren`。
- 可以透過 service 傳遞跨 page/layout 的狀態或事件，但要符合該 component layer 的 service inject 規則。
- 不要讓 component 直接 reference 另一個 component 的內部資料。
- 若需要 parent 操作 child，優先改成 input 狀態與 output 事件；避免依賴 child 的 private/public field 作為資料來源。

# Smart and dumb components
- layout/page component 是 smart component，負責 inject service、取得 application state、組合資料、處理流程與協調 child components。
- 一般 component 與共用 component 是 dumb component，負責依照 input render UI，並透過 output 回報使用者互動或狀態事件。
- dumb component 不應知道 application flow、server ready、domain service 狀態或 router 流程。
- loading、empty、error 等應用流程判斷由 layout/page 決定；dumb component 可以接收 `isLoading`、`items`、`status` 等語意資料來呈現畫面。

# Input and output naming
- Input 命名要描述語意狀態或資料，不要描述實作細節。
- 優先使用 `status`、`phase`、`variant`、`isActive`、`isDisabled`、`items`、`selectedId` 這類語意名稱。
- 避免讓 input 直接承載位置與樣式細節，例如 `top`、`left`、`colorClass`、`marginTop`。
- 若需要視覺差異，優先使用語意 variant，例如 `variant="warning"`，由 component 內部決定對應樣式。
- Output 命名要描述事件語意，使用過去式或事件名，例如 `closed`、`selected`、`submitted`、`valueChanged`。
- 避免使用 implementation naming，例如 `clickButton1`、`changeData`、`onCloseEvent`。

# Component and service communication
- Event trigger: 使用 `Subject` / observable pattern；訂閱時要搭配 `DestroyRef`、`takeUntilDestroyed` 或等效方式取消訂閱。
- State access: 優先使用 signal、`computed` 或明確 function 取得狀態。
- 使用 `effect` 要十分小心；不需要追蹤的讀取要用 `untracked` 包住，避免不預期的 reactive loop 或重複觸發。
- 純畫面 component 不要為了方便而 inject application service；由 page/layout 取出狀態後傳入。

# Template and style rules
- component template 使用 Angular 新控制流程語法，例如 `@if`、`@for`。
- standalone component imports 優先 import `CommonModule`。
- template使用的樣式盡可能使用 Tailwind 表示。
- 只有特殊情況才使用額外 CSS，例如特殊動畫或相容性問題。
- `:host` CSS 不要自帶 `top`、`bottom` 等位置定義；component 的位置完全交由父層決定。
- service 管理狀態與流程, component(.ts) 控制畫面邏輯, position、color、spacing、CSS class 等畫面呈現細節應留在 template(html)/style(css)。

# Workflow
- 先判斷目標 component 屬於 layout、page、一般 component 或共用 component。
- 檢查 Angular component imports，確認引用方向符合 layer 規則；type/interface/pure helper import 不視為 component 引用違規。
- 檢查 constructor injection、`inject(...)`，確認 service inject 範圍符合 layer 規則。
- 檢查 parent-child 溝通是否使用 input/output 或 service；不要直接讀另一個 component 的內部資料。
- 檢查 smart/dumb 邊界，確認一般 component 與共用 component 沒有承擔 application flow。
- 檢查 input/output 命名是否描述語意狀態與事件，而不是位置、樣式或實作細節。
- 檢查 template 是否使用 `@if`、`@for` 等新語法。
- 檢查 style 是否優先 Tailwind，且 `:host` 沒有自行定義父層定位。

# Review checklist
- component 是否放在正確 layer？
- component import 的其他 component 是否符合可引用方向？
- service inject 是否符合該 component layer？
- 一般 component 是否只 inject base service？
- 共用 component 是否沒有 inject 任何 service？
- component 間是否透過 input/output 或 service 溝通，而不是直接 reference 內部資料？
- 是否使用 `input()`、`model()`、`output()`、`viewChild()`、`viewChildren()`，沒有新增 `@Input`、`@Output`、`@ViewChild`、`@ViewChildren`？
- layout/page 是否承擔 smart component 責任，一般/共用 component 是否維持 dumb component？
- input 是否使用語意狀態或資料命名，沒有暴露位置/樣式細節？
- output 是否使用清楚的事件語意命名？
- 訂閱 observable/subject 時是否有搭配 destroy cleanup？
- `effect` 是否避免追蹤不該追蹤的資料？
- template 是否使用 Angular 新控制流程語法？
- 樣式是否優先 Tailwind？
- 子 component 是否沒有在 `:host` 自行定義 top/bottom/position 等父層位置資訊？
- component(.ts) 是否使用到位置、顏色、CSS class、Tailwind 等畫面語法？這部分應該留在 template(.html) 或 style(.css)。
