import React from 'react';
import {
  useParams,
  useLocation,
  Redirect,
} from 'react-router-dom';
import { useEffect } from 'react';

const BlogItem = () => {
  const { category, blogId } = useParams();
  const location = useLocation();

  useEffect(
    () => {
      console.log(blogId);
    },
    [blogId],
  )

  console.log(location);

  // if (!category) {
  //   return <Redirect to="/" />
  // }

  return (
    <div>
      {category}
      <br/>
      {blogId}
    </div>
  );
};

export default BlogItem;
