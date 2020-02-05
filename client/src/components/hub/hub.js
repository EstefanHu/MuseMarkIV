import React, { useState, useEffect } from 'react';

import Img from './img';
import Title from './title';

const Hub = props => {
  return(
    <article style={ article }>
      <Img src={ props.img } />
      <Title title={ props.title } />
    </article>
  )
}

const article = {
  height: '500px',
  width: '100%',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(255, 255, 255, .2)',
  marginBottom: '40px',
  borderRadius: '5px',
  overflow: 'hidden',
  position: 'relative'
}

export default Hub;