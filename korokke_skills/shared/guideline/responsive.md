# Responsive

| 用途 | Guideline |
| Page container | 行動版預設滿版，桌機再加上 `lg:rounded-xl lg:border-2 lg:max-w-*` |
| Popup width | 優先用 `w-11/12 md:w-3/4 lg:w-1/2` 或元件內建 width config |
| Content padding | 手機先用 `px-2` 或 `p-4`，桌機再加 `md:px-20`、`md:p-8` |
| Layout direction | 手機預設直向，桌機再切 `md:flex-row` 或 `lg:*` |
| Typography scale | 小尺寸優先可讀，桌機再縮回或放大，例如 `text-sm md:text-xs`、`text-2xl md:text-xl` |
| Grid columns | 先從 `grid-cols-1` 或緊湊欄數開始，再用 `md:grid-cols-*`、`lg:grid-cols-*` 擴充 |
| Game panel layout | 遊戲區用 `isMobile()`、`isPortrait()`、`isLandscape()`|
| Date wrapping | 行動版允許換行，例如 `whitespace-pre-line`；桌機可維持單行掃讀 |
| Desktop centering | 桌機不要把 mobile panel 拉滿，必要時維持 mobile 寬度並置中 |

## Breakpoint Prefix

| Prefix | Usage |
| --- | --- |
| none | Mobile-first 預設樣式，先寫最小尺寸可用版面 |
| `md:` | 平板與中尺寸螢幕調整，用於 padding、字級、欄數、橫向排列 |
| `lg:` | 桌機加強樣式，用於外框、圓角、最大寬度、側欄、桌機版留白 |

使用原則：

- 先寫 base class，再逐步補 `md:`、`lg:`，不要反過來。
- `md:` 常用在 `px`、`gap`、`text-*`、`grid-cols-*`、`flex-row`。
- `lg:` 常用在 `max-w-*`、`rounded-*`、`border-*`、`shadow-*`、`hidden` / `flex` 切換。
- 若是遊戲操作區或依比例縮放元件，優先用 shared layout logic，不要只靠 `md:` / `lg:`。

範例：

```tsx
<div className="relative size-full bg-zinc-800 lg:border-2 lg:rounded-xl lg:max-w-5xl">
  <div className="p-4 md:p-8">
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <section className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-xl font-semibold">History</h2>
        <p className="text-sm md:text-xs text-zinc-400">
          Review records across device sizes.
        </p>
      </section>

      <section className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="rounded-lg bg-zinc-900 p-3">Card</div>
        <div className="rounded-lg bg-zinc-900 p-3">Card</div>
      </section>
    </div>
  </div>
</div>
```

補充：

- 先做 mobile layout，再往 `md` / `lg` 加強，不要先做 desktop 再硬塞手機版。
- Popup、page、card 三種容器要分開思考，不要共用同一組固定寬高。
- 資料密集區要先確認手機可讀性，再決定桌機是否增加欄數或左右留白。
- 遊戲操作面板若要「桌機看起來像手機」，要同時處理 layout mode 與 host width/position，不能只改 `isMobile()`。
