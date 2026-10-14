import { exec } from "child_process";

/**
 * Run a shell command and resolve with its success state.
 * @param {{ text: string, errorMessage?: string, optional?: boolean }} command
 * @returns {Promise<boolean>}
 */
export function runCommand(command) {
  return new Promise((resolve) => {
    exec(command.text, (error, stdout, stderr) => {
      if (stdout)
        console.log(stdout.trim());

      if (error) {
        if (command.optional) {
          console.warn(`warn: ${command.text}: ${stderr}`);
          resolve(true);
        } else {
          console.error(`${command.text} failed: ${stderr}`, command.errorMessage);
          resolve(false);
        }

        return;
      }

      console.log(`${command.text} success!`);
      resolve(true);
    });
  });
}
