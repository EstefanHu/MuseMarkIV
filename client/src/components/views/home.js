import React, { useState, useEffect } from 'react';

import Hosts from '../wrappers/hosts';

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
    <main>
      <Hosts hubs={ hubs } />
      <section>
        
      </section>
    </main>
  ) : (
    <section>
      <p>Loading...</p>
    </section>
  )
}

export default Home;