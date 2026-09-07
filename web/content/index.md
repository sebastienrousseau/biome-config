---
author: "Sebastien Rousseau"
date: "2026-09-07"
language: "en-GB"
layout: "index"
schema: "index"
changefreq: "weekly"
copyright_year: "2026"
locale_path: "/"
base_path: "/"
name: "biome-config"
short_name: "CF"
openssf_id: "14504"
slug_install: "installation"
slug_usage: "usage"
slug_ref: "reference"
nav_home: "Home"
nav_install: "Installation"
nav_usage: "Usage"
nav_ref: "Reference"
label_skip: "Skip to main content"
label_menu: "Menu"
label_nav: "Main"
label_theme: "Theme"
label_theme_system: "System"
label_docs: "Documentation"
label_footer_nav: "Documentation"
label_docs_nav: "Documentation sections"
label_crumbs: "Breadcrumb"
label_pager: "Page"
label_prev: "Previous"
label_next: "Next"
label_toc: "On this page"
screenshot_alt: "@sebastienrousseau/biome-config architecture and rule enforcement."
footer_note: "@sebastienrousseau/biome-config is part of the @sebastienrousseau/config suite. Published under Apache-2.0 OR MIT."
copyright: "© 2026 Sebastien Rousseau. Licensed under Apache-2.0 OR MIT."
translation_key: "home"
title: "@sebastienrousseau/biome-config — Shareable Biome configuration rules for ultra-fast Rust-based linting and formatting."
description: "Shareable Biome configuration rules for ultra-fast Rust-based linting and formatting across JavaScript, TypeScript, JSX, and JSON projects."
keywords: "biome-config, biome, linter, formatter, rust linter, prettier alternative, eslint alternative, javascript, typescript, jsx, json, developer tools, sebastien rousseau, standard"
hero_tag: "v0.0.3"
hero_tagline: "Ultra-fast Rust-based linting and formatting configuration"
headline: "@sebastienrousseau/biome-config"
lead: "Shareable Biome configuration rules for ultra-fast Rust-based linting and formatting across JavaScript, TypeScript, JSX, and JSON projects."
cta_primary: "Install @sebastienrousseau/biome-config"
cta_secondary: "Reference Guide"
start_h: "Start with one command"
start_lead: "Install with your favourite package manager and extend in seconds."
snippet_caption: "Install @sebastienrousseau/biome-config"
snippet_code: "npm install --save-dev @sebastienrousseau/biome-config"
features_h: "Key capabilities"
features_lead: "Engineered for consistency, performance, and strict typing."
f1_h: "Zero Runtime Dependencies"
f1_body: "Pure configuration with no bloated runtime dependency trees, keeping builds fast and secure."
f2_h: "Dual Module Exports"
f2_body: "Full support for modern ECMAScript Modules (ESM) and CommonJS (CJS) environments."
f3_h: "Full TypeScript Definitions"
f3_body: "Includes complete index.d.ts declarations for rich IDE autocompletion and type checking."
f4_h: "Deterministic Quality Gates"
f4_body: "Audited continuously with SLSA provenance, CodeQL, and automated test suites."
proof_h: "Production Standards"
proof_lead: "Engineered for high-assurance developer platforms and open-source infrastructure."
proof_1_t: "100%"
proof_1_d: "OpenSSF Best Practices passing status and automated scorecard audits."
proof_2_t: "0"
proof_2_d: "Runtime dependencies for lightning-fast installs and minimal attack surface."
proof_3_t: "100%"
proof_3_d: "TypeScript type coverage with comprehensive definitions."
cta_final: "Explore Installation Guide"
---

## What is @sebastienrousseau/biome-config?

**@sebastienrousseau/biome-config** is an enterprise-grade, shareable configuration for [Biome](https://biomejs.dev/)—the ultra-fast toolchain for web projects written in Rust. Designed to replace complex ESLint and Prettier setups with a single, blazingly fast binary, this package provides vetted, deterministic linting and formatting defaults for JavaScript, TypeScript, JSX, TSX, and JSON.

By consolidating formatting and linting into a unified engine, development teams achieve sub-millisecond feedback loops during local editing and CI/CD pipelines. This package adheres strictly to the OpenSSF Best Practices badge program and achieves top-tier security ratings via Scorecard audits.

Explore the complete [Installation Guide](installation/), review the comprehensive [Usage Documentation](usage/), inspect the [API Reference](reference/), or discover AI integrations via the [Model Context Protocol (MCP)](mcp/).

<hr class="divider" />

## Why Developers Choose @sebastienrousseau/biome-config

Modern JavaScript and TypeScript repositories frequently suffer from configuration fatigue, conflicting rules between linters and formatters, and slow execution times. **@sebastienrousseau/biome-config** solves these challenges:

- **Unmatched Speed**: Powered by Biome's Rust architecture, linting and formatting execute up to 35x faster than ESLint and Prettier combined.
- **Zero Runtime Dependencies**: The package adds exactly zero runtime dependencies to your project, guaranteeing zero supply-chain risk and lightning-fast package manager installs.
- **Dual Module Compatibility**: Ready for both ECMAScript Modules (`import`) and CommonJS (`require`), accommodating legacy codebases and modern ESM architectures alike.
- **TypeScript Type Safety**: Bundled TypeScript definitions ensure all configuration objects and helper functions validate under strict `tsc` checks.
- **Enterprise Security & Supply Chain Defense**: Every release is signed and verified with automated OpenSSF Scorecard auditing, SLSA Provenance generation, and continuous CodeQL security scanning.

<hr class="divider" />

## How to Get Started in 3 Steps

Integrating `@sebastienrousseau/biome-config` into any new or existing repository requires only three simple steps.

### Step 1: Install the Package

Install the configuration along with Biome as development dependencies:

```bash
# Using npm
npm install --save-dev @sebastienrousseau/biome-config @biomejs/biome

# Using pnpm
pnpm add -D @sebastienrousseau/biome-config @biomejs/biome

# Using yarn
yarn add -D @sebastienrousseau/biome-config @biomejs/biome
```

For advanced package manager configurations and offline workflows, consult our [Installation Guide](installation/).

### Step 2: Configure `biome.json`

Create or update your `biome.json` file at the root of your project to extend the shared configuration:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": ["@sebastienrousseau/biome-config"]
}
```

Learn how to customize specific lint rules, indentation, line widths, and ignore patterns in the [Usage Guide](usage/).

### Step 3: Run Biome via npm Scripts

Add the standard quality scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write ."
  }
}
```

Now you can execute `npm run lint` or `npm run lint:fix` to automatically format and fix your entire codebase in milliseconds.

<hr class="divider" />

## Key Features & Architecture

| Feature | Description | Benefit |
| :--- | :--- | :--- |
| **Unified Toolchain** | Single configuration for both linting and formatting | Eliminates rule collisions between ESLint and Prettier |
| **Rust Engine** | Native machine code performance | Processes tens of thousands of lines of code in milliseconds |
| **Zero Dependencies** | No transitive dependency graph | Immunity against upstream supply-chain vulnerabilities |
| **Strict Defaults** | Vetted rules prioritizing maintainability and bug prevention | Enforces consistent code style across engineering teams |
| **Full Type Declarations** | TypeScript `.d.ts` included out of the box | Instant autocomplete and schema validation in modern IDEs |

For a detailed breakdown of all exported configuration files and schema fields, visit the [Reference Guide](reference/).

<hr class="divider" />

## Frequently Asked Questions (FAQ)

### What makes Biome different from ESLint and Prettier?
Biome is written in Rust and integrates formatting, linting, and syntax analysis into a single unified binary. Instead of running separate processes for formatting (Prettier) and linting (ESLint) with conflicting plugin ecosystems, Biome handles both in a fraction of the time with unified AST parsing.

### Can I override individual rules in my project?
Yes. Biome's `extends` mechanism allows you to override any specific formatter, linter, or syntax rule directly in your local `biome.json`. See the [Usage Guide](usage/) for concrete examples.

### Is @sebastienrousseau/biome-config safe for production CI/CD?
Yes. The package complies with the OpenSSF Best Practices criteria, carries an active OpenSSF Scorecard audit, and contains zero runtime dependencies. Every release undergoes continuous automated regression testing and CodeQL analysis.

### How does this package support AI and agentic workflows?
The project includes a Model Context Protocol ([MCP](mcp/)) configuration, enabling LLM coding assistants and AI agents to understand, validate, and execute repository configuration tasks autonomously.

