import React from 'react';

const Item = props => {
  return (
    <p style={ item }>{ props.name }</p>
  )
}

const item = {
  color: 'grey',
  textTransform: 'uppercase',
  fontSize: '.8rem',
  fontWeight: '500'
}

export default Item;