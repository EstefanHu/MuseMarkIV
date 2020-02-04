import React, { useState, useEffect } from 'react';

import Hub from '../hub/hub';

const Home = () => {
  const [hub, setHubs] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/dashboard/')
      .then(res => res.json())
      .then(res => {
        setHubs(res.hubs)
      });
  }, []);

  return hub ? (
    <section>
      {hub.map(item => (
        <Hub
          key={ item.id }
          title={ item.title }
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