# React Router Project — Example & Explanation

## Overview
This project demonstrates **React Router DOM** with a simple and attractive UI — showing navigation between pages **without reloading** the website.  
The pages include:
-  Home  
-  About  
-  Contact  
- GitHub (via API Fetch)

---

##  Folder Structure

---
```Folder 
react-router/
│
├── index.html
├── package.json
├── vite.config.js
└── src/
├── main.jsx
├── App.jsx
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ └── Header.css
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Contact.jsx
│ └── Github.jsx
└── App.css

```
##  Setup Instructions

```bash
npm install
npm install react-router-dom
npm run dev

```

# Steps of Execution of the Router ( through Virtual DOM )

## 1. Project → Dev server (what Vite does)

we run npm run dev.

Vite starts a dev server and serves index.html (no bundling long-term—it serves ES modules).

The browser loads index.html which contains a script tag that imports your src/main.jsx. Vite rewrites that import so the browser can load module files directly.

## 2 main.jsx — Entry point & router setup
main.jsx is the first JS module executed by the browser
 - What happens:-

ReactDOM.createRoot(...) attaches React to the real DOM element <div id="root">
RouterProvider renders your router tree. The top element is <App />. React will render <App /> into the real DOM root.

# 3. App.jsx — layout + Outlet 
Header and Footer  are always present.

**Outlet** is a placeholder, the router injects whichever child route matches (Home / About / Github) into that spot. That’s how the page content changes without reloading the whole page.

# 4. Component files & CSS linking
When you import "./Header.css" inside Header.jsx, Vite processes the CSS and injects it into a **style** tag in the page.That ties component styling to the app automatically.

JS imports are module imports; CSS imports are handled by Vite tooling and applied globally unless you use CSS modules.

# 5. Virtual DOM vs Real DOM (React internals, simply)

React creates a virtual DOM tree (JS objects) from your JSX.

When state/props change, React makes a new virtual DOM, diffs it against the previous virtual DOM, computes minimal updates, and applies those updates to the real DOM (this is reconciliation).
This is why useState/useEffect updates re-render parts of the UI efficiently.

# Structure ( App.jsx having **OUTLET** and main.jsx having **ROUTER**, **HEADER** having **NAVLINK** for each children (About,Home,Contact)  )


- Browser loads index.html from which script src/main.jsx is called for creating  BrowserRouter + RouterProvider

- App.jsx (layout)
   ├── Header.jsx (NavLinks)
   ├── <Outlet /> ← Renders current route component
   └── Footer.jsx
    

- Pages loaded dynamically:
   Home.jsx / About.jsx / Contact.jsx / Github.jsx

- The **A** tag is not used since it **Refreshes** every-time where as the from the REACT Navlink refreshes the section that is needed and creates the VDOM for it...

- AS there is **href** in the **A** tag for the links adn source,similarly in **Navlink** there is **To** reference...





