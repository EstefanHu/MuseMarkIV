import React from 'react';

import './home.css';

import Hero from './hero/hero';
import Trending from '../../layout/Trending/trending';

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <section className='content'>

        </section>
        <Trending />
      </main>
    </>
  )
}

export default Home;