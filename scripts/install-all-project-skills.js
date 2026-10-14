import { installClaudeProjectSkills } from "./shared/install-claude-project-skills.js";
import { installCodexProjectSkills } from "./shared/install-codex-project-skills.js";
import { updateKorokkeSkillsSubmodule } from "./shared/update-korokke-skills-submodule.js";

try {
  await updateKorokkeSkillsSubmodule();
  installClaudeProjectSkills();
  installCodexProjectSkills();

  console.log("✅ installAllProjectSkills success!");
} catch (error) {
  console.error("❌ installAllProjectSkills fail...", error);
  process.exitCode = 1;
}
