import fs from "fs";
import path from "path";

/**
 * Link each project skill folder into ~/.codex/skills without replacing .system.
 */
export function installCodexProjectSkills() {
  try {
    const userHome = process.env.USERPROFILE || process.env.HOME;

    if (!userHome)
      throw new Error("Cannot find user home.");

    const projectSkillsDir = path.resolve(
      "korokke_skills",
      "shared",
      "instruction"
    );
    const codexSkillsDir = path.join(userHome, ".codex", "skills");

    if (!fs.existsSync(projectSkillsDir))
      throw new Error(`Project skills folder not found: ${projectSkillsDir}`);

    fs.mkdirSync(codexSkillsDir, { recursive: true });

    const skillFolders = fs
      .readdirSync(projectSkillsDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory());
    const skillFolderNames = new Set(skillFolders.map((dirent) => dirent.name));

    removeStaleCodexSkillLinks(codexSkillsDir, projectSkillsDir, skillFolderNames);

    for (const skillFolder of skillFolders) {
      const sourcePath = path.join(projectSkillsDir, skillFolder.name);
      const targetPath = path.join(codexSkillsDir, skillFolder.name);

      linkCodexSkill(sourcePath, targetPath);
    }

    console.log("✅ installCodexProjectSkills success!");
  } catch (error) {
    console.error("❌ installCodexProjectSkills fail...", error);
    throw error;
  }
}

/**
 * Remove stale Codex skill links that point to this project's instruction folder.
 * @param {string} codexSkillsDir
 * @param {string} projectSkillsDir
 * @param {Set<string>} skillFolderNames
 */
function removeStaleCodexSkillLinks(
  codexSkillsDir,
  projectSkillsDir,
  skillFolderNames
) {
  const normalizedProjectSkillsDir = path.normalize(projectSkillsDir);

  for (const dirent of fs.readdirSync(codexSkillsDir, { withFileTypes: true })) {
    const targetPath = path.join(codexSkillsDir, dirent.name);

    if (dirent.name === ".system" || skillFolderNames.has(dirent.name))
      continue;

    if (!dirent.isSymbolicLink())
      continue;

    const linkTarget = fs.readlinkSync(targetPath);
    const normalizedLinkTarget = path.normalize(linkTarget);

    if (!normalizedLinkTarget.startsWith(normalizedProjectSkillsDir))
      continue;

    fs.rmSync(targetPath, { recursive: true, force: true });
    console.log(`Removed stale Codex skill link: ${targetPath}`);
  }
}

/**
 * Create or refresh one Codex skill junction.
 * @param {string} sourcePath
 * @param {string} targetPath
 */
function linkCodexSkill(sourcePath, targetPath) {
  if (fs.existsSync(targetPath)) {
    const targetStat = fs.lstatSync(targetPath);

    if (!targetStat.isSymbolicLink()) {
      console.warn(`Skip existing non-link Codex skill: ${targetPath}`);
      return;
    }

    fs.rmSync(targetPath, { recursive: true, force: true });
  }

  fs.symlinkSync(sourcePath, targetPath, "junction");
  console.log(`Linked Codex skill: ${targetPath} -> ${sourcePath}`);
}
