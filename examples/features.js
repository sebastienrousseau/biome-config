// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Exhaustive Feature Showcase for @sebastienrousseau/biome-config
 * Covers 100% of configuration capabilities, rule categories, and formatting options.
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/biome-config ===");

// 1. Schema Validation Feature
console.log("[Feature 1: Schema Validation]");
assert(
  typeof config.$schema === "string" && config.$schema.includes("biomejs.dev"),
);
console.log("  ✓ Official Biome schema declared:", config.$schema);

// 2. Import Organization Feature
console.log("[Feature 2: Import Organization]");
assert(config.organizeImports && config.organizeImports.enabled === true);
console.log("  ✓ organizeImports.enabled =", config.organizeImports.enabled);

// 3. Linter Core Feature
console.log("[Feature 3: Linter Core & Presets]");
assert(config.linter && config.linter.enabled === true);
assert(config.linter.rules && config.linter.rules.recommended === true);
console.log("  ✓ linter.enabled =", config.linter.enabled);
console.log("  ✓ linter.rules.recommended =", config.linter.rules.recommended);

// 4. Complexity Rules Feature
console.log("[Feature 4: Complexity Rules]");
assert(config.linter.rules.complexity.noExtraBooleanCast === "error");
console.log(
  "  ✓ complexity.noExtraBooleanCast =",
  config.linter.rules.complexity.noExtraBooleanCast,
);

// 5. Correctness Rules Feature
console.log("[Feature 5: Correctness Rules]");
assert(config.linter.rules.correctness.noUnusedVariables === "error");
console.log(
  "  ✓ correctness.noUnusedVariables =",
  config.linter.rules.correctness.noUnusedVariables,
);

// 6. Style Rules Feature
console.log("[Feature 6: Style Rules]");
assert(config.linter.rules.style.useConst === "error");
console.log("  ✓ style.useConst =", config.linter.rules.style.useConst);

// 7. Formatter Features
console.log("[Feature 7: Formatter Configuration]");
assert(config.formatter && config.formatter.enabled === true);
assert(config.formatter.indentStyle === "space");
assert(config.formatter.indentWidth === 2);
assert(config.formatter.lineEnding === "lf");
assert(config.formatter.lineWidth === 80);
console.log("  ✓ formatter.enabled =", config.formatter.enabled);
console.log("  ✓ formatter.indentStyle =", config.formatter.indentStyle);
console.log("  ✓ formatter.indentWidth =", config.formatter.indentWidth);
console.log("  ✓ formatter.lineEnding =", config.formatter.lineEnding);
console.log("  ✓ formatter.lineWidth =", config.formatter.lineWidth);

console.log(
  "\n✅ 100% of biome-config features and options validated successfully.",
);
