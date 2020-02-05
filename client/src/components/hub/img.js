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
  minWidth: '100%',
  position: 'absolute',
  zIndex: '-1',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export default Img;