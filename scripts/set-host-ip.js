// scripts/set-host-ip.js  (Node 16+)
import os from "os";
import fs from "fs";

/**
 * 自動偵測本機 IP 並寫入 .vscode/.dev 的 HOST_IP 變數，供開發環境使用。
 */

const ip =
  Object.values(os.networkInterfaces()).flat()
    .find(n => n && n.family === "IPv4" && !n.internal)?.address
  || "127.0.0.1";

fs.mkdirSync(".vscode", { recursive: true });
const envPath = ".vscode/.dev";
let text = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";

// 只更新/新增 HOST_IP 這一行
const hasKey = /^\s*HOST_IP\s*=.*$/m.test(text);
text = hasKey
  ? text.replace(/^\s*HOST_IP\s*=.*$/m, `HOST_IP=${ip}`)
  : (text.endsWith("\n") || text === "" ? text : text + "\n") + `HOST_IP=${ip}\n`;

fs.writeFileSync(envPath, text, "utf8");
console.log(`[HOST_IP] ${ip}`);
