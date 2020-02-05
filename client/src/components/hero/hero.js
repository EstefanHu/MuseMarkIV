import React from 'react';

const Hero = () => {
  return (
    <section style={ hero }>
      <img
        src='./hero.jpg'
        style={ img }
      />
    </section>
  )
}

const hero = {
  width: '100%',
  height: '100%',
  position: 'relative',
  gridArea: 'hero',
  overflow: 'hidden',
}

const img = {
  width: '100%'
}

export default Hero;