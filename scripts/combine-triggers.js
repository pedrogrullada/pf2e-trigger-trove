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
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Combine multiple trigger JSON files into a single structure
 * @param {string} triggersDir - Directory containing trigger JSON files
 * @param {string} outputFile - Path to write the combined output (optional)
 * @returns {Object} Combined triggers object with {items: [], triggers: []}
 */
function combineTriggers(triggersDir = "./triggers", outputFile = null) {
  const combined = {
    items: [],
    triggers: [],
  };

  const jsonFiles = getAllJsonFiles(triggersDir);
  console.log(`Found ${jsonFiles.length} JSON files`);

  for (const file of jsonFiles) {
    try {
      const content = fs.readFileSync(file, "utf8");
      const data = JSON.parse(content);

      // If the file is an array, add each element
      if (Array.isArray(data)) {
        combined.triggers.push(...data);
        console.log(`Added ${data.length} triggers from array in ${file}`);
      }
      // If the file itself is a trigger object (has _id, nodes, etc.)
      else if (data._id && data.nodes) {
        combined.triggers.push(data);
        console.log(`Added trigger from ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log(`\nCombined ${combined.triggers.length} triggers total`);

  if (outputFile) {
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFile, JSON.stringify(combined, null, 4));
    console.log(`Written to ${outputFile}`);
  }

  return combined;
}

if (require.main === module) {
  const triggersDir = process.argv[2] || "./triggers";
  const outputFile = process.argv[3] || "./triggers/pf2e-trigger-trove.json";

  combineTriggers(triggersDir, outputFile);
}

module.exports = { combineTriggers, getAllJsonFiles };
