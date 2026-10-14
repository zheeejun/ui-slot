# AppI18n 多語言服務使用說明

## 📖 概述

`AppI18nService` 是一個類似 NGX-Translate 的多語言翻譯服務，提供統一的多語言 API，支援在 TypeScript 和 HTML 模板中使用。

---

## 🎯 核心功能

- ✅ **響應式翻譯**：使用 Angular Signals，語言切換時自動更新
- ✅ **統一 API**：類似 NGX-Translate 的使用體驗
- ✅ **TypeScript 和 HTML 支援**：提供 Service 和 Pipe 兩種方式
- ✅ **類型安全**：完整的 TypeScript 類型支援
- ✅ **高性能**：使用 Pure Pipe 和 Computed Signal 優化
- ✅ **零依賴**：基於 Angular 內建功能，無需額外安裝套件

---

## 📦 文件結構

```
src/app/
├── services/
│   └── app-i18n/
│       ├── app-i18n.service.ts           # 多語言服務
│       ├── app-i18n.service.spec.ts      # 單元測試
│       └── README.md                     # 本說明文檔
│
└── library/
    └── pipe/
        ├── app-i18n.pipe.ts              # 多語言 Pipe
        └── app-i18n.pipe.spec.ts         # Pipe 測試
```

---

## 🚀 快速開始

### 1. 在 Component 中使用（推薦）

```typescript
import { Component, inject, computed } from '@angular/core';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

@Component({
  selector: 'my-component',
  template: `
    <h1>{{ title() }}</h1>
    <p>{{ description() }}</p>
  `
})
export class MyComponent {
  // 注入服務
  private appI18n = inject(AppI18nService);
  
  // 創建響應式翻譯
  readonly title = this.appI18n.computed('page_title', '預設標題');
  readonly description = this.appI18n.computed('page_description', '預設描述');
}
```

### 2. 在 HTML 中使用 Pipe

```typescript
import { Component } from '@angular/core';
import { AppI18nPipe } from '../../library/pipe/app-i18n.pipe';

@Component({
  selector: 'my-component',
  imports: [AppI18nPipe],
  template: `
    <h1>{{ 'page_title' | appI18n:'預設標題' }}</h1>
    <p>{{ 'page_description' | appI18n }}</p>
  `
})
export class MyComponent {}
```

---

## 📚 API 文檔

### AppI18nService

#### `instant(key: string, defaultValue?: string): string`

同步獲取翻譯文字。

**參數：**
- `key`: 翻譯鍵值（例如：`'leaderBoard_title'`）
- `defaultValue`: 預設值（可選，找不到翻譯時使用）

**返回：** 翻譯後的文字

**範例：**
```typescript
const text = this.appI18n.instant('leaderBoard_title', '排行榜');
// 如果找到翻譯 → 返回後端翻譯文字
// 如果找不到 → 返回 '排行榜'
// 如果沒有預設值 → 返回 'leaderBoard_title'
```

---

#### `computed(key: string, defaultValue?: string): Signal<string>`

創建響應式翻譯 Computed Signal。

**參數：**
- `key`: 翻譯鍵值
- `defaultValue`: 預設值（可選）

**返回：** Computed Signal

**範例：**
```typescript
// 在 Component 中定義
readonly title = this.appI18n.computed('page_title', '標題');

// 在 HTML 中使用（注意要加 ()）
<h1>{{ title() }}</h1>
```

**優點：**
- ✅ 自動響應語言變化
- ✅ 性能優化（只在依賴變化時重新計算）
- ✅ 類型安全

---

#### `get(key: string, defaultValue?: string): string`

獲取翻譯文字（與 `instant` 相同，提供 NGX-Translate 相容性）。

**範例：**
```typescript
const text = this.appI18n.get('some_key', 'default');
```

---

#### `getMany(keys: string[]): Record<string, string>`

批量獲取多個翻譯。

**參數：**
- `keys`: 翻譯鍵值陣列

**返回：** 翻譯結果物件

**範例：**
```typescript
const translations = this.appI18n.getMany([
  'leaderBoard_title',
  'leaderBoard_subtitle',
  'leaderBoard_button'
]);

// 結果：
// {
//   'leaderBoard_title': '排行榜',
//   'leaderBoard_subtitle': '查看排名',
//   'leaderBoard_button': '刷新'
// }
```

---

#### `use(lang: string): void`

設定當前語言。

**參數：**
- `lang`: 語言代碼（例如：`'zh-TW'`, `'en-US'`）

**範例：**
```typescript
// 切換為英文
this.appI18n.use('en-US');

// 所有使用 computed() 的地方會自動更新
```

---

#### `getCurrentLang(): string`

獲取當前語言。

**返回：** 當前語言代碼

**範例：**
```typescript
const currentLang = this.appI18n.getCurrentLang();
console.log(currentLang); // 'zh-TW'
```

---

### AppI18nPipe

在 HTML 模板中使用的翻譯 Pipe。

**語法：**
```html
{{ key | appI18n:defaultValue }}
```

**範例：**
```html
<!-- 基本使用 -->
<h1>{{ 'page_title' | appI18n:'頁面標題' }}</h1>

<!-- 不提供預設值 -->
<p>{{ 'description' | appI18n }}</p>

<!-- 動態 key -->
<div>{{ dynamicKey | appI18n:'預設文字' }}</div>
```

---

## 💡 使用場景

### 場景 1：固定的標籤文字（推薦使用 computed）

```typescript
@Component({
  selector: 'leaderboard',
  template: `
    <h1>{{ title() }}</h1>
    <button>{{ buttonLabel() }}</button>
  `
})
export class LeaderboardComponent {
  private appI18n = inject(AppI18nService);
  
  readonly title = this.appI18n.computed('leaderBoard_title', '排行榜');
  readonly buttonLabel = this.appI18n.computed('leaderBoard_refresh', '刷新');
}
```

**優點：**
- ✅ 響應式（語言切換自動更新）
- ✅ 性能最優
- ✅ 類型安全

---

### 場景 2：動態的鍵值（推薦使用 Pipe）

```typescript
@Component({
  selector: 'dynamic-content',
  imports: [AppI18nPipe, CommonModule],
  template: `
    @for (item of items(); track item.id) {
      <div>{{ item.labelKey | appI18n }}</div>
    }
  `
})
export class DynamicContentComponent {
  items = signal([
    { id: 1, labelKey: 'label_1' },
    { id: 2, labelKey: 'label_2' },
    { id: 3, labelKey: 'label_3' }
  ]);
}
```

**優點：**
- ✅ 可以動態傳入 key
- ✅ 語法簡潔
- ✅ Pure Pipe 性能優化

---

### 場景 3：在程式邏輯中使用（使用 instant）

```typescript
export class MyComponent {
  private appI18n = inject(AppI18nService);
  
  showConfirmDialog() {
    const title = this.appI18n.instant('dialog_title', '確認');
    const message = this.appI18n.instant('dialog_message', '確定要執行此操作嗎？');
    
    // 使用翻譯後的文字
    if (confirm(`${title}\n${message}`)) {
      // 執行操作
    }
  }
  
  validateForm() {
    const errorMsg = this.appI18n.instant('form_error_required', '此欄位為必填');
    return errorMsg;
  }
}
```

---

### 場景 4：批量獲取翻譯

```typescript
export class MenuComponent implements OnInit {
  private appI18n = inject(AppI18nService);
  menuItems = signal<MenuItem[]>([]);
  
  ngOnInit() {
    // 批量獲取翻譯
    const translations = this.appI18n.getMany([
      'menu_home',
      'menu_profile',
      'menu_settings',
      'menu_logout'
    ]);
    
    // 使用翻譯建立選單
    this.menuItems.set([
      { id: 'home', label: translations['menu_home'] },
      { id: 'profile', label: translations['menu_profile'] },
      { id: 'settings', label: translations['menu_settings'] },
      { id: 'logout', label: translations['menu_logout'] }
    ]);
  }
}
```

---

## 🎨 最佳實踐

### ✅ 推薦做法

#### 1. 使用 `inject()` 注入服務
```typescript
// ✅ 推薦：使用 inject()
private appI18n = inject(AppI18nService);
```

```typescript
// ❌ 不推薦：在 constructor 中注入
constructor(private appI18n: AppI18nService) {}
```

**原因：** 使用 `inject()` 可以在類別屬性初始化時使用服務，避免初始化順序問題。

---

#### 2. 固定標籤使用 `computed()`
```typescript
// ✅ 推薦：使用 computed
readonly title = this.appI18n.computed('key', 'default');
```

```html
<h1>{{ title() }}</h1>
```

```typescript
// ❌ 不推薦：在 constructor 中賦值
title: string;
constructor() {
  this.title = this.appI18n.instant('key');
}
```

**原因：** `computed()` 是響應式的，語言切換時會自動更新。

---

#### 3. 動態內容使用 Pipe
```typescript
// ✅ 推薦：使用 pipe
```

```html
<div>{{ dynamicKey | appI18n:'default' }}</div>
```

```typescript
// ❌ 不推薦：在每個地方都創建 computed
readonly label1 = this.appI18n.computed(this.dynamicKey1);
readonly label2 = this.appI18n.computed(this.dynamicKey2);
// ...
```

**原因：** Pipe 更適合動態內容，語法更簡潔。

---

#### 4. 始終提供預設值
```typescript
// ✅ 推薦：提供預設值
readonly title = this.appI18n.computed('page_title', '頁面標題');
```

```typescript
// ❌ 不推薦：不提供預設值
readonly title = this.appI18n.computed('page_title');
// 如果找不到翻譯，會顯示 'page_title'（不友善）
```

**原因：** 提供預設值可以在後端翻譯缺失時提供更好的使用者體驗。

---

## 🔄 與 NGX-Translate 的對比

| 功能 | NGX-Translate | AppI18nService |
|------|--------------|----------------|
| **服務注入** | `TranslateService` | `AppI18nService` ✅ |
| **同步獲取** | `instant(key)` | `instant(key, default)` ✅ |
| **異步獲取** | `get(key)` (Observable) | `get(key, default)` ✅ |
| **Pipe** | `{{ key \| translate }}` | `{{ key \| appI18n:default }}` ✅ |
| **響應式** | Observable | Computed Signal ✅ |
| **切換語言** | `use(lang)` | `use(lang)` ✅ |
| **額外依賴** | 需安裝 npm 套件 | 零依賴 ✅ |
| **性能** | 中等 | 高（Pure Pipe + Signal）✅ |

---

## ❓ 常見問題

### Q1: 為什麼 HTML 中要加 `()` 調用？

**A:** 因為 `computed()` 返回的是 Signal，需要用 `()` 調用來獲取值。

```html
<!-- ✅ 正確 -->
<h1>{{ title() }}</h1>

<!-- ❌ 錯誤 -->
<h1>{{ title }}</h1>
```

---

### Q2: `instant()` 和 `computed()` 有什麼區別？

**A:**
- `instant()`: 立即獲取當前值，不是響應式
- `computed()`: 創建響應式 Signal，語言切換時自動更新

```typescript
// instant - 不響應變化
const text = this.appI18n.instant('key', 'default');

// computed - 響應式
readonly text = this.appI18n.computed('key', 'default');
```

---

### Q3: 什麼時候用 Pipe，什麼時候用 `computed()`？

**A:**
- **固定標籤**：使用 `computed()`（性能更好）
- **動態內容**：使用 Pipe（語法更簡潔）
- **列表渲染**：使用 Pipe
- **條件渲染**：使用 Pipe

```typescript
// 固定標籤 → computed
readonly title = this.appI18n.computed('title', 'default');

// 動態內容 → pipe
```

```html
<div>{{ dynamicKey | appI18n }}</div>
```

---

### Q4: 如何切換語言？

**A:** 調用 `use()` 方法：

```typescript
// 切換為英文
this.appI18n.use('en-US');

// 切換為繁體中文
this.appI18n.use('zh-TW');

// 所有使用 computed() 的地方會自動更新
```

---

### Q5: 如何處理找不到翻譯的情況？

**A:** 有三種情況：

1. **有翻譯**：返回翻譯文字
2. **無翻譯 + 有預設值**：返回預設值
3. **無翻譯 + 無預設值**：返回原始 key

```typescript
// 情況 1：找到翻譯
this.appI18n.instant('page_title', '預設標題')
// → '頁面標題'（來自後端）

// 情況 2：找不到翻譯，使用預設值
this.appI18n.instant('unknown_key', '預設標題')
// → '預設標題'

// 情況 3：找不到翻譯，也沒有預設值
this.appI18n.instant('unknown_key')
// → 'unknown_key'
```

---

## 🧪 測試

### 測試 Service

```typescript
import { TestBed } from '@angular/core/testing';
import { AppI18nService } from './app-i18n.service';
import { AppInterfaceService } from '../app-interface/app-interface.service';

describe('AppI18nService', () => {
  let service: AppI18nService;
  let mockAppInterface: jasmine.SpyObj<AppInterfaceService>;

  beforeEach(() => {
    mockAppInterface = jasmine.createSpyObj('AppInterfaceService', ['commonStr']);
    
    TestBed.configureTestingModule({
      providers: [
        AppI18nService,
        { provide: AppInterfaceService, useValue: mockAppInterface }
      ]
    });
    
    service = TestBed.inject(AppI18nService);
  });

  it('應該返回翻譯文字', () => {
    mockAppInterface.commonStr.and.returnValue('排行榜');
    const result = service.instant('leaderBoard_title');
    expect(result).toBe('排行榜');
  });
});
```

### 測試 Pipe

```typescript
import { AppI18nPipe } from './app-i18n.pipe';
import { AppI18nService } from '../../services/app-i18n/app-i18n.service';

describe('AppI18nPipe', () => {
  let pipe: AppI18nPipe;
  let mockService: jasmine.SpyObj<AppI18nService>;

  beforeEach(() => {
    mockService = jasmine.createSpyObj('AppI18nService', ['instant']);
    pipe = new AppI18nPipe(mockService);
  });

  it('應該調用 appI18n.instant', () => {
    mockService.instant.and.returnValue('排行榜');
    const result = pipe.transform('leaderBoard_title', '預設值');
    
    expect(result).toBe('排行榜');
    expect(mockService.instant).toHaveBeenCalledWith('leaderBoard_title', '預設值');
  });
});
```

---

## 📖 相關資源

- [Angular Signals 文檔](https://angular.dev/guide/signals)
- [Angular Pipes 文檔](https://angular.dev/guide/pipes)
- [Dependency Injection 文檔](https://angular.dev/guide/di)

---

## 📝 更新日誌

### v1.0.0 (2026-02-06)
- ✅ 初始版本發布
- ✅ 提供 `instant()`, `computed()`, `getMany()` 等 API
- ✅ 提供 `AppI18nPipe` 用於 HTML 模板
- ✅ 完整的單元測試覆蓋

---

## 🤝 貢獻

如有問題或建議，歡迎提出！

---

## 📄 授權

本專案遵循專案整體的授權協議。
