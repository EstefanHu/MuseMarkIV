import React from 'react';

import Item from './item';

const Navigator = () => {
  const clubs = ['Write Away', 'AU', 'UW Poetry Club', 'The Daily', 'ASUWQSC'];

  return (
    <span style={ navigator }>
      {clubs.map(item => (
        <Item name={item} />
      ))}
    </span>
  )
}

const navigator = {
  display: 'flex',
  justifyContent: 'space-around',
  margin: '20px auto',
  width: '1000px',
  position: '-webkit-sticky',
  position: 'sticky',
  top: '0',
}

export default Navigator;