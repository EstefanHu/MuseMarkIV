import React from 'react';

import Title from './title';
import Pitch from './pitch';

const Post = props => {
  return(
    <div style={ club }>
      <Title title={ props.title } />
      <Pitch pitch={ props.pitch } />
    </div>
  )
}

const club = {
  marginBottom: '20px',
}

export default Post;