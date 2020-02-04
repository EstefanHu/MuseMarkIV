import React, { useState, useEffect } from 'react';

import Hub from '../hub/hub';

const Home = () => {
  const [hubs, setHubs] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/home/')
      .then(res => res.json())
      .then(res => {
        setHubs(res.hubs)
      });
  }, []);

  return hubs ? (
    <section>
      {hubs.map(item => (
        <Hub
          key={ item.id }
          title={ item.title }
          img={ item.img }
        />
      ))}
    </section>
  ) : (
    <section>
      <p>Loading...</p>
    </section>
  )
}

export default Home;