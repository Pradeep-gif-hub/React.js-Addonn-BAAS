# Redux Toolkit Todo App

## Overview
This project is a **Todo Application** built using **React** and **Redux Toolkit (RTK)**.  
It allows users to **add** and **remove** todos easily while understanding how global state management works in React apps.

---

## What is Redux Toolkit (RTK)?
**Redux Toolkit (RTK)** is the official, recommended way to use **Redux** — it simplifies setting up stores, reducers, and actions.  
RTK helps manage **state** across multiple components efficiently and cleanly.

---

## Core Concepts

| Term | Description | Example in This Project |
|------|--------------|-------------------------|
| **Store** | Central place that holds the app’s global state. | Contains our todos list. |
| **State** | The current data of the app. | Each todo’s text and id. |
| **Action** | Describes what to do (add/remove). | `addTodo`, `removeTodo`. |
| **Reducer** | Decides how the state changes when actions occur. | Updates or filters todos. |
| **Slice** | Groups reducers and actions for one feature. | Defined in `todoSlice.js`. |
| **Dispatch** | Sends actions to reducers via the store. | `dispatch(addTodo())`. |
| **Selector** | Reads state from the store. | `useSelector((state) => state.todos)`. |

---

## How It Works (In This Project)

### 1️⃣ Creating a Slice
**File:** `todoSlice.js`
```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

```
## Creating the Store for the Dispatch or Selection
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

```
## `Main.jsx` as Provider for the Wrapping Up the App and Store
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);



```
## Folder Structure

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── todo/
│       └── todoSlice.js
│
├── components/
│   ├── AddTodo.jsx
│   ├── Todos.jsx
│   └── TodoStyles.css
│
├── App.jsx
└── main.jsx

```
## How to run 
```bash
1. create vite@latest
2. npm install
3. npm run dev
```
## For Further information visit 
[Redux-ToolKit ]("https://redux-toolkit.js.org/tutorials/quick-start")
# Thank You 