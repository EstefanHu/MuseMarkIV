import React, { useState, useEffect } from 'react';

import Item from './item';

const Showcase = () => {
  const [post, setPost] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/showcase')
      .then(res => res.json())
      .then(res => setPost(res.showcase))
      .catch(console.error);
  }, []);

  return post ? (
    <aside id='showcase'>
      <h2>showcase on Muse</h2>
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
    <aside id='showcase'>
      Loading...
    </aside>
  )
}

export default Showcase;