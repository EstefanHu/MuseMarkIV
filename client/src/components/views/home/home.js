import React from 'react';

import './home.css';

import Hero from './hero/hero';
import Trending from './Trending/trending';

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <section id='content'>

        </section>
        <Trending />
      </main>
    </>
  )
}

export default Home;