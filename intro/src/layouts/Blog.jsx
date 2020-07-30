import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';

const blogsState = [
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
  const [blogs, setBlogs] = useState(blogsState);
  const location = useLocation();
  const inputRef = useRef({ count: 0 });

  // opcja B
  const renderBlogList = useCallback(
    () => {
      return blogs.map((blogLink) => <div key={blogLink.id}><Link to={`/blog/${blogLink.id}`}>{blogLink.content}</Link></div>);
    },
    [blogs],
  );
  
  useEffect(
    () => {
      setBlogs(blogsState);
      renderBlogList();
    },
    [location, renderBlogList],
  );

  useEffect(
    () => {
      console.log('dupa');
    },
    [inputRef.current.count]
  )

  const submit = () => {
    inputRef.current.count += 1;
    
    console.log(inputRef.current.count);
  };

  return (
    <div>
      <button onClick={() => submit()}>Test</button>
      {renderBlogList()}
      {inputRef.current.count}
    </div>
  );
};

export default Blog;
