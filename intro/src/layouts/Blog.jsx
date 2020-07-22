import React from 'react';
import BlogMiniature from '../atoms/BlogMiniature';
import blogs from '../data/blogs';

const Blog = () => {
  const struct = blogs.map((blog) => <BlogMiniature key={blog.id} blog={blog} />);
  return (
    <div className="row">
      {struct}
    </div>
  );
};

export default Blog;
