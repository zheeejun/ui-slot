import fs from "fs";
import path from "path";

/**
 * Create the local VS Code dev env file.
 */
export function installDevEnvFile() {
  try {
    const filePath = path.join(".vscode", ".dev");
    const content = "HOST_IP=\n";

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, { encoding: "utf8", flag: "w" });

    console.log("✅ installDevEnvFile success!");
  } catch (error) {
    console.error("❌ installDevEnvFile fail...", error);
    throw error;
  }
}
