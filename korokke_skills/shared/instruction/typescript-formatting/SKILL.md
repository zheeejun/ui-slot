---
name: typescript-formatting
description: ui_korokke TypeScript formatting convention. Use when editing, formatting, reviewing, or configuring TypeScript files, especially imports and Format Document behavior.
metadata:
  short-description: TypeScript formatting
---

# Goal
Maintain the project TypeScript formatting style when code is edited or when Format Document behavior is discussed.

# Import Formatting Rule
- Keep TypeScript named imports on one line.
- Do not reformat imported names into multiple lines just because Format Document was used.
- Prefer this style:

```typescript
import { Component, computed, inject, signal } from '@angular/core';
```

- Avoid this style:

```typescript
import {
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
```

# Workflow
- Before editing TypeScript imports, preserve existing single-line import style where possible.
- If a formatter or IDE setting would split imports into multiple lines, adjust the formatter configuration or the edit so named imports remain single-line.
- Do not introduce unrelated formatting churn while fixing import formatting.

# Review Checklist
- TypeScript named imports remain single-line.
- Format Document does not create multi-line named import blocks.
- Any formatter configuration change is scoped to preserving this import style.
