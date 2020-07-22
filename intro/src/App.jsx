import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Aside from './layouts/Aside';
import Main from './layouts/Main';
import Blog from './layouts/Blog'
import BlogItem from './atoms/BlogItem'
import AddBlog from './layouts/AddBlog'

const App = () => {
  const [ logged, setLogged ] = useState(false);
  return (
    <div className="row">
      <Router>
        <Aside />
        <div className="col-12 col-md-9">
          <Switch>
            <Route exact path="/"><Main logged={logged} setLogged={setLogged} /></Route>
            <Route exact path="/dashboard">Dashboard</Route>
            <Route exact path="/settings">Settings</Route>
            <Route exact path="/blog"><Blog /></Route>
            <Route exact path="/addBlog"><AddBlog /></Route>
          </Switch>
          <Route path="/blog/:blogId"><BlogItem /></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
