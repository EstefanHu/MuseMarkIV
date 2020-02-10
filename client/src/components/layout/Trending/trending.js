import React, { useState, useEffect } from 'react';

import './trending.css';

const Trending = () => {
  const [post, setPost] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/trending')
      .then(res => res.json())
      .then(res => setPost(res.posts))
      .catch(console.error);
  }, []);

  return post ? (
    <aside id='trending'>

    </aside>
  ) : (
    <aside id='trending'>
      Loading...
    </aside>
  )
}

export default Trending;