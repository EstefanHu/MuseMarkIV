import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
  const route = '/genre/' + props.name.replace(/\s/g, '');

  return (
    <Link to={ route }>{ props.name }</Link>
  )
}

export default Item;