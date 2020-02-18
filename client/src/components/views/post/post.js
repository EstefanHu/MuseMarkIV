import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './post.css';

import Author from './author/author';
import Content from './content/content';

const Post = () => {
  const [ post, setPost ] = useState('');
  const [ author, setAuthor ] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/post/' + id)
      .then(res => res.json())
      .then(res => {
        setPost(res.post);
        setAuthor(res.author);
      })
      .catch(console.error);
  }, [id]);

  return (
    <main id='post__content'>
      <Author
        name={ author.firstName + ' ' + author.lastName }
        email={ author.email }
        credibility={ author.credibility }
      />
      <Content
        title={ post.title }
      />
    </main>
  )
}

export default Post;