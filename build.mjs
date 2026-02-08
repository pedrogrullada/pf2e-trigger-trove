import { compilePack } from "@foundryvtt/foundryvtt-cli";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";
import { combineTriggers } from "./scripts/build/combine-triggers.js";

// Clean output directory, or create build directory
const outDir = path.resolve(process.cwd(), "build");
if (existsSync(outDir)) {
  const filesToClean = (await fs.readdir(outDir)).map((dirName) =>
    path.resolve(outDir, dirName)
  );
  for (const file of filesToClean) {
    await fs.rm(file, { recursive: true });
  }
} else {
  await fs.mkdir(outDir);
}

console.log("Clean Finished");

console.log("Combining Triggers and adding the file to the build");

const baseTriggersOutputPath = path.resolve(
  outDir,
  "triggers/base-triggers.json"
);

const pf2eTriggersOutputPath = path.resolve(
  outDir,
  "triggers/pf2e-triggers.json"
);

const sf2eTriggersOutputPath = path.resolve(
  outDir,
  "triggers/sf2e-triggers.json"
);

combineTriggers("./triggers", baseTriggersOutputPath, pf2eTriggersOutputPath, sf2eTriggersOutputPath);

console.log("Triggers Combined");

// Build packs
const packFolders = await fs.readdir("packs");
for (const pack of packFolders) {
  await compilePack(`packs/${pack}`, path.resolve(outDir, `packs/${pack}`));
}

console.log("Build Packs Finished");

// Copy files and folders to output
const files = [
  "lang",
  "module.json",
  "README.md",
  "LICENSE",
  "CHANGELOG.md",
  "scripts/macros",
  "scripts/api.js",
  "scripts/main.mjs"
];
for (const file of files) {
  await fs.cp(file, path.resolve(outDir, file), { recursive: true });
}

console.log("Build Complete");

if (process.argv[2] === "--watch") {
  const watcher = fs.watch(process.cwd(), { recursive: true });
  console.log("Watching Files");
  for await (const event of watcher) {
    const file = (event.filename ?? "").split(path.sep)[0];
    if (files.includes(file)) {
      const outFile = path.resolve(outDir, file);
      if (existsSync(file)) {
        await fs.cp(file, outFile, { recursive: true });
      } else {
        await fs.rm(outFile, { recursive: true });
      }
      console.log("Files updated");
    }
  }
}
