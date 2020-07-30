import React, { useReducer } from 'react';

const defaultValues = {
  backgroundColor: '#333',
  textColor: '#fff',
}
const lightValues = {
  backgroundColor: '#e0e0e0',
  textColor: '#333',
}

export const Theme = React.createContext();

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 'DARK':
      return defaultValues;
    case 'LIGHT':
      return lightValues;
    default:
      return state;
  }
}

// Wytłumaczyć problem z rerenderingiem naprzykładzie z useCallback
export const ThemeProvider = ({ children }) => {
  const [providerValue, setProviderValue] = useReducer(reducer, defaultValues);

  return (
    <Theme.Provider value={{ ...providerValue, setProviderValue }}>
      {children}
    </Theme.Provider>
  )
};
