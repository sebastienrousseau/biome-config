const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/biome-config...");
  assert(cjsConfig && (typeof cjsConfig === "object" || typeof cjsConfig === "string"), "Config must export object or string");
  console.log("✅ biome-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
