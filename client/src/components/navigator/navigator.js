import React from 'react';
import { Link } from 'react-router-dom';

import Item from './item';

const Navigator = () => {
  const clubs = ['Write Away', 'AU', 'UW Poetry Club', 'Bricolage','The Daily', 'ASUWQSC'];

  return (
    <nav style={ nav }>
      <span style={ navigator}>
        {clubs.map(item => (
          <Item name={item} />
        ))}
      </span>
    </nav>
  )
}

const nav = {
  width: '100%',
  height: '50px',
  position: '-webkit-sticky',
  position: 'sticky',
  top: '0',
  backgroundColor: 'white',
  zIndex: '10'
}

const navigator = {
  display: 'flex',
  justifyContent: 'space-around',
  margin: '10px auto',
  padding: '18px 20px',
  width: '70vw',
  height: '30px',
}

export default Navigator;