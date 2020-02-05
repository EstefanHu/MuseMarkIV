import React from 'react';

const Item = props => {
  return (
    <a href='/' style={ item }>{ props.name }</a>
  )
}

const item = {
  color: 'grey',
  textTransform: 'uppercase',
  fontSize: '.85rem',
  fontWeight: '500',
  textDecoration: 'none',
}

export default Item;