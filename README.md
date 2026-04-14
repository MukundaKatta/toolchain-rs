# toolchain-rs — Unified frontend toolchain — manages runtime, package manager, and development tools in one binary

**Live:** <https://mukundakatta.github.io/toolchain-rs/>

Unified frontend toolchain — manages runtime, package manager, and development tools in one binary. toolchain-rs gives you a focused, inspectable implementation of that idea.

## Why toolchain-rs

toolchain-rs exists to make this workflow practical. Unified frontend toolchain — manages runtime, package manager, and development tools in one binary. It favours a small, inspectable surface over sprawling configuration.

## Features

- Development server with hot reload
- Production build pipeline
- `VERSION` — exported from `src/index.ts`
- Included test suite

## Tech Stack

- **Runtime:** Node.js, TypeScript

## How It Works

The codebase is organised into `src/`, `tests/`. The primary entry point is `src/index.ts`. `src/index.ts` exposes `VERSION` — the core types that drive the behaviour.

## Getting Started

```bash
npm install
npm run dev
```

## Usage

```bash
npm run dev
# Application starts on its configured port
```

## Project Structure

```
toolchain-rs/
├── LICENSE
├── README.md
├── index.html
├── package.json
├── src/
├── tests/
├── tsconfig.json
```