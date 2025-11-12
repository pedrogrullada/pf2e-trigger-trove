import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

const packsDir = path.resolve(process.cwd(), "packs");

if (existsSync(packsDir)) {
  const filesToClean = (await fs.readdir(packsDir)).map((dirName) =>
    path.resolve(packsDir, dirName)
  );
  for (const file of filesToClean) {
    await fs.rm(file, { recursive: true });
  }
} else {
  await fs.mkdir(packsDir);
}

await fs.mkdir(packsDir, { recursive: true });

const packFolders = await fs.readdir("packs");
for (const pack of packFolders) {
  const sourcePath = pack;
  const outputPath = path.resolve(packsDir, pack);

  console.log(`Compiling pack: ${pack}`);
  await compilePack(sourcePath, outputPath);
}

console.log("Pack compilation complete!");
