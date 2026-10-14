# Color

- Use Tailwind color

| 用途 | Class / Guideline |
| --- | --- |
| App background | `bg-zinc-950`、`bg-zinc-900` |
| Surface / panel | `bg-zinc-800`、`bg-zinc-900` |
| Border | `border-zinc-700`、`border-zinc-600`、`border-zinc-400/50` |
| Primary text | `text-zinc-100`、`text-zinc-200` |
| Secondary text | `text-zinc-300`、`text-zinc-400` |
| Muted / disabled text | `text-zinc-500`、`text-zinc-600` |
| Primary accent | `text-yellow-400`、`bg-yellow-400`、`border-yellow-400` |
| Accent surface | `bg-yellow-400/10`、`bg-yellow-400/15` |
| Event accent | `text-purple-400`、`border-purple-400/50`、`accentColor="purple"` |
| Success state | `text-green-400`、`text-green-300` |
| Error / warning state | `text-red-400`、`text-red-500` |
| Overlay / fade | `from-black/50`、`from-black/90`、`bg-black/40` |

## Color Roles

| Role | Usage |
| --- | --- |
| Zinc | 作為主要底色、surface、邊框、一般文字 |
| Yellow | 作為主要操作強調、目前選中狀態、獎勵金額、icon accent |
| Purple | 作為 event / tournament 系列主題色，不與 yellow 主流程混用 |
| Green | 只用在成功、通過、正向狀態訊息 |
| Red | 只用在錯誤、失敗、警示狀態訊息 |

## Usage Rules

- 先用 zinc 系列建立層次，再用單一 accent 色做重點，不要同一區塊同時塞多個強色。
- 一般流程優先使用 yellow 作為 accent。
- Event / tournament 流程若已經使用 purple，就讓同一區塊維持 purple 主題，不要再混入大量 yellow。
- 金額、選中 tab、互動 icon、toggle accent 可以用 yellow，但一般段落文字不要濫用亮色。
- 狀態色只用來表達狀態，不要拿 red 或 green 當裝飾色。
- Overlay、gradient、glass-like 區塊維持低彩度 dark base，避免搶走主內容。

## Mobile / Desktop Responsive Use

| Situation | Usage |
| --- | --- |
| Mobile | 保持對比清楚，避免過多透明層造成資訊糊在一起 |
| Desktop | 可增加邊框、陰影、圓角，但顏色角色不要改變 |
| Dense table / list | 優先用 zinc 階層分層，accent 只留給排序、選取、重點數值 |
| Popup / overlay | 用深色底搭配亮色 accent，不要改成淺色主題 |

## Breakpoint Prefix

| Prefix | Usage |
| --- | --- |
| none | Mobile-first 預設配色 |
| `md:` | 少量調整背景、間距造成的可讀性差異，通常不大量改色 |
| `lg:` | 桌機增加外框、陰影、圓角時搭配 zinc border / surface |

使用原則：

- 顏色通常不需要因 breakpoint 大幅改變，responsive 重點在 spacing 和 hierarchy。
- 若桌機增加 card/frame，優先補 `lg:border-*`、`lg:rounded-*`，不要改掉原本 accent 邏輯。
- 透明度在 mobile 要特別保守，避免深色背景上疊太多半透明層。

範例：

```tsx
<div className="bg-zinc-900 text-zinc-200 lg:border lg:border-zinc-700 lg:rounded-xl">
  <div className="border-b border-zinc-700 px-4 py-3">
    <h2 className="text-yellow-400 font-semibold">History</h2>
    <p className="text-zinc-400 text-sm">Review your game records.</p>
  </div>

  <button className="bg-yellow-400 text-zinc-900 hover:bg-yellow-300">
    Confirm
  </button>

  <div className="text-red-400 text-sm">Balance is not enough.</div>
</div>
```
