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