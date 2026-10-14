// scripts/chunk-report.js  (Node 20+)
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import crypto from "crypto";

/**
 * 產生 production build 的 chunk 對應報告：
 * - 每個 chunk 的大小
 * - 各 route 進站時實際會載入哪些 chunk（含共用 chunk）
 * - 哪些 chunk 是被多個 route 共用
 *
 * 用途：架構調整後（拆分/合併 route、抽共用元件）快速比對 chunk 分佈的差異。
 * 用法：npm run chunk-report
 */

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");
const STATS_PATH = path.join(DIST, "stats.json");
const OUT_PATH = path.join(ROOT, "CHUNK_REPORT.md");

console.log("[chunk-report] building production bundle with stats...");
execSync(
  "npx ng build --configuration production --output-hashing=none --stats-json",
  { cwd: ROOT, stdio: "inherit" }
);

const stats = JSON.parse(fs.readFileSync(STATS_PATH, "utf8"));
const outputs = stats.outputs;

const jsOutputs = Object.fromEntries(
  Object.entries(outputs).filter(([file]) => file.endsWith(".js"))
);

function fmtKB(bytes) {
  return (bytes / 1024).toFixed(1) + " kB";
}

// esbuild 的 chunk 檔名（chunk-XXXXX.js）每次 build 都是隨機 hash，直接拿來做報告
// 會讓 git diff 每次都整份炸開。改用「這個 chunk 實際包含哪些原始檔」算出的穩定 id，
// 內容不變 id 就不變，內容變了 id 才跟著變 —— 這樣 diff 才有意義。
function stableId(f) {
  const inputs = Object.keys(jsOutputs[f].inputs || {}).sort();
  return crypto.createHash("sha1").update(inputs.join("\n")).digest("hex").slice(0, 8);
}

function srcAppModuleNames(f) {
  const inputs = Object.keys(jsOutputs[f].inputs || {});
  return inputs
    .filter((i) => i.startsWith("src/app") || i.startsWith("src/ap-components-lib"))
    .map((i) =>
      path
        .basename(i)
        .replace(/\.(component|service|directive|pipe|interface|data|function|type)\.ts$/, "")
        .replace(/\.ts$/, "")
    );
}

function hintFor(f) {
  const uniq = [...new Set(srcAppModuleNames(f))];
  if (uniq.length === 0) return "(第三方套件)";
  return uniq.slice(0, 4).join(", ") + (uniq.length > 4 ? `, … 共 ${uniq.length} 個模組` : "");
}

// 讀取 app.routes.ts / dev.routes.ts，建立 「import 路徑片段 -> route path」 對照表，
// 讓報告能顯示 /bridge 這種實際網址，而不是只有原始檔名。
function extractRouteMap(routeFile) {
  const map = new Map();
  if (!fs.existsSync(routeFile)) return map;
  const text = fs.readFileSync(routeFile, "utf8");
  const re =
    /path:\s*'([^']*)'[\s\S]*?loadComponent:\s*\(\)\s*=>\s*import\(\s*['"]([^'"]+)['"]\s*\)/g;
  let m;
  while ((m = re.exec(text))) {
    const [, routePath, importPath] = m;
    const normalized = importPath.replace(/^\.\//, "").replace(/^\.\.\//g, "");
    map.set(normalized, routePath === "" ? "/" : `/${routePath}`);
  }
  return map;
}

const routeMap = new Map([
  ...extractRouteMap(path.join(ROOT, "src/app/app.routes.ts")),
  ...extractRouteMap(path.join(ROOT, "src/app/dev.routes.ts")),
]);

function routeLabelFor(entryPoint) {
  if (!entryPoint) return null;
  for (const [importFrag, routePath] of routeMap) {
    if (entryPoint.endsWith(importFrag.replace(/^\.+\//, "") + ".ts")) {
      return routePath;
    }
    // app.routes.ts 的 import 路徑是相對於 layouts 資料夾，用檔名比對即可
    const base = importFrag.split("/").pop();
    if (entryPoint.endsWith(`/${base}.ts`)) return routePath;
  }
  return null;
}

// 報告內用來代表一個 chunk 的穩定顯示名稱：
// - main / polyfills：固定名稱
// - route entry：用 route path，例如 route:/bridge
// - 其他（共用或內部) chunk：用內容 hash，例如 shared~a1b2c3d4
function displayName(f) {
  const entry = jsOutputs[f];
  if (entry.entryPoint === "src/main.ts") return "main";
  if (String(entry.entryPoint || "").includes("polyfills")) return "polyfills";
  const routeLabel = routeLabelFor(entry.entryPoint);
  if (routeLabel) return `route:${routeLabel}`;
  return `shared~${stableId(f)}`;
}

// main entry
const mainFile = Object.keys(jsOutputs).find(
  (f) => jsOutputs[f].entryPoint === "src/main.ts"
);
if (!mainFile) {
  throw new Error("找不到 main entry，請確認 build 是否成功");
}

// BFS：只走 import-statement（static import），代表「載入這個 chunk 時一定會一起載入」
function collectStatic(startFiles) {
  const visited = new Set();
  const queue = [...startFiles];
  while (queue.length) {
    const f = queue.shift();
    if (visited.has(f) || !jsOutputs[f]) continue;
    visited.add(f);
    for (const imp of jsOutputs[f].imports || []) {
      if (imp.kind === "import-statement" && !visited.has(imp.path)) {
        queue.push(imp.path);
      }
    }
  }
  return visited;
}

// 1. Initial set：main.js 的 static import 閉包（app 啟動就會載入，不分 route）
const initialSet = collectStatic([mainFile]);
const polyfillsFile = Object.keys(jsOutputs).find((f) =>
  String(jsOutputs[f].entryPoint || "").includes("polyfills")
);
if (polyfillsFile) initialSet.add(polyfillsFile);

// 2. Route entries：main.js 的 dynamic-import 目標
const mainOut = jsOutputs[mainFile];
const routeEntries = (mainOut.imports || [])
  .filter((i) => i.kind === "dynamic-import")
  .map((i) => i.path)
  .filter((f) => jsOutputs[f]);

// 3. 每個 route 各自的 static import 閉包（= 進這個 route 實際會載入的所有 chunk）
const routeReports = routeEntries.map((entryFile) => {
  const entry = jsOutputs[entryFile];
  const fullSet = collectStatic([entryFile]);
  const additional = [...fullSet].filter((f) => !initialSet.has(f));
  const additionalBytes = additional.reduce(
    (sum, f) => sum + jsOutputs[f].bytes,
    0
  );
  return {
    entryFile,
    entry,
    label: routeLabelFor(entry.entryPoint) || entry.entryPoint,
    fullSet,
    additional,
    additionalBytes,
  };
});

// 4. 共用 chunk：被 2 個以上 route 用到（排除 initial 與 route entry 自己）
const usageCount = new Map();
for (const r of routeReports) {
  for (const f of r.additional) {
    if (f === r.entryFile) continue;
    if (!usageCount.has(f)) usageCount.set(f, new Set());
    usageCount.get(f).add(r.label);
  }
}
const sharedChunks = [...usageCount.entries()]
  .filter(([, routes]) => routes.size > 1)
  .sort((a, b) => jsOutputs[b[0]].bytes - jsOutputs[a[0]].bytes);

// ---- 產生 report ----
let md = "";
md += "# Chunk Report\n\n";
md += `> 由 \`npm run chunk-report\` 自動產生（來源：\`ng build --configuration production --stats-json\`）。\n`;
md += `> 每次架構調整（拆分/合併 route、抽共用元件）後重新執行，diff 這個檔案即可看出 chunk 分佈的變化。\n\n`;

md += "## 1. Initial chunks（App 啟動即載入，不分 route）\n\n";
md += "| Chunk | 大小 | 內容 |\n|---|---|---|\n";
let initialTotal = 0;
for (const f of [...initialSet].sort(
  (a, b) => jsOutputs[b].bytes - jsOutputs[a].bytes
)) {
  initialTotal += jsOutputs[f].bytes;
  const content =
    jsOutputs[f].entryPoint === "src/main.ts" || String(jsOutputs[f].entryPoint || "").includes("polyfills")
      ? jsOutputs[f].entryPoint
      : hintFor(f);
  md += `| \`${displayName(f)}\` | ${fmtKB(jsOutputs[f].bytes)} | ${content} |\n`;
}
md += `| **合計** | **${fmtKB(initialTotal)}** | |\n\n`;

md += "## 2. 各 Route 進站時會載入的 chunk\n\n";
for (const r of routeReports.sort((a, b) =>
  a.label.localeCompare(b.label)
)) {
  md += `### \`${r.label}\`（進入點：\`${displayName(r.entryFile)}\`, ${fmtKB(
    r.entry.bytes
  )}）\n\n`;
  md += `- 額外下載量（不含 initial，因為 initial 一定已載入）：**${fmtKB(
    r.additionalBytes
  )}**\n`;
  md += `- 總計（含 initial）：**${fmtKB(
    r.additionalBytes + initialTotal
  )}**\n\n`;
  md += "| Chunk | 大小 | 是否共用 | 內容 |\n|---|---|---|---|\n";
  for (const f of [...r.additional].sort(
    (a, b) => jsOutputs[b].bytes - jsOutputs[a].bytes
  )) {
    const shared = usageCount.has(f) && usageCount.get(f).size > 1;
    const sharedLabel = shared
      ? `共用 (${[...usageCount.get(f)].join(", ")})`
      : f === r.entryFile
      ? "route 專屬"
      : "-";
    const content = f === r.entryFile ? r.entry.entryPoint : hintFor(f);
    md += `| \`${displayName(f)}\` | ${fmtKB(jsOutputs[f].bytes)} | ${sharedLabel} | ${content} |\n`;
  }
  md += "\n";
}

md += "## 3. 共用 chunk 一覽（被 2 個以上 route 使用）\n\n";
if (sharedChunks.length === 0) {
  md += "目前沒有任何 route 之間共用 chunk。\n\n";
} else {
  md += "| Chunk | 大小 | 被哪些 route 共用 |\n|---|---|---|\n";
  for (const [f, routes] of sharedChunks) {
    md += `| \`${displayName(f)}\` | ${fmtKB(jsOutputs[f].bytes)} | ${[...routes].join(
      ", "
    )} |\n`;
  }
  md += "\n";
}

md += "## 4. 共用 chunk 內容明細（完整檔案清單）\n\n";
md += "> 這一段列出每個共用 chunk 實際包含的原始檔，之後如果某次 diff 只有這一段變化，代表共用範圍改變了（可能是新元件被拉進共用依賴，或某個依賴被拆出去了）。\n\n";
for (const [f] of sharedChunks) {
  const names = srcAppModuleNames(f).sort();
  md += `<details><summary><code>${displayName(f)}</code>（${fmtKB(jsOutputs[f].bytes)}, ${names.length} 個模組）</summary>\n\n`;
  for (const n of names) md += `- ${n}\n`;
  md += "\n</details>\n\n";
}

fs.writeFileSync(OUT_PATH, md, "utf8");
console.log(`[chunk-report] written to ${OUT_PATH}`);
