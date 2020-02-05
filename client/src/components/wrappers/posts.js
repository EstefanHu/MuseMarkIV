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

  return (
    <section style={ posts }>
      {console.log(stories)}
    </section>
  )
}

const posts = {
  width: '400px',
  height: 'fit-content',
  padding: '10px 20px'
}

export default Posts