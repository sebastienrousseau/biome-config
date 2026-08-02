<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./biome-config.svg" alt="biome-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/biome-config</h1>

<p align="center">
  Shareable Biome configuration rules for ultra-fast Rust-based linting and formatting.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/biome-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/biome-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/biome-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Fbiome-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/biome-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/biome-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/biome-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Biome Linter & Formatter Rules](#biome-linter-formatter-rules) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/biome-config

# pnpm
pnpm add -D @sebastienrousseau/biome-config

# yarn
yarn add -D @sebastienrousseau/biome-config

# bun
bun add -d @sebastienrousseau/biome-config
```

---

## Quick Start

### In `package.json`

```json
{
  "biome": "@sebastienrousseau/biome-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/biome-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/biome-config";
export default config;
```

---

## Biome Linter & Formatter Rules

Configures Biome formatting options, tab widths, line endings, and linter rule overrides in `biome.json`.

### Before (Unstandardized)

```javascript
// Loose biome.json
{
  "formatter": { "enabled": true }
}
```

### After (@sebastienrousseau/biome-config Enforced)

```javascript
// biome.json extending @sebastienrousseau/biome-config
{
  "$schema": "https://biomejs.dev/schemas/1.8.0/schema.json",
  "extends": ["@sebastienrousseau/biome-config"]
}
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/biome-config.git
cd biome-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
