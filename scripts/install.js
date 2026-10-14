import { setTimeout } from "timers/promises";
import { installCodexProjectSkills } from "./shared/install-codex-project-skills.js";
import { installDevEnvFile } from "./shared/install-dev-env-file.js";
import { installProjectDependencies } from "./shared/install-project-dependencies.js";
import { installSubmodules } from "./shared/install-submodules.js";
import { installClaudeProjectSkills } from "./shared/install-claude-project-skills.js";

await setTimeout(1);
console.clear();

try {
  await installSubmodules();
  await installProjectDependencies();
  installCodexProjectSkills();
  installClaudeProjectSkills();
  installDevEnvFile();

  console.log("✅ install complete.");
} catch (error) {
  console.error("❌ install fail...", error);
  process.exitCode = 1;
}
