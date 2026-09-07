/**
 * Advanced usage example for @sebastienrousseau/biome-config
 * Demonstrates overriding formatting and linting rules for custom projects.
 */
const baseConfig = require("../index.cjs");

const customConfig = {
  ...baseConfig,
  formatter: {
    ...baseConfig.formatter,
    lineWidth: 100,
    indentWidth: 4,
  },
  linter: {
    ...baseConfig.linter,
    rules: {
      ...baseConfig.linter.rules,
      style: {
        ...baseConfig.linter.rules.style,
        useConst: "warn",
      },
    },
  },
};

console.log("=== Advanced Usage Example ===");
console.log("Base line width:", baseConfig.formatter.lineWidth, "-> Custom:", customConfig.formatter.lineWidth);
console.log("Base indent width:", baseConfig.formatter.indentWidth, "-> Custom:", customConfig.formatter.indentWidth);
console.log("Custom style rule useConst:", customConfig.linter.rules.style.useConst);
