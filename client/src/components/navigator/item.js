import React from 'react';

const Item = props => {
  return (
    <p style={ item }>{ props.name }</p>
  )
}

const item = {
  color: 'grey',
  textTransform: 'uppercase',
  fontSize: '.85rem',
  fontWeight: '500'
}

export default Item;