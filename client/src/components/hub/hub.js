import React, { useState, useEfffect } from 'react';

import Title from './title';

const Hub = props => {
  const [instance, setInstance] = setState();

  useEfffect(() => {
    console.log(props);
  }, []);

  return(
    <article style={ article}>
      <Title title={ title } />
    </article>
  )
}

const article = {
  height: '300px',
  width: '150px',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)',
  padding: '20px 30px'
}

export default Hub;