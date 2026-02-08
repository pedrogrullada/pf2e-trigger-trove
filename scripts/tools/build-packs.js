import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

const packsDir = path.resolve(process.cwd(), "packs");

if (!existsSync(packsDir)) {
  console.error("Error: packs directory does not exist!");
  process.exit(1);
}

const packFolders = await fs.readdir(packsDir, { withFileTypes: true });

for (const pack of packFolders) {
  if (!pack.isDirectory()) {
    continue;
  }

  const packName = pack.name;
  const sourcePath = path.resolve(packsDir, packName);
  const outputPath = path.resolve(packsDir, packName);

  console.log(`Compiling pack: ${packName}`);

  try {
    await compilePack(sourcePath, outputPath);
    console.log(`Successfully compiled: ${packName}`);

    const contents = await fs.readdir(sourcePath, { withFileTypes: true });
    for (const item of contents) {
      const itemPath = path.resolve(sourcePath, item.name);
      if (item.isFile() && item.name.endsWith(".json")) {
        await fs.unlink(itemPath);
      }
    }
    console.log(`  Cleaned source JSON files from ${packName}`);
  } catch (error) {
    console.error(`Failed to compile ${packName}:`, error.message);
  }
}

console.log("Pack compilation complete!");
