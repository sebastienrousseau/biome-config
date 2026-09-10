// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Modern Biome CommonJS Configuration
 */
module.exports = {
  $schema: "https://biomejs.dev/schemas/1.8.0/schema.json",
  organizeImports: {
    enabled: true,
  },
  linter: {
    enabled: true,
    rules: {
      recommended: true,
      complexity: {
        noExtraBooleanCast: "error",
      },
      correctness: {
        noUnusedVariables: "error",
      },
      style: {
        useConst: "error",
      },
    },
  },
  formatter: {
    enabled: true,
    indentStyle: "space",
    indentWidth: 2,
    lineEnding: "lf",
    lineWidth: 80,
  },
};
