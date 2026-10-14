# Chunk Report

> 由 `npm run chunk-report` 自動產生（來源：`ng build --configuration production --stats-json`）。
> 每次架構調整（拆分/合併 route、抽共用元件）後重新執行，diff 這個檔案即可看出 chunk 分佈的變化。

## 1. Initial chunks（App 啟動即載入，不分 route）

| Chunk | 大小 | entryPoint |
|---|---|---|
| `chunk-PBDSZNI4.js` | 414.3 kB | - |
| `chunk-XM52SWIS.js` | 71.4 kB | - |
| `polyfills.js` | 33.7 kB | angular:polyfills:angular:polyfills |
| `chunk-7ZEH3CYU.js` | 7.6 kB | - |
| `main.js` | 4.0 kB | src/main.ts |
| **合計** | **531.0 kB** | |

## 2. 各 Route 進站時會載入的 chunk

### `/bridge`（進入點：`chunk-PIN4JV7E.js`, 4.9 kB）

- 額外下載量（不含 initial，因為 initial 一定已載入）：**578.2 kB**
- 總計（含 initial）：**1109.2 kB**

| Chunk | 大小 | 是否共用 | entryPoint |
|---|---|---|---|
| `chunk-JWISUD7V.js` | 351.1 kB | 共用 (/bridge, /cover) | - |
| `chunk-I566C3DM.js` | 202.2 kB | 共用 (/bridge, /cover, /ghana, /replay) | - |
| `chunk-SOBRK6T7.js` | 19.9 kB | 共用 (/bridge, /cover, /ghana) | - |
| `chunk-PIN4JV7E.js` | 4.9 kB | route 專屬 | src/app/layouts/layout-bridge/layout-bridge.component.ts |

### `/cover`（進入點：`chunk-RMOD32OO.js`, 45.1 kB）

- 額外下載量（不含 initial，因為 initial 一定已載入）：**777.0 kB**
- 總計（含 initial）：**1308.0 kB**

| Chunk | 大小 | 是否共用 | entryPoint |
|---|---|---|---|
| `chunk-JWISUD7V.js` | 351.1 kB | 共用 (/bridge, /cover) | - |
| `chunk-I566C3DM.js` | 202.2 kB | 共用 (/bridge, /cover, /ghana, /replay) | - |
| `chunk-MOWI2KEC.js` | 158.6 kB | 共用 (/cover, /ghana) | - |
| `chunk-RMOD32OO.js` | 45.1 kB | route 專屬 | src/app/layouts/layout-cover/layout-cover.component.ts |
| `chunk-SOBRK6T7.js` | 19.9 kB | 共用 (/bridge, /cover, /ghana) | - |

### `/ghana`（進入點：`chunk-WG73TT2D.js`, 12.8 kB）

- 額外下載量（不含 initial，因為 initial 一定已載入）：**393.6 kB**
- 總計（含 initial）：**924.7 kB**

| Chunk | 大小 | 是否共用 | entryPoint |
|---|---|---|---|
| `chunk-I566C3DM.js` | 202.2 kB | 共用 (/bridge, /cover, /ghana, /replay) | - |
| `chunk-MOWI2KEC.js` | 158.6 kB | 共用 (/cover, /ghana) | - |
| `chunk-SOBRK6T7.js` | 19.9 kB | 共用 (/bridge, /cover, /ghana) | - |
| `chunk-WG73TT2D.js` | 12.8 kB | route 專屬 | src/app/layouts/layout-ghana/layout-ghana.component.ts |

### `/replay`（進入點：`chunk-HTUSBZAM.js`, 2.3 kB）

- 額外下載量（不含 initial，因為 initial 一定已載入）：**204.5 kB**
- 總計（含 initial）：**735.6 kB**

| Chunk | 大小 | 是否共用 | entryPoint |
|---|---|---|---|
| `chunk-I566C3DM.js` | 202.2 kB | 共用 (/bridge, /cover, /ghana, /replay) | - |
| `chunk-HTUSBZAM.js` | 2.3 kB | route 專屬 | src/app/layouts/replay-layout/replay-layout.component.ts |

## 3. 共用 chunk 一覽（被 2 個以上 route 使用）

| Chunk | 大小 | 被哪些 route 共用 |
|---|---|---|
| `chunk-JWISUD7V.js` | 351.1 kB | /bridge, /cover |
| `chunk-I566C3DM.js` | 202.2 kB | /bridge, /cover, /ghana, /replay |
| `chunk-MOWI2KEC.js` | 158.6 kB | /cover, /ghana |
| `chunk-SOBRK6T7.js` | 19.9 kB | /bridge, /cover, /ghana |

