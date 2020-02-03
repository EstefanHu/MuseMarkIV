import React, { useState, useEffect } from 'react';

import Title from './title';
import Genre from './genre';
import Credibility from './credibility';
import Description from './description';

const Card = props => {
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [credibility, setCredibility] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setGenre(props.genre);
    setAuthor(props.author);
    setCredibility(props.credibility);
    setTitle(props.title);
    setDescription(props.description);
  }, [
    props.genre,
    props.author,
    props.credibility,
    props.title,
    props.description
  ]);

  return (
    <article style={ article } >
      <span style={ header } >
        <p>
          <Genre genre={ genre } /> by { author }
        </p>
        <Credibility credibility={ credibility } />
      </span>
      <Title title={ title } />
      <Description description={ description } />
    </article>
  )
}

const article = {
  borderRadius: '5px',
  width: '600px',
  margin: '0px auto 35px auto',
  padding: '20px 25px',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)',
  fontSize: '1rem',
  color: 'rgb(61, 61, 61)',
  backgroundColor: 'rgb(255, 255, 255)'
}

const header = {
  display: 'flex',
  justifyContent: 'space-between'
}

export default Card;