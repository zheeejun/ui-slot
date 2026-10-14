---
name: project-architecture
description: Web App 的 project-level architecture guide。用於新增、修改或 review feature 時，先確認大方向的 tech stack 與邊界：Angular、Tailwind、RxJS、signals、component layers、service layers、shared library responsibilities。
metadata:
  short-description: Project architecture
---

# Goal
Web App 的第一層 architecture map。
當 feature 會碰到多個檔案、需要新增 page/component/service，或需要判斷 Angular signals、RxJS、Tailwind、component placement、service placement 時，先使用這份 guide。

# Tech Stack
- Angular 20：使用 standalone components 與 route-based page composition。
- TypeScript 5.8：用於 application code、typed interfaces、pure helpers、service contracts。
- RxJS 7.8：用於 event streams、websocket/server messages、跨邊界 async flows。
- Angular signals：用於 local UI state、derived state、component inputs、template-facing state。
- Tailwind CSS 4：優先用於 component styling，並搭配 `src/app/styles` 底下的 project CSS files。
- Angular CDK：當互動 primitive 有成熟 Angular utility 可用時，優先考慮使用。

# Repo Map
- `src/app/app.config.ts`：application providers。
- `src/app/app.routes.ts`：route 與 layout/page composition。
- `src/app/layouts`：layout components，負責高層 route frame。
- `src/app/pages`：page components 與 feature screens。
- `src/app/components`：屬於本 app domain 的 reusable app components。
- `src/app/services`：application services、server interfaces、domain controllers、storage、logging、i18n、stateful business logic。
- `src/app/shared`：shared pipes、directives、pure helpers、protocol files、low-level reusable code。
- `src/app/styles`：global style tokens/utilities 與 project-wide CSS helpers。

# Architecture Layers

## Service Layer
Path: `src/app/services`

Responsibilities:
- 將 business flow、server integration、application state、persistence、logging、i18n 放在 component templates 外。
- 使用 navigator.userAgent 做 isMobile() 判斷。
- 詳細 service categories 依 `korokke_skills/shared/instruction/service-architecture`。
- 每個 domain flow 優先找出一個明確 owner service。
- 避免 service-to-service dependency cycles。

## Layout Layer
Path: `src/app/layouts`

Responsibilities:
- 組合 route-level frames 與 persistent app regions。
- 當 route 需要 layout orchestration 時，串接多個 page areas。
- 可 inject base、core、application services。
- 應將 feature rendering 委派給 pages 或 reusable components。

## Page Layer
Path: `src/app/pages`

Responsibilities:
- 擁有 feature screens 與 route-facing UI flows。
- 需要時可 inject 對應 feature prefix 的 application services。
- 將 service state 轉成 template state 與 child component inputs。

## App Component Layer
Path: `src/app/components`

Responsibilities:
- 提供 app domain 內可重用的 UI pieces。
- 優先使用 input/output 與 signal APIs，避免直接 inject domain-service。
- 只有在 service 真的是 infrastructure-level 時，才可使用 base services (ex: i18n, storage, client session)。
- 不應擁有 route flow、server-ready timing、application service coordination。
- 裝置判斷請使用 client session 來判斷isMobile() 而不是 CSS media query。
- Landscape/portrait orientation 的判斷請使用 CSS media query。

# Component Categories
- Layout components：route frame owners，可 orchestrate pages 與 app services。
- Page components：feature owners，可作為 smart components 並 inject application services。
- App reusable components：domain-aware presentation components，原則上偏 dumb components。
- Dev components/pages：development 與 lab UI；除非刻意接入，否則應與 production flow 隔離。

# Service Categories
- Base services：app 可共用的 infrastructure utilities，例如 i18n、storage、logging、sound、data collector、common functions。
- Websocket service：network transport boundary。本 repo 中 `network` 視為 transport owner。
- Core services：app/server bridge 與 game iframe coordination，例如 `app-interface`、`game-iframe-ctrl`。
- Application services：feature/domain controllers，依賴 ready 後的 core services，並將 state/actions 暴露給 layouts 或 pages。

# State Strategy
- signals 用於 local component state、selected UI state、computed template values、同步 derived values。
- `computed()` 用於從 signals 衍生的值，避免在 templates 重複計算。
- RxJS 用於 event streams、server messages、websocket flows、timers，以及需要 cancellation 或 composition 的 flows。
- 當 template 適合讀取 signal 時，在 component/page boundary 將 RxJS 轉成 signals。
- 明確事件使用 `Subject` 或 observable trigger patterns；在 components 訂閱時使用 `DestroyRef` / `takeUntilDestroyed` 清理。
- `effect()` 保持小而明確，只用於 side effects，不取代 computed state 或一般 method calls。
- 除非是明確 design tokens 或穩定 UI states，否則不要把 layout details、CSS classes、spacing、animation timing 放進 services。

# Angular Rules
- 優先使用 standalone components。
- 優先使用 Angular signal APIs：`input()`、`model()`、`output()`、`viewChild()`、`viewChildren()`。
- 優先使用新的 Angular template control flow：`@if`、`@for`、`@switch`。
- `@for` 必須提供穩定 `track` expressions；有真實 id/key 時避免 `track $index`。
- templates 保持 declarative。非簡單 mapping、filtering、sorting、formatting 應移到 component code、computed values、pipes 或 pure helpers。
- standalone component 只 import 自己需要的項目。
- 跟 Balance, Bet, Win相關的數值的計算請使用 Decimal.js，而相關數值顯示的 formatting 請使用 deciaml-comma pipe。

# Styling Rules
- component-local layout 與 visual styling 優先使用 Tailwind classes。
- 複雜 selectors、host behavior、animation definitions，或用 Tailwind 表達會不清楚的樣式，放在 component CSS。
- `src/app/styles` 用於 project-wide utilities、typography、spacing、tags、scrollbar、font rules。
- domain services 不應組 CSS classes、不應決定 positional layout，也不應處理 component-specific visual variants。

# Dependency Direction
Allowed direction:
- `layouts` -> `pages` / `components` 
- `pages` -> `components` 
- `components` -> `components` 
- layout/page components -> base/core/application services
- app reusable components -> 必要時只使用 base services
- application services -> base/core services
- core service `app-interface` -> websocket service `network`

Avoid:
- reusable app components 直接 inject application services。
- base services 依賴 core/application services。
- application services 彼此互相依賴；除非有刻意設計的 owner relationship。
- core services 依賴 application services。
- component imports 反向穿越 layer direction。

# Feature Workflow
- 先判斷 change 屬於 layout、page、app reusable component、library component、service、shared helper、pipe 或 directive。
- 選擇 state mechanism：local/template state 用 signal，streams 與 server/event flows 用 RxJS。
- 新增 stateful logic 前，先決定 service owner。
- page/layout components 負責將 services wiring 到 reusable components。
- reusable components 專注於 inputs、outputs、rendering。
- styling 優先靠近 component；只有 reusable token 或 global utility 才放到共用 styles。
- 完成前檢查 imports 與 injection direction。

# Review Checklist
- file 是否位於正確 layer？
- component category 是否符合它的 responsibilities？
- service category 是否符合它的 dependencies 與 ready timing？
- local/template state 是否使用 signals，streams/events 是否使用 RxJS？
- subscriptions 是否使用 Angular lifecycle utilities 清理？
- templates 是否使用 `@if`、`@for`、`@switch` 與穩定 `track` expressions？
- app reusable components 是否避免直接 inject application service？
- Tailwind/component CSS 是否放在合適位置？
- business rules 是否放在 services 或 pure helpers，而不是 templates？
- UI layout details 是否避免放進 services？

# Related Instructions
- 詳細 component layer rules 請使用 `korokke_skills/shared/instruction/component-architecture`。
- 詳細 service dependency 與 ready-timing rules 請使用 `korokke_skills/shared/instruction/service-architecture`。
- Angular template conventions 請參考 `korokke_skills/shared/guideline/angular.md`。
- UI/design details 請參考 `korokke_skills/shared/guideline/design-guideline.md`、`color.md`、`typography.md`、`responsive.md`。
