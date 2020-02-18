import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './genre.css';

import Nav from '../../layout/homenav/homenav';
import Hero from './hero';

const Genre = () => {
  const [post, setpost] = useState('');
  const { genre } = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/genre/' + genre.replace(/\s/g, '').toLowerCase())
      .then(res => res.json())
      .then(res => setpost(res.posts))
      .catch(console.error);
  }, [genre]);

  return (
    <>
      <Nav />
      <Hero title={ genre }/>
      <main>

      </main>
    </>
  )
}

export default Genre;