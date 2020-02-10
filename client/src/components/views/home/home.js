import React from 'react';

import './home.css';

import Hero from './hero/hero';
import Trending from '../../layout/Trending/trending';

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <Trending />
      </main>
    </>
  )
}

export default Home;