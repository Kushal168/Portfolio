// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a new context
const ThemeContext = createContext();

// Create a provider component to provide the theme state
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initial theme mode state

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode); // Toggle between light and dark mode
  };

  // Provide the current theme state and toggle function to the context
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
