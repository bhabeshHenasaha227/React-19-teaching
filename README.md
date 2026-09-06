<div align="center">

# ⚡ React Readiness Lab ⚡

### *A complete, hands-on React 19 notebook for mastering modern interview concepts into clean, working code.*

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-41B883?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

</div>

## 🎯 Overview

Welcome to the **React Readiness Lab**! This project serves as a focused practice space for fundamental and advanced React patterns commonly evaluated in technical interviews:

- 🧩 **Component Composition & Typed Children**
- 🏷️ **Typed Props & Generics**
- 🔄 **Array & Object Iteration**
- ⚡ **Event Handling & Type-Safe Inputs**
- 🎨 **Modular Styling (Inline vs. CSS Modules)**

Every module is isolated in its own file so you can easily toggle, inspect, modify, and explain concepts out loud during live coding session practice.

---

## 🗂️ Complete File & Module Breakdown

Here is the exact purpose of every file in the repository:

### 🌐 Entry & Root Configuration
* 📄 **`index.html`** — HTML template and mounting point for Vite.
* 📄 **`src/main.tsx`** — Application entry point initializing `<React.StrictMode>` and `createRoot`.
* 📄 **`src/App.tsx`** — Master hub/dashboard where you toggle and render individual lesson modules.
* 🎨 **`src/index.css`** — Global CSS reset and baseline typography styles.
* 🎨 **`src/App.css`** — Outer layout and container styling for the lab viewport.

### 🧩 Components & Lesson Modules
* 📄 **`src/components/Comp.tsx`** — Reusable layout container demonstrating component composition with `React.ReactNode`.
* 📄 **`src/components/arrayandobject/ArrObj.tsx`** — Module showcasing array mapping, typed object structures, and unique `key` props.
* 📄 **`src/components/functionEvent/FuncEvent.tsx`** — Interactive component demonstrating typed event handlers (`React.MouseEvent`, `React.ChangeEvent<HTMLInputElement>`).
* 📄 **`src/components/css-use-example/Css.tsx`** — Styling sandbox demonstrating dynamic inline styles side-by-side with CSS Modules.
* 🎨 **`src/components/css-use-example/Css.module.css`** — Scoped CSS Module providing class isolation without global name collisions.

### ⚙️ Build & Tooling Setup
* 📄 **`package.json`** — Dependency specifications (`react`, `typescript`, `vite`) and script definitions.
* 📄 **`tsconfig.json`** / **`tsconfig.app.json`** / **`tsconfig.node.json`** — Strict TypeScript compiler options for the application and build process.
* 📄 **`eslint.config.js`** — Modern ESLint Flat Config enforcing React rules and TypeScript best practices.
* 📄 **`vite.config.ts`** — Vite bundler configuration and plugin setup.

---

## 🗺️ Lesson Quick Reference

| Module | What It Demonstrates | File |
| :--- | :--- | :--- |
| **Component Composition** | Passing typed `children` using `ReactNode` inside wrappers | [`Comp.tsx`](src/components/Comp.tsx) |
| **Arrays & Objects** | Mapping arrays, object properties, and key handling | [`ArrObj.tsx`](src/components/arrayandobject/ArrObj.tsx) |
| **Functions & Events** | Type-safe click handlers and input event tracking | [`FuncEvent.tsx`](src/components/functionEvent/FuncEvent.tsx) |
| **Styling Techniques** | Inline style objects vs scoped CSS Modules | [`Css.tsx`](src/components/css-use-example/Css.tsx) |
| **App Entry Point** | `StrictMode`, `createRoot`, and initial stylesheet mounts | [`main.tsx`](src/main.tsx) |

---

## 🌳 Repository Tree

```text
React-19-teaching/
├── 📁 public/                         # Static web assets
├── 📁 src/                            # Source application code
│   ├── 📄 App.tsx                     # Main lesson switcher
│   ├── 📄 main.tsx                    # React DOM entry point
│   ├── 🎨 App.css                     # Main app styling
│   ├── 🎨 index.css                   # Global styles reset
│   └── 📁 components/
│       ├── 📄 Comp.tsx                # Typed wrapper component
│       ├── 📁 arrayandobject/
│       │   └── 📄 ArrObj.tsx          # Array mapping & state rendering
│       ├── 📁 functionEvent/
│       │   └── 📄 FuncEvent.tsx       # Typed events & form controls
│       └── 📁 css-use-example/
│           ├── 📄 Css.tsx             # Inline style vs CSS Module example
│           └── 🎨 Css.module.css      # Scoped module styling
├── 📄 eslint.config.js                # Flat ESLint configuration
├── 📄 index.html                      # HTML root template
├── 📄 package.json                    # Project metadata & npm scripts
├── 📄 tsconfig.json                   # Base TypeScript config
├── 📄 tsconfig.app.json               # Frontend TS options
└── 📄 vite.config.ts                  # Vite build settings
