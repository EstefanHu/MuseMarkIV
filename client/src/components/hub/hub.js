import React, { useState, useEffect } from 'react';

import Title from './title';

const Hub = props => {
  return(
    <article style={ article }>
      <Title title={ props.title } />
    </article>
  )
}

const article = {
  height: '500px',
  width: '100%',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(255, 255, 255, .5)',
  marginBottom: '40px',
  borderRadius: '5px',
  overflow: 'hidden',
  position: 'relative'
}

export default Hub;