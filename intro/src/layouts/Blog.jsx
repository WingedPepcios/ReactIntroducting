import React from 'react';
import {
  Link,
} from 'react-router-dom';

const blogs = [
  {
    id: 10,
    content: 'To jest kontent',
  }, 
  {
    id: 100,
    content: 'To jest kontent 2',
  }, 
  {
    id: 1000,
    content: 'To jest kontent 3',
  }, 
];

const Blog = () => {
  return (
    <div>
      {blogs.map((blogLink) => <div key={blogLink.id}><Link to={`/blog/${blogLink.id}`}>{blogLink.content}</Link></div>)}
    </div>
  );
};

export default Blog;
