import React from 'react';

const Hero = () => {
  return (
    <section style={ hero }>
      <img
        src='./hero.jpg'
        style={ img }
        alt='whoops'
      />
    </section>
  )
}

const hero = {
  width: '70vw',
  height: '500px',
  position: 'relative',
  overflow: 'hidden',
}

const img = {
  width: '100%'
}

export default Hero;