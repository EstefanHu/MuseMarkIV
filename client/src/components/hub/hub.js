import React from 'react';

import Title from './title';
import Pitch from './pitch';

const Hub = props => {
  return(
    <article style={ article }>
      <Title title={ props.title } />
      <Pitch pitch={ props.pitch } />
    </article>
  )
}

const article = {
  marginBottom: '20px',
}

export default Hub;