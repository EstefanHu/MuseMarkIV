import React, { useState, useEffect } from 'react';

import './trending.css';
import Item from './item';

const Trending = () => {
  const [post, setPost] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/trending')
      .then(res => res.json())
      .then(res => setPost(res.trending))
      .catch(console.error);
  }, []);

  return post ? (
    <aside id='trending'>
      <h2>Trending on Muse</h2>
      <hr/>
      {post.map((item, index) => (
        <Item
          key={ item.id }
          count={ index + 1 }
          title={ item.title }
          author={ item.author }
          date={ item.date }
        />
      ))}
    </aside>
  ) : (
    <aside id='trending'>
      Loading...
    </aside>
  )
}

export default Trending;