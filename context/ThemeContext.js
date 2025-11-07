import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to night mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode 
      ? {
          // Night Mode Colors
          background: '#000000',
          text: '#ffffff',
          cardBackground: '#1a1a1a',
          darkerCardBackground: '#0a0a0a',
          border: '#333333',
          glow: '#77777A', // UIndy Gray
        }
      : {
          // Day Mode Colors
          background: '#ffffff',
          text: '#000000',
          cardBackground: '#f5f5f5',
          darkerCardBackground: '#e5e5e5',
          border: '#e0e0e0',
          glow: '#B20A38', // UIndy Maroon for glow in day mode
        },
    headerColor: '#B20A38', // UIndy Maroon - same for both modes
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
