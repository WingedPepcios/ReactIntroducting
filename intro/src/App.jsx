import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Dashboard from './layouts/Dashboard';
import Settings from './layouts/Settings';
import Blog from './layouts/Blog';
import BlogItem from './layouts/BlogItem';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/blog/:blogId">
        <BlogItem />
      </Route>
    </Router>
  );
};

export default App;
