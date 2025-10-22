
import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log("Theme changed to:", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* This div covers the entire viewport */}
      <div className={`app-container ${theme}-theme`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
