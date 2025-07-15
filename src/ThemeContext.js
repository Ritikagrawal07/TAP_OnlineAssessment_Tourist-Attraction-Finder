import React, { createContext, useEffect, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default

  // Load saved theme from localStorage on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.body.setAttribute("data-theme", initialTheme);
  }, []);

  // Toggle between dark and light
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
