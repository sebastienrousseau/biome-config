/**
 * Native ES Module usage example for @sebastienrousseau/biome-config
 */
import biomeConfig from "../index.mjs";

console.log("=== ESM Usage Example ===");
console.log("Loaded Biome config via ESM default export:");
console.log("Schema:", biomeConfig.$schema);
console.log("Recommended rules enabled:", biomeConfig.linter.rules.recommended);
