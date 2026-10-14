import { runCommand } from "./run-command.js";

/**
 * Install project dependencies.
 * @returns {Promise<void>}
 */
export async function installProjectDependencies() {
  try {
    console.log("running npm install...");

    const isSuccess = await runCommand({
      text: "npm install",
      errorMessage: "npm install failed.",
    });

    if (!isSuccess)
      throw new Error("npm install failed.");

    console.log("✅ installProjectDependencies success!");
  } catch (error) {
    console.error("❌ installProjectDependencies fail...", error);
    throw error;
  }
}
