// src/App.jsx
import Login from "./components/Login";
import Profile from "./components/Profile";
import ThemeToggle from "./components/ThemeToggle";
import UserContextProvider from "./context/UserContextProvider";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <ThemeToggle />
        <Login />
        <Profile />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
