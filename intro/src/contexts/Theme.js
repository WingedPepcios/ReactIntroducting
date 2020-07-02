import React, { useState } from 'react';

const defaultValues = {
  backgroundColor: '#333',
  textColor: '#fff',
}

export const Theme = React.createContext();

// Wytłumaczyć problem z rerenderingiem naprzykładzie z useCallback
export const ThemeProvider = ({ children }) => {
  const [providerValue, setProviderValue] = useState(defaultValues);

  const changeTheme = (color) => {
    switch (color) {
      case 'light': {
        setProviderValue(
          {
            backgroundColor: '#f0f0f0',
            textColor: '#333',
          }
        );
        break;
      }
      default: {
        setProviderValue(
          {
            backgroundColor: '#333',
            textColor: '#fff',
          }
        );
        break;
      }
    }
  }

  return (
    <Theme.Provider value={{ ...providerValue, changeTheme }}>
      {children}
    </Theme.Provider>
  )
};
