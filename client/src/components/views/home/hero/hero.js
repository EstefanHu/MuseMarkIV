import React from 'react';

import Carousel from './carousel';
import Nav from './nav';

const Hero = () => {
  return (
    <section id='hero'>
      <button className='carousel_button isHidden' id='carousel_button--left'>
        <img src='../img/back.png' alt='' />
      </button>
      <Carousel />
      <button className='carousel_button' id='carousel_button--right'>
        <img src='../img/next.png' alt='' />  
      </button>
      <Nav />
    </section>
  )
}

export default Hero;