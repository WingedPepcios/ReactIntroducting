import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from './contexts/Theme';
import Dashboard from './layouts/Dashboard';


ReactDOM.render(
  <ThemeProvider>
    <Dashboard />
  </ThemeProvider>,
  document.getElementById('App'),
);
