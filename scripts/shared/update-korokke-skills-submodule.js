import fs from "fs";
import { runCommand } from "./run-command.js";

const korokkeSkillsFolder = "korokke_skills";

/**
 * Pull the latest changes for the korokke_skills submodule.
 * @returns {Promise<void>}
 */
export async function updateKorokkeSkillsSubmodule() {
  try {
    if (!fs.existsSync(korokkeSkillsFolder))
      throw new Error(`Submodule folder not found: ${korokkeSkillsFolder}`);

    const command = {
      text: `git -C ${korokkeSkillsFolder} pull`,
      errorMessage: "Please make sure Git is available and you have repository access.",
    };

    const isSuccess = await runCommand(command);

    if (!isSuccess)
      throw new Error(command.errorMessage);

    console.log("✅ updateKorokkeSkillsSubmodule success!");
  } catch (error) {
    console.error("❌ updateKorokkeSkillsSubmodule fail...", error);
    throw error;
  }
}
