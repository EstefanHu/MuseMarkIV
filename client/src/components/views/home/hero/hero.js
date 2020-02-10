import React from 'react';

import Carousel from './carousel';

const Hero = () => {
  return (
    <section style={ hero }>
      <button style={carousel_button} className='isHidden' id='carousel_button--left'>
        <img src='../img/back.png' alt='' />
      </button>
      <Carousel />
      <button style={carousel_button} id='carousel_button--right'>
        <img src='../img/next.png' alt='' />  
      </button>
    </section>
  )
}

const hero = {
  width: '1200px',
  height: '500px',
  position: 'relative',
  margin: '0 auto',
}

const carousel_button = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'tranparent',
  border: '0',
  cursor: 'pointer'
}

export default Hero;