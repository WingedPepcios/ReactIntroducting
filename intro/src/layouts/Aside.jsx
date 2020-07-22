import React from 'react';
import {
  Link
} from 'react-router-dom';
import literals from '../data/literals'

const Aside = () => {
  return (
    <div className="col-12 col-md-3">
      <Link className="d-block" to="/">{literals.main}</Link>
      <Link className="d-block" to="/dashboard">{literals.dashboard}</Link>
      <Link className="d-block" to="/settings">{literals.settings}</Link>
      <Link className="d-block" to="/blog">{literals.blog}</Link>
      <Link className="d-block" to="/addBlog">{literals.addBlog}</Link>
    </div>
  );
};

export default Aside;
