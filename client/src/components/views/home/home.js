import React from 'react';

import './home.css';

import Nav from '../../layout/homenav/homenav';
import Navigator from '../../layout/navigator/navigator';
import Hero from './hero/hero';
import Trending from './Trending/trending';

const Home = () => {
  return (
    <>
      <Nav />
      <Navigator />
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