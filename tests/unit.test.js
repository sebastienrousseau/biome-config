const { describe, it } = require("node:test");
const assert = require("assert");
const fs = require("fs");
const path = require("path");

describe("@sebastienrousseau/biome-config Unit Tests", () => {
  it("should load CommonJS module successfully", () => {
    const config = require("../index.cjs");
    assert(config !== null && (typeof config === "object" || typeof config === "string"));
  });

  it("should load root index.js entrypoint successfully", () => {
    const config = require("../index.js");
    assert(config !== null && (typeof config === "object" || typeof config === "string"));
  });

  it("should load ESM module entrypoint successfully", async () => {
    const esm = await import("../index.mjs");
    assert(esm.default !== null && (typeof esm.default === "object" || typeof esm.default === "string"));
  });

  it("should have valid package.json metadata", () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "../package.json"), "utf8"));
    assert.strictEqual(pkg.name, "@sebastienrousseau/biome-config");
    assert.strictEqual(pkg.license, "Apache-2.0 OR MIT");
    assert(pkg.version.length > 0);
  });

  it("should include TypeScript declarations file", () => {
    const dtsPath = path.join(__dirname, "../index.d.ts");
    assert(fs.existsSync(dtsPath));
    const content = fs.readFileSync(dtsPath, "utf8");
    assert(content.length > 0);
  });
});
