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
* 📄 **`src/components/prop/Props.tsx`** — Typed props example receiving and displaying a `name` string and an `age` number.
* 📄 **`src/components/prop/Button.tsx`** — Reusable button receiving a label and a typed mouse-click handler as props.
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
| **Props** | Passing typed text, numbers, labels, and event handlers to child components | [`Props.tsx`](src/components/prop/Props.tsx) |
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

---

## 🧭 How to Study This Lab

This repository is designed to be used as an interactive interview-preparation notebook rather than a finished product. Each lesson is intentionally small so that you can read the complete component, predict its output, and then verify your understanding in the browser.

### 1️⃣ Start with the active lesson

Open `src/App.tsx` to see which component is currently rendered. The parent component imports a lesson, places it inside `Comp`, and passes any required values or callbacks:

```tsx
<Comp>
	<Props name="Bhabesh" age={age} />
	<Button label="Hi me" handleClick={message} />
</Comp>
```

Only the examples that are included in the returned JSX appear on the page. The other lessons remain available as imports and JSX blocks that can be enabled when you are ready to practise them.

### 2️⃣ Read the types before the JSX

For each lesson, identify the data contract first:

- `ReactNode` describes content accepted by the reusable `Comp` wrapper.
- `string[]` and object types describe collection data in `ArrObj`.
- `boolean` controls the login message in `ConditionalRendering`.
- `{ name: string; age: number }` describes the data accepted by `Props`.
- `React.MouseEventHandler<HTMLButtonElement>` describes the button callback.
- `ChangeEvent<HTMLInputElement>` describes the typed input event in `FuncEvent`.

This habit makes the component API clear before you follow the render logic.

### 3️⃣ Predict, change, and explain

For every example, use this short practice loop:

1. Predict what the browser will display.
2. Change one value, condition, prop, or callback.
3. Run the app and compare the result with your prediction.
4. Explain why React rendered that result.
5. Run the type checker and linter before keeping the change.

This turns each small edit into an interview answer backed by working code.

## 🛠️ Available Commands

Run these commands from the project directory:

| Command | Purpose |
| :--- | :--- |
| `npm install` | Install the project dependencies. |
| `npm run dev` | Start Vite's development server with hot module replacement. |
| `npm run lint` | Check the project with ESLint. |
| `npm run build` | Run the TypeScript build and generate the production bundle. |
| `npm run preview` | Preview the generated production build locally. |

A useful verification sequence after editing a lesson is:

```bash
npm run lint
npm run build
```

## 🎤 Interview Discussion Checklist

Use the project to practise answering these questions in your own words:

### Components and props

- What is the difference between a parent component and a child component?
- Why are props useful for making `Button` reusable?
- Why should a child treat props as read-only?
- Why is a callback passed as a prop instead of placing the behavior inside every button?

### Rendering and data

- How does `.map()` turn an array into a list of JSX elements?
- Why does every mapped element need a stable `key`?
- Why is an object type useful when rendering user data?
- What is the difference between rendering a `string[]` and rendering an object array?

### Conditions and events

- How does the ternary operator choose between two JSX branches?
- What would change if `isLoggedIn` became `false`?
- What does `React.MouseEventHandler<HTMLButtonElement>` guarantee?
- What information can be read from `ChangeEvent<HTMLInputElement>`?

### Styling and application setup

- When is an inline style useful, and what are its limitations?
- Why do CSS Modules help avoid class-name collisions?
- What does `StrictMode` do during development?
- What role does `createRoot` play in starting the React application?

## 🚀 Next Practice Steps

The current examples provide a foundation for adding more interview topics without changing the existing lessons:

- Add a local `useState` value to switch `isLoggedIn` with a button.
- Move the user list into props so `ArrObj` can render different collections.
- Add a reusable prop type instead of repeating inline object types.
- Add a disabled state to `Button` and pass it from `App`.
- Add controlled input state to `FuncEvent` and display the typed value on screen.
- Add an empty-state message when the users array has no items.
- Add a loading and error branch to practise real API-style conditional rendering.

Keep each experiment small and isolated. The goal is to understand the React and TypeScript decision behind the code, not to hide several concepts inside one large component.

## ✅ Definition of Done for a Lesson

A lesson is ready to discuss in an interview when you can:

- Identify its inputs and output.
- Explain every type used by the component.
- Describe why each JSX element is rendered.
- Change the example without introducing a type error.
- Explain how the component could be made more reusable.
- Validate the change with `npm run lint` and `npm run build`.

---

## 📚 Learning Philosophy

React readiness comes from repetition with feedback. Read the component, make one deliberate change, observe the browser, inspect the types, and explain the result aloud. This lab keeps the examples deliberately focused so the important ideas remain visible.

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

## 🧩 Current Props Lesson

The active lesson in `src/App.tsx` demonstrates how a parent component passes data and behavior to reusable child components. The `Props` and `Button` components are rendered inside the `Comp` wrapper.

### 📦 Typed Data Props

`Props.tsx` receives `name` and `age` through a typed props object:

```tsx
export default function Props({ name, age }: { name: string; age: number }) {
	return (
		<div>
			hi my name is {name} and my age is {age}
		</div>
	);
}
```

The inline type requires:

| Prop | Type | Current value |
| :--- | :--- | :--- |
| `name` | `string` | `"Bhabesh"` |
| `age` | `number` | `20` |

The parent stores the age in a variable and passes both values into the component:

```tsx
const age = 20;

<Props name="Bhabesh" age={age} />
```

This demonstrates that props are read-only values supplied by the parent. TypeScript also prevents the component from receiving the wrong data type, such as a number for `name` or a string for `age`.

### 🖱️ Function Props in a Reusable Button

`Button.tsx` accepts both visible button text and a click callback:

```tsx
export default function Button({
	label,
	handleClick,
}: {
	label: string;
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<div>
			<button onClick={handleClick}>{label}</button>
		</div>
	);
}
```

The parent supplies two different labels and behaviors:

```tsx
<Button label="Hi me" handleClick={message} />
<Button label="Bye Me" handleClick={byeMessage} />
```

This example practises four important React patterns:

- 🧾 **Destructured props** — Child components read named values directly from the props object.
- 🔤 **Typed data** — `name`, `label`, and `age` each declare the type of value they accept.
- 🖱️ **Function as a prop** — The parent passes behavior without the child needing to know the implementation.
- ♻️ **Component reuse** — One `Button` component renders multiple buttons with different content and actions.

### 👀 Current Output

The active page displays:

```text
hi my name is Bhabesh and my age is 20

[Hi me]  [Bye Me]
```

Clicking `Hi me` runs the `message` function and shows `hi this is Bhabesh`. Clicking `Bye Me` runs `byeMessage` and shows `hi Bye`.

To practise the example, change the `name` or `age` passed to `Props`, add another button label, or pass a new callback to the reusable `Button` component.

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
│       ├── 📁 prop/
│       │   ├── 📄 Props.tsx                # Typed data props
│       │   └── 📄 Button.tsx               # Typed label and click props
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
