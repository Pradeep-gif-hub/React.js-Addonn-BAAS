// src/components/ThemeToggle.jsx
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#222" : "#eee",
        color: theme === "light" ? "#fff" : "#000",
        padding: "12px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        marginBottom: "20px"
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
