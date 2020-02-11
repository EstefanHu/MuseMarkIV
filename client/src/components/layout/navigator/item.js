import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
  return (
    <Link to={'/genre/' + props.name.replace(/\s/g, '').toLowerCase() }>{ props.name }</Link>
  )
}

export default Item;