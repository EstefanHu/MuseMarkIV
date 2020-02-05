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
  marginBottom: '20px',
}

export default Hub;