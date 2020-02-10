import React from 'react';

import Item from './item';

const Navigator = () => {
  const clubs = [
    {
      "id": 1,
      "name": "Home"
    },
    {
      "id": 2,
      "name": "Poetry"
    },
    {
      "id": 3,
      "name": "Fiction"
    },
    {
      "id": 4,
      "name": "NonFiction"
    },
    {
      "id": 5,
      "name": "Speculative Fiction"
    },
    {
      "id": 6,
      "name": "YA"
    },
    {
      "id": 7,
      "name": "Graphic Novels"
    }
  ];

  return (
    <nav style={ nav }>
      <span style={ navigator}>
        {clubs.map(item => (
          <Item name={ item.name } key={ item.id }/>
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