import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './post.css';

import Nav from '../../layout/nav/nav';

const Post = () => {
  const { post, setPost } = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/post/' + id)
      .then(res => res.json())
      .then(res => setPost(res.post))
      .catch(console.error);
  }, []);

  return post ? (
    <>
      <h1>Hello Post</h1>
    </>
  ) : (
    <>
      Loading...
    </>
  )
}

export default Post;