import React from 'react';

import './home.css';

import Hero from './hero/hero';
import Hosts from '../../wrappers/posts';
import Content from '../../wrappers/content';

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <Content isBase={ true } />
        <Hosts />
      </main>
    </>
  )
}

export default Home;