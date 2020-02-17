import React from 'react';

import './home.css';

import Nav from '../../layout/homenav/homenav';
import Navigator from '../../layout/navigator/navigator';
import Hero from './hero/hero';
import Showcase from './showcase/showcase';

const Home = () => {
  return (
    <>
      <Nav />
      <Navigator />
      <Hero />
      <main>
        <section id='content'>

        </section>
        <Showcase />
      </main>
    </>
  )
}

export default Home;