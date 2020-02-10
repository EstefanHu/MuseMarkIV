import React from 'react';

import Hero from '../layout/hero/hero';
import Hosts from '../wrappers/posts';
import Content from '../wrappers/content';

const Home = () => {
  return (
    <main>
      <Hero />
      <Content isBase={ true } />
      <Hosts />
    </main>
  )
}

export default Home;