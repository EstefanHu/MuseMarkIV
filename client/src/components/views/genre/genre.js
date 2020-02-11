import React, { useState, useEffect } from 'react';

import Trending from '../../layout/Trending/trending';

const Genre = () => {
  const [post, setpost] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/genre')
      .then(res => res.json())
      .then(res => setpost(res.posts))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section id='content'>
      
      </section>
      <Trending />
    </main>
  )
}

export default Genre;