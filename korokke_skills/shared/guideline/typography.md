# Typography

依照 `src/app/styles/font.css` 維護 typography。新增頁面或 component 時，優先使用語意 HTML 元素取得 base typography，再用 Tailwind class 做局部調整。

## Font Scale

Root font size 依照 viewport height 調整，所有 `rem` 尺寸都會跟著縮放：

| Viewport height | Root font size |
| --- | --- |
| `0px` - `320px` | `8px` |
| `321px` - `480px` | `10px` |
| `481px` - `640px` | `12px` |
| `641px` - `800px` | `14px` |

## Font Families

`html, body` 定義以下 font variables：

| Token | Stack |
| --- | --- |
| `--font-sans` | `"Inter", "Noto Sans SC", sans-serif` |
| `--font-roboto` | `"Inter", sans-serif` |
| `--font-anton` | `"Anton", sans-serif` |
| `--font-poppins` | `"Poppins", sans-serif` |

## Base Element Styles

`lg:` 在目前樣式中代表 desktop 微調。多數文字在 desktop 會比預設尺寸小一階，避免大螢幕 UI 過於鬆散。

| Element / usage | Base style |
| --- | --- |
| `h1` Page title | `font-semibold text-3xl lg:text-2xl` |
| `h2` Section title | `font-semibold text-2xl lg:text-xl` |
| `h3` Card title | `font-medium text-xl lg:text-lg` |
| `h4` Subsection title | `font-medium text-lg lg:text-base` |
| `h5` Helper title | `font-medium text-base lg:text-sm` |
| `h6` Caption title | `font-medium text-sm lg:text-xs` |
| `p` Body text | `font-normal text-base leading-6 lg:text-sm` |
| `input` Input text | `font-normal text-base lg:text-sm` |
| `label` Label text | `font-medium text-base lg:text-sm` |
| `li` List item | `font-normal text-sm` |
| `th` Table header | `font-semibold text-base lg:text-sm` |
| `td` Table cell | `font-normal text-base lg:text-sm` |
| `span` Inline text | `font-normal text-sm lg:text-xs` |
| `time` Date/time | `font-normal italic text-sm lg:text-xs` |
| `table` Table text | `font-normal text-base lg:text-sm` |

## Usage Rules

- 優先使用 `h1` - `h6`、`p`、`label`、`time`、`table` 等語意元素，讓 base layer 統一控制層級。
- 只有需要覆蓋特定 component 視覺時，才額外加 Tailwind typography class。
- 不要用 viewport width 動態計算 font size；目前 font scaling 由 `font.css` 的 height media query 控制。
- Desktop 微調使用既有 `lg:` 規則，不要混用舊 guideline 的 `md:` typography pattern。

## Example

```html
<section class="space-y-3">
  <h1>History</h1>
  <p class="text-zinc-400">Review your game records.</p>

  <div class="grid grid-cols-4 gap-2">
    <div>
      <h6 class="uppercase text-zinc-400">Date</h6>
      <time class="block text-zinc-100 whitespace-pre-line">
        2026-05-01
        2026-05-07
      </time>
    </div>
  </div>
</section>
```
