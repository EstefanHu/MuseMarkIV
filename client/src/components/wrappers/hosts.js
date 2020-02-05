import React, { useState, useEffect } from 'react';

import Hub from '../hub/hub';

const Hosts = () => {
  const [stories, setStories] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/home/')
      .then(res => res.json())
      .then(res => {
        // setStories(res.hubs)
        console.log(res)
      });
  }, []);

  return (
    <section style={ hosts }>
      {stories.map(item => (
        <Hub
          key={ item.id }
          title={ item.title }
          pitch={ item.pitch }
        />
      ))}
    </section>
  )
}

const hosts = {
  width: '400px',
  height: 'fit-content',
  padding: '10px 20px'
}

export default Hosts