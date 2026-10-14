import fs from "fs";
import { setTimeout } from "timers/promises";
import { runCommand } from "./run-command.js";

const targetFolders = [
  "src/chiikawa",
  "src/ap-components-lib",
  "korokke_skills",
];

const gitCommands = [
  {
    text: "git submodule add --force https://gitlab.diresoft.net/client_cocos/chiikawa.git src/chiikawa",
    errorMessage: "Please make sure Git is available and you have repository access.",
  },
  {
    text: "git submodule add --force https://gitlab.diresoft.net/ap_web/ap-components-lib.git src/ap-components-lib",
    errorMessage: "Please make sure Git is available and you have repository access.",
  },
  {
    text: "git submodule add --force https://gitlab.diresoft.net/ap_skills/korokke_skills.git korokke_skills",
    errorMessage: "Please make sure Git is available and you have repository access.",
  },
];

/**
 * Reinstall project submodules.
 * @returns {Promise<void>}
 */
export async function installSubmodules() {
  try {
    for (const targetFolder of targetFolders) {
      const isDeleted = await deleteTargetFolder(targetFolder);

      if (isDeleted === false && fs.existsSync(targetFolder))
        throw new Error(`Delete folder failed: ${targetFolder}`);
    }

    for (const command of gitCommands) {
      const isSuccess = await runCommand(command);

      if (!isSuccess)
        throw new Error(command.errorMessage);

      await setTimeout(1000);
    }

    console.log("✅ installSubmodules success!");
  } catch (error) {
    console.error("❌ installSubmodules fail...", error);
    throw error;
  }
}

/**
 * Delete a target folder if it exists.
 * @param {string} targetFolder
 * @returns {Promise<boolean>}
 */
async function deleteTargetFolder(targetFolder) {
  if (!fs.existsSync(targetFolder)) {
    console.log(`not exist: ${targetFolder}`);
    return false;
  }

  return new Promise((resolve) => {
    fs.rm(targetFolder, { recursive: true, force: true }, (err) => {
      if (err) {
        console.log("delete error", err);
        resolve(false);
        return;
      }

      console.log(`delete: ${targetFolder}`);
      resolve(true);
    });
  });
}
