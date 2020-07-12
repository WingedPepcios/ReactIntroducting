import React, { useState } from 'react';

export const Theme = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [themeValue, setThemeValue] = useState(
    {
      theme: 'dark',
      backgroundColor: '#333',
      color: '#fff',
    }
  );

  return (
    <Theme.Provider value={{ ...themeValue, setThemeValue }}>
      {children}
    </Theme.Provider>
  )
};