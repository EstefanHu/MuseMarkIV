import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Nav from '../../layout/homenav/homenav';

const Genre = () => {
  const [post, setpost] = useState('');
  const { genre } = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/genre/' + genre)
      .then(res => res.json())
      .then(res => setpost(res.posts))
      .catch(console.error);
  }, [genre]);

  return (
    <>
      <Nav />
      <main>

      </main>
    </>
  )
}

export default Genre;