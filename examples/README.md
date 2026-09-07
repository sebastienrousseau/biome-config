# `@sebastienrousseau/biome-config` Examples Catalog

This directory contains runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/biome-config`.

---

## Example Suite Overview

| File | Type | Feature Coverage | Command |
| :--- | :--- | :--- | :--- |
| [`basic.js`](./basic.js) | CommonJS | Standard default configuration import | `node examples/basic.js` |
| [`advanced.js`](./advanced.js) | CommonJS | Custom overrides (linter rules & formatter settings) | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs) | ES Module | Native ESM consumption via `import` | `node examples/esm.mjs` |
| [`features.js`](./features.js) | CommonJS | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **Schema Validation**: `$schema` declaration pointing to Biome v1.8.0 specification.
- [x] **Import Organization**: Automated import grouping and sorting (`organizeImports.enabled`).
- [x] **Linter Core**: Fast Rust-based linter enablement (`linter.enabled`).
- [x] **Recommended Rules**: Upstream recommended rule baseline (`linter.rules.recommended`).
- [x] **Complexity Rules**: AST complexity checks including `complexity.noExtraBooleanCast`.
- [x] **Correctness Rules**: Bug-prevention invariants including `correctness.noUnusedVariables`.
- [x] **Style Rules**: Modern idiomatic JavaScript conventions including `style.useConst`.
- [x] **Formatter Core**: Biome formatter enablement (`formatter.enabled`).
- [x] **Indentation Formatting**: Space-based indentation (`indentStyle: "space"`, `indentWidth: 2`).
- [x] **Line Formatting**: Unix line endings (`lineEnding: "lf"`) and print width constraint (`lineWidth: 80`).
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```
