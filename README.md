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
* 📄 **`src/components/arrayandobject/ArrObj.tsx`** — Module showcasing a typed user array, object looping, displayed indexes, and unique `key` props.
* 📄 **`src/components/conditionalrendering/ConditionalRendering.tsx`** — Conditional UI example showing different messages based on a login state.
* 📄 **`src/components/functionEvent/FuncEvent.tsx`** — Interactive component demonstrating click handling and typed input events (`ChangeEvent<HTMLInputElement>`).
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
| **Arrays & Objects** | Mapping typed user objects, displaying fields, indexes, and key handling | [`ArrObj.tsx`](src/components/arrayandobject/ArrObj.tsx) |
| **Conditional Rendering** | Showing different JSX based on a boolean login value | [`ConditionalRendering.tsx`](src/components/conditionalrendering/ConditionalRendering.tsx) |
| **Functions & Events** | Type-safe click handlers and input event tracking | [`FuncEvent.tsx`](src/components/functionEvent/FuncEvent.tsx) |
| **Styling Techniques** | Inline style objects vs scoped CSS Modules | [`Css.tsx`](src/components/css-use-example/Css.tsx) |
| **App Entry Point** | `StrictMode`, `createRoot`, and initial stylesheet mounts | [`main.tsx`](src/main.tsx) |

---

## 🔄 Current Array & Object Lesson

The active lesson in `src/App.tsx` is `ArrObj`. It is rendered inside the reusable `Comp` wrapper and currently demonstrates how a typed array of objects can be looped over and displayed in JSX.

### 🧱 User Object Type

Inside the component, each user must follow the `user` type definition:

```tsx
type user = {
	name: string;
	age: number;
	passion: string;
};
```

This gives every object a predictable structure:

| Property | Type | Example |
| :--- | :--- | :--- |
| `name` | `string` | `"Bhabesh"` |
| `age` | `number` | `40` |
| `passion` | `string` | `"coding"` |

The data is then stored in a typed collection:

```tsx
const users: user[] = [
	{ name: "Bhabesh", age: 40, passion: "coding" },
	{ name: "salman", age: 20, passion: "coding" },
	{ name: "Vijay", age: 30, passion: "coding" },
];
```

The `user[]` annotation means the array can contain only objects that satisfy the `user` shape. TypeScript will catch missing properties or incorrect values before the application runs.

### 🔁 Object Looping in JSX

The component uses `.map()` to create one list item for every object:

```tsx
{users.map((user: user, index: number) => (
	<li key={user.name}>
		<span>{index + 1}</span>
		<div>{user.name}</div>
		<div>{user.age}</div>
		<div>{user.passion}</div>
	</li>
))}
```

This example practises four important React patterns:

- 🔢 **Index display** — `index + 1` creates a user-friendly number beginning at `1`.
- 🧾 **Property access** — `user.name`, `user.age`, and `user.passion` render values from each object.
- 🏷️ **Stable list keys** — `key={user.name}` gives React an identity for each list item.
- 🧠 **Typed callback values** — `user` follows the object shape and `index` is a number.

The earlier fruit-array example is still preserved in comments above the object example. This makes it easy to compare mapping a simple `string[]` with mapping a structured object array.

### 👀 Current Output

The active page displays:

```text
Object looping

1  Bhabesh  40  coding
2  salman   20  coding
3  Vijay    30  coding
```

To practise the example, add another object to `users`, change a field value, or add another property to the `user` type and render it in the list.

---

## 🔐 Current Conditional Rendering Lesson

The active lesson in `src/App.tsx` is now `ConditionalRendering`. It is rendered inside the reusable `Comp` wrapper and demonstrates how React chooses which JSX to display from a boolean value.

### 🎛️ Login State

The component uses a boolean to represent whether the user is logged in:

```tsx
const isLoggedIn: boolean = true;
```

In a real application, this value could come from an API response, authentication context, or application state. Here it is kept as a fixed value so the conditional-rendering behavior is easy to understand.

### 🔀 Ternary Conditional

The `displayMessage` function accepts the login state and returns a typed React element:

```tsx
function displayMessage(isLoggedIn: boolean): ReactElement {
	const message: React.JSX.Element = isLoggedIn
		? <h1>Hi I am logged In</h1>
		: <h1>Please logged in</h1>;

	return message;
}
```

This uses the ternary operator:

- ✅ When `isLoggedIn` is `true`, React renders `Hi I am logged In`.
- 🔒 When `isLoggedIn` is `false`, React renders `Please logged in`.
- 🧠 The `boolean` type ensures the function receives a true or false value.
- 🧾 The `ReactElement` return type documents that the function returns renderable JSX.

The result is rendered directly inside a `<div>`:

```tsx
return (
	<div>
		{displayMessage(isLoggedIn)}
	</div>
);
```

The heading is returned by the conditional function itself and is not wrapped inside another `<h1>`. Keeping the markup valid prevents browsers from repairing the DOM structure differently from React, which can lead to hydration-style mismatch warnings.

### 👀 Current Output

Because `isLoggedIn` is currently `true`, the active page displays:

```text
Hi I am logged In
```

To practise the example, change `isLoggedIn` to `false` and observe the message change to `Please logged in`.

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
│       │   └── 📄 ArrObj.tsx          # Typed object looping & list rendering
│       ├── 📁 conditionalrendering/
│       │   └── 📄 ConditionalRendering.tsx # Boolean-based conditional UI
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
