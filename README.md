# 專案安裝與執行說明

## 📦 專案安裝

首次下載專案後，請使用 **Visual Studio Code (VS Code)** 開啟專案。

1. 打開 VS Code。
2. 左側點擊 Extensions，下載 **JavaScript Debugger**
3. 點擊左側選單中的 **Run and Debug**（或使用快捷鍵 `Ctrl + Shift + D`）。
4. 在上方的下拉選單中選擇 **"Install"**。
5. 執行此任務以完成專案初始安裝。

![Run and Debug 畫面](https://gitlab.diresoft.net/ap_web/web_resource/-/raw/master/img/launch.png)

---

## 🚀 專案執行

安裝完成後，可直接透過 VS Code 的 **Run and Debug** 下拉選單執行以下任務之一：

- **Launch**  
  使用 `localhost` 執行專案，不會對外開啟連線。

- **Launch (LAN)**  
  使用本機 IP 開啟專案，可讓區域網路 (LAN) 內的其他裝置連線到本機。  
  > ⚠️ 執行前請確認防火牆設定未阻擋相關連線。

---

## 更新 SKILLS.md

`korokke_skills` 是一個 git submodule，存放架構規則與開發指引。若SKILLS檔案有所變更，請執行：

**Update skills**

---

## 📂 專案資料夾結構

| 資料夾名稱 | 說明 |
|-------------|------|
| **public** | 存放網頁專案會連結到的檔案副本，方便本機測試 |
| **script** | 存放執行 **Run and Debug** 下拉選單時所呼叫的腳本 |

---

## 🧩 備註

- 執行前請確認已正確安裝專案所需依賴。
- 若使用 LAN 模式，請確保防火牆允許相關連線。

---

# 專案 Tech Stack
- Angular 20：使用 standalone components 與 route-based page composition。
- TypeScript 5.8：用於 application code、typed interfaces、pure helpers、service contracts。
- RxJS 7.8：用於 event streams、websocket/server messages、跨邊界 async flows。
- Angular signals：用於 local UI state、derived state、component inputs、template-facing state。
- Tailwind CSS 4：優先用於 component styling，並搭配 `src/app/styles` 底下的 project CSS files。
- Angular CDK：當互動 primitive 有成熟 Angular utility 可用時，優先考慮使用。

# 專案 Repo Map
- `src/app/app.config.ts`：application providers。
- `src/app/app.routes.ts`：route 與 layout/page composition。
- `src/app/layouts`：layout components，負責高層 route frame。
- `src/app/pages`：page components 與 feature screens。
- `src/app/components`：屬於本 app domain 的 reusable app components。
- `src/app/services`：application services、server interfaces、domain controllers、storage、logging、i18n、stateful business logic。
- `src/app/shared`：shared pipes、directives、pure helpers、protocol files、low-level reusable code。
- `src/app/styles`：global style tokens/utilities 與 project-wide CSS helpers。
