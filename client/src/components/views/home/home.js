import React, {useState, useEffect } from 'react';

import './home.css';

import Nav from '../../layout/homenav/homenav';
import Navigator from '../../layout/navigator/navigator';
import Content from '../../layout/content/content';
import Hero from './hero/hero';
import Showcase from './showcase/showcase';

const Home = () => {
  const [posts, setPosts] = useState('');
  const [showcase, setShowcase] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/home')
      .then(res => res.json())
      .then(res => {
        setPosts(res.posts);
        setShowcase(res.showcase);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Nav />
      <Navigator />
      <Hero />
      <main>
        <Content posts={ posts }/>
        <Showcase item={ showcase }/>
      </main>
    </>
  )
}

export default Home;