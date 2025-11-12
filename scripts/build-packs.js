import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

const buildDir = path.resolve(process.cwd(), "build");

if (existsSync(buildDir)) {
  const filesToClean = (await fs.readdir(buildDir)).map((dirName) =>
    path.resolve(buildDir, dirName)
  );
  for (const file of filesToClean) {
    await fs.rm(file, { recursive: true });
  }
} else {
  await fs.mkdir(buildDir);
}

const packsOutDir = path.resolve(buildDir, "packs");
await fs.mkdir(packsOutDir, { recursive: true });

const packFolders = await fs.readdir("packs");
for (const pack of packFolders) {
  const sourcePath = `packs/${pack}`;
  const outputPath = path.resolve(packsOutDir, pack);

  console.log(`Compiling pack: ${pack}`);
  await compilePack(sourcePath, outputPath);
}

console.log("Pack compilation complete!");
