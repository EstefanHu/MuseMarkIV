import React from 'react';

import Image from './image';

const Author = props => {
  return (
    <aside id='author__breakdown'>
      <Image />
      <h1>{ props.name }</h1>
      <p id='author__credibility'>Credibility: { props.credibility }</p>
      <p id='author__email'>{ props.email }</p>
    </aside>
  )
}

export default Author;