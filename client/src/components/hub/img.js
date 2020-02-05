import React from 'react';

const Img = props => {
  const imgSrc = './imgs/' + props.src;
  return (
    <img src={ imgSrc }
         alt='whoops'
         style={ backgroundImg }
    />
  )
}

const backgroundImg = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  zIndex: '-1'
}

export default Img;