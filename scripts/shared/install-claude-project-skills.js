import fs from "fs";
import path from "path";

/**
 * 安裝 CLAUDE.md，將 korokke_skills 內的 SKILL.md 和 .md 文件匯總到 CLAUDE.md 中，
 */

// korokke_skills 資料夾位置（相對於執行目錄）
const SKILLS_ROOT = "korokke_skills";
// 輸出的 CLAUDE.md 路徑
const CLAUDE_MD_PATH = "CLAUDE.md";

// services 底下的文件排序：spec → design → development
const SECTION_ORDER = ["spec.md", "design.md", "development.md"];

export function installClaudeProjectSkills() {
  try {
    const skillsRoot = path.resolve(SKILLS_ROOT);

    if (!fs.existsSync(skillsRoot))
      throw new Error(`korokke_skills folder not found: ${skillsRoot}`);

    // 收集 shared/instruction 底下所有 SKILL.md（架構規則）
    const instructions = collectFiles(
      path.join(skillsRoot, "shared", "instruction"),
      (f) => f.name === "SKILL.md"
    );

    // 收集 shared/guideline 底下所有 .md（編碼規範）
    const guidelines = collectFiles(
      path.join(skillsRoot, "shared", "guideline"),
      (f) => f.name.endsWith(".md")
    );

    // 收集 services 底下每個 service 資料夾的 .md，並按 SECTION_ORDER 排序
    const servicesDir = path.join(skillsRoot, "services");
    const serviceGroups = fs
      .readdirSync(servicesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => ({
        name: d.name,
        files: collectFiles(path.join(servicesDir, d.name), (f) =>
          f.name.endsWith(".md")
        ).sort(
          (a, b) =>
            (SECTION_ORDER.indexOf(path.basename(a)) ?? 99) -
            (SECTION_ORDER.indexOf(path.basename(b)) ?? 99)
        ),
      }))
      .filter((g) => g.files.length > 0);

    // 組合 CLAUDE.md 內容
    const lines = ["# ui_korokke", ""];

    if (instructions.length > 0) {
      lines.push("## Architecture guidelines", "");
      for (const f of instructions) lines.push(`@${toRelative(f)}`);
      lines.push("");
    }

    if (guidelines.length > 0) {
      lines.push("## Coding guidelines", "");
      for (const f of guidelines) lines.push(`@${toRelative(f)}`);
      lines.push("");
    }

    fs.writeFileSync(CLAUDE_MD_PATH, lines.join("\n"), "utf-8");
    console.log(`✅ CLAUDE.md updated (${path.resolve(CLAUDE_MD_PATH)})`);
  } catch (error) {
    console.error("❌ installClaudeProjectSkills fail...", error);
    throw error;
  }
}

/**
 * 遞迴收集目錄下符合 filter 的檔案，回傳絕對路徑陣列。
 * @param {string} dir
 * @param {(dirent: fs.Dirent) => boolean} filter
 * @returns {string[]}
 */
function collectFiles(dir, filter) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((dirent) => {
      const full = path.join(dir, dirent.name);
      if (dirent.isDirectory()) return collectFiles(full, filter);
      return filter(dirent) ? [full] : [];
    });
}

/**
 * 將絕對路徑轉換為相對於 cwd 的正斜線路徑，供 CLAUDE.md @ import 使用。
 * @param {string} absPath
 * @returns {string}
 */
function toRelative(absPath) {
  return path.relative(process.cwd(), absPath).replace(/\\/g, "/");
}
