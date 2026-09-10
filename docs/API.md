# `@sebastienrousseau/biome-config` API Specification

Comprehensive schema, type definitions, and exported properties reference for `@sebastienrousseau/biome-config`.

---

## Configuration Schema

The exported object adheres strictly to the official Biome configuration schema (`https://biomejs.dev/schemas/1.8.0/schema.json`).

```typescript
export interface BiomeConfig {
  $schema: string;
  organizeImports: {
    enabled: boolean;
  };
  linter: {
    enabled: boolean;
    rules: {
      recommended: boolean;
      complexity: {
        noExtraBooleanCast: "off" | "warn" | "error";
      };
      correctness: {
        noUnusedVariables: "off" | "warn" | "error";
      };
      style: {
        useConst: "off" | "warn" | "error";
      };
    };
  };
  formatter: {
    enabled: boolean;
    indentStyle: "tab" | "space";
    indentWidth: number;
    lineEnding: "lf" | "crlf" | "cr";
    lineWidth: number;
  };
}
```

---

## Detailed Property Reference

### 1. `$schema`

- **Type**: `string`
- **Default**: `"https://biomejs.dev/schemas/1.8.0/schema.json"`
- **Purpose**: Enables rich IDE auto-completion, hover tooltips, and schema validation in VS Code, JetBrains, and other editor environments.

### 2. `organizeImports`

Controls automated import sorting and grouping.

- `organizeImports.enabled` (`boolean`): Set to `true` to sort imports deterministically on save and during lint passes.

### 3. `linter`

Controls Biome's static analysis engine.

- `linter.enabled` (`boolean`): Master switch for the linting engine. Set to `true`.
- `linter.rules.recommended` (`boolean`): When `true`, activates all upstream Biome recommended diagnostic rules.
- `linter.rules.complexity.noExtraBooleanCast` (`"error"`): Flags redundant boolean casts (e.g. `Boolean(!!x)`) to simplify logical expressions.
- `linter.rules.correctness.noUnusedVariables` (`"error"`): Enforces variable usage; prevents unused declarations and dead state accumulation.
- `linter.rules.style.useConst` (`"error"`): Requires `const` declarations for variables that are never reassigned after initialisation.

### 4. `formatter`

Controls Biome's code formatting engine.

- `formatter.enabled` (`boolean`): Master switch for formatting. Set to `true`.
- `formatter.indentStyle` (`"space"`): Enforces space-based indentation for consistent multi-platform rendering.
- `formatter.indentWidth` (`2`): Standard indentation depth of 2 spaces.
- `formatter.lineEnding` (`"lf"`): Strict Unix LF line endings across all platforms.
- `formatter.lineWidth` (`80`): Soft column wrap boundary at 80 characters for optimal side-by-side diff readability.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/biome-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |
