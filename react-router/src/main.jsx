import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Github from "./pages/Github";
import { useLoaderData } from "react-router-dom";

// loader can also be used for the better loading experience
// as the user HOVERS the button for Github button then 
// it reloads the data in the background before navigating and keeps it in cache

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/github", element: <Github /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// // Loader function for GitHub page
// // This will fetch GitHub user data before the Github component renders
// export async function githubLoader() {
//   // Current API fetching user: pradeep-gif-hub
//   const res = await fetch("https://api.github.com/users/pradeep-gif-hub");
//   if (!res.ok) {
//     throw new Error("Failed to load GitHub data");
//   }
//   const data = await res.json();
//   return data; // will be available via useLoaderData in Github.jsx
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/contact", element: <Contact /> },
//       {
//         path: "/github",
//         element: <Github />,
//         loader: githubLoader, // pre-fetch GitHub data
//       },
//     ],
//   },
// ]);
