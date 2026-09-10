// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Basic usage example for @sebastienrousseau/biome-config
 * Demonstrates consuming the default configuration in a standard project.
 */
const biomeConfig = require("../index.cjs");

console.log("=== Basic Usage Example ===");
console.log("Loaded Biome schema:", biomeConfig.$schema);
console.log(
  "Imports organization enabled:",
  biomeConfig.organizeImports.enabled,
);
console.log("Linter enabled:", biomeConfig.linter.enabled);
console.log("Formatter enabled:", biomeConfig.formatter.enabled);
console.log("Formatter line width:", biomeConfig.formatter.lineWidth);
