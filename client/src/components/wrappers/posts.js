import React, { useState, useEffect } from 'react';

import Hub from '../hub/hub';

const Posts = () => {
  const [stories, setStories] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/home/')
      .then(res => res.json())
      .then(res => {
        setStories(res.hubs)
      });
  }, []);

  return stories ? (
    <section style={ posts }>
      {stories.map(item => (
        <Hub
          key={ item.id }
          title={ item.title }
          pitch={ item.pitch }
        />
      ))}
    </section>
  ) : (
    <section>
      Loading...
    </section>
  )
}

const posts = {
  width: '400px',
  height: 'fit-content',
  padding: '10px 20px'
}

export default Posts