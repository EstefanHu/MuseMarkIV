import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Genre = () => {
  const [post, setpost] = useState('');
  const { genre } = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/genre/' + genre)
      .then(res => res.json())
      .then(res => setpost(res.posts))
      .catch(console.error);
  }, [genre]);

  return post ? (
    <main>
      <section id='content'>

      </section>
    </main>
  ) : (
    <main>
      <h1>Looks like ${genre} doesnt have any submissions</h1>
    </main>
  )
}

export default Genre;