# React.js Addonn Backend as a Service ( BAAS)
<BR/>

# React Learning Journey
This repository documents my journey of learning **React**, exploring its core concepts, and building projects to strengthen my understanding.


## React JS Few Basic and Essential Terminology

# 1. Babel ( Conversion of JSX into JS ):-
- **Converts modern JavaScript (ES6+, JSX, TypeScript) into older JavaScript that browsers can understand**
- Allows you to write JSX in React, which browsers cannot natively run.
- <h8> Hello </h8> → React.createElement("h1", null, "Hello")
- with help of CreateElement it actually converts the JSX which is not readable by react to the JS format..
A tool that converts modern JavaScript (ES6+, JSX) into older JavaScript that browsers can understand.

Why it’s used in React: **Browsers can’t run JSX directly. Babel compiles it**

# 2. Fiber ( Core Engine inside React that controls how and when UI updates happen.):-
- React Fiber is the Re-Implementation of React’s core rendering engine (the “reconciler”) introduced in React 16
- The Fiber is mainly used for the rendering as per Re-implementation of the js formate.
- The UI was different earlier with ES-16 now the Implementation is based on FIBER...
- The order is mainly used which to render first in **UI on live server** .

- Before Fiber, React used the stack-based reconciliation (recursive updates).
- Blocking updates:- Large component trees could block the browser, causing lag.
- No priority system:- All updates were treated equally — no way to prioritize urgent updates (like animations).

# 3. Hydration ( Attaching React’s event listeners and state to already rendered HTML from the server )

- Hydration is the process in which React takes over HTML content that was rendered on the server (Server-Side Rendered HTML) and attaches event listeners and state to make it fully interactive on the client side.
- It is mostly used in Server-Side Rendering (SSR) frameworks like Next.js.


1. When a page is rendered on the server, it produces static HTML.
2. The HTML looks fine in the browser, but React components are not interactive yet (no clicks, no state updates).
3. Hydration allows React to “activate” the server-rendered HTML so the page behaves like a normal React app.
</Br>

# 4. Virtual DOM ( lightweight copy of the real DOM stored in memory for Faster and Smooth UI )
 
React uses it to efficiently update the UI.

It’s a copy of the actual DOM that React keeps in memory.

**Virtual DOM = React’s in-memory copy of the DOM, which allows fast and efficient UI updates without touching the real DOM unnecessarily**

# Why Virtual DOM ?

Directly manipulating the real DOM is slow and costly.

React solves this by:

1. Making changes in the Virtual DOM first (fast, in memory).
2. Comparing it with the previous Virtual DOM (diffing algorithm).
3. Updating only the parts of the real DOM that actually changed.

##  What I’m Learning
- JSX and Components  
- Props and State  
- Event Handling  
- Conditional Rendering  
- Lists and Keys  
- React Hooks (useState, useEffect, etc.)  
- Routing and Navigation  
- Project Structuring and Best Practices  

##  Tools & Setup

- React  
- Vite (for fast development and bundling)  
- Node.js  
- Git & GitHub  

## Goals

- Build a strong foundation in React  
- Understand how modern frontend apps work  
- Create small projects to apply every concept  
- Eventually build full-fledged applications  

##  Repository Structure


