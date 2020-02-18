import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './post.css';

import Author from './author/author';
import Content from './content/content';
import Comments from './comments/comments';

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
    <>
      <Author
          name={ author.firstName + ' ' + author.lastName }
          email={ author.email }
          credibility={ author.credibility }
        />
      <main id='post__information'>
        <Content
          title={ post.title }
          genre={ post.genre }
          content= { post.content }
          date={ post.date }
        />
        <Comments
          comments={ post.comments }
        />
      </main>
    </>
  )
}

export default Post;