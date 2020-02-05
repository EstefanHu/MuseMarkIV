import React, { useState, useEffect } from 'react';

import Hero from '../hero/hero';
import Hosts from '../wrappers/hosts';
import Content from '../wrappers/content';

const Home = () => {
  return hubs ? (
    <main>
      <Hero />
      <Content isBase={ true } />
      <Hosts } />
    </main>
  ) : (
    <main>
      <p>Loading...</p>
    </main>
  )
}

export default Home;