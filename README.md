# Playwright Learning with JavaScript

A structured learning repository for JavaScript fundamentals and Playwright automation testing. This repo contains hands-on code examples organized by chapters, covering everything from basic syntax to advanced concepts.

---

## Repository Structure

```
playwright-learning-js/
├── Chapter_01_Basics/                    # JavaScript Basics
│   ├── 01.Basic.js                        # Hello world & variable basics
│   ├── 02.JS.js                          # Simple variable logging
│   ├── 03_JS_Command.js                  # Node.js process info (platform, arch, version)
│   └── 04_HotCode.js                     # Function & loop performance example
│
├── Chapter_02_Javascript_Cocenpts/       # JavaScript Core Concepts
│   └── 05_JS_Basics.js                   # var declaration example
│
├── Chapter_03_Identifier_Literals/       # Identifiers, Literals & Naming Conventions
│   ├── 06_Identifier_Rules.js            # Complete identifier rules & examples
│   └── 07_Identifiers_Rules_Part2.js      # Naming conventions deep dive
│
└── VS_Code_Keyboard_Shortcuts_Windows.md  # Comprehensive VS Code shortcuts reference
```

---

## Chapters Overview

### Chapter 01 — Basics
Introduction to JavaScript fundamentals:
- `console.log()` and basic output
- Variable declarations (`let`)
- Node.js environment info (`process.platform`, `process.arch`, `process.version`)
- Functions and loops

### Chapter 02 — JavaScript Concepts
Core JavaScript concepts:
- Variable declarations (`var`, `let`, `const`)

### Chapter 03 — Identifiers & Literals
Comprehensive guide to JavaScript identifiers and naming conventions:
- **Valid identifiers** (starting with letters, `_`, `$`)
- **Case sensitivity** (`myVar` vs `MyVar` vs `MYVAR`)
- **Naming conventions** with live examples:
  - `camelCase` — variables, functions
  - `PascalCase` — classes, enums, components
  - `snake_case` — configs, API payloads
  - `UPPER_SNAKE_CASE` — constants, feature flags
  - `kebab-case` — CSS classes, file names (not JS identifiers!)
  - `Hungarian notation` — legacy type prefixes
  - `_leadingUnderscore` — private by convention
  - `trailingUnderscore_` — avoiding keyword conflicts
  - `$dollarPrefix` — DOM elements, jQuery, reactive stores
  - `__doubleUnderscore` — Node.js built-ins
  - Boolean prefixes (`is`, `has`, `should`, `can`, `did`, `will`)
- **Invalid identifiers** (commented-out examples that would throw SyntaxError)
- **Reserved keywords** (complete list)
- **Edge cases** and best practices

---

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v14+ recommended)

### Run a Chapter

```bash
# Run any JavaScript file with Node.js
node Chapter_01_Basics/01.Basic.js
node Chapter_01_Basics/03_JS_Command.js
node Chapter_03_Identifier_Literals/06_Identifier_Rules.js
```

---

## VS Code Shortcuts

A complete Windows keyboard shortcuts reference is included:

[VS_Code_Keyboard_Shortcuts_Windows.md](VS_Code_Keyboard_Shortcuts_Windows.md)

Categories covered:
- General, Basic Editing, Multi-Cursor & Selection
- Search & Replace, Navigation, Editor Management
- File Management, Display, Debug
- Integrated Terminal, Extensions, Git
- Refactoring, Snippets, Emmet

---

## Learning Path

1. **Start here:** `Chapter_01_Basics/` — get comfortable with JS syntax and Node.js
2. **Core concepts:** `Chapter_02_Javascript_Cocenpts/` — understand variable types
3. **Deep dive:** `Chapter_03_Identifier_Literals/` — master naming conventions and identifier rules
4. **Productivity boost:** Bookmark `VS_Code_Keyboard_Shortcuts_Windows.md`

---

## Tech Stack

| Technology | Version |
|------------|---------|
| JavaScript | ES6+ |
| Node.js | 14+ |
| VS Code | Latest |

---

## Contributing

This is a personal learning repository. Feel free to fork and adapt for your own learning journey!

---

## License

This project is for educational purposes.

---

*Happy Learning!* 🚀
