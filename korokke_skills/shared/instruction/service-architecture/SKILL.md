---
name: service-architecture
description: ui_korokke Angular app service 基礎架構規則。用於新增、修改或 review `src/app/services/` 內的 service，確認 base、websocket、core、application service 的可 inject 範圍、ready 時機與相依方向。
metadata:
  short-description: Service architecture
---

# Goal
建立與維護 ui_korokke 專案 service 的分層架構，避免 component/service 之間出現錯誤 inject、過早存取或跨層直接耦合。

# When to use
當任務涉及 `src/app/services/` 的新增、修改、重構、注入相依、ready 流程、server 連線認證、app-interface 或 game-iframe-ctrl 溝通行為時使用。

# Repo map
- `src/app/services/`: 專案 service 主要位置
- `src/app/pages/`: page-level components，可依規則存取 core/application services
- `src/app/layout/`: layout-level components，可依規則存取 core/application services
- `src/app/components/`: reusable components，預設不可直接 inject core/application service，應由 app/layout 或 app/page 傳入資料與動作

# Service layers
## Base service
app 開啟後，不需要等待 server 認證即可存取。

目前 base services:
- `app-i18n`
- `common-function`
- `logger`
- `navigator-share`
- `sound-service`
- `storage-ctrl`

存取規則:
- 所有 component 與 service 都可以存取 base service。
- base service 彼此相依時要特別注意方向，避免初始化循環。
- base service 不應依賴 websocket、core 或 application service。

## Websocket service
負責底層連線，不能讓一般 component 或 service 直接耦合。

目前 websocket services:
- `network`

存取規則:
- 只有 `app-interface` service 可以 inject websocket service。
- 其他 component 與 service 都不能直接 inject websocket service。
- 如需連線資料或 server 訊息，應透過 `app-interface` 封裝後暴露。

## Core service
server 連線認證完成後即可存取，是應用 service 的協調核心。

目前 core services:
- `app-interface`
- `game-iframe-ctrl`

存取規則:
- component 可 inject 範圍: `app/layout`、`app/page`
- service 可 inject 範圍: application service
- core service 可以協調 application service 需要的共用資料流、server 訊息、game iframe 狀態。
- core service 可以承載少量小型應用能力或衍生資料，例如 `currencySymbol` 這類不值得獨立成 application service 的簡單資料。
- core service 不應依賴 application service，以免核心層被應用層反向耦合。

## Application service
等 `app-interface` 與 `game-iframe-ctrl` ready 之後才可存取。

目前規則:
- 除 base、websocket、core 之外，其他 service 都屬於 application service。

存取規則:
- component 可 inject 範圍: `app/layout`、`app/page`
- reusable components in `src/app/components/` 若需要 application service 的資料，應由 page/layout inject service 後透過 `@Input`、model、signal input 或 output callback 傳入。
- application service 不能被其他 service inject。
- type、interface、常數、純函式、mapper、`.function.ts`、`.interface.ts`、`.data.ts` 可以依需求 import；限制的是 Angular DI 的 service-to-service inject，不是所有檔案引用。
- application service 之間的溝通，應透過 core service，或由 `app/layout`、`app/page` component 組合協調。
- application service 可使用 base service。
- application service 可 inject core service，但要確認 `app-interface` 與 `game-iframe-ctrl` 已 ready。

# Route-scoped service boundary — `/og`
`/og` 是專案用 router 切出來的獨立模式，由 `layout-og`（`src/app/layouts/layout-og`）與其底下整棵 component tree 組成（例如 `og-header`、`og-panel`、`history-list-og`、`history-detail-og` 等 `og-*` page/component）。這個模式設計上要能與既有一般模式完全切開，不共用既有的 application service 與其背後的狀態。

存取規則:
- `/og` tree 內的 component/service，只能 inject:
  - base service
  - `og-*` 開頭的 application service（例如 `og-wallet`）
- 不能 inject 既有、非 `og-*` 的 application service，例如 `player-wallet`、`history-ctrl`、`bottom-panel`、`campaign-ctrl`、`trn-ctrl`、`cash-drop`、`leader-board` 等。
- core service（`app-interface`、`game-iframe-ctrl`）仍可正常使用，不受此限制。
- 若 `/og` 功能需要既有 application service 才有的資料或邏輯，應另外建立對應的 `og-*` service（例如 `og-history-ctrl`），不要直接複用既有 service，也不要把既有 service 改成同時服務兩種模式。

隱性違規（transitive leak）:
- base service 若在內部又依賴了非 `og-*` 的 application service（例如 `datacollector`/`gacollector` 依賴 `player-wallet`），只要 `/og` tree 內任何 component/service inject 這個 base service，就會把被禁止的 application service 一併帶入，即使 `/og` component 自己完全沒有直接 import 它。
- Review `/og` 相關檔案時，不能只檢查該 component/service 自己的 `inject(...)`，還要往下追它注入的每個 service 內部依賴，確認沒有透過 base service 或其他 service 間接夾帶非 `og-*` 的 application service。
- 若發現這種洩漏，優先修正被依賴的 base service 本身（拿掉它對非 og application service 的依賴），而不是讓 `/og` tree 忍受這條違規路徑。

# Dependency direction
允許 inject 方向:
- component in `app/layout` or `app/page` -> base/core/application service
- reusable component -> no direct core/application service inject; receive data/actions from page/layout
- any service/component -> base service
- `app-interface` -> `network`
- application service -> base service
- application service -> core service

禁止 inject 方向:
- any component except `app/layout` or `app/page` -> core/application service
- any service except `app-interface` -> `network`
- base service -> websocket/core/application service
- websocket service -> application service
- core service -> application service
- application service -> application service
- `/og` tree（`layout-og` 與其 component/service）-> 非 `og-*` 的既有 application service（包含透過 base service 間接帶入的情況）

允許 import 方向:
- type、interface、常數與純函式可以跨 service folder import。
- import helper 時要避免 helper 內部隱含 service singleton、side effect 或 ready timing。

# Service responsibility
- service 管理 component 需要的狀態、資料流程、事件流程與跨畫面協調。
- 與畫面排版或視覺呈現直接相關的資訊，不要放在 service 維護，例如 position、color、spacing、CSS class、animation timing。
- layout/style 狀態應留在 component、template、CSS 或 UI component input，由畫面層自行決定。
- 若 service 需要提供 UI 判斷資料，應提供語意狀態，例如 `isActive`、`status`、`phase`，不要提供 `left/top/colorClass` 這類呈現細節。

# Ready timing
- Base service: app 啟動後即可使用，不等待 server 認證。
- Websocket service: 由 `app-interface` 管理，不提供外部直接使用。
- Core service: `app-interface.loginResult !== null` 後視為 server 連線認證完成，可開始使用認證後能力。
- Application service: `app-interface.loginResult !== null` 且 `game-iframe-ctrl` ready 後才視為可用。

# Workflow
- 先確認目標 service 屬於 base、websocket、core 或 application 哪一層。
- 檢查 constructor injection、`inject(...)`，確認 Angular DI 相依方向符合本文件。
- 檢查 import path 時，區分 service inject 與 type/interface/pure helper import；不要把所有 import 都視為違規。
- 若新增 service，先決定層級與 ready timing，再決定由 component、core service 或既有入口暴露。
- 若只是小型衍生資料或簡單共用能力，優先考慮放在 `app-interface`，不必為了形式另開 application service。
- 若 application service 需要與另一個 application service 溝通，改由 core service 或 app/layout、app/page component 協調。
- 若需要 server 訊息或 websocket 行為，只能經由 `app-interface`，不要直接 inject `network`。
- 修改後檢查 affected components 是否位於允許的 `app/layout` 或 `app/page` 邊界；若是 reusable component，改用 inputs/outputs 接資料與動作。
- 若目標 component/service 屬於 `/og` route tree，除了檢查它自己的 `inject(...)`，還要往下追一層它注入的每個 service 內部依賴，確認沒有直接或間接連到非 `og-*` 的既有 application service。

# Review checklist
- service 是否被放在正確層級？
- 是否有 application service inject 另一個 application service？
- 是否有非 `app-interface` 的 service/component inject `network`？
- base service 是否 inject 了高層 service？
- core service 是否反向 inject application service？
- component 是否在允許邊界內 inject core/application service？
- reusable component 是否透過 page/layout 的 inputs/outputs 取得應用資料與動作？
- 是否有在 `app-interface.loginResult === null` 時使用認證後能力的風險？
- 若有跨 service 溝通，是否透過 core service 或 app/layout、app/page component？
- service 是否只管理狀態與流程，沒有保存 position、color、spacing、CSS class 等畫面排版/樣式資訊？
- 若目標屬於 `/og` route tree，是否只 inject base service 或 `og-*` application service，沒有直接或透過 base service 間接連到非 `og-*` 的既有 application service？

# Review output
回覆 service 架構檢查結果時，優先說明:
- Service layer: 目標 service 屬於 base、websocket、core 或 application。
- Inject check: 是否有違反 inject 方向。
- Ready check: 是否依賴 `app-interface.loginResult !== null` 或 `game-iframe-ctrl` ready。
- OG boundary check: 若涉及 `/og` route tree，是否有直接或間接（經 base service）連到非 `og-*` 的既有 application service。
- Suggested fix: 若有違規，說明建議調整方式。
