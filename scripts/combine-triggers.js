const fs = require("fs");
const path = require("path");

/**
 * Recursively get all JSON files from a directory
 * @param {string} dir - Directory to search
 * @returns {string[]} Array of file paths
 */
function getAllJsonFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} not found, skipping trigger combination`);
    return [];
  }

  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json") && !entry.name.endsWith("triggers.json")) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Combine multiple trigger JSON files into a single structure
 * @param {string} triggersDir - Directory containing trigger JSON files
 * @param {string} baseFile - Path to write the combined output (optional)
 * @returns {Object} Combined triggers object with {items: [], triggers: []}
 */
function combineTriggers(triggersDir = "./triggers", baseFile = null, pf2eFile = null, sf2eFile = null) {
  const base = [];
  const pf2e = [];
  const sf2e = [];

  const jsonFiles = getAllJsonFiles(triggersDir);
  console.log(`Found ${jsonFiles.length} JSON files`);

  for (const file of jsonFiles) {
    try {
      const content = fs.readFileSync(file, "utf8");
      const data = JSON.parse(content);

      // If the file itself is a trigger object (has id, nodes, etc.)
      if (data.nodes && data.tags) {
        if (data.tags.includes("pf2e") && data.tags.includes("sf2e")) {
          base.push(data);
          console.log(`Added trigger from ${file} to base`);
        }
        if (data.tags.includes("pf2e") && !data.tags.includes("sf2e")) {
          pf2e.push(data);
          console.log(`Added trigger from ${file} to pf2e`);
        }
        if (!data.tags.includes("pf2e") && data.tags.includes("sf2e")) {
          sf2e.push(data);
          console.log(`Added trigger from ${file} to sf2e`);
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log(`\nCombined ${base.length} cross-compatible triggers`);
  console.log(`\nCombined ${pf2e.length} pf2e triggers total`);
  console.log(`\nCombined ${sf2e.length} sf2e triggers total`);

  if (baseFile) {
    const baseOutputDir = path.dirname(baseFile);
    if (!fs.existsSync(baseOutputDir)) {
      fs.mkdirSync(baseOutputDir, { recursive: true });
    }

    fs.writeFileSync(baseFile, JSON.stringify(base, null, 4));
    console.log(`Written to ${baseFile}`);
  }

  if (pf2eFile) {
    const pf2eOutputDir = path.dirname(pf2eFile);
    if (!fs.existsSync(pf2eOutputDir)) {
      fs.mkdirSync(pf2eOutputDir, { recursive: true });
    }

    fs.writeFileSync(pf2eFile, JSON.stringify(pf2e, null, 4));
    console.log(`Written to ${pf2eFile}`);
  }

  if (sf2eFile) {
    const sf2eOutputDir = path.dirname(sf2eFile);
    if (!fs.existsSync(sf2eOutputDir)) {
      fs.mkdirSync(sf2eOutputDir, { recursive: true });
    }

    fs.writeFileSync(sf2eFile, JSON.stringify(sf2e, null, 4));
    console.log(`Written to ${sf2eFile}`);
  }

  return base;
}

if (require.main === module) {
  const triggersDir = process.argv[2] || "./triggers";
  const baseFile = process.argv[3] || "./triggers/base-triggers.json";
  const pf2eFile = process.argv[4] || "./triggers/pf2e-triggers.json";
  const sf2eFile = process.argv[5] || "./triggers/sf2e-triggers.json";

  combineTriggers(triggersDir, baseFile, pf2eFile, sf2eFile);
}

module.exports = { combineTriggers, getAllJsonFiles };
