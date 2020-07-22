import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import blogs from '../data/blogs';

const BlogItem = () => {
  const { blogId } = useParams();
  const blog = blogs.filter((blog) => blog.id === blogId ? true : false);
  const struct = blog.map((blog) => (
    <div className="text-center">
      <img src={blog.image} alt={blog.title} className="d-block mx-auto mb-5" />
      <h1>{blog.title}</h1>
      <div>{blog.content}</div>
      <h2 className="mt-5">{blog.author}</h2>
    </div>
  ));
  return (
    <div>
      {struct}
    </div>
  );
};

export default BlogItem;
