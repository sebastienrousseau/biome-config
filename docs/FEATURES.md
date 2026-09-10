# `@sebastienrousseau/biome-config` Features & Capabilities

An exhaustive overview covering **100% of the features, rules, and capabilities** provided by `@sebastienrousseau/biome-config`.

---

## Core Feature Matrix

| Feature | Scope | Status | Guarantee |
| :--- | :--- | :--- | :--- |
| **Schema Validation** | Global | Active | Conforms to Biome v1.8.0 JSON Schema |
| **Automated Import Organization** | Module Imports | Active | Deterministic grouping & alphabetical sorting |
| **Rust-Powered Linting** | AST Analysis | Active | Sub-millisecond rule evaluation |
| **Recommended Rule Baseline** | Correctness | Active | Upstream recommended checks enabled |
| **Complexity Reduction** | Simplification | Active | Eliminates redundant boolean conversions |
| **Dead-Code Elimination** | Correctness | Active | Fails on unused variables and bindings |
| **Immutability Enforcement** | Style | Active | Requires `const` for non-reassigned variables |
| **Consistent Formatting** | Source Code | Active | 2 spaces, Unix LF line endings, 80 col width |
| **Zero Runtime Dependencies** | Distribution | Active | Pure configuration object with 0 npm deps |
| **Dual Module Packaging** | Distribution | Active | Seamless CommonJS and ESM interoperability |
| **TypeScript Declarations** | Types | Active | Bundled `.d.ts` type definitions |

---

## 1. Schema Validation

Declared via `$schema`: `"https://biomejs.dev/schemas/1.8.0/schema.json"`. Guarantees instant IDE validation, autocomplete for all fields, and configuration linting directly in developer workstations.

## 2. Import Organization (`organizeImports`)

Biome organizes and sorts imports automatically without external plugins like Prettier import-sorter. It groups external packages and relative imports with zero runtime latency.

## 3. Linter Core & Rules (`linter`)

- **Recommended Baseline**: Inherits Biome's vetted best-practice rules.
- **`noExtraBooleanCast`**: Detects redundant `Boolean()` calls or `!!` double negations within conditionals.
- **`noUnusedVariables`**: Catches dangling identifiers, unused parameters, and unreferenced imported symbols.
- **`useConst`**: Signals programmer intent and prevents accidental mutations by ensuring constants are explicitly locked down.

## 4. Formatter Core (`formatter`)

- **Indentation**: 2 spaces (`indentStyle: "space"`, `indentWidth: 2`).
- **Line Endings**: Unix LF (`lineEnding: "lf"`) to prevent cross-OS CRLF git churn.
- **Line Width**: 80 characters (`lineWidth: 80`) to enable side-by-side three-way merge conflict resolution.

## 5. Dual Module Packaging

- CommonJS: `require("@sebastienrousseau/biome-config")` via `index.cjs` and `index.js`.
- ES Modules: `import biomeConfig from "@sebastienrousseau/biome-config"` via `index.mjs`.
