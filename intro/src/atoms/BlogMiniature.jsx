import React from 'react';
import {
  Link
} from 'react-router-dom';

const BlogMiniature = ({ blog }) => {
  return (
    <div className="col-12 col-md-6 mb-5">
      <Link to={`/blog/${blog.id}`} ><strong className="d-block">{blog.title}</strong></Link>
      <Link to={`/blog/${blog.id}`} ><img src={blog.image} alt={blog.title} /></Link>
      <span className="d-block">{blog.content}</span>
    </div>
  );
};

export default BlogMiniature;
