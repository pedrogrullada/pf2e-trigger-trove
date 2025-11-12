const fs = require("fs");
const path = require("path");

// Configuration
const triggersDir = "./triggers";
const outputFile = "./triggers/pf2e-trigger-trove.json";

// Initialize the combined structure
const combined = {
  items: [],
  triggers: [],
};

// Function to recursively get all JSON files
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

// Get all JSON files from triggers directory
const jsonFiles = getAllJsonFiles(triggersDir);
console.log(`Found ${jsonFiles.length} JSON files`);

// Process each file
for (const file of jsonFiles) {
  try {
    const content = fs.readFileSync(file, "utf8");
    const data = JSON.parse(content);

    // If the file has a triggers array, add all triggers
    if (Array.isArray(data)) {
      combined.triggers.push(...data);
      console.log(`Added ${data.length} triggers from ${file}`);
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

// Write combined file
fs.writeFileSync(outputFile, JSON.stringify(combined, null, 4));
console.log(
  `\nCombined ${combined.triggers.length} triggers into ${outputFile}`
);
